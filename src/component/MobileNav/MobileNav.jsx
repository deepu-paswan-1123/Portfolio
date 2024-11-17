import React from 'react';
import { Link, useNavigate, useLocation } from "react-router-dom";
import './MobileNav.css';

const MobileNav = ({ isOpen, toggleMenu, handleScroll }) => {
    const navigate = useNavigate();
    const location = useLocation(); // Get current route

    // Function to handle scrolling and navigation to a section
    const handleMobileScroll = (sectionId) => {
        if (location.pathname !== "/") {
            // Navigate to the homepage if not already there
            navigate("/");
            // Delay scroll action to allow the DOM to render
            setTimeout(() => {
                scrollToSection(sectionId);
            }, 100);
        } else {
            // Directly scroll if already on the homepage
            scrollToSection(sectionId);
        }
    };

    // Helper function to scroll to the section
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            <div 
                className={`mobile-menu ${isOpen ? "active" : ""}`}
                onClick={toggleMenu}>
                <div className="mobile-menu-container">
                    <h2 className='navbarlogo'>Time To Programme</h2>
                    <ul>
                        <li>
                            <a href="#hero" 
                               onClick={() => { handleMobileScroll("hero"); toggleMenu(); }} 
                               className='menu-item'>
                               Home
                            </a>
                        </li>
                        <li>
                            <a href="#skills" 
                               onClick={() => { handleMobileScroll("skills"); toggleMenu(); }} 
                               className='menu-item'>
                               Skills
                            </a>
                        </li>
                        <li>
                            <a href="#work-experience" 
                               onClick={() => { handleMobileScroll("work-experience"); toggleMenu(); }} 
                               className='menu-item'>
                               Work Experience
                            </a>
                        </li>
                        <li>
                            <a href="#contact-me" 
                               onClick={() => { handleMobileScroll("contact-me"); toggleMenu(); }} 
                               className='menu-item'>
                               Contact me
                            </a>
                        </li>
                        <li>
                            <a href="#My Projects" 
                               onClick={() => { handleMobileScroll("My Projects"); toggleMenu(); }} 
                               className='menu-item'>
                               My Projects
                            </a>
                        </li>
                        <li>
                        <Link to="/Resume" style={{textDecoration:'none'}}>
                            <button className="contact-btn">Dowload CV</button>
                        </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default MobileNav;
