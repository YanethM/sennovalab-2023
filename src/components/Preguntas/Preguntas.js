import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import './Preguntas.css';
import Logon from '../../assets/img/png/Logon.png';

function Preguntas() {


    return (
        <Container fluid >

            <Row>
                <Col sm={12}>
                    <div className='Con1'>
                        <h1 className='ht-1' >NUESTRAS</h1>
                        <div className='Imagenes-container1'>
                            <Image className='i-1' src={Logon} style={{ width: '30px', height: '30px', }} />
                            <div className="linea_diagonal-1"></div>
                        </div>
                        <h1 className='ht-2'>Preguntas frecuentes</h1>
                    </div>
                </Col>
            </Row>

            <Row>

                <Col sm={12}>
                    <div div className='Con2'>
                        <h2 className='ht-3'><a href="#SENNOVALAB">¿Qué es SENNOVALAB?</a></h2>
                        <h2 className='ht-3'><a href="#propósito de SENNOVALAB">¿Cuál es el propósito de SENNOVALAB?</a></h2>
                        <h2 className='ht-3'><a href="#servicios específicos">¿Cuáles son los servicios específicos de SENNOVALAB?</a></h2>
                        <h2 className='ht-3'><a href="#asesoría y consultoría">¿Cuál es la diferencia entre asesoría y consultoría?</a></h2>
                        <h2 className='ht-3'><a href="#Innovación">¿Qué es Innovación?</a></h2>
                        <h2 className='ht-3'><a href="#Gestión de la Innovación">¿Qué es el Sistema de Gestión de la Innovación?</a></h2>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm={12}>
                    <div div className='Con3'>
                        <h2 className='ht-4' id="SENNOVALAB">¿Qué es SENNOVALAB?</h2>
                        <div className='texto-p0'>
                            <p> Es el Ambiente de Servicios Tecnológicos en I+D+i del Centro de Procesos industriales y Construcción, Regional Caldas. Hace parte del ecosistema SENNOVA, en el programa de Desarrollo Tecnológico, y dentro de este en la línea programática “Fortalecimiento de la Oferta de Servicios Tecnológicos para las Empresas”, la cual busca el fortalecimiento de la capacidad de investigación aplicada, innovación y desarrollo tecnológico en los centros de formación profesional mediante la oferta de servicios tecnológicos al sector productivo y el fortalecimiento de la Red de Servicios Tecnológicos.</p>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm={12}>
                    <div div className='Con4'>
                        <h2 className='ht-4' id="propósito de SENNOVALAB">¿Cuál es el propósito de SENNOVALAB?</h2>
                        <div className='texto-p6'>
                            <p> Fomentar la creatividad, la cultura de la innovación y la generación de ideas y oportunidades, con el fin de dar respuesta a las necesidades del sector productivo y del SENA, a través de servicios de asesoría y consultoría en actividades de I+D+i, en las líneas de Industria, Construcción y Desarrollo de Software, bajo la NTC 5801:2018 “Sistema de Gestión de la Innovación”, y con ello, contribuir al incremento de la productividad y la competitividad de las empresas de Caldas y a la calidad de la formación del SENA.</p>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm={12}>
                    <div div className='Con5'>
                        <h2 className='ht-4' id="servicios específicos">¿Cuáles son los servicios específicos de SENNOVALAB?</h2>
                        <div className='texto-p7'>
                            <p>SENNOVALAB presta servicios de asesoría y consultoría en formulación y gestión de proyectos de investigación, desarrollo tecnológico e innovación (I+D+i), y transferencias de conocimientos en actividades de I+D+i, dirigidos a las empresas de los sectores de industria y construcción de Caldas y al SENA.</p>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm={12}>
                    <div div className='Con3'>
                        <h2 className='ht-4' id="asesoría y consultoría">¿Cuál es la diferencia entre asesoría y consultoría?</h2>
                        <div className='texto-p8'>
                            <p>Asesoría: Servicio a través del cual se ofrece al cliente, interno o externo, un acompañamiento en el proceso de formulación o gestión de un proyecto de I+D+i, de acuerdo con la necesidad y el alcance acordado con el cliente.</p>
                            <p> Consultoría: Servicio a través del cual se ofrece al cliente, interno o externo, orientar o fortalecer etapas o temas específicos de la formulación de un proyecto, la gestión de ideas y oportunidades o la gestión de un proyecto de I+D+i, de acuerdo con la necesidad específica, el alcance y número de horas acordadas con el cliente. Una consultoría puede ser de mínimo 4 horas – máximo 16 horas.</p>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm={12}>
                    <div div className='Con6'>
                        <h2 className='ht-4' id="Innovación">¿Qué es Innovación?</h2>
                        <div className='texto-p9'>
                            <p> De acuerdo con el Manual de Oslo, la innovación es un impulsor clave de la productividad, la economía, crecimiento y bienestar, por lo que señala que, la innovación no es sólo cuestión de desarrollar nuevas ideas, una innovación requiere implementación, ya sea al interior o poniéndola a disposición de otras partes, empresas, individuos u organizaciones.
                                El Manual de Oslo 2018, presenta la siguiente definición de innovación aplicable a todas las unidades o entidades institucionales (empresarial, gubernamental, sin ánimo de lucro): “Una innovación es un nuevo o mejorado producto o proceso (o una combinación de ambos) que difiere significativamente de los productos o procesos previos de la unidad institucional y que ha sido puesto a disposición de los usuarios potenciales (producto) o implementado en la unidad institucional (proceso)” (OCDE & Eurostat, 2018, p. 60). Teniendo en cuenta lo anterior, es importante diferenciar entre creatividad e innovación. La creatividad es la capacidad de generar y conectar ideas orientadas a dar respuesta a una necesidad, problema o situación específica, y la innovación es la capacidad de llevar a cabo o implementar esas ideas</p>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm={12}>
                    <div div className='Con7'>
                        <h2 className='ht-4' id="Gestión de la Innovación">¿Qué es el Sistema de Gestión de la Innovación?</h2>
                        <div className='texto-p10'>
                            <p>Es un conjunto de elementos de una organización que interactúan para establecer las políticas y los objetivos de innovación, así como procesos para lograr dichos objetivos.
                                Desde el año 2020, el equipo de SENNOVALAB asumió el reto de implementar el sistema de gestión de la innovación - SGI, basado en la Norma Técnica Colombiana 5801:2018 “Requisitos del Sistema de Gestión de la Innovación”, la cual orienta sobre la correcta acción de los procesos de I+D+i, y se complementa con la NTC 5802:2008, “Requisitos de un proyecto de I+D+i”, integrando conocimiento, cooperación, aprendizaje organizacional y creatividad con las estructuras, procesos y procedimientos, para garantizar los resultados del sistema de gestión y su mejora continua, logrando efectividad en la gestión de las actividades de I+D+i que integran el portafolio de servicios, para dar respuesta a las necesidades del sector productivo y del SENA.</p>
                        </div>
                    </div>
                </Col>
            </Row>

        </Container >
    );
}

export default Preguntas;