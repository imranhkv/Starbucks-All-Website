import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./Karusel.css"
import { Link } from 'react-router-dom';

function KaruselGraduation() {
    const giftCards = [
        {
            id: 24,
            imageUrl: 'https://globalassets.starbucks.com/assets/32722580ebbd483db9d1b7c82fc85fd8.jpg',
        },
        {
            id: 25,
            imageUrl: 'https://globalassets.starbucks.com/assets/b03526f820e94d0282d02fbb2e978707.jpg',
        },
        {
            id: 26,
            imageUrl: 'https://globalassets.starbucks.com/assets/42588c5832f145d5aff6469fe0a6ecb6.jpg',
        },
        {
            id: 27,
            imageUrl: 'https://globalassets.starbucks.com/assets/fc7d4cb9e0594398b00bfe133a02fad1.jpg',
        },
        {
            id: 24,
            imageUrl: 'https://globalassets.starbucks.com/assets/32722580ebbd483db9d1b7c82fc85fd8.jpg',
        }
        
        
        
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

export default KaruselGraduation
