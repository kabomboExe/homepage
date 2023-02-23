import React from 'react';
import "./BA.css";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import numberOfBAImg from '../data/ba-pic-list';

const BA = () => {
    const list = numberOfBAImg();

    return <div className='container'>
        <div className='carousel'>
        <Carousel  showArrows={true}>
            {list.map(
                (item, index) =>
                    <div className='carousel-item'>
                        <img src={item} alt={index}>
                        </img>
                        <p className='legend'>test</p>
                    </div>
            )}
        </Carousel>
        </div>
    </div>;
}

export default BA;