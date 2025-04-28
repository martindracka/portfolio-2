import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Download } from 'lucide-react';
import AnimatedText from '../components/AnimatedText';

const About: React.FC = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const skills = t('about.skillsList', { returnObjects: true }) as string[];
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };
  
  return (
    <section id="about" className="section relative bg-white pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-12">
          <AnimatedText
            text={t('about.title')}
            element="h2"
            className="text-4xl md:text-5xl font-bold mb-4"
          />
          <p className="text-lg text-gray-600 max-w-xl">{t('about.subtitle')}</p>
        </div>
        
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-40 h-40 bg-primary/10 rounded-full -z-10" />
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-secondary/10 rounded-full -z-10" />
              <img 
                src="/martindracka.jpg" 
                alt="Martin Dracka" 
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-2">{t('about.age')}</h3>
              <p className="text-lg text-gray-600 mb-4">{t('about.education')}</p>
              <p className="text-gray-700 leading-relaxed">{t('about.bio')}</p>
              
              <motion.a
                href="/cv.pdf"
                download
                className="inline-flex items-center space-x-2 bg-primary text-white px-6 py-3 rounded-full mt-6 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={20} />
                <span>Download CV</span>
              </motion.a>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-4">{t('about.skills')}</h3>
              <motion.ul 
                className="grid grid-cols-2 gap-3"
                variants={container}
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
              >
                {skills.map((skill, index) => (
                  <motion.li 
                    key={index}
                    variants={item}
                    className="flex items-center"
                  >
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    <span>{skill}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;