import React from 'react';
import { Carousel } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import carusel1 from '../../assets/img/png/carusel1.png';
import './Pqrs.css';

function Pqrs() {


    return (

        <section className="carrusel">
            <span className="carrusel" style={{ '--i': 1 }}>
                <img src={carusel1} />
            </span>
            <Carousel.Caption>
                <h5>Nombre de la noticia</h5>
                <p>Descripción</p>
                <p>Leer mas..</p>

            </Carousel.Caption>
            <span className="carrusel" style={{ '--i': 2 }}>
                <img src="https://concepto.de/wp-content/uploads/2021/07/murcielago-e1626720029177.jpg" />
            </span>
            <Carousel.Caption>
                <h5>Nombre de la noticia</h5>
                <p>Descripción</p>
                <p>Leer mas..</p>

            </Carousel.Caption>
            <span className="carrusel" style={{ '--i': 3 }}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk0yUL4MkW58kKoHOZjscxi1tRzetAu2qolw&usqp=CAU" />
            </span>
            <Carousel.Caption>
                <h5>Nombre de la noticia</h5>
                <p>Descripción</p>
                <p>Leer mas..</p>

            </Carousel.Caption>
            <span className="carrusel" style={{ '--i': 4 }}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGqrYNyVdysYLLLVDOj7Gp3icNUmHuIFmi7Q&usqp=CAU" />
            </span>
            <Carousel.Caption>
                <h5>Nombre de la noticia</h5>
                <p>Descripción</p>
                <p>Leer mas..</p>

            </Carousel.Caption>
            <span className="carrusel" style={{ '--i': 5 }}>
                <img src="https://img.freepik.com/vector-gratis/silueta-dragon-diseno-plano_23-2149486319.jpg?w=1060&t=st=1677806829~exp=1677807429~hmac=869b87c743215b4769486e97036f0fae28ae5408598c4bed2d1a8c0ffcc520dd" />
            </span>
            <Carousel.Caption>
                <h5>Nombre de la noticia</h5>
                <p>Descripción</p>
                <p>Leer mas..</p>

            </Carousel.Caption>
            <span>
                <img src="https://acortar.link/t9gA8X" />
            </span>
            <Carousel.Caption>
                <h5>Nombre de la noticia</h5>
                <p>Descripción</p>
                <p>Leer mas..</p>

            </Carousel.Caption>
        </section>

    );
}

export default Pqrs;