
import '../components/css/Card.css'; // Add this line
import Premium from '../images/card/Premium.svg';
import Credit from '../images/card/Kredit.svg';
import Barter from '../images/card/Barter label.svg';
import Salon from '../images/card/Salon label.svg';
import Crown from '../images/card/crown.svg';
import PreVsCredit from '../images/Card/Premium və kredit.svg';
import Car from '../images/card/cardMain.svg';

function Card() {
  const like = () => {
    // Burada beğeni işlemlerini gerçekleştirebilirsiniz.
    alert("Araba beğenildi!");
  };

  return (
    <>
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
                  alt="Beğeni"
                  onClick={like}
                  className="likeBtn"
                />
                <img src={PreVsCredit} alt="Premium" className="preCredit" />

                <div className="selectCrePre">
                  <img src={Credit} alt="" className="credit" />
                  <img src={Premium} alt="VIP" className="premium" />
                </div>
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
    </>
  );
}

export default Card;

