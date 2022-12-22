import React, { useState } from "react";
import "./styles.css";
import s from '../../img/imgbg.png'
import './slider.sass'
import Aos from "aos";
import AliceCarousel from "react-alice-carousel";
Aos.init(5000)


export default function Apps() {
    const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
    const trad = [
        {
            id: 1,
            img: s,
            name: "Farzandingizni kelajakda kim bo‘lishi vaqtini qanday sarflayotganiga bog‘liq!",
            button: "Tadbirlar",
            time: "14:34",
            data: "16-Sentabr",
            year: 2022
        },
        {
            id: 2,
            img: s,
            name: "Farzandingizni kelajakda kim bo‘lishi vaqtini qanday sarflayotganiga bog‘liq!",
            button: "Tadbirlar",
            time: "14:34",
            data: "16-Sentabr",
            year: 2022
        },
        {
            id: 3,
            img: s,
            name: "Farzandingizni kelajakda kim bo‘lishi vaqtini qanday sarflayotganiga bog‘liq!",
            button: "Tadbirlar",
            time: "14:34",
            data: "16-Sentabr",
            year: 2022
        },
        {
            id: 4,
            img: s,
            name: "Farzandingizni kelajakda kim bo‘lishi vaqtini qanday sarflayotganiga bog‘liq!",
            button: "Tadbirlar",
            time: "14:34",
            data: "16-Sentabr",
            year: 2022
        },
        {
            id: 5,
            img: s,
            name: "Farzandingizni kelajakda kim bo‘lishi vaqtini qanday sarflayotganiga bog‘liq!",
            button: "Tadbirlar",
            time: "14:34",
            data: "16-Sentabr",
            year: 2022
        },
        {
            id: 5,
            img: s,
            name: "Farzandingizni kelajakda kim bo‘lishi vaqtini qanday sarflayotganiga bog‘liq!",
            button: "Tadbirlar",
            time: "14:34",
            data: "16-Sentabr",
            year: 2022
        },
        {
            id: 5,
            img: s,
            name: "Farzandingizni kelajakda kim bo‘lishi vaqtini qanday sarflayotganiga bog‘liq!",
            button: "Tadbirlar",
            time: "14:34",
            data: "16-Sentabr",
            year: 2022
        },
        {
            id: 5,
            img: s,
            name: "Farzandingizni kelajakda kim bo‘lishi vaqtini qanday sarflayotganiga bog‘liq!",
            button: "Tadbirlar",
            time: "14:34",
            data: "16-Sentabr",
            year: 2022
        },
        {
            id: 5,
            img: s,
            name: "Farzandingizni kelajakda kim bo‘lishi vaqtini qanday sarflayotganiga bog‘liq!",
            button: "Tadbirlar",
            time: "14:34",
            data: "16-Sentabr",
            year: 2022
        }
    ]
    return (
        <div className="Apps">
            <br />
            <br />
            <br />
            <h1 className="yanTitle">Yangiliklar</h1>
            <div className="carousel-wrapper">
                <AliceCarousel items={trad}>
                    {
                        trad.map(resp => {
                            return (

                                <div className="main-div" data-aos="fade-left">
                                    <div className="logo-div">
                                        <div className="logo">
                                            <img src={resp.img} />
                                        </div>
                                        <div className='contentmain'>
                                            <p className='numName'>{resp.name}</p>
                                            <div className="dates">
                                                <span className='numCat'>{resp.button}</span>
                                                <div className='datamain'>
                                                    <span>{resp.time}</span>
                                                    <span>|</span>
                                                    <span>{resp.data}, </span>
                                                    <span>{resp.year}</span>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            )
                        })
                    }
                </AliceCarousel>
            </div>
            <br />
            <br />
            <br />
        </div>
    );
}
