import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './Slider.scss'

import slider1 from '../../assets/Homepage/slider1.jpg';
import slider2 from '../../assets/Homepage/slider2.jpg';
import slider3 from '../../assets/Homepage/slider3.jpg';
import slider4 from '../../assets/Homepage/slider4.jpg';



const propreties = {
    duration: 8500,
    arrows: false,
    pauseOnHover: false,
    transitionDuration: 1500
};

function Slider() {
    return (
        <>
            <div className="slide-container"></div>
            <Fade {...propreties}>
                <div className="each-fade">
                    <img src={slider1} alt='slide' />
                </div>
                <div className="each-fade">
                    <img src={slider2} alt='slide' />
                </div>
                <div className="each-fade">
                    <img src={slider3} alt='slide' />
                </div>
                <div className="each-fade">
                    <img src={slider4} alt='slide' />
                </div>
            </Fade>
        </>
    );

}

export default Slider