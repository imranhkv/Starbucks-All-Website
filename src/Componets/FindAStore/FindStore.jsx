import React from 'react';
// import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import "./FindStore.css";

function FindStore() {
  return (
    <div>
      <div className="findastore-header">
        <Header />
      </div>
      <div className="findastore-area">
        <div>
          <div className="findastore-area-all" style={{ height: "100vh" }}>
            <div className="findastore-area-left">
              <div>
                <div className="findastore-area-left-content">
                  {/* <Link to="/gift">  <i className="fa-solid fa-angle-left"></i>Gift Cards</Link> */}
                  <div className="findastore-text">
                    <label htmlFor="findastore-input" className='findastore-input'>
                      <input type="text" placeholder='Find a store' />
                      <button><i className="fa-sharp fa-solid fa-magnifying-glass"></i></button>
                    </label>
                    <h3>We are unable to access your exact location</h3>
                    <p>To find a Starbucks store, use the search feature, navigate using the map, or turn on location services.</p>
                  </div>
                  <div className="findastore-links">
                    <Link to="https://www.starbucks.com/terms/privacy-policy/">Privacy Notice <i className="fa-solid fa-arrow-up-right-from-square"></i></Link>
                    <Link to="https://www.starbucks.com/terms/starbucks-terms-of-use/" >Terms of Use  <i className="fa-solid fa-arrow-up-right-from-square"></i></Link>
                    <Link to="https://www.starbucks.com/personal-information">Do Not Share My Personal Information  <i className="fa-solid fa-arrow-up-right-from-square"></i></Link>
                    <h3></h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="findastore-area-right">
              <div>
                <div className="findastore-area-right-content">
                  <div className="findastore-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26556054.636838097!2d-116.963
                79955983025!3d35.65961724347113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432
                360b%3A0x1c3bb99243deb742!2zQW1lcmlrYSBCaXJsyZnFn21pxZ8gxZ50YXRsYXLEsQ!5e0!3m2!1saz!2saz!4v16874
                47525073!5m2!1saz!2saz" width="100%" height="100%" style={{ border: "0" }} allowfullscreen={true} loading="lazy"></iframe>
                
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="findstore-footer">
        <Footer />
      </div> */}
    </div>
  );
}

export default FindStore;
