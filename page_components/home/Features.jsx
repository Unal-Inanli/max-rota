import React from 'react';
import Feature from '../../components/Feature';
import { motion } from "framer-motion";



const Features = () => {

    const features = [
        {
            title: "Al/Sat Sinyal Servisi",
            iconName: "al_sat_icon.svg",
            text: `Uzman analiz ekibimizin anlık AL/SAT önerilerinden cep telefonunuza indirdiğiniz mobil uygulamamız üzerinden yararlanabilirsiniz.`
        },
        {
            title: "Hızlı Para Yatırma/Çekme",
            iconName: "al_sat_icon.svg",
            text: `Bu kadar kolay ve sorunsuz para yatırıp çekebileceğinize
            sizler de inanamayacaksınız.`
        },
        {
            title: "Lisanslı Aracı Kurum",
            iconName: "al_sat_icon.svg",
            text: `GLOFSA tarafından yetkilendirilmiş aracı kurum lisansımız
            ile güvenilir forex hizmeti alacaksınız.`
        }
    ]

    return (
        <div className="hm_section_two">
            <div className="hm_section_two_area">
                <div className="row">
                    {features.map((feature, i) => {
                        return (<motion.div key={i} initial={{ opacity: 0, translateY: -50 }} whileInView={{ opacity: 1, translateY: 0 }} transition={{ duration: 0.3, delay: 0.2 * i }} viewport={{ once: true }} className="col-md-4">
                            <Feature title={feature.title} iconName={feature.iconName}>
                                {feature.text}
                            </Feature>
                        </motion.div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}


export default Features;
