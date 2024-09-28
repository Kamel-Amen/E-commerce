// import React from 'react'

import { faRightToBracket } from '@fortawesome/free-solid-svg-icons/faRightToBracket';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/home');
  };

  return (
    <div className='login d-flex justify-content-center align-items-center'>
      <form
        onSubmit={handleLogin}
        className='d-flex flex-column text-primary w-25'
      >
        <label className='fs-3' htmlFor='email'>
          Email
        </label>
        <input
          type='text'
          name='email'
          id='email'
          placeholder='example@email.com'
          className='mb-3 p-1'
          required
        />
        <label className='fs-3' htmlFor='password'>
          Password
        </label>
        <input
          type='password'
          name='password'
          id='password'
          placeholder='**********'
          className='mb-5 p-1'
          required
        />

        <button className='btn btn-primary fs-3'>
          Login <FontAwesomeIcon icon={faRightToBracket} className='ms-2' />
        </button>
      </form>
    </div>
  );
};

export default Login;
