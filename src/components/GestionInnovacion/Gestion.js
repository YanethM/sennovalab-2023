import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import sennovalab from "../../assets/img/png/sennovalab.png";

const Gestion = () => {
  return (
    <Container fluid className="mt-5">
      <Row>
        <Col xs={6} md={4}>
          <Image src={sennovalab} />
        </Col>

        <Col xs={6} md={5}>
          <h5 style={{ color: 'black' }}>
            El Ambiente de Servicios Tecnológicos en I+D+i SENNOVALAB cuenta con
            una estrategia de innovación que promueve la creatividad, la cultura
            de la innovación y la generación de ideas y oportunidades con el fin
            de dar respuesta a las necesidades del sector productivo y del SENA
            a través de los servicios de asesoría y consultoría en actividades
            de investigación, desarrollo tecnológico e innovación (I+D+i), para
            contribuir al incremento de la productividad y la competitividad de
            las empresas de Caldas, generando capacidades en I+D+i, nuevos o
            mejorados productos (bienes o servicios) y procesos a través de
            soluciones innovadoras.
          </h5>
        </Col>
        <Col xs={6} md={3}>
          <h5 style={{ color: 'black' }}>
            Esta estrategia se enfoca en convertir a SENNOVALAB en referente
            regional en la prestación de servicios de asesoría y consultoría en
            formulación y gestión de proyectos de I+D+i, y en el cumplimiento de
            su propuesta de valor: Contribuir al incremento de la productividad
            y la competitividad de las empresas de Caldas y a la calidad de la
            formación del SENA, a través de la prestación de nuestros servicios
            en actividades de I+D+i.
          </h5>
        </Col>
      </Row>
    </Container>
  );
};

export default Gestion;
