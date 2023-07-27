import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import './TeamCard.css';
import Rectangle164 from '../../assets/img/png/Rectangle164.png';
import Logon from '../../assets/img/png/Logon.png';

function TeamCard() {


    return (
        <Container fluid >
            <div className="Contenedorz">

                <Row>
                    <Col sm={12}  >
                        <div className="container-b2">
                            <div className="linea1">
                                <div className="trianglea25">
                                    <Image className='Imag135' src={Rectangle164} style={{ width: '100px', height: '105px', }} />
                                    <div className="rectangle0">
                                        <div className="rectangle0pi" >
                                            <p >Nombre</p>
                                            <p >Profesión</p>
                                            <p >Hoja de vida</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </Col>
                </Row>
            </div>

            <div className="Contenedorz">

                <Row>
                    <Col sm={2}>
                        <div className='Container3'>
                            <h1 className='Derd' >NUESTRO</h1>
                            <div className='Imagenes-container1'>
                                <Image className='i11d' src={Logon} style={{ width: '30px', height: '30px', }} />
                                <div className="linea-recta11d"></div>
                            </div>
                            <h1 className='Der22d'>EQUIPO</h1>
                        </div>
                    </Col>
                    <Col sm={3}>
                        <div className="container-b2">
                            <div className="linea1">
                                <div className="trianglea26">
                                    <Image className='Imag137' src={Rectangle164} style={{ width: '100px', height: '105px', }} />
                                    <div className="rectangle0">
                                        <div className="rectangle0pi" >
                                            <p >Nombre</p>
                                            <p >Profesión</p>
                                            <p >Hoja de vida</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col sm={3}>
                        <div className="container-b2">
                            <div className="linea1">
                                <div className="triangulon25">
                                    <Image className='Imag136' src={Rectangle164} style={{ width: '100px', height: '105px', }} />
                                    <div className="rectangle1">
                                        <div className="rectangle1pi" >
                                            <p >Nombre</p>
                                            <p >Profesión</p>
                                            <p >Hoja de vida</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col sm={3}>
                        <div className="container-b2">
                            <div className="linea1">
                                <div className="trianglea27">
                                    <Image className='Imag138' src={Rectangle164} style={{ width: '100px', height: '105px', }} />
                                    <div className="rectangle0">
                                        <div className="rectangle0pi" >
                                            <p >Nombre</p>
                                            <p >Profesión</p>
                                            <p >Hoja de vida</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className="Contenedorz">
                <Row>
                    <Col>
                        <div className="container-b2">
                            <div className="linea1">
                                <div className="trianglea28">
                                    <Image className='Imag139' src={Rectangle164} style={{ width: '100px', height: '105px', }} />
                                    <div className="rectangle0">
                                        <div className="rectangle0pi" >
                                            <p >Nombre</p>
                                            <p >Profesión</p>
                                            <p >Hoja de vida</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="triangulon26">
                                    <Image className='Imag140' src={Rectangle164} style={{ width: '100px', height: '105px', }} />
                                    <div className="rectangle01">
                                        <div className="rectangle01pi" >
                                            <p >Nombre</p>
                                            <p >Profesión</p>
                                            <p >Hoja de vida</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="trianglea29">
                                    <Image className='Imag141' src={Rectangle164} style={{ width: '100px', height: '105px', }} />
                                    <div className="rectangle0">
                                        <div className="rectangle0pi" >
                                            <p >Nombre</p>
                                            <p >Profesión</p>
                                            <p >Hoja de vida</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="triangulon27">
                                    <Image className='Imag136' src={Rectangle164} style={{ width: '100px', height: '105px', }} />
                                    <div className="rectangle01">
                                        <div className="rectangle01pi" >
                                            <p >Nombre</p>
                                            <p >Profesión</p>
                                            <p >Hoja de vida</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="trianglea30">
                                    <Image className='Imag143' src={Rectangle164} style={{ width: '100px', height: '105px', }} />
                                    <div className="rectangle0">
                                        <div className="rectangle0pi" >
                                            <p >Nombre</p>
                                            <p >Profesión</p>
                                            <p >Hoja de vida</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container >
    );
}

export default TeamCard;

