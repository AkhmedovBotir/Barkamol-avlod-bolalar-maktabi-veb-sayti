import React, { useState, useEffect } from 'react'
import AboutMenu from './aboutMenu'
import { NavLink } from 'react-router-dom'
import '../../index.css'
import imgs from '../../img/aboutpng.png'
import Navbar from '../Navbar/navbar'
import Footer from '../Footer/footer'
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
                        <h2 className='text-center py-2 text-primary fw-bolder'>Maktabning maqsad va vazifalari</h2>
                        <h3>Quyidagilar Maktabning asosiy vazifalari hisoblanadi:</h3>
                        <ul>
                            <li>yosh avlodni ma’naviy barkamol etib tarbiyalash, ularning bo‘sh vaqtlarini mazmunli o‘tkazishini ta’minlash, bunda ularning robototexnika, mexatronika, injenerlik, mental arifmetika, san’at, art dizayn, axborot texnologiyalari bo‘yicha Java, Scratch, 3D dizayn yo‘nalishlariga bo‘lgan qiziqishini oshirish;</li>
                            <li>Maktablarda “STEAM — ta’lim” (Science — tabiiy fanlar, Technology — texnologiyalar, Engineering — muhandislik, Art — san’at, Mathematics — matematika) dasturini joriy etish va to‘garaklar mazmuniga singdirish;</li>
                            <li>beshta muhim tashabbus doirasida o‘quvchi-yoshlar bilan ishlashni samarali tashkil etishda madaniyat, san’at, sport, axborot-texnologiyalariga qiziqishni oshirish, o‘quvchi-qizlarni ijtimoiy faol hayotga jalb etish bo‘yicha umumta’lim tashkilotlariga amaliy va uslubiy yordam ko‘rsatish;</li>
                            <li>bolalarning ehtiyojlari va qiziqishlariga muvofiq ularning ijodiy va badiiy qobiliyatlarini rivojlantirish, ularning foydali dam olishini tashkil etish, mehnatsevarlikni, kasb tayyorgarligining dastlabki o‘quv va ko‘nikmalarini singdirish, fan va texnikani rivojlantirishning istiqbolli yo‘nalishlariga muvofiq texnik vositalar va kompyuter texnologiyalari ishini o‘rganishni tashkil etgan holda bolalar texnik ijodkorligini rivojlantirish;</li>
                            <li>o‘quvchi yoshlarning ijodiy ishlarini ommalashtirish, targ‘ib qilish hamda sotuvini yo‘lga qo‘yish bo‘yicha o‘quvchi-yoshlarning ijodiy ishlarini “Art shop” elektron do‘konlari orqali dunyo bozoriga olib chiqish;</li>
                            <li>o‘quvchilarda jonajon o‘lka tarixi, arxeologik va boy madaniy merosini chuqur o‘rgatish, mamlakatimizning tabiiy boyliklari bilan tanishtirish hamda ekologiya va atrof-muhit muhofazasi sohasidagi asosiy bilimlarni egallab olishlariga imkon yaratish hamda bolalar va ta’lim turizmlarini rivojlantirishga qaratilgan loyihalarni amalga oshirish;</li>
                            <li>xorijiy tillarni o‘rgatish orqali intellektual yoshlar safini kengaytirish, rivojlangan davlatlar tajribasini o‘rganishga imkon yaratish;</li>
                        </ul>
                        <h3>Maktab o‘zining asosiy vazifalarini amalga oshirishda quyidagi funksiyalarni bajaradi:</h3>
                        <ul>
                            <li>to‘garaklar o‘quv-reja va dasturlari ishlab chiqishda ko‘maklashadi;</li>
                            <li>o‘quvchilarni to‘garaklarga qamrab olish choralarini ko‘radi;</li>
                            <li>to‘garak mashg‘ulotlarini tahlil qilib boradi, rivojlanishdan ortda qolayotgan to‘garaklar faoliyatini kuchaytirishga qaratilgan chora-tadbirlarni amalga oshiradi;</li>
                        </ul>
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
