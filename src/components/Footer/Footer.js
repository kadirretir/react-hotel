import React from 'react'
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaWhatsappSquare } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import FooterScss from './footer.module.scss';

function Footer() {
    return (
        <footer id={FooterScss.footer}>
            <div className={FooterScss.container}>
                <div className={`${FooterScss.footer_left} ${FooterScss.middle}`}>
                    <div id={FooterScss.logo}><Link to="/">HOTELS</Link></div>
                    <p>İklimi, sunduğu özgün lezzetleri, sıcakkanlı yöre halkı ve konforlu tesisleriyle Çeşme,
                    son yılların en popüler tatil noktalarından biri. Temiz doğası, berrak denizi
                    ve muhteşem manzaralarıyla turistlerin gönlünü de fetheden Çeşme'yi görmek için
                    her mevsim gidebilirsiniz.

                    Tüm bu özelliklerinin yanı sıra plajları ve renkli gece hayatı da ziyaretçilerine
                    keyifli bir tatil sunuyor.
                    </p>

                </div>

                <div className={`${FooterScss.footer_right} ${FooterScss.middle}`}>
                    <h3>Bizi Takip Edin</h3>
                    <div className={FooterScss.socials}>
                        <a href="#/"><FaFacebookSquare size={45} /></a>
                        <a href="#/"><FaInstagramSquare size={45} /></a>
                        <a href="#/"><FaTwitterSquare size={45} /></a>
                        <a href="#/"><FaWhatsappSquare size={45} /></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
