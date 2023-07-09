import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Menu.css";

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

  return (
    <Navbar expand="lg" className="navbar-margin">
      <Container fluid>
        <Nav className="mr-auto align-items-center">
          <a href="/">
            <Image src={sennovalab} style={style} />
          </a>
          {/* enlaces parte inicial del navbar */}
          <Nav className="me-5 align-items-center px-4">
            <Nav.Link href="/nosotros" className="mx-3 link-hover" >
              <Link to="/nosotros">Nosotros</Link>
            </Nav.Link>
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
                <Link to="/desa">Linea de Software</Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="equipo" className="mx-3 link-hover">
              <Link to="/equipo">Equipo</Link>
            </Nav.Link>
            <Nav.Link href="servicios" className="mx-3 link-hover">
              <Link to="/servicios">Servicios</Link>
            </Nav.Link>
          </Nav>
          {/* enlaces parte final del navbar */}
          <Nav className="align-items-center px-4 ms-5">
            <Nav.Link href="/contact" className="mx-3 ms-5 link-hover">
              <Link to="/contact">Contacto</Link>
            </Nav.Link>
            <Nav.Link href="#link" className="mx-3 link-hover">PQRS</Nav.Link>
            <Nav.Link href="#link" className="mx-3 link-hover">Preguntas Frecuentes</Nav.Link>

            <NavDropdown title={UserMenu} className="ms-5 link-hover">
              <NavDropdown.Item href="#action/3.1">Registrarse</NavDropdown.Item>

              <NavDropdown.Item href="#action/3.3">Ingresar</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Menu;
