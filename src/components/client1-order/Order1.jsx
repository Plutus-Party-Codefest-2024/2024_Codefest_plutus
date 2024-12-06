import React from 'react';
import './Order1.css'
// import { useNavigate } from 'react-router-dom';



function Order1() {

    // const navigate = useNavigate(); // Hook for navigation

    // const handleClick = (e) => {
    //   e.preventDefault();
    //   navigate('/message'); // Redirect to the Trade component
    // };

    return (
        <div>
            <header className="bg-gray-700 text-white p-4">
                <div className="flex items-center justify-between">
                    <div className="text-xl font-bold">
                        <img src="https://exitmap.com/wp-content/uploads/2022/03/Edward-Jones-logo.png" alt="Logo" class="h-8 inline-block mr-3" /> Online Trading
                    </div>
                    <nav>
                        <ul className="flex space-x-6">
                            <li><a href="/Login" className="hover:text-gray-200">Home</a></li>
                            <li><a href='/Login' className="hover:text-gray-200">Secure Message</a></li>
                            <li><a href="/Login" className="hover:text-gray-200">Contact</a></li>
                            <li><a href="/Login" className="hover:text-gray-200">Trade</a></li>
                        </ul>
                    </nav>
                </div>
            </header>

            <div className="flex">

                <main className="w-2/3 bg-white p-4 mx-auto">

                    <div className="mb-6">
                        <input type="text" placeholder="Search..." className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"></input>
                    </div>

                    <table className="min-w-full table-auto border-collapse">
                        <thead class="bg-zinc-100 text-black">
                            <tr>
                                <th class="px-4 py-2">ID</th>
                                <th class="px-4 py-2">Asset</th>
                                <th class="px-4 py-2">Price</th>
                                <th class="px-4 py-2">Quantity</th>
                                <th class="px-4 py-2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b">
                                <td class="px-4 py-2">1</td>
                                <td class="px-4 py-2">Stock A</td>
                                <td class="px-4 py-2">$100</td>
                                <td class="px-4 py-2">50</td>
                                <td class="px-4 py-2"><button className="bg-blue-500 text-white px-4 py-2 rounded">Trade</button></td>
                            </tr>
                            <tr class="border-b">
                                <td class="px-4 py-2">2</td>
                                <td class="px-4 py-2">Stock B</td>
                                <td class="px-4 py-2">$150</td>
                                <td class="px-4 py-2">30</td>
                                <td class="px-4 py-2"><button className="bg-blue-500 text-white px-4 py-2 rounded">Trade</button></td>
                            </tr>
                        </tbody>
                    </table>
                </main>

            </div>
        </div>
    );
}


export default Order1
