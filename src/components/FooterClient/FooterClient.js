import React from 'react';
import './Footer.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Lblanco from '../../assets/img/png/Lblanco.png';
import ins from '../../assets/img/png/ins.png';
import Loc from '../../assets/img/png/Loc.png';
import Ntc from '../../assets/img/png/Ntc.png';
import Sena from '../../assets/img/png/Sena.png';


function FooterClient() {
    return (
        <Container fluid>

            <main>
            </main>

            <footer className="flex-rw">
                <Row>

                    <Col xs={6} md={2}>
                        <ul className="logo">
                            <li>
                                <Image src={Lblanco} /></li>
                        </ul>
                    </Col>
                    <Col xs={6} md={2}>
                        <ul>
                            <li>
                                <h4 >Dirección</h4></li>


                            <li>SENA Regional Caldas</li>
                            <br />
                            <li>Kilómetro 10 vía al Magdalena, ​Manizales</li>
                            <br />
                            <li>Centro de Procesos Industriales y Construcción</li>
                            <br />
                            <li>Bloque 5. SENNOVALAB I+D+i</li>

                        </ul>
                    </Col>
                    <Col xs={6} md={2}>
                        <ul>
                            <li id='help'>
                                <h4>Horario</h4></li>
                            <li>Lunes a Viernes</li>
                            <li>8:00 a,m, a 6:00 p,m.</li>
                            <br />
                            <h6>Contacto</h6>
                            <li>BX (+57) 601 5461500 Ext1. 62131 - 62441</li>
                        </ul>
                    </Col>
                    <Col xs={6} md={2}>
                        <ul className="footer-list-top">
                            <li id='help'>
                                <h4 className="footer-list-header">Siguenos en</h4></li>
                            <li><a href='/Pet-Lover/cat/id/108' ><Image src={Loc} /></a></li>
                            <br />
                            <li><a href='/Pet-Lover/cat/id/108' ><Image src={ins} /></a></li>

                        </ul>
                    </Col>
                    <Col xs={6} md={2}>
                        <br />
                        <br />
                        <br />
                        <Image src={Sena} /><Image src={Ntc} />
                    </Col>
                    <Col xs={6} md={2}>
                        <div className="footer-bottom-wrapper">
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />

                            <a href="#" className="generic-anchor" rel="nofollow">© 2023 SENNOVALAB </a>
                        </div>
                    </Col>

                </Row>

            </footer>
        </Container>
    );
}

export default FooterClient;
