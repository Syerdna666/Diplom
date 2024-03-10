import React from 'react';
import Slider from "../../components/Slider/Slider";

import photo_11 from '../../assets/Travel_images/11.JPG';
import photo_22 from '../../assets/Travel_images/22.JPG';
import photo_33 from '../../assets/Travel_images/33.JPG';
import photo_44 from '../../assets/Travel_images/44.JPG';
import photo_55 from '../../assets/Travel_images/55.JPG';
import photo_66 from '../../assets/Travel_images/66.JPG';
import photo_77 from '../../assets/Travel_images/77.JPG';
import photo_88 from '../../assets/Travel_images/88.JPG';
import photo_99 from '../../assets/Travel_images/99.jpg';
import photo_100 from '../../assets/Travel_images/100.JPG';


const Travel = () => {
    return (
        <div className="pages">
            <Slider />
            <section class="container">
                <article class="article">
                    <div class="portfolio-content">
                        <figure class="portfolio-content__item portfolio-content__item--1">
                            <a href="insta_tizenharom"><img src={photo_11} class="portfolio-content__img" alt="text_1" /></a>
                        </figure>
                        <figure class="portfolio-content__item portfolio-content__item--2">
                            <a href="insta_tizenharom"><img src={photo_22} class="portfolio-content__img" alt="text_2" /></a>
                        </figure>
                        <figure class="portfolio-content__item portfolio-content__item--3">
                            <a href="insta_tizenharom"><img src={photo_33} class="portfolio-content__img" alt="text_3" /></a>
                        </figure>
                        <figure class="portfolio-content__item portfolio-content__item--4">
                            <a href="insta_tizenharom"><img src={photo_44} class="portfolio-content__img" alt="text_4" /></a>
                        </figure>
                        <figure class="portfolio-content__item portfolio-content__item--5">
                            <a href="insta_tizenharom"><img src={photo_55} class="portfolio-content__img" alt="text_5" /></a>
                        </figure>
                        <figure class="portfolio-content__item portfolio-content__item--6">
                            <a href="insta_tizenharom"><img src={photo_66} class="portfolio-content__img" alt="text_6" /></a>
                        </figure>
                        <figure class="portfolio-content__item portfolio-content__item--7">
                            <a href="insta_tizenharom"><img src={photo_77} class="portfolio-content__img" alt="text_7" /></a>
                        </figure>
                        <figure class="portfolio-content__item portfolio-content__item--8">
                            <a href="insta_tizenharom"><img src={photo_88} class="portfolio-content__img" alt="text_8" /></a>
                        </figure>
                        <figure class="portfolio-content__item portfolio-content__item--9">
                            <a href="insta_tizenharom"><img src={photo_99} class="portfolio-content__img" alt="text_9" /></a>
                        </figure>
                        <figure class="portfolio-content__item portfolio-content__item--10">
                            <a href="insta_tizenharom"><img src={photo_100} class="portfolio-content__img" alt="text_10" /></a>
                        </figure>
                    </div>
                </article>
            </section >
        </div>
    );
}

export default Travel;