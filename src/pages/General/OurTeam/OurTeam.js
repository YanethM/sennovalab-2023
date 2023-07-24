import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "./OurTeam.css";
import Image from "react-bootstrap/Image";
import Line from "../../../assets/img/png/Line.png";
import figura from "../../../assets/img/png/figura-pajaro.png";
import TeamCard from "../../../components/TeamCard/TeamCard";

const OurTeam = () => {
    return (
        <Container>
            <Row className="mb-5">
                <Col sm={4} className="text-center"></Col>
                <Col
                sm={4}
                className="d-flex flex-row text-center justify-content-center"
                >
                    <TeamCard />
                </Col>
                <Col sm={4}></Col>
            </Row>
            <Row className="mb-5">
                <Col sm={4} className="text-center"></Col>
                <Col sm={2} className="text-center">
                    <TeamCard />
                </Col>
                <Col sm={2} className="text-center">
                    <TeamCard />
                </Col>
                <Col sm={4}></Col>
            </Row>
            <Row className="mb-5">
                <Col xs={5} md={3} className="text-center">
                <Col className="d-flex justify-content-center align-items-center flex-column">
                    <Image src={figura} style={{ width: "50px", height: "55px" }} />
                    <h2 className="class-header">NUESTRO</h2>
                    <Image src={Line} />
                    <h2 className="p-0 m-0">EQUIPO</h2>
                </Col>
                </Col>

                <Col sm={2} className="text-center">
                    <TeamCard />
                </Col>
                <Col sm={2} className="text-center">
                    <TeamCard />
                </Col>
                <Col sm={2} className="text-center">
                    <TeamCard />
                </Col>
                <Col sm={3}></Col>
            </Row>
            {/* Ultima fila de 4 en en piramide */}
            <Row>
                <Col sm={2} className="text-center"></Col>
                <Col sm={2} className="text-center">
                    <TeamCard />
                </Col>
                <Col sm={2} className="text-center">
                    <TeamCard />
                </Col>
                <Col sm={2} className="text-center">
                    <TeamCard />
                </Col>
                <Col sm={2} className="text-center">
                    <TeamCard />
                </Col>
                <Col sm={2} className="text-center"></Col>
            </Row>
        </Container>
    );
};

export default OurTeam;
