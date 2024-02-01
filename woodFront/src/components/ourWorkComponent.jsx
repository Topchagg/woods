import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

import ChoiceBlock from './choiceBlock'

import '../styles/components/ourWork.css'


const OurWorkComponent = (props) => {

    const [isHover, setIsHover] = useState(false)

    return (
        <Link to={'/products'}>
            <div className="our-work-wrapper">
                <div style={{backgroundImage: `url('${props.workImg}')`}} className="our-work-img-wrapper" onMouseEnter={() => setIsHover(!isHover)} onMouseLeave={() => setIsHover(!isHover)}>
                <AnimatePresence>
                    {isHover && <motion.div exit={{opacity:0}} transition={{duration:0.4}} className='product-choice'>
                            <ChoiceBlock title={props.woodName} />
                            <ChoiceBlock title={props.woodName}/>
                        </motion.div>}
                </AnimatePresence>
                </div>
            </div>
        </Link>
    )
}

export default  OurWorkComponent