import React from 'react';
import { motion } from 'framer-motion';
import './Loader.css';

const Loader = () => {
  return (
    <div className="loader-wrapper">
      <motion.div 
        className="loader-logo"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ 
          opacity: [0, 1, 1, 0],
          scale: [0.8, 1.2, 1.2, 0.8],
          rotate: [0, 0, 180, 180]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <span className="loader-text">DP</span>
      </motion.div>
      <motion.div 
        className="loader-bar"
        initial={{ width: 0 }}
        animate={{ width: "200px" }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
    </div>
  );
};

export default Loader;
