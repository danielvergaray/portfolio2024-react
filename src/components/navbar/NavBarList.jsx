import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";

const NavBarList = ({ menu }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [menuActivo, setMenuActivo] = useState(null);

  const [opcionActiva, setOpcionActiva] = useState("");

  const [scrolling, setScrolling] = useState(false);

  const handleMenuClick = (refIndex) => {
    handleClose();
    scrollFunction(refIndex);
  };

  useEffect(() => {
    // Cambio de color del navbar
    const handleScroll = () => {
      if (window.scrollY > 50) {
        // 50 es el ancho del navbar
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

  /*  console.log(opcionActiva);
  useEffect(() => {
    const handleScroll2 = () => {
      if (window.scrollY > 150) {
        setOpcionActiva("ABOUT");
      } 
      else if (window.scrollY > 250) {
        setOpcionActiva("PORTFOLIO");
      } 
      else if (window.scrollY > 350) {
        setOpcionActiva("ESTUDIOS");
      } 
      else if (window.scrollY > 450) {
        setOpcionActiva("CLIENTES");
      } 
      else if (window.scrollY > 550) {
        setOpcionActiva("CONTACTOS");
      }
      opcionActivaRef.current = opcionActiva;
    };
   
    window.addEventListener("scroll", handleScroll2);
    return () => {
      window.removeEventListener("scroll", handleScroll2);
    };
  }, []); */

  const scrollFunction = (refIndex) => {
    const ref = document.getElementById(`sectionRef${refIndex}`);
    setMenuActivo(refIndex);
    if (ref) {
      const scrollAmount = ref.offsetTop - 60;
      window.scrollTo({
        top: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <Navbar
        className={`navbar ${
          scrolling ? "bg-body-scroll" : "bg-body-tertiary"
        }`}
      >
        <Container>
          <Navbar.Brand href="/">PORTFOLIO</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {menu.map((opcion, index) => (
                <Nav.Link key={index}>
                  <NavLink
                    className={menuActivo === opcion.ref ? "menu-activo" : ""}
                    onClick={() => scrollFunction(`${opcion.ref}`)}
                  >
                    {opcion.titulo}
                  </NavLink>
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <section
        className={`navbar-mobile ${
          scrolling ? "bg-body-scroll" : "bg-body-tertiary"
        }`}
      >
        <div className="navbar-mobile_barra" variant="primary">
          <IoMenu onClick={handleShow} />
          <Navbar.Brand href="/">Inicio</Navbar.Brand>
        </div>

        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Navbar.Brand href="/">
              <Offcanvas.Title>PORTFOLIO</Offcanvas.Title>
            </Navbar.Brand>
          </Offcanvas.Header>
          <Offcanvas.Body>
            {menu.map((opcion, index) => (
              <Nav.Link key={index}>
                <NavLink onClick={() => handleMenuClick(`${opcion.ref}`)}>
                  {opcion.titulo}
                </NavLink>
              </Nav.Link>
            ))}
          </Offcanvas.Body>
        </Offcanvas>
      </section>
    </>
  );
};

export default NavBarList;
