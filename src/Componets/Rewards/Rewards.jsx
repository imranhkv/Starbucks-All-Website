import React from 'react';
import './Rewards.css';
import Footer2 from '../Footer/Footer2';
import Header2 from '../Header/Header2';
import { Link } from 'react-router-dom';
import Mehsullar from '../Deyisen Mehsul/Mehsullar';

function Rewards() {

  return (
    <div className='rewards'>
      <div className="rewards-header">
        <Header2 />
      </div>
      <div className="rewards-header-bottom">
        <div className="container-px">
          <h3>STARBUCKS® REWARDS</h3>
        </div>
      </div>
      <div className="rewards-main">
        <div className="container-px">
          <div className="rewards-main-top">
            <div className="rewards-main-top-content">
              <h2>FREE COFFEE
                IS A TAP AWAY</h2>
              <p>Join now to start earning Rewards.</p>
              <Link to="/create" id='rewards-joinnow' >Join now</Link>
              <article>Or <a href="https://www.starbucks.com/rewards/mobile-apps/">join in the app</a> for the best experience</article>
            </div>
          </div>
        </div>
      </div>
      <div className="rewards-main-easyjob-cards">
        <div className="container-px">
          <div className="easyjob-cards-top">
            <h3>Getting started is easy</h3>
            <p>Earn Stars and get rewarded in a few easy steps.</p>
          </div>
          <div className="easyjob-cards-cards">
            <div className="easyjob-card">
              <img src="https://www.starbucks.com/weblx/images/rewards/getting-started/getting-started-1@2x.jpg" alt="" />
              <h3>Create an account</h3>
              <p>To get started, <Link to="/joinnow" >join now</Link>. You can also <a href="https://www.starbucks.com/rewards/mobile-apps/?_
              branch_match_id=1162138453627057983&utm_medium=marketing&_branch_referrer=H4s
              IAAAAAAAAA8soKSkottLXLy5JLEoqTc4u1kssKNDLyczL1g%2FzSTTyNM7My7AEADa4ZHElAAAA">join the app</a> to get
                access to the full range of Starbucks® Rewards benefits.</p>
            </div>
            <div className="easyjob-card">
              <img src="https://www.starbucks.com/weblx/images/rewards/getting-started/getting-started-2@2x.jpg" alt="" />
              <h3>Order and pay how you’d like</h3>
              <p>Use cash, credit/debit card or save some time and pay right through the app.
                You’ll collect Stars all ways. <a href="#">Learn how</a></p>
            </div>
            <div className="easyjob-card">
              <img src="https://www.starbucks.com/weblx/images/rewards/getting-started/getting-started-3@2x.jpg" alt="" />
              <h3>Earn Stars, get Rewards</h3>
              <p>As you earn Stars, you can redeem them for Rewards—like free food, drinks,
                and more. Start redeeming with as little as 25 Stars!</p>
            </div>
          </div>
        </div>
      </div>
      <div className="rewards-segmented">
        <Mehsullar />
      </div>
      <div className="container-px">
        <div className="rewards-main-endless-extras">
          <div className="endless-extras-top">
            <h3>Endless Extras</h3>
            <p>Joining Starbucks® Rewards means unlocking access to exclusive benefits.
              Say hello to easy ordering, tasty Rewards and—yes, free coffee.</p>
          </div>
          <div className="endless-extras-cards">
            <div className="endless-extras-card">
              <img src="https://www.starbucks.com/weblx/images/rewards/benefits/1-fun-freebies.jpg" alt="" />
              <h3>Fun freebies</h3>
              <p>Not only can you earn free coffee, look forward to a
                birthday treat plus coffee and tea refills.</p>
              <Link>Learn More</Link>
            </div>
            <div className="endless-extras-card">
              <img src="https://www.starbucks.com/weblx/images/rewards/benefits/2-order-and-pay-ahead.jpg" alt="" />
              <h3>Order & pay ahead</h3>
              <p>Enjoy the convenience of in-store, curbside or drive-thru pickup at select stores.</p>
              <Link>Learn More</Link>
            </div>
            <div className="endless-extras-card">
              <img src="https://www.starbucks.com/weblx/images/rewards/benefits/3-get-to-free-faster.jpg" alt="" />
              <h3>Get to free faster</h3>
              <p>Earn Stars even quicker with Bonus Star challenges, Double Star Days and exciting games.</p>
              <Link>Learn More</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="rewards-main-cashorcards">
        <div className="container-px">
          <div className="rewards-main-cashorcards-top">
            <h3>Cash or card, you earn Stars</h3>
            <p>No matter how you pay, you can earn Stars with your morning coffee.
              Those Stars add up to (really delicious) Rewards.</p>
          </div>
          <div className="rewards-main-cashorcards-content">
            <div className="cashorcards-content-cards">
              <div className="cashorcard-left">
                <h2>1★ per dollar</h2>
                <p>Pay as you go</p>
              </div>
              <div className="cashorcard-middle">
                <div className="cashorcard-middle-left">
                  <img src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/1A.png" alt="" />
                </div>
                <div className="cashorcard-middle-right">
                  <h3>Scan and pay separately</h3>
                  <p>Use cash or credit/debit card at the register.</p>
                </div>
              </div>
              <div className="cashorcard-right">
                <div className="cashorcard-right-left">
                  <img src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/1B.png" alt="" />
                </div>
                <div className="cashorcard-right-right">
                  <h3>Save payment in the app</h3>
                  <p>Check-out faster by saving a credit/debit card or PayPal to your account. You’ll be able to order ahead or
                    scan and pay at the register in one step.</p>
                </div>
              </div>
            </div>
            <div className="cashorcards-content-cards">
              <div className="cashorcard-left">
                <h2>2★ per dollar</h2>
                <p>Add funds in the app</p>
              </div>
              <div className="cashorcard-middle">
                <div className="cashorcard-middle-left">
                  <img src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/2A.png" alt="" />
                </div>
                <div className="cashorcard-middle-right">
                  <h3>Preload</h3>
                  <p>To save time and earn Stars twice as fast, add money to your digital Starbucks Card using any payment option.
                    Scan and pay in one step or order ahead in the app.</p>
                </div>
              </div>
              <div className="cashorcard-right">
                <div className="cashorcard-right-left">
                  <img src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/2B.png" alt="" />
                </div>
                <div className="cashorcard-right-right">
                  <h3>Register your gift card</h3>
                  <p>Then use it to pay through the app. You can even consolidate balances
                    from multiple cards in one place.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rewards-coming">
        <div className="container-px">
          <div className="rewards-coming-content">
            <h2>Keep the Rewards Coming</h2>
            <p>The Rewards don't stop at your morning coffee. Join Starbucks®
              Rewards and unlock perks from our partners, all while earning more Stars.</p>
            <img src="https://www.starbucks.com/weblx/images/rewards/loyalty-partnerships/delta-skymiles.png" alt="" />
            <p><a href="https://www.deltastarbucks.com/content/starbucks/en/overview.html?mkcpgn=dipd-sbux7042">
              Link your Delta SkyMiles®</a> and Starbucks® Rewards accounts to earn 1 mile per $1*
              spent at Starbucks and double Stars on Delta travel days.</p>
            <Link to="/create" id='joinnow-rewards-coming' >Join Starbucks® Rewards</Link>
          </div>
        </div>
      </div>
      <div className="rewards-question">
        <div className="container-px">
          <h2>Questions?</h2>
          <p>We want to help in any way we can. You can ask your barista anytime or
            we’ve answered the most commonly asked questions <a href="https://customerservice.starbucks.com/app?src=ht
          tps:%2F%2Fcustomerservice.starbucks.com%2Fapp%2Fanswers%2Flist%2Fp%2F552">right over here <i className="fa-solid fa-arrow-up-right-from-square"></i>.</a></p>
        </div>
      </div>
      <div className="rewards-rules">
        <div className="container-px">
          <div className="rewards-rules-top">
            <p>At participating stores. Restrictions apply.</p>
            <p>* Excludes taxes and gratuities. At participating stores. Some restrictions apply.
              Flights purchased close to departure may not earn double Stars.
              Stars and miles may not be earned on purchases of alcohol,
              Starbucks Cards and Starbucks Card reloads. For details, visit <a href="https://www.deltastarbucks.com/content/starbuck
            s/en/overview.html?mkcpgn=dipd-sbux7042">deltastarbucks.com</a> <i className="fa-solid fa-arrow-up-right-from-square"></i> </p>
          </div>
          <div className="rewards-rules-content">
            <div className="rules-content-top">
              <div className="rules-card">
                <h4>EARNING STARS</h4>
                <p>Stars cannot be earned on purchases of alcohol, Starbucks Cards or Starbucks Card reloads.</p>
                <p>Earn 1 Star per $1 spent when you scan your member barcode in the app, then pay with cash, credit/debit cards or mobile
                  wallets at participating stores. You can also earn 1 Star per
                  $1 spent when you link a payment method and pay directly through the app.</p>
                <p>Earn 2 Stars per $1 spent when you load funds and pay with your digital Starbucks Card in the app. You can also earn 2 Stars per $1
                  spent when you pay in-person at a participating store with your registered physical Starbucks Card or scan your member barcode in the app, and then use any physical
                  Starbucks Card (regardless of whether it is registered) to complete the purchase.</p>
              </div>
              <div className="rules-card">
                <h4>TERMS OF USE</h4>
                <p>For full program details visit <Link to="/rewards">starbucks.com/rewards/terms <i className="fa-solid fa-arrow-up-right-from-square"></i>.</Link></p>
                <p>Earn 1 Star per $1 when digitally loading your Starbucks Card with your Starbucks®
                  Rewards Visa® Card: See your Card Rewards Program Agreement for more details.</p>
                <p>Starbucks® Rewards benefits are available at participating Starbucks stores. Not all stores have the ability to honor Rewards at this time. Visit the
                  <Link to="/findastore" > Starbucks Store Locator <i className="fa-solid fa-arrow-up-right-from-square"></i> </Link>

                  opens in new window and search for locations honoring “Redeem Rewards”.</p>
                <p>Deposit and credit card products provided by JPMorgan Chase Bank, N.A. Member FDIC</p>
              </div>
            </div>
            <div className="rules-content-bottom">
              <div className="rules-card">
                <h4>BENEFITS</h4>
                <p>Free refills available during same in-store visit only. To qualify for the Birthday Reward,
                  you must have made at least one Star-earning transaction.</p>
              </div>
              <div className="rules-card">
                <h4>REDEEMING REWARDS</h4>
                <p>Rewards cannot be redeemed for alcoholic beverages or multi-serve items. You pay the difference for any beverage customization over $1 and/or merchandise item over $20. Not all stores
                  honor tiered Rewards. Select stores redeem 200 Stars for free food or drink items only.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="border"></div>
      <div className="rewards-footer">
        <Footer2 />
      </div>
    </div>
  );
}

export default Rewards;
