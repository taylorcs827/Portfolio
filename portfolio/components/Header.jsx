import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {

    return (
        <header>
            {/* Hamburger button for mobile navigation */}
            <button className="nav-toggle" aria-label="toggle navigation">
                <span className="hamburger"></span>
            </button>

            {/* Main navigation */}
            <nav className="nav">
                <ul className="nav__list">
                    <li className="nav__item">
                        <NavLink 
                            to="/home" 
                            className="nav__link" 
                            activeClassName="active" // Optional, for active state styling
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className="nav__item">
                        <NavLink 
                            to="/services" 
                            className="nav__link"
                            activeClassName="active"
                        >
                            My Services
                        </NavLink>
                    </li>
                    <li className="nav__item">
                        <NavLink 
                            to="/about" 
                            className="nav__link" 
                            activeClassName="active"
                        >
                            About me
                        </NavLink>
                    </li>
                    <li className="nav__item">
                        <NavLink 
                            to="/work" 
                            className="nav__link"
                            activeClassName="active"
                        >
                            My Work
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
