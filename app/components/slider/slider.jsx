import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};

const SliderComponent = ({ children }) => {
    return (
        <Slider {...settings}>
            {children}
        </Slider>
    );
};

export default SliderComponent;
