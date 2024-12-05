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
        <h1 className='pl-4 font-medium'>Welcome to Invest Safe</h1>
      </div>
      <div>Item 3</div>
    </div>
    <div class="right">Right Content</div>
  </div>
);

Login.propTypes = {};

Login.defaultProps = {};

export default Login;
