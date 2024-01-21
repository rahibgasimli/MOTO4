
import haqqimizdaPhoto from '../images/about/haqqimizda.svg'
import planlarImages1 from '../images/about/planlar-images1.svg'
import planlarImages2 from '../images/about/planlar-images2.svg'
import planlarImages3 from '../images/about/planlar-images3.svg'

import './css/About.css'

const About = () => {
  return (
    <section className="about-section">
        <div className="haqqimizda">
                <h1>Haqqımızda</h1>
            <div className="haqqimizda-top">
                <div className="haqqimizda-top-left">
                    <h6>Haqqımızda</h6>
                    <h6 className='gelecek-planlar'>Gələcək planlar</h6>
                </div>
                <div className="haqqimizda-top-right">
                <p className='haqqimizda-right-top'>Şirkətimiz avtomobildən istifadə edən və ya avtomobil satışı ilə məşğul olan hər kəs üçün sistem yaradır. Avtomobilinizi satmaq niyyətindəsinizsə və ya yenisini almaq fikrindəsinizsə, model avtomobilinizin qiymətini proqnozlaşdırmağa kömək edir. Sistem sizin üçün orta bazar qiymətini hesablayır və sonra hansı avtomobilin ehtiyaclarınıza daha uyğun olduğunu təmin edir. O, istənilən avtomobil satışı platformasına inteqrasiya oluna bilən vebsaytın bir hissəsi kimi yaradılacaq. </p>
                <p className="haqqimizda-right-bottom">Avtomobil sahibləri nəqliyyat vasitələrini satmaq üçün vebsayta daxil olduqda, qiymətlərə əhəmiyyətli dərəcədə təsir edən əsas avtomobil xüsusiyyətlərini daxil edə bilərlər. Daha sonra sistem müvafiq qiyməti qiymətləndirmək üçün orta statistik göstəricilərdən istifadə edəcək. Satıcı davam etməyi seçərsə, proqnozlaşdırılan dəyər dərhal vebsaytda elan olaraq göstəriləcək.</p>
            </div>
            </div>
            <div className="haqqimizda-bottom">
                <img src={haqqimizdaPhoto} alt="" />
            </div>
        </div>

        <div className="planlar">
            <div className="planlar-images">
                <div className="planlar-images-left">
                    <div className="planlar-images-left-top"><img src={planlarImages1} alt="" /></div>
                    <div className="planlar-images-left-bottom"><img src={planlarImages2} alt="" /></div>
                </div>

                <div className="planlar-images-right">
                    <img src={planlarImages3} alt="" />
                </div>

            </div>

            <div className="planlar-text">
                <h1>Gələcək Planlar</h1>
                <p>Biz sistemimizi əlavə funksiyalarla təkmilləşdirməyi düşünürük. Onlardan biri də zaman sıralarının təhlilidir. Bu xüsusiyyət avtomobil alqı-satqısı prosesi ilə məşğul olan şəxslər üçün xüsusilə faydalıdır. Təsəvvür edin ki, daha sonra satmaq niyyəti ilə avtomobil almaqda maraqlısınız. Sistemimiz sizə aşağıdakı kimi məlumatlar təqdim edəcək: Bu avtomobilin cari təxmini dəyəri $40,000-dır, lakin növbəti 2 ay ərzində onun 35,000$-a düşəcəyi proqnozlaşdırılır. Onu sizin üçün almaq məsləhət gorulmur . Bu xüsusiyyət, zamanla avtomobilin dəyərindəki potensial dəyişkənliyi nəzərə alaraq istifadəçilərə məlumatlı seçim etmək imkanı verir.</p>
            </div>

        </div>

    </section>
  )
}

export default About