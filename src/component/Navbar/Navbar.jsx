import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";
import { TiThMenu } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import MobileNav from "../MobileNav/MobileNav";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // Get the current route

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const handleScroll = (sectionId) => {
    if (location.pathname !== "/") {
      // Navigate to the homepage if not already there
      navigate("/");
      // Delay the scroll action to allow the DOM to render
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    } else {
      // Directly scroll if already on the homepage
      scrollToSection(sectionId);
    }
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} handleScroll={handleScroll} />
      <nav className="nav-wrapper">
        <div className="Nav-Content">
          <h2 className="navbarlogo">Deepu Paswan</h2>
          <ul>
            <li>
              <a href="#hero" className="menu-item" onClick={() => handleScroll("hero")}>
                Home
              </a>
            </li>
            <li>
              <a href="#skills" className="menu-item" onClick={() => handleScroll("skills")}>
                Skills
              </a>
            </li>
            <li>
              <a href="#work-experience" className="menu-item" onClick={() => handleScroll("work-experience")}>
                Work Experience
              </a>
            </li>
            <li>
              <a href="#My Projects" className="menu-item" onClick={() => handleScroll("My Projects")}>
                My Projects
              </a>
            </li>
            <li>
              <a href="#contact-me" className="menu-item" onClick={() => handleScroll("contact-me")}>
                Contact Me
              </a>
            </li>
            <Link to="/Resume" style={{textDecoration:'none'}}>
              <button className="contact-btn">Dowload CV</button>
            </Link>
          </ul>
          <button className="menu-btn" onClick={toggleMenu}>
            <span style={{ fontSize: "1.8rem" }}>
              {openMenu ? <RxCross2 /> : <TiThMenu />}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
