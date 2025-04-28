import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  index: number;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  category, 
  imageUrl,
  index,
  onClick
}) => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  const animationDelay = 0.1 * index;
  
  const buttonVariants = {
    initial: { 
      opacity: 0,
      x: -20,
    },
    hover: { 
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  const arrowVariants = {
    initial: { x: 0 },
    hover: { 
      x: 10,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        repeat: Infinity,
        repeatType: "reverse",
        duration: 1
      }
    }
  };

  const overlayVariants = {
    initial: { opacity: 0 },
    hover: { 
      opacity: 1,
      transition: { duration: 0.3 }
    }
  };
  
  return (
    <motion.div 
      ref={ref}
      onClick={onClick}
      className="project-card group cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ 
        duration: 0.7, 
        delay: animationDelay,
        ease: [0.22, 1, 0.36, 1]
      }}
      whileHover={{
        y: -10,
        transition: { duration: 0.3 }
      }}
    >
      <div className="project-card-content overflow-hidden rounded-xl bg-white shadow-lg">
        <div className="project-image-container relative">
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-center justify-center"
            initial="initial"
            whileHover="hover"
            variants={overlayVariants}
          >
            <motion.div
              className="px-6 py-3 bg-white text-primary rounded-full font-medium flex items-center space-x-2 transform hover:shadow-lg transition-shadow"
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
            >
              <span>{t('projects.viewProject')}</span>
              <motion.span variants={arrowVariants}>
                <ArrowRight size={16} />
              </motion.span>
            </motion.div>
          </motion.div>
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-primary">{category}</span>
          </div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;