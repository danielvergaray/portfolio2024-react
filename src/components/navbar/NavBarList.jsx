import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";
import React, { useEffect, useState, useContext } from "react";
import GeneralContext from "../context/GeneralContext";
import { IoMenu } from "react-icons/io5";
import logo from "../../assets/imagenes/LOGO.png";
import banderaEspania from "../../assets/imagenes/spanish-flag.png";
import banderaIngles from "../../assets/imagenes/usa-flag.png";
import Dropdown from "react-bootstrap/Dropdown";

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

  const { setIdioma, idioma } = useContext(GeneralContext);
  return (
    <>
      <Navbar
        className={`navbar ${
          scrolling ? "bg-body-scroll" : "bg-body-tertiary"
        }`}
      >
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="logo" />
          </Navbar.Brand>
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
          <div className="navbar-idiomas">
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                <img
                  src={idioma === "ESP" ? banderaEspania : banderaIngles}
                  onClick={() => setIdioma("ESP")}
                />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="">
                  <img
                    src={idioma === "ESP" ? banderaIngles : banderaEspania}
                    onClick={() => setIdioma(idioma === "ESP" ? "ENG" : "ESP")}
                  />
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Container>
      </Navbar>

      <section
        className={`navbar-mobile ${
          scrolling ? "bg-body-scroll" : "bg-body-tertiary"
        }`}
      >
        <div className="navbar-mobile_barra" variant="primary">
          <IoMenu onClick={handleShow} />
          <div>
            <Navbar.Brand href="/">
              <img src={logo} alt="logo" />
            </Navbar.Brand>
          </div>
        </div>

        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Navbar.Brand href="/">
              <Offcanvas.Title>
                <img src={logo} alt="logo" />
              </Offcanvas.Title>
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
            <div className="offcanvas-idiomas">
              <div className="offcanvas-idiomas-pais">
                <img src={banderaEspania} onClick={() => setIdioma("ESP")} />
              </div>
              <div className="offcanvas-idiomas-pais">
                <img src={banderaIngles} onClick={() => setIdioma("ENG")} />
              </div>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </section>
    </>
  );
};

export default NavBarList;
