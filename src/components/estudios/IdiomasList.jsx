import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaCircleArrowRight } from "react-icons/fa6";
import { FaCircleArrowLeft } from "react-icons/fa6";
import "animate.css/animate.min.css";

const IdiomasList = ({ infoCursos, categoriaSeleccionada }) => {
  const [tarjetaActiva, setTarjetaActiva] = useState(null);

  const toggleMostrarInfo = (index) => {
    setTarjetaActiva(tarjetaActiva === index ? null : index);
    /* iniciarAnimacion() */
  };

  const [animacion, setAnimacion] = useState(false);

  const iniciarAnimacion = () => {
    setAnimacion(!animacion);
  };

  return (
    <>
      {categoriaSeleccionada === "IDIOMAS" && (
        <>
          {infoCursos.map((idioma, index) => (
            <>
              {tarjetaActiva !== index ? (
                <Card
                  className="cards"  
                  key={index}
                >
                  <Card.Body>
                    <div className="cards-iconos">
                      <img src={idioma.bandera} alt="" />
                    </div>
                    <div className="cards-titulos">
                      <p>{idioma.titulo}</p>
                    </div>
                    <div className="cards-flechas">
                      <FaCircleArrowRight
                        onClick={() => toggleMostrarInfo(index)}
                        variant="primary"
                      />
                    </div>
                  </Card.Body>
                </Card>
              ) : (
                <Card
                  className= "animate__animated animate__flipInY cards"
                  key={index}
                >
                  <Card.Body className="cards-informacion">
                    <div className="cards-nivel">
                      <p>{idioma.nivel} </p>
                    </div>
                    <div className="cards-titulos">
                      <p>{idioma.titulo}</p>
                    </div>
                    <div className="cards-descripcion">
                      <p>{idioma.descripcion}</p>
                    </div>
                    <div className="cards-flechas">
                      <FaCircleArrowLeft
                        onClick={() => toggleMostrarInfo(index)}
                        variant="primary"
                      />
                    </div>
                  </Card.Body>
                </Card>
              )}
            </>
          ))}
        </>
      )}
    </>
  );
};

export default IdiomasList;
