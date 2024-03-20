import React , {useContext} from "react";
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
import GeneralContext from "../context/GeneralContext";
import IdiomasList from "./IdiomasList";

const EstudiosListContainer = () => {

  const { idioma } = useContext(GeneralContext);

  const menuProyectos = [
    {
      titulo: "PROGRAMACIÓN",
    },
    {
      titulo: "IDIOMAS",
    },
  ];

  const projectsMenu = [
    {
      titulo: "PROGRAMMING",
    },
    {
      titulo: "IDIOMS",
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
      categoria: "PROGRAMACIÓN",
      descripcion:
        "Curso de Desarrollo Web con enfoque en CSS, Bootstrap, Sass y Git, proporcionando habilidades para proyectos web colaborativos y contemporáneos.",
      id: 1,
      iconos: [<FaHtml5 />, <FaCss3Alt />, <FaBootstrap />],
    },
    {
      titulo: "JavaScript",
      instituto: "CoderHouse",
      duracion: "Mayo 2023 - Julio 2023",
      categoria: "PROGRAMACIÓN",
      descripcion:
        "Curso de JavaScript, con énfasis en conceptos fundamentales y aplicaciones prácticas. Adquirí habilidades para desarrollar proyectos dinámicos y funcionales en la web",
      id: 2,
      iconos: [<RiJavascriptFill />],
    },
    {
      titulo: "React",
      instituto: "CoderHouse",
      duracion: "Agosto 2023 - Octubre 2023",
      categoria: "PROGRAMACIÓN",
      descripcion:
        "Exploración de fundamentos y aplicaciones de React, se enfocó en desarrollar habilidades para proyectos web dinámicos y aplicaciones interactivas eficientes.",
      id: 3,
      iconos: [<FaReact />],
    },
    {
      titulo: "Wordpress",
      instituto: "CoderHouse",
      duracion: "Octubre 2023 - Noviembre 2023",
      categoria: "PROGRAMACIÓN",
      descripcion:
        "Exploración de fundamentos y aplicaciones de WordPress, adquiriendo habilidades para crear y gestionar eficientemente sitios web dinámicos y funcionales",
      id: 4,
      iconos: [<FaWordpress />],
    },
  ];

  const courses = [
    {
      titulo: "Spanish",
      nivel: "Level: Native",
      descripcion: "",
      categoria: "IDIOMS",
      bandera: banderaEspania,
    },
    {
      titulo: "English",
      nivel: "Level: Proficient",
      descripcion: "More than 10 years of studies and practices in the language.",
      categoria: "IDIOMS",
      bandera: banderaIngles,
    },
    {
      titulo: "French",
      nivel: "Nivel: A2",
      descripcion: "Reading comprehension, basic communication skills.",
      categoria: "IDIOMS",
      bandera: banderaFrancia,
    },
    {
      titulo: "Web development",
      instituto: "CoderHouse",
      duracion: "March 2023 - May 2023",
      categoria: "PROGRAMMING",
      descripcion:
        "Web Development Course with a focus on CSS, Bootstrap, Sass and Git, providing skills for collaborative and contemporary web projects.",
      id: 1,
      iconos: [<FaHtml5 />, <FaCss3Alt />, <FaBootstrap />],
    },
    {
      titulo: "JavaScript",
      instituto: "CoderHouse",
      duracion: "May 2023 - July 2023",
      categoria: "PROGRAMMING",
      descripcion:
        "JavaScript course, with emphasis on fundamental concepts and practical applications. I acquired skills to develop dynamic and functional projects on the web.",
      id: 2,
      iconos: [<RiJavascriptFill />],
    },
    {
      titulo: "React",
      instituto: "CoderHouse",
      duracion: "August 2023 - October 2023",
      categoria: "PROGRAMMING",
      descripcion:
        "Exploration of React fundamentals and applications, focused on developing skills for dynamic web projects and efficient interactive applications.",
      id: 3,
      iconos: [<FaReact />],
    },
    {
      titulo: "Wordpress",
      instituto: "CoderHouse",
      duracion: "October 2023 - November 2023",
      categoria: "PROGRAMMING",
      descripcion:
        "Exploration of WordPress fundamentals and applications, acquiring skills to efficiently create and manage dynamic and functional websites.",
      id: 4,
      iconos: [<FaWordpress />],
    },
  ];

 /*  return 
  <EstudiosList infoCursos={idioma === "ESP" ? cursos : courses} infoMenu={idioma === "ESP" ? menuProyectos: projectsMenu} />; */

  return (
    <>
      {idioma === "ESP" ? (
        <EstudiosList infoCursos={cursos} infoMenu={menuProyectos} />
      ) : (
        <EstudiosList infoCursos={courses}  infoMenu={projectsMenu}/>
      )}
    </>
  );



};




export default EstudiosListContainer;
