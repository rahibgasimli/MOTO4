import React from 'react'
import logo from '../images/header/logo.svg'
import { CiHeart } from "react-icons/ci";
import { BsPersonSquare } from "react-icons/bs";
import { LuPlusCircle } from "react-icons/lu";

import './css/Header.css'
const Header = () => {
  return (
    <section className="header-section">
      <div className="header-left">
        <div className="header-logo"><img src={logo} alt="" /></div>
      </div>

      <div className="header-right">
        <div className="header-right-top">
          <span className='navbar-elaqe'>Əlaqə: +994 705554466</span>
          <span className='navbar-dil'>RU</span>
          <a href="#" className='navbar-liked'><CiHeart/></a>
          <span className='giris' ><BsPersonSquare/><a href="#">Giriş</a></span>
        </div>
        <div className="header-right-bottom">
          <a href="#">Bütün elanlar</a>
          <a href="#">Haqqımızda</a>
          <a href="#">FAQ</a>
          <button className="yeni-elan-btn">Yeni elan<LuPlusCircle/></button>
        </div>
      </div>
    </section>
  )
}

export default Header