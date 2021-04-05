import React from 'react'
import Slide from 'react-reveal/Slide';
import '../css/offer.scss';

function Offer() {
    return (
        <section id="offer" >
            <div className="container"> 
               <Slide duration={800} top>
                <div className="offer-wrapper">
                            <h2>Dünyadaki Cennet</h2>
                            <p>Antalya, Akdeniz’in suları eşliğinde uzanan plajları,
                                 altın renginde güneşi, dağları, yemyeşil bitki örtüsü, 
                                 tarihi güzellikleri, zengin kültürü ve hareketli şehir 
                                 hayatı ile tam anlamıyla Türkiye’nin turizm cennetidir.
                            </p>
                            <button>Tekliften yararlan</button>
                </div>
                </Slide>
            </div>   
        </section>
    )
}

export default Offer
