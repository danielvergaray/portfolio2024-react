import React from "react";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

const ClientesList = ({ clientes }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel data-bs-theme="dark" activeIndex={index} onSelect={handleSelect}>
      {clientes.map((cliente, index) => (
        <Carousel.Item key={index}>
          <Card>
            <Card.Body>
              <div className="card-quotesIcon-left">
                <ImQuotesLeft />
              </div>
              <br />
              <Card.Title>{cliente.comentario}</Card.Title>
              
              <div className="card-quotesIcon-right">
                <ImQuotesRight />
              </div>
              <Card.Text>
                <p className="card-texto-cliente">{cliente.nombre}</p>
                <p className="card-texto-cliente">{cliente.empresa}</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ClientesList;
