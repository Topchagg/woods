import Button from '../components/button'

import '../styles/sections/homeOpenSection.css'

const HomeOpenSection = () => {
    return (
    <div className="home-open-section section image-background default-padding">
        <div className="content-container">
            <div className="presentation-wrapper default-margin ">
                <div className="info-wrapper">
                    <div className="info-title title">
                        SOLID WOOD PRODUCTS
                    </div>
                    <div className="product-info main-text">
                        Oak, beech, ash from <strong>1700 CZK</strong> per m3
                    </div>
                    <div className="open-section-btn-wrapper">
                        <Button text={'order'} link={''} />
                    </div>
                </div>
                <div className="line-wrapper">
                    <img src="line.png" alt="" />
                </div>
                <div className="example-works-wrapper">

                </div>
            </div>
        </div>
    </div>
    )
}

export default HomeOpenSection 