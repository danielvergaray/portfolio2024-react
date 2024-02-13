import React from "react";
import { useContext } from "react";
import PersonalContext from "../context/personalInfo/PersonalContext";
import imagenHero from "../../assets/imagenes/fotoHero.jpeg";
import imagenBio from "../../assets/imagenes/fotoBio.jpeg";


const Home = () => {
  const info = {
    infoHero: [
      {
        imagenHero: imagenHero,
        title: "Hola, soy daniel",
        text: "Programados",
        imagenBio: imagenBio,
        bio: "Mi nombre es Daniel, soy ingeniero civil de profesión. Esta hermosa carrera me ha llevado a conocer distintos aspectos de la vida como el hecho de que el ser humano es capaz de muchas cosas siempre que lo crea posible, capaz de adaptarse a cualquier situación y reinventarse las veces que sean necesarias. Es este último tópico me llevo a darme cuenta que quería darle un rumbo a mi vida. Es por eso que desde el año 2022 encontré lo que me apasiona. Comencé a entrar al mundo de la programación porque jamás es tarde para volver a empezar.",
      },
    ],

    infoProyecto1: [
      {
        image: imagenHero,
        title: "Hola, soy daniel",
        description: "Programados",
      },
    ],
  };

  return (
    <>
      <section className="home-info">
        {info.infoHero.map((info) => (
          <>
            <article className="home-info__hero">
              <div className="home-info__hero-title">
                <h1>{info.title}</h1>
                <h2>{info.text}</h2>
              </div>
              <div style={{backgroundImage: `url(${info.imagenHero})` }} className="home-info__hero-image">
                
              </div>
            </article>

            <article className="home-info__bio">
              <div className="home-info__bio-imagen">
                <img src= {info.imagenBio} alt="" />
              </div>
              <div className="home-info__bio-biografia">
                <h2>Quien soy?</h2>
                <p> {info.bio} </p>
              </div>
            </article>
          </>
        ))}
      </section>

      <section className="portfolio"></section>
    </>
  );
};

export default Home;
