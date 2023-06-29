/*import {Button, Table, Form, Input } from "antd";
import { useEffect } from "react";
import { useState } from "react";
import "./Nosotros.css";
function Nosotros () {
  const [dataSource, setDataSourcce] = useState([]);
  const [editingRow, setEditingRow] = useState(null);
  const [form] = Form.useForm()
  useEffect(() => {
    const data = [];
    for (let index = 0; index < 1; index++ ) {
      data.push({
        key: `${index}`,
        desc: `Descripión ${index}`,
        misi: `Misión ${index}`,
        visi: `Visión ${index}`,
        obje: `Objetivos ${index}`,
        img: `Imagenes ${index}`,
      });
    } 
    setDataSourcce(data);
  },  []);
  const columns= [
    {
      title:'Descripción',
      dataIndex: "desc",
      render: (text,record) => {
        if(editingRow === record.key){
          return <Form.Item
            name="desc"
            rules={[{
              required:true,
              message: 'please enter your name',
            }]}
            >
            <Input />
          </Form.Item>
        } else {
          return <p>{text}</p>
        }
        },

    },
    {
      title:'Misión',
      dataIndex: "misi",
      render: (text,record) => {
        if(editingRow === record.key){
          return <Form.Item
            name="misi"
            rules={[{
              required:true,
              message: 'please enter your name',
            }]}
            >
            <Input />
          </Form.Item>
        } else {
          return <p>{text}</p>
        }
        },

    },
    {
      title:'Visión',
      dataIndex: "visi",
      render: (text,record) => {
        if(editingRow === record.key){
          return <Form.Item
            name="visi"
            rules={[{
              required:true,
              message: 'please enter your name',
            }]}
            >
            <Input />
          </Form.Item>
        } else {
          return <p>{text}</p>
        }
        },

    },
    {
      title:'Objetivos',
      dataIndex: "obj",
      render: (text,record) => {
        if(editingRow === record.key){
          return (
          <Form.Item name="obj">
            <Input />
          </Form.Item>
          );
        } else {
          return <p>{text}</p>
        }
        },
    },
     {
      title:'Imagenes',
      dataIndex: "img",
      render: (text,record) => {
        if(editingRow === record.key){
          return (
          <Form.Item name="imag">
            <Input />
          </Form.Item>
          );
        } else {
          return <p>{text}</p>
        }
        },
    },
    {
      title:'Actions',
      render: (_, record) =>  {
        return (
        <>
        <Button
         type="link" 
        onClick={()=>{
          setEditingRow(record.key)
          form.setFieldValue({
            name: record.name,
            address: record.address,
          })

        }} 
        >
          Edit
          </Button>
        <Button type="link" htmlType="submit">Save</Button>
        </>
        );
      },
    },
  ];
  const onFinish =(values)=>{
    const updatedDataSource =[...dataSource];
    updatedDataSource.splice(editingRow,1,{...values, key:editingRow});
    setDataSourcce(updatedDataSource);
    setEditingRow(null);
  };
  return (
    <div className="Nosotros">
      <header className="Nosotros-header">
        <Form form={form} onFinish={onFinish}>
      <Table columns={columns} dataSource={dataSource}></Table>
      </Form>
      </header>
    </div>
  );
}

export default Nosotros*/



/*import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function Nosotros() {
  return (
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src="Industria" rounded />
        </Col>
        <Col xs={6} md={4}>
          <Image src="holder.js/171x180" roundedCircle />
        </Col>
        <Col xs={6} md={4}>
          <Image src="holder.js/171x180" thumbnail />
        </Col>
      </Row>
    </Container>
  );
}

export default Nosotros;*/
import Carousel from 'react-bootstrap/Carousel';
import carusel1 from '../../assets/img/png/carusel1.png';
import carusel2 from '../../assets/img/png/carusel2.png';
import carusel3 from '../../assets/img/png/carusel3.png';
import carusel4 from '../../assets/img/png/carusel4.png';
import carusel5 from '../../assets/img/png/carusel5.png';
import carusel6 from '../../assets/img/png/carusel6.png';
import carusel7 from '../../assets/img/png/carusel7.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Line from '../../assets/img/png/Line.png';
import Construccion from '../../assets/img/png/Construccion.png';
import Industria from '../../assets/img/png/Industria.png';
import Software from '../../assets/img/png/Software.png';
import Menu from '../MenuNav/Menu';
import "./Sennovalab.css";

import sennovalab from '../../assets/img/png/sennovalab.png';

import Footer from '../Footer/Footer';


function Sennovalab() {

  return (
    <Container fluid>
      <hr></hr>
      <Menu />
      <br />
      <br />
      <br />
      <br />
      <Row>
        <Col sm={6} className='text-center' >
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

          <h1> ACTUALIDAD</h1>
          <Image src={sennovalab} />
          <Image className='imgn' src={Line} />
          <h1>SENNOVALAB</h1>
        </Col>

        <Col sm={6}>
          <Carousel variant="dark">
            <Carousel.Item>
              <img
                className="carrusel"
                src={carusel1}
                alt=""
              />

              <Carousel.Caption>
                <h5>Nombre de la noticia</h5>
                <p>Descripción</p>
                <p>Leer mas..</p>

              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="carrusel"
                src={carusel2}
                alt="Second slide"
              />
              <Carousel.Caption>
                <h5>Nombre de la noticia</h5>
                <p>Descripción</p>
                <p>Leer mas..</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="carrusel"
                src={carusel3}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h5>Nombre de la noticia</h5>
                <p>Descripción</p>
                <p>Leer mas..</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="carrusel"
                src={carusel4}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h5>Nombre de la noticia</h5>
                <p>Descripción</p>
                <p>Leer mas..</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="carrusel"
                src={carusel5}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h5>Nombre de la noticia</h5>
                <p>Descripción</p>
                <p>Leer mas..</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="carrusel"
                src={carusel6}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h5>Nombre de la noticia</h5>
                <p>Descripción</p>
                <p>Leer mas..</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="carrusel"
                src={carusel7}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h5>Nombre de la noticia</h5>
                <p>Descripción</p>
                <p>Leer mas..</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      {/*<hr></hr>
      <hr></hr>*/}

      <Row>


        <div className=''>

          <Col sm={7} className='text-center'>
            <h1> NUESTRAS</h1>
            <Image src={sennovalab} />
            <Image className='imgn' src={Line} />
            <h1>LINEAS</h1>
          </Col>

        </div>


        <Col sm={5}>
          <Image className='image' src={Construccion} style={{ width: '160px', height: '295px', }} />
          <Image className='image' src={Industria} style={{ width: '160px', height: '295px', }} />
          <Image className='image' src={Software} style={{ width: '160px', height: '295px', }} />
        </Col>
        <br />
        <br />
        <br />
        <br />
        {/*<Placeholder xs={12} bg="dark" />
        <Card className="text-center">
          <Card.Header>Featured</Card.Header>
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
          <Card.Footer className="text-muted">2 days ago</Card.Footer>
  </Card>*/}

      </Row>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />

    </Container >


  );
}

export default Sennovalab;


