import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./Karusel.css"
import { Link } from 'react-router-dom';

function KaruselThankYou() {
    const giftCards = [
        {
            id: 15,
            imageUrl: 'https://globalassets.starbucks.com/assets/1bf45b972317492c9a3762a67885a354.jpg',
        },
        {
            id: 16,
            imageUrl: 'https://globalassets.starbucks.com/assets/8c34f576af314654956200e08429e9bd.jpg',
        },
        {
            id: 17,
            imageUrl: 'https://globalassets.starbucks.com/assets/6e34062e14484b66a5604c57340103ba.jpg',
        },
        {
            id: 18,
            imageUrl: 'https://globalassets.starbucks.com/assets/a8fa33a190374fe69bf1de429a03053a.jpg',
        },
        {
            id: 19,
            imageUrl: 'https://globalassets.starbucks.com/assets/f8167a08eaab4d2197729d2967caedad.jpg',
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

export default KaruselThankYou
