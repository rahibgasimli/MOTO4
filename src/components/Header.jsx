
import logo from '../images/header/logo.svg'
import { CiHeart } from "react-icons/ci";
import { BsPersonSquare } from "react-icons/bs";
import { LuPlusCircle } from "react-icons/lu";

import { Link } from 'react-router-dom';


import './css/Header.css'
const Header = () => {
  return (
    <section className="header-section">
      <div className="header-left">
       <Link to="/"> <div className="header-logo"><img src={logo} alt="" /></div></Link>
      </div>

      <div className="header-right">
        <div className="header-right-top">
          <span className='navbar-elaqe'>Əlaqə: +994 705554466</span>
          <span className='navbar-dil'>RU</span>
          <a href="#" className='navbar-liked'><CiHeart/></a>
          <span className='giris' ><BsPersonSquare/><a href="#">Giriş</a></span>
        </div>
        <div className="header-right-bottom">
          <Link to="/">Bütün elanlar</Link>
          <Link to="/haqqimizda">Haqqımızda</Link>
          <Link to="/faq">FAQ</Link>
          <button className="yeni-elan-btn">Yeni elan<LuPlusCircle/></button>
        </div>
      </div>
    </section>
  )
}

export default Header