import React, { useState } from "react";
import { Carousel, Col, Container, Image, Row } from "react-bootstrap";
import carusel1 from "../../assets/img/png/carusel1.png";
import Line from "../../assets/img/png/Line.png";
import industri from "../../assets/img/png/Industria.png";
import publicity from "../../assets/img/jpg/publicity.jpg";
import softwar from "../../assets/img/png/Software.png";
import boletin from "../../assets/img/png/boletin.png";
import Comunicaciones from "../../assets/Comunicaciones.pdf";
import "./Sennovalab.css";
import construccio from "../../assets/img/png/Construccion.png";
import sennovalab from "../../assets/img/png/figura-pajaro.png";
import videoS from "../../assets/img/mp4/videoS.mp4";

function Sennovalab() {
  const [pdfVisible, setPdfVisible] = useState(false);

  const togglePdf = () => {
    setPdfVisible(!pdfVisible);
  };

  return (
    <Container fluid>
      <div className="Contenedor">
        <Row>
          <Col sm={5}>
            <div className="Container">
              <h1 className="Centrado"> ACTUALIDAD</h1>
              <div className="Imagenes-container">
                <Image
                  className="Imagen"
                  src={sennovalab}
                  style={{ width: "45px", height: "45px" }}
                />
                <Image
                  className="Imagen"
                  src={Line}
                  style={{ width: "305px", height: "4px" }}
                />
              </div>
              <h1 className="Centrado">SENNOVALAB</h1>
            </div>
          </Col>

          <Col sm={6} className="container-carousel">
            <div className="Contenedor">
              <Carousel variant="dark" className="container-slide">
                <Carousel.Item className="container-item">
                  <img className="carrusel" src={publicity} alt="" />
                  <Carousel.Caption className="texto1">
                    <h6 className="hseis">
                      Asistencia técnica de la NTC 5801:2018
                    </h6>
                    <p className="parrafo">
                      Desde SENNOVALAB, lo invitamos a participar en la
                      asistencia.<a href="/Blog"> Click aqui</a>
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img className="carrusel" src={boletin} alt="Second slide" />
                  <Carousel.Caption className="texto1">
                    <h6 className="hseis">Boletín Informativo</h6>
                    <p>
                      Te invitamos a conocer nuestro boletín Informativo.{" "}
                      <a href={Comunicaciones} target="_blank" rel="noopener noreferrer">
                        Click aquí
                      </a>
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img className="carrusel" src={carusel1} alt="Third slide" />
                  <Carousel.Caption className="texto1">
                    <h6 className="hseis">Nombre de la noticia</h6>
                    <p>Descripción</p>
                    <p>Leer mas..</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img className="carrusel" src={carusel1} alt="Third slide" />
                  <Carousel.Caption className="texto1">
                    <h6 className="hseis">Nombre de la noticia</h6>
                    <p>Descripción</p>
                    <p>Leer mas..</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img className="carrusel" src={carusel1} alt="Third slide" />
                  <Carousel.Caption className="texto1">
                    <h6 className="hseis">Nombre de la noticia</h6>
                    <p>Descripción</p>
                    <p>Leer mas..</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </Col>
        </Row>
      </div>

      <div className="Contenedor">
        <Row>
          <Col sm={12} className="text-center">
            <div>
              <h1>Conoce mas acerca de SENNOVALAB</h1>
              <video width="840" height="560" controls autoPlay>
                <source src={videoS} type="video/mp4" />
                Tu navegador no admite la reproducción de videos.
              </video>
            </div>
          </Col>
        </Row>
      </div>

      <div className="Contenedor">
        <Row>
          <Col sm={5} className="text-center">
            <div className="Container">
              <h1 className="Centrado"> NUESTRAS</h1>
              <div className="Imagenes-container">
                <Image
                  className="Imagen"
                  src={sennovalab}
                  style={{ width: "45px", height: "45px" }}
                />
                <Image
                  className="Imagen"
                  src={Line}
                  style={{ width: "305px", height: "4px" }}
                />
              </div>
              <h1 className="Centrado">LINEAS</h1>
            </div>
          </Col>
          <Col sm={7}>
            <div className="card-home-direction">
              <a href="/const" className="card-home-margin">
                <Image
                  className="Imag"
                  src={construccio}
                  style={{ width: "200px", height: "295px" }}
                />
              </a>
              <a href="/ind" className="card-home-margin">
                <Image
                  className="Imag"
                  src={industri}
                  style={{ width: "200px", height: "295px" }}
                />
              </a>
              <a href="/desa" className="card-home-margin">
                <Image
                  className="Imag"
                  src={softwar}
                  style={{ width: "200px", height: "295px" }}
                />
              </a>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Sennovalab;
