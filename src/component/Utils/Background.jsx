import React, { useEffect, useState } from 'react';
import './Background.css';

const Background = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="bg-container">
      <div 
        className="mouse-glow" 
        style={{ 
          left: mousePos.x, 
          top: mousePos.y 
        }}
      ></div>
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>
      <div className="overlay"></div>
    </div>
  );
};

export default Background;

