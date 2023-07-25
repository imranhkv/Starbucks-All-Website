import React from 'react'
import Header from '../Header/Header'
import { Link } from 'react-router-dom';
import "./NotFound.css"
import { Collapse } from 'antd';

function NotFound() {
    return (
        <div className='notfound'>
            <div className="notfound-header">
                <Header />
            </div>
            <div className="giftcard-area" style={{ height: "100vh" }}>
                <div className="notfound-area-left">
                    <div>
                        <div className="notfound-area-left-content">
                            <h3>Page not found</h3>
                        </div>
                    </div>
                </div>
                <div className="notfound-area-right">
                    <div>
                        <div className="notfound-area-right-content-top-bottom">
                            <div className="notfound-area-right-content">
                            <div className="notfound-area-right-content-img">
                                <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-49623.gif" alt="" />
                            </div>
                                <div className="notfound-area-right-content-text">
                                    <h4>Oops!</h4>
                                    <h5>We can’t find the page that you’re looking for.</h5>
                                    <p>Please try retyping the URL or visit <Link to="/">Home</Link></p>
                                </div>
                            </div>
                        </div>
                        <div className="gift-card-footer">
                            <div className="footer-border-giftcard"></div>
                            <div className="accordion-footer">
                                <div className="accordion-footer-collapse">
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
                                <div className="accordion-footer-socialnetworks">
                                    <a href="https://open.spotify.com/user/starbucks"><i className="fa-brands fa-spotify"></i></a>
                                    <a href="https://facebook.com/starbucks"><i className="fa-brands fa-facebook"></i></a>
                                    <a href="https://www.pinterest.com/starbucks/"><i className="fa-brands fa-pinterest"></i></a>
                                    <a href="https://instagram.com/starbucks"><i className="fa-brands fa-instagram"></i></a>
                                    <a href="https://www.youtube.com/starbucks"><i className="fa-brands fa-youtube"></i></a>
                                    <a href="https://twitter.com/starbucks/"><i className="fa-brands fa-twitter"></i></a>
                                </div>
                                <div className="accordion-footer-privacy">
                                    <a href="https://www.starbucks.com/terms/privacy-policy/">Privacy Notice</a>
                                    <a href="https://www.starbucks.com/terms/starbucks-terms-of-use/">Terms of Use</a>
                                    <a href="https://www.starbucks.com/personal-information">Do Not Share My Personal Information</a>
                                    <a href="https://globalassets.starbucks.com/assets/A2A072E3411C4A6ABAEB8D6BCF286F43.pdf">CA Supply Chain Act</a>
                                    <Link to="/">Cookie Preferences</Link>
                                </div>
                                <div className="accordion-designed">
                                    © 2023 Div Academy, F-114. <span>Designed by Imran Hakhverdiyev</span>.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFound
