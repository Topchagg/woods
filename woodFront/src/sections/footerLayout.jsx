import { Link } from 'react-router-dom'

import '../styles/sections/footerLayout.css'

const Footer = () => {
    return (
        <footer className="footer default-background">
            <div className="total-info-wrapper default-padding content-container">
                <div className="logo-wrapper">
                    <Link><img src="logo.png" alt="" /></Link>
                </div>
                <div className="phone-info-wrapper main-text flex-container">
                    <div className="logo-wrapper">
                        <img src="phone.svg" alt="" />
                    </div>
                    <Link><div className="main-text phone-numb ml-text">+420 000 000 000</div></Link>
                </div>
                <div className="location-info-wrapper flex-container">
                    <div className="logo-wrapper">
                        <img src="geo.svg" alt="" />
                    </div>
                    <Link><div className="main-text ml-text">Na Plzeňce 1166/0<br/> 150 00</div></Link>
                </div>
            </div>
            <div className="privacy-wrapper main-text content-container">
                Privacy policy
            </div>
        </footer>
    )
}

export default Footer