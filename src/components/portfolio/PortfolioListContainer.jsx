import React, { useState } from "react";
import PortfolioList from "./PortfolioList";
import ImagenAdivina from "../../assets/imagenes/proyectos/adivinaElNumero.jpeg";
import ImagenMrSnackEcommerce from "../../assets/imagenes/proyectos/ecommerce.jpeg";
import ImagenCarruselMrSnackWeb2 from "../../assets/imagenes/proyectos/MR-SNACK_02.png";
import ImagenCarruselMrSnackWeb3 from "../../assets/imagenes/proyectos/MR-SNACK_03.png";
import ImagenPigGame from "../../assets/imagenes/proyectos/pigGame.jpg";
import ImagenMrSnackWeb from "../../assets/imagenes/proyectos/MR-SNACK_01.png";
import ImagenGameStage from "../../assets/imagenes/proyectos/react-gameStage.jpeg";
import ImagenViajesWp from "../../assets/imagenes/proyectos/wp-blog.jpeg";
import ImagenCentroMedicoWp from "../../assets/imagenes/proyectos/centroMedicoWp.jpeg";
import ImagenBee from "../../assets/imagenes/proyectos/TiendaBee.jpeg";

const PortfolioListContainer = () => {
  const [abrirInfo, setAbrirInfo] = useState(false);

  const TituloRepositorio = "Ver repositorio";
  const TituloWeb = "Visitar web";

  const proyectos = [
    {
      id: "1",
      titulo: "Juego: Adivina el Número",
      imagenRecuadro: ImagenAdivina,
      imagenesCarusel: [
        {
          imagenCarrusel: ImagenAdivina,
        },
        {
          imagenCarrusel: ImagenAdivina,
        },
        {
          imagenCarrusel: ImagenAdivina,
        },
      ],
      descripcionBreve:
        "Este proyecto consiste en un juego donde se genera un numero al azar y el usuario debe adivinarlo...",
      descripcion:
        "Este proyecto consiste en un juego donde se genera un numero al azar y el usuario debe adivinarlo, contando con pistas que se muestran de acuerdo al valor introducido por el usuario. Fue realizado usando javaScript.",
      imagen: "",
      category: "javascript",
      tituloWeb: TituloWeb,
      tituloRepositorio: TituloRepositorio,
      linkWeb: "https://danielvergaray.github.io/AdivinaElNumero_juego/",
      linkRepositorio:
        "https://github.com/danielvergaray/AdivinaElNumero_juego",
    },
    {
      id: "2",
      titulo: "Ecommerce Mr. Snack",
      imagenRecuadro: ImagenMrSnackEcommerce,
      imagenesCarusel: [
        {
          imagenCarrusel: ImagenMrSnackEcommerce,
        },
        {
          imagenCarrusel: ImagenMrSnackEcommerce,
        },
        {
          imagenCarrusel: ImagenMrSnackEcommerce,
        },
      ],
      descripcionBreve:
        "Este proyecto consiste en un Ecommerce creado para el emprendimiento Mr. Snack. Ha sido realizado...",
      descripcion:
        "Este proyecto consiste en un Ecommerce creado para el emprendimiento Mr. Snack. Ha sido realizado utilizando javaScript, creando los productos del emprendimiento de manera dinamica pudiendo filtrar los productos por categoria y buscarlos por su nombre, se realizaron versiones desktop y mobile.",
      imagen: "",
      category: "javascript",
      tituloWeb: TituloWeb,
      tituloRepositorio: TituloRepositorio,
      linkWeb:
        "https://danielvergaray.github.io/entregaFinal_ecommerce/index.html",
      linkRepositorio:
        "https://github.com/danielvergaray/entregaFinal_ecommerce",
    },
    {
      id: "3",
      titulo: "Juego: Pig Game",
      imagenRecuadro: ImagenPigGame,
      imagenesCarusel: [
        {
          imagenCarrusel: ImagenPigGame,
        },
        {
          imagenCarrusel: ImagenPigGame,
        },
        {
          imagenCarrusel: ImagenPigGame,
        },
      ],
      descripcionBreve:
        "Este proyecto consiste en un juego donde se le permite al usuario lanzar el dado y sumar los numeros...",
      descripcion:
        "Este proyecto consiste en un juego donde se le permite al usuario lanzar el dado y sumar los numeros obtenidos de manera aleatoria hasta llegar al objetivo. Fue realizado usando javaScript.",
      imagen: "",
      category: "javascript",
      tituloWeb: TituloWeb,
      tituloRepositorio: TituloRepositorio,
      linkWeb: "https://danielvergaray.github.io/pig-game/",
      linkRepositorio: "https://github.com/danielvergaray/pig-game",
    },
    {
      id: "4",
      titulo: "Web Mr. Snack",
      imagenRecuadro: ImagenMrSnackWeb,
      imagenesCarusel: [
        {
          imagenCarrusel: ImagenMrSnackWeb,
        },
        {
          imagenCarrusel: ImagenCarruselMrSnackWeb2,
        },
        {
          imagenCarrusel: ImagenCarruselMrSnackWeb3,
        },
      ],

      descripcionBreve:
        "Este proyecto realizado para un emprendimiento de snacks. Fue llevado a cabo usando Html5 y Css3, ademas...",
      descripcion:
        "Este proyecto realizado para un emprendimiento de snacks. Fue llevado a cabo usando Html5 y Css3, ademas se implementaron estategias SEO, Bootstrap y Sass, se realizaron versiones desktop y mobile.",
      imagen: "",
      category: "desarrollo web",
      tituloWeb: TituloWeb,
      tituloRepositorio: TituloRepositorio,
      linkWeb: "https://danielvergaray.github.io/pagina-web-mrSnack/",
      linkRepositorio: "https://github.com/danielvergaray/pagina-web-mrSnack",
    },
    {
      id: "5",
      titulo: "Ecommerce GameStage",
      imagenRecuadro: ImagenGameStage,
      imagenesCarusel: [
        {
          imagenCarrusel: ImagenGameStage,
        },
        {
          imagenCarrusel: ImagenGameStage,
        },
        {
          imagenCarrusel: ImagenGameStage,
        },
      ],
      descripcionBreve:
        "Este proyecto consiste en un Ecommerce creado como una simulación de una tienda de videojuegos. Ha sido...",
      descripcion:
        "Este proyecto consiste en un Ecommerce creado como una simulación de una tienda de videojuegos. Ha sido realizado utilizando React, creando los productos del emprendimiento de manera dinamica pudiendo filtrar los productos por categoria y buscarlos por su nombre, los productos fueron almacenados en una base de datos externa (API), se realizaron versiones desktop y mobile.",
      imagen: "",
      category: "react",
      tituloWeb: TituloWeb,
      tituloRepositorio: TituloRepositorio,
      linkWeb: "https://ephemeral-taffy-ada997.netlify.app/",
      linkRepositorio: "https://github.com/danielvergaray/react_ecommerce",
    },
    {
      id: "6",
      titulo: "Blog de viajes/ecommerce",
      imagenRecuadro: ImagenViajesWp,
      imagenesCarusel: [
        {
          imagenCarrusel: ImagenViajesWp,
        },
        {
          imagenCarrusel: ImagenViajesWp,
        },
        {
          imagenCarrusel: ImagenViajesWp,
        },
      ],
      descripcionBreve:
        "Este proyecto consiste en un blog de viajes, incluyendo tienda virtual, se ha realizado usando WordPress...",
      descripcion:
        "Este proyecto consiste en un blog de viajes, incluyendo tienda virtual, se ha realizado usando WordPress, plugings, elementor, se realizaron versiones desktop y mobile.",

      imagen: "",
      category: "wordpress",
      tituloWeb: TituloWeb,
      tituloRepositorio: TituloRepositorio,
      linkWeb: "https://dev-elviajededaniel.pantheonsite.io/",
      linkRepositorio: "",
    },
    {
      id: "7",
      titulo: "Web Centro odontologico",
      imagenRecuadro: ImagenCentroMedicoWp,
      imagenesCarusel: [
        {
          imagenCarrusel: ImagenCentroMedicoWp,
        },
        {
          imagenCarrusel: ImagenCentroMedicoWp,
        },
        {
          imagenCarrusel: ImagenCentroMedicoWp,
        },
      ],
      descripcionBreve: "ofrece una plataforma intuitiva y eficiente para que los usuarios reserven citas médicas en línea. Con una interfaz profesional y fácil de usar...",
      descripcion: "El sitio web del centro médico, diseñado y desarrollado con WordPress, ofrece una plataforma intuitiva y eficiente para que los usuarios reserven citas médicas en línea. Con una interfaz profesional y fácil de usar, los pacientes pueden navegar por el sitio, encontrar información detallada sobre los servicios ofrecidos, conocer al personal médico y programar sus citas de manera conveniente.",
   
      category: "wordpress",
      tituloWeb: TituloWeb,
      tituloRepositorio: TituloRepositorio,
      linkWeb: "https://dev-centromedicodental.pantheonsite.io/",
      linkRepositorio: "",
    },
    {
      id: "8",
      titulo: "Tienda Bee",
      imagenRecuadro: ImagenBee,
      imagenesCarusel: [
        {
          imagenCarrusel: ImagenBee,
        },
        {
          imagenCarrusel: ImagenBee,
        },
        {
          imagenCarrusel: ImagenBee,
        },
      ],
      descripcionBreve:
        "Bee es un emprendimiento argentino, cuyo rubro es la confección de prendas que van desde lo deportivo hasta lo laboral...",
      descripcion:
        "Bee es un emprendimiento argentino, cuyo rubro es la confección de prendas que van desde lo deportivo hasta lo laboral. Para este proyecto se ha utilizado React, creando todos los elementos de manera dinámica. Se ha trabajado con un equipo de diseño UX/UI, y con otro programador web, por lo cual se ha utilizado Git y Github para el manejo de versiones. Además, se han realizado reuniones constantes tanto con el equipo de diseño como con el cliente final.",
      imagen: "",
      category: "react",
      tituloWeb: TituloWeb,
      tituloRepositorio: TituloRepositorio,
      linkWeb: "https://beemendoza.com/",
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

  const abrirPopUp = (e) => {
    setAbrirInfo(true);
  };

  return (
    <>
      <PortfolioList
        infoProyectos={proyectos}
        infoMenu={menuProyectos}
        funcionAbrirPopUp={abrirPopUp}
        abrirInfo={abrirInfo}
      />
    </>
  );
};

export default PortfolioListContainer;
