import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import LanguageSwitch from './LanguageSwitch';

const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navLinks = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.videoCV'), href: '#video-cv' },
    { name: t('nav.projects'), href: '#projects' },
    { name: t('nav.contact'), href: '#contact' },
  ];
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center">
          <motion.a 
            href="#home" 
            className="text-xl font-semibold text-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Martin Dracka
          </motion.a>
          
          
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <motion.a 
                    href={link.href}
                    className={`transition-colors duration-300 ${
                      isScrolled ? 'text-dark hover:text-primary' : 'text-dark hover:text-primary'
                    }`}
                    whileHover={{ 
                      scale: 1.05, 
                      color: 'rgb(var(--primary-color))' 
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
            <LanguageSwitch />
          </div>
          
          
          <div className="flex md:hidden items-center space-x-4">
            <LanguageSwitch />
            <motion.button
              onClick={toggleMobileMenu}
              className="text-dark focus:outline-none"
              whileTap={{ scale: 0.9 }}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </nav>
      </div>
      
      
      <motion.div 
        className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isMobileMenuOpen ? 1 : 0,
          height: isMobileMenuOpen ? 'auto' : 0
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto px-4 py-4 bg-white shadow-md">
          <ul className="space-y-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href}
                  className="block py-2 text-dark hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Navbar;