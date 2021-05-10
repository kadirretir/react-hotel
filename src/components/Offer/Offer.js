import React from 'react'
import OfferScss from './offer.module.scss';

function Offer() {
    return (
        <section id={OfferScss.offer}>
            <div className={OfferScss.container}>
                <div className={OfferScss.offer_wrapper}>
                    <h2 className={OfferScss.offer_header}>Dünyadaki Cennet</h2>
                    <p>Antalya, Akdeniz’in suları eşliğinde uzanan plajları,
                    altın renginde güneşi, dağları, yemyeşil bitki örtüsü,
                    tarihi güzellikleri, zengin kültürü ve hareketli şehir
                    hayatı ile tam anlamıyla Türkiye’nin turizm cennetidir.
                            </p>
                    <button>Tekliften yararlan</button>
                </div>
            </div>
        </section>
    )
}

export default Offer
