import React, { useRef, useEffect, useContext } from "react";
import imagenHero from "../../assets/imagenes/FOTO-HOME.jpg";
import imagenBio from "../../assets/imagenes/FOTO-BIO1.jpeg";
import PortfolioListContainer from "../portfolio/PortfolioListContainer";
import ClientesListContainer from "../seccionClientes/ClientesListContainer";
import EstudiosListContainer from "../estudios/EstudiosListContainer";
import HerramientasListContainer from "../seccionHerramientas/HerramientasListContainer";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { IoIosArrowDropdown } from "react-icons/io";
import GeneralContext from "../context/GeneralContext";

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

  const { idioma } = useContext(GeneralContext);

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

  const infoEng = [
    {
      imagenHero: imagenHero,
      title: [
        {
          type: "p",
          content: "Hello,",
        },
        {
          type: "span",
          content: "I'am Daniel",
        },
      ],
      profesion: [
        {
          type: "p",
          content: "Junior developer",
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
      bio: " My name is Daniel, I am a civil engineer by profession. This career has led me to know different aspects of life such as the fact that human beings are capable of many things whenever they believe it is possible, capable of adapting to any situation and reinventing themselves as many times as necessary. It is this last topic that led me to realize that I wanted to give my life a direction. That is why since 2022 I have found what I am passionate about. I started to enter the world of programming because it is never too late to start over.",
      bio2: "At a professional level, as a civil engineer I have had experience in project coordination, personnel management and teamwork. Experiences that have helped me improve soft skills such as conflict management, stress management, communication skills, among others. Which are fundamental in the performance of daily activities within any company.",
    },
  ];

  const tituloArray =
    idioma === "ESP"
      ? Object.values(info[0].title)
      : Object.values(infoEng[0].title);

  const profesionArray =
    idioma === "ESP"
      ? Object.values(info[0].profesion)
      : Object.values(infoEng[0].profesion);

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
                <button>{idioma === "ESP" ? "Contáctame" : "Contact me"}</button>
              </Link>
            </div>
          </div>
        </article>
        <div className="hero-flecha-mobile">
          <IoIosArrowDropdown />
        </div>
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

            <div className="home-info__bio-biografia">
              <h3
                data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                {idioma === "ESP" ? "Sobre mí" : "About"}
              </h3>
              <h2
                data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="1000"
                data-aos-delay="500"
              >
                {idioma === "ESP" ? "¿Quien soy?" : "WHO AM I?"}
              </h2>
              <div
                data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="1000"
                data-aos-delay="1500"
              >
                <p> {idioma === "ESP" ? info[0].bio : infoEng[0].bio} </p>{" "}
                <br />
                <p> {idioma === "ESP" ? info[0].bio2 : infoEng[0].bio2} </p>
              </div>
            </div>
          </div>

          <article
            className="home-info__bio-mobile"
            id="sectionRef1"
            ref={sectionRef1}
            /* data-aos-easing="linear"
            data-aos-duration="500"
            data-aos="fade-up" */
          >
            <h3
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              {idioma === "ESP" ? "Sobre mí" : "About"}
            </h3>
            <h2
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="1000"
              data-aos-delay="500"
            >
              {idioma === "ESP" ? "¿Quien soy?" : "WHO AM I?"}
            </h2>
            <div className="home-info__bio-imagen">
              <img
                src={info[0].imagenBio}
                data-aos-easing="linear"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="5000"
                alt="Imagen-Daniel-Vergaray"
              />
            </div>
            <div className="home-info__bio-biografia">
              <div
                data-aos-easing="linear"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <p> {idioma === "ESP" ? info[0].bio : infoEng[0].bio} </p><br />
                <p> {idioma === "ESP" ? info[0].bio2 : infoEng[0].bio2} </p>
              </div>
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
        <h2>{idioma === "ESP" ? "estudios" : "education" }</h2>
        <EstudiosListContainer />
      </section>

      <section
        className="herramientas"
        data-aos-easing="linear"
        data-aos-duration="500"
        data-aos="fade-up"
      >
        <h2>SKILLS</h2>
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
        <h2>{idioma === "ESP" ? "clientes" : "clients"}</h2>
        <ClientesListContainer />
      </section>
    </div>
  );
};

export default Home;
