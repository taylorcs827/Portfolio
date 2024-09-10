import React, { useState } from "react";
import { HashLink } from 'react-router-hash-link'; // Import HashLink for smooth scrolling

export default function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const handleNavToggle = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <header className={isNavOpen ? "nav-open" : ""}>
            {/* Hamburger button */}
            <button 
                className="nav-toggle" 
                aria-label="toggle navigation" 
                onClick={handleNavToggle}
            >
                <span className="hamburger"></span>
            </button>

            {/* Navigation */}
            <nav className="nav">
                <ul className="nav__list">
                    <li className="nav__item">
                        <HashLink 
                            smooth to="/#intro" 
                            className="nav__link" 
                            onClick={() => setIsNavOpen(false)}
                        >
                            Home
                        </HashLink>
                    </li>
                    <li className="nav__item">
                        <HashLink 
                            smooth to="/#services" 
                            className="nav__link" 
                            onClick={() => setIsNavOpen(false)}
                        >
                            My Services
                        </HashLink>
                    </li>
                    <li className="nav__item">
                        <HashLink 
                            smooth to="/#about" 
                            className="nav__link" 
                            onClick={() => setIsNavOpen(false)}
                        >
                            About Me
                        </HashLink>
                    </li>
                    <li className="nav__item">
                        <HashLink 
                            smooth to="/#work" 
                            className="nav__link" 
                            onClick={() => setIsNavOpen(false)}
                        >
                            My Work
                        </HashLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
