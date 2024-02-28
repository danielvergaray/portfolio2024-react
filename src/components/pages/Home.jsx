import React from "react";
import { useRef } from "react";
import imagenHero from "../../assets/imagenes/fotoHero2.png";
import imagenBio from "../../assets/imagenes/fotoBio.jpeg";
import PortfolioListContainer from "../portfolio/PortfolioListContainer";
import ClientesListContainer from "../seccionClientes/ClientesListContainer";
import EstudiosListContainer from "../estudios/EstudiosListContainer";

const Home = () => {
  const sectionRef1 = useRef(null);
  const sectionRef2 = useRef(null);
  const sectionRef3 = useRef(null);
  const sectionRef4 = useRef(null);

  const scrollFunction = (ref) => {
    console.log(ref);
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const info = [
    {
      imagenHero: imagenHero,
      title: [
        {
          type: "p",
          content: "Hola,",
        },
        {
          type: "span",
          content: "soy Daniel",
        },
      ],
      profesion: [
        {
          type: "p",
          content: "Programador Jr",
        },
        {
          type: "span",
          content: ".",
        },
      ],
      /* junior: [
        {
          type: "p",
          content: "Jr",
        },
        {
          type: "span",
          content: ".",
        },
      ], */

      imagenBio: imagenBio,
      bio: " Soy Daniel, ingeniero civil. En 2022, encontré mi pasión por la programación, lo que me llevó a reflexionar sobre la capacidad humana para adaptarse y reinventarse.",
      bio2: "Mi experiencia en coordinación de proyectos y manejo de personal ha fortalecido habilidades esenciales como la gestión de conflictos y la comunicación, fundamentales para mi desempeño en cualquier entorno laboral.",
    },
  ];

  const tituloArray = Object.values(info[0].title);
  const profesionArray = Object.values(info[0].profesion);
  /* const juniorArray = Object.values(info[0].junior); */

  return (
    <div className="home">
      <section className="home-info">
        <article className="home-info__hero">
          <div className="home-info__hero-title">
            <div className="home-titulo">
              {tituloArray.map((titulo, index) => (
                <div key={index}>
                  {titulo.type === "p" && (
                    <>
                      <p>{titulo.content}</p>
                    </>
                  )}
                  {titulo.type === "span" && (
                    <>
                      <span>{titulo.content}</span>
                    </>
                  )}
                </div>
              ))}
            </div>

            <div className="home-titulo_profesion">
              {profesionArray.map((profesion, index) => (
                <div key={index}>
                  {profesion.type === "p" && (
                  
                      <p>{profesion.content}</p>
                    
                  )}
                  {profesion.type === "span" && (
               
                      <span>{profesion.content}</span>
                   
                  )}
                </div>
              ))}
            </div>
        
            <div className="boton-contacto">
              <button>Contáctame</button>
            </div>
          </div>

          <div className="home-info__hero-image"
           style={{ backgroundImage: `url(${info[0].imagenHero})` }}>
            {/* <img src={info[0].imagenHero} alt="" /> */}
          </div>
        </article>

        <article id="sectionRef1" ref={sectionRef1} className="home-info__bio">
          <div className="home-info__bio-imagen">
            <img src={info[0].imagenBio} alt="" />
          </div>
          <div className="home-info__bio-biografia">
            <h3>Sobre mí</h3>
            <h2>¿Quien soy?</h2>
            <p> {info[0].bio} </p> <br />
            <p> {info[0].bio2} </p>
          </div>
        </article>
      </section>

      {/* PORTAFOLIO */}

      <section id="sectionRef2" ref={sectionRef2} className="portfolio">
        <h2>portfolio</h2>
        <PortfolioListContainer />
      </section>

      <section id="sectionRef3" ref={sectionRef3} className="seccion-estudios">
        <h2>estudios</h2>
        <EstudiosListContainer />
      </section>

      <section id="sectionRef4" ref={sectionRef4} className="seccionClientes">
        <h2>clientes</h2>
        <ClientesListContainer />
      </section>
    </div>
  );
};

export default Home;
