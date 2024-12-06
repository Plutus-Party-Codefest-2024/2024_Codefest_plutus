import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useState } from 'react';
import { FaPlusSquare, FaBell, FaCog, FaPhoneAlt, FaClipboardList, FaEnvelope, FaBullhorn, FaRegStar, FaChartLine, FaGlobe } from 'react-icons/fa';
import { FaMountainCity } from 'react-icons/fa6';
import { MdOutlineQuestionMark } from "react-icons/md";
import { CgMenuGridO } from "react-icons/cg";
import { IoMdPeople, IoIosPaper } from "react-icons/io";
import { ImStack } from "react-icons/im";
import { GrDocument } from "react-icons/gr";


const FAVerify3 = () => {
    const navigate = useNavigate(); // Hook for navigation

    const handleClick1 = (e) => {
        e.preventDefault();
        navigate('/');
    };

    // State to track which rules are visible
    const [visibleRules, setVisibleRules] = useState({
        rule1: false,
        rule2: false,
        rule3: false,
        rule4: false,
        rule5: false,
    });

    // Effect to handle the timing logic
    useEffect(() => {
        // Timers for showing rules
        const timers = [
            setTimeout(() => setVisibleRules((prev) => ({ ...prev, rule1: true })), 0), // Show rule1 after 0.5 seconds
            setTimeout(() => setVisibleRules((prev) => ({ ...prev, rule2: true })), 0), // Show rule2 after 1.5 seconds
            setTimeout(() => setVisibleRules((prev) => ({ ...prev, rule3: true })), 0), // Show rule3 after 3 seconds
            setTimeout(() => setVisibleRules((prev) => ({ ...prev, rule4: true })), 0), // Show rule3 after 4 seconds
            setTimeout(() => setVisibleRules((prev) => ({ ...prev, rule5: true })), 0), // Show rule3 after 6 seconds
        ];

        // Cleanup timers on component unmount
        return () => timers.forEach((timer) => clearTimeout(timer));
    }, []);

    const isLoading = Object.values(visibleRules).includes(false);

    const data = [
        { field: 'Client', value: 'Brad Humphrey' },
        { field: 'Account', value: '472-14893-1-3' },
        { field: 'Action Type', value: 'Buy' },
        { field: 'Symbol', value: 'NVDA' },
        { field: 'Shares', value: '1,000' },
        { field: 'Type', value: 'Market' },
        { field: 'Current Bid/Ask', value: '144.08 / 145.10' },
        { field: 'Estimate', value: '$145,100' },
    ];


    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center">
            <header className="flexbg-white flex items-center p-4 w-full">
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
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
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
                    <img src="https://res.cloudinary.com/hy4kyit2a/f_auto,fl_lossy,q_70/learn/modules/high-velocity-sales/get-to-know-the-console-and-cadences/images/a1d4a8972e35806d435b7a05edba7910_kix.maunvh87ew35.png" width="40px" alt='Logo' />
                </div>
            </header>
            <nav className="border-t border-gray-300 p-4 flex items-center justify-end space-x-4">
                <CgMenuGridO className="text-gray-500" size={40} />
                <h3>Salesforce Desktop</h3>
                <div className="w-[200px] bg-blue-200 border-t-4 border-blue-500 p-4">Home</div>
                <select></select>
            </nav>
            <div id="main">
                <br />
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
                <br />
                <br />
                
                <div className="flex flex-row items-center justify-center space-x-6 mt-8 w-full max-w-4xl mx-auto">
                    <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
                        <h2 className="text-xl font-bold text-center text-gray-800 mb-4">Order Details</h2>
                        <div className="grid grid-cols-2 gap-4">
                            {data.map((item, index) => (
                                <React.Fragment key={index}>
                                    <div className="font-semibold text-gray-700">{item.field}:</div>
                                    <div className="text-gray-900">{item.value}</div>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
                        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
                            Validation Rules Checker
                        </h1>

                        <div className="space-y-3">
                            {visibleRules.rule1 && (
                                <div id="rule1" className="flex items-center justify-between border-b pb-2">
                                    <span className="text-gray-700">Ordering Enabled</span>
                                    <span className="text-green-500 font-semibold">✔ Valid</span>
                                </div>
                            )}
                            {visibleRules.rule2 && (
                                <div id="rule2" className="flex items-center justify-between border-b pb-2">
                                    <span className="text-gray-700">Account Restricted</span>
                                    <span className="text-green-500 font-semibold">✔ Valid</span>
                                </div>
                            )}
                            {visibleRules.rule3 && (
                                <div id="rule3" className="flex items-center justify-between border-b pb-2">
                                    <span className="text-gray-700">Funding Availability</span>
                                    <span className="text-green-500 font-semibold">✔ Valid</span>
                                </div>
                            )}
                            {visibleRules.rule4 && (
                                <div id="rule4" className="flex items-center justify-between border-b pb-2">
                                    <span className="text-gray-700">Product Review</span>
                                    <span className="text-yellow-500 font-semibold">⚠ Large Trade</span>
                                </div>
                            )}
                            {visibleRules.rule5 && (
                                <div id="rule5" className="flex items-center justify-between border-b pb-2">
                                    <span className="text-gray-700">Risk Review</span>
                                    <span className="text-green-500 font-semibold">✔ Valid</span>
                                </div>
                            )}
                        </div>

                        {isLoading && (
                            <div className="mt-6 flex justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="50" height="50">
                                    <circle
                                        cx="50"
                                        cy="50"
                                        r="45"
                                        stroke="lightblue"
                                        strokeWidth="10"
                                        fill="none"
                                        strokeDasharray="283"
                                        strokeDashoffset="75"
                                        strokeLinecap="round"
                                    >
                                        <animateTransform
                                            attributeName="transform"
                                            type="rotate"
                                            from="0 50 50"
                                            to="360 50 50"
                                            dur="1s"
                                            repeatCount="indefinite"
                                        />
                                    </circle>
                                </svg>
                            </div>
                        )}

                        <div className="mt-6 flex justify-between space-x-4">
                            <button className="bg-blue-500 text-white font-bold py-2 rounded-lg hover:bg-blue-600 transition w-1/3 
                                                disabled:bg-gray-400 disabled:text-gray-700 disabled:cursor-not-allowed" onClick={handleClick1}>
                                Proceed
                            </button>
                            <button className="bg-blue-500 text-white font-bold py-2 rounded-lg hover:bg-blue-600 transition w-1/3" onClick={handleClick1}>
                                Edit
                            </button>
                            <button className="bg-blue-500 text-white font-bold py-2 rounded-lg hover:bg-blue-600 transition w-1/3" onClick={handleClick1}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
};

export default FAVerify3