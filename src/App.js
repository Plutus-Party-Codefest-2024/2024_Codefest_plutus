import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Trade from './components/Trades/Trades'; 
import Message from './components/Message/Message'; 

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/trade" element={<Trade />} />
      <Route path="/message" element={<Message />} />
    </Routes>
  </Router>
);

export default App;
