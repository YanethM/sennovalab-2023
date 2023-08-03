import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Portafolio from "../../assets/img/png/Portafolio.png";
import industri from "../../assets/img/png/Industria.png";
import softwar from "../../assets/img/png/Software.png";
import construccio from "../../assets/img/png/Construccion.png";
import Logon from "../../assets/img/png/Logon.png";
import "./Nosotros.css";

const Nosotros = () => {
  return (
    <Container fluid className="query-container-aboutus">
      <div className="Contenedor">
        <Row className="query-box1-aboutus">
          <Col sm={2} className="query-col1-aboutus">
            <div className="Container3">
              <h1 className="Der">SOBRE</h1>
              <div className="Imagenes-container1">
                <Image
                  className="i11d"
                  src={Logon}
                  style={{ width: "30px", height: "30px" }}
                />
                <div className="linea-recta11d"></div>
              </div>
              <h1 className="Der229">SENNOVALAB</h1>
            </div>
          </Col>
          <Col sm={1}></Col>
          <Col md={4} className="text-right query-margin-aboutus">
            <div className="container-s ">
              <div className="triangle"></div>
              <div className="linea">
                <div className="linea-diagonal"></div>
                <div className="linea-recta"></div>
                <Image
                  className="i"
                  src={Logon}
                  style={{ width: "20px", height: "20px" }}
                />
                <h5 className="h ">INFORMACIÓN GENERAL</h5>
              </div>
            </div>
            <div className="query-div-texto">
              <p className="texto">
                {" "}
                Somos un ambiente de servicios tecnológicos en actividades de
                I+D+i del Centro de Proceso Industriales y Construcción, SENA
                Regional Caldas. Hacemos parte del Ecosistema SENNOVA y de la
                línea “Fortalecimiento de la Oferta de Servicios Tecnológicos
                para las Empresas”.
              </p>
            </div>
          </Col>

          <Col md={4} className="text-right query-description-aboutus">
            <div className="container-a">
              <div className="linea ">
                <div className="linea-dia"></div>
                <div className="linea-re"></div>
                <div className="triangulo"></div>
                <Image
                  className="in"
                  src={Logon}
                  style={{ width: "20px", height: "20px" }}
                />
                <h5 className="ha "> DESCRIPCION</h5>
              </div>
            </div>
            <div className="query-text-descript-abouts">
              <p className="texto ">
                {" "}
                SENNOVALAB considera las actividades de Investigación,
                Desarrollo Tecnológico e Innovación (I+D+i) como los pilares
                básicos de su estrategia, para aportar al desarrollo de la
                región capacidades técnicas y tecnológicas en la gestión y
                desarrollo de procesos de Ciencia, Tecnología e Innovación,
                vinculando al sector productivo y la academia.
              </p>
            </div>
          </Col>
        </Row>
      </div>

      <Row className="query-box2-aboutus">
        <Col md={3}></Col>
        <Col md={4} className="text-right query-description2-aboutus">
          <div className="container-i">
            <div className="trianglo"></div>
            <div className="linea ">
              <div className="linea-diagonal"></div>
              <div className="linea-rect"></div>
              <Image
                className="im"
                src={Logon}
                style={{ width: "20px", height: "20px" }}
              />
              <h5 className="hj ">MISIÓN</h5>
            </div>
          </div>
          <div className="query-text-descript-abouts">
            <p className="texto">
              {" "}
              SENNOVALAB aporta al desarrollo de la región capacidades técnicas
              y tecnológicas para la formulación y gestión de procesos de
              Ciencia, Tecnología e Innovación, vinculando al sector productivo
              y la academia, y alineado con los planes de desarrollo
              territoriales, a través de servicios de asesoría y consultoría en
              actividades científico-tecnológicas y la transferencia de
              conocimiento, aumentando la competitividad de empresas y
              comunidades académicas.
            </p>
          </div>
        </Col>
        <Col md={4} className="text-right query-box2-aboutus">
          <div className="container-b ">
            <div className="linea ">
              <div className="linea-dian"></div>
              <div className="linea-reci"></div>
              <div className="triangulon"></div>
              <Image
                className="init "
                src={Logon}
                style={{ width: "20px", height: "20px" }}
              />
              <h5 className="ho ">VISIÓN</h5>
            </div>
          </div>
          <div className="query-text-descript-abouts">
            <p className="texto ">
              {" "}
              SENNOVALAB aporta al desarrollo de la región capacidades técnicas
              y tecnológicas para la formulación y gestión de procesos de
              Ciencia, Tecnología e Innovación, vinculando al sector productivo
              y la academia, y alineado con los planes de desarrollo
              territoriales, a través de servicios de asesoría y consultoría en
              actividades científico-tecnológicas y la transferencia de
              conocimiento, aumentando la competitividad de empresas y
              comunidades académicas
            </p>
          </div>
        </Col>
      </Row>
      <div className="Contenedori ">
        <Row className="Contenedori">
          <Col md={4} className="text-center ">
            <div className="container-r">
              <div className="Imagenes-container">
                <Image
                  className="imagen"
                  src={construccio}
                  style={{ width: "220px", height: "225px" }}
                />
              </div>
            </div>
            <div className="container-d ">
              <Image
                className="Imag"
                src={softwar}
                style={{ width: "220px", height: "225px" }}
              />
              <Image
                className="Imag"
                src={industri}
                style={{ width: "220px", height: "225px" }}
              />
            </div>
          </Col>

          <Col md={4} className="text-right query-box3-aboutus">
            <div className="container-j ">
              <div className="triangle"></div>
              <div className="linea">
                <div className="linea-diagonala"></div>
                <div className="linea-rectas"></div>
                <Image
                  className="io"
                  src={Logon}
                  style={{ width: "20px", height: "20px" }}
                />
                <h5 className="hu ">OBJETIVO</h5>
              </div>
            </div>
            <div className="container-j ">
              <div className="trianglen"></div>
              <div className="linea-diagonali"></div>
              <div className="vertical"></div>
              <div className="linea-diagonalin"></div>
              <div className="contain-query-flex-about">
                <div className="outer-triangle">
                  <div className="inner-triangle"></div>
                </div>
                <div className="query-text-descript-abouts">
                  <p className="textou query-box4-flex">
                    1. Prestar servicios de asesoría y consultoría en
                    actividades I+D+i a las empresas de la región, de acuerdo
                    con sus necesidades brindando soluciones innovadoras
                    contribuyendo al aumento de su productividad y
                    competitividad.
                  </p>
                </div>
              </div>
              <div className="linea-d"></div>
              <div>
                <div className="outer-trianglen">
                  <div className="inner-triangle"></div>
                </div>
                <div className="query-text-descript-abouts">
                  <p className="text query-box4-flex">
                    2. Promover el portafolio del ambiente de servicios
                    tecnológicos SENOVALAB en las empresas y entidades de
                    iniciativa privada o pública, dirigidas a extender la
                    innovación y el desarrollo tecnológico.
                  </p>
                </div>
              </div>
              <div className="linea-ds"></div>
              <div>
                <div className="outer-triangleno">
                  <div className="inner-triangle"></div>
                </div>
                <div className="query-text-descript-abouts">
                  <p className="texti query-box4-flex">
                    3. Contribuir al fortalecimiento de la formación profesional
                    integral de los aprendices e instructores del Centro de
                    Procesos Industriales y Construcción del SENA regional
                    Caldas, a través de actividades de I+D+i bajo criterios de
                    calidad y excelencia que permitan la acreditación de
                    programas formativos, la empleabilidad y la creación de
                    nuevas empresas.
                  </p>
                </div>
              </div>
            </div>
          </Col>

          <Col md={2} className="text-center query-portf-about">
            <div className="container-r ">
              <p className="texton">Ver portafolio de Servicios</p>
              <a href="/servicios" className="query-hportfolio-aboutus">
                <Image
                  className="um"
                  src={Portafolio}
                  style={{ width: "250px", height: "190px" }}
                />
              </a>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Nosotros;
