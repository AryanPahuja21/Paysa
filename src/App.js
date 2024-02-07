import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Register from './components/Register'
import Loan from './components/Loan';
import Data from './components/Data';
import Comparison from './components/Comparison';
import styled from "styled-components"; 
import Tracker from "./components/Transactions/Tracker"; 
import GlobalStyles from "./components/Transactions/GlobalStyles"; 
import Navbar from "./components/Navbar";
  
const Main = styled.div` 
  display: flex; 
  justify-content: center; 
  align-items: center; 
`; 

function App() {
  return (
    <div className='overflow-hidden'>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/loan" element={<Loan />} />
        <Route path="/data" element={<Data />} />
        <Route path="/transactions" element={
          <Main> 
      <GlobalStyles /> 
      <Tracker /> 
    </Main> } />
        <Route path="/comparison" element={<Comparison />} />
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
