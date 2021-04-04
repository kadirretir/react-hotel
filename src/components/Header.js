import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import '../css/app.css';

function Header() {
    const [stickyHeader, setStickyHeader] = useState(false);

    const headerSet = () => {
        if(window.pageYOffset > 0) {
            setStickyHeader(true)
        } else setStickyHeader(false)
    }

    useEffect(() => {
        window.addEventListener("scroll", headerSet)

        return () => 
        window.removeEventListener("scroll", headerSet)
    }, [])

    return (
        <div id="header" className={stickyHeader ? "stickyStyle" : null}>
            <div className="container">
                <div id="logo">
                    <h1>
                        <Link to="/">HOTELS</Link>
                    </h1>
                </div>
                <nav>
                    <ul>
                        <li><Link to="/" className="nav-links">Anasayfa</Link></li>
                        <li><Link to="/about" className="nav-links">Hakkımızda</Link></li>
                        <li><Link to="hotels" className="nav-links">Otellerimiz</Link></li>
                        <li><Link to="contact" className="nav-links">İletişim</Link></li>
                    </ul>

                </nav>
            </div>
        </div>

    )
}

export default Header
