import '../styles/components/ProductExample.css'

const ProductExample = (props) => {
    return (
        <div className="product-example">
            <div className="img-wood-wrapper">
                <img className='wood-img' src="oak.png" alt="" />
            </div>
            <div className="name-wrapper main-text">
                <strong>{props.name}</strong>
            </div>
            <div className="main-charcs main-text">
                <p>Expensive</p>
                <p>Durability</p>
                <p>Texture</p>
                <p>Other</p>
            </div>
        </div>
    )
}

export default ProductExample