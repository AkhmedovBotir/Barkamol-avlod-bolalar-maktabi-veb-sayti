import React, { useState, useEffect } from 'react'
import AboutMenu from './aboutMenu'
import { NavLink } from 'react-router-dom'
import '../../index.css'
import imgs from '../../img/aboutpng.png'
import Navbar from '../Navbar/navbar'
import Footer from '../Footer/footer'
import img1 from '../../img/tuzilma1.jpg'
import img2 from '../../img/tuzilma2.jpg'
import img3 from '../../img/tuzilma3.jpg'
import { Col, Container, Row } from 'react-bootstrap'


export default function Bizhaqida() {
    const [display, setDisplay] = useState('none')
    const listenScrollEvent = () => {
        window.scrollY > 500 ? setDisplay('flex') : setDisplay('none')
    }
    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);
        return () => {
            window.removeEventListener('scroll', listenScrollEvent);
        }
    })
    return (
        <>
            <Navbar />
            <br />
            <br />
            <br />
            <br />
            <Container >
                <Row className='d-flex align-items-start justify-content-between'>
                    <Col xxl lg className='w-25'>
                        <AboutMenu />
                    </Col>
                    <Col xxs xs>
                        <img style={{ width: "100%" }} src={imgs} />
                    </Col>
                </Row>
                <div className='aboutcontent'>
                    <div id="maqsad">
                        <h2 className='text-uppercase text-center py-2 text-primary fw-bolder'>"barkamol avlod" bolalar maktablarining tashkiliy tuzulmasi</h2>
                        <span>
                            “Barkamol avlod” bolalar maktablari ish faoliyati davomida ming-minglab o‘quvchi yoshlarning o‘z qiziqishlariga ko‘ra kasb-xunarga yo‘naltirib, hayotda to‘g‘ri yo‘lini topishida
                            ko‘mak berib kelmoqda.
                            Dastavval 2011-yilda “Barkamol avlod” markazlari
                            O‘zbekiston Respublikasi vazirlar mahkamasining 2011-yil 28-fevraldagi Maktabdan tashqari ta’lim tizimini yanada takomillashtirish chora-tadbirlari to‘g‘risidagi 50-sonli
                            Qarori hamda 2011-yil 11-maydagi “Barkamol avlod” markazlari to‘g‘risidaginizom, 130-son qarorga ilova asosida tashkil etilgan. “Barkamol avlod” markazlari 3 ta yo‘nalishda (Badiiy ijodiyot, texnik ijodiyot hamdao‘lkashunoslik va ekalogiya) o‘z faoliyatni olib
                        </span>
                        <img src={img1} data-aos="fade-up" className='w-100 my-5' />
                        <img src={img2} data-aos="fade-up" className='w-100' />
                        <img src={img3} data-aos="fade-up" className='w-100 my-5' />
                    </div>
                </div>
            </Container>
            <Footer />
        </>

    )
}

// export default function maqsad() {
//     return (
//     )
// }
