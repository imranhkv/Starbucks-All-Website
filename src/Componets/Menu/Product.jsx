import React, { useContext, useEffect, useState } from 'react';
import Header2 from '../Header/Header2'
import Footer from '../Footer/Footer'
import './Product.css'
import { Link, useParams } from 'react-router-dom';
import StarbucksJson from '../Carousel/Starbucks.json'
import { Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import coffe1 from '../img/short.svg'
import coffe2 from '../img/tall.svg'
import coffe3 from '../img/grande.svg'
import coffe4 from '../img/venti.svg'
import GreenArea from '../Green Area/GreenArea';
import { GlobalContext } from '../ContentAPI/Context';


function Product() {
    // buttona basanda quantitynin sayı qeder mehsulu sebete elave etme və 
    const {setOrders} = useContext(GlobalContext)
    
    const addToCart = () => {
        const productsToAdd = Array.from({ length: quantity }, () => ({ ...productPage }));
        setOrders(prevState => [...prevState, ...productsToAdd]);
      };
    // son
    const { id } = useParams()
    const [quantity, setQuantity] = useState(1)
    const productPage = StarbucksJson.find((item) => item.id == id)
    
    // ölçüyə görə kalori 
    const thirdSize = productPage?.sizes[2];
    const firstSize = productPage?.sizes[0];
    const secondSize = productPage?.sizes[1];
    const fourthSize = productPage?.sizes[3];
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


    const onSubmit = (//values,
        { setSubmitting }) => {
        // onRegister(values);
        setSubmitting(false);
    };
    // son

    // mehsulun sayininn artıb azalması
    const plusNumber = () => {
        setQuantity(quantity + 1);
        if (quantity == 10) {
            setQuantity(quantity + 0);
        }
    }
    const minusNumber = () => {
        setQuantity(quantity - 1);
        if (quantity == 1) {
            setQuantity(quantity - 0);
        }
    }
    // son

    // seçilən məhsulun ölçüsü
    const [selectedSize, setSelectedSize] = useState(0);

    const sizeButtonClick = (index) => {
        setSelectedSize(index);
    };

    useEffect(() => {
        const sizeImgs = document.querySelectorAll('.size-options-content img');
        sizeImgs.forEach((img) => {
            img.classList.remove('active');
        });
        if (selectedSize !== null) {
            sizeImgs[selectedSize].classList.add('active');
        }
    }, [selectedSize]);

    // son

    return (
        <div className='product-page'>
            <div className="product-page-header">
                <Header2 />
            </div>
            <div className="product-page-main">
                <div className="product-navbar">
                    <div className="container">
                        <div className="product-navbar-content">
                            <Link to="/menu">Menu</Link> / <span>{productPage.category}</span> / <span>{productPage.name}</span>
                        </div>
                    </div>
                </div>
                <div className="product-main-product-page">
                    <div className="container">
                        <div className="product-main-product-page-content">
                            <div className="product-main-product-page-left">
                                <img src={productPage.img} alt="" key={productPage.id} />
                            </div>
                            <div className="product-main-product-page-right">
                                <h2>{productPage.name}</h2>
                                <p>
                                    {selectedSize === 0 && thirdSize?.calories}
                                    {selectedSize === 1 && secondSize?.calories}
                                    {selectedSize === 2 && thirdSize?.calories}
                                    {selectedSize === 3 && fourthSize?.calories}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="product-main-content-bottom">
                        <div className="product-main-content-bottom-left" style={{ height: "65vh" }}>
                            <div className="size-options">
                                <div className="size-options-head">
                                    <h2>Size options</h2>
                                    <div className="product-border"></div>
                                </div>
                                <div className="size-options-main">
                                    <div className="size-options-img">
                                        <div className="size-options-content">
                                            <div className="size-img">
                                                <a className={selectedSize === 0 ? "active-size" : ""}></a>
                                                <img
                                                    src={coffe1}
                                                    alt=""
                                                    onClick={() => sizeButtonClick(0)}
                                                />
                                            </div>
                                            <div className="size-img">
                                                <a className={selectedSize === 1 ? "active-size" : ""}> </a>
                                                <img
                                                    src={coffe2}
                                                    alt=""
                                                    onClick={() => sizeButtonClick(1)}
                                                />
                                            </div>
                                            <div className="size-img">
                                                <a className={selectedSize === 2 ? "active-size" : ""}>
                                                </a>
                                                <img
                                                    src={coffe3}
                                                    alt=""
                                                    onClick={() => sizeButtonClick(2)}
                                                />
                                            </div>
                                            <div className="size-img">
                                                <a className={selectedSize === 3 ? "active-size" : ""}></a>
                                                <img
                                                    src={coffe4}
                                                    alt=""
                                                    onClick={() => sizeButtonClick(3)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="size-options-buttons">
                                        <a>
                                            <button onClick={() => sizeButtonClick(0)}>Short</button>
                                            <h4 onClick={() => sizeButtonClick(0)}>{firstSize?.capacity}</h4>
                                        </a>
                                        <a>
                                            <button onClick={() => sizeButtonClick(1)}>Tall</button>
                                            <h4 onClick={() => sizeButtonClick(1)}>{secondSize?.capacity}</h4>
                                        </a>
                                        <a>
                                            <button onClick={() => sizeButtonClick(2)}>Grande</button>
                                            <h4 onClick={() => sizeButtonClick(2)}>{thirdSize?.capacity}</h4>
                                        </a>
                                        <a>
                                            <button onClick={() => sizeButtonClick(3)}>Venti</button>
                                            <h4 onClick={() => sizeButtonClick(3)}>{fourthSize?.capacity}</h4>
                                        </a>
                                    </div>
                                    <div className="size-options-bottom">
                                        <span><i className="fa-solid fa-location-dot"></i>Select a store to view availability</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="product-main-content-bottom-right" style={{ height: "65vh" }}>
                            <div className="customized">
                                <div className="customized-head">
                                    <h2>What's included</h2>
                                    <div className="product-border"></div>
                                </div>
                                <div className="customized-main">
                                    <Formik
                                        initialValues={initialValues}
                                        validationSchema={validationSchema}
                                        onSubmit={onSubmit}
                                    >
                                        <div className="products-inputs">
                                            <Form>
                                                <div className="products-content-top-gift-card">
                                                    <div className="products-content">
                                                        <Field
                                                            component="select"
                                                            id="giftamount"
                                                            name="giftamount"
                                                            multiple={false}
                                                        >
                                                            <option value="water" className='option-one'>Water</option>
                                                            <option value="extra-water">Extra Water</option>
                                                            <option value="light-water">Light Water</option>
                                                            <option value="no-water">No Water</option>
                                                        </Field>
                                                    </div>
                                                    <div className="products-content">
                                                        <Field
                                                            component="select"
                                                            id="giftamount"
                                                            name="giftamount"
                                                            multiple={false}
                                                        >
                                                            <option value="signature" className='option-one'>Signature Espresso Roast</option>
                                                            <option value="blonde">Blonde Espresso Roast</option>
                                                            <option value="decaf">Decaf Espresso Roast</option>
                                                            <option value="13">1/3 Decaf Espresso Roast</option>
                                                            <option value="12">1/2 Decaf Espresso Roastt</option>
                                                            <option value="23">2/3 Decaf Espresso Roast</option>
                                                        </Field>
                                                    </div>
                                                    <div className="products-content-label">
                                                        <label>
                                                            <input type="text" readOnly placeholder='Shots' />
                                                            <button onClick={minusNumber} style={{ display: quantity > 1 ? 'block' : 'none' }}>
                                                                <i className="fa-solid fa-minus"></i></button>
                                                            <p>{quantity}</p>
                                                            <button onClick={plusNumber}><i className="fa-solid fa-plus"></i></button>
                                                        </label>
                                                    </div>
                                                    <div className="products-content-button">
                                                        <button><i className="fa-solid fa-star"></i>Customize</button>
                                                    </div>
                                                </div>
                                                <div className="order-button">
                                                    <button type="button" onClick={addToCart}>Add to Order</button>
                                                </div>
                                            </Form>
                                        </div>
                                    </Formik>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-main-green-area">
                    <div className="container">
                        <div className="product-main-green-area-content">
                            <span>200★Stars item</span>
                            <p>Espresso shots topped with hot water create a light layer of crema
                                culminating in this wonderfully rich cup with depth and nuance.</p>
                            <h4>5 calories, 0g sugar, 0g fat</h4>
                            <Link to='/menu'>Full nutrition & ingredients list</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border"></div>
            <div className="product-page-footer">
                <Footer />
            </div>
            <GreenArea />
        </div >
    )
}

export default Product;
