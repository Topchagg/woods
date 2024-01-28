import { Link } from "react-router-dom"

import '../styles/components/woodProduct.css'

const WoodProduct = (props) => {

    return (
        <Link to={`wood-product/${props.slug}`}>
            <div style={{backgroundImage: `url(${props.img})`}} className="wood-product-wrapper default-margin">
                
            </div>  
        </Link>
    )
}

export default WoodProduct