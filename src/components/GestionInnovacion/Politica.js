import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import sennovalab from '../../assets/img/png/sennovalab.png';


const Politica = () => {
  
    return (
            <Container fluid>
              <Row>
                <Col xs={12} md={3}>
                  <Image src={sennovalab} />
        
                </Col>
        
                <Col xs={12} md={9}>
                  <h5>SENNOVALAB realiza actividades de asesoría y consultoría en Investigación, Desarrollo Tecnológico e Innovación, con el fin de brindar soluciones y mejoras a procesos, productos y/o servicios para los clientes y/o partes interesadas internas y externas, a partir de sus necesidades y expectativas, contribuyendo al aumento de la productividad y competitividad del sector productivo y a la calidad de la formación del SENA, asegurando la eficacia, eficiencia, efectividad y mejora continua del Sistema de Gestión de la Innovación (SGI) bajo los lineamientos de la NTC 5801.</h5>
                  <h2>Las promesas de valor en la gestión de I+D+i son las siguientes:</h2>
                  <p>1. Prestar servicios en actividades de I+D+i bajo estándares de calidad, cumpliendo los requisitos y procesos establecidos en el SGI.</p>
                  <p>2. Fomentar la cultura de la innovación, incentivando la generación de ideas y propuestas innovadoras, alianzas y colaboraciones estratégicas para el desarrollo de proyectos de I+D+i.</p>
                  <p>3. Cumplir con los objetivos y alcance previstos para cada proyecto o servicio, así como los relativos al SGI.</p>
                  <p>4. Generar una disciplina de gestión de riesgos y oportunidades que conduzca a prevenir o reducir efectos inesperados y al mejoramiento continuo.</p>
                  <p>5. Fortalecer las capacidades y conocimientos del talento humano para el desarrollo de competencias en actividades de I+D+i.</p>
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


export default Politica;







