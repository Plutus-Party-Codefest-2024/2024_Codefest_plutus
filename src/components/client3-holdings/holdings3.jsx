import React from 'react';
import './holdings.css';
import { useNavigate } from 'react-router-dom';
// import { useState } from 'react';



function Holdings3() {

    const navigate = useNavigate(); // Hook for navigation

    const handleClickClient1 = (e) => {
        e.preventDefault();
        navigate('/order3');
    };

    return (
        <div>
            <header className='bg-gray-700 text-white p-4'>
                <div className='flex items-center justify-between'>
                    <div className='text-xl font-bold'>
                        <img src='https://exitmap.com/wp-content/uploads/2022/03/Edward-Jones-logo.png' alt='Logo' class='h-8 inline-block mr-3' /> Online Access - Client Jonny Holdings
                    </div>
                    <nav>
                        <ul className='flex space-x-6'>
                            <li><a href='/' className='hover:text-gray-200'>Home Page</a></li>
                            <li><a href='/order3' className='hover:text-gray-200'>Trade</a></li>
                        </ul>
                    </nav>
                </div>
            </header>

            <div className='flex justify-center items-center'>

                <main className='w-2/3 bg-white p-4'>

                    <div className='mb-6'>
                        <input type='text' placeholder='Search...' className='w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'></input>
                    </div>

                    <table className='min-w-full table-auto border-collapse'>
                        <thead className='bg-zinc-100 text-black'>
                            <tr>
                                <th className='px-4 py-2'>Description</th>
                                <th className='px-4 py-2'>Price / Share</th>
                                <th className='px-4 py-2'>Shares</th>
                                <th className='px-4 py-2'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='border-b'>
                                <td className='px-4 py-2 text-center'>TSLA</td>
                                <td className='px-4 py-2 text-center'>$214.39</td>
                                <td className='px-4 py-2 text-center'>413</td>
                                <td className='px-4 py-2 text-center'>
                                    <button className='text-white px-4 py-2 rounded bg-green-500'>Buy</button>  <button className='bg-blue-500 text-white px-4 py-2 rounded' onClick={handleClickClient1}>Sell</button>
                                </td>
                            </tr>

                            <tr className='border-b'>
                                <td className='px-4 py-2 text-center'>AMD</td>
                                <td className='px-4 py-2 text-center'>$202.16</td>
                                <td className='px-4 py-2 text-center'>500</td>
                                <td className='px-4 py-2 text-center'>
                                    <button className='text-white px-4 py-2 rounded bg-green-500'>Buy</button>  <button className='bg-blue-500 text-white px-4 py-2 rounded'>Sell</button>
                                </td>
                            </tr>

                            <tr className='border-b'>
                                <td className='px-4 py-2 text-center'>AAPL</td>
                                <td className='px-4 py-2 text-center'>$207.04</td>
                                <td className='px-4 py-2 text-center'>288</td>
                                <td className='px-4 py-2 text-center'>
                                    <button className='text-white px-4 py-2 rounded bg-green-500'>Buy</button>  <button className='bg-blue-500 text-white px-4 py-2 rounded'>Sell</button>
                                </td>
                            </tr>

                            <tr className='border-b'>
                                <td className='px-4 py-2 text-center'>INTC</td>
                                <td className='px-4 py-2 text-center'>$453.87</td>
                                <td className='px-4 py-2 text-center'>41</td>
                                <td className='px-4 py-2 text-center'>
                                    <button className='text-white px-4 py-2 rounded bg-green-500'>Buy</button>  <button className='bg-blue-500 text-white px-4 py-2 rounded'>Sell</button>
                                </td>
                            </tr>

                            <tr className='border-b'>
                                <td className='px-4 py-2 text-center'>GOOGL</td>
                                <td className='px-4 py-2 text-center'>$101.37</td>
                                <td className='px-4 py-2 text-center'>32</td>
                                <td className='px-4 py-2 text-center'>
                                    <button className='text-white px-4 py-2 rounded bg-green-500'>Buy</button>  <button className='bg-blue-500 text-white px-4 py-2 rounded'>Sell</button>
                                </td>
                            </tr>

                            <tr className='border-b'>
                                <td className='px-4 py-2 text-center'>INTC</td>
                                <td className='px-4 py-2 text-center'>$454.36</td>
                                <td className='px-4 py-2 text-center'>154</td>
                                <td className='px-4 py-2 text-center'>
                                    <button className='text-white px-4 py-2 rounded bg-green-500'>Buy</button>  <button className='bg-blue-500 text-white px-4 py-2 rounded'>Sell</button>
                                </td>
                            </tr>

                            <tr className='border-b'>
                                <td className='px-4 py-2 text-center'>MSFT</td>
                                <td className='px-4 py-2 text-center'>$385.22</td>
                                <td className='px-4 py-2 text-center'>273</td>
                                <td className='px-4 py-2 text-center'>
                                    <button className='text-white px-4 py-2 rounded bg-green-500'>Buy</button>  <button className='bg-blue-500 text-white px-4 py-2 rounded'>Sell</button>
                                </td>
                            </tr>

                            <tr className='border-b'>
                                <td className='px-4 py-2 text-center'>NVDA</td>
                                <td className='px-4 py-2 text-center'>$165.96</td>
                                <td className='px-4 py-2 text-center'>197</td>
                                <td className='px-4 py-2 text-center'>
                                    <button className='text-white px-4 py-2 rounded bg-green-500'>Buy</button>  <button className='bg-blue-500 text-white px-4 py-2 rounded'>Sell</button>
                                </td>
                            </tr>

                            <tr className='border-b'>
                                <td className='px-4 py-2 text-center'>AMD</td>
                                <td className='px-4 py-2 text-center'>$386.72</td>
                                <td className='px-4 py-2 text-center'>497</td>
                                <td className='px-4 py-2 text-center'>
                                    <button className='text-white px-4 py-2 rounded bg-green-500'>Buy</button>  <button className='bg-blue-500 text-white px-4 py-2 rounded'>Sell</button>
                                </td>
                            </tr>

                            <tr className='border-b'>
                                <td className='px-4 py-2 text-center'>NVDA</td>
                                <td className='px-4 py-2 text-center'>$164.99</td>
                                <td className='px-4 py-2 text-center'>68</td>
                                <td className='px-4 py-2 text-center'>
                                    <button className='text-white px-4 py-2 rounded bg-green-500'>Buy</button>  <button className='bg-blue-500 text-white px-4 py-2 rounded'>Sell</button>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </main>

            </div>
        </div>
    );
}


export default Holdings3
