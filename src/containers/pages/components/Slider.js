import React from 'react';
import { Carousel } from 'antd';

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
export default class Slider extends React.Component {
    render() {
        const { items = [], isSingle } = this.props;
        let customSettings = settings;
        if (isSingle) {
            customSettings = { ...customSettings, fade: true, slidesToShow: 1 };
        }
        return (
            <Carousel className="carousel" {...customSettings}>
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