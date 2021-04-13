import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import '../css/app.scss';

function Header() {
     const [stickyHeader, setStickyHeader] = useState(false);

    const headerSet = () => {
        if(window.pageYOffset > 0) {
            setStickyHeader(true)
        } else setStickyHeader(false)
    }

    useEffect(() => {
        window.addEventListener("scroll", headerSet);
        console.log("çalıştı")
    }, [])

        
    return (
         <div id="header"  className={stickyHeader ? "stickyStyle" : null} >
             <div className="container">
                <div className={stickyHeader ? "logo stickyLogo" : "logo"}>
                    <h1>
                        <Link to="/">HOTELS</Link>
                    </h1>
                </div>
                <nav>
                    <ul>
                    
                        <li><Link to="/" className={stickyHeader ? "nav-links stickyMenu" : "nav-links"}>Anasayfa</Link></li>
                        <li><Link to="/hotels" className={stickyHeader ? "nav-links stickyMenu" : "nav-links"}>Otellerimiz</Link></li>
                        <li><Link to="/about" className={stickyHeader ? "nav-links stickyMenu" : "nav-links"}>Hakkımızda</Link></li>
                      
                    </ul>

                </nav>
            </div> 
        </div> 
      
    )
}

export default Header
