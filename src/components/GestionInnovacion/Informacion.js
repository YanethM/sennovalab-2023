import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import sennovalab from '../../assets/img/png/sennovalab.png';



const Informacion = () => {
    return (
            <Container fluid>
            
              <Row>
                <Col xs={12} md={3}>
                  <Image src={sennovalab} />
        
                </Col>
        
                <Col xs={12} md={9}>
                  <h1>SENNOVALAB</h1>
                  <br/>
                  <br/>
                  <h3>Fomenta la creatividad, la cultura de la innovación y la generación de ideas y oportunidades, con el fin de dar respuesta a las necesidades del sector productivo y del SENA, a través de servicios de asesoría y consultoría en actividades de I+D+i, en las líneas de Industria, Construcción y Desarrollo de Software, bajo la NTC 5801:2018 “Sistema de Gestión de la Innovación”.</h3>
                  
                </Col>
              </Row>
        
              {/*     Contenido 2 */}
              <Row>
                <Col xs={12} md={4}>
        
               
                  </Col>
                </Row>
            </Container>
        
          );
        }


export default Informacion;