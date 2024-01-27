import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import ChoiceBlock from './choiceBlock'

import '../styles/components/ourWork.css'


const OurWorkComponent = (props) => {

    const [isHover, setIsHover] = useState(false)

    return (
        <div className="our-work-wrapper">
            <div style={{backgroundImage: `url('${'./kitchen.png'}')`}} className="our-work-img-wrapper" onMouseEnter={() => setIsHover(!isHover)} onMouseLeave={() => setIsHover(!isHover)}>
            <AnimatePresence>
                {isHover && <motion.div exit={{opacity:0}} transition={{duration:0.4}} className='product-choice'>
                        <ChoiceBlock path={props.path} title={props.woodName} />
                        <ChoiceBlock path={props.path} title={props.woodName}/>
                    </motion.div>}
            </AnimatePresence>
            </div>
        </div>
    )
}

export default  OurWorkComponent