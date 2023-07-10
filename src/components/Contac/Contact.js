import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import "./Contact.css";
import Image from 'react-bootstrap/Image';
import Line from '../../assets/img/png/Line.png';
import sennovalab from '../../assets/img/png/sennovalab.png';
import Construccion from '../../assets/img/png/Construccion.png';
import Industria from '../../assets/img/png/Industria.png';
import Software from '../../assets/img/png/Software.png';







function Contact() {
    return (

        <Container >
          
            <Row>
                <Col className='text-center' md={3}>

                    <h2 className="h">CONTACTANOS</h2>
                    <Image src={sennovalab} style={{ width: '50px', height: '55px', }} />
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
                    <Image src={Construccion} style={{ width: '120px', height: '140px', }} />
                    <br />
                    <br />
                    <Image src={Industria} style={{ width: '120px', height: '140px', }} />
                    <Image src={Software} style={{ width: '120px', height: '140px', }} />
                </Col>
                <Col md={1}></Col>
                <Col md={8}>
                    <br />
                    <br />
                    <h1></h1>
                    <br />
                    <br />
                    <form action="#" id="contact_form" className="contact-form contact-grid">
                       

                            <div className="form-field name">
                                <label className="label" for="fname">Nombre(s)</label>
                                <input id="fname" type="text" required />
                            </div>
                            <div className="form-field subject">
                                <label className="label">Tipo de documento</label>
                                <select name="subject" form="contact_form" required>
                                    <option value="cc" selected>Cedula Ciudadania</option>
                                    <option value="ce">Cedula Extrangeria</option>
                                    <option value="ti">Tarjeta Identidas</option>
                                    <option value="other">Otro</option>
                                </select>
                            </div>

                            <div className="form-field email">
                                <label className="label" for="numerodocumento">Numero de documento</label>
                                <input id="email" type="email" required />
                            </div>

                            <div className="form-field email">
                                <label className="label" for="email">Correo electronico</label>
                                <input id="email" type="email" required />
                            </div>
                            <div className="form-field phone">
                                <label className="label" for="phone">Motivo</label>
                                <input id="phone" type="tel" required />
                            </div>
                            <div className="form-field phone">
                                <label className="label" for="phone">Celular</label>
                                <input id="phone" type="tel" required />
                            </div>
                            <div className="form-field phone">
                                <label className="label" for="contacto">Contactar con alguien especifico</label>
                                <input id="contacto" type="tel" required />
                            </div>
                            <br />


                            <div className="form-field comment-box">
                                <label className="label">Dejanos tus comentarios</label>
                                <textarea name="comment-box" id="message"></textarea>
                            </div>
                            <div className="form-field subject">
                                <label class='checkbox'>
                                    <input type='checkbox' value='TRUE' title='Keep me Signed in' />Acepta terminos y condiciones</label>
                            </div>
                            <br />
                            <br />

                            <div className="submit-button">
                                <button id="submit-btn" className="btn" type="submit" value="submit" onclick="validateForm()">Confirmar y enviar</button>
                            </div>
                        

                    </form>

                </Col>

            </Row>
        </Container>

    );
}



export default Contact;