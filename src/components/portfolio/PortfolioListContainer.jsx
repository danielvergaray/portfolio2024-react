import React from "react";
import PortfolioList from "./PortfolioList";
import ImagenAdivina from "../../assets/imagenes/proyectos/adivinaElNumero.jpeg";
import ImagenMrSnackEcommerce from "../../assets/imagenes/proyectos/ecommerce.jpeg";
import ImagenPigGame from "../../assets/imagenes/proyectos/pigGame.jpg";
import ImagenMrSnackWeb from "../../assets/imagenes/proyectos/web-mr-snack.jpeg";
import ImagenGameStage from "../../assets/imagenes/proyectos/react-gameStage.jpeg";
import ImagenViajesWp from "../../assets/imagenes/proyectos/wp-blog.jpeg";
import ImagenCentroMedicoWp from "../../assets/imagenes/proyectos/centroMedicoWp.jpeg";

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
      imagenRecuadro: ImagenAdivina,
      descripcionBreve:
        "Este proyecto consiste en un juego donde se genera un numero al azar y el usuario debe adivinarlo...",
        descripcion:
        "Este proyecto consiste en un juego donde se genera un numero al azar y el usuario debe adivinarlo, contando con pistas que se muestran de acuerdo al valor introducido por el usuario. Fue realizado usando javaScript.",
        imagen: "",
      category: "javascript",
      linkWeb: "https://danielvergaray.github.io/AdivinaElNumero_juego/",
      linkRepositorio:
        "https://github.com/danielvergaray/AdivinaElNumero_juego",
    },
    {
      titulo: "Ecommerce Mr. Snack",
      imagenRecuadro: ImagenMrSnackEcommerce,
      descripcionBreve:
        "Este proyecto consiste en un Ecommerce creado para el emprendimiento Mr. Snack. Ha sido realizado...",
        descripcion:
        "Este proyecto consiste en un Ecommerce creado para el emprendimiento Mr. Snack. Ha sido realizado utilizando javaScript, creando los productos del emprendimiento de manera dinamica pudiendo filtrar los productos por categoria y buscarlos por su nombre, se realizaron versiones desktop y mobile.",
        imagen: "",
      category: "javascript",
      linkWeb:
        "https://danielvergaray.github.io/entregaFinal_ecommerce/index.html",
      linkRepositorio:
        "https://github.com/danielvergaray/entregaFinal_ecommerce",
    },
    {
      titulo: "Juego: Pig Game",
      imagenRecuadro: ImagenPigGame,
        descripcionBreve:
        "Este proyecto consiste en un juego donde se le permite al usuario lanzar el dado y sumar los numeros...",
        descripcion:
        "Este proyecto consiste en un juego donde se le permite al usuario lanzar el dado y sumar los numeros obtenidos de manera aleatoria hasta llegar al objetivo. Fue realizado usando javaScript.",
        imagen: "",
      category: "javascript",
      linkWeb: "https://danielvergaray.github.io/pig-game/",
      linkRepositorio: "https://github.com/danielvergaray/pig-game",
    },
    {
      titulo: "Web Mr. Snack",
      imagenRecuadro: ImagenMrSnackWeb,
      descripcionBreve:
        "Este proyecto realizado para un emprendimiento de snacks. Fue llevado a cabo usando Html5 y Css3, ademas...",
      descripcion:
        "Este proyecto realizado para un emprendimiento de snacks. Fue llevado a cabo usando Html5 y Css3, ademas se implementaron estategias SEO, Bootstrap y Sass, se realizaron versiones desktop y mobile.",
        imagen: "",
      category: "desarrollo web",
      linkWeb: "https://danielvergaray.github.io/pagina-web-mrSnack/",
      linkRepositorio: "https://github.com/danielvergaray/pagina-web-mrSnack",
    },
    {
      titulo: "Ecommerce GameStage",
      imagenRecuadro: ImagenGameStage,
      descripcionBreve:
        "Este proyecto consiste en un Ecommerce creado como una simulación de una tienda de videojuegos. Ha sido...",
        descripcion:
        "Este proyecto consiste en un Ecommerce creado como una simulación de una tienda de videojuegos. Ha sido realizado utilizando React, creando los productos del emprendimiento de manera dinamica pudiendo filtrar los productos por categoria y buscarlos por su nombre, los productos fueron almacenados en una base de datos externa (API), se realizaron versiones desktop y mobile.",
        imagen: "",
      category: "react",
      linkWeb: "https://ephemeral-taffy-ada997.netlify.app/",
      linkRepositorio: "https://github.com/danielvergaray/react_ecommerce",
    },
    {
      titulo: "Blog de viajes/ecommerce",
      imagenRecuadro: ImagenViajesWp,
      descripcionBreve:
        "Este proyecto consiste en un blog de viajes, incluyendo tienda virtual, se ha realizado usando WordPress...",
        descripcion:
        "Este proyecto consiste en un blog de viajes, incluyendo tienda virtual, se ha realizado usando WordPress, plugings, elementor, se realizaron versiones desktop y mobile.",

        imagen: "",
      category: "wordpress",
      linkWeb: "https://dev-elviajededaniel.pantheonsite.io/",
      linkRepositorio: "",
    },
    {
      titulo: "Web Centro odontologico",
      imagenRecuadro: ImagenCentroMedicoWp,
      descripcionBreve: "",
      descripcion: "",
      imagen: "",
      category: "wordpress",
      linkWeb: "https://dev-centromedicodental.pantheonsite.io/",
      linkRepositorio: "",
    },
  ];

  const menuProyectos = [
    {
      titulo: "TODOS",
    },
    {
      titulo: "REACT",
    },
    {
      titulo: "JAVASCRIPT",
    },
    {
      titulo: "DESARROLLO WEB",
    },
    {
      titulo: "WORDPRESS",
    },
  ];

  return <PortfolioList infoProyectos={proyectos} infoMenu={menuProyectos} />;
};

export default PortfolioListContainer;
