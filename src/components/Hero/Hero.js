import React from 'react'
import HeroScss from './hero.module.scss';

function Hero() {
    return (
        <section id={HeroScss.hero}>
            <div className={HeroScss.container}>
                <div className={HeroScss.main_hero_content}>
                    <h1>Türkiye'nin en prestijli Otelleri sizleri bekliyor!</h1>
                    <h3>En iyi otellerimizi keşfedin</h3>
                    <a href="#main" className={HeroScss.scroll}><button>Rezervasyon Yap</button></a>
                </div>
            </div>
        </section>
    )
}

export default Hero
