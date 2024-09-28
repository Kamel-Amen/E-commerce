/* eslint-disable react/no-unescaped-entities */
//import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneFlip } from '@fortawesome/free-solid-svg-icons';
import contact from '/public/assets/images/about.png';
import shape1 from '/public/assets/images/shapes/shape1.svg';
import shape3 from '/public/assets/images/shapes/shape11.svg';

const Footer = () => {
  return (
    <section className='footer position-relative' id='footer'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1440 320'
        className='position-absolute top-0 start-0 svg'
      >
        <path
          fill='#00cba9'
          fillOpacity='1'
          d='M0,128L48,117.3C96,107,192,85,288,90.7C384,96,480,128,576,165.3C672,203,768,245,864,266.7C960,288,1056,288,1152,282.7C1248,277,1344,267,1392,261.3L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z'
        ></path>
      </svg>
      <img
        loading='lazy'
        src={shape1}
        alt='shape'
        className='position-absolute bottom-0 start-0'
      />
      <img
        loading='lazy'
        src={shape3}
        alt='shape'
        className='position-absolute top-50 end-0'
      />
      <div className='footer-content text-white text-center'>
        <h1>
          CONTACT US
          <FontAwesomeIcon icon={faPhoneFlip} className='ms-3' />
          <hr className='w-75 mx-auto' />
        </h1>
        <div className='row m-0'>
          <aside className='footer-messages col-6 d-flex justify-content-center align-items-center'>
            <form className='w-75 text-start' style={{ zIndex: 10 }}>
              <div className='mb-3'>
                <label htmlFor='exampleInputEmail1' className='form-label'>
                  Email address
                </label>
                <input
                  type='email'
                  className='form-control'
                  id='exampleInputEmail1'
                  aria-describedby='emailHelp'
                />
                <div id='emailHelp' className='form-text text-danger'>
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className='mb-3'>
                <label htmlFor='exampleInputPassword1' className='form-label'>
                  Password
                </label>
                <input
                  type='password'
                  className='form-control'
                  id='exampleInputPassword1'
                />
              </div>
              <button type='submit' className='btn btn-outline-primary'>
                Send
              </button>
            </form>
          </aside>
          <aside className='footer-cover col-6'>
            <img
              loading='lazy'
              src={contact}
              alt='contact'
              className='w-100 h-100'
            />
          </aside>
        </div>
        <div className='copyrights mt-3 py-4'>
          CopyRights Reserved @2024{' '}
          <span className='signature'>KAMEL AMEN</span>
        </div>
      </div>
    </section>
  );
};

export default Footer;
