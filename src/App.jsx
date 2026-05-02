import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './component/Navbar/Navbar';
import Hero from './component/Hero/Hero';
import Skills from './component/Skills/Skills';
import WorkExperience from './component/WorkExperience/WorkExperience';
import Projects from './component/Projects/Projects';
import ResumeSection from './component/ResumeSection/ResumeSection';
import ContactMe from './component/ContactMe/ContactMe';

import Footer from './component/Footer/Footer';
import Resume from './component/Resume/Resume';
import Background from './component/Utils/Background';
import Loader from './component/Utils/Loader';
import { AnimatePresence } from 'framer-motion';
import './index.css';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <AnimatePresence>
        {loading && <Loader />}
      </AnimatePresence>
      
      {!loading && (
        <>
          <Background />
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
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
                    <ResumeSection />
                    <div id="contact-me">
                      <ContactMe />
                    </div>

                  </div>
                  <Footer />
                </>
              }
            />

            <Route path="/Resume" element={<Resume />} />
          </Routes>
        </>
      )}
    </Router>
  );
}

export default App;


