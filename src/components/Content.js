import React, { useContext } from 'react'
import { HotelsContext } from '../contexts/HotelsContext';
import Bounce from 'react-reveal/Bounce';

function Content() {
    const hotelContext = useContext(HotelsContext);

    return (
        <main id="main">
            <div className="container">
            <Bounce left>
            <div className="content-header">
                <h1>ŞİMDİ KEŞFET</h1>
                <span>Tatilin tadını çıkarın...</span>
            </div>
                <div className="row">
                    {hotelContext.myHotel.map((hotel) => {
                        return (
                            
                            <div className="card">
                                <figure className="img-wrapper"> 
                                <img src={hotel.hotel_img} alt="hotelimages" />
                                </figure>
                                <div className="img-text">
                                  <div className="middle">
                                   <h2>{hotel.title}</h2>
                                   <p>{`Haftalık Aile ile Konaklama/$${hotel.price}`}</p>
                                   <button>Rezervasyon Yap</button>
                                   <h3>{}</h3>
                                   </div>
                                </div>
                
                            </div>
                            
                        )

                    })}
                 
                </div>
                </Bounce>
            </div>
        </main>
    )
}

export default Content
