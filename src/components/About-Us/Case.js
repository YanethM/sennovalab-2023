import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Line from '../../assets/img/png/Line.png';

import Menu from '../MenuNav/Menu';

function Case() {
  return (
    <Container fluid>
    <Menu/>
      <Row>
      <Col sm={8}>
          <h1>NUESTROS</h1>
          <Image src={Line} />
          <h1>CLIENTES</h1>
        </Col>
        <Col sm={4}>
        </Col>
        </Row>
      <br></br>
      <Row>
      <Col sm={4}>
        <h1>CASOS</h1>
          <Image src={Line} />
          <h1>EXITOSOS</h1>
        </Col>
        <Col sm={8}>
       
            
        </Col>
        

      </Row>
    </Container>
  );
}

export default Case;


