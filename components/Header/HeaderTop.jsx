import React from 'react';

const HeaderTop = () => {
    return (
        <div className="header_top">
            <div className="row">
                <div className="col-md-6">
                    <div className="head_top_left">
                        <span>Lisanslı ve Geniş Yetkili Aracı Kurum - Lisans No: G-039 (398)</span>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="head_top_right">
                        <ul>
                            <li className="phone_head_top">
                                <a href="#">
                                    +90 556 887 44 15
                                </a>
                            </li>
                            <li className="mail_head_top">
                                <a href="#">
                                    design@monegon.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderTop;
