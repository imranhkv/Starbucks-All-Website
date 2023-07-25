import React from 'react';
import "./Featured.css";
import { Link } from 'react-router-dom';
import Footer2 from '../Footer/Footer2';
import Header2 from '../Header/Header2';


function Featured() {
  return (
    <div className='featured'>
      <div className="featured-header">
        <Header2 />
      </div>
      <div className="container-px">
      <div className="featured-top-head">
            <h2>Yum in the sun</h2>
          </div>
        <div className="photos-area-wrapper-featured">       
          <div className="photos-area-featured">
            <div className="content-featured">
              <div className="content-text-featured">
                <h2>New Frozen Lemonade Starbucks Refreshers® Beverages</h2>
                <p>Strawberry Açaí, Pineapple Passionfruit and Mango Dragonfruit with real fruit pieces blended with lemonade.</p>
                <Link to="/menu">Order Now</Link>
              </div>
              <div className="content-img-signin">
                <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-84460.jpg" alt="" />
              </div>
            </div>
            <div className="content-featured">
              <div className="content-img-signin">
                <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-84461.jpg" alt="" />
              </div>
              <div className="content-img-signin">
                <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-84462.jpg" alt="" />
              </div>
            </div>
            <div className="content-featured">
              <div className="content-img-signin">
                <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-84463.jpg" alt="" />
              </div>
              <div className="content-text-featured">
                <h2>Chocolate Cream Cold Brew</h2>
                <p>Chocolaty cold foam tops our super-smooth cold brew with notes of vanilla.</p>
                <Link to="/menu">Order Now</Link>
              </div>
            </div>
            <div className="content-featured">
              <div className="content-img-signin">
                <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-84528.jpg" alt="" />
              </div>
              <div className="content-img-signin">
                <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-84529.jpg" alt="" />
              </div>
            </div>
            <div className="content-featured">
              <div className="content-text-featured">
                <h2>A New Blend Created by Our Baristas</h2>
                <p>Introducing Starbucks® Green Apron Blend™, from those who know our coffee best.
                  Enjoy its honeybell orange and graham cracker notes hot or over ice—just like our baristas do.</p>
                <Link to="/menu">Order Now</Link>
              </div>
              <div className="content-img-signin">
                <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-84465.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="information-area-featured">
          *Impossible is a trademark of Impossible Foods Inc. Used under license.
        </div>
      </div>
      <div className="border"></div>
      <div className="featured-footer">
        <Footer2 />
      </div>
    </div>
  )
}

export default Featured;
