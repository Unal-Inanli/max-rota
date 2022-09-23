import React from 'react';
import MainLayout from '../layouts/MainLayout';

const Bulletin = () => {
    return (
        <MainLayout title={"RotaCapital - Feed"}>
            <div className="bulten_top_section">
    <div className="container">
        <ul className="nav nav-tabs" id="bulten_tabs" role="tablist">
          <li className="nav-item" role="presentation">
            <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Günlük Strateji Bültenİ</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">HAFTALIK PİYASA ANALİZİ</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">HAFTALIK PİYASA TAKVİMİ</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="siver-tab" data-bs-toggle="tab" data-bs-target="#siver" type="button" role="tab" aria-controls="contact" aria-selected="false">HAFTALIK STRATEJİ BÜLTENİ</button>
          </li>
        </ul>

        <div className="tab-content" id="bulten_tabs_content">
          <div className="tab-pane fade active show" id="home" role="tabpanel" aria-labelledby="home-tab">
              <h4>Piyasalara Bakış</h4>
              <p>Güne pozitif seyirle başlayan BIST100 endeksi günün geri kalanında kar satışlarıyla geriledi ve haftanın son işlem gününü %0.7 kayıpla 1,983 seviyesinden kapattı. İşlem hacmi 28.2 milyar TL seviyesinde gerçekleşti, endekse dahil olan 37 hisse değer kazandı, 61 hisse ise değer kaybetti. Dolar/TL kuru bu sabah saatlerinde 13.52 seviyesinden işlem görürken, yurt dışı vadeli hisse piyasalarında ise pozitif bir seyir izleniyor. </p>
              <br/><br/>
            Geçtiğimiz haftaya satışlarla başlayan küresel hisse endeksleri hafta boyunca dalgalı seyretti ancak kapanışlar pozitif tarafta gerçekleşti. Özellikle ABD’de FED’in beklenenden daha sıkı para politikası uygulayabileceği düşüncesi teknoloji hisseleri üzerinde baskı yaratırken tahvil faizlerinde de yüksek seyir devam etti. Hafta içinde toplanan FED, Mart ayında ilk faiz artırımına işaret ederken, 3.çeyrek ile beraber bilanço küçültmesinin de başlayabileceğinin sinyalini verdi. Piyasa beklentileri FED’in 2022 yılında 5 kez faiz artıracağı yönünde şekilleniyor. Öte yandan gelen 4.çeyrek şirket bilançoları da hem sektör hem de ekonomi açısından fikir doğurabiliyor. Zira haftanın son işlem gününde açıklanan Apple finansalları endekslerdeki tepkiye liderlik etti. Şirketin beklentilerin üzerinde kar açıklamasının yanı sıra küresel tedarik sorununa karşı iyimser beklentilere sahip olması piyasalarda da olumlu karşılandı. Bu hafta Çin piyasaları kapalı olacak. Avrupa’da enflasyon, PMI verileri, ABD’de ise PMI ve tarımdışı istihdam raporu yayınlanacak. Ayrıca hafta içinde İngiltere ve Avrupa Merkez Bankası faiz kararları takip edilecek. İçeride ise BDDK bankacılık verileri, PMI endeksi ve Ocak ayı enflasyonu bekleniyor. Geçen hafta kısmen dinen  Rusya-Ukrayna gerginliği de yakından takip edilecek.
            <br/><br/>
            BIST100 endeksinin güne alımlarla başlamasını bekliyoruz. Kısa vadede oluşan sıkışma formasyonunun yukarı tamamlanabilmesi için 2,000 seviyesinin aşılması gerektiğini düşünüyoruz. Bu aşamada 2,100 ilk güçlü direnç konumuna gelirken  1,970-1,950 ve 1,900 destek seviyeleri olarak takip edilebilir. Yatırımcılara 1,950 zarar-kes seviyesi olmak üzere pozisyonlarını korumalarını öneriyoruz, 2,000 seviyesi üzerinde ise pozisyonlar artırılabilir.
            
          </div>
          <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
              <h4>Piyasalara Bakış 2</h4>
              <p>Güne pozitif seyirle başlayan BIST100 endeksi günün geri kalanında kar satışlarıyla geriledi ve haftanın son işlem gününü %0.7 kayıpla 1,983 seviyesinden kapattı. İşlem hacmi 28.2 milyar TL seviyesinde gerçekleşti, endekse dahil olan 37 hisse değer kazandı, 61 hisse ise değer kaybetti. Dolar/TL kuru bu sabah saatlerinde 13.52 seviyesinden işlem görürken, yurt dışı vadeli hisse piyasalarında ise pozitif bir seyir izleniyor. </p>
              <br/><br/>
            Geçtiğimiz haftaya satışlarla başlayan küresel hisse endeksleri hafta boyunca dalgalı seyretti ancak kapanışlar pozitif tarafta gerçekleşti. Özellikle ABD’de FED’in beklenenden daha sıkı para politikası uygulayabileceği düşüncesi teknoloji hisseleri üzerinde baskı yaratırken tahvil faizlerinde de yüksek seyir devam etti. Hafta içinde toplanan FED, Mart ayında ilk faiz artırımına işaret ederken, 3.çeyrek ile beraber bilanço küçültmesinin de başlayabileceğinin sinyalini verdi. Piyasa beklentileri FED’in 2022 yılında 5 kez faiz artıracağı yönünde şekilleniyor. Öte yandan gelen 4.çeyrek şirket bilançoları da hem sektör hem de ekonomi açısından fikir doğurabiliyor. Zira haftanın son işlem gününde açıklanan Apple finansalları endekslerdeki tepkiye liderlik etti. Şirketin beklentilerin üzerinde kar açıklamasının yanı sıra küresel tedarik sorununa karşı iyimser beklentilere sahip olması piyasalarda da olumlu karşılandı. Bu hafta Çin piyasaları kapalı olacak. Avrupa’da enflasyon, PMI verileri, ABD’de ise PMI ve tarımdışı istihdam raporu yayınlanacak. Ayrıca hafta içinde İngiltere ve Avrupa Merkez Bankası faiz kararları takip edilecek. İçeride ise BDDK bankacılık verileri, PMI endeksi ve Ocak ayı enflasyonu bekleniyor. Geçen hafta kısmen dinen  Rusya-Ukrayna gerginliği de yakından takip edilecek.
            <br/><br/>
            BIST100 endeksinin güne alımlarla başlamasını bekliyoruz. Kısa vadede oluşan sıkışma formasyonunun yukarı tamamlanabilmesi için 2,000 seviyesinin aşılması gerektiğini düşünüyoruz. Bu aşamada 2,100 ilk güçlü direnç konumuna gelirken  1,970-1,950 ve 1,900 destek seviyeleri olarak takip edilebilir. Yatırımcılara 1,950 zarar-kes seviyesi olmak üzere pozisyonlarını korumalarını öneriyoruz, 2,000 seviyesi üzerinde ise pozisyonlar artırılabilir.
            
          </div>
          <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
              <h4>Piyasalara Bakış 3</h4>
              <p>Güne pozitif seyirle başlayan BIST100 endeksi günün geri kalanında kar satışlarıyla geriledi ve haftanın son işlem gününü %0.7 kayıpla 1,983 seviyesinden kapattı. İşlem hacmi 28.2 milyar TL seviyesinde gerçekleşti, endekse dahil olan 37 hisse değer kazandı, 61 hisse ise değer kaybetti. Dolar/TL kuru bu sabah saatlerinde 13.52 seviyesinden işlem görürken, yurt dışı vadeli hisse piyasalarında ise pozitif bir seyir izleniyor. 
              <br/><br/>
            Geçtiğimiz haftaya satışlarla başlayan küresel hisse endeksleri hafta boyunca dalgalı seyretti ancak kapanışlar pozitif tarafta gerçekleşti. Özellikle ABD’de FED’in beklenenden daha sıkı para politikası uygulayabileceği düşüncesi teknoloji hisseleri üzerinde baskı yaratırken tahvil faizlerinde de yüksek seyir devam etti. Hafta içinde toplanan FED, Mart ayında ilk faiz artırımına işaret ederken, 3.çeyrek ile beraber bilanço küçültmesinin de başlayabileceğinin sinyalini verdi. Piyasa beklentileri FED’in 2022 yılında 5 kez faiz artıracağı yönünde şekilleniyor. Öte yandan gelen 4.çeyrek şirket bilançoları da hem sektör hem de ekonomi açısından fikir doğurabiliyor. Zira haftanın son işlem gününde açıklanan Apple finansalları endekslerdeki tepkiye liderlik etti. Şirketin beklentilerin üzerinde kar açıklamasının yanı sıra küresel tedarik sorununa karşı iyimser beklentilere sahip olması piyasalarda da olumlu karşılandı. Bu hafta Çin piyasaları kapalı olacak. Avrupa’da enflasyon, PMI verileri, ABD’de ise PMI ve tarımdışı istihdam raporu yayınlanacak. Ayrıca hafta içinde İngiltere ve Avrupa Merkez Bankası faiz kararları takip edilecek. İçeride ise BDDK bankacılık verileri, PMI endeksi ve Ocak ayı enflasyonu bekleniyor. Geçen hafta kısmen dinen  Rusya-Ukrayna gerginliği de yakından takip edilecek.
            <br/><br/>
            BIST100 endeksinin güne alımlarla başlamasını bekliyoruz. Kısa vadede oluşan sıkışma formasyonunun yukarı tamamlanabilmesi için 2,000 seviyesinin aşılması gerektiğini düşünüyoruz. Bu aşamada 2,100 ilk güçlü direnç konumuna gelirken  1,970-1,950 ve 1,900 destek seviyeleri olarak takip edilebilir. Yatırımcılara 1,950 zarar-kes seviyesi olmak üzere pozisyonlarını korumalarını öneriyoruz, 2,000 seviyesi üzerinde ise pozisyonlar artırılabilir.
            
            Haftalık Ajanda</p>
          </div>
          <div className="tab-pane fade" id="siver" role="tabpanel" aria-labelledby="siver-tab">
              <h4>Piyasalara Bakış 4</h4>
              <p>Güne pozitif seyirle başlayan BIST100 endeksi günün geri kalanında kar satışlarıyla geriledi ve haftanın son işlem gününü %0.7 kayıpla 1,983 seviyesinden kapattı. İşlem hacmi 28.2 milyar TL seviyesinde gerçekleşti, endekse dahil olan 37 hisse değer kazandı, 61 hisse ise değer kaybetti. Dolar/TL kuru bu sabah saatlerinde 13.52 seviyesinden işlem görürken, yurt dışı vadeli hisse piyasalarında ise pozitif bir seyir izleniyor. </p>
              <br/><br/>
            Geçtiğimiz haftaya satışlarla başlayan küresel hisse endeksleri hafta boyunca dalgalı seyretti ancak kapanışlar pozitif tarafta gerçekleşti. Özellikle ABD’de FED’in beklenenden daha sıkı para politikası uygulayabileceği düşüncesi teknoloji hisseleri üzerinde baskı yaratırken tahvil faizlerinde de yüksek seyir devam etti. Hafta içinde toplanan FED, Mart ayında ilk faiz artırımına işaret ederken, 3.çeyrek ile beraber bilanço küçültmesinin de başlayabileceğinin sinyalini verdi. Piyasa beklentileri FED’in 2022 yılında 5 kez faiz artıracağı yönünde şekilleniyor. Öte yandan gelen 4.çeyrek şirket bilançoları da hem sektör hem de ekonomi açısından fikir doğurabiliyor. Zira haftanın son işlem gününde açıklanan Apple finansalları endekslerdeki tepkiye liderlik etti. Şirketin beklentilerin üzerinde kar açıklamasının yanı sıra küresel tedarik sorununa karşı iyimser beklentilere sahip olması piyasalarda da olumlu karşılandı. Bu hafta Çin piyasaları kapalı olacak. Avrupa’da enflasyon, PMI verileri, ABD’de ise PMI ve tarımdışı istihdam raporu yayınlanacak. Ayrıca hafta içinde İngiltere ve Avrupa Merkez Bankası faiz kararları takip edilecek. İçeride ise BDDK bankacılık verileri, PMI endeksi ve Ocak ayı enflasyonu bekleniyor. Geçen hafta kısmen dinen  Rusya-Ukrayna gerginliği de yakından takip edilecek.
            <br/><br/>
            BIST100 endeksinin güne alımlarla başlamasını bekliyoruz. Kısa vadede oluşan sıkışma formasyonunun yukarı tamamlanabilmesi için 2,000 seviyesinin aşılması gerektiğini düşünüyoruz. Bu aşamada 2,100 ilk güçlü direnç konumuna gelirken  1,970-1,950 ve 1,900 destek seviyeleri olarak takip edilebilir. Yatırımcılara 1,950 zarar-kes seviyesi olmak üzere pozisyonlarını korumalarını öneriyoruz, 2,000 seviyesi üzerinde ise pozisyonlar artırılabilir.
            
          </div>
          
        </div>
    </div>
</div>

<div className="bulten_bot_section">
    <div className="container">
        <h4>Bülten Takvimi</h4>
    
        <div className="bulten_section_cons">
            <div className="row">
                <div className="col-md-4">
                    <div className="bulten_item">
                        <div className="bulten_icon">
                            <img src="img/pdf_icon.svg" />
                        </div>
                        <div className="bulten_text">
                            <h5>Günlük Strateji Bülteni</h5>
                            <span>31 Ocak 2022</span>
                        </div>
                        <div className="indir">
                            <img src="img/indir.svg" />
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="bulten_item">
                        <div className="bulten_icon">
                            <img src="img/pdf_icon.svg" />
                        </div>
                        <div className="bulten_text">
                            <h5>Günlük Strateji Bülteni</h5>
                            <span>31 Ocak 2022</span>
                        </div>
                        <div className="indir">
                            <img src="img/indir.svg" />
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="bulten_item">
                        <div className="bulten_icon">
                            <img src="img/pdf_icon.svg" />
                        </div>
                        <div className="bulten_text">
                            <h5>Günlük Strateji Bülteni</h5>
                            <span>31 Ocak 2022</span>
                        </div>
                        <div className="indir">
                            <img src="img/indir.svg" />
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="bulten_item">
                        <div className="bulten_icon">
                            <img src="img/pdf_icon.svg" />
                        </div>
                        <div className="bulten_text">
                            <h5>Günlük Strateji Bülteni</h5>
                            <span>31 Ocak 2022</span>
                        </div>
                        <div className="indir">
                            <img src="img/indir.svg" />
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="bulten_item">
                        <div className="bulten_icon">
                            <img src="img/pdf_icon.svg" />
                        </div>
                        <div className="bulten_text">
                            <h5>Günlük Strateji Bülteni</h5>
                            <span>31 Ocak 2022</span>
                        </div>
                        <div className="indir">
                            <img src="img/indir.svg" />
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="bulten_item">
                        <div className="bulten_icon">
                            <img src="img/pdf_icon.svg" />
                        </div>
                        <div className="bulten_text">
                            <h5>Günlük Strateji Bülteni</h5>
                            <span>31 Ocak 2022</span>
                        </div>
                        <div className="indir">
                            <img src="img/indir.svg" />
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="bulten_item">
                        <div className="bulten_icon">
                            <img src="img/pdf_icon.svg" />
                        </div>
                        <div className="bulten_text">
                            <h5>Günlük Strateji Bülteni</h5>
                            <span>31 Ocak 2022</span>
                        </div>
                        <div className="indir">
                            <img src="img/indir.svg" />
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="bulten_item">
                        <div className="bulten_icon">
                            <img src="img/pdf_icon.svg" />
                        </div>
                        <div className="bulten_text">
                            <h5>Günlük Strateji Bülteni</h5>
                            <span>31 Ocak 2022</span>
                        </div>
                        <div className="indir">
                            <img src="img/indir.svg" />
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="bulten_item">
                        <div className="bulten_icon">
                            <img src="img/pdf_icon.svg" />
                        </div>
                        <div className="bulten_text">
                            <h5>Günlük Strateji Bülteni</h5>
                            <span>31 Ocak 2022</span>
                        </div>
                        <div className="indir">
                            <img src="img/indir.svg" />
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="bulten_item">
                        <div className="bulten_icon">
                            <img src="img/pdf_icon.svg" />
                        </div>
                        <div className="bulten_text">
                            <h5>Günlük Strateji Bülteni</h5>
                            <span>31 Ocak 2022</span>
                        </div>
                        <div className="indir">
                            <img src="img/indir.svg" />
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="bulten_item">
                        <div className="bulten_icon">
                            <img src="img/pdf_icon.svg" />
                        </div>
                        <div className="bulten_text">
                            <h5>Günlük Strateji Bülteni</h5>
                            <span>31 Ocak 2022</span>
                        </div>
                        <div className="indir">
                            <img src="img/indir.svg" />
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="bulten_item">
                        <div className="bulten_icon">
                            <img src="img/pdf_icon.svg" />
                        </div>
                        <div className="bulten_text">
                            <h5>Günlük Strateji Bülteni</h5>
                            <span>31 Ocak 2022</span>
                        </div>
                        <div className="indir">
                            <img src="img/indir.svg" />
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="bulten_item">
                        <div className="bulten_icon">
                            <img src="img/pdf_icon.svg" />
                        </div>
                        <div className="bulten_text">
                            <h5>Günlük Strateji Bülteni</h5>
                            <span>31 Ocak 2022</span>
                        </div>
                        <div className="indir">
                            <img src="img/indir.svg" />
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="bulten_item">
                        <div className="bulten_icon">
                            <img src="img/pdf_icon.svg" />
                        </div>
                        <div className="bulten_text">
                            <h5>Günlük Strateji Bülteni</h5>
                            <span>31 Ocak 2022</span>
                        </div>
                        <div className="indir">
                            <img src="img/indir.svg" />
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="bulten_item">
                        <div className="bulten_icon">
                            <img src="img/pdf_icon.svg" />
                        </div>
                        <div className="bulten_text">
                            <h5>Günlük Strateji Bülteni</h5>
                            <span>31 Ocak 2022</span>
                        </div>
                        <div className="indir">
                            <img src="img/indir.svg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>
        </MainLayout>
    );
}

export default Bulletin;
