import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import sennovalab from "../../assets/img/png/sennovalab.png";
import { Col, Container, Image, Row } from 'react-bootstrap';
import './GestionI.css';

const GestionI = () => {
  return (
    <Container fluid >

      <Row>
        <Col sm={3}>
          <div className='Co1'>
            <h1 className='h-p1' >INFORMACIÓN</h1>
            <div className='Imagenes-container1'>
              <Image className='i-m1' src={sennovalab} style={{ width: '70px', height: '70px', }} />
              <div className="li-1"></div>
            </div>
            <h1 className='h-p2'>GENERAL</h1>
          </div>
        </Col>
        <Col sm={1}></Col>
        <Col sm={7}>
          <div>
            <h2 className='h-p3'>SENNOVALAB</h2>
            <div className='texto-pa-1'>
              <p>Fomenta la creatividad, la cultura de la innovación y la generación de ideas y oportunidades, con el fin de dar respuesta a las necesidades del sector productivo y del SENA, a través de servicios de asesoría y consultoría en actividades de I+D+i, en las líneas de Industria, Construcción y Desarrollo de Software, bajo la NTC 5801:2018 “Sistema de Gestión de la Innovación”</p>

              <div className=""></div>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col sm={3}>
          <div className='Co2'>
            <h1 className='h-p4' >POLITICA DE</h1>
            <div className='Imagenes-container1'>
              <Image className='i-m2' src={sennovalab} style={{ width: '70px', height: '70px', }} />
              <div className="li-2"></div>
            </div>
            <h1 className='h-p5'>INNOVACIÓN</h1>
          </div>
        </Col>
        <Col sm={1}></Col>
        <Col sm={6}>
          <div>
            <h2 className='h-p6'>SENNOVALAB</h2>
            <div className='texto-pa-2'>
              <p>Realiza actividades de asesoría y consultoría en Investigación, Desarrollo Tecnológico e Innovación, con el fin de brindar soluciones y mejoras a procesos, productos y/o servicios para los clientes y/o partes interesadas internas y externas, a partir de sus necesidades y expectativas, contribuyendo al aumento de la productividad y competitividad del sector productivo y a la calidad de la formación del SENA, asegurando la eficacia, eficiencia, efectividad y mejora continua del Sistema de Gestión de la Innovación (SGI) bajo los lineamientos de la NTC 5801.</p>
              <h2>Las promesas de valor en la gestión de I+D+i son las siguientes:</h2>
            </div>
            <div className='texto-pa-3'>
              <p>1. Prestar servicios en actividades de I+D+i bajo estándares de calidad, cumpliendo los requisitos y procesos establecidos en el SGI.</p>
              <p>2. Fomentar la cultura de la innovación, incentivando la generación de ideas y propuestas innovadoras, alianzas y colaboraciones estratégicas para el desarrollo de proyectos de I+D+i.</p>
              <p>3. Cumplir con los objetivos y alcance previstos para cada proyecto o servicio, así como los relativos al SGI.</p>
              <p>4. Generar una disciplina de gestión de riesgos y oportunidades que conduzca a prevenir o reducir efectos inesperados y al mejoramiento continuo.</p>
              <p>5. Fortalecer las capacidades y conocimientos del talento humano para el desarrollo de competencias en actividades de I+D+i.</p>
            </div>
          </div>
        </Col>
        <Col sm={2}></Col>
      </Row>
      <Row>
        <Col sm={3}>
          <div className='Co1'>
            <h1 className='h-p7' >ESTRATEGIA DE</h1>
            <div className='Imagenes-container1'>
              <Image className='i-m3' src={sennovalab} style={{ width: '70px', height: '70px', }} />
              <div className="li-3"></div>
            </div>
            <h1 className='h-p8'>INNOVACIÓN</h1>
          </div>
        </Col>
        <Col sm={1}></Col>
        <Col sm={7}>
            <div className='texto-pa-1'>
              <p>El Ambiente de Servicios Tecnológicos en I+D+i SENNOVALAB cuenta con una estrategia de innovación que promueve la creatividad, la cultura de la innovación y la generación de ideas y oportunidades con el fin de dar respuesta a las necesidades del sector productivo y del SENA a través de los servicios de asesoría y consultoría en actividades de investigación, desarrollo tecnológico e innovación (I+D+i), para contribuir al incremento de la productividad y la competitividad de las empresas de Caldas, generando capacidades en I+D+i, nuevos o mejorados productos (bienes o servicios) y procesos a través de soluciones innovadoras.</p>
              <p>Esta estrategia se enfoca en convertir a SENNOVALAB en referente regional en la prestación de servicios de asesoría y consultoría en formulación y gestión de proyectos de I+D+i, y en el cumplimiento de su propuesta de valor: Contribuir al incremento de la productividad y la competitividad de las empresas de Caldas y a la calidad de la formación del SENA, a través de la prestación de nuestros servicios en actividades de I+D+i.</p>
            </div>
        </Col>
      </Row>
    </Container>
  );
};

export default GestionI;
