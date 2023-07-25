import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Lnara from '../../assets/img/png/Lnara.png';
import Logon from '../../assets/img/png/Logon.png';
import image5 from '../../assets/img/png/image5.png';
import image6 from '../../assets/img/png/image6.png';
import image7 from '../../assets/img/png/image7.png';
import Color from '../../assets/img/png/Color.png';

import "./Servicios.css";

const Servicios = () => {

    return (
        <Container fluid>

            <Row>
                <Col sm={3} >
                    <div className='Container3'>
                        <h1 className='Derd' >PORTAFOLIO</h1>
                        <div className='Imagenes-container1'>
                            <Image className='i11dd' src={Logon} style={{ width: '30px', height: '30px', }} />
                            <div className="linea-recta11dd"></div>
                        </div>
                        <h1 className='Der229d'>DE SERVICIOS</h1>
                    </div>

                </Col>
                <Col sm={3} className='text-center'>
                    <div className="container">
                        <div className="card">
                            <br />

                            <br />
                            <img src={image5} style={{ width: '200px', height: '150px', }} />
                            <br />
                            <h5>ASESORIA</h5>
                            <Image src={Lnara} style={{ width: '200px', height: '2px', }} />

                        </div>

                    </div>
                </Col>
                <Col sm={3} className='text-center'>
                    <div className="container">
                        <div className="card">
                            <br />

                            <br />
                            <img src={image6} style={{ width: '200px', height: '150px', }} />
                            <br />

                            <h5>CONSULTORIA</h5>
                            <Image src={Lnara} style={{ width: '200px', height: '2px', }} />

                        </div>

                    </div>
                </Col>
                <Col sm={3} className='text-center'>
                    <div className="container">
                        <div className="card">
                            <br />

                            <br />
                            <img src={image7} style={{ width: '200px', height: '150px', }} />
                            <br />
                            <h5>TRANSFERENCIA</h5>
                            <Image src={Lnara} style={{ width: '200px', height: '2px', }} />

                        </div>

                    </div>
                </Col>

            </Row>
            <Row>
                <Col sm={3}></Col>
                <Col sm={3}></Col>
                <Col sm={3}></Col>
                <Col sm={3}>
                <div className='Container3'>
                        <h1 className='Derb' >NUESTROS</h1>
                        <div className='Imagenes-container1'>
                            <Image className='i11db' src={Logon} style={{ width: '30px', height: '30px', }} />
                            <div className="linea-recta11db"></div>
                        </div>
                        <h1 className='Der229b'>CLIENTES</h1>
                    </div>

                </Col>
            </Row>
            <Row>
                <Col sm={12} className='text-center'>
                    <Image src={Color} style={{ width: '990px', height: '300px', }} />
                </Col>
            </Row>

        </Container>
    );
}

export default Servicios;

