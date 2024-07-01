import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Link, Routes, Navigate } from "react-router-dom";
import Laminas from "./components/Table/Laminas";
import Books from "./components/Table/Books";
import Navbar from './components/NavBar/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Laminas />} />
        <Route path="/books" element={<Books />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
