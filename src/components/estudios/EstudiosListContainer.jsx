import React from "react";
import EstudiosList from "./EstudiosList";
import { FaBootstrap } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import banderaEspania from "../../assets/imagenes/spanish-flag.png";
import banderaIngles from "../../assets/imagenes/usa-flag.png";
import banderaFrancia from "../../assets/imagenes/french-flag.png";

const EstudiosListContainer = () => {
  const menuProyectos = [
    {
      titulo: "PROGRAMACION",
    },
    {
      titulo: "IDIOMAS",
    },
  ];

  const cursos = [
    {
      titulo: "Español",
      nivel: "Nivel: Nativo",
      descripcion: "",
      categoria: "IDIOMAS",
      bandera: banderaEspania,
    },
    {
      titulo: "Inglés",
      nivel: "Nivel: Avanzado",
      descripcion: "Más de 10 años de estudios y prácticas en el idioma",
      categoria: "IDIOMAS",
      bandera: banderaIngles,
    },
    {
      titulo: "Francés",
      nivel: "Nivel: Básico",
      descripcion: "Comprensión lectora, capacidad de comunicacón básica",
      categoria: "IDIOMAS",
      bandera: banderaFrancia,
    },
    {
      titulo: "Desarrollo web",
      instituto: "CoderHouse",
      duracion: "Marzo 2023 - Mayo 2023",
      categoria: "PROGRAMACION",
      descripcion:
        "Curso de Desarrollo Web con enfoque en CSS, Bootstrap, Sass y Git, proporcionando habilidades para proyectos web colaborativos y contemporáneos.",
      id: 1,
      iconos: [<FaHtml5 />, <FaCss3Alt />, <FaBootstrap />],
    },
    {
      titulo: "JavaScript",
      instituto: "CoderHouse",
      duracion: "Mayo 2023 - Julio 2023",
      categoria: "PROGRAMACION",
      descripcion:
        "Curso de JavaScript, con énfasis en conceptos fundamentales y aplicaciones prácticas. Adquirí habilidades para desarrollar proyectos dinámicos y funcionales en la web",
      id: 2,
      iconos: [<RiJavascriptFill />],
    },
    {
      titulo: "React",
      instituto: "CoderHouse",
      duracion: "Agosto 2023 - Octubre 2023",
      categoria: "PROGRAMACION",
      descripcion:
        "Exploración de fundamentos y aplicaciones de React, se enfocó en desarrollar habilidades para proyectos web dinámicos y aplicaciones interactivas eficientes.",
      id: 3,
      iconos: [<FaReact />],
    },
    {
      titulo: "Wordpress",
      instituto: "CoderHouse",
      duracion: "Octubre 2023 - Noviembre 2023",
      categoria: "PROGRAMACION",
      descripcion:
        "Exploración de fundamentos y aplicaciones de WordPress, adquiriendo habilidades para crear y gestionar eficientemente sitios web dinámicos y funcionales",
      id: 4,
      iconos: [<FaWordpress />],
    },
  ];

  return <EstudiosList infoCursos={cursos} infoMenu={menuProyectos} />;
};

export default EstudiosListContainer;
