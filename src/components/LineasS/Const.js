import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Construccion from '../../assets/img/png/Construccion.png';
import Industria from '../../assets/img/png/Industria.png';
import Software from '../../assets/img/png/Software.png';
import Lnara from '../../assets/img/png/Lnara.png';
import Lvertical from '../../assets/img/png/Lvertical.png';
import Polygo from '../../assets/img/png/Polygo.png';
import Polygon from '../../assets/img/png/Polygon.png';
import Logon from '../../assets/img/png/Logon.png';
import Servi from '../../assets/img/png/Servi.png';
import "./Const.css";



const Constr = () => {

  return (
    <Container fluid>
      <br />
      <br />
      <Row>
        <Col md={3} className='text-center'>
          <br />
          <br />
          <br />
          <br />
          <Image src={Construccion} style={{ width: '220px', height: '265px', }} />
          <br />
          <br />

        </Col>
        <Col md={3}>
          <Image className='image' src={Logon} style={{ width: '20px', height: '20px', }} />Objetivo
          <Image className='img' src={Lnara} style={{ width: '210px', height: '2px', }} />



          <p> Aportar al desarrollo de ideas creativas, el conocimiento en áreas relacionadas al sector de la construcción e ingeniería, diseño y materiales y redes eléctricas, incentivando la generación de proyectos en I+D+i y apoyando los programas de capacitación en el Centro de Procesos industriales y Construcción, además de empresas en el departamento de Caldas.</p>
        </Col>
        <Col md={3}>
          <br />
          <br />
          <br />
          <Image src={Polygo} style={{ width: '50px', height: '25px', }} />
          <Image src={Lvertical} style={{ width: '40px', height: '55px', }} />
          <Image src={Logon} style={{ width: '20px', height: '20px', }} /> Misión
          <Image className='img' src={Lnara} style={{ width: '210px', height: '2px', }} />
          <p> Brindar servicios de asesoría en proyectos de construcción basados en enfoques de arquitectura, ingeniería, materiales y redes eléctricas con un capital humano calificado, buscando la satisfacción de los clientes, el crecimiento intelectual y el desarrollo de ideas creativas.</p>
        </Col>
        <Col md={3}>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Image src={Lvertical} style={{ width: '40px', height: '55px', }} />
          <Image src={Polygon} style={{ width: '50px', height: '25px', }} />
          <Image src={Logon} style={{ width: '20px', height: '20px', }} /> Visión
          <Image className='img' src={Lnara} style={{ width: '210px', height: '2px', }} />
          <p> Para el año 2025 la línea de construcción estará prestando, servicios de asesoría y consultoría en I+D+i en temáticas como: ingeniería, materiales y redes eléctricas, asesorando a nuestros aliados internos y externos en el departamento de Caldas.</p>
        </Col>

      </Row>

      {/*     Contenido 2 */}
      <Row>
        <Col md={3}>
          <br />
          <br />
          <h3 className="h">LINEA DE</h3>
          <Image src={Lnara} style={{ width: '220px', height: '2px', }} />
          <h3 className="h">CONSTRUCCIÓN</h3>
        </Col>
        <Col md={3} className='text-center'>
          <br />
          <br />

          <h3>SUBLINEAS DE </h3>
          <Image src={Logon} style={{ width: '20px', height: '20px', }} />
          <Image src={Lnara} style={{ width: '220px', height: '2px', }} />
          <h3>ACCIÓN</h3>
        </Col>
        <Col md={1} className='text-center' >
          <br />
          <br />
          <br />
          <br />
          <Image src={Polygo} style={{ width: '110px', height: '50px', }} />
          <br />
          <Image src={Polygon} style={{ width: '110px', height: '50px', }} />
        </Col>
        <Col md={1} className='text-center' >
          <Image src={Polygo} style={{ width: '110px', height: '50px', }} />
          <br />
          <Image src={Polygon} style={{ width: '110px', height: '50px', }} />
          <br />
          <Image src={Polygo} style={{ width: '110px', height: '50px', }} />
          <br />
          <Image src={Polygon} style={{ width: '110px', height: '50px', }} />
        </Col>
        <Col md={1} className='text-center' >
          <br />
          <br />
          <br />
          <br />
          <Image src={Polygo} style={{ width: '110px', height: '50px', }} />
          <br />
          <Image src={Polygon} style={{ width: '110px', height: '50px', }} />
        </Col>

        <Col sm={3} className='text-center'>
          <div className="container">
            <div className="card">
              <br />

              <br />
              <img src={Servi} style={{ width: '200px', height: '150px', }} />
              <br />
              <h5>TRANSFERENCIA</h5>
              <Image src={Lnara} style={{ width: '200px', height: '2px', }} />

            </div>

          </div>
        </Col>

      </Row>
      <Row>
        <Col md={3} className='text-center'>
          <Image src={Industria} style={{ width: '99px', height: '105px', }} />
          <Image src={Software} style={{ width: '99px', height: '105px', }} />
        </Col>
        <Col md={3} className='text-center'>
          <br />
          <br />

          <h3>PROFESIONAL</h3>
          <Image src={Logon} style={{ width: '20px', height: '20px', }} />
          <Image src={Lnara} style={{ width: '220px', height: '2px', }} />
        </Col>
      </Row>
      <Row>
        <Col md={3}></Col>
        <Col md={2} className='text-center'>
          <img src="https://lh3.googleusercontent.com/ytP9VP86DItizVX2YNA-xTYzV09IS7rh4WexVp7eilIcfHmm74B7odbcwD5DTXmL0PF42i2wnRKSFPBHlmSjCblWHDCD2oD1oaM1CGFcSd48VBKJfsCi4bS170PKxGwji8CPmehwPw=w200-h247-no" alt="Person" className="card__image" />
        </Col>
        <Col md={1} className='text-right'>

          <p className="card__name">Nombre:</p>
          <p className="card__email">Profesión:</p>
          <p className="card__Rol">Cargo:</p>
          <p className="card__Rol">Contacto:</p>


        </Col>
        <Col md={1} className='text-center'>
          <img src="https://lh3.googleusercontent.com/ytP9VP86DItizVX2YNA-xTYzV09IS7rh4WexVp7eilIcfHmm74B7odbcwD5DTXmL0PF42i2wnRKSFPBHlmSjCblWHDCD2oD1oaM1CGFcSd48VBKJfsCi4bS170PKxGwji8CPmehwPw=w200-h247-no" alt="Person" className="card__image" />
        </Col>
        <Col md={1} className='text-right'>

          <p className="card__name">Nombre:</p>
          <p className="card__email">Profesión:</p>
          <p className="card__Rol">Cargo:</p>
          <p className="card__Rol">Contacto:</p>


        </Col>
        <Col md={1} className='text-center'>

          <img src="https://lh3.googleusercontent.com/ytP9VP86DItizVX2YNA-xTYzV09IS7rh4WexVp7eilIcfHmm74B7odbcwD5DTXmL0PF42i2wnRKSFPBHlmSjCblWHDCD2oD1oaM1CGFcSd48VBKJfsCi4bS170PKxGwji8CPmehwPw=w200-h247-no" alt="Person" className="card__image" />
        </Col>
        <Col md={1} className='text-right'>

          <p className="card__name">Nombre:</p>
          <p className="card__email">Profesión:</p>
          <p className="card__Rol">Cargo:</p>
          <p className="card__Rol">Contacto:</p>
        </Col>
        <Col md={1} className='text-center'>
          <img src="https://lh3.googleusercontent.com/oUUiPB9sq3ACq4bUaRmo8pgvC4FUpRRrQKcGIBSOsafawZfRpF1vruFeYt6uCfL6wGDQyvOi6Ez9Bpf1Fb7APKjIyVsft7FLGR6QqdRFTiceNQBm1In9aZyrXp33cZi9pUNqjHASdA=s170-no" alt="Person" className="card__image" />
        </Col>
        <Col md={1} className='text-right'>

          <p className="card__name">Nombre:</p>
          <p className="card__email">Profesión:</p>
          <p className="card__Rol">Cargo:</p>
          <p className="card__Rol">Contacto:</p>
        </Col>
        <Col md={1} className='text-right'></Col>

      </Row>

      <br />
      <br />
      <br />
      <br />
    </Container>

  );
}



export default Constr;