import React from 'react'
import BgImg from "../images/home/Elanlar.svg";
import Header from '../components/Header';
import Navigation from "../components/Navigation"
import Filter from "../components/Filter"
import "../pages/css/Home.css";


const Home = () => {
  return (
    <>
      <div className="bodytest">
        <div className="header">
          <Header/>
        </div>
        <div className="homeC">
          <div className="imgBar">
            <div className="bg-img"><img src={BgImg} alt="" /></div>
            <div className="navigation">
              <Navigation/>
            </div>
            <div className="filter">
              <Filter/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home