import React, { useContext, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import './SignIn.css'
import { GlobalContext } from '../ContentAPI/Context';

const SignIn = () => {

  const { setReg } = useContext(GlobalContext)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  // formik
  const initialValues = {
    email: '',
    password: ''
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Please enter your email address.').required('Please enter your email address.'),
    password: Yup.string().min(8, 'From 8 to 25 characters').required('Enter your password')
  });


  const onSubmit = (//values,
    { setSubmitting }) => {
    // onRegister(values);
    setSubmitting(false);
  };
  // son
  
  return (
    <div className='signin'>
      <div className="joinnow-header">
        <div className="container">
          <Link to='/'><Logo /></Link>
        </div>
      </div>
      <div className="form-area-all-signin">
        <div className="form-area-head-signin">
          <h2>Sign in or create an account</h2>
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
                <div className='form-content'>
                  <Field type="email" id="email" name="email" placeholder='* Email Adress' />
                  <ErrorMessage name="email" component="div" className='errormesage' />
                </div>
                <div className='form-content'>
                  <label htmlFor="password"></label>
                  <Field type="password" id="password" name="password" placeholder='* Password' />
                  <ErrorMessage name="password" component="div" className='errormesage' />
                </div>
                <div className="form-inputs-bottom-signin">
                  <label htmlFor="" id='checkbox-label' ><input type="checkbox"
                    className="myCheckboxClass-signin"
                    style={{ "--active-color": "#00754a" }}
                    name="agreeToTerms" />Keep me signed in. <Link>Details</Link></label>
                  <Link id='forgot'>Forgot your username?</Link>
                  <Link id='forgot'>Forgot your password?</Link>
                </div>
                <Link to="/" onClick={() => setReg(true)}>
                  <button type="submit" id='signin-button'>Sign in</button>
                </Link>
              </Form>
            </div>
          </Formik>
        </div>
        <div className="signin-form-bottom">
          <h3>JOIN STARBUCKS® REWARDS</h3>
          <p>Join Starbucks® Rewards to earn free food and drinks, get free refills, pay and order with your phone, and more.</p>
          <Link id='signin-joinnow' to="/create">Join Now</Link>
        </div>
        <div className="border"></div>
        <div className="signin-footer">
          <Footer />
        </div>
      </div >
    </div>
  );
};

export default SignIn;
