import './App.css';
import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Laminas from "./components/Table/Laminas";
import Books from "./components/Table/Books";
import Navbar from './components/NavBar/Navbar';
import Footer from './components/Footer/Footer';
import MotherStore from './components/Table/MotherStore';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/laminas" element={<Laminas />} />
        <Route path="/books" element={<Books />} />
        <Route path="/products" element={<MotherStore />} />
        <Route path="*" element={<Navigate to="/laminas" />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
