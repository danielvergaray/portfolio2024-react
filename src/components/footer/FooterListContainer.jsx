import React, { useContext } from "react";
import FooterList from "./FooterList";
import { FiGithub } from "react-icons/fi";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import GeneralContext from "../context/GeneralContext";

const FooterListContainer = () => {
  const infoBotones = [
    {
      titulo: "Enviar un mensaje",
      link: "https://wa.me/51950011434",
    },
    {
      titulo: "Ir a mi Linkedin",
      link: "https://www.linkedin.com/in/daniel-vergaray/",
    },
  ];

  const infoButtons = [
    {
      titulo: "Send a message",
      link: "https://wa.me/51950011434",
    },
    {
      titulo: "Visit my Linkedin",
      link: "https://www.linkedin.com/in/daniel-vergaray/",
    },
  ];

  const barraInferior = [
    {
      titulo: "TELEFONO",
      dato: "+51 950 011 434",
      icono: <FiPhoneCall />,
    },

    {
      titulo: "GITHUB",
      dato: "https://github.com/danielvergaray",
      icono: <FiGithub />,
      link: "https://github.com/danielvergaray",
    },
    {
      titulo: "EMAIL",
      dato: "danielvergarayescobar@gmail.com",
      icono: <MdOutlineMail />,
      link: "mailto:danielvergarayescobar@gmail.com",
    },
  ];

  const bottomBar = [
    {
      titulo: "PHONE",
      dato: "+51 950 011 434",
      icono: <FiPhoneCall />,
    },

    {
      titulo: "GITHUB",
      dato: "https://github.com/danielvergaray",
      icono: <FiGithub />,
      link: "https://github.com/danielvergaray",
    },
    {
      titulo: "EMAIL",
      dato: "danielvergarayescobar@gmail.com",
      icono: <MdOutlineMail />,
      link: "mailto:danielvergarayescobar@gmail.com",
    },
  ];

  const { idioma } = useContext(GeneralContext);

  return (
    <FooterList
      infoBotones={idioma === "ESP" ? infoBotones : infoButtons}
      barraInferior={idioma === "ESP" ? barraInferior : bottomBar}
      idioma = {idioma}
    />
  );
};

export default FooterListContainer;
