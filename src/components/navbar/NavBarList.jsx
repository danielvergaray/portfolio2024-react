import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
import { useRef } from "react";
import scrollToSection from "../scroll/scrollUtils";
import GeneralContext from "../context/GeneralContext";
import { useContext } from "react";
import { useEffect, useState } from "react";

const NavBarList = ({ menu }) => {
 

  const [scrolling, setScrolling] = useState(false);

  useEffect(() => { // Cambio de color del navbar
    const handleScroll = () => {
      if (window.scrollY > 50) { // 50 es el ancho del navbar
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollFunction = (refIndex) => {
    const ref = document.getElementById(`sectionRef${refIndex}`);
    if (ref) {
      const scrollAmount = ref.offsetTop-50;
      window.scrollTo({
        top: scrollAmount,
        behavior: "smooth",
      });
    }
  };
  

  return (
    <Navbar expand="lg" className={`navbar ${scrolling ? "bg-body-scroll" : "bg-body-tertiary"}`}>
      <Container>
        <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {menu.map((opcion, index) => (
              <Nav.Link key={index}>
                <NavLink onClick={() => scrollFunction(`${opcion.ref}`)}>
                  {opcion.titulo}
                </NavLink>
              </Nav.Link>
            ))}
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarList;
