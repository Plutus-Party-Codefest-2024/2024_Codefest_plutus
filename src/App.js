import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Holdings1 from './components/client1-holdings/Holdings1';
import Holdings2 from './components/client2-holdings/holdings2';
import Holdings3 from './components/client3-holdings/Holdings3';
import Message from './components/Message/Message';
import Order1 from './components/client1-order/Order1';
import Verify1 from './components/client1-verify/Verify1';
import Verify2 from './components/client2-verify/Verify2';
import Verify3 from './components/client3-verify/Verify3';
import Homepage from './components/FA-homepage/Homepage';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/message" element={<Message />} />
      <Route path="/holdings1" element={<Holdings1 />} />
      <Route path="/holdings2" element={<Holdings2 />} />
      <Route path="/holdings3" element={<Holdings3 />} />
      <Route path="/order1" element={<Order1 />} />
      <Route path="/verify1" element={<Verify1 />} />
      <Route path="/verify2" element={<Verify2 />} />
      <Route path="/verify3" element={<Verify3 />} />
      <Route path="/salesforce" element={<Homepage />} />
    </Routes>
  </Router>
);

export default App;
