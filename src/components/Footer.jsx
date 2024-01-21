
import { LuPhone } from "react-icons/lu";
import { CiMail } from "react-icons/ci";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaTwitter,FaFacebook } from "react-icons/fa";


import './css/Footer.css'
const Footer = () => {
  return (
    <section className="footer-section">
      <div className="footer-about">
        <h3>MOTO4 haqqında</h3>
        <a href="#">Ana səhifə</a>
        <a href="#">Haqqımızda</a>
        <a href="#">Kömək mərkəzi</a>
        <a href="#">FAQ</a>
      </div>

      <div className="footer-link">
        <h3>Müştəri linkləri</h3>
        <a href="#">Proqnozlaşdırılmış elanlar</a>
        <a href="#">Son yüklənən elanlar</a>
        <a href="#">Yeni elan yerləşdir</a>
        <a href="#">Proqnozlaşdırılmış elan yerləşdir</a>
      </div>

      <div className="footer-qaydalar">
        <h3>Qaydalar</h3>
        <a href="#">Mexfilik siyaseti</a>
        <a href="#">İstifadeçi razılaşması</a>
        <a href="#">Qaydalar</a>
      </div>

      <div className="footer-elaqe">
        <h3>Bizimlə əlaqə</h3>
        <a href="#" className='footer-phone'><LuPhone/>+994 10xxxxxx</a>
        <a href="#" className='footer-mail'><CiMail/> Moto4@gmail.com</a>
        <h3 className='sosial-text'>Sosial media</h3>
        <div className="footer-media">
          <a href=""><BiLogoInstagramAlt/></a>
          <a href=""><FaTwitter/></a>
          <a href=""><FaFacebook/></a>
        </div>
      </div>



    </section>
  )
}

export default Footer