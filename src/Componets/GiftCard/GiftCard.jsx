import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./GiftCard.css"
import Header from '../Header/Header';
import { Collapse } from 'antd';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


function GiftCard() {
    // mehsulun içinə girmək üçün useparams
    const { id } = useParams();
    // son
    // gift card objects
    const giftCards = [
        {
            id: 1,
            imageUrl: 'https://globalassets.starbucks.com/assets/4515bc9fbeb64e8b93e8e61209105524.jpg',
        },
        {
            id: 2,
            imageUrl: 'https://globalassets.starbucks.com/assets/79d535d930cb48f683b6a14e9c73780f.jpg',
        },
        {
            id: 3,
            imageUrl: 'https://globalassets.starbucks.com/assets/e59a52bdd19448be9096d788b85a5d2f.jpg',
        },
        {
            id: 4,
            imageUrl: 'https://globalassets.starbucks.com/assets/32722580ebbd483db9d1b7c82fc85fd8.jpg',
        },
        {
            id: 5,
            imageUrl: 'https://globalassets.starbucks.com/assets/b03526f820e94d0282d02fbb2e978707.jpg',
        },
        {
            id: 6,
            imageUrl: 'https://globalassets.starbucks.com/assets/7ad856a8cbdd4fbeb0119695a8d5b843.jpg',
        },
        {
            id: 7,
            imageUrl: 'https://globalassets.starbucks.com/assets/32f58432cfb942be89c492397604b8ef.jpg',
        },
        {
            id: 8,
            imageUrl: 'https://globalassets.starbucks.com/assets/1bf45b972317492c9a3762a67885a354.jpg',
        },
        {
            id: 9,
            imageUrl: 'https://globalassets.starbucks.com/assets/8c34f576af314654956200e08429e9bd.jpg',
        },
        {
            id: 10,
            imageUrl: 'https://globalassets.starbucks.com/assets/b3c8d0d8a3bc48b18d570b382af46c20.jpg',
        },
        {
            id: 11,
            imageUrl: 'https://globalassets.starbucks.com/assets/086f127933b1492c9b6311e77d32f6ba.jpg',
        },
        {
            id: 12,
            imageUrl: 'https://globalassets.starbucks.com/assets/025674328bc54e35a4ba0988875e6e5b.jpg',
        },
        {
            id: 13,
            imageUrl: 'https://globalassets.starbucks.com/assets/45f1c4ed8dac426ea31d09bc4296771c.jpg',
        },
        {
            id: 14,
            imageUrl: 'https://globalassets.starbucks.com/assets/196581be9eda4e4cb0c3b33ac3241ea7.jpg',
        },
        {
            id: 15,
            imageUrl: 'https://globalassets.starbucks.com/assets/1bf45b972317492c9a3762a67885a354.jpg',
        },
        {
            id: 16,
            imageUrl: 'https://globalassets.starbucks.com/assets/8c34f576af314654956200e08429e9bd.jpg',
        },
        {
            id: 17,
            imageUrl: 'https://globalassets.starbucks.com/assets/6e34062e14484b66a5604c57340103ba.jpg',
        },
        {
            id: 18,
            imageUrl: 'https://globalassets.starbucks.com/assets/a8fa33a190374fe69bf1de429a03053a.jpg',
        },
        {
            id: 19,
            imageUrl: 'https://globalassets.starbucks.com/assets/f8167a08eaab4d2197729d2967caedad.jpg',
        },
        {
            id: 20,
            imageUrl: 'https://globalassets.starbucks.com/assets/e59a52bdd19448be9096d788b85a5d2f.jpg',
        },
        {
            id: 21,
            imageUrl: 'https://globalassets.starbucks.com/assets/02cc779eadaf4a1891efdc9908eefb89.jpg',
        },
        {
            id: 22,
            imageUrl: 'https://globalassets.starbucks.com/assets/7ad856a8cbdd4fbeb0119695a8d5b843.jpg',
        },
        {
            id: 23,
            imageUrl: 'https://globalassets.starbucks.com/assets/fc7d4cb9e0594398b00bfe133a02fad1.jpg',
        },
        {
            id: 24,
            imageUrl: 'https://globalassets.starbucks.com/assets/32722580ebbd483db9d1b7c82fc85fd8.jpg',
        },
        {
            id: 25,
            imageUrl: 'https://globalassets.starbucks.com/assets/b03526f820e94d0282d02fbb2e978707.jpg',
        },
        {
            id: 26,
            imageUrl: 'https://globalassets.starbucks.com/assets/42588c5832f145d5aff6469fe0a6ecb6.jpg',
        },
        {
            id: 27,
            imageUrl: 'https://globalassets.starbucks.com/assets/fc7d4cb9e0594398b00bfe133a02fad1.jpg',
        },
        {
            id: 28,
            imageUrl: 'https://globalassets.starbucks.com/assets/a60a85c6d4c14c3f9fed83f1ff1a2993.jpg',
        },
        {
            id: 29,
            imageUrl: 'https://globalassets.starbucks.com/assets/030cdc65712a4cb3b9a58483de6799b3.jpg',
        },
        {
            id: 30,
            imageUrl: 'https://globalassets.starbucks.com/assets/1c47ac4f6e914144b8d6a2e3489f316e.jpg',
        },
        {
            id: 31,
            imageUrl: 'https://globalassets.starbucks.com/assets/28ae9dd37eee4f828627bd584b49f9f0.jpg',
        },
        {
            id: 32,
            imageUrl: 'https://globalassets.starbucks.com/assets/974d46ec17774cb1bafa313d1db92bbf.jpg',
        },
        {
            id: 33,
            imageUrl: 'https://globalassets.starbucks.com/assets/92a2acfde0d74350bae518afe9928fea.jpg',
        },
        {
            id: 34,
            imageUrl: 'https://globalassets.starbucks.com/assets/538d70aafcd640e8a336b1e81db0f5ad.jpg',
        },
        {
            id: 35,
            imageUrl: 'https://globalassets.starbucks.com/assets/a224b9727cb44ea4822b459d3faa0ced.jpg',
        },
        {
            id: 36,
            imageUrl: 'https://globalassets.starbucks.com/assets/bb5003220b16472c8efd7c1968edb836.jpg',
        },

    ];
    // son
    // seçilən gift card
    const selectedGiftCard = giftCards.find((giftCard) => giftCard.id === parseInt(id));
    // son

    // formik
    const initialValues = {
        giftamount: '',
        name: '',
        email: '',
        sendername: '',
        senderemail: '',
        message: ""
    };

    const validationSchema = Yup.object({
        name: Yup.string().required('Please enter the recipient name'),
        email: Yup.string().email('Please enter the recipients email.').required('Please enter the recipients email.'),
        sendername: Yup.string().required('Please enter the senders name.'),
        senderemail: Yup.string().required('Please enter the senders email.'),

    });


    const onSubmit = (
        { setSubmitting }) => {
        setSubmitting(false);
    };
    // son

    return (
        <div className="giftcard">
            <div className="giftcard-header">
                <Header />
            </div>
            <div className="giftcard-area" style={{ height: "100vh" }}>
                <div className="giftcard-area-left">
                    <div className="container-px">
                        <div className="giftcard-area-left-content">
                            <Link to="/gift">  <i className="fa-solid fa-angle-left"></i>Gift Cards</Link>
                            <h3>Create gift card</h3>
                        </div>
                    </div>
                </div>
                <div className="gift-card-area-right">
                    <div className="container-px">
                        <div className="giftcard-area-right-content-top-bottom">
                            <div className="giftcard-area-right-content">
                                <img src={selectedGiftCard.imageUrl} alt={`Gift Card ${selectedGiftCard.id}`} />
                                <div className="giftcard-area-right-content-form">

                                    <Formik
                                        initialValues={initialValues}
                                        validationSchema={validationSchema}
                                        onSubmit={onSubmit}
                                    >
                                        <div className="form-inputs">
                                            <Form>
                                                <div className="form-content-top-gift-card">
                                                    <div className="form-content">
                                                        <label htmlFor="">GIFT AMOUNT</label>
                                                        <Field
                                                            component="select"
                                                            id="giftamount"
                                                            name="giftamount"
                                                            multiple={false}
                                                        >
                                                            <option value="25" className='option-one'>25$</option>
                                                            <option value="10">10$</option>
                                                            <option value="50">50$</option>
                                                            <option value="100">100$</option>
                                                            <option value="custom">Custom Ammount</option>
                                                        </Field>
                                                    </div>
                                                    <div className='form-content'>
                                                        <label htmlFor="name">TO</label>
                                                        <Field type="text" id="name" name="name" placeholder='* Recipient Name' />
                                                        <ErrorMessage name="name" component="div" className='errormesage' />
                                                        <div className='form-content'>
                                                            <label htmlFor="email"></label>
                                                            <Field type="text" id="email" name="email" placeholder='* Recipient Email' />
                                                            <ErrorMessage name="email" component="div" className='errormesage' />
                                                        </div>
                                                        <div className='form-content'>
                                                            <label htmlFor="sendername">From</label>
                                                            <Field type="sendername" id="sendername" name="sendername" placeholder='* Sender Name' />
                                                            <ErrorMessage name="sendername" component="div" className='errormesage' />
                                                        </div>
                                                        <div className='form-content'>
                                                            <label htmlFor="senderemail"></label>
                                                            <Field type="senderemail" id="senderemail" name="senderemail" placeholder='* Sender Email' />
                                                            <ErrorMessage name="senderemail" component="div" className='errormesage' />
                                                        </div>
                                                        <div className='form-content'>
                                                            <label htmlFor="message">Message</label>
                                                            <Field type="message" id="message" name="message" placeholder='Message (optional)' />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="giftcard-button">
                                                    <button type='submit' >Check Out</button>
                                                </div>
                                            </Form>
                                        </div>
                                    </Formik>
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
    );
}

export default GiftCard;

