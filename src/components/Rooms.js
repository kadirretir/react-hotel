import React, { useContext } from 'react'
import { HotelsContext } from '../contexts/HotelsContext';
import {Link} from 'react-router-dom';
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
                {hotelContext.myRooms.map((room) => {
                    return (
                        
                        <div className="card" key={room.id} data-category={room.luks ? "Lüks" : "Standart"}>
                            <figure className="img-wrapper"> 
                            <img src={room.room_img} alt="hotelimages" />
                            </figure>
                            <div className="img-text">
                              <div className="middle">
                               <h2>{room.title}</h2>
                               <p>{`Haftalık Aile ile Konaklama/$${room.price}`}</p>
                               <Link to={`/hotels/room/${room.title.replace(/\s+/g, '')}`}><button>Rezervasyon Yap</button></Link> 
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
