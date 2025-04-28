import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import VideoCV from './sections/VideoCV';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import BackgroundCanvas from './components/BackgroundCanvas';

function App() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <BackgroundCanvas />
      
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div 
            key="loader"
            className="fixed inset-0 flex items-center justify-center bg-light z-50"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="text-4xl font-semibold text-primary"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {t('loading')}
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <Navbar />
            <main>
              <Hero />
              <About />
              <VideoCV />
              <Projects />
              <Contact />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;