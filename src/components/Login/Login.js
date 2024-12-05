import React from 'react';
import './Login.css'


const Login = () => (
  <div class="container">
    <div class="left">
      <div class="item">
        <div class="yellowBox">
          <img src="https://onlineaccess.edwardjones.com/app/assets/edwardjones-logo-US.png" alt=""/>
        </div>
      </div>
      <div class="item welcome">
      </div>
      <form className='flex flex-col mx-auto max-w-[80%]'>
        <h1 className='pl-4 font-medium text-4xl pb-4'>Welcome to Invest Safe</h1>
        <input type='text' className='border border-gray-400 mb-4 px-5 py-3 rounded' id='User ID' />
        <input type='text' className='border border-gray-400 px-5 py-3 rounded' id='Password' />
      </form>
      <div>Item 3</div>
    </div>
    <div class="right">Right Content</div>
  </div>
);

Login.propTypes = {};

Login.defaultProps = {};

export default Login;
