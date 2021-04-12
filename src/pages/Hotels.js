import { useContext, useState, useEffect } from 'react'
import { HotelsContext } from '../contexts/HotelsContext';
import { Link } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';
import SearchBar from '../components/SearchBar';
import Footer from '../components/Footer';
import '../css/hotels.scss';


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

            {/* HERO  */}
            <section id="hotels-hero">

                <div className="container">
                    <div className="hero-content">
                        <h1>Antalya'nın dört bir yanında tatil keyfi!</h1>
                        <h3>En iyi otellerimizi keşfedin</h3>
                        <a href="#hotels" className="scroll"> <button>Rezervasyon Yap</button></a>
                    </div>

                </div>
            </section>

            <section id="hotels">

                {/* CONTENT  */}

                <div className="container">
                      <div className="search-title">
                        <h1>DİLEĞİNİZE GÖRE ARAYIN...</h1>
                        <span>Tatilin tadını çıkarın</span>
                         </div>  

                         <SearchBar
                            myHotel={myHotel}
                            handleCheck={handleCheck}
                            handleChange={handleChange}
                        />
     
                    <div className="row">

                        {newHotel.map((hotel, i) => {

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
            </section>

            <Footer />
        </>
    )
}

export default Hotels

