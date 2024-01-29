
import '../styles/components/GalleryItem.css'

const GalleryItem = (props) => {
    
    return (
        <div className="product-item-wrapper">
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

