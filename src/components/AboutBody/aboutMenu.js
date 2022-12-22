import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../../index.css'
import icon1 from '../../img/menu/diagram.png'
import icon2 from '../../img/menu/info.png'
import icon3 from '../../img/menu/leader.png'
import icon4 from '../../img/menu/target.png'
import './index.css'

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

  const links = [
    {
      id: 1,
      name: "BABM Andijan haqida",
      to: "/biz-haqimizda",
      img: icon1
    },
    {
      id: 2,
      name: "Maqsad va vazifalar",
      to: "/maqsad-va-vazifalar",
      img: icon2
    },
    {
      id: 3,
      name: "Tashkiliy tuzilma",
      to: "/tashkiliy-tuzilma",
      img: icon3
    },
    {
      id: 4,
      name: "Hodimlar",
      to: "/rahbariyat",
      img: icon4
    }
  ]
  return (
    <>
      <div className='d-flex ssss w-75 flex-column' xl lg>
        {
          links.map(res => {
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
          links.map(res => {
            return (
              <NavLink activeClassName="active" className="w-100 shadow p-3 mb-4 bg-body rounded text-decoration-none text-black fs-6 fw-bold" to={res.to}>
                <img style={{ marginRight: '6%', width: '10%' }} src={res.img} />
                {res.name}</NavLink>
            )
          })
        }
      </div>

      {/* bottom menu */}
      <div className='d-flex ssssa position-fixed top-100 start-50 translate-middle bg-white w-100 flex-row' style={{ zIndex: 9999999999999 }} xl lg>
        {
          links.map(res => {
            return (
              <NavLink activeClassName="active" className="w-100 shadow p-3 mb-4 bg-body rounded text-decoration-none text-black fs-6 fw-bold ssf" to={res.to}>
                <img className='ssfimg' style={{ marginRight: '6%', width: '10%' }} src={res.img} />
                {res.name}</NavLink>
            )
          })
        }
      </div>
    </>
  )
}
