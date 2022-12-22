import React, { useState, useEffect } from 'react'
import AboutMenu from './aboutMenu'
import { NavLink } from 'react-router-dom'
import '../../index.css'
import './index.css'
import BizHaqida from './haqida'
import imgs from '../../img/aboutpng.png'
import { Col, Container, Row } from 'react-bootstrap'
export default function Bizhaqida() {

  return (
    <Container >
      <Row className='d-flex sssss align-items-start justify-content-between'>
        <Col xxl lg className="ssssss">
          <AboutMenu />
        </Col>
        <Col xxs xs>
          <img style={{width: "100%"}} src={imgs} />
        </Col>
      </Row>
      <div className='aboutcontent'>
        <BizHaqida />
      </div>
    </Container>
  )
}
