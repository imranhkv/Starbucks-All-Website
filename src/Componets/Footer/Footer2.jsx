import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'


function Footer() {
    return (
        <div className='footer'>
            <div className="container-px">
                <div className="footer-top">
                    <div className="footer-content">
                        <div className="footer-content-head">
                            <h3>About Us</h3>
                        </div>
                        <div className="footer-content-bottom">
                            <a href="https://www.starbucks.com/about-us/">Our Company</a>
                            <a href="https://www.starbucks.com/coffee/">Our Cofee</a>
                            <a href="https://stories.starbucks.com/">Stories and News</a>
                            <a href="https://archive.starbucks.com/">Starbucks Archive</a>
                            <a href="https://investor.starbucks.com/">Investor Reletions</a>
                            <a href="https://customerservice.starbucks.com/">Customer Service</a>
                        </div>
                    </div>
                    <div className="footer-content">
                        <div className="footer-content-head">
                            <h3>Careers</h3>
                        </div>
                        <div className="footer-content-bottom">
                            <a href="https://www.starbucks.com/careers/working-at-starbucks/culture-and-values/">Culture and Values</a>
                            <a href="https://stories.starbucks.com/stories/inclusion-diversity/">Inclusion, Diversity, and Equity</a>
                            <a href="https://www.starbucks.com/careers/working-at-starbucks/education/">College Achievement Plan</a>
                            <a href="https://alumni.starbucks.com/">Alumni Community</a>
                            <a href="https://www.starbucks.com/careers/">U.S. Careers</a>
                            <a href="https://www.starbucks.com/careers/international-careers/">International Careers</a>
                        </div>
                    </div>
                    <div className="footer-content">
                        <div className="footer-content-head">
                            <h3>Social Impact</h3>
                        </div>
                        <div className="footer-content-bottom">
                            <a href="https://starbucks.com/responsibility/people/">People</a>
                            <a href="https://starbucks.com/responsibility/planet/">Planet</a>
                            <a href="https://www.starbucks.com/responsibility/reporting-hub/">Environmental and Social Impact Reporting</a>

                        </div>
                    </div>
                    <div className="footer-content">
                        <div className="footer-content-head">
                            <h3>For Business Partners</h3>
                        </div>
                        <div className="footer-content-bottom">
                            <a href="https://www.starbucks.com/business/landlord-faq/">Landlord Support Center</a>
                            <a href="https://www.starbucks.com/business/suppliers/">Suppliers</a>
                            <a href="https://www.starbuckscardb2b.com/">Corporate Gift Card Sales</a>
                            <a href="https://www.nestlecoffeepartnerssl.com/our-brands/we-proudly-serve-starbucks-coffee-program">Office and Foodservice Coffee</a>
                        </div>
                    </div>
                    <div className="footer-content">
                        <div className="footer-content-head">
                            <h3>Order and Pick Up</h3>
                        </div>
                        <div className="footer-content-bottom">
                            <a href="https://www.starbucks.com/rewards/mobile-apps/">Order on the App</a>
                            <Link to="/menu" >Order on the Web</Link>
                            <a href="https://www.starbucks.com/ways-to-order/delivery/">Delivery</a>
                            <a href="https://www.starbucks.com/ways-to-order/">Order and Pick Up Options</a>
                            <a href="https://athome.starbucks.com/?utm_source=starbucks.com&utm_medium=referral&utm_campaign=footer">Explore and Find Coffee for Home</a>
                        </div>
                    </div>
                </div>
                <div className="footer-border"></div>
                <div className="footer-bottom">
                    <div className="social-networks">
                        <a href="https://open.spotify.com/user/starbucks"><i className="fa-brands fa-spotify"></i></a>
                        <a href="https://facebook.com/starbucks"><i className="fa-brands fa-facebook"></i></a>
                        <a href="https://www.pinterest.com/starbucks/"><i className="fa-brands fa-pinterest"></i></a>
                        <a href="https://instagram.com/starbucks"><i className="fa-brands fa-instagram"></i></a>
                        <a href="https://www.youtube.com/starbucks"><i className="fa-brands fa-youtube"></i></a>
                        <a href="https://twitter.com/starbucks/"><i className="fa-brands fa-twitter"></i></a>
                    </div>
                    <div className="privacy-terms">
                        <ul>
                            <li>
                                <a href="https://www.starbucks.com/terms/privacy-policy/">Privacy Notice</a>
                            </li>
                            <span></span>
                            <li>
                                <a href="https://www.starbucks.com/terms/starbucks-terms-of-use/">Terms of Use</a>
                            </li>
                            <span></span>
                            <li>
                                <a href="https://www.starbucks.com/personal-information">Do Not Share My Personal Information</a>
                            </li>
                            <span></span>
                            <li>
                                <a href="https://globalassets.starbucks.com/assets/A2A072E3411C4A6ABAEB8D6BCF286F43.pdf">CA Supply Chain Act</a>
                            </li>
                            <span></span>
                            <li>
                                <Link to="/">Cookie Preferences</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="designed">
                    © 2023 Div Academy, F-114. <a target='_blank' href='https://www.instagram.com/imranhkv/?next=%2F'>Designed by Imran Hakhverdiyev</a>.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer