import React, { Component, useState } from "react";
import s from '../../img/gerb.png'
import './index.sass'
import Slider from "react-slick";
import './styles.css'
import axios from 'axios'
import { Container, Card } from "react-bootstrap";

export default class Resizable extends Component {
    state = {
        display: true,
        width: 600,
        posting: []
    };


    render() {
        const settings = {
            infinite: true,
            speed: 1000,
            NavigationPreloadManager: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                    }
                },
                {
                    breakpoint: 835,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                    }
                },
                {
                    breakpoint: 590,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                    }
                },
            ]
        };
        const trad = [
            {
                id: 1,
                img: s,
                link: 'www.yoshlar.gov.uz',
                linkText: 'www.yoshlar.gov.uz',
                text: "Yoshlar ishlari agentligining rasmiy veb-sayti",
            },
            {
                id: 2,
                img: s,
                linkText: 'www.president.uz',
                link: 'https://www.president.uz',
                text: "Yoshlar ishlari agentligining rasmiy veb-sayti",
            },
            {
                id: 3,
                img: s,
                linkText: 'www.senat.uz',
                link: 'https://www.senat.uz',
                text: "Yoshlar ishlari agentligining rasmiy veb-sayti",
            },
            {
                id: 4,
                img: s,
                linkText: 'www.gov.uz',
                link: 'https://www.gov.uz',
                text: "Yoshlar ishlari agentligining rasmiy veb-sayti",
            },
            {
                id: 5,
                img: s,
                linkText: 'www.president.uz',
                link: 'https://www.president.uz',
                text: "Yoshlar ishlari agentligining rasmiy veb-sayti",
            },
            {
                id: 5,
                img: s,
                linkText: 'www.president.uz',
                link: 'https://www.president.uz',
                text: "Yoshlar ishlari agentligining rasmiy veb-sayti",
            },
            {
                id: 5,
                img: s,
                linkText: 'www.president.uz',
                link: 'https://www.president.uz',
                text: "Yoshlar ishlari agentligining rasmiy veb-sayti",
            },
            {
                id: 5,
                img: s,
                linkText: 'www.president.uz',
                link: 'https://www.president.uz',
                text: "Yoshlar ishlari agentligining rasmiy veb-sayti",
            }
        ]
        return (
            // <div className="main">
            //     <h2>Foydali havolalar</h2>
            //     <div className="carousel-wrapper" data-aos="fade-up">
            //         <Slider {...settings}>
            //             {
            //                 trad.map(resp => {
            //                     return (

            //                         <div className="main-div" data-aos="fade-up">
            //                             <div className="logo-div">
            //                                 <div className="logo">
            //                                     <img src={resp.img} width={200} />
            //                                 </div>
            //                                 <div className="ex">
            //                                     <a href={resp.link} target="__blank" className='numName'>{resp.linkText}</a>
            //                                     <h3 className='numFollow'>{resp.text}</h3>
            //                                 </div>

            //                             </div>
            //                         </div>
            //                     )
            //                 })
            //             }
            //         </Slider>
            //     </div>
            // </div>
            <div className="Appss">
                <Container>
                    <h2 className="w-100 text-center fw-bold">Foydali havolalar</h2>
                    <div className="carousel-wrapper" data-aos="fade-up">
                        <Slider {...settings}>
                            {
                                trad.map(resp => {
                                    return (
                                        <div className="main-div">
                                            <div className="logo-div">
                                                <div className="logo">
                                                    <img className="loss" style={{width: '60%'}} src={resp.img} />
                                                </div>
                                                <div className='contentmain'>
                                                    <a href={resp.link} className='numName w-100 fs-6 text-decoration-none fw-bold py-2 text-center'>{resp.linkText}</a>
                                                    <Card.Title className="fs-5">{resp.text}</Card.Title>                                                  
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </Slider>
                    </div>
                </Container>
            </div>
        );
    }
}