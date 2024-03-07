import React, { useState } from "react";
import PortfolioList from "./PortfolioList";
import ImagenAdivina1 from "../../assets/imagenes/proyectos/JUEGO-ADIVINA-EL-NUMERO_01.jpg";
import ImagenAdivina2 from "../../assets/imagenes/proyectos/JUEGO-ADIVINA-EL-NUMERO_02.jpg";
import ImagenAdivina3 from "../../assets/imagenes/proyectos/JUEGO-ADIVINA-EL-NUMERO_03.jpg";

import ImagenMrSnackEcommerce1 from "../../assets/imagenes/proyectos/ECOMMERCE-MR-SNACK_01.jpg";
import ImagenMrSnackEcommerce2 from "../../assets/imagenes/proyectos/ECOMMERCE-MR-SNACK_02.jpg";
import ImagenMrSnackEcommerce3 from "../../assets/imagenes/proyectos/ECOMMERCE-MR-SNACK_03.jpg";

import ImagenMrSnackWeb from "../../assets/imagenes/proyectos/MR-SNACK_01.jpg";
import ImagenCarruselMrSnackWeb2 from "../../assets/imagenes/proyectos/MR-SNACK_02.jpg";
import ImagenCarruselMrSnackWeb3 from "../../assets/imagenes/proyectos/MR-SNACK_03.jpg";

import ImagenPigGame1 from "../../assets/imagenes/proyectos/JUEGO-PIG-GAME_01.jpg";
import ImagenPigGame2 from "../../assets/imagenes/proyectos/JUEGO-PIG-GAME_02.jpg";
import ImagenPigGame3 from "../../assets/imagenes/proyectos/JUEGO-PIG-GAME_03.jpg";

import ImagenGameStage1 from "../../assets/imagenes/proyectos/GAME-STAGE_01.jpg";
import ImagenGameStage2 from "../../assets/imagenes/proyectos/GAME-STAGE_02.jpg";
import ImagenGameStage3 from "../../assets/imagenes/proyectos/GAME-STAGE_03.jpg";

import ImagenViajesWp1 from "../../assets/imagenes/proyectos/BLOG-VIAJES_01.jpg";
import ImagenViajesWp2 from "../../assets/imagenes/proyectos/BLOG-VIAJES_02.jpg";
import ImagenViajesWp3 from "../../assets/imagenes/proyectos/BLOG-VIAJES_03.jpg";

import ImagenCentroMedicoWp1 from "../../assets/imagenes/proyectos/CENTRO-ODONTOLOGICO_01.jpg";
import ImagenCentroMedicoWp2 from "../../assets/imagenes/proyectos/CENTRO-ODONTOLOGICO_02.jpg";
import ImagenCentroMedicoWp3 from "../../assets/imagenes/proyectos/CENTRO-ODONTOLOGICO_03.jpg";

import ImagenBee1 from "../../assets/imagenes/proyectos/BEE_01.jpg";
import ImagenBee2 from "../../assets/imagenes/proyectos/BEE_02.jpg";
import ImagenBee3 from "../../assets/imagenes/proyectos/BEE_03.jpg";

import ImagenSebas1 from "../../assets/imagenes/proyectos/SEBAS_01.jpg";
import ImagenSebas2 from "../../assets/imagenes/proyectos/SEBAS_02.jpg";
import ImagenSebas3 from "../../assets/imagenes/proyectos/SEBAS_03.jpg";

const PortfolioListContainer = () => {
  const [abrirInfo, setAbrirInfo] = useState(false);

  const TituloRepositorio = "Ver repositorio";
  const TituloWeb = "Visitar web";

  const proyectos = [
    {
      id: "1",
      titulo: "Juego: Adivina el Número",
      imagenRecuadro: ImagenAdivina1,
      imagenesCarusel: [
        {
          imagenCarrusel: ImagenAdivina1,
        },
        {
          imagenCarrusel: ImagenAdivina2,
        },
        {
          imagenCarrusel: ImagenAdivina3,
        },
      ],
      descripcionBreve:
        "Este proyecto consiste en un juego donde se genera un numero al azar y el usuario debe adivinarlo...",
      descripcion:
        "Este proyecto consiste en un juego donde se genera un numero al azar y el usuario debe adivinarlo, contando con pistas que se muestran de acuerdo al valor introducido por el usuario. Fue realizado usando javaScript, html5 y css3.",
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
      imagenRecuadro: ImagenMrSnackEcommerce1,
      imagenesCarusel: [
        {
          imagenCarrusel: ImagenMrSnackEcommerce1,
        },
        {
          imagenCarrusel: ImagenMrSnackEcommerce2,
        },
        {
          imagenCarrusel: ImagenMrSnackEcommerce3,
        },
      ],
      descripcionBreve:
        "Este proyecto consiste en un Ecommerce creado para el emprendimiento Mr. Snack. Ha sido realizado...",
      descripcion:
        "Este proyecto consiste en un Ecommerce creado para el emprendimiento Mr. Snack. Ha sido realizado utilizando javaScript, creando los productos del emprendimiento de manera dinamica pudiendo filtrar los productos por categoria y buscarlos por su nombre, se realizaron versiones desktop y mobile. Es un proyecto que se ha realizado durante el desarrollo del curso de javaScript, abarcando los requerimientos necesarios por el curso",
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
      imagenRecuadro: ImagenPigGame1,
      imagenesCarusel: [
        {
          imagenCarrusel: ImagenPigGame1,
        },
        {
          imagenCarrusel: ImagenPigGame2,
        },
        {
          imagenCarrusel: ImagenPigGame3,
        },
      ],
      descripcionBreve:
        "Este proyecto consiste en un juego donde se le permite al usuario lanzar el dado y sumar los numeros...",
      descripcion:
        "Este proyecto consiste en un juego donde se le permite al usuario lanzar el dado y sumar los numeros obtenidos de manera aleatoria hasta llegar al objetivo. Fue realizado manejando el dom de manera dinamica usando javaScript.",
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
      imagenRecuadro: ImagenGameStage1,
      imagenesCarusel: [
        {
          imagenCarrusel: ImagenGameStage1,
        },
        {
          imagenCarrusel: ImagenGameStage2,
        },
        {
          imagenCarrusel: ImagenGameStage3,
        },
      ],
      descripcionBreve:
        "Este proyecto consiste en un Ecommerce creado como una simulación de una tienda de videojuegos. Ha sido...",
      descripcion:
        "Este proyecto consiste en un Ecommerce creado como una simulación de una tienda de videojuegos. Ha sido realizado utilizando React, creando los productos del emprendimiento de manera dinamica pudiendo filtrar los productos por categoria y buscarlos por su nombre, los productos fueron almacenados en una base de datos externa, en dicha base de datos tambien se permiten enviar las compras realizados por los clientes, se realizaron versiones desktop y mobile.",
      imagen: "",
      category: "react",
      tituloWeb: TituloWeb,
      tituloRepositorio: TituloRepositorio,
      linkWeb: "https://ephemeral-taffy-ada997.netlify.app/",
      linkRepositorio: "https://github.com/danielvergaray/react_ecommerce",
    },
    {
      id: "6",
      titulo: "Blog de viajes",
      imagenRecuadro: ImagenViajesWp1,
      imagenesCarusel: [
        {
          imagenCarrusel: ImagenViajesWp1,
        },
        {
          imagenCarrusel: ImagenViajesWp2,
        },
        {
          imagenCarrusel: ImagenViajesWp3,
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
      imagenRecuadro: ImagenCentroMedicoWp1,
      imagenesCarusel: [
        {
          imagenCarrusel: ImagenCentroMedicoWp1,
        },
        {
          imagenCarrusel: ImagenCentroMedicoWp2,
        },
        {
          imagenCarrusel: ImagenCentroMedicoWp3,
        },
      ],
      descripcionBreve: "Este proyecto consiste en un centro odontologico, para esta web se ha implentado dinstintos plugins y elementor, mediante...",
      descripcion: "Este proyecto consiste en un centro odontologico, para esta web se ha implentado dinstintos plugins y elementor, mediante la web se permite agendar citas medicas. Ha sido realizado con Wordpress",
   
      category: "wordpress",
      tituloWeb: TituloWeb,
      tituloRepositorio: TituloRepositorio,
      linkWeb: "https://dev-centromedicodental.pantheonsite.io/",
      linkRepositorio: "",
    },
    {
      id: "8",
      titulo: "Tienda Bee",
      imagenRecuadro: ImagenBee1,
      imagenesCarusel: [
        {
          imagenCarrusel: ImagenBee1,
        },
        {
          imagenCarrusel: ImagenBee2,
        },
        {
          imagenCarrusel: ImagenBee3,
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
    {
      id: "9",
      titulo: "Invitación cumpleaños Sebastian",
      imagenRecuadro: ImagenSebas1,
      imagenesCarusel: [
        {
          imagenCarrusel: ImagenSebas1,
        },
        {
          imagenCarrusel: ImagenSebas2,
        },
        {
          imagenCarrusel: ImagenSebas3,
        },
      ],
      descripcionBreve:
        "Esta página web única combina funcionalidad y creatividad para ofrecer una experiencia de invitación interactiva...",
      descripcion:
        "Esta página web única combina funcionalidad y creatividad para ofrecer una experiencia de invitación interactiva, el cliente buscaba una web fresca y animada para el cumpleaños de su hijo. Esta web se ha desarrollado usando javaScript, Html5, css3 y bootstrap",
      imagen: "",
      category: "javascript",
      tituloWeb: TituloWeb,
      tituloRepositorio: TituloRepositorio,
      linkWeb: "https://danielvergaray.github.io/SebasWars/",
      linkRepositorio: "https://github.com/danielvergaray/SebasWars",
      
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
