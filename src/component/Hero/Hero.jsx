import React from "react";
import { FaReact } from "react-icons/fa";
import { motion } from "framer-motion";
import anime from "../../assets/images/anime.jpg";
import htmllogo from "../../assets/images/htmllogo.png"
import csslogo from "../../assets/images/csslogo.jpg"
import js from "../../assets/images/js.png"
import "./Hero.css";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const floatVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="hero-container">
      <motion.div 
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 variants={itemVariants}>
          Building Digital Experience That <span className="highlight">Inspire</span>
        </motion.h2>
        <motion.p variants={itemVariants}>
          Professional MERN Stack Developer | Build Scalable, Efficient, and Dynamic Web Applications.
        </motion.p>
        <motion.div variants={itemVariants} className="hero-btns">
           <button className="contact-btn">Explore Work</button>
        </motion.div>
      </motion.div>

      <div className="hero-img">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.div 
            className="tech-icon react-float"
            variants={floatVariants}
            animate="animate"
          >
            <FaReact className="reacticon img-icon" />
          </motion.div>
          <img src={anime} alt="Deepu Paswan" className='anime'/>
        </motion.div>
        
        <div className="tech-icons-grid">
          <motion.div 
            className="tech-icon"
            variants={floatVariants}
            animate="animate"
            transition={{ delay: 0.2 }}
          >
            <img src={htmllogo} alt="HTML" className="img-icon"/>
          </motion.div>
          <motion.div 
            className="tech-icon"
            variants={floatVariants}
            animate="animate"
            transition={{ delay: 0.4 }}
          >
            <img src={csslogo} alt="CSS" className="img-icon one"/>
          </motion.div>
          <motion.div 
            className="tech-icon"
            variants={floatVariants}
            animate="animate"
            transition={{ delay: 0.6 }}
          >
            <img src={js} alt="JS" className="img-icon "/>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

