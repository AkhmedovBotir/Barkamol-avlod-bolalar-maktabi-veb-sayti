import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../../index.css'
import icon1 from '../../img/menu/diagram.png'
import icon2 from '../../img/menu/info.png'
import icon3 from '../../img/menu/leader.png'
import icon4 from '../../img/menu/target.png'
import icon5 from '../../img/menu/world.png'
import '../AboutBody/index.css'

export default function AboutRah() {
  const [display, setDisplay] = useState('none')
  const listenScrollEvent = () => {
    window.scrollY > 200 ? setDisplay('flex') : setDisplay('none')
  }
  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    return () => {
      window.removeEventListener('scroll', listenScrollEvent);
    }
  })
  const mar = [
    {
      id: 1,
      name: "Iqtidorli o'quvchilar",
      to: "/iqtidorli-o'quvchilar",
      img: icon2
    },
    {
      id: 2,
      name: "Sovrindorlar",
      to: "/sovrindorlar",
      img: icon4
    },
    {
      id: 3,
      name: "To'garaklar",
      to: "/to'garaklar",
      img: icon1
    },
    {
      id: 4,
      name: "Tuman BABM",
      to: "/tuman-babm",
      img: icon3
    },
    {
      id: 5,
      name: "Tuman veb-saytlari",
      to: "/tuman-veb-saytlari",
      img: icon5
    }
  ]
  return (
    <>
      <div className='d-flex ssss w-75 flex-column' xl lg>
        {
          mar.map(res => {
            return (
              <NavLink activeClassName="active" className="w-100 shadow p-3 mb-4 bg-body rounded text-decoration-none text-black fs-6 fw-bold" to={res.to}>
                <img style={{ marginRight: '6%', width: '10%' }} src={res.img} />
                {res.name}</NavLink>
            )
          })
        }
      </div>
      <div className='aboutmenuse fixed-top pt-5 w-100 container bg-white justify-content-between'
        style={
          {
            display: display,
            transition: "all 1s"
          }
        }>
        {
          mar.map(res => {
            return (
              <NavLink className="w-0 mt-5 shadow p-3 mb-4 bg-body rounded text-decoration-none text-black fs-5 fw-bold" to={res.to}>
                <img style={{ marginRight: '6%', width: '10%' }} src={res.img} />
                {res.name}</NavLink>
            )
          })
        }
      </div>

      {/* bottom menu */}
      <div className='d-flex ssssa position-fixed top-100 start-50 translate-middle bg-white w-100 flex-row' style={{ zIndex: 9999999999999 }} xl lg>
        {
          mar.map(res => {
            <NavLink activeClassName="active" className="w-25 ssssat text-center p-3 pb-5 mb-5 bg-body rounded text-decoration-none text-black fs-6 fw-bold align-items-center d-flex flex-column" to={res.to}>
              <img style={{ marginRight: '6%', width: '20%' }} src={res.img} />
              {res.name}</NavLink>
          })
        }
      </div>
    </>
  )
}
