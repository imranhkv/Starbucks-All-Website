import React, { useContext, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import './JoinNow.css'
import { GlobalContext } from '../ContentAPI/Context';


const JoinNow = () => {
  // contex api
  const { setReg } = useContext(GlobalContext)
  // son

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // formik
  const initialValues = {
    name: '',
    lastname: '',
    email: '',
    password: ''
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Enter your first name'),
    lastname: Yup.string().required('Enter your last name'),
    email: Yup.string().email('Please enter your email address').required('Please enter your email address.'),
    password: Yup.string().min(8, 'From 8 to 25 characters').required('Enter your password')
  });


  const onSubmit = (
    { setSubmitting }) => {
    setSubmitting(false);
  };
  // son

  return (
    <div>
      <div className="joinnow-header">
        <div className="container">
          <Link to='/'><Logo /></Link>
        </div>
      </div>
      <div className="form-area-all">
        <div className="form-area-head">
          <h2>Create an account</h2>
          <h4>STARBUCKS® REWARDS</h4>
          <p>Join Starbucks Rewards to earn Stars for free food and drinks, any way you pay.
            Get access to mobile ordering, a birthday Reward, and more.</p>
        </div>
        <div className="form-area">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <div className="form-inputs">
              <Form>
                <p><span>*</span> indicates required field</p>
                <div className="form-content-top">
                  <div className='form-content'>
                    <label htmlFor="name">Personal Information</label>
                    <Field type="text" id="name" name="name" placeholder='* First Name' />
                    <ErrorMessage name="name" component="div" className='errormesage' />
                    <div className='form-content'>
                      <label htmlFor="lastname"></label>
                      <Field type="text" id="lastname" name="lastname" placeholder='* Last name' />
                      <ErrorMessage name="lastname" component="div" className='errormesage' />
                    </div>
                  </div>
                </div>
                <div className='form-content'>
                  <label htmlFor="email">Account Security</label>
                  <Field type="email" id="email" name="email" placeholder='* Email Adress' />
                  <ErrorMessage name="email" component="div" className='errormesage' />
                </div>
                <article>This will be your username</article>
                <div className='form-content'>
                  <label htmlFor="password"></label>
                  <Field type="password" id="password" name="password" placeholder='* Password' />
                  <ErrorMessage name="password" component="div" className='errormesage' />
                </div>
                <article>Create a password 8 to 25 characters long that includes at least 1
                  uppercase and 1 lowercase letter, 1 number and 1 special character like an
                  exclamation point or asterisk.</article>
                <div className="form-inputs-bottom">
                  <h4>COLLECT MORE STARS & EARN REWARDS</h4>
                  <p>Email is a great way to know about offers and what’s new from Starbucks.</p>
                  <h4>TERMS OF USE</h4>
                  <label htmlFor="" id='checkbox-label' ><input type="checkbox"
                    className="myCheckboxClass"
                    style={{ "--active-color": "#00754a" }}
                    name="agreeToTerms" />I agree to the
                    <a href="https://www.starbucks.com/rewards/terms/">Starbucks® Rewards Terms</a>
                    opens in new window and the
                    <a href="https://www.starbucks.com/terms/manage-gift-cards/">Starbucks Card Terms</a>
                    opens in new window and have read the
                    <a href="https://www.starbucks.com/terms/privacy-policy/#notice-of-financial-incentive">Starbucks Privacy Statement</a>
                    opens in new window.</label>
                </div>
                <Link  to="/signin" onClick={()=> setReg(true)}>
                  <button type="submit" id='jonnow-page-button'>Create Account</button>
                </Link>
              </Form>
            </div>
          </Formik>
        </div>
        <div className="joinnow-footer">
          <Footer />
        </div>
      </div >
    </div>
  );
};

export default JoinNow;
