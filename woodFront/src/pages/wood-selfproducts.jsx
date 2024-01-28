import { Link } from 'react-router-dom'

import '../styles/pages/woodSelfProducts.css'

const WoodSelfProducts = () => {
    return (
        <div className="wood-selfproducts-wrapper default-background flex-container default-padding">
            <div className="choice-wood-wrapper choice-wrapper">
               <Link to={'/woods'}>
                    <img className='img' src="./kitchen.png" alt="" />     
                    <div className="main-text text-center">
                            Woods
                    </div>
               </Link>
            </div>
            <div className="choice-selfproducts-wrapper choice-wrapper">
                <Link to={'/products'}>
                    <img className='img' src="./kitchen.png" alt="" />
                    <div className="main-text text-center">
                        Products
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default WoodSelfProducts