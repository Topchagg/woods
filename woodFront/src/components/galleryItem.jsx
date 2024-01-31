
import Button from './button'

import '../styles/components/GalleryItem.css'

const GalleryItem = (props) => {

    const isAdmin = true
    
    return (
        <div className="product-item-wrapper">
            <div className="admin-panel-wrapper">
                <div className="btn-wrapper">
                    <Button text={'Delete'}/>
                </div>
                <div className="btn-wrapper">
                    <Button text={'Update'}/>
                </div>
            </div>
            <div className="img-wrapper">
                <img className='img' src={'./kitchen.png'} alt=""/>
            </div>
            <div className="info-item-wrapper">
                <div className="main-text text-center">
                    {props.name}
                </div>
                {props?.price && 
                <div className="main-text text-center">
                    {props.price} $
                </div>
            }
            </div>
        </div>
    )
}

export default GalleryItem

