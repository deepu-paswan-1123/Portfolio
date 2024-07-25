import React from "react";
import { FaReact } from "react-icons/fa";
import anime from "../../assets/images/anime.jpg";
import htmllogo from "../../assets/images/htmllogo.png"
import csslogo from "../../assets/images/csslogo.jpg"
import js from "../../assets/images/js.png"
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <section className="hero-container">
        <div className="hero-content">
          <h2>Building Digital Experience That inspire</h2>
          <p>
            Professional Front End Developer | Transform Ideas into Seamless and
            Visually Stunning Web Solutions.
          </p>
        </div>

        <div className="hero-img">
          <div>
            <div className="tech-icon">
              <FaReact className="reacticon img-icon" />
            </div>
            <img src={anime} alt="" className='anime'/>
          </div>
          <div>
            <div className="tech-icon">
              <img src={htmllogo} alt="" className="img-icon"/>
            </div>
            <div className="tech-icon">
              <img src={csslogo} alt="" className="img-icon one"/>
            </div>
            <div className="tech-icon">
              <img src={js} alt="" className="img-icon "/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
