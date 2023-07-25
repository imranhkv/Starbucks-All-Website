import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./Karusel.css"
import { Link } from 'react-router-dom';

function Karusel() {
    const giftCards = [
        {
            id: 1,
            imageUrl: 'https://globalassets.starbucks.com/assets/4515bc9fbeb64e8b93e8e61209105524.jpg',
        },
        {
            id: 2,
            imageUrl: 'https://globalassets.starbucks.com/assets/79d535d930cb48f683b6a14e9c73780f.jpg',
        },
        {
            id: 3,
            imageUrl: 'https://globalassets.starbucks.com/assets/e59a52bdd19448be9096d788b85a5d2f.jpg',
        },
        {
            id: 4,
            imageUrl: 'https://globalassets.starbucks.com/assets/32722580ebbd483db9d1b7c82fc85fd8.jpg',
        },
        {
            id: 5,
            imageUrl: 'https://globalassets.starbucks.com/assets/b03526f820e94d0282d02fbb2e978707.jpg',
        },
        {
            id: 6,
            imageUrl: 'https://globalassets.starbucks.com/assets/7ad856a8cbdd4fbeb0119695a8d5b843.jpg',
        },
        {
            id: 7,
            imageUrl: 'https://globalassets.starbucks.com/assets/32f58432cfb942be89c492397604b8ef.jpg',
        },
        {
            id: 8,
            imageUrl: 'https://globalassets.starbucks.com/assets/1bf45b972317492c9a3762a67885a354.jpg',
        },
        {
            id: 9,
            imageUrl: 'https://globalassets.starbucks.com/assets/8c34f576af314654956200e08429e9bd.jpg',
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

export default Karusel
