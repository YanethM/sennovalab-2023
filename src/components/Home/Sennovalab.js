import Carousel from 'react-bootstrap/Carousel';
import carusel1 from '../../assets/img/png/carusel1.png';
import carusel2 from '../../assets/img/png/carusel2.png';
import carusel3 from '../../assets/img/png/carusel3.png';
import carusel4 from '../../assets/img/png/carusel4.png';
import carusel5 from '../../assets/img/png/carusel5.png';
import carusel6 from '../../assets/img/png/carusel6.png';
import carusel7 from '../../assets/img/png/carusel7.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Line from '../../assets/img/png/Line.png';
import Construccion from '../../assets/img/png/Construccion.png';
import Industria from '../../assets/img/png/Industria.png';
import Software from '../../assets/img/png/Software.png';
import "./Sennovalab.css";
import sennovalab from '../../assets/img/png/sennovalab.png';


function Sennovalab() {

  return (

    <Container fluid>
      <div className="Contenedor">

        <Row>
          <Col sm={5}  >
            <div className='Container'>
              <h1 className='Centrado' > ACTUALIDAD</h1>
              <div className='Imagenes-container'>
                <Image className='Imagen' src={sennovalab} style={{ width: '45px', height: '45px', }} />
                <Image className='Imagen' src={Line} style={{ width: '305px', height: '4px', }} />
              </div>
              <h1 className='Centrado'>SENNOVALAB</h1>
            </div>



          </Col>


          <Col sm={6}>
            <div className="Contenedor">
              <Carousel variant="dark">
                <Carousel.Item>
                  <img
                    className="carrusel"
                    src={carusel1}
                    alt=""
                  />

                  <Carousel.Caption>
                    <h5>Nombre de la noticia</h5>
                    <p>Descripción</p>
                    <p>Leer mas..</p>

                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="carrusel"
                    src={carusel2}
                    alt="Second slide"
                  />
                  <Carousel.Caption>
                    <h5>Nombre de la noticia</h5>
                    <p>Descripción</p>
                    <p>Leer mas..</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="carrusel"
                    src={carusel3}
                    alt="Third slide"
                  />
                  <Carousel.Caption>
                    <h5>Nombre de la noticia</h5>
                    <p>Descripción</p>
                    <p>Leer mas..</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="carrusel"
                    src={carusel4}
                    alt="Third slide"
                  />
                  <Carousel.Caption>
                    <h5>Nombre de la noticia</h5>
                    <p>Descripción</p>
                    <p>Leer mas..</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="carrusel"
                    src={carusel5}
                    alt="Third slide"
                  />
                  <Carousel.Caption>
                    <h5>Nombre de la noticia</h5>
                    <p>Descripción</p>
                    <p>Leer mas..</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="carrusel"
                    src={carusel6}
                    alt="Third slide"
                  />
                  <Carousel.Caption>
                    <h5>Nombre de la noticia</h5>
                    <p>Descripción</p>
                    <p>Leer mas..</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="carrusel"
                    src={carusel7}
                    alt="Third slide"
                  />
                  <Carousel.Caption>
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
          <Col sm={6} className='text-center'>
            <div className='Container'>
              <h1 className='Centrado' > NUESTRAS</h1>
              <div className='Imagenes-container'>
                <Image className='Imagen' src={sennovalab} style={{ width: '45px', height: '45px', }} />
                <Image className='Imagen' src={Line} style={{ width: '305px', height: '4px', }} />
              </div>
              <h1 className='Centrado'>LINEAS</h1>
            </div>
          </Col>
          <Col sm={5}>
            <div className='text-center'>
              <Image className='Imag' src={Construccion} style={{ width: '160px', height: '295px', }} />
              <Image className='Imag' src={Industria} style={{ width: '160px', height: '295px', }} />
              <Image className='Imag' src={Software} style={{ width: '160px', height: '295px', }} />
            </div>
          </Col>
        </Row>
      </div>
    </Container >


  );
}

export default Sennovalab;


