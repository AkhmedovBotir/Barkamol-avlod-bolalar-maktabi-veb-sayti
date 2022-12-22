import React, { useState, useEffect } from 'react'
import '../../../index.css'
import axios from 'axios'
import { Card, Col, Row } from 'react-bootstrap'
import './index.css'
export default function Bizhaqida() {
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
            <div id="bolimbosh">
                <br />
                <h2 className='text-center py-2 text-primary fw-bolder'>Rahbariyat</h2>
                <Row className='cards w-100'>
                    <Row xl xxl className='direktorCards w-100'>
                        {
                            statistics.filter(res => res.name_uz === "Nargizaxon").map(res => {
                                return (
                                    <Col className='cardd w-100 rounded-5 d-flex align-items-center p-4' xxl >
                                        <img src={res.image} style={{ width: '20%' }} />
                                        <div className='cardText text-light'>
                                            <span className='fs-4 fw-bolder'>{res.name_uz} {res.lastname_uz}</span>
                                            <br />
                                            <span className='lavozim'>Direktor</span>
                                            <br />
                                            <br />
                                            <div className='tel'>Telefon raqami: <a href={`tel:${res.phone}`} className='phone'>{res.phone}</a></div>
                                            <div className='qabul'>Qabul kunlari: <span className='kun'>Haftaning payshanba kunlari, soat 11:00-13:00</span></div>
                                            <div className='email'>Email: <a href={`mailto:${res.email}`} className='mail'>{res.email}</a></div>
                                        </div>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                    <Row>
                        {
                            statistics.filter(resp => resp.check == 'xodim').map(res => {
                                return (
                                    <Col></Col>
                                )
                            })
                        }
                    </Row>
                </Row>
            </div>
        </>
    )
}