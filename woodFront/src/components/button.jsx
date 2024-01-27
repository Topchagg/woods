import { Link } from "react-router-dom"

import '../styles/components/button.css'

const Button = (props) => {
    return (
        <Link to={props.link}>
            <button className="btn main-text">
                {props.text}  
            </button>
        </Link>
    )
}

export default Button