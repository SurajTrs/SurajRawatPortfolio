'use client';

import { motion } from 'framer-motion';
import { 
  FiCpu, 
  FiCode, 
  FiDatabase, 
  FiLayers, 
  FiCloud,
  FiCheckCircle,
  FiCpu as FiAi,
  FiGitBranch,
  FiServer,
  FiMonitor,
  FiSmartphone,
  FiShield,
  FiZap
} from 'react-icons/fi';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: <FiMonitor className="h-6 w-6" />,
    skills: [
      { name: 'React', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'TypeScript', level: 85 },
      { name: 'JavaScript (ES6+)', level: 90 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'HTML5 & CSS3', level: 95 },
      { name: 'Redux', level: 80 },
      { name: 'Responsive Design', level: 90 }
    ]
  },
  {
    title: 'Backend Development',
    icon: <FiServer className="h-6 w-6" />,
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Express', level: 85 },
      { name: 'RESTful APIs', level: 90 },
      { name: 'GraphQL', level: 75 },
      { name: 'WebSockets', level: 80 },
      { name: 'Authentication', level: 85 },
      { name: 'Microservices', level: 80 },
      { name: 'Serverless', level: 75 }
    ]
  },
  {
    title: 'AI/ML',
    icon: <FiAi className="h-6 w-6" />,
    skills: [
      { name: 'Python', level: 85 },
      { name: 'PyTorch', level: 80 },
      { name: 'TensorFlow', level: 75 },
      { name: 'Hugging Face', level: 80 },
      { name: 'NLP', level: 80 },
      { name: 'Computer Vision', level: 70 },
      { name: 'Transformers', level: 80 },
      { name: 'LLMs', level: 75 }
    ]
  },
  {
    title: 'Cloud & DevOps',
    icon: <FiCloud className="h-6 w-6" />,
    skills: [
      { name: 'AWS', level: 80 },
      { name: 'Docker', level: 85 },
      { name: 'Kubernetes', level: 70 },
      { name: 'CI/CD', level: 85 },
      { name: 'Terraform', level: 70 },
      { name: 'GitHub Actions', level: 80 },
      { name: 'Vercel', level: 85 },
      { name: 'Netlify', level: 80 }
    ]
  },
  {
    title: 'Databases',
    icon: <FiDatabase className="h-6 w-6" />,
    skills: [
      { name: 'MongoDB', level: 85 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'Firestore', level: 80 },
      { name: 'Redis', level: 75 },
      { name: 'SQL', level: 85 },
      { name: 'Prisma', level: 80 },
      { name: 'Mongoose', level: 85 },
      { name: 'Database Design', level: 85 }
    ]
  },
  {
    title: 'Mobile & Others',
    icon: <FiSmartphone className="h-6 w-6" />,
    skills: [
      { name: 'React Native', level: 75 },
      { name: 'Expo', level: 70 },
      { name: 'TypeScript', level: 85 },
      { name: 'Git', level: 90 },
      { name: 'Jest', level: 80 },
      { name: 'Playwright', level: 75 },
      { name: 'Figma', level: 70 },
      { name: 'Agile/Scrum', level: 85 }
    ]
  }
];

const SkillBar = ({ name, level }: { name: string; level: number }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{name}</span>
      <span className="text-xs font-medium text-blue-600 dark:text-blue-400">{level}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
      <motion.div
        className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
      />
    </div>
  </div>
);

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-2 inline-block">My Abilities</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mr-4">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar key={skillIndex} name={skill.name} level={skill.level} />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}