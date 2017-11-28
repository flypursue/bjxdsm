import React from 'react';
import { Carousel } from 'antd';

export default class Slider extends React.Component {
    render() {
        const { items = [] } = this.props;
        const settings = {
            dots: false,
            arrows: false,
            adaptiveHeight: true,
            useCSS: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            pauseOnHover: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        autoplay: false,
                    }
                }
            ]

        };
        return (
            <Carousel className="carousel" {...settings}>
                {items.map(({ name, src }, index) =>
                    <div className="item" key={index}>
                        <div className="item-wrapper">
                            <img src={src} />
                            <div className="intro">{name}</div>
                        </div>
                    </div>
                )}
            </Carousel>
        );
    }
};