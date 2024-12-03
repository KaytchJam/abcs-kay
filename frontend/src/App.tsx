import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import AboutPage from './components/AboutPage';
import SponsorsPage from './components/SponsorsPage';
import MembersPage from './components/MembersPage';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home"/>} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/sponsors" element={<SponsorsPage/>} />
        <Route path="/members" element={<MembersPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
