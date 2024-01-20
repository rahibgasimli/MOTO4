import React from 'react'
import productImage1 from "../images/product/product-image1.svg"
import productImage2 from "../images/product/product-image2.svg"
import productImage3 from "../images/product/product-image3.svg"
import productImage4 from "../images/product/product-image4.svg"
import carOwner from "../images/product/car-owner.svg"
import { GoArrowRight } from "react-icons/go";
import { VscArrowSwap } from "react-icons/vsc";



import "../pages/css/AddNewProduct.css"
const AddNewProduct = () => {
  return (
    <section className="add-new-product">
      <div className="product-images">
        <div className="product-images-left"><img src={productImage1} alt="" /></div>

        <div className="product-images-right">
          <div className="product-images-right-top"><img src={productImage2} alt="" /></div>

          <div className="product-images-right-bottom">
              <div className="product-photo3"><img src={productImage3} alt=""/></div>
              <div className="product-photo4"><img src={productImage4} alt="" /></div>
          </div>

        </div>

      </div>

      <div className="product-about">
        <div className="product-left">
          <div className="product-text">
            <h1>BMW M2 Coupé F87 2018</h1>
            <p>BMW M2 Coupe .<br/><br/> 
              *Avtomobil Full Kasko sığortalıdı<br/><br/>  
              *Full Exterior original Carbon, Dam carbon, Yan güzgülər carbon, Jabralar carbon, Interior carbon.<br/><br/> 
              *M performance paket,*M Performance sport yaylar (H&R).<br/><br/>
              *Head-Up display, Start-Stop, Auto Hold, Stop&Go, *Comfort/Sport/Sport+ mode, *M1 / M2 mode, *Launch control.<br/><br/> 
              *360 dərəcəli kamera, 3D kamera görüntüsü, avtomatik parklanma, Parking Assistant Plus, Driving Assistant Professional, kor nöqtə sensoru, təhlükə anında avtomatik tormozlanma.<br/><br/> 
              * ///M təhlükəsizlik kəmərləri, rəng seçimli ambient light, Carbon Paddle shifters, 3 yaddaşlı oturacaqlar, ön və arxa oturacaqların qızdırıcısı və soyuducusu, sükanın qızdırılması, 3-zonalı avtomatik klima, Wireless charger, NFC kart və Apple iPhone ilə qapıların açılması bağlanması, barmağ jesti ilə audiosistemin idarə edilməsi, Harman/Kardon audiosistemi, Apple CarPlay, USB A, USB Type-C, komfort daxil olma, avtomatik qatlanan yan güzgülər, baqajın avtomatik açılıb bağlanması, və digər müxtəlif funksiyalar.<br/><br/> 
              *BMW Cross-spoke 1000M, M Performance Jet Black Matt, Forged təkər diskləri,Şinlər PIRELLI P ZERO SPORTS CAR,Ön təkərlər 275/30 R19,Arxa təkərlər 285/30 R20.<br/><br/> 
              *BMW M3’ün ən dolu versiyasıdır. Sıfır bir maşındır.<br/><br/> </p>
          </div>
          <div className="product-features">
              <span>Arxa görüntü kamerası</span>
              <span>Kondisioner</span>
              <span>Dəri salon</span>
              <span>Yüngül lehimli disklər</span>
          </div>

          <div className="product-xususiyyet">
            <h1>Xüsusiyyətləri</h1>
            <div><span>Şəhər</span> <h5>Bakı</h5></div>
            <div><span>Marka</span> <h5>BMW</h5></div>
            <div><span>Model</span> <h5>M2</h5></div>
            <div><span>Buraxılış ili</span> <h5>2018</h5></div>
            <div><span>Ban növü </span> <h5>Kupe</h5></div>
            <div><span>Rəng</span> <h5>Göy</h5></div>
            <div><span>Mühərrik</span> <h5>3.0 L</h5></div>
            <div><span>Yürüş</span> <h5>6 500 km</h5></div>
            <div><span>Sürətlər qutusu</span> <h5>Avtomat</h5></div>
            <div><span>Ötürücü</span> <h5>Arxa</h5></div>
            <div><span>Yeni</span> <h5>Xeyr</h5></div>
            <div><span>Yerlərin sayı</span> <h5>5</h5></div>
            <div><span>Vəziyyəti</span> <h5>Vuruğu yoxdur, rənglənməyib</h5></div>
          </div>

          <div className="product-edit">
            <a href="#">Düzəliş et</a>
            <a href="#">Elanı sil</a>
          </div>


        </div>

        <div className="product-right">
          <div className="product-right-card">
            <span>Elanın nömrəsi: 7948951</span>
            <h4>55 000 USD <h5><VscArrowSwap/> 55 000 AZN</h5></h4>
            <div className="car-owner">
              <div className="car-owner-left">
                <h5>Abbas</h5>
                <h6>Bakı</h6>
              </div>
              <div className="car-owner-right">
                <img src={carOwner} alt="" />
              </div>
            </div>
            <button className="hisse-al">Hissə-Hissə al</button>
            <button className="number-btn">(050) 666-77-88</button>
          </div>

          <div className="product-right-money">
            <h6>İrəli çək <br /> <span>1 azndən</span></h6>

            <h6>VIP <br /> <span>3 azn</span></h6>

            <h6>Premium <br /> <span>6 azn</span></h6>

          </div>

        </div>
      </div>

      <div className="product-elanlar">
        <h4>Bənzər elanlar</h4>
        <a href="#"><span>Hamısını göstər</span><GoArrowRight/></a>
      </div>

    </section>
  )
}

export default AddNewProduct