import '../components/css/ShortFilter.css'



function Filter() {

  return (
    <>

      <div  className='containers'>

        <div className="inputFormss">
          <section  >
            <div className="row-1s">
              <select name="marka" id="m-1s" placeholder="Marka">
                <option value="BMW">BMW</option>
                <option value="Mercedes">Mercedes</option>
                <option value="Lamborghini">Lamborghini</option>
              </select>
              <select name="Model" id="m-2s">
                <option value="C-200">C-200</option>
                <option value="M-5">M5</option>
                <option value="Urus">Urus</option>
              </select>
              <div id="m-3s">
                <div className="boxess">
                  <div className="box-1s">
                    <p>Hamısı</p>
                  </div>
                  <div className="box-2s">
                    <p>Yeni</p>
                  </div>
                  <div className="box-3s">
                    <p>Sürülmüş</p>
                  </div>
                </div>
              </div>
              <select name="Seher" id="m-4s">
                <option value="Baki"> Bakı</option>
                <option value="Sumqayit"> Sumqayıt</option>
                <option value="Gence"> Gəncə</option>
              </select>
            </div>
          </section>
          <section   >
            <div className="row-2s">
              <div className="inputss">
                <input
                  type="number"
                  name=""
                  id=""
                  className="min-prices"
                  placeholder="Qiymət ,Minimum "
                />
                <input
                  type="number"
                  name=""
                  id=""
                  className="max-prices"
                  placeholder="Maksimum"
                />
              </div>
              <div className="money-types">
                <select name="" id="" placeholder="AZN" className="type-mnys">
                  <option value="">AZN</option>
                  <option value="">Dollar</option>
                  <option value=""> EURO</option>
                </select>
              </div>
              <div className="chooses">
                <div className="box-c-1s">
                  <p>Kredit</p>
                </div>
                <div className="box-c-2s">
                  <p>Barter</p>
                </div>
              </div>
              <div className="type-bans">
                <select
                  name=""
                  id=""
                  placeholder="Ban Növü"
                  className="type-bans"
                >
                  <option value="">SUV</option>
                  <option value="">YÜK</option>
                  <option value="">Minivan</option>
                </select>
              </div>

              <div className="yearMinMaxs">
                <div >
                    <select name="" id="" className="min-years"  placeholder="İl , Min">
                        <option value="">1999</option>
                        <option value="">2000</option>
                        <option value="">2003</option>
                    </select>
                </div>
                <div >
                    <select name="" id="" placeholder="Max" className="max-years">
                        <option value="">2023</option>
                        <option value="">2022</option>
                        <option value="">2021</option>                   
                         </select>
                </div>
              </div>
            </div>
          </section>
          <section >
            <div className="row7s">
                <div className="new-trade-counts">
                        <p>Bu Gün :</p>   <p className="counts" > 18 yeni elan</p>
                </div>
                <div className="btn-cent">
                    {/* <p className="reset">Sıfırla</p> */}
                    <p className="moreFilters" > Daha Çox Filter<img src='' alt="" /> </p>
          <button className="showResults">Elanları Göstər</button>

                </div>
            </div>
         </section>
        </div>
      </div>
    </>
  );
}

export default Filter;
