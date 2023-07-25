import React, { useEffect } from 'react'
import Karusel from '../Carousel/Karusel'
import "./Gift.css"
import { Link } from 'react-router-dom'
import KaruselBirthday from '../Carousel/KaruselBirthday'
import KaruselThankYou from '../Carousel/KaruselThankYou'
import KaruselCelebration from '../Carousel/KaruselCelebration'
import KaruselGraduation from '../Carousel/KaruselGraduation'
import KaruselWork from '../Carousel/KaruselWork'
import KaruselAnyTime from '../Carousel/KaruselAnyTime'
import ContractImg from '../img/bulk-gift-cards.jpg'
import Footer from '../Footer/Footer';
import Header from '../Header/Header';


function GiftCards() {
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='giftcards'>
      <div className="gift-header">
        <Header />
      </div>
      <div className="container-gift">
        <h3>Featured</h3>
        <Karusel />
      </div>
      <div className="gotgiftcard">
        <div className="gotgiftcard-left">
          <h3>Got a gift card?</h3>
          <p>Earns 2★ per $1</p>
          <Link id='addreload' >Add or reload</Link>
          <Link id='checkbalance'>Check Balance</Link>
        </div>
        <div className="gotgiftcard-right">
          <a href="https://www.starbucks.com/terms/manage-gift-cards/">Card Terms & Conditions <i className="fa-solid fa-arrow-up-right-from-square"></i> </a>
        </div>
      </div>
      <div className="container-gift">
        <div className="sliders-area">
          <h3>BIRTHDAY</h3>
          <KaruselBirthday />
          <h3>THANK YOU</h3>
          <KaruselThankYou />
          <h3>CELEBRATION</h3>
          <KaruselCelebration />
          <h3>GRADUATION</h3>
          <KaruselGraduation />
          <h3>WORKPLACE</h3>
          <KaruselWork />
          <h3>ANYTIME</h3>
          <KaruselAnyTime />
        </div>
      </div>
      <div className="giftcardsinbulk">
        <div className="container-gift">
          <div className="giftcardsinbulk-content">
            <div className="inbulk-left">
              <img src={ContractImg} alt="img" />
            </div>
            <div className="inbulk-right">
              <h3>Gift Cards in Bulk</h3>
              <p>There’s an easier way to buy Starbucks Cards in bulk! Give a Starbucks Card to gift, reward,
                incentivize, or show appreciation towards your customers, clients and team members.</p>
              <Link id='inbulk-button' to="https://www.starbuckscardb2b.com/s/" target='_blank' >Shop Now</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="support-area">
        <div className="container-gift">
          <div className="support-area-content">
            <h3>GIFT CARD SUPPORT</h3>
            <p>Use the links below to manage eGifts you have sent or received,
              or view our full Card Terms & Conditions.</p>
            <div className="support-buttons">
              <Link>eGift Support</Link>
              <Link>See Terms & Conditions</Link>
              <Link>eGift FAQ's</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="gift-footer">
        <Footer />
      </div>
    </div>
  )
}

export default GiftCards