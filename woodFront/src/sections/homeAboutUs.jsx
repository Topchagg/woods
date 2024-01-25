import { delay, motion } from 'framer-motion'

import '../styles/sections/homeAboutUs.css'


const HomeAboutUs = () => {
    return (
        <div className="section default-background">
            <div className="home-about-us-section default-padding section image-background first-section">
                <div className="content-container">
                    <motion.div initial={{y:-1600,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:1}} className="presentation-wrapper default-margin float-left">
                        <div className="about-us-wrapper small-margin">
                            <motion.div className="title" initial={{x:-1600,opacity:0}} animate={{x:0,opacity:1}} transition={{delay:1,duration:0.3}} >
                                About us
                            </motion.div>
                            <motion.div className="about-us-text main-text" initial={{y:600,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:1.3,duration:0.5}}>
                            BIO CWT  - We manufacture solid wood products according to individual drawings. We make chairs, armchairs, wardrobes, beds and much more in our own workshop, equipped with all the necessary industrial equipment.
                            </motion.div>
                        </div>
                        <motion.div className="about-us-images-wrapper small-margin" initial={{x:600,opacity:0}} animate={{x:0,opacity:1}} transition={{delay:1, duration:0.5}}>
                            <div className="about-us-image-wrapper">
                                <img src="about-us.png" alt="" />
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default HomeAboutUs