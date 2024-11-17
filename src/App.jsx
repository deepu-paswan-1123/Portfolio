
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './component/Navbar/Navbar';
import Hero from './component/Hero/Hero';
import Skills from './component/Skills/Skills';
import WorkExperience from './component/WorkExperience/WorkExperience';
import Projects from './component/Projects/Projects';
import ContactMe from './component/ContactMe/ContactMe';
import Footer from './component/Footer/Footer';
import Resume from './component/Resume/Resume';
import './index.css';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div className="container">
              <div id="hero">
                <Hero />
              </div>
              <div id="skills">
                <Skills />
              </div>
              <div id="work-experience">
                <WorkExperience />
              </div>
              <div id="My Projects">
                <Projects />
              </div>
              <div id="contact-me">
                <ContactMe />
              </div>
              <Footer />
            </div>
          }
        />
        <Route path="/Resume" element={<Resume />} /> {/* New route */}
      </Routes>
    </Router>
  );
}

export default App;

