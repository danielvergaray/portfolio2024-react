import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import PopUpList from "../popUpInfoProyectos/PopUpList";
import GeneralContext from "../context/GeneralContext";
import Aos from "aos";
import "aos/dist/aos.css";

const PortfolioList = ({ infoProyectos, infoMenu }) => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("TODOS");
  const [infoVisible, setInfoVisible] = useState({});
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);
  const [verMas, setVerMas] = useState(true);
  const [cantProductos, setCantProductos] = useState(6); //Para mostrar solamente 6 productos

  

  const handleClick = (categoria) => {
    setCategoriaSeleccionada(categoria);
  };

  // Filtrar los proyectos basados en la categoría seleccionada
  const proyectosFiltrados =
  categoriaSeleccionada === "TODOS" || categoriaSeleccionada === "ALL"
    ? infoProyectos
    : infoProyectos.filter(
        (proyecto) =>
          proyecto.category.toLowerCase() === categoriaSeleccionada.toLowerCase()
      );

  const mostrarInfo = (index) => {
    setInfoVisible({ ...infoVisible, [index]: true });
    setInformacion(true);
  };

  const [informacion, setInformacion] = useState(false);

  const ocultarInfo = () => {
    setInfoVisible({});
    setInformacion(false);
  };

  const abrirPopUp = (index) => {
    setProyectoSeleccionado(index);
    document.body.classList.add("popup-open");
    setInformacion(true);
    setInfoVisible({});
  };

  const cerrarPopUp = () => {
    setProyectoSeleccionado(null);
    document.body.classList.remove("popup-open");
    setInformacion(false);
  };
  const verMasProyectos = () => {
    setCantProductos(cantProductos + 6);
    setVerMas(!verMas);
  };

  const {idioma } = useContext(GeneralContext);

  return (
    <>
      {proyectoSeleccionado !== null ? (
        <PopUpList
          cerrarPopUp={cerrarPopUp}
          proyectosFiltrados={proyectosFiltrados}
          proyectoSeleccionado={proyectoSeleccionado}
        />
      ) : (
        <div
          data-aos-easing="linear"
          data-aos-duration="1000"
          data-aos="fade-up"
        >
          <article
            className="portfolio-proyectos_barraMenu"
            data-aos-easing="linear"
            data-aos-duration="1000"
            data-aos="fade-up"
          >
            {infoMenu.map((opcionMenu, index) => (
              <NavLink
                key={index}
                className={
                  categoriaSeleccionada === opcionMenu.titulo
                    ? "portfolio-categoriaSeleccionada"
                    : "categoriaSinSeleccionar"
                }
                to="#"
                onClick={() => handleClick(opcionMenu.titulo)}
              >
                {opcionMenu.titulo}
                <span></span>
              </NavLink>
            ))}
          </article>

          <section className="portfolio-proyectos">
            {proyectosFiltrados.slice(0, cantProductos).map(
              (
                proyecto,
                index // Se usa el slice par amostrar solamente 6 productos
              ) => (
                <div key={index}>
                  <div>
                    <div
                      className="portfolio-proyectos_recuadro"
                      onMouseEnter={() => mostrarInfo(index)}
                      onMouseLeave={() => ocultarInfo()}
                      onClick={() => abrirPopUp(index)}
                      style={{
                        backgroundImage: `url(${proyecto.imagenRecuadro})`,
                      }}
                    >
                      {infoVisible[index] && informacion && (
                        <div className="portfolio-proyectos_recuadro-info">
                          <h3>{proyecto.titulo}</h3>
                          <p>{proyecto.descripcionBreve}</p>
                          <div>
                            <button>{idioma ==="ESP" ? "Ver más" : "View more"}</button>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="portfolio-proyectos_recuadro-titulo">
                      <h4>{proyecto.titulo} </h4>
                    </div>
                  </div>
                </div>
              )
            )}
          </section>

          <section className="portfolio-proyectos-mobile">
            {proyectosFiltrados.slice(0, cantProductos).map(
              (
                proyecto,
                index // Se usa el slice par amostrar solamente 6 productos
              ) => (
                <div key={index}>
                  <div>
                    <div
                      className="portfolio-proyectos_recuadro"
                      onClick={() => abrirPopUp(index)}
                      style={{
                        backgroundImage: `url(${proyecto.imagenRecuadro})`,
                      }}
                    ></div>
                    <div className="portfolio-proyectos_recuadro-titulo">
                      <h4>{proyecto.titulo} </h4>
                    </div>
                  </div>
                </div>
              )
            )}
          </section>

          {verMas && proyectosFiltrados.length > 6 && (
            <section className="portfolio-boton-ver-mas">
              <button onClick={verMasProyectos}>{idioma ==="ESP" ? "Ver más proyectos" : "See more projects"} </button>
            </section>
          )}
        </div>
      )}
    </>
  );
};

export default PortfolioList;
