import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import CarouselMaker from "../carousel/CarouselMaker";
import { Link } from "react-router-dom";

const PopUpList = ({
  cerrarPopUp,
  proyectosFiltrados,
  proyectoSeleccionado,
}) => {
  const arrayProyecto = proyectosFiltrados[proyectoSeleccionado];

  return (
    <>
      <div className="popup-container">
        <div className="popup">
          <div className="popup-inner">
            <div className="popup-imagenes">
              <CarouselMaker
                proyectosFiltrados={proyectosFiltrados}
                proyectoSeleccionado={proyectoSeleccionado}
              />
            </div>
            <div className="popup-informacion">
              <div className="popup-botonCerrar">
                <AiOutlineClose onClick={cerrarPopUp} />
              </div>
              <div className="popup-titulo">
                <h2>{proyectosFiltrados[proyectoSeleccionado].titulo}</h2>
              </div>
              <div className="popup-descripcion">
                <p>{proyectosFiltrados[proyectoSeleccionado].descripcion}</p>
              </div>
              <div className="popup-botones">
                <Link
                  target="_blank"
                  to={proyectosFiltrados[proyectoSeleccionado].linkWeb}
                >
                  <button>
                    {proyectosFiltrados[proyectoSeleccionado].tituloWeb}
                  </button>
                </Link>
                {proyectosFiltrados[proyectoSeleccionado].linkRepositorio && (
                  <Link
                    target="_blank"
                    to={
                      proyectosFiltrados[proyectoSeleccionado].linkRepositorio
                    }
                  >
                    <button>
                      {
                        proyectosFiltrados[proyectoSeleccionado]
                          .tituloRepositorio
                      }
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="popup-container-mobile">
        <div className="popup">
          <div className="popup-inner">
            <div className="popup-botonCerrar">
              <AiOutlineClose onClick={cerrarPopUp} />
            </div>
            <div className="popup-titulo">
              <h2>{proyectosFiltrados[proyectoSeleccionado].titulo}</h2>
            </div>
            <div className="popup-imagenes">
              <CarouselMaker
                proyectosFiltrados={proyectosFiltrados}
                proyectoSeleccionado={proyectoSeleccionado}
              />
            </div>
            <div className="popup-descripcion">
                <p>{proyectosFiltrados[proyectoSeleccionado].descripcion}</p>
              </div>
              <div className="popup-botones">
                <Link
                  target="_blank"
                  to={proyectosFiltrados[proyectoSeleccionado].linkWeb}
                >
                  <button>
                    {proyectosFiltrados[proyectoSeleccionado].tituloWeb}
                  </button>
                </Link>
                {proyectosFiltrados[proyectoSeleccionado].linkRepositorio && (
                  <Link
                    target="_blank"
                    to={
                      proyectosFiltrados[proyectoSeleccionado].linkRepositorio
                    }
                  >
                    <button>
                      {
                        proyectosFiltrados[proyectoSeleccionado]
                          .tituloRepositorio
                      }
                    </button>
                  </Link>
                )}
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopUpList;
