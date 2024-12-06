import './Homepage.css'
import React, { useState, useEffect }  from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPlusSquare, FaBell, FaCog, FaPhoneAlt, FaClipboardList, FaEnvelope, FaBullhorn, FaRegStar, FaChartLine, FaGlobe} from 'react-icons/fa';
import { FaMountainCity } from 'react-icons/fa6';
import { MdOutlineQuestionMark } from "react-icons/md";
import { CgMenuGridO } from "react-icons/cg";
import { IoMdPeople, IoIosPaper } from "react-icons/io";
import { ImStack } from "react-icons/im";
import { GrDocument } from "react-icons/gr";




const Homepage = () => {
    const navigate = useNavigate(); // Hook for navigation

    const handleClick = (e) => {
        e.preventDefault();
        navigate('/holdings1');
    };

    return (
        <div>
            <header className="bg-white flex items-center p-4 w-full">
                <div className="flex-shrink-0">
                    <div className="bg-yellow-500 p-4">
                        <img src="https://onlineaccess.edwardjones.com/app/assets/edwardjones-logo-US.png" alt="" width="50px" />
                    </div>
                </div>

                <div className="flex-grow flex justify-center">
                    <form className="max-w-md mx-auto">   
                        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div class="relative">
                            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                            </div>
                            <input type="search" id="default-search" class="block w-[420px] p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." required />
                        </div>
                    </form>
                </div>

                <div className="flex-shrink-0 flex justify-end space-x-4">
                    <FaPlusSquare className="text-gray-500" size={40} />
                    <FaMountainCity className="text-gray-500" size={40} />
                    <MdOutlineQuestionMark className="text-gray-500" size={40} />
                    <FaBell className="text-gray-500" size={40} />
                    <img src="https://res.cloudinary.com/hy4kyit2a/f_auto,fl_lossy,q_70/learn/modules/high-velocity-sales/get-to-know-the-console-and-cadences/images/a1d4a8972e35806d435b7a05edba7910_kix.maunvh87ew35.png" width="40px" />
                </div>
            </header>
            <nav className="border-t border-gray-300 p-4 flex items-center space-x-4">
                <CgMenuGridO className="text-gray-500" size={40} />
                <h3>Salesforce Desktop</h3>
                <div className="w-[200px] bg-blue-200 border-t-4 border-blue-500 p-4">Home</div>
                <select></select>
            </nav>
            <div id="main">
                <br/>
                <nav className="m-[20px] flex items-center bg-white">
                    <div className="bg-gray-200 w-[50px] h-[100px] p-2 flex items-start justify-center mr-4">
                        <span className="border border-black bg-white flex items-center justify-center">
                            <FaCog />
                        </span>
                    </div>
                    <div className="bg-white flex items-center">
                        <div className="border border-black flex flex-col items-center space-y-2 w-[90px] h-[90px] ml-2  mr-2">
                            <FaPhoneAlt className="bg-purple-500 text-white m-2 p-1" size={40} />
                            <span className="flex items-center">Police</span>
                        </div>
                        <div className="border border-black flex flex-col items-center space-y-2 w-[90px] h-[90px] ml-2  mr-2">
                            <FaClipboardList className="bg-green-500 text-white m-2 p-1" size={40} />
                            <span className="flex items-center">FSPends</span>
                        </div>
                        <div className="border border-black flex flex-col items-center space-y-2 w-[90px] h-[90px] ml-2  mr-2">
                            <FaEnvelope className="bg-orange-500 text-white m-2 p-1" size={40} />
                            <span className="flex items-center">Msg Center</span>
                        </div>
                        <div className="border border-black flex flex-col items-center space-y-2 w-[90px] h-[90px] ml-2  mr-2">
                            <FaEnvelope className="bg-blue-500 text-white m-2 p-1" size={40} />
                            <span className="flex items-center">Email</span>
                        </div>
                        <div className="border border-black flex flex-col items-center space-y-2 w-[90px] h-[90px] ml-2  mr-2">
                            <FaGlobe className="bg-red-500 text-white m-2 p-1" size={40} />
                            <span className="flex items-center">Internet</span>
                        </div>
                        <div className="border border-black flex flex-col items-center space-y-2 w-[90px] h-[90px] ml-2  mr-2">
                            <IoMdPeople className="bg-orange-500 text-white m-2 p-1" size={40} />
                            <span className="flex items-center">My Branch</span>
                        </div>
                        <div className="border border-black flex flex-col items-center space-y-2 w-[90px] h-[90px] ml-2  mr-2">
                            <FaBell className="bg-gray-500 text-white m-2 p-1" size={40} />
                            <span className="flex items-center">Directory</span>
                        </div>
                        <div className="border border-black flex flex-col items-center space-y-2 w-[90px] h-[90px] ml-2  mr-2">
                            <FaBell className="bg-green-800 text-white m-2 p-1" size={40} />
                            <span className="flex items-center">Quotes</span>
                        </div>
                        <div className="border border-black flex flex-col items-center space-y-2 w-[90px] h-[90px] ml-2  mr-2">
                            <FaBell className="bg-gray-800 text-white m-2 p-1" size={40} />
                            <span className="flex items-center">Document</span>
                        </div>
                        <div className="border border-black flex flex-col items-center space-y-2 w-[90px] h-[90px] ml-2  mr-2">
                            <IoIosPaper className="bg-blue-800 text-white m-2 p-1" size={40} />
                            <span className="flex items-center">Timesheet</span>
                        </div>
                        <div className="border border-black flex flex-col items-center space-y-2 w-[90px] h-[90px] ml-2  mr-2">
                            <FaBullhorn className="bg-blue-300 text-white m-2 p-1" size={40} />
                            <span className="flex items-center">Amplify</span>
                        </div>
                        <div className="border border-black flex flex-col items-center space-y-2 w-[90px] h-[90px] ml-2  mr-2">
                            <ImStack className="bg-blue-600 text-white m-2 p-1" size={40} />
                            <span className="flex items-center">JonesLink</span>
                        </div>
                        <div className="border border-black flex flex-col items-center space-y-2 w-[90px] h-[90px] ml-2  mr-2">
                            <GrDocument className="bg-blue-600 text-white m-2 p-1" size={40} />
                            <span className="flex items-center">WordPower</span>
                        </div>
                        <div className="border border-black flex flex-col items-center space-y-2 w-[90px] h-[90px] ml-2  mr-2">
                            <FaRegStar className="bg-blue-300 text-white m-2 p-1" size={40} />
                            <span className="flex items-center">Job Info</span>
                        </div>
                        <div className="border border-black flex flex-col items-center space-y-2 w-[90px] h-[90px] ml-2  mr-2">
                            <FaChartLine className="bg-green-700 text-white m-2 p-1" size={40} />
                            <span className="flex items-center">Market Opp</span>
                        </div>
                    </div>
                </nav>
                <br/>
                <br/>
            </div>
        </div>
    )
};

export default Homepage