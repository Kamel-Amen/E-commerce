/* eslint-disable react/prop-types */
//import React from 'react'

import { useDispatch } from 'react-redux';
import { removeFormCart } from '../features/cart/CartSlice';

const CartItem = ({ title, price, image, cartId }) => {
  const dispatch = useDispatch();

  return (
    <article className='cart-item'>
      <img src={image} alt={title} />
      <div className='item-body'>
        <h3>{title}</h3>
        <h4 className='item-price'>${price}</h4>
        <button
          className='remove-btn'
          onClick={() => {
            dispatch(removeFormCart(cartId));
          }}
        >
          remove
        </button>
      </div>
      <hr />
    </article>
  );
};

export default CartItem;
