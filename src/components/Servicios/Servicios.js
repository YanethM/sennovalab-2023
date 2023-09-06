import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Lnara from "../../assets/img/png/Lnara.png";
import Logon from "../../assets/img/png/Logon.png";
import image5 from "../../assets/img/png/image5.png";
import image6 from "../../assets/img/png/image6.png";
import image7 from "../../assets/img/png/image7.png";
import Color from "../../assets/img/png/Color.png";

import "./Servicios.css";

const Servicios = () => {
    return (
        <Container fluid>
            <Row className="query-row-service">
                <Col sm={3}>
                    <div className="Container3">
                        <h1 className="huno">PORTAFOLIO</h1>
                        <div className="Imagenes-container1">
                            <Image
                                className="icon-text-service"
                                src={Logon}
                                style={{ width: "30px", height: "30px" }}
                            />
                            <div className="linea-recta11dd"></div>
                        </div>
                        <h1 className="word-service">DE SERVICIOS</h1>
                    </div>
                </Col>
                <Col sm={2} className="text-center">
                    <div className="container card">
                        <div className="container-image-service">
                            <img src={image5} alt="portfolio" className="img-service" />
                            <p className="text-service"> Asesoría en formulación de proyectos de I+D+i</p>
                            <Image src={Lnara} className="line-service-bottom" />
                        </div>
                    </div>
                </Col>
                <Col sm={2} className="text-center">
                    <div className="container card">
                        <div className="container-image-service">
                            <img src={image6} alt="portfolio" className="img-service" />
                            <p className="text-service">Asesoría en gestión de proyectos de I+D+i</p>
                            <Image src={Lnara} className="line-service-bottom" />
                        </div>
                    </div>
                </Col>
                <Col sm={2} className="text-center">
                    <div className="container card">
                        <div className="container-image-service">
                            <img src={image7} alt="portfolio" className="img-service" />
                            <p className="text-service">Consultaría en componentes de formulación y gestión de proyectos de I+D+i</p>
                            <Image src={Lnara} className="line-service-bottom" />
                        </div>
                    </div>
                </Col>
                <Col sm={2} className="text-center">
                    <div className="container card">
                        <div className="container-image-service">
                            <img src={image7} alt="portfolio" className="img-service" />
                            <p className="text-service">Transferencia de de conocimientos en actividades de I+D+i</p>
                            <Image src={Lnara} className="line-service-bottom" />
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm={3}>
                    <div className="Container">
                        <h1 className="h-uno">NUESTROS</h1>
                        <div className="Imagenes-container1">
                            <Image
                                className="icon-text-client"
                                src={Logon} style={{ width: "30px", height: "30px" }}
                            />
                            <div className="linea-recta11db"></div>
                        </div>
                        <h1 className="Der229b">CLIENTES</h1>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm={12} className="text-center">
                    <Image src={Color} className="image-service" />
                </Col>
            </Row>
        </Container>
    );
};

export default Servicios;
