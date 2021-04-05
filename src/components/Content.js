import React, { useContext } from 'react'
import  {HotelsContext}  from '../contexts/HotelsContext';
import Slide from 'react-reveal/Slide';
import { FaCheck } from 'react-icons/fa';
import '../css/contents.scss';

function Content() {
    const hotelContext = useContext(HotelsContext);

    return (
        <main id="main">
            <div className="container">
            <Slide duration={900} left>
            <div className="content-header">
                <h1>ŞİMDİ KEŞFEDİN</h1>
                <span>Tatilin tadını çıkarın...</span>
            </div>
                <div className="row">
                    {hotelContext.myHotel.map((hotel) => {
                        return (
                            
                            <div className="card" data-category={`${hotel.avaibleRoom} Oda Mevcut`}>
                                <figure className="img-wrapper"> 
                                <img src={hotel.hotel_img} alt="hotelimages" />
                                </figure>
                                <div className="img-text">
                                  <div className="middle">
                                   <h2>{hotel.title}</h2>
                                   <p>{`Haftalık Aile ile Konaklama/$${hotel.price}`}</p>
                                   <button>Rezervasyon Yap</button>
                                   </div>
                                   <h3><FaCheck/>{hotel.family ? "Aile için uygun" : "Gençlere özel fırsatlar"}</h3>
                                </div>
                
                            </div>
                            
                        )

                    })}
                 
                </div>
                </Slide>
            </div>
        </main>
    )
}

export default Content
