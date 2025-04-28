import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  element?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
  className?: string;
  once?: boolean;
  delay?: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  element = 'p',
  className = '',
  once = true,
  delay = 0
}) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: delay }
    })
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: 'blur(8px)'
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100
      }
    }
  };

  const Element = element;

  return (
    <motion.div
      className={`overflow-hidden ${className}`}
      variants={container}
      initial="hidden"
      animate={controls}
      ref={ref}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-1.5"
          variants={child}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;