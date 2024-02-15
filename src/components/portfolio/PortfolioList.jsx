import React, { useState } from "react";

const PortfolioList = ({ infoProyectos, infoMenu }) => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("TODOS");

  const handleClick = (categoria) => {
    setCategoriaSeleccionada(categoria);
  };

  // Filtrar los proyectos basados en la categoría seleccionada
  const proyectosFiltrados =
    categoriaSeleccionada === "TODOS"
      ? infoProyectos
      : infoProyectos.filter(
          (proyecto) => proyecto.category.toLowerCase() === categoriaSeleccionada.toLowerCase()
        );

  return (
    <>
      <article className="portfolio-proyectos_barraMenu">
        {infoMenu.map((opcionMenu, index) => (
          <li key={index} onClick={() => handleClick(opcionMenu.titulo)}>
            {opcionMenu.titulo}
          </li>
        ))}
      </article>
      <section className="portfolio-proyectos">
        {proyectosFiltrados.map((proyecto, index) => (
          <div
            key={index}
            style={{ backgroundImage: `url(${proyecto.imagenRecuadro})` }}
            className="portfolio-proyectos_recuadro"
          >
            <h3 className="oculto">{proyecto.titulo}</h3>
            <p className="oculto">{proyecto.descripcionBreve}</p>
          </div>
        ))}
      </section>
    </>
  );
};

export default PortfolioList;