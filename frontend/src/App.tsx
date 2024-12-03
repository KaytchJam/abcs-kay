import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import AboutPage from './components/AboutPage';
import SponsorsPage from './components/SponsorsPage';
import CalendarPage from './components/CalendarPage';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home"/>} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/calendar" element={<CalendarPage/>} />
        <Route path="/sponsors" element={<SponsorsPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
