import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';





const Carousel = (props) => {

    const settings = {
        // dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
    }

    return (
        <Slider {...settings}>
            {props.data.map((object, index) => (
                <props.Component key={index} {...object} />
            ))}
        </Slider>
    )
}

export default Carousel