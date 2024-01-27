import { Link } from "react-scroll"
import { motion } from "framer-motion"

const ChoiceBlock = (props) => {


    return (
        <Link to={props.path}>
            <motion.div initial={{opacity:0, scale:0}} animate={{opacity:1,scale:1}} transition={{duration:0.4}}>
                <div className="title text-center choice-block-text">
                    {props.title}
                </div>
            </motion.div>
        </Link>
    )
}

export default ChoiceBlock