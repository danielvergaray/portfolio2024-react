import React from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";

const FooterList = ({ infoBotones, barraInferior }) => {
  const sectionRef4 = useRef(null);
  return (
    <section id="sectionRef4" ref={sectionRef4} className="footer-section">
      <h2>HABLEMOS ACERCA DEL PRÓXIMO PROYECTO JUNTOS.</h2>
      <div className="footer-botones">
        {infoBotones.map((boton, index) => (
          <Link to={boton.link} target="_blank" key={index}>
            <button>{boton.titulo}</button>
          </Link>
        ))}
      </div>

      <div className="footer-barraInferior">
        {barraInferior.map((info, index) => (
          <div key={index} className="footer-barraInferior_info">
            <div className="barraInferior_informacion">
              <h5>{info.titulo} </h5>
              <p>{info.dato}</p>
            </div>

            {info.link ? (
              <Link
                target="_blank"
                to={info.link}
                className="footer-barraInferior_info-icono"
              >
                {info.icono}
              </Link>
            ) : (
              <span className="footer-barraInferior_info-icono">
                {info.icono}
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FooterList;
