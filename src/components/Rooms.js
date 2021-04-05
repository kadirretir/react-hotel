import React, { useContext } from 'react'
import { HotelsContext } from '../contexts/HotelsContext';
import '../css/rooms.scss';
import Slide from 'react-reveal/Slide';
function Rooms() {

    const hotelContext = useContext(HotelsContext);
   
    return (
        <section id="rooms">
        <div className="container">
        <Slide duration={900} right>
        <div className="content-header">
            <h1>ODANIZI TUTUN</h1>
            <span>Tatilin tadını çıkarın...</span>
        </div>
            <div className="row">
                {hotelContext.myRooms.map((hotel) => {
                    return (
                        
                        <div className="card" data-category={hotel.family ? "Aile için uygun" : "Gençlere özel fırsatlar"}>
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
            </Slide>     
        </div>  
    </section>
    )
}

export default Rooms
