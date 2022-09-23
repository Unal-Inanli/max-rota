import React from 'react';
import InviteForm from '../../components/InviteForm';
import { motion } from "framer-motion"
const Invite = () => {
    return (
        <motion.div initial={{ position: "relative", left: "-10%", opacity: 0 }} whileInView={{ left: 0, opacity: 1, transition: { duration: 0.8 } }} viewport={{ once: true }} className="hm_section_four">
            <h2>Global Piyasalarda 500’den Fazla Yatırım Aracı</h2>
            <div className="row">
                <div className="col-md-6">
                    <div className="four_text">
                        <h4>FOREX İŞLEMLERİNE BUGÜN BAŞLAYIN!</h4>
                        <p>170'ten Fazla Yatırım Aracına Tek Platformdan Erişin, Dilediğiniz Yerden İşlem Yapın.</p>

                        <div className="item">
                            <div className="icon">
                                <img src="img/icon/piyasa_icon.svg" alt="" />
                            </div>
                            <div className="text">
                                <h6>5/24 Açık Piyasa</h6>
                                <span>Forex piyasası uyumuyor; hafta içi 5 gün 24 saat, günün her anında emtialarda yatırım fırsatlarını değerlendirin.</span>
                            </div>
                        </div>
                        <div className="item">
                            <div className="icon">
                                <img src="img/icon/ikiyon_icon.svg" alt="" />
                            </div>
                            <div className="text">
                                <h6>İki Yönlü Yatırım</h6>
                                <span>Forex piyasası uyumuyor; hafta içi 5 gün 24 saat, günün her anında emtialarda yatırım fırsatlarını değerlendirin.</span>
                            </div>
                        </div>
                        <div className="item">
                            <div className="icon">
                                <img src="img/icon/etkin_sermaye_icon.svg" alt="" />
                            </div>
                            <div className="text">
                                <h6>Etkin Sermaye Yönetimi</h6>
                                <span>Forex piyasası uyumuyor; hafta içi 5 gün 24 saat, günün her anında emtialarda yatırım fırsatlarını değerlendirin.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="section_four_form">
                        <InviteForm />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Invite;
