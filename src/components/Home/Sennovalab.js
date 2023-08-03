import React from 'react';
import { Carousel, Col, Container, Image, Row } from 'react-bootstrap';
import carusel1 from '../../assets/img/png/carusel1.png';
import Line from '../../assets/img/png/Line.png';
import industria from '../../assets/img/png/industria.png';
import publicidad from '../../assets/img/jpg/publicity.jpg';
import software from '../../assets/img/png/software.png';
import "./Sennovalab.css";
import construccion from '../../assets/img/png/construccion.png';
import sennovalab from "../../assets/img/png/figura-pajaro.png";

function Sennovalab() {
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

          <Col sm={6} className='container-carousel'>
            <div className="Contenedor">
              <Carousel variant="dark" indicators={true} className='container-slide'>
                <Carousel.Item className='container-item'>
                  <img className="carrusel" src={publicidad} alt="Second slide" />
               
                  <Carousel.Caption className="texto1">
                    <h5>Asistencia técnica de la NTC 5801:2018</h5>
                    <p>Desde SENNOVALAB, lo invitamos a participar en la asistencia.</p>
                    <p><a href="/Blog">Leer mas..</a></p>
                  </Carousel.Caption>
                 
                </Carousel.Item>

                <Carousel.Item>
                  <img className="carrusel" src={carusel1} alt="Second slide" />
                  <Carousel.Caption className="texto1">
                    <h5>Nombre de la noticia</h5>
                    <p>Descripción</p>
                    <p>Leer mas..</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img className="carrusel" src={carusel1} alt="Third slide" />
                  <Carousel.Caption className="texto1">
                    <h5>Nombre de la noticia</h5>
                    <p>Descripción</p>
                    <p>Leer mas..</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img className="carrusel" src={carusel1} alt="Third slide" />
                  <Carousel.Caption className="texto1">
                    <h5>Nombre de la noticia</h5>
                    <p>Descripción</p>
                    <p>Leer mas..</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img className="carrusel" src={carusel1} alt="Third slide" />
                  <Carousel.Caption className="texto1">
                    <h5>Nombre de la noticia</h5>
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
                  src={construccion}
                  style={{ width: "200px", height: "295px" }}
                />
              </a>
              <a href="/ind" className="card-home-margin">
                <Image
                  className="Imag"
                  src={industria}
                  style={{ width: "200px", height: "295px" }}
                />
              </a>
              <a href="/desa" className="card-home-margin">
                <Image
                  className="Imag"
                  src={software}
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
