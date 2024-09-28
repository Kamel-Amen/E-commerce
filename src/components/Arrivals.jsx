//import React from 'react'
import { faTruckFast } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cover1 from '/public/assets/images/options/img1.jpg';
import cover2 from '/public/assets/images/options/img2.jpg';
import cover3 from '/public/assets/images/options/img3.jpg';
import cover4 from '/public/assets/images/home/img2.jpg';

const Arrivals = () => {
  return (
    <section className='arrivals position-relative text-center' id='arrivals'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1440 320'
        className='position-absolute top-0 start-0 svg'
      >
        <path
          fill='#0099ff'
          fillOpacity='1'
          d='M0,192L288,64L576,288L864,96L1152,224L1440,128L1440,0L1152,0L864,0L576,0L288,0L0,0Z'
        ></path>
      </svg>
      <div className='arrivals-content'>
        <h1 className='text-uppercase'>
          New Arrivals
          <FontAwesomeIcon icon={faTruckFast} className='ms-2' />
          <hr className='w-75 mx-auto' />
        </h1>
        <div className='arrivals-images row m-0 pt-5'>
          <img loading='lazy' src={cover2} className='col-4 p-0' alt='cover' />
          <img loading='lazy' src={cover1} className='col-4 p-0' alt='cover' />
          <img loading='lazy' src={cover3} className='col-4 p-0' alt='cover' />
        </div>
        <div className='arrivals-news row position-relative m-0'>
          <section className='col-6 position-relative p-0'>
            <aside className='position-absolute w-100 h-75 d-flex flex-column justify-content-center align-items-center shadow-lg'>
              <h1>NEW ARRIVALS !!</h1>
              <p className='w-75 mx-auto my-3'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                impedit illo pariatur, qui vero quis consectetur quod
                repudiandae beatae atque iure voluptatum fuga dolores minus.
              </p>
              <button className='btn btn-outline-dark'>SHOP NOW !</button>
            </aside>
          </section>
          <img
            loading='lazy'
            src={cover4}
            alt='cover'
            className='news-img col-6 p-0'
          />
        </div>
      </div>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1440 320'
        className='position-absolute bottom-0 start-0 svg'
      >
        <path
          fill='#00cba9'
          fillOpacity='1'
          d='M0,32L48,53.3C96,75,192,117,288,149.3C384,181,480,203,576,202.7C672,203,768,181,864,165.3C960,149,1056,139,1152,149.3C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
        ></path>
      </svg>
    </section>
  );
};

export default Arrivals;
