import React, { useContext, useEffect,useState } from 'react';
import { GlobalContext } from '../ContentAPI/Context';
import './ShoppingCart.css'
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';
import { Collapse } from 'antd';

const ShoppingCart = () => {
  const { orders, setOrders } = useContext(GlobalContext);
  const { green, setGreen } = useContext(GlobalContext);
  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  // order buttona basanda shotsların sayı qədər mehsul elave olunması
  useEffect(() => {
    const calculateTotalQuantity = () => {
      const totalQuantity = orders.reduce((total, item) => total + item.quantity, 0);
      setTotalQuantity(totalQuantity);
    };
    calculateTotalQuantity(); 
  }, [orders]);

  // select funksiyas;
  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setGreen(selectedValue);
  };
  // son

  // sebetdeki mehsulu silme
  const handleRemove = (id) => {
    const indexToRemove = orders.findIndex(cart => cart.id === id);

    if (indexToRemove !== -1) {
      const updatedOrders = [...orders];
      updatedOrders.splice(indexToRemove, 1);
      setOrders(updatedOrders);

    }
  };
  // son

  // sebetdeki mehsulu elave etmek
  const handleAdd = (id) => {
    const selectedItem = orders.find(item => item.id === id);

    if (selectedItem) {
      const updatedOrders = [...orders, { id, name: selectedItem.name, img: selectedItem.img }];
      setOrders(updatedOrders);

    }
  };
  // son

  return (
    <>
      <div class="shopping-cart-all">
        <div class="shopping-cart-left" >
          <div className="shopping-cart-left-content-all">
            <div className="container">
              <div className="shopping-cart-left-top">
                <Link to="/"><Logo /></Link>
                <Link to="/menu"><i className="fa-solid fa-chevron-left"></i> Back to menu</Link>
              </div>
              <div className="shopping-cart-left-content">
                <h3>Review Order</h3>
                <h4>Prep time: 8-11 min</h4>
                <div className="shopping-cart-left-select">
                  <label>
                    <h4>Pick up store</h4>
                    <select value={green} onChange={handleSelectChange} placeholder='Choose a store'>
                      <option >Choose a store</option>
                      <option value="a">28 Mall </option>
                      <option value="b">Port Baku</option>
                      <option value="c">Globus Center</option>
                      <option value="d">Ganjlik Mall</option>
                      <option value="e">Park Bulvar</option>
                    </select>
                  </label>
                </div>
                <p>Pickup method</p>
                <span><i class="fa-solid fa-store"></i></span>
                <h5>In store</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="shopping-cart-right-all">
          <div class="shopping-cart-right">
            <div className="cart-content-all">
              {
                orders?.map(cart => {
                  return (
                    <div className='order-cart'>
                      <Link to="/menu">
                        <div className="order-cart-left">
                          <img src={cart.img} alt={cart.name} />
                        </div>
                      </Link>
                      <div className="order-cart-right">
                        <Link to="/menu">
                          <h3>{cart.name}</h3>
                          <h4>Grande</h4>
                          <p>200★ item</p>
                        </Link>
                        <div className="cart-edit-functions">
                          <Link to="/menu">
                            <button><i class="fa-solid fa-pen"></i></button>
                          </Link>
                          <button id='remove-button' onClick={() => handleRemove(cart.id)}><i className="fa-solid fa-minus"></i></button>
                          <button id='add-button' onClick={() => handleAdd(cart.id)}><i className="fa-solid fa-plus"></i></button>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
          <div className="shopping-cart-footer" style={{ position: "relative" }}>
            <div className="footer-border-giftcard"></div>
            <div className="shopping-cart" style={{ position: "absolute" }}>
              <div className="shopping-cart-collapse">
                <div>
                  <Collapse
                    size="small"
                    items={[{
                      key: '1', label: 'About Us', children: <div className='collapse-content'>
                        <a href="https://www.starbucks.com/about-us/">Our Company</a>
                        <a href="https://www.starbucks.com/coffee/">Our Cofee</a>
                        <a href="https://stories.starbucks.com/">Stories and News</a>
                        <a href="https://archive.starbucks.com/">Starbucks Archive</a>
                        <a href="https://investor.starbucks.com/">Investor Reletions</a>
                        <a href="https://customerservice.starbucks.com/">Customer Service</a>
                      </div>
                    }]}
                  />
                  <Collapse
                    size="small"
                    items={[{
                      key: '1', label: 'Careers', children: <div className='collapse-content'>
                        <a href="https://www.starbucks.com/careers/working-at-starbucks/culture-and-values/">Culture and Values</a>
                        <a href="https://stories.starbucks.com/stories/inclusion-diversity/">Inclusion, Diversity, and Equity</a>
                        <a href="https://www.starbucks.com/careers/working-at-starbucks/education/">College Achievement Plan</a>
                        <a href="https://alumni.starbucks.com/">Alumni Community</a>
                        <a href="https://www.starbucks.com/careers/">U.S. Careers</a>
                        <a href="https://www.starbucks.com/careers/international-careers/">International Careers</a>
                      </div>
                    }]}
                  />
                  <Collapse
                    size="small"
                    items={[{
                      key: '1', label: 'Social Impact', children: <div className='collapse-content'>
                        <a href="https://starbucks.com/responsibility/people/">People</a>
                        <a href="https://starbucks.com/responsibility/planet/">Planet</a>
                        <a href="https://www.starbucks.com/responsibility/reporting-hub/">Environmental and Social Impact Reporting</a>
                      </div>
                    }]}
                  />
                  <Collapse
                    size="small"
                    items={[{
                      key: '1', label: 'For Business Partners', children: <div className='collapse-content'>
                        <a href="https://www.starbucks.com/business/landlord-faq/">Landlord Support Center</a>
                        <a href="https://www.starbucks.com/business/suppliers/">Suppliers</a>
                        <a href="https://www.starbuckscardb2b.com/">Corporate Gift Card Sales</a>
                        <a href="https://www.nestlecoffeepartnerssl.com/our-brands/we-proudly-serve-starbucks-coffee-program">Office and Foodservice Coffee</a>
                      </div>
                    }]}
                  />
                  <Collapse
                    size="small"
                    items={[{
                      key: '1', label: 'Order and Pick Up', children: <div className='collapse-content'>
                        <a href="https://www.starbucks.com/rewards/mobile-apps/">Order on the App</a>
                        <Link to="/menu" >Order on the Web</Link>
                        <a href="https://www.starbucks.com/ways-to-order/delivery/">Delivery</a>
                        <a href="https://www.starbucks.com/ways-to-order/">Order and Pick Up Options</a>
                        <a href="https://athome.starbucks.com/?utm_source=starbucks.com&utm_medium=referral&utm_campaign=footer">Explore and Find Coffee for Home</a>
                      </div>
                    }]}
                  />
                </div>
              </div>
              <div className="shopping-cart-socialnetworks">
                <a href="https://open.spotify.com/user/starbucks"><i className="fa-brands fa-spotify"></i></a>
                <a href="https://facebook.com/starbucks"><i className="fa-brands fa-facebook"></i></a>
                <a href="https://www.pinterest.com/starbucks/"><i className="fa-brands fa-pinterest"></i></a>
                <a href="https://instagram.com/starbucks"><i className="fa-brands fa-instagram"></i></a>
                <a href="https://www.youtube.com/starbucks"><i className="fa-brands fa-youtube"></i></a>
                <a href="https://twitter.com/starbucks/"><i className="fa-brands fa-twitter"></i></a>
              </div>
              <div className="shopping-cart-privacy">
                <a href="https://www.starbucks.com/terms/privacy-policy/">Privacy Notice</a>
                <a href="https://www.starbucks.com/terms/starbucks-terms-of-use/">Terms of Use</a>
                <a href="https://www.starbucks.com/personal-information">Do Not Share My Personal Information</a>
                <a href="https://globalassets.starbucks.com/assets/A2A072E3411C4A6ABAEB8D6BCF286F43.pdf">CA Supply Chain Act</a>
                <Link to="/">Cookie Preferences</Link>
              </div>
              <div className="shopping-cart-designed">
                © 2023 Div Academy, F-114. <span>Designed by Imran Hakhverdiyev</span>.
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default ShoppingCart;
