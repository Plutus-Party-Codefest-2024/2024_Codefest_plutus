import React from 'react';
import './Message.css'


const Message = () => {
  const emails = [
    {
      title: "Investment Opportunity in Tech Stocks",
      summary: "We have identified a few promising tech stocks that could provide high returns over the next quarter. Let's schedule a meeting to discuss further.",
    },
    {
      title: "Retirement Planning Options",
      summary: "I would like to explore different retirement plans that would best suit my financial goals and risk tolerance. Please suggest some options.",
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
      <header className="bg-gray-700 text-white p-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold">
            Message Center
          </div>
          <div className="text-xl font-bold">
            <form class="max-w-md mx-auto">   
              <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
              <div class="relative">
                  <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                      </svg>
                  </div>
                  <input type="search" id="default-search" class="block w-[420px] p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Name or Number" required />
                  <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
              </div>
            </form>
          </div>
          <div className="text-l">
            <a href="/">Advanced Search</a>
          </div>
          <div>
            <button class="flex items-center space-x-2 bg-blue-500 text-white font-medium py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M4 13V16H7L16.5 6.5L13.5 3.5L4 13Z" />
                <path d="M13.5 3.5L16.5 6.5L17.5 5.5L14.5 2.5L13.5 3.5Z" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5 18H3C2.44772 18 2 17.5523 2 17V15H3V17H5V18Z" />
              </svg>
              <span>New Message</span>
            </button>

          </div>
        </div>
      </header>
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
            <span className="font-semibold">From Invest Guard</span>
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
              <span className="font-bold">From:</span> <span className="text-gray-700">Client ABC</span>
            </div>
            <div className="mb-2 text-gray-500">
              <span className="font-bold">To:</span> <span className="text-gray-600">John Doe, Financial Advisor</span>
            </div>
            <div className="mb-2 font-bold text-lg">
              <span className="text-black">Investment Opportunity in Tech Stocks</span>
            </div>
            <div className="mb-2 text-sm text-gray-500">
              <span className="text-black">Date:</span> March 15, 2024
            </div>
            <div className="mt-4 text-gray-800">
              Dear John, <br />
              I would like to initiate an online trade in the tech stocks I've been researching. I believe this is a great opportunity and would love to get your approval to proceed. Please review the details and let me know if we can move forward. <br />
              Looking forward to your response, <br />
              Best regards, <br />
              Client ABC
            </div>
          </div>
        </main>

        
      </div>
    </div>
  )
};

export default Message;
