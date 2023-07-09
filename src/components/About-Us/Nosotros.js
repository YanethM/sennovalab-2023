import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Portafolio from '../../assets/img/png/Portafolio.png';
import Construccion from '../../assets/img/png/Construccion.png';
import Industria from '../../assets/img/png/Industria.png';
import Software from '../../assets/img/png/Software.png';
import Lnara from '../../assets/img/png/Lnara.png';
import Logon from '../../assets/img/png/Logon.png';
import "./Nosotros.css";

const Nosotros = () => {
  
  return (
    <Container fluid>
      <br />
      <br />
      <br />
      <br />
      <Row>
        <Col xs={5} md={3} className='text-center' >
          <h3 className="h">SOBRE</h3>
          <Image className='image' src={Logon} style={{ width: '30px', height: '30px', }} />
          <Image  src={Lnara} style={{ width: '220px', height: '2px', }} />
          <h3 className="h">SENNOVALAB</h3>
        </Col>

        <Col md={3} className='text-right' >
          <div className="container-s">
            <div className="triangle"></div>
            <div className="linea-diagonal"></div>
            <div className="linea-recta"></div>
              <Image className='i' src={Logon} style={{ width: '20px', height: '20px', }} />
              <h5 className="h">Información General</h5>
            


          </div>



          < div>

            <p> Somos un ambiente de servicios tecnológicos en actividades de I+D+i del Centro de Proceso Industriales y Construcción, SENA Regional Caldas. Hacemos parte del Ecosistema SENNOVA y de la línea “Fortalecimiento de la Oferta de Servicios Tecnológicos para las Empresas”.</p>
          </div>
        </Col>

        <Col xs={6} md={3}>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

          <div className="container-s">
            <div className="linea-diagonal"></div>
            <div className="triangulo"></div>
            <div className="linea-recta"> </div>
            <Image src={Logon} style={{ width: '20px', height: '20px', }} />
              <h5 className="h">Descripción</h5>
          </div>

          <p> SENNOVALAB considera las actividades de Investigación, Desarrollo Tecnológico e Innovación (I+D+i) como los pilares básicos de su estrategia, para aportar al desarrollo de la región capacidades técnicas y tecnológicas en la gestión y desarrollo de procesos de Ciencia, Tecnología e Innovación, vinculando al sector productivo y la academia.</p>

        </Col>

      </Row>
      <Row>
        <Col md={3}></Col>
        <Col md={3}>
        <div className="container-s">
            <div className="triangle"></div>
            <div className="linea-diagonal"></div>
            <br />
          <br />
          <br />
          <br />
          <br />
            <div className="linea-recta"></div>
              <Image src={Logon} style={{ width: '20px', height: '20px', }} />
              <h5 className="h">Misión</h5>
          </div>

          <p> SENNOVALAB aporta al desarrollo de la región capacidades técnicas y tecnológicas para la formulación y gestión de procesos de Ciencia, Tecnología e Innovación, vinculando al sector productivo y la academia, y alineado con los planes de desarrollo territoriales, a través de servicios de asesoría y consultoría en actividades científico-tecnológicas y la transferencia de conocimiento, aumentando la competitividad de empresas y comunidades académicas.</p>
        </Col>
        <Col md={3}>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />



          <div className="container-s">
            <div className="linea-diagonal"></div>
            <div className="triangulo"></div>
            <div className="linea-recta"></div>
            <Image className='imgn'src={Logon} style={{ width: '20px', height: '20px', }} />
              <h5 className="h">Visión</h5>
          </div>

          <p>SENNOVALAB aporta al desarrollo de la región capacidades técnicas y tecnológicas para la formulación y gestión de procesos de Ciencia, Tecnología e Innovación, vinculando al sector productivo y la academia, y alineado con los planes de desarrollo territoriales, a través de servicios de asesoría y consultoría en actividades científico-tecnológicas y la transferencia de conocimiento, aumentando la competitividad de empresas y comunidades académicas</p>
        </Col>
      </Row>
      <Row>
        <Col md={5} className='text-center' >
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Image className='imagen' src={Construccion} style={{ width: '220px', height: '225px', }} />
          <br />
          <br />
          <Image src={Industria} style={{ width: '220px', height: '225px', }} />

          <Image src={Software} style={{ width: '220px', height: '225px', }} />
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
          <div className="container-s">
            <div className="triangle"></div>
            <div className="linea-diagonal"></div>
            <br />
          <br />
          <br />
          <br />
          <br />
            <div className="linea-recta"></div>
              <Image src={Logon} style={{ width: '20px', height: '20px', }} />
              <h5 className="h">Objetivos</h5>
          </div>

          <p>1. Prestar servicios de asesoría y consultoría en actividades I+D+i a las empresas de la región, de acuerdo con sus necesidades brindando soluciones innovadoras contribuyendo al aumento de su productividad y competitividad.</p>
          <p>2. Promover el portafolio del ambiente de servicios tecnológicos SENOVALAB en las empresas y entidades de iniciativa privada o pública, dirigidas a extender la innovación y el desarrollo tecnológico.</p>
          <p>3. Contribuir al fortalecimiento de la formación profesional integral de los aprendices e instructores del Centro de Procesos Industriales y Construcción del SENA regional Caldas, a través de actividades de I+D+i bajo criterios de calidad y excelencia que permitan la acreditación de programas formativos, la empleabilidad y la creación de nuevas empresas.</p>
        </Col>
        <Col md={2}>

        </Col>
        <Col md={2}>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

          <p>Ver portafolio de Servicios</p>
          <Image className='image' src={Portafolio} style={{ width: '60px', height: '75px', }} />
        </Col>
      </Row>
      <br />
      <br />
      <br />
      <br />
    </Container >
  );
}

export default Nosotros;