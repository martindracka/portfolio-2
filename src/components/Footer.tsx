import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  
  const socialLinks = [
    { icon: <Github size={20} />, url: 'https://github.com/' },
    { icon: <Linkedin size={20} />, url: 'https://linkedin.com/' },
    
    
  ];
  
  return (
    <footer className="bg-dark text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Martin Dracka</h3>
            <p className="max-w-md text-gray-300">
              Multimedia designer with a passion for creating engaging digital experiences.
            </p>
          </div>
          <div className="flex justify-start md:justify-end">
            <div>
              <h4 className="text-lg font-medium mb-4">Connect</h4>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex justify-center">
          <div className="text-gray-400">
            {t('footer.copyright')}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;