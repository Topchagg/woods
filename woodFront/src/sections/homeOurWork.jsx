import OurWorkComponent from '../components/ourWorkComponent'
import Carousel from '../components/carousel'

const HomeOurWork = () => {
    return (
        <div className="section default-background">
            <div className="content-container">
                <div className="example-our-work section-margin">
                    <div className="title text-center">
                        Our Work
                    </div>
                    <div className="carousel-wrapper default-margin">
                        <Carousel Component={OurWorkComponent} data={
                            [{workImg:'./kitchen.png',
                            woodName:'Oak',
                            slug:'/'},
                            {workImg:'./kitchen.png',
                            woodName:'Oak',
                            slug:'/'}]
                            } />
                    </div>
                </div>
            </div>  
        </div>
    )
}

export default HomeOurWork