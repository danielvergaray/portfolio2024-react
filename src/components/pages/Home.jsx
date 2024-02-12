import React from "react";
import { useContext } from "react";
import PersonalContext from "../context/personalInfo/PersonalContext";
import imagenHero from '../../assets/imagenes/Europa1200x800.jpg';

const Home = () => {
  
  const info = {
    infoHero: [
        {
            image: imagenHero,
            title: 'Hola, soy daniel',
            text: 'Programados',
        }
    ]
}


  return (
    <>
      <section className="home-hero">
        <div>
          {info.infoHero.map((info) => (
            <>
              <h1>{info.title}</h1>
              <h2>{info.text}</h2>
            </>
          ))}
        </div>

        <div className="hero-foto"></div>
      </section>

      <section className="home-bio">
        <div>
          <img src="#" alt="" />
        </div>
        <div>
          <h2>Quien soy?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
            quod perferendis recusandae voluptate doloribus et soluta vitae,
            pariatur animi illo.
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;
