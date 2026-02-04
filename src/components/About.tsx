'use client';

import { motion } from 'framer-motion';
import { FiCode, FiServer, FiCpu, FiCloud, FiAward, FiClock, FiZap } from 'react-icons/fi';

export default function About() {
  const skills = [
    { name: 'React', level: 90 },
    { name: 'Next.js', level: 85 },
    { name: 'Node.js', level: 85 },
    { name: 'TypeScript', level: 80 },
    { name: 'Python', level: 80 },
    { name: 'MongoDB', level: 75 },
    { name: 'AWS', level: 70 },
    { name: 'PyTorch', level: 70 },
  ];

  const stats = [
    { icon: <FiAward className="w-6 h-6" />, value: '2.2+', label: 'Years Experience' },
    { icon: <FiClock className="w-6 h-6" />, value: '<300ms', label: 'API Response Time' },
    { icon: <FiZap className="w-6 h-6" />, value: '30%', label: 'Efficiency Boost' },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-2 inline-block">About Me</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Transforming Ideas into <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Digital Reality</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 md:p-10 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Full-Stack Engineer & AI Enthusiast
              </h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  I'm a passionate software engineer with expertise in building modern web applications and integrating AI/ML solutions. 
                  My journey in tech has been driven by a constant curiosity to solve complex problems and create impactful digital experiences.
                </p>
                <p>
                  With a strong foundation in both frontend and backend development, I specialize in creating seamless, 
                  high-performance applications that leverage the latest technologies and best practices.
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-white dark:bg-gray-700/50 rounded-lg shadow">
                    <div className="text-blue-600 dark:text-blue-400 mb-2 flex justify-center">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">My Skills</h3>
              
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="pt-4">
                <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">What I Do</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start space-x-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg text-blue-600 dark:text-blue-400">
                      <FiCode className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900 dark:text-white">Web Development</h5>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Building responsive and scalable web applications</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="p-2 bg-purple-100 dark:bg-purple-900/50 rounded-lg text-purple-600 dark:text-purple-400">
                      <FiCpu className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900 dark:text-white">AI/ML Integration</h5>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Implementing intelligent features with AI</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}