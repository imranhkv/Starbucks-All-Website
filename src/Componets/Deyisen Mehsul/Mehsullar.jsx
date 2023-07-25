import React, { useState } from 'react';
import './Mehsullar.css';

function Mehsullar() {
    const [selectedCard, setSelectedCard] = useState(0);

    const handleButtonClick = (index) => {
        setSelectedCard(index);
    };

    return (
        <div className='coffee-products'>
            <div className="coffee-products-head">
                <h3>Get your favorites for free</h3>
                <div className="coffee-products-buttons">
                    <a className={selectedCard === 0 ? "active" : ""}><button onClick={() => handleButtonClick(0)}>25<span>★</span></button></a>
                    <a className={selectedCard === 1 ? "active" : ""}><button onClick={() => handleButtonClick(1)}>100<span>★</span></button></a>
                    <a className={selectedCard === 2 ? "active" : ""}><button onClick={() => handleButtonClick(2)}>200<span>★</span></button></a>
                    <a className={selectedCard === 3 ? "active" : ""}><button onClick={() => handleButtonClick(3)}>300<span>★</span></button></a>
                    <a className={selectedCard === 4 ? "active" : ""}><button onClick={() => handleButtonClick(4)}>400<span>★</span></button></a>
            </div>
            </div>
            <div className="coffee-products-bottom">
                <div className="coffee-products-content">
                    {selectedCard === 0 && (
                        <div className="coffee-products-content-card">
                            <div className="coffee-products-content-img">
                                <img src="https://www.starbucks.com/weblx/images/rewards/reward-tiers/025.png" alt="" />
                            </div>
                            <div className="coffee-products-content-text">
                                <h4>Customize your drink</h4>
                                <p>Make your drink just right with an extra espresso shot,
                                    nondairy milk or a dash of your favorite syrup.</p>
                            </div>
                        </div>
                    )}
                    {selectedCard === 1 && (
                        <div className="coffee-products-content-card">
                            <div className="coffee-products-content-img">
                                <img src="https://www.starbucks.com/weblx/images/rewards/reward-tiers/100.png" alt="" />
                            </div>
                            <div className="coffee-products-content-text">
                                <h4>Brewed hot or iced coffee or tea, bakery item, packaged snack and more</h4>
                                <p>Treat yourself to an iced coffee, buttery croissant, bag of chips and more.</p>
                            </div>
                        </div>
                    )}
                    {selectedCard === 2 && (
                        <div className="coffee-products-content-card">
                            <div className="coffee-products-content-img">
                                <img src="https://www.starbucks.com/weblx/images/rewards/reward-tiers/200.png" alt="" />
                            </div>
                            <div className="coffee-products-content-text">
                                <h4>Handcrafted drink (Cold Brew, lattes and more) or hot breakfast</h4>
                                <p>Turn good mornings great with a delicious handcrafted drink of your choice,
                                    breakfast sandwich or oatmeal on us.</p>
                            </div>
                        </div>
                    )}
                    {selectedCard === 3 && (
                        <div className="coffee-products-content-card">
                            <div className="coffee-products-content-img">
                                <img src="https://www.starbucks.com/weblx/images/rewards/reward-tiers/300.png" alt="" />
                            </div>
                            <div className="coffee-products-content-text">
                                <h4>Sandwich, protein box or at-home coffee</h4>
                                <p>Enjoy a PM pick-me-up with a lunch sandwich, protein box or a bag of
                                    coffee—including Starbucks VIA Instant®.</p>
                            </div>
                        </div>
                    )}
                    {selectedCard === 4 && (
                        <div className="coffee-products-content-card">
                            <div className="coffee-products-content-img">
                                <img src="https://www.starbucks.com/weblx/images/rewards/reward-tiers/400.png" alt="" />
                            </div>
                            <div className="coffee-products-content-text">
                                <h4>Select Starbucks® merchandise</h4>
                                <p>Take home a signature cup, drink tumbler or your choice of coffee merch up to $20.</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Mehsullar;



