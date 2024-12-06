import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Holdings1 from './components/client1-holdings/holdings1';
import Holdings2 from './components/client2-holdings/holdings2';
import Holdings3 from './components/client3-holdings/holdings3';
import Message from './components/Message/Message';



const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/message" element={<Message />} />
      <Route path="/holdings1" element={<Holdings1 />} />
      <Route path="/holdings2" element={<Holdings2 />} />
      <Route path="/holdings3" element={<Holdings3 />} />
    </Routes>
  </Router>
);

export default App;
