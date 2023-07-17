import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Line from '../../assets/img/png/Line.png';



const Pqrs = () => {

    return (
        <Container fluid>
            <div className="Contenedor">

                <Row>

                    <Col sm={12} className='text-center'>
                        <div>
                            <h1>PREGUNTAS FRECUENTES</h1>
                        </div>
                        <h1>¿Qué es SENNOVALAB?</h1>

                    </Col>
                    <Col sm={4}>
                    </Col>
                </Row>
            </div>
            <div className="Contenedor">

                <Row>

                    <Col sm={12} className='text-center'>
                        <h1>CASOS</h1>
                        <Image src={Line} />
                        <h1>EXITOSOS</h1>
                    </Col>
                    <Col sm={8}>


                    </Col>


                </Row>
            </div>
        </Container>
    );
}

export default Pqrs;


