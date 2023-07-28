import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import './Pqrs.css';
import Logon from '../../assets/img/png/Logon.png';

function Pqrs() {


    return (
        <Container fluid >
            <div className="Contenedorp">

                <Row>
                    <Col sm={3}>
                        <div className='Contain1'>
                            <h1 className='hp' >NUESTROS</h1>
                            <div className='Imagenes-container1'>
                                <Image className='ip' src={Logon} style={{ width: '30px', height: '30px', }} />
                                <div className="linea-rp"></div>
                            </div>
                            <h1 className='h-p'>PQRSD</h1>
                        </div>
                    </Col>
                    <Col sm={1}></Col>
                    <Col sm={7}>
                        <div>
                            <h2 className='hdos'> ¿Qué es una petición, queja, reclamo, sugerencia, felicitación, agradecimiento, denuncia (PQRSD)? </h2>
                            <div className='texto-pa'>
                                <p>Es el derecho que tiene la ciudadanía de realizar ante una entidad pública o privada un requerimiento, solicitud de información o documentos, calificar un servicio, proponer acciones de mejora o elevar una denuncia (Constitución Política de Colombia, Ley 1755 de 2015).</p>
                                <p>Para ello, el Ambiente de Servicios Tecnológicos en I+D+i SENNOVALAB ha dispuesto este espacio como alternativa para la radiación de PQRSD.</p>
                                <p>A continuación, encontrará la clasificación y descripción de las PQRSD: </p>
                                <div className=""></div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>

            <div className="Contenedorp">
                <Row>
                    <Col sm={3}>
                        <div className='Contain2'>
                            <h1 className='h-a'>Petición</h1>
                            <div className='Imagenes-container1'>
                                <div className="linea-rp1"></div>
                            </div>
                        </div>
                    </Col>
                    <Col sm={1}></Col>
                    <Col sm={7}>
                        <div className='texto-pe'>
                            <p >Es el requerimiento o solicitud que se realiza al Ambiente de Servicios Tecnológicos en I+D+i SENNOVALAB, en nombre propio, por apoderado, representante o entidad para solicitar el reconocimiento de un derecho, la prestación de un servicio, pedir información, documentos o copias, formular consultas y obtener respuesta oportuna.</p>
                        </div >
                    </Col>
                    <Col sm={1}></Col>
                </Row >
            </div >
            <div className="Contenedorp">
                <Row>
                    <Col sm={3}>
                        <div className='Contain3'>
                            <h1 className='h-e'>Queja</h1>
                            <div className='Imagenes-container1'>
                                <div className="linea-rp2"></div>
                            </div>
                        </div>
                    </Col>
                    <Col sm={1}></Col>
                    <Col sm={7}>
                        <div className='texto-pi'>
                            <p>Es la manifestación de no conformidad, desacuerdo, insatisfacción o descontento al recibir una atención inadecuada por parte del personal del Ambiente de Servicios Tecnológicos en I+D+i SENNOVALAB, en cumplimiento de sus funciones o responsabilidades. </p>
                        </div >
                    </Col>
                    <Col sm={1}></Col>
                </Row >
            </div >
            <div className="Contenedorp">
                <Row>
                    <Col sm={3}>
                        <div className='Contain3'>
                            <h1 className='h-i'>Reclamo</h1>
                            <div className='Imagenes-container1'>
                                <div className="linea-rp3"></div>
                            </div>
                        </div>
                    </Col>
                    <Col sm={1}></Col>
                    <Col sm={7}>
                        <div className='texto-p1'>
                            <p>Es la exigencia ante la ausencia o indebida prestación de un servicio o la falta de atención de una petición a cargo del Ambiente de Servicios Tecnológicos en I+D+i SENNOVALAB. </p>
                        </div >
                    </Col>
                    <Col sm={1}></Col>
                </Row >
            </div >
            <div className="Contenedorq">
                <Row>
                    <Col sm={3}>
                        <div className='Contain4'>
                            <h1 className='h-o'>Sugerencia</h1>
                            <div className='Imagenes-container1'>
                                <div className="linea-rp4"></div>
                            </div>
                        </div>
                    </Col>
                    <Col sm={1}></Col>
                    <Col sm={7}>
                        <div className='texto-p2'>
                            <p>Es la manifestación de una propuesta para plantear un cambio o mejora de un servicio, trámite o proceso del Ambiente de Servicios Tecnológicos en I+D+i SENNOVALAB.  </p>
                        </div >
                    </Col>
                    <Col sm={1}></Col>
                </Row >
            </div >
           
        </Container >
    );
}

export default Pqrs;

