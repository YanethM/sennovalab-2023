import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import publicidad from '../../assets/img/jpg/publicity.jpg';
import Qr from '../../assets/img/png/Qr.png';
import "./Blog.css";


function Blog() {
    return (
        <Container fluid>
            <div className="Contenido1">
                <Row>
                    <Col sm={12} className="Cota0">
                        <div className="Contai1">
                            <Image
                                className="Pulicidad" src={publicidad}
                            />
                        </div>
                    </Col>
                </Row>
                <div className="Contai2">
                    <Row>
                        <Col sm={12} className="Cota1">
                            <h3 className='h-3'>
                                Fortalezca sus conocimientos en actividades de I+D+i
                            </h3>

                            <h5 className='h-5'>
                                Desde SENNOVALAB, lo invitamos a participar en la asistencia técnica en la implementación de la NTC 5801:2018 "Sistema de Gestión de la Innovación”
                            </h5>
                        </Col>

                        <Col sm={12} className="Contai3">
                            <h5 className='h_5'>
                                Fechas:  del  28 agosto al 06 de septiembre 2023
                            </h5>
                            <h5 className='h_5'>
                                Modalidad Virtual: 8:00 am-10:00 am
                            </h5>
                            <h5 className='h_5'>
                                Modalidad Presencial:4:00 pm-6:00 pm
                            </h5>
                            <h5 className='h_1'>
                                Ya están abiertas las inscripciones, acceda a su cupo
                            </h5>
                        </Col>
                    </Row>
                </div >

                <Row>
                    <Col>
                        <div className="Contai4">
                            <p className="t1">Transferencia de conocimiento dirigida a:</p>
                            <p className="t1">Todas aquellas personas interesadas en mejorar sus conocimientos en sistemas de gestión y actividades de Ciencia, Tecnología e Innovación</p>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col sm={6} className="Cota3">
                        <div className="Contai5">
                            <h4>En esta asistencia técnica usted adquirirá conocimientos sobre:</h4>
                            <ul>
                                <li>1. Introducción a la NTC 5801:2018</li>
                                <li>2. Modelo del Proceso de Innovación</li>
                                <li>3. Términos y definiciones</li>
                                <li>4. Contexto de la organización</li>
                                <li>5. Liderazgo</li>
                                <li>6. Planificación</li>
                                <li>7. Soporte</li>
                                <li>8. Operación</li>
                                <li>9. Evaluación del desempeño</li>
                                <li>10. Mejora</li>
                            </ul>
                        </div>
                    </Col>
                    <Col sm={6}>
                        <div className="Contai6">
                            <h3>Inscripción en el enlace:</h3>
                            <p className="t1"><a href="https://forms.office.com/pages/responsepage.aspx?id=gcPCyy4vk02R0VBskxas55bsKM9wVghPgZ6AJu1KYwNUMzJFNE5VQ0RBN1dOMDNPT0JRWEFFVFZSTi4u">https://forms.office.com/r/H8aHeZqys4</a></p>
                            <div className='Qr'>
                                <Image
                                    className="Image-png" src={Qr}
                                />
                            </div>
                        </div>

                    </Col>
                </Row>
            </div >

        </Container >

    );
}

export default Blog;
