import { motion } from 'framer-motion'

import Carousel from '../components/carousel.jsx'
import Button from '../components/button'
import WoodProduct from '../components/woodProduct.jsx'

import '../styles/sections/homeOpenSection.css'

const HomeOpenSection = () => {
    return (
    <div className="home-open-section section image-background default-padding">
        <div className="content-container">
            <motion.div className="presentation-wrapper default-margin" initial={{x:-1600, opacity:0}} animate={{x:0, opacity:1}} transition={{duration:0.7}} >
                <div className="info-wrapper small-margin">
                    <motion.div className="info-title title" initial={{x:-1600,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:1}} >
                        SOLID WOOD PRODUCTS
                    </motion.div>
                    <motion.div className="product-info main-text" initial={{y:600,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.5, delay:0.7}}>
                        Oak, beech, ash from <strong>1700 CZK</strong> per m3
                    </motion.div>
                    <motion.div initial={{y:600, opacity:0}} animate={{y:0,opacity:1}} transition={{delay:1, transition:0.5}} className="open-section-btn-wrapper small-margin">
                        <Button text={'Order'} link={''} />
                    </motion.div>
                </div>
                <motion.div initial={{y:-1000,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:1.3}} className="line-wrapper small-margin">
                    <img src="line.png" alt="" />
                </motion.div>
                <div className="example-works-wrapper carousel-wrapper">
                    <Carousel Component={WoodProduct}data={
                            [{img:'./table.png',
                            woodName:'Oak',
                            slug:'/'},
                            {img:'./table.png',
                            woodName:'Oak',
                            slug:'/'}]
                            }/>
                </div>
            </motion.div>
        </div>
    </div>
    )
}

export default HomeOpenSection 