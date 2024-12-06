import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Holdings1 from './components/client1-holdings/holdings1';
import Holdings2 from './components/client2-holdings/holdings2';
import Holdings3 from './components/client3-holdings/holdings3';
import Message from './components/Message/Message';
import Order1 from './components/client1-order/Order1';
import Order2 from './components/client2-order/Order2';
import Order3 from './components/client3-order/Order3';
import Verify1 from './components/client1-verify/Verify1';
import Verify2 from './components/client2-verify/Verify2';
import Verify3 from './components/client3-verify/Verify3';
import Inprocess1 from './components/client1-inprocess-orders/inprocess1';
import Inprocess3 from './components/client3-inprocess-orders/inprocess3';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/message" element={<Message />} />
      <Route path="/holdings1" element={<Holdings1 />} />
      <Route path="/holdings2" element={<Holdings2 />} />
      <Route path="/holdings3" element={<Holdings3 />} />
      <Route path="/order1" element={<Order1 />} />
      <Route path="/order2" element={<Order2 />} />
      <Route path="/order3" element={<Order3 />} />
      <Route path="/verify1" element={<Verify1 />} />
      <Route path="/verify2" element={<Verify2 />} />
      <Route path="/verify3" element={<Verify3 />} />
      <Route path="/inprocess1" element={<Inprocess1 />} />
      <Route path="/inprocess3" element={<Inprocess3 />} />
    </Routes>
  </Router>
);

export default App;
