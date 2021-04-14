import React from 'react'
import Footer from '../components/Footer';
import '../css/about.scss';

function About() {
    return (
        <>
            <section id="about-hero">
                <div className="container">
                    <div className="main-hero-content">
                        <h1>Otellerimiz Hakkında Bilgi Edinin</h1>
                        <h3>En iyi otellerimizi keşfedin</h3>
                        <a href="#about" className="scroll"> <button>Daha Fazla</button></a>
                    </div>

                </div>
            </section>

            <section id="about">
                <div className="container">
                    <h1 className="about-header">Beach Resort Antalya</h1>

                    <div className="about-left">
                        <h2>Biz Neredeyiz?</h2>
                        <p className="paragraf">Tesisimiz, Antalya şehir merkezine 10 km. 
                            Havaalanına ise 10 Km uzaklıkta Denize 
                            200 metre Hotel+Yol(patika yol)+Deniz mesafede 
                            yer almaktadır. Her 5 dakikada, otel yakınından 
                             şehir merkezine ve Lara plajlarına dolmuşla ulaşım
                              imkânı bulunmaktadır. En yakın Hastane (Anadolu 1 KM)
                                Terracity alışveriş merkezine 5 km uzaklıktadır.</p>
                    </div>

                    <div className="about-right">
                        <h2>Hizmetlerimiz</h2>
                        <p className="paragraf">Otelimizin tüm departmaları 2013’de yenilenmiştir. 
                            Türk Hamamı, Sauna, Buhar odası , yüzme Havuzu, 
                            çocuk Yüzme Havuzu, Restaurant , Wireless ( kablosuz )
                             internet bağlantısı (tüm otel odaları), split klima mevcuttur.</p>
                    </div>

                    <div className="about-bottom">
                        <div className="about-bottom-wrapper">
                            <h2>Hakkımızda</h2>
                        <p className="paragraf">Türk turizminin başkenti Antalya’daki otelimiz, 
                            Akdenizin inci mavisi deniz ve Düden şelalesi 
                            manazaralı odaları, konukseverliği, güleryüzlü 
                            personeli ve konforu ile tatilinizi yeni boyutlara
                             taşıyor. Keyifle zaman geçirilecek sosyal alanları
                              ve muhteşem lezzetleri ile özel bir tatil deneyimi yaşatır.</p>
                        </div>
              
                    </div>
                </div>

            </section>

            <Footer/>
        </>
    )
}

export default About
