import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import HeaderScss from './header.module.scss';

function Header() {
    const [stickyHeader, setStickyHeader] = useState(false);
    // IF SCROLLTOP IS GREATER THAN 0, THEN CHANGE THE STICKY HEADER TO TRUE (ADD STICKYMENU CLASSNAME)
    const headerSet = () => {
        if (window.pageYOffset > 0) {
            setStickyHeader(true)
        } else setStickyHeader(false)
    }

    useEffect(() => {
        window.addEventListener("scroll", headerSet);
    }, [])

    return (
        <div id={HeaderScss.header} className={stickyHeader ? `${HeaderScss.stickyStyle}` : null} >
            <div className={HeaderScss.container}>
                <div className={stickyHeader ? `${HeaderScss.logo} ${HeaderScss.stickyLogo}` : `${HeaderScss.logo}`}>
                    <h1>
                        <Link to="/">HOTELS</Link>
                    </h1>
                </div>

                <nav>
                    <ul>
                        <li><Link to="/" className={stickyHeader ? `${HeaderScss.nav_links} ${HeaderScss.stickyMenu}` : `${HeaderScss.nav_links}`}>Anasayfa</Link></li>
                        <li><Link to="/hotels" className={stickyHeader ? `${HeaderScss.nav_links} ${HeaderScss.stickyMenu}` : `${HeaderScss.nav_links}`}>Otellerimiz</Link></li>
                        <li><Link to="/about" className={stickyHeader ? `${HeaderScss.nav_links} ${HeaderScss.stickyMenu}` : `${HeaderScss.nav_links}`}>Hakkımızda</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header
