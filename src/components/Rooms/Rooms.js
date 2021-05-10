import React, { useContext } from 'react'
import { HotelsContext } from '../../contexts/HotelsContext';
import { Link } from 'react-router-dom';
import RoomsScss from './rooms.module.scss';

function Rooms() {
    const hotelContext = useContext(HotelsContext);

    return (
        <section id={RoomsScss.rooms}>
            <div className={RoomsScss.container}>
                <div className={RoomsScss.content_header}>
                    <h1>ODANIZI TUTUN</h1>
                    <span>Tatilin tadını çıkarın...</span>
                </div>
                
                <div className={RoomsScss.row}>
                    {hotelContext.myRooms.map((room) => {
                        return (
                            <div className={RoomsScss.card} key={room.id} data-category={room.luks ? "Lüks" : "Standart"}>
                                <figure className={RoomsScss.img_wrapper}>
                                    <img src={room.room_img} height="249" width="361" alt="hotelimages" />
                                </figure>
                                <div className={RoomsScss.img_text}>
                                    <div className={RoomsScss.middle}>
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
