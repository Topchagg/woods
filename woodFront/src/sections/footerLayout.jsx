import Adress from '../components/adress'
import PhoneNumb from '../components/numbPhone'

import { Link } from 'react-router-dom'

import '../styles/sections/footerLayout.css'

const Footer = () => {
    return (
        <footer className="footer default-background">
            <div className="total-info-wrapper default-padding content-container">
                <div className="logo-wrapper">
                    <Link to={'/'}><img src="logo.png" alt="" /></Link>
                </div>
                <PhoneNumb/>
                <Adress/>
            </div>
            <div className="privacy-wrapper main-text content-container">
                Privacy policy
            </div>
        </footer>
    )
}

export default Footer