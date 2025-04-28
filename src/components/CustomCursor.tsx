import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' ||
        target.closest('a') || 
        target.closest('button') ||
        target.classList.contains('cursor-hover-trigger')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  
  useEffect(() => {
    const checkTouch = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    
    checkTouch();
    window.addEventListener('resize', checkTouch);
    
    return () => window.removeEventListener('resize', checkTouch);
  }, []);

  if (isTouchDevice) return null;

  return (
    <motion.div
      className="custom-cursor"
      animate={{
        x: mousePosition.x,
        y: mousePosition.y,
        scale: isHovering ? 1.5 : 1,
      }}
      transition={{
        type: "spring",
        damping: 25,
        stiffness: 300,
        mass: 0.5
      }}
    />
  );
};

export default CustomCursor;