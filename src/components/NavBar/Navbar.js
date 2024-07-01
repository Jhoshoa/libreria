import React from "react";
import NavItem from "./Nabitem";
import { useLocation } from "react-router-dom";

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
                    <NavItem to="/" className={currentPath === "/" ? "active" : ""}>Laminas</NavItem>
                    <NavItem to="books" className={currentPath === "/books" ? "active" : ""}>Libros</NavItem>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;