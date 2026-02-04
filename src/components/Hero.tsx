'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { FiDownload, FiMail, FiGithub, FiLinkedin, FiTwitter, FiArrowRight, FiBriefcase } from 'react-icons/fi';
import { FaReact, FaNodeJs, FaPython } from 'react-icons/fa';
import { SiTensorflow, SiPytorch } from 'react-icons/si';

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-blue-50 via-gray-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
          style={{ y }}
        >
          <div className="absolute inset-0 bg-grid-pattern opacity-10 dark:opacity-[0.02]" />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-left"
          >
            <motion.p 
              className="text-lg md:text-xl font-medium text-blue-600 dark:text-blue-400 mb-4 flex items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="w-6 h-0.5 bg-blue-500 inline-block mr-3"></span>
              Hello, I'm Suraj Rawat
            </motion.p>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Full-Stack <span className="block">AI/ML Engineer</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              I build intelligent web applications and scalable AI solutions that deliver exceptional user experiences and business value.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <motion.a
                href="/resume.pdf"
                download
                className="group flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Download CV</span>
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
              
              <motion.a
                href="#contact"
                className="group flex items-center gap-2 px-6 py-3 rounded-full bg-white dark:bg-gray-800 text-gray-800 dark:text-white font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 border border-gray-200 dark:border-gray-700"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Let's Talk</span>
                <FiMail className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>
            
            <motion.div 
              className="flex items-center space-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="flex -space-x-3">
                {[
                  { icon: <FaReact className="text-blue-500" size={20} />, name: 'React' },
                  { icon: <FaNodeJs className="text-green-600" size={20} />, name: 'Node.js' },
                  { icon: <FaPython className="text-blue-600" size={20} />, name: 'Python' },
                  { icon: <SiTensorflow className="text-orange-500" size={18} />, name: 'AI/ML' }
                ].map((tech, index) => (
                  <motion.div 
                    key={tech.name}
                    className="w-10 h-10 rounded-full bg-white dark:bg-gray-700 flex items-center justify-center shadow-md border border-gray-100 dark:border-gray-600"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + (index * 0.1) }}
                    title={tech.name}
                  >
                    {tech.icon}
                  </motion.div>
                ))}
              </div>
              <div className="h-8 w-px bg-gray-200 dark:bg-gray-600"></div>
              <div className="flex space-x-4">
                {[
                  { icon: <FiGithub size={20} />, url: 'https://github.com/SurajTrs' },
                  { icon: <FiLinkedin size={20} />, url: 'https://www.linkedin.com/in/surajrawat99' },
                  { icon: <FiTwitter size={20} />, url: 'https://twitter.com/SurajTrs' }
                ].map((social, index) => (
                  <motion.a
                    key={social.url}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                    whileHover={{ y: -3, scale: 1.1 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + (index * 0.1) }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
            className="relative w-full h-[500px] lg:h-[600px]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl overflow-hidden shadow-2xl">
              {/* Profile Image */}
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src="/Myimage.png"
                  alt="Suraj Rawat"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-3xl"
                  priority
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 dark:opacity-30 animate-blob"></div>
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 dark:opacity-30 animate-blob animation-delay-2000"></div>
              <div className="absolute -bottom-8 left-20 w-40 h-40 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 dark:opacity-30 animate-blob animation-delay-4000"></div>
            </div>
            
            {/* Experience badge */}
            <motion.div 
              className="absolute -left-4 top-1/3 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <div className="flex items-center">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg">
                  <FiBriefcase className="text-blue-600 dark:text-blue-400" size={24} />
                </div>
                <div className="ml-3">
                  <p className="text-sm text-gray-500 dark:text-gray-400">Experience</p>
                  <p className="font-semibold text-gray-800 dark:text-white">2+ Years</p>
                </div>
              </div>
            </motion.div>
            
            {/* Project count badge */}
            <motion.div 
              className="absolute -right-4 bottom-1/4 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <div className="flex items-center">
                <div className="p-2 bg-purple-100 dark:bg-purple-900/50 rounded-lg">
                  <span className="text-purple-600 dark:text-purple-400 text-lg font-bold">15+</span>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-gray-500 dark:text-gray-400">Projects</p>
                  <p className="font-semibold text-gray-800 dark:text-white">Completed</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: [0, 1, 0],
          y: [20, 0, -10]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          repeatType: "loop"
        }}
      >
        <div className="w-10 h-16 rounded-full border-2 border-gray-300 dark:border-gray-600 flex justify-center pt-3">
          <div className="w-1 h-4 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  );
}