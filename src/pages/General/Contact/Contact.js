import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "./Contact.css";
import Image from "react-bootstrap/Image";
import Line from "../../../assets/img/png/Line.png";
import construccion from "../../../assets/img/png/Construccion.png";
import industria from "../../../assets/img/png/Industria.png";
import software from "../../../assets/img/png/Software.png";
import figura from "../../../assets/img/png/figura-pajaro.png";
import ContactForm from "../../../components/ContactForm/ContactForm";

function Contact() {
  return (
    <Container>
      <Row>
        <Col className="text-center" md={3}>
          <Row className="mt-3 row-query-flex">
            <Col>
              <Image src={figura} style={{ width: "50px", height: "55px" }} />
            </Col>
            <Col>
              <h2 className="class-header">CONTACTANOS</h2>
              <Image src={Line} />
              <h3 className="p-0 m-0">SENNOVALAB</h3>
            </Col>
          </Row>
          <Row className="cards-line-margin">
            <Col>
              <Image
              src={construccion}
              style={{ width: "120px", height: "140px" }}
              />
              <Image src={industria} style={{ width: "120px", height: "140px" }} />
              <Image src={software} style={{ width: "120px", height: "140px" }} />
            </Col>
          </Row>
        </Col>
        <Col md={1}></Col>

        {/* Componente ContactForm */}
        <ContactForm />
      </Row>
    </Container>
  );
}

export default Contact;
