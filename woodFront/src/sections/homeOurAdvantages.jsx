import { Link as ScrollLink} from 'react-scroll';

import Button from "../components/button"

import '../styles/sections/homeOurAdvantages.css'

const HomeOurAdvantages = () => {
    return (
        <div className="section default-background">
            <div className="content-container">
               <div className="our-advantages-wrapper section-margin">
                    <div className="title text-center">
                        advantages workin` with us
                    </div>
                    <div className="about-advantages default-margin">
                        <div className="advantages-img-wrapper">
                            <img className="img" src="video.png" alt="" />
                        </div>
                        <div className="advantages-wrapper">
                            <div className="advantages-item main-text">
                                In-house carpentry production
                            </div>
                            <div className="advantages-item main-text">
                                We only treat wood with environmentally friendly and safe products
                            </div>
                            <div className="advantages-item main-text">
                                Prices from the manufacturer, no extra charges
                            </div>
                        </div>
                    </div>
                    <div className="default-margin center-btn">
                        <ScrollLink to={'message-form'} smooth={true} duration={500}><Button text={'Take conslut'}/></ScrollLink>
                    </div>
               </div>
            </div>
        </div>
    )
}

export default HomeOurAdvantages