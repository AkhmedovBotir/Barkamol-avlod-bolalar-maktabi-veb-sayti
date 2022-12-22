import React from 'react'
import img from '../../img/imgs.png'
import Navbar from '../Navbar/navbar'
import Footer from '../Footer/footer'
import AboutMenu from './aboutMenu'
import imgs from '../../img/aboutpng.png'
import veb from '../../img/veb.png'
export default function bolimboshliq() {
    const vebs = [
        {
            id: 1,
            img: veb,
            title: "Oltinko'l tumani",
            sub: `Barkamol avlod” bolalar maktablari ish faoliyati
            yoshlarning o‘z qiziqishlariga ko‘ra kasb-xunarga
            yo‘naltirib, hayotda to‘g‘ri yo‘lini topishida ko‘mak
            berib kelmoqda.
            Dastavval 2011-yilda “Barkamol
            avlod” markazlari O‘zbekiston Respublikasi vazirlar
            mahkamasining 2011-yil 28-fevraldagi Maktabdan
            tashqari ta’lim tizimini yanada takomillashtirish`,
            link: '/'
        },
        {
            id: 1,
            img: veb,
            title: "Oltinko'l tumani",
            sub: `Barkamol avlod” bolalar maktablari ish faoliyati
            yoshlarning o‘z qiziqishlariga ko‘ra kasb-xunarga
            yo‘naltirib, hayotda to‘g‘ri yo‘lini topishida ko‘mak
            berib kelmoqda.
            Dastavval 2011-yilda “Barkamol
            avlod” markazlari O‘zbekiston Respublikasi vazirlar
            mahkamasining 2011-yil 28-fevraldagi Maktabdan
            tashqari ta’lim tizimini yanada takomillashtirish`,
            link: '/'
        },
        {
            id: 1,
            img: veb,
            title: "Oltinko'l tumani",
            sub: `Barkamol avlod” bolalar maktablari ish faoliyati
            yoshlarning o‘z qiziqishlariga ko‘ra kasb-xunarga
            yo‘naltirib, hayotda to‘g‘ri yo‘lini topishida ko‘mak
            berib kelmoqda.
            Dastavval 2011-yilda “Barkamol
            avlod” markazlari O‘zbekiston Respublikasi vazirlar
            mahkamasining 2011-yil 28-fevraldagi Maktabdan
            tashqari ta’lim tizimini yanada takomillashtirish`,
            link: '/'
        },
        {
            id: 1,
            img: veb,
            title: "Oltinko'l tumani",
            sub: `Barkamol avlod” bolalar maktablari ish faoliyati
            yoshlarning o‘z qiziqishlariga ko‘ra kasb-xunarga
            yo‘naltirib, hayotda to‘g‘ri yo‘lini topishida ko‘mak
            berib kelmoqda.
            Dastavval 2011-yilda “Barkamol
            avlod” markazlari O‘zbekiston Respublikasi vazirlar
            mahkamasining 2011-yil 28-fevraldagi Maktabdan
            tashqari ta’lim tizimini yanada takomillashtirish`,
            link: '/'
        }
    ]
    return (
        <>
            <Navbar />
            <br />
            <br />
            <br />
            <br />
            <div className="aboutjs">
                <div className='aboutmenus'>
                    <AboutMenu />
                </div>
                <div className='aboutcontent'>
                    <img src={imgs} className="aboutbg" />
                    <div className='web'>
                        <h2>Tuman veb-saytlari</h2>
                        <div className='veb'>
                            {
                                vebs.map(res => {
                                    return (
                                        <div className='vebw'>
                                            <img src={res.img} />
                                            <div className='cards'>
                                                <span className='naming'>{res.title}</span>
                                                <span className='subing'>{res.sub}</span>
                                                <div className='linking'>
                                                    <a href={res.link}>Batafsil</a>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
