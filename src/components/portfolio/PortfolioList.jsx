import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import PopUpList from "../popUpInfoProyectos/PopUpList";

const PortfolioList = ({ infoProyectos, infoMenu }) => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("TODOS");
  const [infoVisible, setInfoVisible] = useState({});
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);

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

  const ocultarInfo = () => {
    setInfoVisible({});
  };

  const abrirPopUp = (index) => {
    setProyectoSeleccionado(index);
    document.body.classList.add("popup-open")
    
  };

  const cerrarPopUp = () => {
    setProyectoSeleccionado(null);
    document.body.classList.remove("popup-open")
  };



  return (
    <>
      {proyectoSeleccionado !== null ? (
        <PopUpList
          cerrarPopUp={cerrarPopUp}
          proyectosFiltrados={proyectosFiltrados}
          proyectoSeleccionado={proyectoSeleccionado}
        />
      ) : (
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
                onMouseLeave={() => ocultarInfo()}
                onClick={() => abrirPopUp(index)}
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
      )}
    </>
  );
};

export default PortfolioList;
