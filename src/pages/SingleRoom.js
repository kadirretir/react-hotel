import React, {useContext} from 'react'
import  {HotelsContext}  from '../contexts/HotelsContext';
import { FaCheck } from 'react-icons/fa';
import Footer from '../components/Footer';
import '../css/singleRoom.scss';


function SingleRoom({match}) {
    const hotelContext = useContext(HotelsContext);
      

    return (
        <React.Fragment>
        {hotelContext.myHotel.filter(filterHotel => filterHotel.title.replace(/\s+/g, '').includes(match.params.id)).map((singleHotel) => ( 
                 <React.Fragment key={singleHotel.id}>
                 <section id="singleRoom"   style={{backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7)),url(${singleHotel.hotel_img})`}}>
                        <div className="container">
                        <div className="hero-content">
                                <h1>{singleHotel.title} sizleri bekliyor!</h1>
                                <h3>Antalya'nın gözde otelleri!</h3>
                            <a href="#features"> <button>Rezervasyon Yap</button></a> 
                        </div>
        
                      </div>  
                  </section>

                    <section id="features">
                        <div className="container">
                            <div className="img-row">
                        {singleHotel.hotel_room_img.map((item, index) => {
                                return (
                                   
                                    
                                  <a key={index} href={item}><img src={item} width="400" height="300" alt="singleHotel" /></a>
                                   
                                        
                                   
                                );
                            })}
                            </div>

                            <div className="singleRoom-details-left">
                              
                                    <h2>Otel Hakkında</h2>
                                    <p>
                                   {singleHotel.luks 
                                   ? `Bu tür otellerin odalarında ve hizmetlerinde büyük bir lüks mevcuttur. 
                                   Tatil yaparken sonsuz bir konfor ve hizmet arayanlar bu tür otelleri tercih ederler. 
                                   Odalar genellikle bir ev niteliğinde ve lüks eşyalarla dizayn edilmiştir.
                                    Çalışanlar müşterilerine karşı ekstra bir özen göstermekte ve “ultra lüks” 
                                    kavramının hakkı verilmektedir. Genellikle üst düzey müşterilere hizmet eden
                                     bu tür işletmeler, ücret bakımından diğer otellere göre biraz daha pahalıdır.
                                      Ancak tüm hizmetler bu oteller kapsamında bulunabilmektedir. `
                                   : `Herkes 5 yıldızlı devasa otellerde tatil yapmak istemez.
                                   Özellikle düşük bütçeli tatiller için bulunmaz bir fırsat olarak 
                                   değerlendirilen butik otellerdir. Bu otellerde de gereken konfor 
                                   sağlanmıştır. Bu otellerde de 5 yıldızlı otellerdeki gibi kapasiteli
                                    ve konforlu odalar bulunmaktadır. En az 10 odalıdırlar ve çalışanları 
                                    ile adeta aile ortamı oluşturulmuştur. Bu tür oteller de tatiller için
                                     sıklıkla tercih edilen konseptler arasındadır.`} 
                                    </p>
                                   
                                </div>
                                    <div className="singleRoom-details-right">
                                   
                                    <h2>Otel Özellikleri</h2>
                                    <ul>
                                        <li><span>Otel Türü: </span><b>{singleHotel.luks ? "Ultra Lüks Hotel" : "Butik Hotel"}</b></li>
                                        <li><span>Toplam Kapasitesi: </span><b>{singleHotel.maxCapacity} Oda</b></li>
                                        <li><span>Ücretsiz Kahvaltı: </span><b>{singleHotel.breakfast ? "Mevcut" : "Mevcut Değil"}</b></li>
                                        <li><span>Müsait Oda Sayısı: </span><b>{singleHotel.avaibleRoom} Oda</b></li>
                                        <li><span></span><b>{singleHotel.beach ? "Otel sahil kenarında" : "Sahili yok"}</b></li>
                                    </ul>
                                
                                    </div>
                              
                            

                            <div className="singleRoom-extras">
                                 <b>{singleHotel.freeotopark ? <><FaCheck/>Ücretsiz Otopark </>: null}</b>
                                 <b>{singleHotel.pool ? <><FaCheck/>Havuz </> : null}</b>
                                 <b>{singleHotel.wifi ? <><FaCheck/>Wi-Fi </> : null}</b>
                                 <b>{singleHotel.gym ? <><FaCheck/>GYM </> : null}</b>
                                 <b>{singleHotel.minigolf ? <><FaCheck/>Mini Golf </> : null}</b>
                            </div>
                        </div>
                    </section>
                   
                </React.Fragment>
                
        ))}
        
        <Footer/>
         
        </React.Fragment>

    )
}

export default SingleRoom
