import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Landing.css'


const Login = () => {
  const navigate = useNavigate(); // Hook for navigation

  const handleLoginClient1 = (e) => {
    e.preventDefault();
    navigate('/holdings1'); // Redirect to the Trade component
  };
  const handleLoginClient2 = (e) => {
    e.preventDefault();
    navigate('/holdings2'); // Redirect to the Trade component
  };
  const handleLoginClient3 = (e) => {
    e.preventDefault();
    navigate('/holdings3'); // Redirect to the Trade component
  };
  // const handleLoginFA = (e) => {
  //   e.preventDefault();
  //   navigate('/holdings1'); // Redirect to the Trade component
  // };

  return (
    <div className='mx-auto'>
      <div className='max-w-screen-md mx-auto'>
        <div class="item">
          <div class="yellowBox">
            <img src="https://onlineaccess.edwardjones.com/app/assets/edwardjones-logo-US.png" alt="" />
          </div>
        </div>
        <div class="item welcome">
        </div>
        <form className='flex flex-col mx-auto max-w-[70%]'>
          <h1 className='pl-4 font-medium text-4xl pb-4'>Welcome to InvestSafe</h1>
          <button className='bg-[#0076a0] rounded mt-8 py-4 text-white' onClick={handleLoginClient1}>Client 1 - Jenny</button>
          <button className='bg-[#0076a0] rounded mt-8 py-4 text-white' onClick={handleLoginClient2}>Client 2 - John</button>
          <button className='bg-[#0076a0] rounded mt-8 py-4 text-white' onClick={handleLoginClient3}>Client 3 - Brad</button>
          <button className='bg-[#0076a0] rounded mt-8 py-4 text-white' onClick={handleLoginClient1}>Financial Advisor</button>
        </form>
        <div class="item welcome"></div>
      </div>
    </div>
  )
};

export default Login;
