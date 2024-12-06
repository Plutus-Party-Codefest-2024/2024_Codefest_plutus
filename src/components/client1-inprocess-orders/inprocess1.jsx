import React from 'react';
// import { useNavigate } from 'react-router-dom';
import './holdings.css';


const Inprocess1 = () => {


    return (
        <div>

            <header className='bg-gray-700 text-white p-4'>
                <div className='flex items-center justify-between'>
                    <div className='text-xl font-bold'>
                        <img src='https://exitmap.com/wp-content/uploads/2022/03/Edward-Jones-logo.png' alt='Logo' class='h-8 inline-block mr-3' /> Online Access - Client Jenny in process Orders
                    </div>
                    <nav>
                        <ul className='flex space-x-6'>
                            <li><a href='/' className='hover:text-gray-200'>Home Page</a></li>
                            <li><a href='/order1' className='hover:text-gray-200'>Trade</a></li>
                        </ul>
                    </nav>
                </div>
            </header>

            <div className='flex justify-center items-center'>

                <main className='w-2/3 bg-white p-4'>

                    <div className='mb-6'>
                        <input type='text' placeholder='Search...' className='w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'></input>
                    </div>

                    <table className='min-w-full table-auto border-collapse '>
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
                                <td className='px-4 py-2 text-center'>$369.49</td>
                                <td className='px-4 py-2 text-center'>50</td>
                                <td className='px-4 py-2 text-center'>Sell Order Pending</td>
                            </tr>

                        </tbody>
                    </table>
                </main>

            </div>
        </div>
    );
}


export default Inprocess1
