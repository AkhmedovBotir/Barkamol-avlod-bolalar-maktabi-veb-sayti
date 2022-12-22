import React, { useState, useEffect } from 'react'
import AboutMenu from './menu'
import '../../../index.css'
import { Col, Container, Row } from 'react-bootstrap'

import Bolimboshliq from './togarakrah'
import imgs from '../../../img/aboutpng.png'
import Navbar from '../../Navbar/navbar'
import Footer from '../../Footer/footer'
export default function Bizhaqida() {
    return (
        <div className='rah'>
            <Navbar />
            <br />
            <br />
            <br />
            <br />
            <Container >
                <Row className='d-flex sssss align-items-start justify-content-between'>
                    <Col xxl lg className="ssssss">
                        <AboutMenu />
                    </Col>
                    <Col xxs xs>
                        <img style={{ width: "100%" }} src={imgs} />
                    </Col>
                </Row>
                <div className='aboutcontent'>
                    <Bolimboshliq />
                </div>
            </Container>
            <Footer />
        </div>
    )
}
