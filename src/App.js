import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Register from './components/Register'

function App() {
  return (
    <div className='overflow-hidden'>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
