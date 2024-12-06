import React from 'react';
import './holdings.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';



function holdings3() {

    // const navigate = useNavigate(); // Hook for navigation

    // const handleClick = (e) => {
    //     e.preventDefault();
    //     navigate('/message'); // Redirect to the Trade component
    // };

    // const [isModalOpen, setIsModalOpen] = useState(false);

    // const openModal = () => setIsModalOpen(true);
    // const closeModal = () => setIsModalOpen(false);

    return (
        <div>
            {/* <VerifyModal isOpen={isModalOpen} onClose={closeModal}>
                <h2 className="text-lg font-bold">Hello from the Modal!</h2>
                <p className="mt-2 text-gray-600">
                    This is a simple modal component in React.
                </p>
                <button
                    className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
                    onClick={closeModal}
                >
                    Close Modal
                </button>
            </VerifyModal> */}
            <header className="bg-gray-700 text-white p-4">
                <div className="flex items-center justify-between">
                    <div className="text-xl font-bold">
                        <img src="https://exitmap.com/wp-content/uploads/2022/03/Edward-Jones-logo.png" alt="Logo" class="h-8 inline-block mr-3" /> Online Access - Client Jonny Holdings
                    </div>
                    <nav>
                        <ul className="flex space-x-6">
                            <li><a href="/Login" className="hover:text-gray-200">Online Access</a></li>
                            {/* <li><button onClick={handleClick} className="hover:text-gray-200">Secure Message</button></li>
                            <li><a href="/Login" className="hover:text-gray-200">Contact</a></li> */}
                            <li><a href="/Login" className="hover:text-gray-200">Trade</a></li>
                        </ul>
                    </nav>
                </div>
            </header>

            <div className="flex">

                {/* <aside className="w-1/3 bg-white p-4 shadow-md">
                    <div className="space-y-4">
                        <div className="bg-gray-200 p-4 rounded-lg shadow-sm">
                            <h3 className="text-xl font-semibold">Card 1</h3>
                            <p>Content of card 1...</p>
                        </div>
                        <div className="bg-gray-200 p-4 rounded-lg shadow-sm">
                            <h3 className="text-xl font-semibold">Card 2</h3>
                            <p>Content of card 2...</p>
                        </div>
                        <div className="bg-gray-200 p-4 rounded-lg shadow-sm">
                            <h3 className="text-xl font-semibold">Card 3</h3>
                            <p>Content of card 3...</p>
                        </div>
                    </div>
                </aside> */}

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
                                <td className="px-4 py-2"><button className="bg-blue-500 text-white px-4 py-2 rounded">Trade</button></td>
                            </tr>
                            <tr className="border-b">
                                <td className="px-4 py-2">2</td>
                                <td className="px-4 py-2">Stock B</td>
                                <td className="px-4 py-2">$150</td>
                                <td className="px-4 py-2">30</td>
                                <td className="px-4 py-2"><button className="bg-blue-500 text-white px-4 py-2 rounded">Trade</button></td>
                            </tr>
                            <tr className="border-b">
                                <td className="px-4 py-2">3</td>
                                <td className="px-4 py-2">Stock C</td>
                                <td className="px-4 py-2">$200</td>
                                <td className="px-4 py-2">300</td>
                                <td className="px-4 py-2"><button className="bg-blue-500 text-white px-4 py-2 rounded">Trade</button></td>
                            </tr>
                            <tr className="border-b">
                                <td className="px-4 py-2">4</td>
                                <td className="px-4 py-2">Stock D</td>
                                <td className="px-4 py-2">$300</td>
                                <td className="px-4 py-2">25</td>
                                <td className="px-4 py-2"><button className="bg-blue-500 text-white px-4 py-2 rounded">Trade</button></td>
                            </tr>
                            <tr className="border-b">
                                <td className="px-4 py-2">5</td>
                                <td className="px-4 py-2">Stock E</td>
                                <td className="px-4 py-2">$500</td>
                                <td className="px-4 py-2">15</td>
                                <td className="px-4 py-2"><button className="bg-blue-500 text-white px-4 py-2 rounded">Trade</button></td>
                            </tr>
                        </tbody>
                    </table>
                </main>

            </div>
        </div>
    );
}


export default holdings3
