import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from 'react-bootstrap/InputGroup';
import "./ContactForm.css";
import { BsPerson, BsPersonVcard, BsEnvelopeCheck, BsListUl, BsPhone } from "react-icons/bs";


const ContactForm = () => {
  return (
    <>
      <Col md={8}>
        <form className="container mt-3 mb-3 mod-form">
          <Row className="mb-3">
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1" className="icon-form">{<BsPerson />}</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Nombre(s)"
                aria-label="Username"
                aria-describedby="basic-addon1"
                name="name"
              />
            </InputGroup>
          </Row>
          <Row className="row-flex">
            <Form.Group className="col">
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
            <InputGroup  className="col">
              <InputGroup.Text id="basic-addon1 col">{<BsPersonVcard />}</InputGroup.Text>
              <Form.Control
                type="number"
                placeholder="Número de documento"
                aria-label="Id"
                aria-describedby="basic-addon1"
                name="id"
              />
            </InputGroup>
          </Row>
          <Row className="mb-3">
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">{<BsEnvelopeCheck />}</InputGroup.Text>
              <Form.Control
                type="email"
                placeholder="Correo electronico"
                aria-label="Email"
                aria-describedby="basic-addon1"
                name="email"
              />
            </InputGroup>
          </Row>
          <Row className="row-flex">
            <InputGroup className="col">
              <InputGroup.Text id="basic-addon1">{<BsListUl />}</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Motivo"
                aria-label="Reason"
                aria-describedby="basic-addon1"
                name="reason"
              />
            </InputGroup>
            <InputGroup className="col">
              <InputGroup.Text id="basic-addon1">{<BsPhone />}</InputGroup.Text>
              <Form.Control
                type="number"
                placeholder="Celular"
                aria-label="Phone"
                aria-describedby="basic-addon1"
                name="phone"
              />
            </InputGroup>
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
