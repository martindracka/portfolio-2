import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react';
import AnimatedText from '../components/AnimatedText';

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  
  return (
    <motion.section 
      id="home" 
      ref={ref}
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{ opacity }}
    >
      
      <div className="absolute inset-0 bg-gradient-to-b from-primary-light to-transparent" />
      
      
      <motion.div 
        className="relative z-10 text-center px-4"
        style={{ y }}
      >
        <div className="max-w-5xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-blue-500 font-medium mb-2"
          >
            {t('hero.greeting')}
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold text-primary mb-4"
          >
            <span className="block">
              {t('hero.name')}
            </span>
          </motion.h1>
          
          <AnimatedText
            text={t('hero.profession')}
            element="h2"
            className="text-2xl md:text-3xl text-secondary font-medium mb-3"
            delay={0.8}
          />
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-lg text-secondary/80 mb-8"
          >
            {t('hero.location')}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            <motion.a
              href="#projects"
              className="inline-block bg-primary text-white py-3 px-8 rounded-full font-medium
              shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('hero.cta')}
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown size={30} className="text-primary" />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;