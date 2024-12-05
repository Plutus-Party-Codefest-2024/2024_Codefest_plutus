import React from 'react';
import './Trade.css'


const Trade = () => (
  <div>
    <header className="bg-gray-700 text-white p-4">
        <div className="flex items-center justify-between">
            <div className="text-xl font-bold">
                <img src="https://exitmap.com/wp-content/uploads/2022/03/Edward-Jones-logo.png" alt="Logo" class="h-8 inline-block mr-3" /> Online Trading  
            </div>
            <nav>
                <ul class="flex space-x-6">
                    <li><a href="/Login" className="hover:text-gray-200">Home</a></li>
                    <li><a href="/Login" className="hover:text-gray-200">About</a></li>
                    <li><a href="/Login" className="hover:text-gray-200">Contact</a></li>
                    <li><a href="/Login" className="hover:text-gray-200">Trade</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <div class="flex">

        <aside class="w-1/3 bg-white p-4 shadow-md">
            <div class="space-y-4">
                <div class="bg-gray-200 p-4 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold">Card 1</h3>
                    <p>Content of card 1...</p>
                </div>
                <div class="bg-gray-200 p-4 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold">Card 2</h3>
                    <p>Content of card 2...</p>
                </div>
                <div class="bg-gray-200 p-4 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold">Card 3</h3>
                    <p>Content of card 3...</p>
                </div>
            </div>
        </aside>

        <main class="w-2/3 bg-white p-4">

            <div class="mb-6">
                <input type="text" placeholder="Search..." className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"></input>
            </div>

            <table class="min-w-full table-auto border-collapse">
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
                        <td class="px-4 py-2"><button className="bg-blue-500 text-white px-4 py-2 rounded">Buy</button></td>
                    </tr>
                    <tr class="border-b">
                        <td class="px-4 py-2">2</td>
                        <td class="px-4 py-2">Stock B</td>
                        <td class="px-4 py-2">$150</td>
                        <td class="px-4 py-2">30</td>
                        <td class="px-4 py-2"><button className="bg-blue-500 text-white px-4 py-2 rounded">Buy</button></td>
                    </tr>
                </tbody>
            </table>
        </main>

    </div>
  </div>
);

Trade.propTypes = {};

Trade.defaultProps = {};

export default Trade;
