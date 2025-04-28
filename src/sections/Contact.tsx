import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Linkedin, Github, Mail, Facebook } from 'lucide-react';
import AnimatedText from '../components/AnimatedText';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  const socialLinks = [
    { 
      icon: <Mail size={32} />, 
      url: '@martindracka.com',
      label: 'Email'
    },
    { 
      icon: <Linkedin size={32} />, 
      url: 'https://linkedin.com/in/',
      label: 'LinkedIn'
    },
    { 
      icon: <Github size={32} />, 
      url: 'https://github.com/',
      label: 'GitHub'
    },
    { 
      icon: <Facebook size={32} />, 
      url: 'https://facebook.com/',
      label: 'Facebook'
    }
  ];
  
  return (
    <section id="contact" className="section relative bg-gray-50 pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-12">
          <AnimatedText
            text={t('contact.title')}
            element="h2"
            className="text-4xl md:text-5xl font-bold mb-4"
          />
          <p className="text-lg text-gray-600 max-w-xl">{t('contact.subtitle')}</p>
        </div>
        
        <motion.div 
          ref={ref}
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold mb-4">Connect With Me</h3>
              <p className="text-gray-600">Feel free to reach out through any of these platforms.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center space-y-2 text-dark hover:text-primary transition-colors duration-300 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={link.label}
                >
                  <span className="transform group-hover:scale-110 transition-transform duration-300">
                    {link.icon}
                  </span>
                  <span className="font-medium text-sm">{link.label}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;