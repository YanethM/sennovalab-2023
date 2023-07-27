import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Construccion from '../../assets/img/png/Construccion.png';
import Industria from '../../assets/img/png/Industria.png';
import Software from '../../assets/img/png/Software.png';
import Logon from '../../assets/img/png/Logon.png';
import Servi from '../../assets/img/png/Servi.png';
import "./Desa.css";



const Desa = () => {

  return (
    <Container fluid>
      <div className="Contenedor1">

        <Row>
          <Col sm={2} className='text-center' >
            <div className="Imag5">
              <Image src={Software} style={{ width: '280px', height: '265px', }} />
            </div>

          </Col>
          <Col md={1}></Col>
          <Col md={3}>
            <div className="container-b1">
              <div className="linea1">
                <div className="linea-rectaa1"></div>
                <Image className='ia1' src={Logon} style={{ width: '20px', height: '20px', }} />
                <h2 className="hc1">OBJETIVO</h2>
              </div>
            </div>
            < div>
              <p className="textoa1">  Aportar al desarrollo de ideas creativas, el conocimiento en áreas relacionadas al sector de la construcción e ingeniería, diseño y materiales y redes eléctricas, incentivando la generación de proyectos en I+D+i y apoyando los programas de capacitación en el Centro de Procesos industriales y Construcción, además de empresas en el departamento de Caldas.</p>
            </div>
          </Col>
          <Col md={3}>
            <div className="container-c1">
              <div className="linea1a">
                <div className="linea-di1"></div>
                <div className="linea-re1"></div>
                <div className="trianglea1"></div>
                <Image className='in1' src={Logon} style={{ width: '20px', height: '20px', }} />
                <h2 className="ha1">MISIÓN</h2>
              </div>
            </div>
            < div>
              <p className="texa1">Brindar servicios de asesoría en proyectos de construcción basados en enfoques de arquitectura, ingeniería, materiales y redes eléctricas con un capital humano calificado, buscando la satisfacción de los clientes, el crecimiento intelectual y el desarrollo de ideas creativas.</p>
            </div>
            <div className="linea-die1"></div>
          </Col>
          <Col md={3}>
            <div className="container-b2">
              <div className="linea1">
                <div className="linea-dian1"></div>
                <div className="linea-reci1"></div>
                <div className="triangulon1"></div>
                <Image className='init1' src={Logon} style={{ width: '20px', height: '20px', }} />
                <h2 className="ho1" >VISIÓN</h2>
              </div>
            </div>
            < div>
              <p className="texto2"> Para el año 2025 la línea de construcción estará prestando, servicios de asesoría y consultoría en I+D+i en temáticas como: ingeniería, materiales y redes eléctricas, asesorando a nuestros aliados internos y externos en el departamento de Caldas.</p>
            </div>

          </Col>

        </Row>
      </div>
      {/*     Contenido 2 */}
      <Row>
        <Col md={2} >
          <div className='Container3'>
            <h2 className='Der1' >LINEA DE</h2>
            <div className='Imagenes-container1'>
              <div className="linea-recta11"></div>
            </div>
            <h2 className='Der213'>SOFTWARE</h2>
          </div>
        </Col>

        <Col md={3} >
          <div className='Container3'>
            <h2 className='Der221' >SUBLINEAS DE</h2>
            <div className='Imagenes-container1'>
              <Image className='i11' src={Logon} style={{ width: '20px', height: '20px', }} />
              <div className="linea-recta112"></div>
            </div>
            <h2 className='Der222'>ACCIÓN</h2>
          </div>
        </Col>
        <Col md={1} >
          <div className="container-b2">
            <div className="linea1">
              <div className="trianglea2"></div>
              <div className="triangulon2">
                <h6 className='Der22'>SUBLINEA</h6>
              </div>
            </div>
          </div>
        </Col>
        <Col md={1} >
          <div className="container-b2">
            <div className="linea1">
              <div className="trianglea3"></div>
              <div className="triangulon3">
                <h6 className='Der22'>SUBLINEA</h6>
              </div>
            </div>
          </div>
        </Col>
        <Col md={1} >
          <div className="container-b2">
            <div className="linea1">
              <div className="trianglea4"></div>
              <div className="triangulon4">
                <h6 className='Der22'>SUBLINEA</h6>
              </div>
            </div>
          </div>
        </Col>
        <Col md={1} >
          <div className="container-b2">
            <div className="linea1">
              <div className="trianglea5"></div>
              <div className="triangulon5">
                <h6 className='Der22'>SUBLINEA</h6>
              </div>
            </div>
          </div>
        </Col>
        <Col sm={3} >
          <div className="container-d">
            <div className='outer-cards1'>
              <div className='inner-ca1'>
                <img className="image-tex" src={Servi} />
                <h5 className="image-tex-h">SUBLINEA</h5>
                <p className="image-tex-p">DESCRIPCIÓN</p>
              </div>
            </div>
          </div>
          <div className="linea1">
            <div className="linea-dian11"></div>
            <div className="linea-reci11"></div>
            <div className="outer-circle">
              <circle color=" #f35618" />
              <div className="inner-circle">
                <circle color="gray" />
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={2} className='text-center'>
          <div className="container-di">
            <Image className='Imag13' src={Construccion} style={{ width: '150px', height: '205px', }} />
            <Image className='Imag12' src={Industria} style={{ width: '150px', height: '205px', }} />
          </div>
        </Col>
        <Col md={3} className='text-center'>
          <div className='Container31'>
            <h2 className='Der225' >PROFESIONAL</h2>
            <div className='Imagenes-container1'>
              <Image className='i12' src={Logon} style={{ width: '20px', height: '20px', }} />
              <div className="linea-recta115"></div>
            </div>
          </div>
        </Col>
        <Col>
          <div className='outer-card124'> </div>
        </Col>
        <Col md={1}>
          <div className='text-container'>
            <p className="bold-text">Nombre:</p>
            <p>Profesión:</p>
            <p>Cargo:</p>
            <p>Contacto:</p>
          </div>
        </Col>
        <Col>
          <div className='outer-card125'> </div>
        </Col>
        <Col md={1}>
          <div className='text-container1'>
            <p className="bold-text">Nombre:</p>
            <p>Profesión:</p>
            <p>Cargo:</p>
            <p>Contacto:</p>
          </div>
        </Col>
        <Col>
          <div className='outer-card126'> </div>
        </Col>
        <Col md={1}>
          <div className='text-container2'>
            <p className="bold-text">Nombre:</p>
            <p>Profesión:</p>
            <p>Cargo:</p>
            <p>Contacto:</p>
          </div>
        </Col>
      </Row>
    </Container>

  );
}



export default Desa;




