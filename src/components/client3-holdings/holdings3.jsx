import React from 'react';
import './holdings.css';
// import { useNavigate } from 'react-router-dom';
// import { useState } from 'react';



function holdings3() {

    return (
        <div>
            <header className="bg-gray-700 text-white p-4">
                <div className="flex items-center justify-between">
                    <div className="text-xl font-bold">
                        <img src="https://exitmap.com/wp-content/uploads/2022/03/Edward-Jones-logo.png" alt="Logo" class="h-8 inline-block mr-3" /> Online Access - Client Jonny Holdings
                    </div>
                    <nav>
                        <ul className="flex space-x-6">
                            <li><a href="/landing" className="hover:text-gray-200">Home Page</a></li>
                            <li><a href="/order3" className="hover:text-gray-200">Trade</a></li>
                        </ul>
                    </nav>
                </div>
            </header>

            <div className="flex">

                <main className="w-2/3 bg-white p-4">

                    <div className="mb-6">
                        <input type="text" placeholder="Search..." className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"></input>
                    </div>

                    <table className="min-w-full table-auto border-collapse">
                        <thead className="text-black">
                            <tr>
                                <th className="px-4 py-2">Description</th>
                                <th className="px-4 py-2">Price / Share</th>
                                <th className="px-4 py-2">Shares</th>
                                <th className="px-4 py-2">Quantity</th>
                                <th className="px-4 py-2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b">
                                <td className="px-4 py-2">1</td>
                                <td className="px-4 py-2">Stock A</td>
                                <td className="px-4 py-2">$100</td>
                                <td className="px-4 py-2">100</td>
                                <td className="px-4 py-2"><button className="bg-blue-500 text-white px-4 py-2 rounded">Buy</button>  <button className="bg-blue-500 text-white px-4 py-2 rounded">Sell</button></td>
                            </tr>
                            <tr className="border-b">
                                <td className="px-4 py-2">2</td>
                                <td className="px-4 py-2">Stock B</td>
                                <td className="px-4 py-2">$150</td>
                                <td className="px-4 py-2">30</td>
                                <td className="px-4 py-2"><button className="bg-blue-500 text-white px-4 py-2 rounded">Buy</button>  <button className="bg-blue-500 text-white px-4 py-2 rounded">Sell</button></td>
                            </tr>
                            <tr className="border-b">
                                <td className="px-4 py-2">3</td>
                                <td className="px-4 py-2">Stock C</td>
                                <td className="px-4 py-2">$200</td>
                                <td className="px-4 py-2">300</td>
                                <td className="px-4 py-2"><button className="bg-blue-500 text-white px-4 py-2 rounded">Buy</button>  <button className="bg-blue-500 text-white px-4 py-2 rounded">Sell</button></td>
                            </tr>
                            <tr className="border-b">
                                <td className="px-4 py-2">4</td>
                                <td className="px-4 py-2">Stock D</td>
                                <td className="px-4 py-2">$300</td>
                                <td className="px-4 py-2">25</td>
                                <td className="px-4 py-2"><button className="bg-blue-500 text-white px-4 py-2 rounded">Buy</button>  <button className="bg-blue-500 text-white px-4 py-2 rounded">Sell</button></td>
                            </tr>
                            <tr className="border-b">
                                <td className="px-4 py-2">5</td>
                                <td className="px-4 py-2">Stock E</td>
                                <td className="px-4 py-2">$500</td>
                                <td className="px-4 py-2">15</td>
                                <td className="px-4 py-2"><button className="bg-blue-500 text-white px-4 py-2 rounded">Buy</button>  <button className="bg-blue-500 text-white px-4 py-2 rounded">Sell</button></td>
                            </tr>
                        </tbody>
                    </table>
                </main>

            </div>
        </div>
    );
}


export default holdings3
