import "../components/css/Filter.css";
// import ArrDown from '../images/card/Barter label.svg'

import  { useState } from 'react';

function Filter() {
  const [isFiltersHidden, setFiltersHidden] = useState(false);

  const toggleFiltersVisibility = () => {
    setFiltersHidden(!isFiltersHidden);
  };
  return (
    <>
      <div  className={`container ${isFiltersHidden ? 'hidden-filters' : ''}`
    }>

        <div className="inputForms">
          <section  >
            <div className="row-1">
              <select name="marka" id="m-1" placeholder="Marka">
                <option value="BMW">BMW</option>
                <option value="Mercedes">Mercedes</option>
                <option value="Lamborghini">Lamborghini</option>
              </select>
              <select name="Model" id="m-2">
                <option value="C-200">C-200</option>
                <option value="M-5">M5</option>
                <option value="Urus">Urus</option>
              </select>
              <div id="m-3">
                <div className="boxes">
                  <div className="box-1">
                    <p>Hamısı</p>
                  </div>
                  <div className="box-2">
                    <p>Yeni</p>
                  </div>
                  <div className="box-3">
                    <p>Sürülmüş</p>
                  </div>
                </div>
              </div>
              <select name="Seher" id="m-4">
                <option value="Baki"> Bakı</option>
                <option value="Sumqayit"> Sumqayıt</option>
                <option value="Gence"> Gəncə</option>
              </select>
            </div>
          </section>
          <section  >
            <div className="row-2">
              <div className="inputs">
                <input
                  type="number"
                  name=""
                  id=""
                  className="min-price"
                  placeholder="Qiymət ,Minimum "
                />
                <input
                  type="number"
                  name=""
                  id=""
                  className="max-price"
                  placeholder="Maksimum"
                />
              </div>
              <div className="money-type">
                <select name="" id="" placeholder="AZN" className="type-mny">
                  <option value="">AZN</option>
                  <option value="">Dollar</option>
                  <option value=""> EURO</option>
                </select>
              </div>
              <div className="choose">
                <div className="box-c-1">
                  <p>Kredit</p>
                </div>
                <div className="box-c-2">
                  <p>Barter</p>
                </div>
              </div>
              <div className="type-ban">
                <select
                  name=""
                  id=""
                  placeholder="Ban Növü"
                  className="type-ban"
                >
                  <option value="">SUV</option>
                  <option value="">YÜK</option>
                  <option value="">Minivan</option>
                </select>
              </div>

              <div className="yearMinMax">
                <div >
                    <select name="" id="" className="min-year"  placeholder="İl , Min">
                        <option value="">1999</option>
                        <option value="">2000</option>
                        <option value="">2003</option>
                    </select>
                </div>
                <div >
                    <select name="" id="" placeholder="Max" className="max-year">
                        <option value="">2023</option>
                        <option value="">2022</option>
                        <option value="">2021</option>                   
                         </select>
                </div>
              </div>
            </div>
          </section>
          <section >
            <div className="row-3">
                <select name="" id="" placeholder="Rəng" className="r-3-1">
                    <option value="" placeholder='Rəng'></option>
                    <option value="">Ağ</option>
                    <option value="">Qara</option>
                    <option value="">Qırmzı</option>
                </select>
                <select name="" id="" placeholder="Yanacaq Növü" className="r-3-1">
                    <option value="">Benzin</option>
                    <option value="">Dizel</option>
                    <option value="">Elektrik</option>
                </select>
                <select name="" id="" placeholder="Ötürücü"  className="r-3-1">
                    <option value="">Ön</option>
                    <option value="">Arxa</option>
                    <option value=""> 4x4</option>
                </select>
                <select name="" id="" placeholder="Sürətlər Qutusu" className="r-3-1">
                    <option value="">Avtomat</option>
                    <option value="">Mexanik</option>
                    <option value=""> Avto-Mexanik</option>
                </select>
            </div>



          </section>
          <section  >
            <div className="row-4">

                <select name="" id="" className="seat-count">
                    <option value="">4+1</option>
                    <option value="">7+1</option>
                    <option value="">8+</option>
                </select>
                <select name="" id="" className="which-country">
                <option value="">USA</option>
                    <option value="">Europa</option>
                    <option value="">Asia</option>
                </select>
                <div className="chs-element">
                    <div className="chs-1">
                        <p className="chs-p-1">Vuruğsuz</p>
                    </div>
                    <div className="chs-2">
                        <p>Əzilməyib</p>
                    </div>
                    <div className="chs-3">
                        <p>Qəzalı</p>
                    </div>
                </div>
            </div>



            

          </section>

          <section  >
            <div className="row-5">
                <div className="engine-cube">
                <select name="" id="" className="min-eng">
                    <option value="">2200</option>
                    <option value="">1900</option>
                </select>
                <select name="" id="" className="max-eng">
                    <option value="">4500</option>
                    <option value="">4500</option>
                </select>
                </div>
                <div className="input-engine">
                    <input type="text" placeholder="Güc(a.g), Min" className="min-ag"/>
                    <input type="text"  placeholder="Max" className="max-ag"/>
                    </div>

                    <div className="check-useful">
                        <div className="all">
                            <p>Hamsı</p>
                        </div>
                        <div className="salon">
                            <p>Salonlar</p>
                        </div>
                        <div className="personal">
                            <p>Şəxsi</p>
                        </div>
                    </div>

            </div>
          </section>
                              <p className="car-supp">Avtomobillərin təchizatı :</p>
          <section  >
            <div className="row6">
                <div className="firstLineRow6">
                    <div className="selectSupp"><p>Arxa Görüntü Kamerası</p></div>
                    <div className="selectSupp2"><p>ABS</p></div>
                    <div className="selectSupp3"><p>Oturacaqlaın Ventilyasiyası</p></div>
                    <div className="selectSupp4"><p>Yan Pərdələr</p></div>
                    <div className="selectSupp5"><p>Mərkızi Qapanma</p></div>
                    <div className="selectSupp6"><p>Lyuk</p></div>
                    <div className="selectSupp7"><p>Yüngül Lehimli Disklər</p></div>

                    
                </div>

            </div>
            <div className="secondLineRow6">
                            <div className="secondSelectSupp">
                                <p>Oturacaqların isidilməsi</p>
                            </div>
                            <div className="secondSelectSupp2">
                                <p>Kondisoner</p>
                            </div>
                            <div className="secondSelectSupp3">
                                <p>Park Radarı</p>
                            </div>
                            <div className="secondSelectSupp4">
                                <p>Ksenon Lampalar</p>
                            </div>
                            <div className="secondSelectSupp5">
                                <p> Oturacaqların Ventelyasiyası</p>
                            </div>
                            <div className="secondSelectSupp6">
                                <p>Dəri Salon</p>
                            </div>
                            <div className="secondSelectSupp7">
                                <p> Yağış Sensoru</p>
                            </div>
                </div>
          </section>

          <section >
            <div className="row7">
                <div className="new-trade-count">
                        <p>Bu Gün :</p>   <p className="count" > 18 yeni elan</p>
                </div>
                <div className="btn-cent">
                    <p className="reset">Sıfırla</p>
                    <p className="hide" onClick={toggleFiltersVisibility} >            {isFiltersHidden ? 'Show More Filters' : 'Hide Filters'}
            <img src='' alt="" /></p>
          <button className="showResult">Elanları Göstər</button>

                </div>
            </div>
            

     
          </section>
        </div>
      </div>
    </>
  );
}

export default Filter;
