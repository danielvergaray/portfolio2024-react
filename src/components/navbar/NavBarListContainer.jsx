import React from "react";
import NavBarList from "./NavBarList";
import { useRef } from "react";

const NavBarListContainer = () => {
  const sectionRef1 = useRef(null);
  const sectionRef2 = useRef(null);
  const sectionRef3 = useRef(null);
  const sectionRef4 = useRef(null);
  const opcionesNavBar = [
    {
      titulo: "ABOUT",
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

  /* const sectionRefs = {
    sectionRef1: useRef(null),
    sectionRef2: useRef(null),
    sectionRef3: useRef(null),
    sectionRef4: useRef(null),
  }; */

  return <NavBarList menu={opcionesNavBar} /* sectionRefs={sectionRefs} */ />;
};

export default NavBarListContainer;
