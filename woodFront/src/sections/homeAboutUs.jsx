import '../styles/sections/homeAboutUs.css'


const HomeAboutUs = () => {
    return (
        <div className="home-about-us-section default-padding section image-background">
            <div className="content-container">
                <div className="presentation-wrapper default-margin float-left">
                    <div className="about-us-wrapper small-margin">
                        <div className="title">
                            About us
                        </div>
                        <div className="about-us-text main-text">
                        BIO CWT  - We manufacture solid wood products according to individual drawings. We make chairs, armchairs, wardrobes, beds and much more in our own workshop, equipped with all the necessary industrial equipment.
                        </div>
                    </div>
                    <div className="about-us-images-wrapper small-margin">
                        <div className="about-us-image-wrapper">
                            <img src="about-us.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeAboutUs