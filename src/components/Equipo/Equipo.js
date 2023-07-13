import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import "./Equipo.css";
import Image from 'react-bootstrap/Image';
import Line from '../../assets/img/png/Line.png';
import sennovalab from '../../assets/img/png/sennovalab.png';
import avatar from '../../assets/jpg/avatar1.jpg';
import avatar2 from '../../assets/jpg/avatar2.jpg';
import avatar3 from '../../assets/jpg/avatar3.jpg';


const Equipo = () => {
    return (

        <Container >
            <Row>
                <Col sm={3}></Col>
                <Col sm={2}></Col>
                <Col sm={2} className='d-flex justify-content-center text-center'>
                    <div className="card">
                        <img src={avatar} alt="Person" className="card__image" />
                        <p className="card__name"><b>Yaneth Mejía Rendón</b></p>
                        <p className="card__email"><b>Correo:</b> lammorenoc@sena.edu.co</p>
                        <p className="card__Rol"><b>Rol:</b> Personal Tecnico</p>
                        <p className="card__line"><b> Linea de construccion </b></p>
                    </div>
                </Col>
                <Col sm={2}></Col>
                <Col sm={3}></Col>

            </Row>
            <br />
            <br />
            <br />
            <Row>
                <Col sm={4} className='text-center' ></Col>
                <Col sm={2} className='text-center'>
                    <div className="card">
                        <img src={avatar3} alt="Person" className="card__image" />
                        <p className="card__name"><b>Yaneth Mejía Rendón</b></p>
                        <p className="card__email"><b>Correo:</b> lammorenoc@sena.edu.co</p>
                        <p className="card__Rol"><b>Rol:</b> Personal Tecnico</p>
                        <p className="card__line"><b> Linea de construccion </b></p>
                    </div>
                </Col>
                <Col sm={2} className='text-center'>
                    <div className="card">
                        <img src={avatar} alt="Person" className="card__image" />
                        <p className="card__name"><b>Yaneth Mejía Rendón</b></p>
                        <p className="card__email"><b>Correo:</b> lammorenoc@sena.edu.co</p>
                        <p className="card__Rol"><b>Rol:</b> Personal Tecnico</p>
                        <p className="card__line"><b> Linea de construccion </b></p>
                    </div>
                </Col>
                <Col sm={4} ></Col>
            </Row>
            <br />
            <br />
            <br />
            <Row>
                <Col xs={5} md={3} className='text-center' >
                    <br />
                    <br />
                    <br />
                    <h2>NUESTRO</h2>
                    <Image className='image' src={sennovalab} style={{ width: '50px', height: '50px', }} />
                    <Image src={Line} style={{ width: '209px', height: '4px', }} />
                    <h2>EQUIPO</h2>
                </Col>

                <Col sm={2} className='text-center'>
                    <div className="card">
                        <img src={avatar} alt="Person" className="card__image" />
                        <p className="card__name"><b>Yaneth Mejía Rendón</b></p>
                        <p className="card__email"><b>Correo:</b> lammorenoc@sena.edu.co</p>
                        <p className="card__Rol"><b>Rol:</b> Personal Tecnico</p>
                        <p className="card__line"><b> Linea de construccion </b></p>
                    </div>
                </Col>
                <Col sm={2} className='text-center'>
                    <div className="card">
                        <img src={avatar3} alt="Person" className="card__image" />
                        <p className="card__name"><b>Yaneth Mejía Rendón</b></p>
                        <p className="card__email"><b>Correo:</b> lammorenoc@sena.edu.co</p>
                        <p className="card__Rol"><b>Rol:</b> Personal Tecnico</p>
                        <p className="card__line"><b> Linea de construccion </b></p>
                    </div>
                </Col>
                <Col sm={2} className='text-center'>
                    <div className="card">ssss
                        <img src={avatar} alt="Person" className="card__image" />
                        <p className="card__name"><b>Yaneth Mejía Rendón</b></p>
                        <p className="card__email"><b>Correo:</b> lammorenoc@sena.edu.co</p>
                        <p className="card__Rol"><b>Rol:</b> Personal Tecnico</p>
                        <p className="card__line"><b> Linea de construccion </b></p>
                    </div>
                </Col>
                <Col sm={3} ></Col>
            </Row>
            <br />
            <br />
            <br />
            {/* Ultima fila de 4 en en piramide */}
            <Row>
                <Col sm={2} className='text-center'></Col>
                <Col sm={2} className='text-center'>
                    <div className="card">
                        <img src={avatar} alt="Person" className="card__image" />
                        <p className="card__name"><b>Yaneth Mejía Rendón</b></p>
                        <p className="card__email"><b>Correo:</b> lammorenoc@sena.edu.co</p>
                        <p className="card__Rol"><b>Rol:</b> Personal Tecnico</p>
                        <p className="card__line"><b> Linea de construccion </b></p>
                    </div>
                </Col>
                <Col sm={2} className='text-center'>
                    <div className="card">
                        <img src={avatar2} alt="Person" className="card__image" />
                        <p className="card__name"><b>Yaneth Mejía Rendón</b></p>
                        <p className="card__email"><b>Correo:</b> lammorenoc@sena.edu.co</p>
                        <p className="card__Rol"><b>Rol:</b> Personal Tecnico</p>
                        <p className="card__line"><b> Linea de construccion </b></p>
                    </div>
                </Col>
                <Col sm={2} className='text-center'>
                    <div className="card">
                        <img src={avatar} alt="Person" className="card__image" />
                        <p className="card__name"><b>Yaneth Mejía Rendón</b></p>
                        <p className="card__email"><b>Correo:</b> lammorenoc@sena.edu.co</p>
                        <p className="card__Rol"><b>Rol:</b> Personal Tecnico</p>
                        <p className="card__line"><b> Linea de construccion </b></p>
                    </div>
                </Col>
                <Col sm={2} className='text-center'>
                    <div className="card">
                        <img src={avatar} alt="Person" className="card__image" />
                        <p className="card__name"><b>Yaneth Mejía Rendón</b></p>
                        <p className="card__email"><b>Correo:</b> lammorenoc@sena.edu.co</p>
                        <p className="card__Rol"><b>Rol:</b> Personal Tecnico</p>
                        <p className="card__line"><b> Linea de construccion </b></p>
                    </div>
                </Col>
                <Col sm={2} className='text-center'></Col>
            </Row>

        </Container>

    );
}



export default Equipo;