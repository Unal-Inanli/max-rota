import React from 'react';
import Image from "next/image";
import PlatformIcon from "../../public/img/platform_icon.svg";
import PlatformImage from "../../public/img/platformig.png";
import AppStoreImage from "../../public/img/icon/appstore_icon.svg";
import DesktopIconImage from "../../public//img/icon/desktop_icon.svg";
import GooglePlayImage from "../../public/img/icon/googleplay_icon.svg";
import MetaTraderImage from "../../public/img/metatrader_img.svg"

const PlatformInfo = () => {
    return (
        <>
            <div className="plat_section">
                <div className="container">

                    <div className="plat_section_top">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="plat_top_left">
                                    <h4>MetaTrader 5 Profesyonel <br />
                                        <label>500’den</label> Fazla Yatırım Aracı</h4>
                                    <span>
                                        MetaTrader 5 platformu, dünya çapında acemiden profesyonele her seviyedeki yatırımcının en çok kullandığı işlem platformu olma özelliğini taşır.
                                        Çünkü MetaTrader 5 kullanırken kullanıcı dostu arayüzü ve özelleştirilebilir yapısı ile işlem performansınızı olumlu etkileyecek düzenlemeleri edinebilirsiniz.
                                    </span>
                                    <div className="platform_cloes">
                                        <Image src={PlatformIcon} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 pla_s_vout">
                                <div className="plat_top_right">
                                    <Image src={PlatformImage} />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="plat_section_two">
                <div className="row">
                    <div className="col-md-6">
                        <div className="plat_two_img">
                            <Image src={MetaTraderImage} />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="plat_two_right">
                            <h3>MetaTrader 5 Profesyonel <br />
                                <label>500’den</label> Fazla Yatırım Aracı</h3>
                            <span>
                                MetaTrader 5 platformu, dünya çapında acemiden profesyonele her seviyedeki yatırımcının en çok kullandığı işlem platformu olma özelliğini taşır.
                                Çünkü MetaTrader 5 kullanırken kullanıcı dostu arayüzü ve özelleştirilebilir yapısı ile işlem performansınızı olumlu etkileyecek düzenlemeleri edinebilirsiniz.
                            </span>

                            <div className="download_bar_home">
                                <div className="row">
                                    <div className="col-md-4">
                                        <Image src={AppStoreImage} />
                                    </div>
                                    <div className="col-md-4">
                                        <Image src={DesktopIconImage} />
                                    </div>
                                    <div className="col-md-4">
                                        <Image src={GooglePlayImage} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="plat_section_three">
                <div className="row">
                    <div className="col-md-6">
                        <div className="plat_two_right">
                            <h3>
                                MetaTrader 5 Profesyonel <br />
                                <label>500’den</label> Fazla Yatırım Aracı
                            </h3>
                            <span>
                                MetaTrader 5 platformu, dünya çapında acemiden profesyonele her seviyedeki yatırımcının en çok kullandığı işlem platformu olma özelliğini taşır.
                                Çünkü MetaTrader 5 kullanırken kullanıcı dostu arayüzü ve özelleştirilebilir yapısı ile işlem performansınızı olumlu etkileyecek düzenlemeleri edinebilirsiniz.
                            </span>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="plat_two_img">
                            <img src="/img/plat_two_scene.svg" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PlatformInfo;
