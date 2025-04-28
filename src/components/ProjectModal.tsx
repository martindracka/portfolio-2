import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github } from 'lucide-react';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    category: string;
    imageUrl: string;
    details?: {
      challenge: string;
      solution: string;
      technologies: string[];
    };
    links?: {
      live?: string;
      github?: string;
    };
  };
}

const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, onClose, project }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          onClick={e => e.stopPropagation()}
        >
          <div className="sticky top-0 bg-white z-10 flex justify-between items-center p-6 border-b">
            <h2 className="text-2xl font-bold">{project.title}</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          <div className="p-6">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-[400px] object-cover rounded-lg mb-6"
            />

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Overview</h3>
                <p className="text-gray-700">{project.description}</p>
              </div>

              {project.details && (
                <>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Challenge</h3>
                    <p className="text-gray-700">{project.details.challenge}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Solution</h3>
                    <p className="text-gray-700">{project.details.solution}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.details.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {project.links && (
                <div className="flex gap-4 pt-4">
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      <ExternalLink size={20} />
                      View Live
                    </a>
                  )}
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      <Github size={20} />
                      View Code
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;