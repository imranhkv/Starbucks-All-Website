import React, {useEffect} from 'react';
import "./Home.css";
import { Link } from 'react-router-dom';
import Home1 from "../img/homefirst.jpg";
import Home2 from "../img/hometwo.jpg";
import Home3 from "../img/homethree.jpg";
import Home4 from "../img/homefour.jpg";
import Footer2 from '../Footer/Footer2';
import Header2 from '../Header/Header2';


function Home() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='home'>
      <div className="home-header">
      <Header2 />
      </div>
      <div className="container-px">
        <div className="home-area-wrapper">
          <div className="home-area">
            <div className="content">
              <div className="content-text">
                <h2>Find your adventure</h2>
                <p>Starbucks® Summer Game is here! Play for your chance to win—more than 10 million prizes are up for grabs!*</p>
                <a href="https://www.starbuckssummergame.com/?utm_medium=website&utm_source=sr&utm_campaign=sg23_20230513&utm_content=web_banner_spot_1#/landing">Play Now</a>
              </div>
              <div className="content-img">
                <img src={Home1} alt="" />
              </div>
            </div>
            <div className="content">
              <div className="content-img">
                <img src={Home2} alt="" />
              </div>
              <div className="content-text">
                <h2>For the top Pop in your life</h2>
                <p>This Father’s Day, show your appreciation for all he does with a thoughtful Starbucks eGift.</p>
                <Link to="/gift">Send an eGift</Link>
              </div>
            </div>
            <div className="content">
              <div className="content-text">
                <h2>Cinnamon caramel smooth</h2>
                <p>Our new Cinnamon Caramel Cream Nitro Cold Brew is ready on tap and topped with silky cold foam.</p>
                <Link to="/menu">Order Now</Link>
              </div>
              <div className="content-img">
                <img src={Home3} alt="" />
              </div>
            </div>
            <div className="content">
              <div className="content-img">
                <img src={Home4} alt="" />
              </div>
              <div className="content-text">
                <h2>Get there satisfied</h2>
                <p>Fill up on the way with a Spinach, Feta & Egg White Wrap or Bacon, Sausage & Egg Wrap.</p>
                <Link to="/menu">Order Now</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="information-area">
          *NO PURCHASE NECESSARY. Participating stores only. Starbucks Partners (employees) are not eligible to win prizes. 
          Ends 6/18/23. To play and for Official Rules visit <a href="starbuckssummergame.com">starbuckssummergame.com</a>.
          Entrants can receive a maximum of 2 plays per day, plus, bonus opportunities to earn additional plays.
        </div>
      </div>
      <div className="border"></div>
      <div className="home-footer">
        <Footer2 />
      </div>
    </div>
  )
}

export default Home;
