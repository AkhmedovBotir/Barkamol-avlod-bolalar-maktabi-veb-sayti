import React from 'react'
import Navbar from './../components/Navbar/navbar'
import HomeBody from '../components/HomeBody/index'
import Togaraklar from "../components/TogaraklarHome/index"
import SliderNews from "../components/NewsSlider/slider"
import Rek from "../components/Rek/index"
import TadbirSlider from "../components/TadbirSlider/slider"
import Statistics from "../components/Statistic/statistics"
import Foydali from "../components/FoydaliLinklar/index"
import Footer from "../components/Footer/footer"
export default function Home() {
    return (
        <div className="Home">
            <Navbar />
            <HomeBody />
            <Togaraklar />
            <SliderNews />
            <Rek />
            <TadbirSlider />
            <Statistics />
            <Foydali />
            <Footer />
        </div>
    )
}
