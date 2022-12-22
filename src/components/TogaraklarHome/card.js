import React from 'react'
import img1 from "../../img/6.png"
import img2 from "../../img/3.png"
import img3 from "../../img/4.png"
import img4 from "../../img/1.png"
import img5 from "../../img/2.png"
import img6 from "../../img/5.png"

export default function card() {
    const card = [
        {
            id: 1,
            img: img1,
            text: "Texnika konstruktorlik va modellashtirish",
            sub: "17 turdagi to‘garak mavjud",
        },
        {
            id: 4,
            img: img4,
            text: "Madaniyat va san’at",
            sub: "Madaniyat va san’at yo‘nalishida 11 turdagi to‘garak mavjud"
        },
        {
            id: 2,
            img: img2,
            text: "Madaniyat va san’at",
            sub: "Madaniyat va san’at yo‘nalishida 11 turdagi to‘garak mavjud"
        },
        {
            id: 5,
            img: img5,
            text: "Madaniyat va san’at",
            sub: "Madaniyat va san’at yo‘nalishida 11 turdagi to‘garak mavjud"
        },
        {
            id: 3,
            img: img3,
            text: "Xorijiy tillar",
            sub: "Xorijiy tillar yo‘nalishida 2 turdagi (ingliz va boshqa) to‘garak mavjud"
        },
        {
            id: 6,
            img: img6,
            text: "Hunarmandchilik va qo'l mehnati",
            sub: "Ushbu yo‘nalishda 14 turdagi to‘garak mavjud"
        },
    ]
    return (
        <div className='cardContent'>
            {
                card.map(res => {
                    return (
                        <div className='contentCard'  >
                            <div className='cardContentTitle'>
                                <img src={res.img} className='cardImage' alt='' />
                                <span className='cardTitle'>
                                    {res.text}
                                </span>
                            </div>
                            <div className='cardContents'>
                                <span className='cardText'>{res.sub}</span>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
} 