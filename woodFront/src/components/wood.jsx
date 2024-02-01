import '../styles/components/wood.css'

const Wood = (props) => {
    return (
        <div className="product-example-wrapper">
            <div className="img-wood-wrapper">
                <img className='wood-img' src="oak.png" alt="" />
            </div>
            <div className="name-wrapper main-text">
                <strong>{props.name}</strong>
            </div>
            <div className="main-charcs main-text">
                
            </div>
        </div>
    )
}

export default Wood