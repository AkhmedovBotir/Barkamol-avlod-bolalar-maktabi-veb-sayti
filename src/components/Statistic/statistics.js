import React, { useState, useEffect } from 'react'
// import './index.sass'
import img from "../../img/stud.png"
import img2 from "../../img/team.png"
import img3 from "../../img/incr.png"
import img4 from "../../img/lectur.png"
import png from "../../img/png.png"
import CountUp from 'react-countup'
import Aos from "aos";
import './stat.css'
import axios from 'axios'
import { Card, CardGroup, Col, Container, Image, Row } from 'react-bootstrap'

Aos.init(5000)

export default function Statisticss() {
    const [statistics, setStatistics] = useState([])
    const url = 'https://babm.afeme.uz/api/statistics'
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
        <Container>
            <Row>
                <Col lg xl className='d-flex align-items-center'>
                    <Row xs={1} md={2} className="g-4">
                        {
                            statistics.map(res => {
                                return (
                                    <Col className='h-25'>
                                        <Card style={{ height: '170px' }} className='align-items-center justify-content-center'>
                                            <Row className='d-flex align-items-center'>
                                                <Col className='d-flex align-items-center justify-content-center'>
                                                    <Card.Img src={res.icon} style={{ width: '60%' }}></Card.Img>
                                                </Col>
                                                <Col>
                                                    <CountUp style={{ fontSize: '170%' }} end={res.number} />
                                                    <br />
                                                    <br />
                                                    <Card.Subtitle className='fw-bold'>
                                                        {res.title_uz}
                                                    </Card.Subtitle>
                                                </Col>
                                            </Row>
                                        </Card>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </Col>
                <Col className='d-flex justify-content-center align-items-center sdss'>
                    <div className='rounded-circle sfs bg-primary'>
                        <Image src={png} className="sdf"></Image>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
