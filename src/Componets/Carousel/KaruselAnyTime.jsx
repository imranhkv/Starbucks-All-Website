import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./Karusel.css"
import { Link } from 'react-router-dom';

function KaruselAnyTime() {
    const giftCards = [
        {
            id: 33,
            imageUrl: 'https://globalassets.starbucks.com/assets/92a2acfde0d74350bae518afe9928fea.jpg',
        },
        {
            id: 34,
            imageUrl: 'https://globalassets.starbucks.com/assets/538d70aafcd640e8a336b1e81db0f5ad.jpg',
        },
        {
            id: 35,
            imageUrl: 'https://globalassets.starbucks.com/assets/a224b9727cb44ea4822b459d3faa0ced.jpg',
        },
        {
            id: 36,
            imageUrl: 'https://globalassets.starbucks.com/assets/bb5003220b16472c8efd7c1968edb836.jpg',
        },
        {
            id: 33,
            imageUrl: 'https://globalassets.starbucks.com/assets/92a2acfde0d74350bae518afe9928fea.jpg',
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

export default KaruselAnyTime
