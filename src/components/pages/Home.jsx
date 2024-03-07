import React from "react";
import { useRef, useEffect } from "react";
import imagenHero from "../../assets/imagenes/FOTO-HOME.jpg";
import imagenBio from "../../assets/imagenes/FOTO-BIO1.jpeg";
import PortfolioListContainer from "../portfolio/PortfolioListContainer";
import ClientesListContainer from "../seccionClientes/ClientesListContainer";
import EstudiosListContainer from "../estudios/EstudiosListContainer";
import HerramientasListContainer from "../seccionHerramientas/HerramientasListContainer";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Home = () => {
  const sectionRef1 = useRef(null);
  const sectionRef2 = useRef(null);
  const sectionRef3 = useRef(null);
  const sectionRef4 = useRef(null);
  const sectionRef5 = useRef(null);
  const sectionRef6 = useRef(null);

  const scrollFunction = (ref) => {
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
      bio: " Mi nombre es Daniel, soy ingeniero civil de profesión. Esta carrera me ha llevado a conocer distintos aspectos de la vida como el hecho de que el ser humano es capaz de muchas cosas siempre que lo crea posible, capaz de adaptarse a cualquier situación y reinventarse las veces que sean necesarias. Es este último tópico que me llevo a darme cuenta que quería darle un rumbo a mi vida. Es por eso que desde el año 2022 encontré lo que me apasiona. Comencé a entrar al mundo de la programación porque jamás es tarde para volver a empezar.",
      bio2: "A nivel profesional, como ingeniero civil he tenido experiencia en coordinación de proyectos, manejo de personal y trabajo en equipo. Experiencias que me han ayudado a mejorar habilidades blandas como gestión de conflictos, manejo del estrés, habilidades de comunicación, entre otras. Las cuales son fundamentales en el desempeño de actividades diarias dentro de cualquier empresa.",
    },
  ];

  const tituloArray = Object.values(info[0].title);
  const profesionArray = Object.values(info[0].profesion);

  useEffect(() => {
    Aos.init();
  }, [{ duration: 500 }]);

  return (
    <div className="home">
      <section className="home-info">
        <article className="home-info__hero">
          <div className="home-info__hero-title">
            <div className="home-titulo">
              {tituloArray.map((titulo, index) => (
                <div
                  data-aos-easing="linear"
                  data-aos="fade-down"
                  data-aos-duration="1000"
                  key={index}
                >
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
                <div
                  data-aos-easing="linear"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  key={index}
                >
                  {profesion.type === "p" && <p>{profesion.content}</p>}
                  {profesion.type === "span" && (
                    <span>{profesion.content}</span>
                  )}
                </div>
              ))}
            </div>

            <div
              className="boton-contacto"
              data-aos-easing="linear"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <Link target="_blank" to="https://wa.me/51950011434">
                <button>Contáctame</button>
              </Link>
            </div>
          </div>
        </article>

        <div id="sectionRef1" ref={sectionRef1} className="home-info__bio ">
          <div className="info-container-desktop">
            <div className="home-info__bio-imagen">
              <img
                data-aos-easing="linear"
                data-aos="fade-right"
                data-aos-duration="1000"
                src={info[0].imagenBio}
                alt="Imagen-Daniel-Vergaray"
              />
            </div>

            <div
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="2400"
              className="home-info__bio-biografia"
            >
              <h3
                data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="800"
              >
                Sobre mí
              </h3>
              <h2
                data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="1600"
              >
                ¿Quien soy?
              </h2>
              <p> {info[0].bio} </p> <br />
              <p> {info[0].bio2} </p>
            </div>
          </div>

          <article className="home-info__bio-mobile"
            
            id="sectionRef1"
            ref={sectionRef1}
          >
            <h3
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1600"
            >
              Sobre mí
            </h3>
            <h2
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="800"
            >
              ¿Quien soy?
            </h2>
            <div className="home-info__bio-imagen">
              <img
                src={info[0].imagenBio}
                data-aos-easing="linear"
                data-aos="fade-up"
                data-aos-duration="1000"
                alt="Imagen-Daniel-Vergaray"
              />
            </div>
            <div
              className="home-info__bio-biografia"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="2400"
            >
              <p> {info[0].bio} </p> <br />
              <p> {info[0].bio2} </p>
            </div>
          </article>
        </div>
      </section>

      {/* PORTAFOLIO */}

      <section id="sectionRef2" ref={sectionRef2} className="portfolio">
        <h2 data-aos-easing="linear" data-aos-duration="500" data-aos="fade-up">
          portfolio
        </h2>
        <PortfolioListContainer />
      </section>

      {/* ESTUDIOS */}
      <section
        data-aos-easing="linear"
        data-aos-duration="500"
        data-aos="fade-up"
        id="sectionRef3"
        ref={sectionRef3}
        className="seccion-estudios"
      >
        <h2>estudios</h2>
        <EstudiosListContainer />
      </section>

      <section
        className="herramientas"
        data-aos-easing="linear"
        data-aos-duration="500"
        data-aos="fade-up"
      >
        <h2>CONOCIMIENTOS</h2>
        <HerramientasListContainer />
      </section>

      <section
        data-aos-easing="linear"
        data-aos-duration="500"
        data-aos="fade-up"
        id="sectionRef4"
        ref={sectionRef4}
        className="seccionClientes"
      >
        <h2>clientes</h2>
        <ClientesListContainer />
      </section>
    </div>
  );
};

export default Home;
