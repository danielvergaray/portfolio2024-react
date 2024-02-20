import React from "react";
import { useRef } from "react";
import imagenHero from "../../assets/imagenes/fotoHero.jpeg";
import imagenBio from "../../assets/imagenes/fotoBio.jpeg";
import PortfolioListContainer from "../portfolio/PortfolioListContainer";
import ClientesListContainer from "../seccionClientes/ClientesListContainer";

const Home = () => {

  const sectionRef1 = useRef(null);
  const sectionRef2 = useRef(null);
  const sectionRef3 = useRef(null);
  

  const scrollFunction = (ref) => {
    console.log(ref)
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
   
  }

  const info = {
    infoHero: [
      {
        imagenHero: imagenHero,
        title: "Hola, soy Daniel",
        text: "Programador Jr",
        imagenBio: imagenBio,
        bio: "Soy Daniel, ingeniero civil. En 2022, encontré mi pasión por la programación, lo que me llevó a reflexionar sobre la capacidad humana para adaptarse y reinventarse.",
        bio2: "Mi experiencia en coordinación de proyectos y manejo de personal ha fortalecido habilidades esenciales como la gestión de conflictos y la comunicación, fundamentales para mi desempeño en cualquier entorno laboral.",
      },
    ],
  };

  return (
    <div className="home">
      <section className="home-info">
        {info.infoHero.map((info, index) => (
          <div key={index}>
            <article  className="home-info__hero">
              <div className="home-info__hero-title">
                <h1>{info.title}</h1>
                <button>{info.text}</button>
              </div>
              <div
                style={{ backgroundImage: `url(${info.imagenHero})` }}
                className="home-info__hero-image"
              ></div>
            </article>

            <article id="sectionRef1" ref={sectionRef1} className="home-info__bio">
              <div className="home-info__bio-imagen">
                <img src={info.imagenBio} alt="" />
              </div>
              <div className="home-info__bio-biografia">
                <h2>¿QUIEN SOY?</h2>
                <p> {info.bio} </p> <br />
                <p> {info.bio2} </p>
              </div>
            </article>
          </div>
        ))}
      </section>

      <section id="sectionRef2" ref={sectionRef2}  className="portfolio">
        <h2>PORTFOLIO</h2>
        <PortfolioListContainer />
      </section>

      <section id="sectionRef3" ref={sectionRef3} className="seccionClientes">
        <h2>CLIENTES</h2>
        <ClientesListContainer />
      </section>
    </div>
  );
};

export default Home;
