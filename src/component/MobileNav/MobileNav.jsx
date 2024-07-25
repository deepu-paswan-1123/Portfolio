import React from 'react';
import './MobileNav.css'

const MobileNav = ({ isOpen, toggleMenu, handleScroll }) => {
    return (
        <>
           <div 
                className={`mobile-menu ${isOpen ? "active" : ""}`}
                onClick={toggleMenu}>
                    <div className="mobile-menu-container">
                        <h2 className='navbarlogo'>Time To Programme</h2>
                        <ul>
                            <li><a href="#hero" onClick={() => { handleScroll("hero"); toggleMenu(); }} className='menu-item'>Home</a></li>
                            <li><a href="#skills" onClick={() => { handleScroll("skills"); toggleMenu(); }} className='menu-item'>Skills</a></li>
                            <li><a href="#work-experience" onClick={() => { handleScroll("work-experience"); toggleMenu(); }} className='menu-item'>Work Experience</a></li>
                            <li><a href="#contact-me" onClick={() => { handleScroll("contact-me"); toggleMenu(); }} className='menu-item'>Contact me</a></li>

                            <button className="contact-btn" onClick={()=>{}}>
                                Hire Me
                            </button>
                        </ul>
                    </div>
            </div>
        </>
    );
}

export default MobileNav;







