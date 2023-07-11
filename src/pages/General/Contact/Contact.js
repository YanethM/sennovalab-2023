import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "./Contact.css";
import Image from "react-bootstrap/Image";
import Line from "../../../assets/img/png/Line.png";
import Construccion from "../../../assets/img/png/Construccion.png";
import Industria from "../../../assets/img/png/Industria.png";
import Software from "../../../assets/img/png/Software.png";
import figura from "../../../assets/img/png/figura-pajaro.png";
import ContactForm from "../../../components/ContactForm/ContactForm";

function Contact() {
  return (
    <Container>
      <Row>
        <Col className="text-center" md={3}>
          <Row className="mt-3">
            <Col>
              <Image src={figura} style={{ width: "50px", height: "55px" }} />
            </Col>
            <Col>
              <h2 className="class-header">CONTACTANOS</h2>
              <Image src={Line} />
              <h3 className="p-0 m-0">Sennovalab</h3>
            </Col>
          </Row>
          <Row className="cards-line-margin">
            <Col>
              <Image
              src={Construccion}
              style={{ width: "120px", height: "140px" }}
              />
              <Image src={Industria} style={{ width: "120px", height: "140px" }} />
              <Image src={Software} style={{ width: "120px", height: "140px" }} />
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
