import React from 'react';
import MainLayout from '../layouts/MainLayout';
import Image from "next/image"
import DemoImage from "../public/img/demo_userimg1k.png";
const Demo = () => {
    return (
        <MainLayout title={"RotaCapital - Demo Account"}>
            <div className="acoo_section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-7">
                                <div className="acoo_left">
                                    <div className="aco_bg"></div>
                                    <div className="acoo_img">
                                        <Image src={DemoImage} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="acoo_right">
                                    <h4><label>Yeni</label> Hesap Oluştur</h4>
                                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>

                                    <div className="acoo_item">
                                        <input type="text" name="" placeholder="Ad Soyad" />
                                    </div>
                                    <div className="acoo_item">
                                        <input type="text" name="" placeholder="E-Posta" />
                                    </div>
                                    <div className="acoo_item">
                                        <input type="text" name="" placeholder="Telefon" />
                                    </div>

                                    <button className="acoo_submit_btn">
                                        Hesap Oluştur
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </MainLayout>
        );
}

export default Demo;
