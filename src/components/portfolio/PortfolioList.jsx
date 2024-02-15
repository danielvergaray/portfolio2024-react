import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const PortfolioList = ({ infoProyectos, infoMenu }) => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("TODOS");
  const [infoVisible, setInfoVisible] = useState({});

  const handleClick = (categoria) => {
    setCategoriaSeleccionada(categoria);
  };

  // Filtrar los proyectos basados en la categoría seleccionada
  const proyectosFiltrados =
    categoriaSeleccionada === "TODOS"
      ? infoProyectos
      : infoProyectos.filter(
          (proyecto) =>
            proyecto.category.toLowerCase() ===
            categoriaSeleccionada.toLowerCase()
        );

  const mostrarInfo = (index) => {
    setInfoVisible({ ...infoVisible, [index]: true });
  };
  const ocultarInfo = (index) => {
    setInfoVisible({ ...infoVisible, [index]: false });
  };

  return (
    <>
      <article className="portfolio-proyectos_barraMenu">
        {infoMenu.map((opcionMenu, index) => (
          <NavLink
            className={
              categoriaSeleccionada === opcionMenu.titulo
                ? "portfolio-categoriaSeleccionada"
                : "categoriaSinSeleccionar"
            }
            to="#"
            key={index}
            onClick={() => handleClick(opcionMenu.titulo)}
          >
            {opcionMenu.titulo}
          </NavLink>
        ))}
      </article>
      <section className="portfolio-proyectos">
        {proyectosFiltrados.map((proyecto, index) => (
          <div
            onMouseEnter={() => mostrarInfo(index)}
            onMouseLeave={() => ocultarInfo(index)}
            key={index}
            style={{ backgroundImage: `url(${proyecto.imagenRecuadro})` }}
            className="portfolio-proyectos_recuadro"
          >
            {infoVisible[index] && (
              <div className="portfolio-proyectos_recuadro-info">
                <div>
                  <FaSearch />
                </div>

                <h3>{proyecto.titulo}</h3>
                <p>{proyecto.descripcionBreve}</p>
              </div>
            )}
          </div>
        ))}
      </section>
    </>
  );
};

export default PortfolioList;
