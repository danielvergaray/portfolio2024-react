import React from "react";
import NavBarList from "./NavBarList";
import { useRef, useContext } from "react";
import GeneralContext from "../context/GeneralContext";

const NavBarListContainer = () => {
  const sectionRef1 = useRef(null);
  const sectionRef2 = useRef(null);
  const sectionRef3 = useRef(null);
  const sectionRef4 = useRef(null);
  const opcionesNavBar = [
    {
      titulo: "SOBRE MI",
      ref: "1",
    },
    {
      titulo: "PORTFOLIO",
      ref: "2",
    },
    {
      titulo: "ESTUDIOS",
      ref: "3",
    },
    {
      titulo: "CLIENTES",
      ref: "4",
    },
    {
      titulo: "CONTACTO",
      ref: "5",
    },
  ];

  const navBarMenu = [
    {
      titulo: "ABOUT",
      ref: "1",
    },
    {
      titulo: "PORTFOLIO",
      ref: "2",
    },
    {
      titulo: "EDUCATION",
      ref: "3",
    },
    {
      titulo: "CLIENTS",
      ref: "4",
    },
    {
      titulo: "CONTACT",
      ref: "5",
    },
  ];

  const { idioma } = useContext(GeneralContext);

  return <NavBarList menu={idioma === "ESP" ? opcionesNavBar : navBarMenu} />;
};

export default NavBarListContainer;
