import React from 'react';
import { motion } from "framer-motion";

const Download = () => {
    return (
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="section_seven">
            <div className="section_seven_area">
                <div className="row">
                    <div className="col-md-6">
                        <div className="section_seven_img">
                            <img src="/img/metatrader5_img.svg" alt="" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="section_seven_text">
                            <h4>MetaTrader 5 Profesyonel <br />
                                <span>500’den</span> Fazla Yatırım Aracı</h4>
                            <p>
                                MetaTrader 5 platformu, dünya çapında acemiden profesyonele her seviyedeki yatırımcının en çok kullandığı işlem platformu olma özelliğini taşır. Çünkü MetaTrader 4 kullanırken kullanıcı dostu arayüzü ve özelleştirilebilir yapısı ile
                                işlem performansınızı olumlu etkileyecek düzenlemeleri edinebilirsiniz.
                            </p>
                            <div className="app_list">
                                <div className="row">
                                    <motion.div initial={{ translateY: 0 }} whileInView={{ translateY: [0, -30, 0] }} transition={{ duration: 0.4, delay: 0 }} viewport={{ once: true }} className="col-md-4">
                                        <a href="#">
                                            <img src="/img/icon/appstore_icon.svg" alt="" />
                                        </a>
                                    </motion.div>
                                    <motion.div className="col-md-4" initial={{ translateY: 0 }} whileInView={{ translateY: [0, -30, 0] }} transition={{ duration: 0.4, delay: 0.2 }} viewport={{ once: true }} >
                                        <a href="#">
                                            <img src="/img/icon/desktop_icon.svg" alt="" />
                                        </a>
                                    </motion.div>
                                    <motion.div initial={{ translateY: 0 }} whileInView={{ translateY: [0, -30, 0] }} transition={{ duration: 0.4, delay: 0.4 }} viewport={{ once: true }} className="col-md-4">
                                        <a href="#">
                                            <img src="/img/icon/googleplay_icon.svg" alt="" />
                                        </a>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Download;
