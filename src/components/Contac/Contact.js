import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import "./Contact.css";
import Image from "react-bootstrap/Image";
import Line from "../../assets/img/png/Line.png";
import sennovalab from "../../assets/img/png/sennovalab.png";
import Construccion from "../../assets/img/png/Construccion.png";
import Industria from "../../assets/img/png/Industria.png";
import Software from "../../assets/img/png/Software.png";

function Contact() {
  return (
    <Container>
      <Row>
        <Col className="text-center" md={3}>
          <h2 className="h">CONTACTANOS</h2>
          <Image src={sennovalab} style={{ width: "50px", height: "55px" }} />
          <Image src={Line} />
          <h3 className="h">Sennovalab</h3>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Image
            src={Construccion}
            style={{ width: "120px", height: "140px" }}
          />
          <br />
          <br />
          <Image src={Industria} style={{ width: "120px", height: "140px" }} />
          <Image src={Software} style={{ width: "120px", height: "140px" }} />
        </Col>
        <Col md={1}></Col>

        {/* aca empieza el form */}
        <Col md={8}>
          <br />
          <br />
          <br />
          <br />

          <form className="container mt-3 mb-3 mod-form">
            <Row className="mb-3">
              <Form.Group controlId="formBasicEmail" className="col">
                <Form.Control
                  placeholder="Nombre(s)"
                  type="text"
                  className="form-control"
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group controlId="formGridState" className="col col-sm-6">
                <Form.Select
                  defaultValue="ti"
                  className="form-control"
                  name="a_state"
                >
                  <option value="Tipo de documento">Tipo de documento</option>
                  <option value="ti">Tarjeta de identidad</option>
                  <option value="cc">Cédula de ciudadanía</option>
                  <option value="te">Tarjeta de extranjería</option>
                  <option value="ce">Cédula de extranjería</option>
                  <option value="pa">Pasaporte</option>
                </Form.Select>
              </Form.Group>
              <Form.Group controlId="formGridpin" className="col col-sm-6">
                <Form.Control
                  placeholder="Número de documento"
                  className="form-control"
                  type="number"
                  name="document"
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group controlId="formBasicEmail" className="col">
                <Form.Control
                  placeholder="Correo electrónico"
                  type="email"
                  name="email"
                  className="form-control"
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group
                className=" col col-sm-6"
                controlId="formGridAddress1"
              >
                <Form.Control
                  placeholder="Motivo"
                  className="form-control"
                  type="text"
                  name="motivo"
                />
              </Form.Group>
              <Form.Group className="col col-sm-6" controlId="formGridAddress2">
                <Form.Control
                  placeholder="Celular"
                  className="form-control"
                  name="phone"
                  type="number"
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group controlId="formGridlabel" className="col col-sm-12">
                <Form.Control
                  as="textarea"
                  placeholder="Dejanos tus comentarios"
                  rows="{3}"
                  className="form-control"
                  name="comments"
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Control type="file" placeholder="Adjuntar archivo" />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group
                className="mb-3 d-flex justify-content-center"
                controlId="formBasicCheckbox"
              >
                <Form.Check
                  type="checkbox"
                  label="Acepto terminos y condiciones"
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
							<Form.Group controlId="formGridCheckbox" className="col col-sm-12 d-flex justify-content-center">
								<Button type="submit" onClick="{submitButton}" className="me-4 btn btn-success btn-lg btn-block">Submit</Button>
								<Button type="reset" onClick="{resetButton}" className="me-4 btn btn-danger btn-lg btn-block">Cancel</Button>
							</Form.Group>
					</Row>
          </form>
        </Col>
        {/* Termina el form */}
      </Row>
    </Container>
  );
}

export default Contact;
