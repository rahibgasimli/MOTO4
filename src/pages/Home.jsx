import Filter from "../components/Filter";
import "../pages/css/Home.css";
import Navigation from "../components/Navigation";
import BgImg from '../images/Card/Elanlar.svg';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Barter from '../images/card/Barter label.svg';
import Salon from '../images/card/Salon label.svg';
import Crown from '../images/card/medal-star.svg';
import PreVsCredit from '../images/Card/Premium və kredit.svg';
import Car from '../images/card/cardMain.svg';
import Like from '../images/Card/Favoriteicon=empty.svg'
// import FilterShort from '../components/FilterShort'

function Home() {
  return (
    <>
<Header/>
      <div className="homeC">
        <div className="imgBar">
          <img src={BgImg} alt=""  className="bgImg"/>
          <div className="navigation">
            <Navigation />
          </div>
          <div className="filter">
            <Filter />
            {/* <FilterShort/> */}
          </div>

        </div>
      </div>
      <div className="cards">
      <section className="firstCard">
        <div className="card">
          <div className="icons">
            <div className="columns">
              <div className="column1">
                <img src={Crown} alt="prognoz" className="prognoz" />
                <img src={Barter} alt="Barter" className="barter" />
                <img src={Salon} alt="salon" className="salon" />
              </div>

              <div className="column2">
                <img
                  src={Like}
                  alt="Beğeni"
                  onClick=''
                  className="likeBtn"
                />
                <img src={PreVsCredit} alt="Premium" className="preCredit" />
              </div>
            </div>
          </div>

          <img className="car-image" src={Car} alt="Araba Fotoğrafı" />

          <div className="price">$50,000</div>
          <div className="details">
            <h2>Toyota Camry</h2>
            <div className="info">
              <span>2022</span>
              <span>Benzin</span>
              <span>20,000 KM</span>
            </div>
            <div className="info">
              <span>Bakı, 01/19/2024</span>
            </div>
          </div>
        </div>
      </section>
      <section className="firstCard">
        <div className="card">
          <div className="icons">
            <div className="columns">
              <div className="column1">
                <img src={Crown} alt="prognoz" className="prognoz" />
                <img src={Barter} alt="Barter" className="barter" />
                <img src={Salon} alt="salon" className="salon" />
              </div>

              <div className="column2">
                <img
                  src="./imgs/Favoriteicon=full.svg"
                  alt={Like}
                  onClick=''
                  className="likeBtn"
                />
                <img src={PreVsCredit} alt="Premium" className="preCredit" />
              </div>
            </div>
          </div>

          <img className="car-image" src={Car} alt="Araba Fotoğrafı" />

          <div className="price">$50,000</div>
          <div className="details">
            <h2>Toyota Camry</h2>
            <div className="info">
              <span>2022</span>
              <span>Benzin</span>
              <span>20,000 KM</span>
            </div>
            <div className="info">
              <span>Bakı, 01/19/2024</span>
            </div>
          </div>
        </div>
      </section>
      <section className="firstCard">
        <div className="card">
          <div className="icons">
            <div className="columns">
              <div className="column1">
                <img src={Crown} alt="prognoz" className="prognoz" />
                <img src={Barter} alt="Barter" className="barter" />
                <img src={Salon} alt="salon" className="salon" />
              </div>

              <div className="column2">
                <img
                  src={Like}
                  alt="Beğeni"
                  onClick=''
                  className="likeBtn"
                />
                <img src={PreVsCredit} alt="Premium" className="preCredit" />
              </div>
            </div>
          </div>

          <img className="car-image" src={Car} alt="Araba Fotoğrafı" />

          <div className="price">$50,000</div>
          <div className="details">
            <h2>Toyota Camry</h2>
            <div className="info">
              <span>2022</span>
              <span>Benzin</span>
              <span>20,000 KM</span>
            </div>
            <div className="info">
              <span>Bakı, 01/19/2024</span>
            </div>
          </div>
        </div>
      </section>
            <section className="firstCard">
        <div className="card">
          <div className="icons">
            <div className="columns">
              <div className="column1">
                <img src={Crown} alt="prognoz" className="prognoz" />
                <img src={Barter} alt="Barter" className="barter" />
                <img src={Salon} alt="salon" className="salon" />
              </div>

              <div className="column2">
                <img
                  src={Like}
                  alt="Beğeni"
                  onClick=''
                  className="likeBtn"
                />
                <img src={PreVsCredit} alt="Premium" className="preCredit" />
              </div>
            </div>
          </div>

          <img className="car-image" src={Car} alt="Araba Fotoğrafı" />

          <div className="price">$50,000</div>
          <div className="details">
            <h2>Toyota Camry</h2>
            <div className="info">
              <span>2022</span>
              <span>Benzin</span>
              <span>20,000 KM</span>
            </div>
            <div className="info">
              <span>Bakı, 01/19/2024</span>
            </div>
          </div>
        </div>
      </section>
      
          </div>
          <Footer/>
    </>
  );
}

export default Home;
