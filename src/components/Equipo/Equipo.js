import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import "./Equipo.css";
import Image from 'react-bootstrap/Image';
import Line from '../../assets/img/png/Line.png';
import sennovalab from '../../assets/img/png/sennovalab.png';


const Equipo = () => {
    return (

        <Container >
            <br />
            <br />
            <br />

            <Row>
                <Col sm={3}></Col>
                <Col sm={2}></Col>
                <Col sm={2} className='text-center'>
                    <div className="container">
                        <div className="card">
                            <button href="http://localhost:3000/Const" >Linea de Construcción</button>
                            <img src="https://lh3.googleusercontent.com/ytP9VP86DItizVX2YNA-xTYzV09IS7rh4WexVp7eilIcfHmm74B7odbcwD5DTXmL0PF42i2wnRKSFPBHlmSjCblWHDCD2oD1oaM1CGFcSd48VBKJfsCi4bS170PKxGwji8CPmehwPw=w200-h247-no" alt="Person" className="card__image" />
                            <p className="card__name">Andrea Del Pilar Alvarez Camargo</p>
                            <p className="card__email">Correo: apalvarez@sena.edu.co </p>
                            <p className="card__Rol">Rol: Responsable de la linea </p>
                        </div>
                    </div>
                </Col>
                <Col sm={2}></Col>
                <Col sm={3}></Col>

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
                    <div className="container">
                        <div className="card">
                            <button>Linea de Construcción</button>
                            <img src="https://lh3.googleusercontent.com/ytP9VP86DItizVX2YNA-xTYzV09IS7rh4WexVp7eilIcfHmm74B7odbcwD5DTXmL0PF42i2wnRKSFPBHlmSjCblWHDCD2oD1oaM1CGFcSd48VBKJfsCi4bS170PKxGwji8CPmehwPw=w200-h247-no" alt="Person" className="card__image" />
                            <p className="card__name">Laura Matilde Moreno Cardona</p>
                            <p className="card__email">Correo: lammorenoc@sena.edu.co</p>
                            <p className="card__Rol">Rol: Personal Tecnico</p>
                        </div>
                    </div>
                </Col>
                <Col sm={2} className='text-center'>
                    <div className="container">
                        <div className="card">
                            <button>Linea de Construcción</button>
                            <img src="https://lh3.googleusercontent.com/ytP9VP86DItizVX2YNA-xTYzV09IS7rh4WexVp7eilIcfHmm74B7odbcwD5DTXmL0PF42i2wnRKSFPBHlmSjCblWHDCD2oD1oaM1CGFcSd48VBKJfsCi4bS170PKxGwji8CPmehwPw=w200-h247-no" alt="Person" className="card__image" />
                            <p className="card__name">Laura Matilde Moreno Cardona</p>
                            <p className="card__email">Correo: lammorenoc@sena.edu.co</p>
                            <p className="card__Rol">Rol: Personal Tecnico</p>
                        </div>
                    </div>
                </Col>
                <Col sm={2} className='text-center'>
                    <div className="container">
                        <div className="card">
                            <button>Linea de Construcción</button>
                            <img src="https://lh3.googleusercontent.com/ytP9VP86DItizVX2YNA-xTYzV09IS7rh4WexVp7eilIcfHmm74B7odbcwD5DTXmL0PF42i2wnRKSFPBHlmSjCblWHDCD2oD1oaM1CGFcSd48VBKJfsCi4bS170PKxGwji8CPmehwPw=w200-h247-no" alt="Person" className="card__image" />
                            <p className="card__name">Laura Matilde Moreno Cardona</p>
                            <p className="card__email">Correo: lammorenoc@sena.edu.co</p>
                            <p className="card__Rol">Rol: Personal Tecnico</p>
                        </div>
                    </div>
                </Col>
                <Col sm={3} ></Col>
            </Row>
            <br />
            <br />
            <br />
            <Row>
                <Col sm={2} className='text-center'>
                    <div className="container">
                        <div className="card">
                            <button>Linea de Industria</button>
                            <img src="https://lh3.googleusercontent.com/oUUiPB9sq3ACq4bUaRmo8pgvC4FUpRRrQKcGIBSOsafawZfRpF1vruFeYt6uCfL6wGDQyvOi6Ez9Bpf1Fb7APKjIyVsft7FLGR6QqdRFTiceNQBm1In9aZyrXp33cZi9pUNqjHASdA=s170-no" alt="Person" className="card__image" />
                            <p className="card__name">Luis Alberto Hernandez</p>
                            <p className="card__email">Correo: lahernandezs@sena.edu.co</p>
                            <p className="card__Rol">Rol: Responsable de la linea</p>
                        </div>
                    </div>
                </Col>
                <Col sm={2} className='text-center'>
                    <div className="container">
                        <div className="card">
                            <button>Linea de Software</button>
                            <img src="https://lh3.googleusercontent.com/pZwZJ5HIL5iKbA91UGMUIPR0VJWa3K0vOGzDZmY6wU3EJBUdfsby3VEyxU162XxTyOyP3D154tjkr-4Jgcx8lygYUR8eB-jVmld4dsHi1c-mE_A8jKccseAG7bdEwVrcuuk6ciNtSw=s170-no" alt="Person" className="card__image" />
                            <p className="card__name">Yaneth Mejía Rendón</p>
                            <p className="card__email">Correo: ymejia@sena.edu.co</p>
                            <p className="card__Rol">Rol: Responsable de la linea</p>
                        </div>
                    </div>
                </Col>
                <Col sm={2} className='text-center'>
                    <div className="container">
                        <div className="card">
                            <button>Linea de Software</button>
                            <img src="https://lh3.googleusercontent.com/pZwZJ5HIL5iKbA91UGMUIPR0VJWa3K0vOGzDZmY6wU3EJBUdfsby3VEyxU162XxTyOyP3D154tjkr-4Jgcx8lygYUR8eB-jVmld4dsHi1c-mE_A8jKccseAG7bdEwVrcuuk6ciNtSw=s170-no" alt="Person" className="card__image" />
                            <p className="card__name">Yaneth Mejía Rendón</p>
                            <p className="card__email">Correo: ymejia@sena.edu.co</p>
                            <p className="card__Rol">Rol: Responsable de la linea</p>
                        </div>
                    </div>
                </Col>
                <Col sm={2} className='text-center'>
                    <div className="container">
                        <div className="card">
                            <button>Linea de Software</button>
                            <img src="https://lh3.googleusercontent.com/pZwZJ5HIL5iKbA91UGMUIPR0VJWa3K0vOGzDZmY6wU3EJBUdfsby3VEyxU162XxTyOyP3D154tjkr-4Jgcx8lygYUR8eB-jVmld4dsHi1c-mE_A8jKccseAG7bdEwVrcuuk6ciNtSw=s170-no" alt="Person" className="card__image" />
                            <p className="card__name">Yaneth Mejía Rendón</p>
                            <p className="card__email">Correo: ymejia@sena.edu.co</p>
                            <p className="card__Rol">Rol: Responsable de la linea</p>
                        </div>
                    </div>
                </Col>
                <Col sm={2} className='text-center'>
                    <div className="container">
                        <div className="card">
                            <button>Linea de Software</button>
                            <img src="https://lh3.googleusercontent.com/pZwZJ5HIL5iKbA91UGMUIPR0VJWa3K0vOGzDZmY6wU3EJBUdfsby3VEyxU162XxTyOyP3D154tjkr-4Jgcx8lygYUR8eB-jVmld4dsHi1c-mE_A8jKccseAG7bdEwVrcuuk6ciNtSw=s170-no" alt="Person" className="card__image" />
                            <p className="card__name">Yaneth Mejía Rendón</p>
                            <p className="card__email">Correo: ymejia@sena.edu.co</p>
                            <p className="card__Rol">Rol: Responsable de la linea</p>
                        </div>
                    </div>
                </Col>
                <Col sm={2} className='text-center'>
                    <div className="container">
                        <div className="card">
                            <button>Linea de Industria</button>
                            <img src="https://lh3.googleusercontent.com/pZwZJ5HIL5iKbA91UGMUIPR0VJWa3K0vOGzDZmY6wU3EJBUdfsby3VEyxU162XxTyOyP3D154tjkr-4Jgcx8lygYUR8eB-jVmld4dsHi1c-mE_A8jKccseAG7bdEwVrcuuk6ciNtSw=s170-no" alt="Person" className="card__image" />
                            <p className="card__name"> Luz Giovanna Garcia Hernandez </p>
                            <p className="card__email">Correo: lugarcia@sena.edu.co</p>
                            <p className="card__Rol">Rol: Personal Tecnico</p>
                        </div>
                    </div>
                </Col>
            </Row>

            <br />
            <br />
            <br />
        </Container>

    );
}



export default Equipo;