import React, { useState }  from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'


const Login = () => {
  const navigate = useNavigate(); // Hook for navigation

  const handleLogin = () => {
    navigate('/trade'); // Redirect to the Trade component
  };

  return (
    <div class="container">
      <div class="left">
        <div class="item">
          <div class="yellowBox">
            <img src="https://onlineaccess.edwardjones.com/app/assets/edwardjones-logo-US.png" alt=""/>
          </div>
        </div>
        <div class="item welcome">
        </div>
        <form className='flex flex-col mx-auto max-w-[70%]'>
          <h1 className='pl-4 font-medium text-4xl pb-4'>Welcome to Invest Safe</h1>
          <input type='text' className='border border-gray-400 mb-4 px-5 py-3 rounded' id='User ID' />
          <input type='text' className='border border-gray-400 px-5 py-3 rounded' id='Password' />
          <button className='bg-[#0076a0] rounded mt-8 py-4 text-white' onClick={handleLogin}>Log In</button>
        </form>
      </div>
      <div class="item welcome">
      </div>
      <form className='flex flex-col mx-auto max-w-[70%]'>
        <h1 className='pl-4 font-medium text-4xl pb-4'>Welcome to Invest Safe</h1>
        <input type='text' className='border border-gray-400 mb-4 px-5 py-3 rounded' placeholder='Username' id='User ID' />
        <input type='password' className='border border-gray-400 px-5 py-3 rounded' placeholder='Password' id='Password' />
        <button className='bg-[#0076a0] rounded mt-8 py-4 text-white'>Log In</button>
      </form>
    </div>
    <div class="right" className='h-screen max-h-full border-l-4 border-solid border-[#ffc107] bg-gray-800 '>
      <div className='mt-20 text-4xl text-blue-900'>
        Right Content
      </div>
    </div>
  )
};

Login.propTypes = {};

Login.defaultProps = {};

export default Login;
