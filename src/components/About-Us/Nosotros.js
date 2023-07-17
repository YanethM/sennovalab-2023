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
      <div className="Contenedor">
        <Row>
          <Col sm={2}>
            <div className='Container'>
              <h2 className='Der' >SOBRE</h2>
              <div className='Imagenes-container'>
                <Image className='Imagen' src={Logon} style={{ width: '30px', height: '30px', }} />
                <Image className='Imagen' src={Lnara} style={{ width: '200px', height: '2px', }} />
              </div>
              <h2 className='Der'>SENNOVALAB</h2>
            </div>
            </Col>
        <Col sm={1}></Col>
          <Col md={4} className='text-right' >
            <div className="container-s">
              <div className="triangle"></div>
              <div className="linea">
                <div className="linea-diagonal"></div>
                <div className="linea-recta"></div>
                <Image className='i' src={Logon} style={{ width: '20px', height: '20px', }} />
                <h5 className="h">INFORMACIÓN GENERAL</h5>
              </div>
            </div>
            < div>
              <p className="texto"> Somos un ambiente de servicios tecnológicos en actividades de I+D+i del Centro de Proceso Industriales y Construcción, SENA Regional Caldas. Hacemos parte del Ecosistema SENNOVA y de la línea “Fortalecimiento de la Oferta de Servicios Tecnológicos para las Empresas”.</p>
            </div>
          </Col>

          <Col md={4} className='text-right' >
            <div className="container-a">
              <div className="linea">
                <div className="linea-dia"></div>
                <div className="linea-re"></div>
                <div className="triangulo"></div>
                <Image className='in' src={Logon} style={{ width: '20px', height: '20px', }} />
                <h5 className="ha"> DESCRIPCION</h5>
              </div>
            </div>
            < div>

              <p className="texto"> SENNOVALAB considera las actividades de Investigación, Desarrollo Tecnológico e Innovación (I+D+i) como los pilares básicos de su estrategia, para aportar al desarrollo de la región capacidades técnicas y tecnológicas en la gestión y desarrollo de procesos de Ciencia, Tecnología e Innovación, vinculando al sector productivo y la academia.</p>
            </div>
          </Col>

        </Row>
      </div>
      <Row>
        <Col md={3}></Col>
        <Col md={4} className='text-right' >
            <div className="container-i">
              <div className="trianglo"></div>
              <div className="linea">
                <div className="linea-diagonal"></div>
                <div className="linea-rect"></div>
                <Image className='im' src={Logon} style={{ width: '20px', height: '20px', }} />
                <h5 className="hj">MISIÓN</h5>
              </div>
            </div>
          <div >
          <p className="texto"> SENNOVALAB aporta al desarrollo de la región capacidades técnicas y tecnológicas para la formulación y gestión de procesos de Ciencia, Tecnología e Innovación, vinculando al sector productivo y la academia, y alineado con los planes de desarrollo territoriales, a través de servicios de asesoría y consultoría en actividades científico-tecnológicas y la transferencia de conocimiento, aumentando la competitividad de empresas y comunidades académicas.</p>
          </div>
        </Col>
        <Col md={4} className='text-right' >
            <div className="container-b">
              <div className="linea">
                <div className="linea-dian"></div>
                <div className="linea-reci"></div>
                <div className="triangulon"></div>
                <Image className='init' src={Logon} style={{ width: '20px', height: '20px', }} />
                <h5 className="ho" >VISIÓN</h5>
              </div>
            </div>
            < div>
          <p className="texto"> SENNOVALAB aporta al desarrollo de la región capacidades técnicas y tecnológicas para la formulación y gestión de procesos de Ciencia, Tecnología e Innovación, vinculando al sector productivo y la academia, y alineado con los planes de desarrollo territoriales, a través de servicios de asesoría y consultoría en actividades científico-tecnológicas y la transferencia de conocimiento, aumentando la competitividad de empresas y comunidades académicas</p>
          </div>
        </Col>
      </Row>
      <div className="Contenedori">
      <Row>
      <Col md={4} className='text-center' >
            <div className="container-r">
            <div className='Imagenes-container'>
               <Image className='imagen' src={Construccion} style={{ width: '220px', height: '225px', }} />
               </div>
               </div>
               <div className="container-d">
               <Image className='Imag' src={Industria} style={{ width: '220px', height: '225px', }} />
               <Image className='Imag' src={Software} style={{ width: '220px', height: '225px', }} />
               
          </div>
        </Col>
       
        <Col md={4} className='text-right' >
            <div className="container-j">
              <div className="triangle"></div>
              <div className="linea">
                <div className="linea-diagonala"></div>
                <div className="linea-rectas"></div>
                <Image className='io' src={Logon} style={{ width: '20px', height: '20px', }} />
                <h5 className="hu">OBJETIVO</h5>
              </div>
            </div>
            <div className="container-j"> 
            <div className="trianglen"></div>
            <div className="linea-diagonali"></div>
            <div className='vertical'></div> 
            <div className="linea-diagonalin"></div>
            <div> 
            <div className='outer-triangle'>
              <div className='inner-triangle'></div>
              </div> 
              <div>
              <p className="textou">1. Prestar servicios de asesoría y consultoría en actividades I+D+i a las empresas de la región, de acuerdo con sus necesidades brindando soluciones innovadoras contribuyendo al aumento de su productividad y competitividad.</p>
            </div> 
          <p className="texto">2. Promover el portafolio del ambiente de servicios tecnológicos SENOVALAB en las empresas y entidades de iniciativa privada o pública, dirigidas a extender la innovación y el desarrollo tecnológico.</p>
          <p className="texto">3. Contribuir al fortalecimiento de la formación profesional integral de los aprendices e instructores del Centro de Procesos Industriales y Construcción del SENA regional Caldas, a través de actividades de I+D+i bajo criterios de calidad y excelencia que permitan la acreditación de programas formativos, la empleabilidad y la creación de nuevas empresas.</p>
          </div>
          </div>
        </Col>
        
        <Col md={2} className='text-right' >
            <div className="container-r">
         

          <p className="texto" >Ver portafolio de Servicios</p>
          <Image className='image' src={Portafolio} style={{ width: '60px', height: '75px', }} />
          </div>
        </Col>
      </Row>
      </div>
    </Container >
  );
}

export default Nosotros;