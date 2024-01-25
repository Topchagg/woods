import PhoneNumb from '../components/numbPhone'
import Adress from '../components/adress'

import '../styles/sections/contact.css'

const ContactSection = () => {
    return (
        <div className='contact-section section default-background'>
            <div className="title-info">
                <div className="title">
                    CONTACT
                </div>
                <div className="info-wrapper">
                    <div className="item-wrapper small-margin">
                        <PhoneNumb/>
                    </div>
                    <div className="item-wrapper small-margin">
                        <Adress/>
                    </div>
                </div>
            </div>
            <div className="map-wrapper">
                <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21166.599847027734!2d35.05704893117056!3d48.45988752689387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe3f9aa35a07d%3A0x4f008f86dfa3a7e8!2z0J3QsNCx0LXRgNC10LbQvdCw0Y8g0JTQvdC10L_RgNCw!5e0!3m2!1sru!2sde!4v1706103653033!5m2!1sru!2sde"></iframe> 
            </div>
        </div>
    )
}

export default ContactSection