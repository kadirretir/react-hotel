import React, { useContext } from 'react'
import { HotelsContext } from '../../contexts/HotelsContext';
import { MdDoNotDisturbAlt } from 'react-icons/md'
import { FaCheck } from 'react-icons/fa'
import BookRoomScss from './bookroom.module.scss';

function BookRoom({ match }) {
    const hotelContext = useContext(HotelsContext);

    return (
        <>
            {hotelContext.myRooms.filter(filterRooms => filterRooms.title.replace(/\s+/g, '').includes(match.params.id)).map((singleRooms) => (
                <React.Fragment key={singleRooms.id}>
                    <section id={BookRoomScss.bookroom} style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7)),url(${singleRooms.room_img})`}}>
                        <div className={BookRoomScss.container}>
                            <div className={BookRoomScss.hero_content}>
                                <h1>{singleRooms.title} sizleri bekliyor!</h1>
                                <h3>Antalya'nın gözde otelleri!</h3>
                                <a href="#room_features"> <button>Rezervasyon Yap</button></a>
                            </div>
                        </div>
                    </section>

                    <section id={BookRoomScss.room_features}>
                        <div className={BookRoomScss.container}>
                            <div className={BookRoomScss.img_row}>
                                {singleRooms.img_rooms.map((item, index) => {
                                    return (
                                        <a key={index} href={item}>
                                            <img src={item} width="400" height="300" alt="singleRooms" />
                                        </a>
                                    );
                                })}
                            </div>

                            <div className={BookRoomScss.singleroom_details_left}>
                                <h2 className={BookRoomScss.bookroom_header}>{singleRooms.title} Odaları Hakkında </h2>
                                <p>
                                    Sizin için özenle dekore edilmiş otel odalarımız ve evlerimiz,
                                    kısa ve uzun süreli konaklamalarda en iyi adrestir.
                                    Antalya'nın en gözde sahil şeridi Konyaaltı bölgesinde
                                   denize yürüme mesafesinde bulunan {singleRooms.title}; iş, tatil,
                                   alışveriş amaçlı seyahatleriniz için en uygun lokasyondadır.
                                   Bütün odalarımızda lokal telefon, elektronik kasa, parke zemin,
                                     french veya twin bed, banyo, WC ve saç kurutma
                                     makinesi mevcuttur.
                                    </p>
                            </div>

                            <div className={BookRoomScss.singleroom_details_right}>
                                <h2 className={BookRoomScss.bookroom_header}>Oda Özellikleri</h2>
                                <ul>
                                    <li><span>Klima: </span><b>{singleRooms.airing ? "Mevcut" : "Yok"}</b></li>
                                    <li><span>Özel Plaj: </span><b>{singleRooms.privatebeach ? "Mevcut" : "Yok"}</b></li>
                                    <li><span>Ek Banyo </span><b>{singleRooms.additionalbath ? "Mevcut" : "Yok"}</b></li>
                                    <li><span>Oda Servisi: </span><b>{singleRooms.roomservice ? "Mevcut" : "Yok"}</b></li>
                                    <li><span>İç içe odalar: </span><b>{singleRooms.nestedrooms ? "Mevcut" : "Yok"}</b></li>
                                    <li><span>Buz Dolabı:  </span><b>{singleRooms.fridge ? "Mevcut" : "Yok"}</b></li>
                                    <li><span>LCD LED Tv: </span><b>{singleRooms.television ? "Mevcut" : "Yok"}</b></li>
                                    <li><span>Mini Bar: </span><b>{singleRooms.minibar ? "Mevcut" : "Yok"}</b></li>
                                </ul>
                            </div>

                            <div className={BookRoomScss.singleroom_extras}>
                                <b>{singleRooms.cigarette ? <><FaCheck />Sigara </> : <><MdDoNotDisturbAlt />Sigara </>}</b>
                                <b>{singleRooms.pets ? <><FaCheck />Evcil Hayvan </> : <><MdDoNotDisturbAlt />Evcil Hayvan </>}</b>
                            </div>
                        </div>
                    </section>
                </React.Fragment>
            ))}
        </>
    )
}

export default BookRoom
