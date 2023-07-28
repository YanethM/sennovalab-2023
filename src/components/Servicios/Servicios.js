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
                                className="i11dd"
                                src={Logon}
                                style={{ width: "30px", height: "30px" }}
                            />
                            <div className="linea-recta11dd"></div>
                        </div>
                        <h1 className="Der229d">DE SERVICIOS</h1>
                    </div>
                </Col>
                <Col sm={3} className="text-center">
                    <div className="container card">
                        <div className="container-image-service">
                            <img src={image5} alt="portfolio" className="img-service" />
                            <h4 className="text-service">ASESORIA</h4>
                            <Image src={Lnara} className="line-service-bottom" />
                        </div>
                    </div>
                </Col>
                <Col sm={3} className="text-center">
                    <div className="container card">
                        <div className="container-image-service">
                            <img src={image6} alt="portfolio" className="img-service" />
                            <h4 className="text-service">CONSULTORIA</h4>
                            <Image src={Lnara} className="line-service-bottom" />
                        </div>
                    </div>
                </Col>
                <Col sm={3} className="text-center">
                    <div className="container card">
                        <div className="container-image-service">
                            <img src={image7} alt="portfolio" className="img-service" />
                            <h4 className="text-service">TRANSFERENCIA</h4>
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
                                className="i11db"
                                src={Logon}style={{ width: "30px", height: "30px" }}
                            />
                            <div className="linea-recta11db"></div>
                        </div>
                        <h1 className="Der229b">CLIENTES</h1>
                    </div>
                </Col>
            </Row>
             <Row>
        <Col sm={12} className="text-center">
          <Image src={Color} style={{ width: "1300px", height: "300px" }} />
        </Col>
      </Row> 
        </Container>
    );
};

export default Servicios;
