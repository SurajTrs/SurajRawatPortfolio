'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiExternalLink } from 'react-icons/fi';

const experiences = [
  {
    company: 'Capyngen Pvt. Ltd.',
    position: 'Software Engineer (AI/ML)',
    period: 'May 2025 – Present',
    description: 'Developing AI voice bots and low-latency APIs using AWS, GPT, and LLaMA models. Implemented voice recognition systems with sub-300ms response times.',
    technologies: ['AWS', 'GPT', 'LLaMA', 'Python', 'Node.js'],
    link: '#'
  },
  {
    company: 'Codbee.in',
    position: 'Full-Stack Developer',
    period: 'Jan 2024 – May 2025',
    description: 'Created a voice-enabled learning assistant using Hugging Face and DeepSpeech technologies. Improved user engagement by 25% through intuitive voice commands.',
    technologies: ['React', 'Node.js', 'Hugging Face', 'DeepSpeech', 'MongoDB'],
    link: '#'
  },
  {
    company: 'Advance Career Guide',
    position: 'Backend Developer',
    period: 'Sep 2023 – Jan 2024',
    description: 'Implemented chatbot voice commands and AWS deployments. Optimized server response times by 40% through efficient database queries and caching.',
    technologies: ['Express', 'AWS', 'MongoDB', 'WebSockets', 'Redis'],
    link: '#'
  },
  {
    company: 'Suvidha Foundation',
    position: 'Frontend Developer',
    period: 'Jun 2023 – Aug 2023',
    description: 'Developed NLP-based search functionality and implemented accessibility improvements. Enhanced website performance by 30% through code optimization.',
    technologies: ['React', 'Tailwind CSS', 'NLP', 'Accessibility', 'SEO'],
    link: '#'
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-2 inline-block">Work History</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Professional <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500/20 via-purple-500/50 to-transparent"></div>
          
          {/* Experience items */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 -ml-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 z-10"></div>
                
                {/* Card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
                    <div className="p-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 dark:text-white">{exp.company}</h3>
                          <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mt-1">{exp.position}</p>
                        </div>
                        <a 
                          href={exp.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                          aria-label={`Visit ${exp.company} website`}
                        >
                          <FiExternalLink className="w-5 h-5" />
                        </a>
                      </div>
                      
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-2">
                        <FiCalendar className="mr-1.5" />
                        <span>{exp.period}</span>
                      </div>
                      
                      <p className="mt-3 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                        {exp.description}
                      </p>
                      
                      <div className="mt-4 flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span 
                            key={i}
                            className="px-2.5 py-1 text-xs font-medium rounded-full bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}