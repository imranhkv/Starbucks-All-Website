import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./Karusel.css"
import { Link } from 'react-router-dom';

function KaruselWork() {
    const giftCards = [
        {
            id: 28,
            imageUrl: 'https://globalassets.starbucks.com/assets/a60a85c6d4c14c3f9fed83f1ff1a2993.jpg',
        },
        {
            id: 29,
            imageUrl: 'https://globalassets.starbucks.com/assets/030cdc65712a4cb3b9a58483de6799b3.jpg',
        },
        {
            id: 30,
            imageUrl: 'https://globalassets.starbucks.com/assets/1c47ac4f6e914144b8d6a2e3489f316e.jpg',
        },
        {
            id: 31,
            imageUrl: 'https://globalassets.starbucks.com/assets/28ae9dd37eee4f828627bd584b49f9f0.jpg',
        },
        {
            id: 32,
            imageUrl: 'https://globalassets.starbucks.com/assets/974d46ec17774cb1bafa313d1db92bbf.jpg',
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

export default KaruselWork