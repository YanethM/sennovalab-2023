import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <>
      <Col md={8}>
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
            <Form.Group className=" col col-sm-6" controlId="formGridAddress1">
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
            <Form.Group
              controlId="formGridCheckbox"
              className="col col-sm-12 d-flex justify-content-center"
            >
              <Button
                type="submit"
                className="me-4 btn btn-success btn-lg btn-block"
              >
                Confirmar y enviar
              </Button>
              <Button
                type="reset"
                className="me-4 btn btn-danger btn-lg btn-block"
              >
                Cancelar
              </Button>
            </Form.Group>
          </Row>
        </form>
      </Col>
    </>
  );
};

export default ContactForm;
