import React from 'react';
import { useState } from 'react'
import './Order2.css'
import TonixImage from '../../assets/tonix-chart.jpg';
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { useNavigate } from 'react-router-dom';



function Order2() {

    const [show, setShow] = useState(false); // Initialize 'show' variable

    const navigate = useNavigate(); // Hook for navigation

    const handleClick = (e) => {
        e.preventDefault();
        navigate('/verify2'); // Redirect to the Verify component
    };

    return (
        <div>
            <header className='bg-gray-700 text-white p-4'>
                <div className='flex items-center justify-between'>
                    <div className='text-xl font-bold'>
                        <img src='https://exitmap.com/wp-content/uploads/2022/03/Edward-Jones-logo.png' alt='Logo' class='h-8 inline-block mr-3' /> Online Access - Client John Holdings
                    </div>
                    <nav>
                        <ul className='flex space-x-6'>
                            <li><a href='/' className='hover:text-gray-200'>Home Page</a></li>
                            <li><a href='/order2' className='hover:text-gray-200'>Trade</a></li>
                        </ul>
                    </nav>
                </div>
            </header>

            <div className="flex">

                <main className="w-2/3 bg-white p-4 mx-auto">

                    <div className="flex flex-auto mb-6">
                        <input type="text" placeholder="TNXP" className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"></input>
                        <button
                            onClick={() => setShow(!show)}
                            className="bg-blue-500 text-white px-4 py-2 rounded-md"
                        >
                            Search
                        </button>
                    </div>
                    <div className={`${show ? "block" : "hidden"}`}>
                        <img src={TonixImage} alt="Tonix Chart" />
                        <table className="min-w-full table-auto border-collapse">

                            <tbody>
                                <tr class="border-b">
                                    <td class="px-4 py-2">
                                        <label htmlFor="action" className="block text-sm/6 font-medium text-gray-900">
                                            Action
                                        </label>
                                        <div className="mt-2 grid grid-cols-1">
                                            <select
                                                id="action"
                                                name="action"
                                                autoComplete="action-name"
                                                className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                            >
                                                <option>Buy</option>
                                                <option>Sell</option>
                                            </select>
                                            <ChevronDownIcon
                                                aria-hidden="true"
                                                className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                                            />
                                        </div>
                                    </td>
                                    <td class="px-4 py-2">
                                        <label htmlFor="first-name" className="block text-sm/6 font-medium text-gray-900">
                                            Shares
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="quantity"
                                                name="quantity"
                                                type="text"
                                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                            />
                                        </div>
                                    </td>
                                </tr>
                                <tr class="border-b">
                                    <td class="px-4 py-2">
                                        <label htmlFor="action" className="block text-sm/6 font-medium text-gray-900">
                                            Order Type
                                        </label>
                                        <div className="mt-2 grid grid-cols-1">
                                            <select
                                                id="order-type"
                                                name="order-type"
                                                className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                            >
                                                <option>Market</option>
                                                <option>Sell</option>
                                            </select>
                                            <ChevronDownIcon
                                                aria-hidden="true"
                                                className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                                            />
                                        </div>
                                    </td>
                                    <td class="px-4 py-2">
                                        <label htmlFor="duration" className="block text-sm/6 font-medium text-gray-900">
                                            Duration
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="duration"
                                                name="duration"
                                                type="text"
                                                placeholder='Day'
                                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                            />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>

                                    </td>
                                    <td className='text-right'>
                                        <button type="button" className="text-sm/6 font-semibold text-gray-900 px-4 py-4">
                                            Cancel
                                        </button>
                                        <button
                                            type="submit"
                                            onClick={handleClick}
                                            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        >
                                            Submit
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </main>

            </div>
        </div>
    );
}


export default Order2
