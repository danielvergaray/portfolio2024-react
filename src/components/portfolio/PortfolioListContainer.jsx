import React, { useState, useContext } from "react";
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

import GeneralContext from "../context/GeneralContext";

const PortfolioListContainer = () => {
  const [abrirInfo, setAbrirInfo] = useState(false);

  const { idioma } = useContext(GeneralContext);

  const TituloRepositorio =
    idioma === "ESP" ? "Ver repositorio" : "Go to Repository";
  const TituloWeb = idioma === "ESP" ? "Visitar web" : "Visit web";

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
        "Este proyecto es un emocionante juego donde se genera un número al azar, desafiando al usuario a ...",
      descripcion:
        "Este proyecto es un emocionante juego donde se genera un número al azar, desafiando al usuario a adivinarlo. Se proporcionan pistas según las respuestas del usuario, lo que aumenta la emoción del juego. Utilizando JavaScript, HTML5 y CSS3, se ha creado una experiencia interactiva y atractiva para los jugadores, combinando habilidades de programación y diseño para ofrecer un entretenimiento memorable y educativo.",
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
        "El proyecto es un emocionante juego donde el usuario puede lanzar un dado y sumar los números obtenidos...",
      descripcion:
        "El proyecto es un emocionante juego donde el usuario puede lanzar un dado y sumar los números obtenidos de forma aleatoria hasta alcanzar un objetivo específico. Se desarrolló utilizando JavaScript para manejar el DOM de manera dinámica, lo que garantiza una experiencia interactiva y divertida para los jugadores, mientras ejercitan sus habilidades matemáticas y estratégicas de una manera entretenida y educativa.",
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
        "Este proyecto fue diseñado específicamente para un emprendimiento de snacks. Utilizando HTML5 y CSS3 como...",
      descripcion:
        "Este proyecto fue diseñado específicamente para un emprendimiento de snacks. Utilizando HTML5 y CSS3 como base, se implementaron estrategias SEO, Bootstrap y Sass para mejorar la experiencia del usuario. Se crearon versiones tanto para escritorio como para dispositivos móviles, garantizando una navegación fluida y una presentación visualmente atractiva en todas las plataformas, lo que contribuyó al éxito y la accesibilidad del sitio web para los usuarios.",
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
        "Este emocionante proyecto se trata de un blog de viajes con una tienda virtual incorporada. Utilizando...",
      descripcion:
        "Este emocionante proyecto se trata de un blog de viajes con una tienda virtual incorporada. Utilizando WordPress como plataforma principal y complementado con plugins y Elementor, se han creado versiones adaptadas para escritorio y dispositivos móviles. Esto asegura que los visitantes puedan disfrutar de una experiencia de navegación fluida y optimizada, independientemente del dispositivo que utilicen para acceder al sitio web.",

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
      descripcionBreve:
        "Este proyecto es la creación de un centro odontológico completamente funcional. Para su realización, se han empleado diversos...",
      descripcion:
        "Este proyecto es la creación de un centro odontológico completamente funcional. Para su realización, se han empleado diversos plugins y la herramienta Elementor en la plataforma WordPress. Los usuarios tienen la facilidad de agendar citas médicas a través de la web, lo que mejora la accesibilidad y la experiencia del paciente. La implementación de estas características ha sido fundamental para ofrecer un servicio eficiente y moderno en el campo de la odontología.",

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
        "Esta página web única combina funcionalidad y creatividad para ofrecer una experiencia de invitación...",
      descripcion:
        "Esta página web única combina funcionalidad y creatividad para ofrecer una experiencia de invitación interactiva. El cliente buscaba un diseño fresco y animado para el cumpleaños de su hijo. El desarrollo se realizó utilizando JavaScript, HTML5, CSS3 y Bootstrap. Esta combinación de tecnologías permitió crear un sitio web dinámico y visualmente atractivo que cumplió con las expectativas del cliente y proporcionó una experiencia memorable para los invitados del evento.",
      imagen: "",
      category: "javascript",
      tituloWeb: TituloWeb,
      tituloRepositorio: TituloRepositorio,
      linkWeb: "https://danielvergaray.github.io/SebasWars/",
      linkRepositorio: "https://github.com/danielvergaray/SebasWars",
    },
  ];

  const projects = [
    {
      id: "1",
      titulo: "Game: Guess the Number",
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
        "This project is an exciting game where a random number is generated, challenging the user to guess ...",
      descripcion:
        "This project is an exciting game where a random number is generated, challenging the user to guess it. Hints are provided based on the user's answers, adding to the excitement of the game. Using JavaScript, HTML5 and CSS3, an interactive and engaging experience has been created for players, combining programming and design skills to deliver memorable and educational entertainment.",
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
        "This project consists of an Ecommerce created for the Mr. Snack venture. It has been made using...",
      descripcion:
        "This project consists of an Ecommerce created for the Mr. Snack venture. It has been made using JavaScript, creating the venture's products dynamically, being able to filter the products by category and search for them by name. Desktop and mobile versions were created. It is a project that has been carried out during the development of the javaScript course, covering the necessary requirements for the course.",
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
      titulo: "Game: Pig Game",
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
        "This project is an exciting game where the user can roll a dice and add the numbers obtained randomly until...",
      descripcion:
        "This project is an exciting game where the user can roll a dice and add the numbers obtained randomly until a specific goal is reached. It was developed using JavaScript to handle the DOM dynamically, ensuring an interactive and fun experience for players, while exercising their mathematical and strategic skills in an entertaining and educational way.",
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
        "This project was designed specifically for a snack business. Using HTML5 and CSS3 as a base, SEO, Bootstrap and...",
      descripcion:
        "This project was designed specifically for a snack business. Using HTML5 and CSS3 as a base, SEO, Bootstrap and Sass strategies were implemented to improve the user experience. Both desktop and mobile versions were created, ensuring smooth navigation and visually appealing presentation on all platforms, contributing to the success and accessibility of the website for users.",
      imagen: "",
      category: "web development",
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
        "This project consists of an Ecommerce created as a simulation of a video game store. It has been carried out using...",
      descripcion:
        "This project consists of an Ecommerce created as a simulation of a video game store. It has been carried out using React, creating the products of the enterprise in a dynamic way, being able to filter the products by category and search for them by name, the products were stored in an external database, in said database it is also possible to send purchases made by clients, desktop and mobile versions were made.",
      imagen: "",
      category: "react",
      tituloWeb: TituloWeb,
      tituloRepositorio: TituloRepositorio,
      linkWeb: "https://ephemeral-taffy-ada997.netlify.app/",
      linkRepositorio: "https://github.com/danielvergaray/react_ecommerce",
    },
    {
      id: "6",
      titulo: "Travel blog",
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
        "This exciting project is a travel blog with a built-in virtual store. Using WordPress as the main platform...",
      descripcion:
        "This exciting project is a travel blog with a built-in virtual store. Using WordPress as the main platform and complemented with plugins and Elementor, versions adapted for desktop and mobile devices have been created. This ensures that visitors can enjoy a smooth and optimized browsing experience, regardless of the device they use to access the website..",

      imagen: "",
      category: "wordpress",
      tituloWeb: TituloWeb,
      tituloRepositorio: TituloRepositorio,
      linkWeb: "https://dev-elviajededaniel.pantheonsite.io/",
      linkRepositorio: "",
    },
    {
      id: "7",
      titulo: "Dental Center Website",
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
      descripcionBreve:
        "This project is the creation of a fully functional dental center. To carry it out, various plugins and the Elementor tool have been used on...",
      descripcion:
        "This project is the creation of a fully functional dental center. To carry it out, various plugins and the Elementor tool have been used on the WordPress platform. Users have the ease of scheduling medical appointments through the web, which improves accessibility and the patient experience. The implementation of these features has been essential to offer an efficient and modern service in the field of dentistry.",

      category: "wordpress",
      tituloWeb: TituloWeb,
      tituloRepositorio: TituloRepositorio,
      linkWeb: "https://dev-centromedicodental.pantheonsite.io/",
      linkRepositorio: "",
    },
    {
      id: "8",
      titulo: "Bee store",
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
        "Bee is an Argentine enterprise, whose field is the production of garments ranging from sports to work. For this project, React...",
      descripcion:
        "Bee is an Argentine enterprise, whose field is the production of garments ranging from sports to work. For this project, React was used, creating all the elements dynamically. We have worked with a UX/UI design team, and with another web programmer, for which Git and Github have been used to manage versions. In addition, constant meetings have been held with both the design team and the end client.",
      imagen: "",
      category: "react",
      tituloWeb: TituloWeb,
      tituloRepositorio: TituloRepositorio,
      linkWeb: "https://beemendoza.com/",
      linkRepositorio: "",
    },
    {
      id: "9",
      titulo: "Sebastian birthday invitation",
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
        "This unique website combines functionality and creativity to offer an interactive invitation experience. The client was...",
      descripcion:
        "This unique website combines functionality and creativity to offer an interactive invitation experience. The client was looking for a fresh and lively design for his son's birthday. Development was done using JavaScript, HTML5, CSS3 and Bootstrap. This combination of technologies allowed us to create a dynamic and visually appealing website that met client expectations and provided a memorable experience for event guests.",
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

  const projectsMenu = [
    {
      titulo: "ALL",
    },
    {
      titulo: "REACT",
    },
    {
      titulo: "JAVASCRIPT",
    },
    {
      titulo: "WEB DEVELOPMENT",
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
      {idioma === "ESP" ? (
        <PortfolioList
          infoProyectos={proyectos}
          infoMenu={menuProyectos}
          /* funcionAbrirPopUp={abrirPopUp}
          abrirInfo={abrirInfo} */
          idioma = {idioma}
        />
      ) : (
        <PortfolioList
          infoProyectos={projects}
          infoMenu={projectsMenu}
         /*  funcionAbrirPopUp={abrirPopUp}
          abrirInfo={abrirInfo} */
          idioma = {idioma}
        />
      )}
    </>
  );
};

export default PortfolioListContainer;
