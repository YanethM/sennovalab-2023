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
import Menu from '../MenuNav/Menu';
import "./Sennovalab.css";

import sennovalab from '../../assets/img/png/sennovalab.png';

import Footer from '../Footer/Footer';


function Sennovalab() {

  return (
    <Container fluid>
      <hr></hr>
      <Menu />
      <br />
      <br />
      <br />
      <br />
      <Row>
        <Col sm={6} className='text-center' >
          <div className='text-center'>

            <h1> ACTUALIDAD</h1>
            <Image src={sennovalab} />
            <Image className='imgn' src={Line} />
            <h1>SENNOVALAB</h1>
          </div>
        </Col>

        <Col sm={6}>
          <div className='text-center'>
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
      <br />
      <br />
      <br />
      <br />
      <Row>

        <Col sm={7} className='text-center'>
          <div className='text-center'>
            <h1> NUESTRAS</h1>
            <Image src={sennovalab} />
            <Image className='imgn' src={Line} />
            <h1>LINEAS</h1>
          </div>
        </Col>
        <Col sm={5}>
          <div className='text-center'>
            <Image className='image' src={Construccion} style={{ width: '160px', height: '295px', }} />
            <Image className='image' src={Industria} style={{ width: '160px', height: '295px', }} />
            <Image className='image' src={Software} style={{ width: '160px', height: '295px', }} />
          </div>
        </Col>







        {/*<Placeholder xs={12} bg="dark" />
        <Card className="text-center">
          <Card.Header>Featured</Card.Header>
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
          <Card.Footer className="text-muted">2 days ago</Card.Footer>
  </Card>*/}

      </Row>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />

    </Container >


  );
}

export default Sennovalab;


