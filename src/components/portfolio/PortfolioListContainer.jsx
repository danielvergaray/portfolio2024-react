import React from "react";
import PortfolioList from "./PortfolioList";

const PortfolioListContainer = () => {
  const cursos = [
    {
      title: "Desarrollo web",
      institute: "CoderHouse",
      description:
        "08 semanas en donde se desarrollaron temas como Html5, Css3, Sass, Bootstrap, entre otros",
      iconoVerMasHtml: "iconoVerMasDesarrollo",
    },
    {
      title: "JavaScript",
      institute: "CoderHouse",
      description: "08 semanas en donde se desarrollaron lógica de JavaScript",
      iconoVerMasHtml: "iconoVerMasJs",
    },
    {
      title: "React",
      institute: "CoderHouse",
      description: "08 semanas desarrollando aplicaciones en React",
      iconoVerMasHtml: "iconoVerMasReact",
    },
    {
      title: "Wordpress",
      institute: "CoderHouse",
      description: "05 semanas desarrollando un Eccommerce",
      iconoVerMasHtml: "iconoVerMasWp",
    },
  ];

  const idiomas = [
    {
      title: "Español",
      institute: "Nivel: Nativo",
      description: "",
      iconoVerMasHtml: "iconoVerMasEsp",
    },
    {
      title: "Inglés",
      institute: "Nivel: Avanzado",
      description: "Más de 10 años de estudios y prácticas en el idioma",
      iconoVerMasHtml: "iconoVerMasIng",
    },
    {
      title: "Francés",
      institute: "Nivel: Básico",
      description: "Comprensión lectora, capacidad de comunicacón básica",
      iconoVerMasHtml: "iconoVerMasFr",
    },
  ];

  const proyectos = [
    {
      titulo: "Adivina el Número",
      descripcionBreve:
        "Este proyecto consiste en un juego donde se genera un numero al azar y el usuario debe adivinarlo, contando con pistas que se muestran de acuerdo al valor introducido por el usuario. Fue realizado usando javaScript.",
      imagen: "",
      linkWeb: "https://danielvergaray.github.io/AdivinaElNumero_juego/",
      linkRepositorio:
        "https://github.com/danielvergaray/AdivinaElNumero_juego",
    },
    {
      titulo: "Ecommerce Mr. Snack",
      descripcionBreve:
        "Este proyecto consiste en un Ecommerce creado para el emprendimiento Mr. Snack. Ha sido realizado utilizando javaScript, creando los productos del emprendimiento de manera dinamica pudiendo filtrar los productos por categoria y buscarlos por su nombre, se realizaron versiones desktop y mobile.",
      imagen: "",
      linkWeb: "https://danielvergaray.github.io/entregaFinal_ecommerce/index.html",
      linkRepositorio:
        "https://github.com/danielvergaray/entregaFinal_ecommerce",
    },
    {
        titulo: "Juego: Pig Game",
        descripcionBreve:
          "Este proyecto consiste en un juego donde se le permite al usuario lanzar el dado y sumar los numeros obtenidos de manera aleatoria hasta llegar al objetivo. Fue realizado usando javaScript.",
        imagen: "",
        linkWeb: "https://danielvergaray.github.io/pig-game/",
        linkRepositorio:
          "https://github.com/danielvergaray/pig-game",
      },
      {
        titulo: "Web Mr. Snack",
        descripcionBreve:
          "Este proyecto realizado para un emprendimiento de snacks. Fue llevado a cabo usando Html5 y Css3, ademas se implementaron estategias SEO, Bootstrap y Sass, se realizaron versiones desktop y mobile.",
        imagen: "",
        linkWeb: "https://danielvergaray.github.io/pagina-web-mrSnack/",
        linkRepositorio:
          "https://github.com/danielvergaray/pagina-web-mrSnack",
      },
      {
        titulo: "Ecommerce GameStage",
        descripcionBreve:
          "Este proyecto consiste en un Ecommerce creado como una simulación de una tienda de videojuegos. Ha sido realizado utilizando React, creando los productos del emprendimiento de manera dinamica pudiendo filtrar los productos por categoria y buscarlos por su nombre, los productos fueron almacenados en una base de datos externa (API), se realizaron versiones desktop y mobile.",
        imagen: "",
        linkWeb: "https://ephemeral-taffy-ada997.netlify.app/",
        linkRepositorio:
          "https://github.com/danielvergaray/react_ecommerce",
      },
      {
        titulo: "Blog de viajes/ecommerce",
        descripcionBreve:
          "Este proyecto consiste en un blog de viajes, incluyendo tienda virtual, se ha realizado usando WordPress, plugings, elementor, se realizaron versiones desktop y mobile.",
        imagen: "",
        linkWeb: "https://dev-elviajededaniel.pantheonsite.io/",
        linkRepositorio:
          "",
      },
      {
        titulo: "Web Centro odontologico",
        descripcionBreve:
          "",
        imagen: "",
        linkWeb: "https://dev-centromedicodental.pantheonsite.io/",
        linkRepositorio:
          "",
      },
  ];

  return <PortfolioList infoProyectos={proyectos} />;
};

export default PortfolioListContainer;
