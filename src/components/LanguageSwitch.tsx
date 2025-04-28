import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const LanguageSwitch: React.FC = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };
  
  return (
    <div className="language-switch">
      <div className="flex items-center space-x-2">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`language-text ${currentLanguage === 'en' ? 'active-language' : 'text-dark/70'}`}
          onClick={() => changeLanguage('en')}
        >
          EN
        </motion.button>
        <span className="text-dark/40">/</span>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`language-text ${currentLanguage === 'da' ? 'active-language' : 'text-dark/70'}`}
          onClick={() => changeLanguage('da')}
        >
          DA
        </motion.button>
      </div>
    </div>
  );
};

export default LanguageSwitch;