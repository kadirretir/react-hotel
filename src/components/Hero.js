import React from 'react'
import Slide from 'react-reveal/Slide';

function Hero() {

    return (
        <section id="hero">


            <div className="container">
                <div className="hero-content">
                    <Slide
                        duration={800}
                        left>
                        <h1>Türkiye'nin en prestijli Otelleri sizleri bekliyor!</h1>
                    </Slide>
                    <Slide duration={700}
                        right>
                        <h3>En iyi otellerimizi keşfedin</h3>
                    </Slide>

                  <a href="#main"> <button>Rezervasyon Yap</button></a> 
                </div>

            </div>
        </section>
    )
}




export default Hero
