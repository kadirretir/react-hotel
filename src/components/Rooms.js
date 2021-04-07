import React, { useContext } from 'react'
import { HotelsContext } from '../contexts/HotelsContext';
import '../css/rooms.scss';
function Rooms() {

    const hotelContext = useContext(HotelsContext);
   
    return (
        <section id="rooms">
        <div className="container">
        <div className="content-header">
            <h1>ODANIZI TUTUN</h1>
            <span>Tatilin tadını çıkarın...</span>
        </div>
            <div className="row">
                {hotelContext.myRooms.map((hotel, i) => {
                    return (
                        
                        <div className="card" key={i} data-category={hotel.family ? "Aile için uygun" : "Gençlere özel fırsatlar"}>
                            <figure className="img-wrapper"> 
                            <img src={hotel.room_img} alt="hotelimages" />
                            </figure>
                            <div className="img-text">
                              <div className="middle">
                               <h2>{hotel.title}</h2>
                               <p>{`Haftalık Aile ile Konaklama/$${hotel.price}`}</p>
                               <button>Rezervasyon Yap</button>
                               </div>
                            </div>
            
                        </div>
                        
                    )

                })}
             
            </div>
               
        </div>  
    </section>
    )
}

export default Rooms
