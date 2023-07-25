import React from 'react'
import './Favorite.css'
import { Link } from 'react-router-dom'
import MenuNavbar from './MenuNavbar';
import Footer from '../Footer/Footer';
import GreenArea from '../Green Area/GreenArea';
import Header from '../Header/Header';
function Favorite() {
  return (
    <div className="favorite-all">
      <div className="home-header">
        <Header />
        <MenuNavbar />
      </div>
      <div className="container">
        <div className='favorite'>
          <h3>Favorite Products</h3>
          <img src="https://www.starbucks.com/weblx/images/fav-tapes.png" alt="" />
          <h4>Save your favorite mixes</h4>
          <p>Use the heart to save customizations. Your favorites will appear here to order again.</p>
          <Link to="/signin" id='signin'>Sign in</Link>
          <Link id='joinnow' to='/create' >Join now</Link>
        </div>
      </div>
      <div className="border"></div>
      <div className="menu-footer">
        <Footer />
      </div>
      <div className="green-area">
        <GreenArea />
      </div>
    </div>
  )
}

export default Favorite