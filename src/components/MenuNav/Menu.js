import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import sennovalab from '../../assets/img/png/sennovalab.png';
import Image from 'react-bootstrap/Image';

function Menu() {

  const style = {
    width: '40px',
    height: '35px',

  };


  const UserMenu = (
    <Image
      src={'https://github.com/mshaaban0.png'}
      alt="UserName profile image"
      roundedCircle
      style={{ width: '40px', height: '35px', }}

    />
  )

  return (
    <Container fluid>
      <Row>
        <Col>
          <Navbar bg="light" expand="lg" className='justify-content-evenly' end   >
            <Container>
              <Image src={sennovalab} style={style} fluid thumbnail />
              {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto" >
                  <Nav.Link href="Sennovalab">Sennovalab</Nav.Link>
                  <Nav.Link href="Nosotros">Nosotros</Nav.Link>

                  <NavDropdown title="Gestión de la innovación" id="basic-nav-dropdown">
                    <NavDropdown.Item href="Informacion">Informacion General</NavDropdown.Item>
                    <NavDropdown.Item href="Gestion">Estrategia de Innovación </NavDropdown.Item>
                    <NavDropdown.Item href="Politica">Politica de Innovación</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown title="Lineas de Acción" id="basic-nav-dropdown">
                    <NavDropdown.Item href="Const">Linea de Construccion</NavDropdown.Item>
                    <NavDropdown.Item href="Ind">Linea de Industria</NavDropdown.Item>
                    <NavDropdown.Item href="Desa">Linea de Software</NavDropdown.Item>
                  </NavDropdown>




                  <Nav.Link href="Equipo" >Equipo</Nav.Link>
                  <Nav.Link href="Servicios" >Servicios</Nav.Link>


                  <br />
                  <br />
                  <br />
                  <Nav.Link href="Contact" >Contacto</Nav.Link>
                  <Nav.Link href="#link" >PQRS</Nav.Link>
                  <Nav.Link href="#link" >Preguntas Frecuentes</Nav.Link>

                  <NavDropdown title={UserMenu} id="basic-nav-dropdown" >
                    <NavDropdown.Item href="#action/3.1">Registrarse</NavDropdown.Item>

                    <NavDropdown.Item href="#action/3.3">Ingresar</NavDropdown.Item>


                  </NavDropdown>

                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>

        </Col>

        {/* <Col>2 of 2</Col> */}
      </Row>
      {/* <Row>
      <Col>1 of 3</Col>
      <Col>2 of 3</Col>
      <Col>3 of 3</Col>
    </Row> */}
    </Container>

  );
}



export default Menu;

