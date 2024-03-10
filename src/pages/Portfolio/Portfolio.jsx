import React from 'react';
import './Portfolio.css';
import Slider from "../../components/Slider/Slider";

import photo_1 from '../../assets/Portfolio_images/1.jpg';
import photo_2 from '../../assets/Portfolio_images/2.jpg';
import photo_3 from '../../assets/Portfolio_images/3.jpg';
import photo_4 from '../../assets/Portfolio_images/4.jpg';
import photo_5 from '../../assets/Portfolio_images/5.jpg';
import photo_6 from '../../assets/Portfolio_images/6.jpg';
import photo_7 from '../../assets/Portfolio_images/7.jpg';
import photo_8 from '../../assets/Portfolio_images/8.jpg';
import photo_9 from '../../assets/Portfolio_images/9.jpg';
import photo_10 from '../../assets/Portfolio_images/10.jpg';


const Portfolio = () => {
    return (
        <div className="pages">
            <Slider />
            <section class="container">
                <article class="article">
                    <div class="portfolio-content">
                        <figure class="portfolio-content__item portfolio-content__item--1">
                            <a href="insta_tizenharom"><img src={photo_1} class="portfolio-content__img" alt="text_1" /></a>
                        </figure>
                        <figure class="portfolio-content__item portfolio-content__item--2">
                            <a href="insta_tizenharom"><img src={photo_2} class="portfolio-content__img" alt="text_2" /></a>
                        </figure>
                        <figure class="portfolio-content__item portfolio-content__item--3">
                            <a href="insta_tizenharom"><img src={photo_3} class="portfolio-content__img" alt="text_3" /></a>
                        </figure>
                        <figure class="portfolio-content__item portfolio-content__item--4">
                            <a href="insta_tizenharom"><img src={photo_4} class="portfolio-content__img" alt="text_4" /></a>
                        </figure>
                        <figure class="portfolio-content__item portfolio-content__item--5">
                            <a href="insta_tizenharom"><img src={photo_5} class="portfolio-content__img" alt="text_5" /></a>
                        </figure>
                        <figure class="portfolio-content__item portfolio-content__item--6">
                            <a href="insta_tizenharom"><img src={photo_6} class="portfolio-content__img" alt="text_6" /></a>
                        </figure>
                        <figure class="portfolio-content__item portfolio-content__item--7">
                            <a href="insta_tizenharom"><img src={photo_7} class="portfolio-content__img" alt="text_7" /></a>
                        </figure>
                        <figure class="portfolio-content__item portfolio-content__item--8">
                            <a href="insta_tizenharom"><img src={photo_8} class="portfolio-content__img" alt="text_8" /></a>
                        </figure>
                        <figure class="portfolio-content__item portfolio-content__item--9">
                            <a href="insta_tizenharom"><img src={photo_9} class="portfolio-content__img" alt="text_9" /></a>
                        </figure>
                        <figure class="portfolio-content__item portfolio-content__item--10">
                            <a href="insta_tizenharom"><img src={photo_10} class="portfolio-content__img" alt="text_10" /></a>
                        </figure>
                    </div>
                </article>
            </section >
        </div >
    );
}

export default Portfolio;