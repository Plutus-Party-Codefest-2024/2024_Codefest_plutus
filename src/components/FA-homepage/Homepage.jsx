import './Homepage.css'
import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import { FaPlusSquare, FaBell, FaCog, FaPhoneAlt, FaClipboardList, FaEnvelope, FaBullhorn, FaRegStar, FaChartLine, FaGlobe } from 'react-icons/fa';
import { FaMountainCity } from 'react-icons/fa6';
import { MdOutlineQuestionMark } from "react-icons/md";
import { CgMenuGridO } from "react-icons/cg";
import { IoMdPeople, IoIosPaper } from "react-icons/io";
import { ImStack } from "react-icons/im";
import { GrDocument } from "react-icons/gr";
import Modal from '../Modal'




const Homepage = () => {
    // const navigate = useNavigate(); // Hook for navigation

    // const handleClick = (e) => {
    //     e.preventDefault();
    //     navigate('/holdings1');
    // };


    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    useEffect(() => {
        // Set a timer to open the modal after 10 seconds
        const timer = setTimeout(() => {
            openModal();
        }, 10000); // 10,000ms = 10 seconds

        // Clean up the timer when the component unmounts
        return () => clearTimeout(timer);
    }, []);
    const emails = [
        {
            title: "Sell Notification from Jenny",
            summary: "Clienty Jenny has just placed an automatic Sell order for 50 TSLA",
        },
        {
            title: "WARNING - Client John has attempted to place an invalid order ",
            summary: "John attempted to purchase TNXP which is against the selected risk for the porfolio.",
        },
        {
            title: "Tax Optimization Strategies",
            summary: "Can you provide advice on how to optimize my tax situation for this year? I'm looking for ways to reduce my taxable income.",
        },
        {
            title: "Diversifying My Portfolio",
            summary: "I'm looking to diversify my portfolio beyond just stocks and bonds. I'd appreciate your suggestions on other asset classes.",
        },
        {
            title: "Estate Planning Questions",
            summary: "I need assistance with estate planning, particularly with regard to wills and trusts. Please advise me on the best approach.",
        },
        {
            title: "Mortgage Refinancing Inquiry",
            summary: "I'm considering refinancing my mortgage. What would be the best options based on my current financial situation?",
        },
        {
            title: "College Savings Plans for My Kids",
            summary: "What are the best savings plans for my children's future college tuition? I'd like to explore tax-advantaged accounts.",
        },
        {
            title: "Risk Management in My Portfolio",
            summary: "I’m concerned about the level of risk in my portfolio. Could you suggest ways to better balance risk and reward?",
        },
        {
            title: "Stock Market Trends and Predictions",
            summary: "I’m interested in hearing your thoughts on current stock market trends and how they might impact my investments.",
        },
        {
            title: "Insurance Coverage Review",
            summary: "I want to review my current insurance coverage. Can you help me determine if I need additional policies or adjustments?",
        },
        {
            title: "Real Estate Investment Strategies",
            summary: "I’m considering investing in real estate. Can you suggest strategies and potential risks to watch out for?",
        },
        {
            title: "Business Expansion Funding",
            summary: "I am looking into ways to finance the expansion of my business. What would you recommend as the best funding options?",
        },
        {
            title: "Sustainable Investing Options",
            summary: "I'm interested in exploring sustainable and socially responsible investing options. Could you provide me with some suitable choices?",
        },
        {
            title: "401k Plan Contributions",
            summary: "Can we discuss my 401k contributions and how I can maximize my savings for retirement?",
        },
        {
            title: "Debt Reduction Strategies",
            summary: "I have some outstanding debts. What would be the most effective strategy to pay them down without jeopardizing my long-term financial goals?",
        },
        {
            title: "Asset Allocation Review",
            summary: "I'd like to review my asset allocation. Can you analyze my current strategy and suggest any changes?",
        },
        {
            title: "Financial Planning for a Growing Family",
            summary: "As my family grows, I want to reassess my financial plan. Can you help me prioritize savings and investments?",
        },
        {
            title: "Emergency Fund Planning",
            summary: "How much should I have in an emergency fund? I want to ensure I’m financially prepared for any unexpected expenses.",
        },
        {
            title: "Diversification in International Markets",
            summary: "Should I consider investing in international markets? What are the pros and cons of diversifying globally?",
        },
        {
            title: "Impact of Recent Tax Law Changes",
            summary: "I want to understand how recent changes in tax law may affect my personal finances. Can you provide some insights?",
        },
    ];
    return (
        <div>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <h2 className="text-lg font-bold">Hello from the Modal!</h2>
                <p className="mt-2 text-gray-600">
                    Your client Brad has a pending order that requires your attention!
                </p>
                <button
                    className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
                    onClick={closeModal}
                >
                    Close Modal
                </button>
            </Modal>
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
            <nav className="border-t border-gray-300 p-4 flex items-center space-x-4">
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
                <div className="flex">
                    <aside className="w-1/6 bg-blue-200 p-4">
                        <div className="flex justify-end">
                            <button className="text-gray-600 hover:text-gray-800 focus:outline-none">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>

                        <div className="mt-4 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 8h18a2 2 0 002-2V8a2 2 0 00-2-2H3a2 2 0 00-2 2v6a2 2 0 002 2z" />
                            </svg>
                            <span className="ml-2 text-gray-800 font-semibold">MESSAGE</span>
                        </div>

                        <div className="mt-2 flex items-center">
                            <span className="text-gray-600">All</span>
                            <span className="ml-auto text-gray-800 font-medium bg-gray-200 rounded-full px-2 py-1 text-sm">
                                42
                            </span>
                        </div>
                        <div className="mt-2 flex items-center">
                            <span className="text-gray-600">Action Required</span>
                            <span className="ml-auto text-gray-800 font-medium bg-gray-200 rounded-full px-2 py-1 text-sm">
                                3
                            </span>
                        </div>
                        <div className="mt-2 flex items-center bg-blue-500 text-white p-2 rounded-lg">
                            <span className="font-semibold">From InvestSafe</span>
                            <span className="ml-auto font-medium bg-white text-blue-500 rounded-full px-3 py-1 text-sm">
                                20
                            </span>
                        </div>
                    </aside>
                    <aside className="w-1/3 bg-gray-100 p-4 overflow-auto h-screen">
                        <div className="flex items-center bg-gray-200 p-4 rounded-lg">
                            <div className="flex items-center space-x-4">
                                <select className="bg-gray-100 text-gray-600 border border-gray-300 rounded-md px-4 py-2">
                                    <option>All Messages</option>
                                    <option>Unread</option>
                                    <option>Starred</option>
                                </select>

                                <button className="text-gray-600 p-2 hover:bg-gray-300 rounded-full">

                                </button>
                            </div>

                            <div className="ml-auto">
                                <input type="checkbox" className="form-checkbox text-blue-500" />
                            </div>
                        </div>

                        <div className="mt-4 grid grid-cols-1 gap-4">
                            {emails.map((email, index) => (
                                <div key={index} className="bg-white p-4 rounded-lg shadow-md space-y-4">
                                    <h3 className="font-semibold text-lg text-gray-800">{email.title}</h3>

                                    <p className="text-gray-500 text-sm">{email.summary}</p>

                                    <div className="flex justify-between items-center">
                                        <input type="checkbox" className="form-checkbox text-blue-500" />
                                        <button className="bg-gray-800 text-white py-2 px-4 rounded-md text-sm">
                                            Open
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </aside>
                    <main className="w-1/2 bg-white p-4">
                        <div className="flex justify-between items-center">
                            <span className="font-medium">Close</span>
                            <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex space-x-4 mt-4">
                            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none">
                                Reply
                            </button>
                            <button className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 focus:outline-none">
                                Delete
                            </button>
                            <button className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 focus:outline-none">
                                Move To
                            </button>
                        </div>
                        <div className="mt-6">
                            <div className="mb-2">
                                <span className="font-bold">From:</span> <span className="text-gray-700">Client John</span>
                            </div>
                            <div className="mb-2 text-gray-500">
                                <span className="font-bold">To:</span> <span className="text-gray-600">Jim Doe, Financial Advisor</span>
                            </div>
                            <div className="mb-2 font-bold text-lg">
                                <span className="text-black">WARNING - Client John has attempted to place an invalid order</span>
                            </div>
                            <div className="mb-2 text-sm text-gray-500">
                                <span className="text-black">Date:</span> March 15, 2024
                            </div>
                            <div className="mt-4 text-gray-800">
                                John attempted to purchase TNXP which is against the selected risk for the porfolio. <br />
                                We recomend reviewing the client's risk tolarance at the next opportunity.
                            </div>
                        </div>
                    </main>


                </div>
            </div>
        </div>

    )
};

export default Homepage