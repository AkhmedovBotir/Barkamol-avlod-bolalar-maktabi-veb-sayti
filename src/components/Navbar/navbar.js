// import React, { useState } from 'react'
// import logo from "../../img/logo.png"
// import './navbar.css'
// // import './navbars.sass'
// import CloseIcon from '@mui/icons-material/Close';
// import { useDarkreader } from 'react-darkreader';
// import { NavLink } from 'react-router-dom';
// import { Sling as Hamburger } from 'hamburger-react'
// export default function Home() {
//   const [isDark, { toggle }] = useDarkreader(false);
//   return (
//     <div className="Navbar navbar navbar-expand-lg bg-white position-fixed z-index-1000 top-0 w-100 display-flex align-items-center">
//       <div className="navbar-menu container">
//         <a href="/" className="logo navbar-brand d-flex w-50 align-items-center text-decoration-none ">
//           <img src={logo} width={100} />
//           <div className="logoMenu d-flex flex-column text-uppercase">
//             <span className="And">andijon viloyat</span>
//             <span className='Bar'>"barkamol avlod"</span>
//             <span className='Bola'>bolalar maktabi</span>
//           </div>
//         </a>
//         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//           <span class="navbar-toggler-icon"></span>
//         </button>
//         <div className='menuj'>

//         </div>
//         <nav className='collapse navbar-collapse'>

//           <div className=''>
//             <div class="">
//               <NavLink to="/biz-haqimizda" className=" text-decoration-none">Biz haqimizda</NavLink>
//             </div>

//             <div class="">
//               <NavLink to="/iqtidorli-o'quvchilar" className=" text-decoration-none">BABM hayoti</NavLink>
//             </div>

//             <div class="">
//               <NavLink to="/" className=" text-decoration-none">Matbuot xizmati</NavLink>

//             </div>
//             <div class="">
//               <NavLink to="/aloqa" className=" text-decoration-none">Aloqa</NavLink>
//             </div>

//             <div class="dropdown classs">
//               <button class="dropbtn"><i className="sl-flag flag-uz"></i> O'zbekcha</button>
//               <div class="dropdown-content">
//                 <a href="/"><i className="sl-flag flag-uz text-decoration-none"><div id="english"></div></i> O'zbekcha</a>
//                 <a href="/"><i className="sl-flag flag-usa text-decoration-none"><div id="english"></div></i> English</a>
//                 <a href="/ru"><i className="sl-flag flag-ru text-decoration-none"><div id="english"></div></i> Russian</a>
//               </div>
//             </div>
//             <div className="darks">
//               <button onClick={toggle}>
//                 {isDark ? '☀' : '☾'}
//               </button>
//             </div>
//           </div>

//         </nav>
//       </div>
//     </div>
//   )
// }
import React from 'react';
import { useDarkreader } from 'react-darkreader';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import img from "../../img/logo.png"
import "./navbar.css"
import { Col, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function NavScrollExample() {
  const [isDark, { toggle }] = useDarkreader(false);
  return (
    <Navbar bg="light" expand="lg" style={{ position: "fixed", top: "0", zIndex: 9999999999999, width: "100%" }}>
      <Container className='align-items-center'>
        <Navbar.Brand href="/" className='text-dark'>
          <Row>
            <Col className="d-flex align-items-center">
              <Image src={img} style={{ width: "3rem" }}></Image>
            </Col>
            <Col className='text-dark d-flex align-items-center flex-column text-start'>
              <span className='ee text-dark'>ANDIJON VILOYAT</span>
              <span className='rr text-dark'>"BARKAMOL AVLOD"</span>
              <span className='tt text-dark'>bolalar maktabi</span>
            </Col>
          </Row>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >

          </Nav>
          <Nav className='align-items-center'>
            <Nav.Link ><Link to="/biz-haqimizda" className="text-decoration-none text-dark">Biz haqimizda</Link></Nav.Link>
            <Nav.Link ><Link to="/iqtidorli-o'quvchilar" className=" text-decoration-none text-dark">BABM hayoti</Link></Nav.Link>
            <Nav.Link ><Link to="/" className=" text-decoration-none text-dark">Matbuot xizmati</Link></Nav.Link>
            <Nav.Link ><Link to="/aloqa" className=" text-decoration-none text-dark">Aloqa</Link></Nav.Link>
            <div class="dropdown classs">
              <button class="dropbtn"><i className="sl-flag flag-uz"></i> O'zbekcha</button>
              <div class="dropdown-content">
                <a href="/"><i className="sl-flag flag-uz text-decoration-none"><div id="english"></div></i> O'zbekcha</a>
                <a href="/"><i className="sl-flag flag-usa text-decoration-none"><div id="english"></div></i> English</a>
                <a href="/ru"><i className="sl-flag flag-ru text-decoration-none"><div id="english"></div></i> Russian</a>
              </div>
            </div>
            <div className="darks">
              <button onClick={toggle} style={{ outline: "none", borderStyle: "none", background: "transparent", fontSize: "1.3rem" }}>
                {isDark ? '☀️' : '🌙'}
              </button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;