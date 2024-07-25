// import { useState } from 'react'
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Navbar from './component/Navbar/Navbar'
// import Hero from './component/Hero/Hero'
// import Skills from './component/Skills/Skills'
// import WorkExperience from './component/WorkExperience/WorkExperience'
// import ContactMe from './component/ContactMe/ContactMe'
// import Footer from './component/Footer/Footer'
// import './index.css'
// import './App.css'

// function App() {
  

//   return (
//     <>
//       <Navbar/>
//       <div className="container">
//           <Hero></Hero>
//           <Skills></Skills>
//           <WorkExperience/>
//           <ContactMe/>
//       </div>
//       <Footer/>
//     </>
//   )
// }

// export default App








import React from 'react';
import Navbar from './component/Navbar/Navbar';
import Hero from './component/Hero/Hero';
import Skills from './component/Skills/Skills';
import WorkExperience from './component/WorkExperience/WorkExperience';
import ContactMe from './component/ContactMe/ContactMe';
import Footer from './component/Footer/Footer';
import './index.css';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
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
        <div id="contact-me">
          <ContactMe />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;




