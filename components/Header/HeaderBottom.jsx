import Link from 'next/link';
import React from 'react';
import PrimaryButton from '../Buttons/PrimaryButton';

const HeaderBottom = () => {

    const mobileMenuRef = React.useRef(null);

    const openNav = () => {
        mobileMenuRef.current.style.width = "230px";
    }

    const closeNav = () => {
        mobileMenuRef.current.style.width = "0px";
    }

    return (
        <div className="head_bottom">
            <Link href={"/"}>
                <div className="logo logo-link"></div>
            </Link>
            <div className="top_menu">
                <ul>
                    <li>
                        <Link href="/services">Consultanty Services</Link>
                    </li>
                    <li>
                        <Link href="/corporate">Corporate</Link>
                    </li>
                    <li>
                        <Link href="/platform">Platform</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
            <div className="top_right">
                <Link href="/new">
                    <PrimaryButton>
                        Hesap Oluştur
                    </PrimaryButton>
                </Link>
            </div>

            <div className="mobil_menu" onClick={openNav}>&#9776;</div>
            <div ref={mobileMenuRef} id="mobilMenu" className="sidenav">
                <div className="close_btn" onClick={closeNav}>&times;</div>
                <Link href="/new">
                    <PrimaryButton>
                        Hesap Oluştur
                    </PrimaryButton>
                </Link>
                <ul className='mobil_menu-list'>
                    <li>
                        <Link href="/services">Consultanty Services</Link>
                    </li>
                    <li>
                        <Link href="/corporate">Corporate</Link>
                    </li>
                    <li>
                        <Link href="/platform">Platform</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>

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
                    <span>Lisanslı ve Geniş Yetkili Aracı Kurum - Lisans No: G-039 (398)</span>
                </div>
            </div>
        </div >
    );
}

export default HeaderBottom;
