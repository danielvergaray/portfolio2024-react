import React from "react";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import { useEffect } from "react";

const ClientesList = ({ clientes }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const [gruposClientes, setGruposClientes] = useState([]);

useEffect(() => {
  const grupos = [];
  for (let i = 0; i < clientes.length; i += 2) {
    grupos.push(clientes.slice(i, i + 2));
  }
  setGruposClientes(grupos);
}, [clientes]);

  return (
    <Carousel interval={5000} data-bs-theme="dark" activeIndex={index} onSelect={handleSelect}>
      {gruposClientes.map((grupo, index) => (
        <Carousel.Item key={index}>
          <div className="clientes-container">
            {grupo.map((cliente, index) => (
              <div key={index} className="clientes-card">
                <div className="card-frase">
                  <div className="card-quotesIcon-left">
                    <ImQuotesLeft />
                  </div>
                  <h3>{cliente.frase} </h3>
                  <div className="card-quotesIcon-right">
                    <ImQuotesRight />
                  </div>
                </div>
                <div className="card-comentario">
                  <p>{cliente.comentario}</p>
                </div>
                <div className="card-cliente">
                  <p>{cliente.nombre}</p>
                  <p>{cliente.empresa}</p>
                </div>
              </div>
            ))}
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ClientesList;
