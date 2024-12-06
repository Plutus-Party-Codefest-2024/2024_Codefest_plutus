import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useState } from 'react';



const Verify2 = () => {
    const navigate = useNavigate(); // Hook for navigation

    const handleClick = (e) => {
        e.preventDefault();
        navigate('/holdings2');
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
            setTimeout(() => setVisibleRules((prev) => ({ ...prev, rule1: true })), 500), // Show rule1 after 0.5 seconds
            setTimeout(() => setVisibleRules((prev) => ({ ...prev, rule2: true })), 1500), // Show rule2 after 1.5 seconds
            setTimeout(() => setVisibleRules((prev) => ({ ...prev, rule3: true })), 3000), // Show rule3 after 3 seconds
            setTimeout(() => setVisibleRules((prev) => ({ ...prev, rule4: true })), 4000), // Show rule3 after 4 seconds
            setTimeout(() => setVisibleRules((prev) => ({ ...prev, rule5: true })), 6000), // Show rule3 after 6 seconds
        ];

        // Cleanup timers on component unmount
        return () => timers.forEach((timer) => clearTimeout(timer));
    }, []);

    const isLoading = Object.values(visibleRules).includes(false);

    const data = [
        { field: 'Action Type', value: 'Buy' },
        { field: 'Symbol', value: 'TNXP' },
        { field: 'Shares', value: '1000' },
        { field: 'Type', value: 'Market' },
        { field: 'Current Bid/Ask', value: '0.1658 / 0.1680' },
        { field: 'Estimate', value: '$165.80' },
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
                    <h1 class="text-2xl font-bold text-center text-gray-800 mb-4">
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
                                <span className="text-yellow-500 font-semibold">⚠ Pending</span>
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
                                <span className="text-red-500 font-semibold">✘ Invalid</span>
                            </div>
                        )}
                    </div>

                    {isLoading && (
                        <div class="mt-6 flex justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="50" height="50">
                                <circle
                                    cx="50"
                                    cy="50"
                                    r="45"
                                    stroke="lightblue"
                                    stroke-width="10"
                                    fill="none"
                                    stroke-dasharray="283"
                                    stroke-dashoffset="75"
                                    stroke-linecap="round"
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

                    <div class="mt-6 flex justify-between space-x-4">
                        <button class="bg-blue-500 text-white font-bold py-2 rounded-lg hover:bg-blue-600 transition disabled:bg-gray-400 disabled:text-gray-700 w-1/3 disabled:cursor-not-allowed" disabled onClick={handleClick}>
                            Proceed
                        </button>
                        <button class="bg-blue-500 text-white font-bold py-2 rounded-lg hover:bg-blue-600 transition w-1/3" onClick={handleClick}>
                            Cancel
                        </button>
                        <button class="bg-blue-500 text-white font-bold py-2 rounded-lg hover:bg-blue-600 transition w-1/3" onClick={handleClick}>
                            Contact FA
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Verify2