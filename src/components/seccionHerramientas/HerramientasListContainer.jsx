import React from "react";
import HerramientasList from "./HerramientasList";
import { AiTwotoneHtml5 } from "react-icons/ai";
import { FaBootstrap } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import { DiCss3 } from "react-icons/di";
import { SiSass } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";

const HerramientasListContainer = () => {
  const infoHerramientas = {
    herramientas: [
      {
        nombre: "wordpress",
        icono: <FaWordpress />,
      },

      {
        nombre: "html5",
        icono: <FaHtml5 />,
      },
      {
        nombre: "css3",
        icono: <DiCss3 />,
      },
      {
        nombre: "bootstrap",
        icono: <FaBootstrap />,
      },
      {
        nombre: "sass",
        icono: <SiSass />,
      },
      {
        nombre: "git",
        icono: <FaGitAlt />,
      },
      {
        nombre: "github",
        icono: <FaGithub />,
      },
      {
        nombre: "javascript",
        icono: <IoLogoJavascript />,
      },
      {
        nombre: "react",
        icono: <FaReact />,
      },
      
    ],
  };


  return <HerramientasList herramientas={infoHerramientas.herramientas} />;
};

export default HerramientasListContainer;
