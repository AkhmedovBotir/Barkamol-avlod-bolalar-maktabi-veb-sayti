import React from 'react'
import img from '../../img/odam.png'
import "./index..sass"
import Aos from "aos";
import { Card, Col, Container, Image, Nav, Row } from 'react-bootstrap';
Aos.init(5000)

export default function indeks() {
    return (
        <div style={{background: "#468cde" }}>
            <Container className='py-5'>
                <Row className='d-flex align-items-center justify-content-center'>
                    <Col lg xl className='d-flex justify-content-center'>
                        <Image src={img} className="mt-md-4 w-75"></Image>
                    </Col>
                    <Col className='p-4' style={{ color: "#fff" }}>
                        <h1 style={{fontWeight: 900}}>BARKAMOL AVLOD bolalar maktablari</h1>
                        <Card.Subtitle style={{width: "70%"}}>Ushbu bo‘limda “Barkamol avlod” bolalar maktablarining
                            hududiy bo‘limlarida amalga oshirilayotgan ishlar
                            bilan tanishasiz
                        </Card.Subtitle>
                        <Nav.Link className='mt-3 bg-white w-50 text-primary text-center text-uppercase py-2 px-3 rounded-pill' href='/'>batafsil</Nav.Link>
                    </Col>
                </Row>
            </Container>
            {/* <div className="rek">
                <div className="left-rek">
                    <img src={img} data-aos="zoom-in" />
                </div>
                <div className="right-rek">
                    <h1 className="right-title" data-aos="fade-left">BARKAMOL AVLOD bolalar maktablari</h1>
                    <h3 data-aos="fade-left">Ushbu bo‘limda “Barkamol avlod” bolalar maktablarining hududiy bo‘limlarida amalga oshirilayotgan ishlar bilan tanishasiz</h3>
                    <a href="/" data-aos="fade-left">batafsil</a>
                </div>
            </div> */}
        </div>
    )
}
