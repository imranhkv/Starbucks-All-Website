import React from 'react'
import { Link } from 'react-router-dom'
import './Previous.css'
import MenuNavbar from './MenuNavbar';
import Footer from '../Footer/Footer';
import GreenArea from '../Green Area/GreenArea';
import Header from '../Header/Header';

function Previous() {
  return (
    <div className="previous-all">
      <div className="home-header">
        <Header />
        <MenuNavbar />
      </div>
      <div className="container">
        <div className='previous'>
          <h3>Previous Orders</h3>
          <img src="https://www.starbucks.com/weblx/images/moon-phases.gif" alt="" />
          <h4>When history repeats itself</h4>
          <p>Previous orders will appear here to quickly order again.</p>
          <Link to="signin" id='signin'>Sign in</Link>
          <Link id='joinnow' >Join now</Link>
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

export default Previous