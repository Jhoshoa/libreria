import React from "react";
import NavItem from "./Nabitem";
import { useLocation } from "react-router-dom";
import "./Navbar.css";

// Custom hook to get the current location
const useActiveLink = () => {
    const location = useLocation();
    return location.pathname;
};

const Navbar = () => {
    const currentPath = useActiveLink();

    return (
        <>
            <nav>
                <ul>
                    <NavItem to="/laminas" className={currentPath === "/laminas" ? "active" : ""}>Laminas</NavItem>
                    <NavItem to="books" className={currentPath === "/books" ? "active" : ""}>Libros</NavItem>
                    <NavItem to="products" className={currentPath === "/products" ? "active" : ""}>Tienda Mon</NavItem>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;