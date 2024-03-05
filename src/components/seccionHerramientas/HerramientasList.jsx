import React from "react";
import Carousel from "react-bootstrap/Carousel";

const HerramientasList = ({ herramientas }) => {
  return (
    <div className="slider">
      <div className="slider-track">
        {herramientas.map((herramienta, index) => (
          <div className="slide" key={index}>
            <span>{herramienta.icono}</span>
            <p>{herramienta.nombre}</p>
          </div>
        ))}

        {herramientas.map((herramienta, index) => (  /* Se repite 2 veces para que sea infinito */
          <div className="slide" key={index}>
            <span>{herramienta.icono}</span>
            <p>{herramienta.nombre}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HerramientasList;
