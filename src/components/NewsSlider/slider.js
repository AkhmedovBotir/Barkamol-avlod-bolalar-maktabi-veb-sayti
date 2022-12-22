import React, { Component, useState } from "react";
import Slider from "react-slick";
import s from '../../img/imgbg.png'
import './slider.sass'
import './styles.css'
import axios from 'axios'
import { Container } from "reactstrap";

export default class Resizable extends Component {
    state = {
        display: true,
        width: 600,
        posting: []
    };

    componentDidMount() {

        const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiYTNlMGIzYmI5NzlhNjQwYTY1YWRhMTM5NmVhN2MzZjFiNzc2NmZhOWYxMTllMDJjNmE4OGRjZWE3YzZlMmFhZjkxY2E5ZjM2MzYzM2Q3MmUiLCJpYXQiOjE2NjYxNzY2OTcuMDczMDA0LCJuYmYiOjE2NjYxNzY2OTcuMDczMDA2LCJleHAiOjE2OTc3MTI2OTcuMDY5Mzc4LCJzdWIiOiI0MSIsInNjb3BlcyI6W119.jLHbDf3PUWe2E34D6zffl--ofFmqf7Emnvno7f0U8jJpS7_a7B7cyYGkh0FwCLnwpuQbeRW-ORpo9DOeYRv1Kp6I6yPTIB_jlAOuQOk-mUiNi3kb3OPiDW_Pfm-MNBcd7qZmacAxwKkv8U71cYUfws2dxV_pU6a7p2v0a07FVeuy02sSAqCrxtabvetb16Yif3HaNYFZa63u5SzVTLGjoySkaLTEcR1WUml9U3uwRzGZ6Bxa8HrRqrydIdsjUfQdb6Ui7D3BRBVnGQGS-YhG_uI9e5d83ofC-qVbPLfcHnYnpcUX-RRPMJ11xXn06LfYl_43TX9XYBDid6jGJxqeWp4zDlmZkW660C1UT_e-v0u7n_zXenw5pbWjv56rHWG7_lgT1ORLvEL4rk6yY22F292_7vn6cDcNOZVPg-EjiiyPsz4NwefZ4KNfnD9fF5NpcWffPTJ5VroQAriv3jHv1KdkhE48MdyYFcgm3ToHcpOhzMSbgcZsDrd82_JLCxbGNUw0RZ0UswKPhkH5uYRKdk8mlRpc_g3JQ4ffG6stBovqKAfwshS1pimza6Vc0yBV9gG3ybOsmLqUFgcZaCA_IVvGIQDb1iJLh9RZey_8TgGccmLCGHAQN5rfrO8EdusgDLt3YqTneoEBISZiL5Ux79DyxQHDemxgoyTQlZO-CXY'
        var config = {
        };

        axios({
            url: 'https://babm.afeme.uz/api/posts',
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            data: Headers,
        },
        ).then(res => {
            const posting = res.data.data
            this.setState({ posting })
        })
    }
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
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        return (
            <div className="Apps">
                <Container>
                    <h2>Yangiliklar</h2>
                    <div className="carousel-wrapper" data-aos="fade-up">
                        <Slider {...settings}>
                            {
                                this.state.posting.map(resp => {
                                    return (
                                        <div className="main-div">
                                            <div className="logo-div">
                                                <div className="logo">
                                                    <img className="w-100 h-100" src={resp.image} />
                                                </div>
                                                <div className='contentmain'>
                                                    <p className='numName pl-5'>{resp.title_uz}</p>
                                                    <div className="dates">
                                                        <span className='numCat'>{resp.category.name_uz}</span>
                                                        <div className='datamain'>
                                                            <span>{resp.created_at}</span>
                                                        </div>
                                                    </div>
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