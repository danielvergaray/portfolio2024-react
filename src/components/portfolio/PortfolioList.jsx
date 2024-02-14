import React from "react";
import { useState } from "react";

const PortfolioList = ({ infoProyectos, infoMenu }) => {
 
const [proyectos, setProyectos]= useState("")

  const handleClick = (opcionMenu) => {
    
    console.log(opcionMenu.opcionMenu.titulo);
  };

  return (
    <>
      <article className="portfolio-proyectos_barraMenu">
        {infoMenu.map((opcionMenu) => (
          <li onClick={()=> handleClick({opcionMenu})} 
          > {opcionMenu.titulo} </li>
        ))}
      </article>
      <section className="portfolio-proyectos">
        {infoProyectos.map((proyecto) => (
          <div
            style={{ backgroundImage: `url(${proyecto.imagenRecuadro})` }}
            className="portfolio-proyectos_recuadro"
          >
            <h3 className="oculto">{proyecto.titulo} </h3>
            <p className="oculto">{proyecto.descripcionBreve} </p>
          </div>
        ))}
      </section>
    </>
  );
};

export default PortfolioList;
