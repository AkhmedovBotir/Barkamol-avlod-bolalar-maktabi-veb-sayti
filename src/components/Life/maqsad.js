import React, { useState, useEffect } from 'react'
import './index.sass'
import AboutMenu from './aboutMenu'
import { NavLink } from 'react-router-dom'
import '../../index.css'
import imgs from '../../img/aboutpng.png'
import icons from '../../img/icons.png'
import img from '../../img/togarak.png'
import Navbar from '../Navbar/navbar'
import Footer from '../Footer/footer'
import axios from 'axios'

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
    const [statistics, setStatistics] = useState([])
    const url = 'https://babm.afeme.uz/api/teams'
    axios.get(`${url}`, {
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiYTNlMGIzYmI5NzlhNjQwYTY1YWRhMTM5NmVhN2MzZjFiNzc2NmZhOWYxMTllMDJjNmE4OGRjZWE3YzZlMmFhZjkxY2E5ZjM2MzYzM2Q3MmUiLCJpYXQiOjE2NjYxNzY2OTcuMDczMDA0LCJuYmYiOjE2NjYxNzY2OTcuMDczMDA2LCJleHAiOjE2OTc3MTI2OTcuMDY5Mzc4LCJzdWIiOiI0MSIsInNjb3BlcyI6W119.jLHbDf3PUWe2E34D6zffl--ofFmqf7Emnvno7f0U8jJpS7_a7B7cyYGkh0FwCLnwpuQbeRW-ORpo9DOeYRv1Kp6I6yPTIB_jlAOuQOk-mUiNi3kb3OPiDW_Pfm-MNBcd7qZmacAxwKkv8U71cYUfws2dxV_pU6a7p2v0a07FVeuy02sSAqCrxtabvetb16Yif3HaNYFZa63u5SzVTLGjoySkaLTEcR1WUml9U3uwRzGZ6Bxa8HrRqrydIdsjUfQdb6Ui7D3BRBVnGQGS-YhG_uI9e5d83ofC-qVbPLfcHnYnpcUX-RRPMJ11xXn06LfYl_43TX9XYBDid6jGJxqeWp4zDlmZkW660C1UT_e-v0u7n_zXenw5pbWjv56rHWG7_lgT1ORLvEL4rk6yY22F292_7vn6cDcNOZVPg-EjiiyPsz4NwefZ4KNfnD9fF5NpcWffPTJ5VroQAriv3jHv1KdkhE48MdyYFcgm3ToHcpOhzMSbgcZsDrd82_JLCxbGNUw0RZ0UswKPhkH5uYRKdk8mlRpc_g3JQ4ffG6stBovqKAfwshS1pimza6Vc0yBV9gG3ybOsmLqUFgcZaCA_IVvGIQDb1iJLh9RZey_8TgGccmLCGHAQN5rfrO8EdusgDLt3YqTneoEBISZiL5Ux79DyxQHDemxgoyTQlZO-CXY'
        }
    }).then(
        resp => {
            setStatistics(resp.data.data)
        }
    )
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
                    <div id="iqtidor">
                        <h2>To'garaklar</h2>
                        <div className='togmenu'>
                            {
                                statistics.filter(i => i.position === "Director").map(res => {
                                    return (
                                        <div className='togCard'>
                                            <img src={res.img} />
                                            <div className='cardTog'>
                                                <span className='titletog'>
                                                    {res.title}
                                                </span>
                                                <span className='titlesub'>
                                                    {res.sub}
                                                </span>
                                            </div>
                                        </div>
                                    )
                                }
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>

    )
}

// export default function maqsad() {
//     return (
//     )
// }
