import React from 'react'
import './forma.css'
import Navbar from '../Navbar/navbar'
import Footer from '../Footer/footer'
import loc from '../../img/loc.png'
import mail from '../../img/mail.png'
import phone from '../../img/phone.png'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Bgs from '../HomeBody/index'
export default function index() {
    return (
        <>
            <Navbar />
            <Bgs />
            <br />
            <br />
            <h2 className='fs-1 fw-bolder text-center text-primary'>Aloqa</h2>
            <br />
            <br />
            <Container>
                <Row className='forma rounded-5'>
                    <Col sm={6} className='rounded-5 p-5 bg-primary text-light'>
                        <div className='title'>
                            <b className='fs-2'>Aloqa haqida ma'lumot</b>
                            <br />
                            <br />
                            <span className='fs-4' style={{ color: '#DADADA' }}>Anketani to'ldiring va 24 soat ichida siz bilan jamoamiz bog'lanadi</span>
                            <br />
                        </div>
                        <div className='d-flex my-3 mt-5 align-items-center'>
                            <img src={phone} className="im" />
                            <div className='d-flex flex-column'>
                                <h4>Telefon raqamlar</h4>
                                <a href='/' style={{ color: 'white', textDecoration: 'none' }}>+998 90 268 66-78</a>
                                <a href='/' style={{ color: 'white', textDecoration: 'none' }}>+998 90 210 12-01</a>
                            </div>
                        </div>
                        <div className='d-flex my-4 align-items-center'>
                            <img src={mail} className="im" />
                            <div className='phoneText'>
                                <h4>Pochta manzili</h4>
                                <a href="mailto:andijanvilbabm@gmail.com" style={{ color: 'white', textDecoration: 'none' }}>andijanvilbabm@gmail.com</a>
                            </div>
                        </div>
                        <div className='d-flex my-3 align-items-center'>
                            <img src={loc} className="im" />
                            <div className='phoneText'>
                                <h4>Manzil</h4>
                                <a href='https://yandex.uz/maps/-/CCUZVEVULA' style={{ color: 'white', textDecoration: 'none' }} className="mails">Andijon shahar, Amir Umarxon ko'chasi 19-uy</a>
                            </div>
                        </div>
                        <div className='d-flex mt-4 justify-content-center'>
                            <a href='/'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                            </a>
                            <a href='/' className='mx-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 10h-2v2h2v6h3v-6h1.82l.18-2h-2v-.833c0-.478.096-.667.558-.667h1.442v-2.5h-2.404c-1.798 0-2.596.792-2.596 2.308v1.692z" /></svg>
                            </a>
                            <a href='/'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 240 240">
                                    <path d="M66.964 134.874s-32.08-10.062-51.344-16.002c-17.542-6.693-1.57-14.928 6.015-17.59 7.585-2.66 186.38-71.948 194.94-75.233 8.94-4.147 19.884-.35 14.767 18.656-4.416 20.407-30.166 142.874-33.827 158.812-3.66 15.937-18.447 6.844-18.447 6.844l-83.21-61.442z" fill="none" stroke="#000" stroke-width="10" />
                                    <path d="M92.412 201.62s4.295.56 8.83-3.702c4.536-4.26 26.303-25.603 26.303-25.603" fill="none" stroke="#000" stroke-width="10" />
                                    <path d="M66.985 134.887l28.922 14.082-3.488 52.65s-4.928.843-6.25-3.613c-1.323-4.455-19.185-63.12-19.185-63.12z" fill-rule="evenodd" stroke="#000" stroke-width="10" stroke-linejoin="bevel" />
                                    <path d="M66.985 134.887s127.637-77.45 120.09-71.138c-7.55 6.312-91.168 85.22-91.168 85.22z" fill-rule="evenodd" stroke="#000" stroke-width="9.67" stroke-linejoin="bevel" />
                                </svg>
                            </a>
                            <a href='/' className='mx-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.23 7.102c-2.002-.136-6.462-.135-8.461 0-2.165.148-2.419 1.456-2.436 4.898.017 3.436.27 4.75 2.437 4.898 1.999.135 6.459.136 8.461 0 2.165-.148 2.42-1.457 2.437-4.898-.018-3.436-.271-4.75-2.438-4.898zm-6.23 7.12v-4.444l4.778 2.218-4.778 2.226zm2-12.222c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12z" /></svg>
                            </a>
                        </div>
                    </Col>
                    <Col sm={6}>
                        <form
                            className='d-flex flex-column p-5' >
                            <input type="text" className='iii form-control' placeholder='Ism' />
                            <input type="text" className='iii form-control my-5' placeholder='Familiya' />
                            <input type="mail" className='iii form-control' placeholder='Elektron pochta' />
                            <input type="phone" className='iii form-control mt-5' placeholder='Telefon raqam' />
                            <div className='xabar my-5'>
                                <h4>Xabar qoldiring</h4>
                                <input type="text" className='iii form-control' placeholder='Xabaringizni yozing...' />
                            </div>
                            <div className='submits d-flex justify-content-around w-75'>
                                <button type='reset' className='btn btn-primary px-4'>Tozalash</button>
                                <button type='submit' className="btn btn-success px-4">Jo'natish</button>
                            </div>
                        </form>
                    </Col>
                </Row>
            </Container>
            <br />
            <br />
            <Footer />
        </>
    )
}
