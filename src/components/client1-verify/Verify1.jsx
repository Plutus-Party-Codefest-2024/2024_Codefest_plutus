import React, { useState, useEffect } from 'react';
import './verify1.css';
import { useNavigate } from 'react-router-dom';

const Verify1 = () => {
    const navigate = useNavigate();

    const handleClick1 = (e) => {
        e.preventDefault();
        navigate('/holdings1');
    };

    const handleClick2 = (e) => {
        e.preventDefault();
        navigate('/inprocess1');
    };

    const [visibleRules, setVisibleRules] = useState({
        rule1: false,
        rule2: false,
        rule3: false,
        rule4: false,
        rule5: false,
    });

    useEffect(() => {
        const timers = [
            setTimeout(() => setVisibleRules((prev) => ({ ...prev, rule1: true })), 500),
            setTimeout(() => setVisibleRules((prev) => ({ ...prev, rule2: true })), 1500),
            setTimeout(() => setVisibleRules((prev) => ({ ...prev, rule3: true })), 3000),
            setTimeout(() => setVisibleRules((prev) => ({ ...prev, rule4: true })), 4000),
            setTimeout(() => setVisibleRules((prev) => ({ ...prev, rule5: true })), 6000),
        ];

        return () => timers.forEach((timer) => clearTimeout(timer));
    }, []);

    const isLoading = Object.values(visibleRules).includes(false);

    const data = [
        { field: 'Action Type', value: 'Sell' },
        { field: 'Symbol', value: 'TSLA' },
        { field: 'Shares', value: '50' },
        { field: 'Type', value: 'Market' },
        { field: 'Current Bid/Ask', value: '368.54 / 369.83' },
        { field: 'Estimate', value: '$18,427.00' },
    ];


    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center">
            <header className="bg-gray-700 text-white p-4 w-full">
                <div className="flex items-center justify-between">
                    <div className="text-xl font-bold">
                        <img
                            src="https://exitmap.com/wp-content/uploads/2022/03/Edward-Jones-logo.png"
                            alt="Logo"
                            className="h-8 inline-block mr-3"
                        />
                        Online Access - Client Jenny Holdings
                    </div>
                    <nav>
                        <ul className="flex space-x-6">
                            <li>
                                <a href="/" className="hover:text-gray-200">
                                    Home Page
                                </a>
                            </li>
                            <li>
                                <a href="/order1" className="hover:text-gray-200">
                                    Trade
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

            <div className="bg-gray-100 flex flex-col items-center space-y-6 mt-8 w-full max-w-4xl">
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
                    <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">Validation Rules Checker</h1>
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
                                <span className="text-green-500 font-semibold">✔ Valid</span>
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
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 100 100"
                                width="50"
                                height="50"
                            >
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
                        <button
                            className="bg-blue-500 text-white font-bold py-2 rounded-lg hover:bg-blue-600 transition w-1/3"
                            onClick={handleClick2}
                        >
                            Proceed
                        </button>
                        <button
                            className="bg-blue-500 text-white font-bold py-2 rounded-lg hover:bg-blue-600 transition w-1/3"
                            onClick={handleClick1}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Verify1;
