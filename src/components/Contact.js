import React from 'react'
import '../css/contact.scss';

function Contact() {
    return (
        <section id="contact">
            <div className="container">
                <h2>Bizimle İletişime Geçin</h2>
            <form >
                <input type="text" id="fname" name="firstname" placeholder="Adınız.." />
                <input type="email" id="email" name="lastname" placeholder="E-mail adresiniz.." />
                <select id="country" name="country">
                <option>Seç...</option>
                <option value="australia">İstanbul</option>
                <option value="canada">İzmir</option>
                <option value="usa">Manisa</option>
                </select>

                <textarea id="subject" name="subject" rows="8" placeholder="Mesajınızı yazın..."></textarea>

                <input type="submit" value="Gönder" />
            </form>
            </div>
        </section>
    )
}

export default Contact
