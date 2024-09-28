//import React from 'react'
import shape1 from '/public/assets/images/shapes/shape1.svg';
import shape2 from '/public/assets/images/shapes/shape2.svg';
import shape3 from '/public/assets/images/shapes/shape11.svg';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../features/cart/CartSlice';
import { v4 as uuidV4 } from 'uuid';

const Products = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store.cart);

  const product = (item) => {
    return (
      <div className='card mb-5 py-4' key={item.id}>
        <img
          loading='lazy'
          src={item.image}
          className='card-img-top mx-auto'
          alt={item.title}
        />
        <div className='card-body text-center'>
          <h5 className='card-title'>{item.title.slice(0, 18) + '...'}</h5>
          <p className='lead'>$ {item.price}</p>
          <button
            className='btn btn-outline-primary buy-now-btn'
            onClick={() => {
              alert('Added Successfully !!');
              dispatch(addToCart({ ...item, cartId: uuidV4() }));
            }}
          >
            Buy Now
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className='products position-relative'>
      <img
        loading='lazy'
        src={shape1}
        alt='shape'
        className='position-absolute top-0 start-0'
      />
      <img
        loading='lazy'
        src={shape2}
        alt='shape'
        className='position-absolute top-0 end-0'
      />
      <img
        loading='lazy'
        src={shape3}
        alt='shape'
        className='position-absolute top-50 end-0'
      />
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1440 320'
        className='position-absolute bottom-0 svg'
      >
        <path
          fill='#0099ff'
          fillOpacity='1'
          d='M0,192L288,192L576,288L864,224L1152,192L1440,288L1440,320L1152,320L864,320L576,320L288,320L0,320Z'
        ></path>
      </svg>
      <div className='container py-5'>
        <div className='row'>
          <div className='col-12 text-center'>
            <h1>Products</h1>
            <hr />
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row justify-content-around'>
          {products.map(product)}
        </div>
      </div>
    </div>
  );
};

export default Products;
