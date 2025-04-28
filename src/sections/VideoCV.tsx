import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Play, Pause, Maximize } from 'lucide-react';
import AnimatedText from '../components/AnimatedText';

const VideoCV: React.FC = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  const [isPlaying, setIsPlaying] = useState(false);
  
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };
  
  const toggleFullscreen = () => {
    const iframe = document.querySelector('iframe');
    if (iframe) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        iframe.requestFullscreen();
      }
    }
  };
  
  return (
    <section id="video-cv" className="section relative bg-gray-50 pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-12">
          <AnimatedText
            text={t('videoCV.title')}
            element="h2"
            className="text-4xl md:text-5xl font-bold mb-4"
          />
          <p className="text-lg text-gray-600 max-w-xl">{t('videoCV.subtitle')}</p>
        </div>
        
        <motion.div 
          ref={ref}
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="relative rounded-xl overflow-hidden shadow-xl aspect-video">
            <iframe
              className="w-full h-full absolute top-0 left-0"
              src="https://www.youtube.com/embed/s0F3y-cPLO0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-gray-700">{t('videoCV.description')}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoCV;