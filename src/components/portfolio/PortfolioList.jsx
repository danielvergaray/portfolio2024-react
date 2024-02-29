import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import PopUpList from "../popUpInfoProyectos/PopUpList";
import Aos from "aos";
import 'aos/dist/aos.css';

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
    document.body.classList.add("popup-open");
  };

  const cerrarPopUp = () => {
    setProyectoSeleccionado(null);
    document.body.classList.remove("popup-open");
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
        <div data-aos-easing="linear" data-aos-duration="1000" data-aos="fade-up">
          <article className="portfolio-proyectos_barraMenu">
            {infoMenu.map((opcionMenu, index) => (
              <NavLink key={index}
                className={
                  categoriaSeleccionada === opcionMenu.titulo
                    ? "portfolio-categoriaSeleccionada"
                    : "categoriaSinSeleccionar"
                }
                to="#"
                
                onClick={() => handleClick(opcionMenu.titulo)}
              >
                {opcionMenu.titulo}
              </NavLink>
            ))}
          </article>
          <section /* data-aos-easing="linear" data-aos-duration="1000" data-aos="flip-left" */ className="portfolio-proyectos">
            {proyectosFiltrados.map((proyecto, index) => (
              <div key={index}>
                <div>
                  <div className="portfolio-proyectos_recuadro"
                    
                    onMouseEnter={() => mostrarInfo(index)}
                    onMouseLeave={() => ocultarInfo()}
                    onClick={() => abrirPopUp(index)}
                    
                    style={{
                      backgroundImage: `url(${proyecto.imagenRecuadro})`,
                    }}
                  >
                    {infoVisible[index] && (
                      <div className="portfolio-proyectos_recuadro-info">
                        <h3>{proyecto.titulo}</h3>
                        <p>{proyecto.descripcionBreve}</p>
                        <div>
                          <button>Ver</button>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="portfolio-proyectos_recuadro-titulo">
                    <h4>{proyecto.titulo} </h4>
                  </div>
                </div>
              </div>
            ))}
          </section>
        </div>
      )}
    </>
  );
};

export default PortfolioList;
