import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import book from '../../img/book.png'
import img1 from "../../img/6.png"
import img2 from "../../img/3.png"
import img3 from "../../img/4.png"
import img4 from "../../img/1.png"
import img5 from "../../img/2.png"
import img6 from "../../img/5.png"
import "./index.css"
import { fontWeight } from '@mui/system';

function BasicExample() {
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
        <>
            <Container style={{ marginTop: "1rem" }}>
                <br />
                <h2 style={{fontWeight: 900}}>To'garaklar</h2>
                <br />
                <Row>
                    <Col className='align-items-center' lg xl>
                        <Card className='w-10' style={{ margin: 0, height: '100%', padding: "20px", boxShadow: "5px 4px 20px rgba(0, 0, 0, 0.25)", borderRadius: "25px" }}>
                            <Row className="justify-content-md-center">
                                <Col lg="3">
                                    <Card.Img variant="top" src={book} style={{ width: "3.5rem" }} />
                                </Col>
                                <Col lg="7">
                                    <Card.Text className='rodi'>Oliy ta’lim
                                        muassasalari va
                                        maktabga tayyorlov</Card.Text>
                                </Col>
                            </Row>
                            <Card.Body>
                                <Card.Text>
                                    Oliy ta’lim muassasalari
                                    va maktabga tayyorlov
                                    yo‘nalishida 8 turdagi
                                    <br />
                                    •Ona tili va adabiyoti,
                                    <br />
                                    •Biologiya vaKimyo
                                    <br />
                                    •Fizika
                                    <br />
                                    •Matematika
                                    <br />
                                    •Tarix
                                    <br />
                                    •Mental arifmetika
                                    <br />
                                    •Logika o’yinli
                                    <br />
                                    •Husnixat va o’qish
                                    <br />
                                    •Tasviriy san’at
                                    <br />
                                    •Teatr va raqs
                                    <br />
                                    kabi  to‘garaklar
                                    mavjud
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="justify-content-center" xs lg="8">
                        <Row className="justify-content-center">
                            {
                                card.map(res => {
                                    return (
                                        <Card style={{ width: '17rem', height: "15rem", padding: "20px", boxShadow: "5px 4px 20px rgba(0, 0, 0, 0.25)", borderRadius: "25px", margin: "10px" }}>
                                            <Row className="justify-content-md-center align-items-center">
                                                <Col>
                                                    <Card.Img variant="top" src={res.img} style={{ width: "3.5rem" }} />
                                                </Col>
                                                <Col lg="8">
                                                    <Card.Text className='rodi'>{res.text}</Card.Text>
                                                </Col>
                                            </Row>
                                            <Card.Body>
                                                <Card.Text>
                                                    {res.sub}
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    )
                                })
                            }
                        </Row>
                    </Col>
                </Row>
            </Container>

        </>
    );
}

export default BasicExample;