import React from 'react'
import { Card, CardGroup, Col, Container, Row } from 'react-bootstrap'
import { CardBody } from 'reactstrap'
import img from '../../../img/imgs.png'
export default function bolimboshliq() {
  const card = [
    {
      id: 1,
      img: img,
      name: "Akbarov Yo'ldoshxo'ja Kamolxo'ja o'g'li",
      sub: "Direktorning birinchi o'rinbosari"
    },
    {
      id: 1,
      img: img,
      name: "Akbarov Yo'ldoshxo'ja Kamolxo'ja o'g'li",
      sub: "Direktorning birinchi o'rinbosari"
    },
    {
      id: 1,
      img: img,
      name: "Akbarov Yo'ldoshxo'ja Kamolxo'ja o'g'li",
      sub: "Direktorning birinchi o'rinbosari"
    },
    {
      id: 1,
      img: img,
      name: "Akbarov Yo'ldoshxo'ja Kamolxo'ja o'g'li",
      sub: "Direktorning birinchi o'rinbosari"
    },
    {
      id: 1,
      img: img,
      name: "Akbarov Yo'ldoshxo'ja Kamolxo'ja o'g'li",
      sub: "Direktorning birinchi o'rinbosari"
    },
    {
      id: 1,
      img: img,
      name: "Akbarov Yo'ldoshxo'ja Kamolxo'ja o'g'li",
      sub: "Direktorning birinchi o'rinbosari"
    },
    {
      id: 1,
      img: img,
      name: "Akbarov Yo'ldoshxo'ja Kamolxo'ja o'g'li",
      sub: "Direktorning birinchi o'rinbosari"
    },
    {
      id: 1,
      img: img,
      name: "Akbarov Yo'ldoshxo'ja Kamolxo'ja o'g'li",
      sub: "Direktorning birinchi o'rinbosari"
    },
  ]
  return (
    <Container >
      <br />
      <h2 className='text-center py-2 text-primary fw-bolder'>To'garak rahbarlari</h2>
      <Row md={4} className='boshliq d-flex justify-content-center'>
        {
          card.map(res => {
            return (
              <Col className='boshliqcard m-4'>
                <Card className='h-100'>
                  <img src={res.img} className="w-100" />
                  <CardBody className='cardtext'>
                    <Card.Title className='fw-bolder text-primary'>{res.name}</Card.Title>
                    <Card.Subtitle className='mt-3'>{res.sub}</Card.Subtitle>
                  </CardBody>
                </Card>
              </Col>
            )
          })
        }
      </Row>
    </Container>
  )
}
