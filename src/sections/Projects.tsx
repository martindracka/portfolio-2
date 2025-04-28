import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import AnimatedText from '../components/AnimatedText';

const Projects: React.FC = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  
  const projects = t('projects.projectList', { returnObjects: true }) as Array<{
    title: string;
    description: string;
    category: string;
  }>;
  
  
  const projectsExtended = [
    {
      ...projects[0],
      imageUrl: "/greenpeac1.jpg",
      details: {
        challenge: "A project developed to promote awareness and support for Greenpeace's petition against plastic pollution",
        solution: "We developed a straightforward commercial website aimed at engaging a younger audience and raising awareness about the harmful impact of plastics on the environment. The website features a petition form that allows users to sign the petition and share it with their friends. The design is clean and modern, with a focus on user experience and ease of navigation.",
        technologies: ["Visual Studio Code", "Adobe Photoshop", "Figma", "Adobe Illustrator", "Adobe InDesign"]
      },
      links: {
        live: "https://martindracka.github.io/dellaoceans/",
        github: "https://github.com/martindracka/dellaoceans"
      }
    },
    {
      ...projects[1],
      imageUrl: "/greenveac.png",
      details: {
        challenge: "An initiative launched to encourage public engagement and advocate for Greenpeace’s campaign against plastic pollution.",
        solution: "We developed a webpage to promote the sale of eco-friendly juices while simultaneously supporting Greenpeace’s petition to raise awareness about plastic pollution.",
        technologies: ["Visual Studio Code", "Figma", "Adobe Photoshop"]
      },
      links: {
        live: "https://martindracka.github.io/Jolly-Juices/index.html",
        github: "https://github.com/martindracka/Jolly-Juices"
      }
    },
    {
      ...projects[2],
      imageUrl: "/sunset.jpg",
      details: {
        challenge: "Develop a fictional concept for a potential event in the Danish town of Esbjerg designed to welcome newcomers.",
        solution: "We developed a presentation that highlights both the location and projected returns, while also outlining the key reasons for attending the event. To conclude, we included an engaging and humorous video suitable for all age groups",
        technologies: ["After Effects","Adobe Photoshop", ]
      },
      links: {
        live: "https://docs.google.com/presentation/d/14Dr7DZeJBYOLt9YPKzR19QuUyMEOUvl9jUVUmP38WAk/edit?slide=id.gd431007ba2_0_215#slide=id.gd431007ba2_0_215",
        
      }
    },
    {
      ...projects[3],
      imageUrl: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      details: {
        challenge: "Design an intuitive and motivating fitness tracking app that stands out in a crowded market.",
        solution: "Created a clean, user-friendly interface with gamification elements and social features to encourage user engagement.",
        technologies: ["Figma", "Principle", "Adobe XD", "ProtoPie"]
      },
      links: {
        live: "https://example.com"
      }
    },
    {
      ...projects[4],
      imageUrl: "https://images.pexels.com/photos/593158/pexels-photo-593158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      details: {
        challenge: "Showcase various motion graphics techniques and styles in a cohesive showreel.",
        solution: "Created a dynamic showreel that demonstrates proficiency in different animation styles and technical skills.",
        technologies: ["After Effects", "Cinema 4D", "Adobe Premiere", "Illustrator"]
      },
      links: {
        live: "https://example.com"
      }
    }
  ];
  
  return (
    <section id="projects" className="section relative bg-white pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-16">
          <AnimatedText
            text={t('projects.title')}
            element="h2"
            className="text-4xl md:text-5xl font-bold mb-4"
          />
          <p className="text-lg text-gray-600 max-w-xl">{t('projects.subtitle')}</p>
        </div>
        
        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          {projectsExtended.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              category={project.category}
              imageUrl={project.imageUrl}
              index={index}
              onClick={() => setSelectedProject(index)}
            />
          ))}
        </motion.div>
      </div>

      {selectedProject !== null && (
        <ProjectModal
          isOpen={selectedProject !== null}
          onClose={() => setSelectedProject(null)}
          project={projectsExtended[selectedProject]}
        />
      )}
    </section>
  );
};

export default Projects;