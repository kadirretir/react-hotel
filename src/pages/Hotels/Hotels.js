import { useContext, useState, useEffect } from 'react'
import { HotelsContext } from '../../contexts/HotelsContext';
import { Link } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';
import SearchBar from '../../components/SearchBar/SearchBar';
import HotelsScss from './hotels.module.scss';


function Hotels() {
    const hotelContext = useContext(HotelsContext);
    const { myHotel } = hotelContext;

    const [newHotel, setNewHotel] = useState([]);
    const [handleCheck, setHandleCheck] = useState(false);

    const handleChange = (e) => {
        setHandleCheck({ ...handleCheck, [e.target.name]: e.target.checked })
    }

    useEffect(() => {
        function filterbyName(value) {
            if (handleCheck !== false) {
                let filterKeys = ['breakfast', 'luks', 'freeotopark', 'pool', 'wifi', 'gym', 'bar', 'beach', 'minigolf'];

                return filterKeys.every(function (key) {
                    return !handleCheck[key] || value[key];
                });
            } else {
                return value
            }
        }

        setNewHotel(
            myHotel.filter(filterbyName)
        )
    }, [handleCheck, myHotel])

    return (
        <>
            <section id={HotelsScss.hotels_hero}>
                <div className={HotelsScss.container}>
                    <div className={HotelsScss.hero_content}>
                        <h1>Antalya'nın dört bir yanında tatil keyfi!</h1>
                        <h3>En iyi otellerimizi keşfedin</h3>
                        <a href="#hotels" className={HotelsScss.scroll}> <button>Rezervasyon Yap</button></a>
                    </div>
                </div>
            </section>

            <section id={HotelsScss.hotels}>
                <div className={HotelsScss.container}>
                    <div className={HotelsScss.search_title}>
                        <h1>DİLEĞİNİZE GÖRE ARAYIN...</h1>
                        <span>Tatilin tadını çıkarın</span>
                    </div>

                    <SearchBar
                        myHotel={myHotel}
                        handleCheck={handleCheck}
                        handleChange={handleChange}
                    />

                    <div className={HotelsScss.row}>
                        {newHotel.map((hotel, i) => {
                            return (
                                <div className={HotelsScss.card} key={i} data-category={`${hotel.avaibleRoom} Oda Mevcut`}>
                                    <figure className={HotelsScss.img_wrapper}>
                                        <img src={hotel.hotel_img} height="249" width="361" alt="hotelimages" />
                                    </figure>
                                    <div className={HotelsScss.img_text}>
                                        <div className={HotelsScss.middle}>
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
            </section>
        </>
    )
}

export default Hotels

