import React from 'react';
import PropTypes from 'prop-types';
import './Login.css'


const Login = () => (
  <div class="container">
    <div class="left">
      <div class="item">
        <div class="yellowBox">
          <img src="https://onlineaccess.edwardjones.com/app/assets/edwardjones-logo-US.png" />
        </div>
      </div>
      <div class="item welcome">
        <h1>Welcome to Invest Safe</h1>
      </div>
      <div>Item 3</div>
    </div>
    <div class="right">Right Content</div>
  </div>
);

Login.propTypes = {};

Login.defaultProps = {};

export default Login;
