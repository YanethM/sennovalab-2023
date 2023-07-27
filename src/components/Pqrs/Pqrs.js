import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import './Pqrs.css';
import Rectangle164 from '../../assets/img/png/Rectangle164.png';
import Logon from '../../assets/img/png/Logon.png';

function Pqrs() {


    return (
        <Container fluid >
            <div className="Contenedorz">

                <Row>
                    <Col sm={2}>
                        <div className='Container3'>
                            <h1 className='Derd' >NUESTROS</h1>
                            <div className='Imagenes-container1'>
                                <Image className='i11d' src={Logon} style={{ width: '30px', height: '30px', }} />
                                <div className="linea-recta11d"></div>
                            </div>
                            <h1 className='Der22d'>PQRSD</h1>
                        </div>
                    </Col>
                </Row>
            </div>
           
        </Container >
    );
}

export default Pqrs;

