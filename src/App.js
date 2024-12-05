import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Trade from './components/Trades/Trades'; // Make sure to create the Trade component

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/trade" element={<Trade />} /> {/* Trade component route */}
    </Routes>
  </Router>
);

export default App;
