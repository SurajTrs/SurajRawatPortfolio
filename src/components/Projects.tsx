'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    title: 'HRMS Lite (Human Resource Management System)',
    description: 'MERN-based HRMS with employee, attendance, and role-based access management. Secure JWT auth, REST APIs, and scalable backend deployment.',
    image: '/projects/ai-assistant.jpg',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    github: 'https://github.com/SurajTrs/HRMS-lite',
    demo: 'https://hrms-lite-frontend-qbbs.onrender.com',
    featured: true
  },
  {
    title: 'TravixAI (AI Travel Assistant)',
    description: 'AI travel planner using MERN and LLM-powered recommendations. Fast, responsive UI with low-latency APIs.',
    image: '/projects/edtech.jpg',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'LLM', 'AI'],
    github: 'https://github.com/SurajTrs/TripGenie',
    demo: 'https://travixai.netlify.app',
    featured: true
  },
  {
    title: 'Looks-Trendz (Fashion E-Commerce Platform)',
    description: 'Full-stack MERN fashion platform with authentication, product management, and cart flow. Implemented secure REST APIs and optimized backend performance for scalability.',
    image: '/projects/ecommerce.jpg',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'REST API'],
    github: 'https://github.com/SurajTrs/Looks-Trendz',
    demo: 'https://lookstrendz.onrender.com',
    featured: true
  },
  {
    title: 'RefDirectly (Referral Management System)',
    description: 'Referral automation platform with RBAC and analytics dashboard.',
    image: '/projects/ai-assistant.jpg',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'RBAC'],
    github: 'https://github.com/refdirectly/RefDirectlyNew',
    demo: '#',
    featured: false
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-2 inline-block">My Work</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.filter(project => project.featured).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300 flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.map((tech, i) => (
                      <motion.span 
                        key={i}
                        className="px-2.5 py-1 text-xs font-medium rounded-full bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <motion.a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-base font-semibold px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-secondary text-black shadow-md hover:from-secondary hover:to-primary transition-all"
                      whileHover={{ scale: 1.08, x: 2 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <FiGithub className="animate-pulse-slow" /> GitHub
                    </motion.a>
                    <motion.a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                      whileHover={{ scale: 1.05, x: 2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiExternalLink className="animate-pulse-slow" /> Live Demo
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}