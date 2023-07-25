import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./Karusel.css"
import { Link } from 'react-router-dom';

function KaruselBirthday() {
    const giftCards = [
        {
            id: 10,
            imageUrl: 'https://globalassets.starbucks.com/assets/b3c8d0d8a3bc48b18d570b382af46c20.jpg',
        },
        {
            id:11,
            imageUrl: 'https://globalassets.starbucks.com/assets/086f127933b1492c9b6311e77d32f6ba.jpg',
        },
        {
            id: 12,
            imageUrl: 'https://globalassets.starbucks.com/assets/025674328bc54e35a4ba0988875e6e5b.jpg',
        },
        {
            id: 13,
            imageUrl: 'https://globalassets.starbucks.com/assets/45f1c4ed8dac426ea31d09bc4296771c.jpg',
        },
        {
            id: 14,
            imageUrl: 'https://globalassets.starbucks.com/assets/196581be9eda4e4cb0c3b33ac3241ea7.jpg',
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

export default KaruselBirthday
