import React, { useContext } from 'react'
import  {HotelsContext}  from '../contexts/HotelsContext';
import {Link} from 'react-router-dom';
import {FaCheck} from 'react-icons/fa';
import '../css/contents.scss';

function Content() {
    const hotelContext = useContext(HotelsContext);
    const {myHotel} = hotelContext;

    return (
       <>
             <main id="main">
     
                  <div className="container">
                    <div className="content-header">
                        <h1>ŞİMDİ KEŞFEDİN</h1>
                        <span>Tatilin tadını çıkarın...</span>
                    </div>  

                    <div className="row">

                        {myHotel.map((hotel, i) => {
                            return (

                                <div className="card" key={i} data-category={`${hotel.avaibleRoom} Oda Mevcut`}>
                                    <figure className="img-wrapper">
                                        <img src={hotel.hotel_img} alt="hotelimages" />
                                    </figure>
                                    <div className="img-text">
                                        <div className="middle">
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
