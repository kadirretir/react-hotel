import React, { useContext } from 'react'
import { HotelsContext } from '../../contexts/HotelsContext';
import { Link } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';
import  ContentScss from './contents.module.scss';

function Content() {
    const hotelContext = useContext(HotelsContext);
    const { myHotel } = hotelContext;

    return (
        <>
            <main id={ContentScss.main}>
                <div className={ContentScss.container}>
                    <div className={ContentScss.content_header}>
                        <h1>ŞİMDİ KEŞFEDİN</h1>
                        <span>Tatilin tadını çıkarın...</span>
                    </div>

                    <div className={ContentScss.row}>
                        {myHotel.map((hotel, i) => {
                            return (
                                <div className={ContentScss.card} key={i} data-category={`${hotel.avaibleRoom} Oda Mevcut`}>
                                    <figure className={ContentScss.img_wrapper}>
                                        <img src={hotel.hotel_img} height="249" width="361" alt="hotelimages" />
                                    </figure>
                                    <div className={ContentScss.img_text}>
                                        <div className={ContentScss.middle}>
                                            <h2>{hotel.title}</h2>
                                            <p>{`Haftalık Aile ile Konaklama/$${hotel.price}`}</p>
                                            <Link to={`/hotels/${hotel.title.replace(/\s+/g, '')}`}><button>Gezin</button></Link>
                                        </div>
                                        <h3><FaCheck />{hotel.luks ? "Ultra Lüks" : "Butik Otel"}</h3>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </main>
        </>
    )
}

export default Content
