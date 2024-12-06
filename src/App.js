import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Trade from './components/Trades/Trades';
import Message from './components/Message/Message';
import Holdings1 from './components/client1-holdings/holdings1';
import Holdings2 from './components/client2-holdings/holdings2';
import Holdings3 from './components/client3-holdings/holdings3';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/trade" element={<Trade />} />
      <Route path="/message" element={<Message />} />
      <Route path="/holdings1" element={<Holdings1 />} />
      <Route path="/holdings2" element={<Holdings2 />} />
      <Route path="/holdings3" element={<Holdings3 />} />
    </Routes>
  </Router>
);

export default App;
