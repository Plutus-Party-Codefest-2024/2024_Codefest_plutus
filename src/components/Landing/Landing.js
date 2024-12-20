import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Landing.css'


const Login = () => {
  const navigate = useNavigate(); // Hook for navigation

  const handleClickClient1 = (e) => {
    e.preventDefault();
    navigate('/holdings1');
  };

  const handleClickClient2 = (e) => {
    e.preventDefault();
    navigate('/holdings2');
  };
  const handleClickClient3 = (e) => {
    e.preventDefault();
    navigate('/holdings3');
  };

  const handleClickFa = (e) => {
    e.preventDefault();
    navigate('/salesforce');
  };
  return (
    <div className='mx-auto'>
      <div className='max-w-screen-md mx-auto'>
        <div>
          <div className="yellowBox">
            <img src="https://onlineaccess.edwardjones.com/app/assets/edwardjones-logo-US.png" alt="" />
          </div>
          <form className='flex flex-col mx-auto max-w-[70%]'>
            <h1 className='font-medium text-4xl pb-4 mx-auto'>Welcome to InvestSafe</h1>
            <button className='bg-[#0076a0] rounded mt-8 py-4 text-white' onClick={handleClickClient1}>Client 1 - Jenny</button>
            <button className='bg-[#0076a0] rounded mt-8 py-4 text-white' onClick={handleClickClient2}>Client 2 - John</button>
            <button className='bg-[#0076a0] rounded mt-8 py-4 text-white' onClick={handleClickClient3}>Client 3 - Brad</button>
            <button className='bg-[#0076a0] rounded mt-8 py-4 text-white' onClick={handleClickFa}>Financial Advisor</button>
          </form>
        </div>
      </div>
    </div>
  )
};

export default Login;
