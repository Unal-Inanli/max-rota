import React from 'react';
import PrimaryButton from './Buttons/PrimaryButton';

const InviteForm = () => {

    const text = `Denemeye başla butonuna tıklayarak GCM'den elektronik ileti almayı, kullanım koşullarını, kişisel verilerin
    işlenmesine ilişkin aydınlatma metni ve izin Formu'nu kabul ediyorum.`
    return (
        <div className="form_area">
            <form>
                <div className="item">
                    <input type="text" placeholder="Adınız Soyadınız" />
                </div>
                <div className="item">
                    <input type="text" placeholder="E-posta" />
                </div>
                <div className="item">
                    <input type="text" placeholder="Telefon" />
                </div>
                <span>
                    {text}
                </span>
                <a href="#">
                    <PrimaryButton>
                        Denemeye Başla
                    </PrimaryButton>
                </a>
            </form>
        </div>
    );
}

export default InviteForm;
