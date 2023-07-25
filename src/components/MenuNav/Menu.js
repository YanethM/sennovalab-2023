import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Menu.css";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import sennovalab from "../../assets/img/png/sennovalab.png";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";

function Menu() {
  const style = {
    width: "40px",
    height: "35px",
  };
  const UserMenu = (
    <Image
      src={"https://github.com/mshaaban0.png"}
      alt="UserName profile image"

      roundedCircle
      style={{ width: "40px", height: "35px" }}
    />
  );
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar expand="lg" className="navbar-margin" expanded={expanded}>
      <Container fluid className="Navbar">
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />
        <a href="/">
          <Image src={sennovalab} style={style} />
        </a>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Col sm={6}>
            <Nav className="me-5 align-items-center px-4">
              <Nav.Link href="/nosotros">Nosotros</Nav.Link>
              <NavDropdown title="Gestión de la innovación" className="mx-3 link-hover">
                <NavDropdown.Item href="/informacion" className=" link-hover">
                  <Link to="/informacion">Informacion General</Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="/gestion" className="link-hover">
                  <Link to="/gestion">Estrategia de Innovación</Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="/politica" className="link-hover">
                  <Link to="/politica">Politica de Innovación</Link>
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Lineas de Acción" className="link-hover mx-3">
                <NavDropdown.Item href="/const">
                  <Link to="/const">Linea de Construccion</Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="/ind">
                  <Link to="/ind">Linea de Industria</Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="/desa">
                  <Link to="/ind">Linea de Software</Link>
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/equipo" >Equipo</Nav.Link>
              <Nav.Link href="/servicios" >Servicios</Nav.Link>
            </Nav>
          </Col>
          <Col sm={1}></Col>
          <Col sm={5}>
            <Nav className="align-items-center px-4 ms-5">
              <Nav.Link href="/contacto">Contacto</Nav.Link>

              <Nav.Link href="/Pqrs" className="mx-3 link-hover">PQRS</Nav.Link>
              <Nav.Link href="#link" className="mx-3 link-hover">Preguntas Frecuentes</Nav.Link>

              <NavDropdown title={UserMenu} className="ms-5 link-hover">
                <NavDropdown.Item href="#action/3.1">Registrarse</NavDropdown.Item>

                <NavDropdown.Item href="#action/3.3">Ingresar</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Col>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;
