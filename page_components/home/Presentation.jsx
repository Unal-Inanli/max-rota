import { motion } from 'framer-motion';
import React from 'react';

const Presentation = () => {
    return (
        <div className="section_five">
            <div className="section_five_area">
                <div className="row">
                    <div className="col-md-6">
                        <div className="five_video_area">
                            <img src="img/video_img.jpg" alt="" />
                            <a href="#">
                                <div className="play_btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="105.667" height="105.667" viewBox="0 0 105.667 105.667">
                                        <path id="play" d="M90.184,15.484a52.822,52.822,0,1,0,0,74.7,52.793,52.793,0,0,0,0-74.7ZM68.72,56.259,48.886,71.686a4.345,4.345,0,0,1-7-3.425V37.408a4.342,4.342,0,0,1,7-3.425L68.72,49.41a4.34,4.34,0,0,1,0,6.85Z" transform="translate(0 -0.001)" fill="#fff" />
                                    </svg>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="section_five_list">
                            <motion.div className="item" initial={{ translateY: -30, opacity: 0 }} whileInView={{ translateY: 0, opacity: 1 }} transition={{ duration: 0.4, delay: 0 }} viewport={{ once: true }}>
                                <div className="icon">
                                    <div className="icon_bg">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12.301" height="30.436" viewBox="0 0 12.301 30.436">
                                            <path id="Path_28" data-name="Path 28" d="M172.249,89.92h12.3v30.436h-6.466v-24.6h-5.835V89.92Z" transform="translate(-172.249 -89.92)" fill="#fff" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="text">
                                    <h6>Etkin Sermaye Yönetimi</h6>
                                    <span>Forex piyasası uyumuyor; hafta içi 5 gün 24 saat, günün her anında emtialarda yatırım fırsatlarını değerlendirin.</span>
                                </div>
                            </motion.div>
                            <motion.div className="item" initial={{ translateY: -30, opacity: 0 }} whileInView={{ translateY: 0, opacity: 1 }} transition={{ duration: 0.4, delay: 0.2 }} viewport={{ once: true }}>
                                <div className="icon">
                                    <div className="icon_bg">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22.625" height="31.998" viewBox="0 0 22.625 31.998">
                                            <path id="Path_34" data-name="Path 34" d="M141.792,100a5.6,5.6,0,0,0,1.131-3.232,3.67,3.67,0,0,0-.97-2.586,3.814,3.814,0,0,0-2.586-1.131c-1.939,0-3.878,1.454-5.656,4.2l-5.656-3.232a16.714,16.714,0,0,1,4.848-5.171,12.261,12.261,0,0,1,6.626-1.778,10.734,10.734,0,0,1,7.111,2.586,8.531,8.531,0,0,1,3.07,6.949,9.739,9.739,0,0,1-1.293,4.687,27.138,27.138,0,0,1-4.525,5.656l-5.656,5.818h12.444v6.3h-22.14V113.9l9.212-9.373A39.07,39.07,0,0,0,141.792,100Z" transform="translate(-128.056 -87.076)" fill="#fff" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="text">
                                    <h6>Etkin Sermaye Yönetimi</h6>
                                    <span>Forex piyasası uyumuyor; hafta içi 5 gün 24 saat, günün her anında emtialarda yatırım fırsatlarını değerlendirin.</span>
                                </div>
                            </motion.div>
                            <motion.div className="item" initial={{ translateY: -30, opacity: 0 }} whileInView={{ translateY: 0, opacity: 1 }} transition={{ duration: 0.4, delay: 0.4 }} viewport={{ once: true }}>
                                <div className="icon">
                                    <div className="icon_bg">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22.463" height="31.675" viewBox="0 0 22.463 31.675">
                                            <path id="Path_31" data-name="Path 31" d="M130.1,94.477V88.5h19.069v4.848l-6.464,7.272a9.517,9.517,0,0,1,5.818,3.232,9.15,9.15,0,0,1,2.1,5.818,9.7,9.7,0,0,1-3.394,7.757c-2.262,1.939-5.01,2.747-8.565,2.747a18.891,18.891,0,0,1-10.5-3.717l2.909-5.495c2.909,2.1,5.656,3.07,7.919,3.07a5.3,5.3,0,0,0,3.394-.97,3.151,3.151,0,0,0,1.293-2.909,3.5,3.5,0,0,0-1.616-3.07,6.7,6.7,0,0,0-4.363-1.131,18.473,18.473,0,0,0-4.2.808v-5.171l5.979-7.111Z" transform="translate(-128.16 -88.498)" fill="#fff" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="text">
                                    <h6>Etkin Sermaye Yönetimi</h6>
                                    <span>Forex piyasası uyumuyor; hafta içi 5 gün 24 saat, günün her anında emtialarda yatırım fırsatlarını değerlendirin.</span>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Presentation;
