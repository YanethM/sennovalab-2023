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
import "./Menu.css";

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
    <Container fluid className="Navbar">
      <Row >
        <Col sm={5}>
        
          <Navbar expand="lg" >
          <div className="Contenedor"> </div>
            <Container>
             
              <a href='/Sennovalab' ><Image src={sennovalab} style={style} /></a>
            
            
            
             

                  <Nav.Link href="Nosotros">Nosotros</Nav.Link>

                  <NavDropdown title="Gestión de la innovación" >
                    <NavDropdown.Item href="Informacion">Informacion General</NavDropdown.Item>
                    <NavDropdown.Item href="Gestion">Estrategia de Innovación </NavDropdown.Item>
                    <NavDropdown.Item href="Politica">Politica de Innovación</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown title="Lineas de Acción" >
                    <NavDropdown.Item href="Const">Linea de Construccion</NavDropdown.Item>
                    <NavDropdown.Item href="Ind">Linea de Industria</NavDropdown.Item>
                    <NavDropdown.Item href="Desa">Linea de Software</NavDropdown.Item>
                  </NavDropdown>




                  <Nav.Link href="Equipo" >Equipo</Nav.Link>
                  <Nav.Link href="Servicios" >Servicios</Nav.Link>
                  </Container>
                 
          </Navbar>
                  </Col>
                  <Col sm={2}>
                 </Col> 
                  <Col sm={5}>
                    
                  <Navbar expand="lg" >
                  <div className="Contenedor"> </div>
            <Container>

                  <br />
                  <br />
                  <br />
                  <Nav.Link href="Contact" >Contacto</Nav.Link>
                  <Nav.Link href="#link" >PQRS</Nav.Link>
                  <Nav.Link href="#link" >Preguntas Frecuentes</Nav.Link>

                  <NavDropdown title={UserMenu}>
                    <NavDropdown.Item href="#action/3.1">Registrarse</NavDropdown.Item>

                    <NavDropdown.Item href="#action/3.3">Ingresar</NavDropdown.Item>


                  </NavDropdown>

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

