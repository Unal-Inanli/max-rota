import React from 'react';
import { motion } from "framer-motion";
const Information = () => {
    return (
        <div className="hm_section_three">
            <div className="row">
                <motion.div initial={{ translateX: -100, opacity: 0 }} whileInView={{ translateX: 0, opacity: 1 }} transition={{ type: "tween", duration: 0.8 }} viewport={{ once: true }} className="col-md-6">
                    <div className="section_three_img">
                        <img src="/img/money_img.svg" alt="" />
                    </div>
                </motion.div>
                <motion.div initial={{ translateX: 100, opacity: 0 }} whileInView={{ translateX: 0, opacity: 1 }} transition={{ type: "tween", duration: 0.8 }} viewport={{ once: true }} className="col-md-6">
                    <div className="section_three_text">
                        <h5>Global Piyasalarda <br />
                            <span>500’den</span> Fazla Yatırım Aracı</h5>
                        <p>
                            Dünya standartlarındaki teknolojik altyapımızla Türk sermaye piyasalarının önemli yatırım kuruluşları arasında yer alıyoruz. Bugünün yatırım ihtiyaçlarına geleceğin çözümlerini şimdiden sunmayı hedefliyoruz.
                            <br /><br />
                            Son teknolojileri kullanan gelişmiş online Forex, VİOP ve Borsa işlem platformlarımız sayesinde müşterilerimiz tüm anlık finansal verilere, piyasa analizlerine ve ihtiyaç duyulan diğer bilgilere hızlı ve güvenli bir şekilde ulaşıp işlem yapabilmekte, yaratıcı mobil iletişim kolaylıklarıyla zaman ve mekan sınırlarından kurtulmaktadır.
                            <br /><br />
                            Bugün 39 Milyon TL. ödenmiş sermayemiz, performansımız ve dünya standartlarındaki teknolojik altyapımızla Türk sermaye piyasalarının önemli aktörlerinden biriyiz ve geleceği şekillendiren her gelişmenin yakın takipçisiyiz.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default Information;
