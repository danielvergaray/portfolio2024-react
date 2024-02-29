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

  const scrollFunction = (refIndex) => {
    const ref = document.getElementById(`sectionRef${refIndex}`);
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
        expand="lg"
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
                  <NavLink onClick={() => scrollFunction(`${opcion.ref}`)}>
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
        <div
          className="navbar-mobile_barra"
          variant="primary"
          onClick={handleShow}
        >
          <IoMenu />
          <NavLink>PORTFOLIO</NavLink>
        </div>

        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>PORTFOLIO</Offcanvas.Title>
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
