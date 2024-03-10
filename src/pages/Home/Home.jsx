import React from 'react';
import Slider from '../../components/Slider/Slider';
import './Home.css'


const Home = () => {
    return (
        <div className='pages'>
            <Slider />
            <div className='home_bottom_content'>
                <section>
                    <div className='home_bottom_text'>© Julia Pashkova 2024</div>
                    <div className='home_bottom_links'>
                        <a href="/imprint">
                            <span className='home_bottom_link'>Imprint</span>
                        </a>
                        <a href="/privacy_police">
                            <span className='home_bottom_link'>Privacy Police</span>
                        </a>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Home;