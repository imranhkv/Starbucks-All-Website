import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./Karusel.css"
import { Link } from 'react-router-dom';

function KaruselCelebration() {
    const giftCards = [
        {
            id: 20,
            imageUrl: 'https://globalassets.starbucks.com/assets/e59a52bdd19448be9096d788b85a5d2f.jpg',
        },
        {
            id: 21,
            imageUrl: 'https://globalassets.starbucks.com/assets/02cc779eadaf4a1891efdc9908eefb89.jpg',
        },
        {
            id: 22,
            imageUrl: 'https://globalassets.starbucks.com/assets/7ad856a8cbdd4fbeb0119695a8d5b843.jpg',
        },
        {
            id: 23,
            imageUrl: 'https://globalassets.starbucks.com/assets/fc7d4cb9e0594398b00bfe133a02fad1.jpg',
        },
        {
            id: 20,
            imageUrl: 'https://globalassets.starbucks.com/assets/e59a52bdd19448be9096d788b85a5d2f.jpg',
        },
        
    ];

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 4,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
            slidesToSlide: 3,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1,
        },
    };

    return (
        <div className="karusel">
            <Carousel
                responsive={responsive}
                customTransition="transform 800ms ease-in-out"
                containerClass="carousel-container"
                itemClass="carousel-item"
            >
                {giftCards.map((giftCard) => (
                    <div key={giftCard.id} className='carousel-card'>
                        <Link to={`/giftcard/${giftCard.id}`}>
                            <img src={giftCard.imageUrl} alt={giftCard.title} />
                        </Link>
                    </div>
                ))}
            </Carousel>
        </div >
    );
};

export default KaruselCelebration
