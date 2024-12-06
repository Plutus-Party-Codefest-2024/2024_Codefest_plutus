import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useState } from 'react';



const Verify3 = () => {
    const navigate = useNavigate(); // Hook for navigation

    const handleClick1 = (e) => {
        e.preventDefault();
        navigate('/holdings3');
    };

    const handleClick2 = (e) => {
        e.preventDefault();
        navigate('/inprocess3');
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
            setTimeout(() => setVisibleRules((prev) => ({ ...prev, rule1: true })), 50), // Show rule1 after 0.5 seconds
            setTimeout(() => setVisibleRules((prev) => ({ ...prev, rule2: true })), 150), // Show rule2 after 1.5 seconds
            setTimeout(() => setVisibleRules((prev) => ({ ...prev, rule3: true })), 300), // Show rule3 after 3 seconds
            setTimeout(() => setVisibleRules((prev) => ({ ...prev, rule4: true })), 400), // Show rule3 after 4 seconds
            setTimeout(() => setVisibleRules((prev) => ({ ...prev, rule5: true })), 600), // Show rule3 after 6 seconds
        ];

        // Cleanup timers on component unmount
        return () => timers.forEach((timer) => clearTimeout(timer));
    }, []);

    const isLoading = Object.values(visibleRules).includes(false);

    return (
        <div>
            <header className="bg-gray-700 text-white p-4">
                <div className="flex items-center justify-between">
                    <div className="text-xl font-bold">
                        <img src="https://exitmap.com/wp-content/uploads/2022/03/Edward-Jones-logo.png" alt="Logo" class="h-8 inline-block mr-3" /> Online Access - Client Brad Holdings
                    </div>
                    <nav>
                        <ul className="flex space-x-6">
                            <li><a href="/" className="hover:text-gray-200">Home Page</a></li>
                            <li><a href="/order3" className="hover:text-gray-200">Trade</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <div class="bg-gray-100 flex items-center justify-center min-h-screen">
                <div class="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
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
                                <span className="text-green-500 font-semibold">✔ Valid</span>
                            </div>
                        )}
                        {visibleRules.rule4 && (
                            <div id="rule4" className="flex items-center justify-between border-b pb-2">
                                <span className="text-gray-700">Product Review</span>
                                <span className="text-yellow-500 font-semibold">⚠ Requires FA Approval</span>
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
                        <button class="bg-blue-500 text-white font-bold py-2 rounded-lg hover:bg-blue-600 transition w-1/3 
                                        disabled:bg-gray-400 disabled:text-gray-700 disabled:cursor-not-allowed" onClick={handleClick1} disabled>
                            Proceed
                        </button>
                        <button class="bg-blue-500 text-white font-bold py-2 rounded-lg hover:bg-blue-600 transition w-1/3" onClick={handleClick1}>
                            Cancel
                        </button>
                        {/* <button class="bg-blue-500 text-white font-bold py-2 rounded-lg hover:bg-blue-600 transition w-1/3" onClick={handleClick2}>
                            Contact FA
                        </button> */}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Verify3