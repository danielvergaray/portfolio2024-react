import React, { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { TbPointFilled } from "react-icons/tb";
import IdiomasList from "./IdiomasList";
import Carousel from "react-bootstrap/Carousel";

const EstudiosList = ({ infoCursos, infoMenu }) => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] =
    useState("PROGRAMACION");

  const handleClick = (categoria) => {
    setCategoriaSeleccionada(categoria);
  };

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  const proyectosFiltrados =
    categoriaSeleccionada === "PROGRAMACION"
      ? infoCursos
      : infoCursos.filter(
          (proyecto) =>
            proyecto.categoria.toLowerCase() ===
            categoriaSeleccionada.toLowerCase()
        );

  useEffect(() => {
    const handleScroll = () => {
      const estudiosSection = document.querySelector(".seccion-estudios");
      const offset = window.innerHeight - estudiosSection.offsetHeight; // Calcula el desplazamiento adicional necesario para activar AOS
      if (window.scrollY > estudiosSection.offsetTop + offset) {
        // Si el usuario ha desplazado lo suficiente hacia abajo
        Aos.init({ duration: 500 });
        window.removeEventListener("scroll", handleScroll); // Elimina el escuchador de eventos de desplazamiento para evitar que AOS se active nuevamente
      }
    };

    window.addEventListener("scroll", handleScroll); // Agrega un escuchador de eventos de desplazamiento para activar AOS cuando se haga scroll

    return () => {
      // Retorna una función de limpieza que se ejecutará al desmontar el componente
      window.removeEventListener("scroll", handleScroll); // Elimina el escuchador de eventos de desplazamiento para evitar problemas de rendimiento
    };
  }, []);

  return (
    <>
      <article className="estudios-proyectos_barraMenu">
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
          </NavLink>
        ))}
      </article>

      <article className="estudios-programacion">
        {categoriaSeleccionada === "PROGRAMACION" ? (
          <>
            {proyectosFiltrados.map((proyecto, index) => (
              <div key={index}>
                {proyecto.id ? (
                  proyecto.id % 2 !== 0 ? (
                    <div className="estudios-timeLine">
                      <div
                        data-aos="fade-right"
                        className="estudio-recuadro estudio-recuadro-impar"
                      >
                        <h3>{proyecto.titulo}</h3>
                        <p>{proyecto.instituto}</p>
                        <p>{proyecto.descripcion}</p>
                        <p>{proyecto.iconos}</p>
                      </div>
                      <div
                        data-aos="fade-up"
                        className="estudios-timeLine_line"
                      >
                        <TbPointFilled />
                      </div>
                      <div data-aos="fade-left" className="fecha-derecha">
                        <p>{proyecto.duracion}</p>
                      </div>
                    </div>
                  ) : (
                    <div className="estudios-timeLine">
                      <div
                        data-aos="fade-left"
                        className="estudio-recuadro estudio-recuadro-par"
                      >
                        <h3>{proyecto.titulo}</h3>
                        <p>{proyecto.instituto}</p>
                        <p>{proyecto.descripcion}</p>
                        <p>{proyecto.iconos}</p>
                      </div>
                      <div
                        data-aos="fade-up"
                        className="estudios-timeLine_line"
                      >
                        <TbPointFilled />
                      </div>
                      <div data-aos="fade-right" className="fecha-izquierda">
                        <p>{proyecto.duracion}</p>
                      </div>
                    </div>
                  )
                ) : null}
              </div>
            ))}
          </>
        ) : (
          <article className="estudios-idiomas">
            <IdiomasList
              infoCursos={proyectosFiltrados}
              categoriaSeleccionada={categoriaSeleccionada}
            />
          </article>
        )}
      </article>

      <article className="estudios-programacion-mobile">
        {categoriaSeleccionada === "PROGRAMACION" ? (
          <>
          <Carousel activeIndex={index} onSelect={handleSelect}>
            {proyectosFiltrados.map((proyecto, index) => (
              <Carousel.Item key={index}>
                {proyecto.id ? (
                  <div
                    className="estudio-recuadro"
                  >
                    <h3>{proyecto.titulo}</h3>
                    <p>{proyecto.instituto}</p>
                    <p>{proyecto.descripcion}</p>
                    <p>{proyecto.iconos}</p>
                  </div>
                ) : null}
              </Carousel.Item>
            ))}
           </Carousel>
          </>
        ) : (
          <article className="estudios-idiomas">
            <IdiomasList
              infoCursos={proyectosFiltrados}
              categoriaSeleccionada={categoriaSeleccionada}
            />
          </article>
        )}
      </article>
    </>
  );
};

export default EstudiosList;
