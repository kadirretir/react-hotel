import React from 'react'
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaWhatsappSquare } from 'react-icons/fa'
import {Link} from 'react-router-dom';
import '../css/footer.scss';

function Footer() {
    return (
        <footer id="footer">
            <div className="container">
                <div className="footer-left middle">
                    <div id="logo"><Link to="/">HOTELS</Link></div>
                    <p>İklimi, sunduğu özgün lezzetleri, sıcakkanlı yöre halkı ve konforlu tesisleriyle Çeşme,
                    son yılların en popüler tatil noktalarından biri. Temiz doğası, berrak denizi
                    ve muhteşem manzaralarıyla turistlerin gönlünü de fetheden Çeşme'yi görmek için
                    her mevsim gidebilirsiniz.
                    

                        Tüm bu özelliklerinin yanı sıra plajları ve renkli gece hayatı da ziyaretçilerine
                        keyifli bir tatil sunuyor.
                    </p>
                   
                </div>

                <div className="footer-right middle">
                    <h3>Bizi Takip Edin</h3>
                    <div className="socials">
                        <a href="#/"><FaFacebookSquare size={45} /></a>
                        <a href="#/"><FaInstagramSquare size={45}  /></a>
                        <a href="#/"><FaTwitterSquare size={45} /></a>
                        <a href="#/"><FaWhatsappSquare size={45} /></a>
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer
