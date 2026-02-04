'use client';

import { motion } from 'framer-motion';
import { FiAward, FiBookOpen } from 'react-icons/fi';

const education = [
  {
    degree: 'B.Tech, Electronics & Communication',
    institution: 'IIIT Dharwad',
    period: '2020–2024',
    icon: <FiBookOpen className="h-6 w-6 text-primary" />
  }
];

const certifications = [
  {
    name: 'AWS Certified Developer – Associate',
    issuer: 'Amazon Web Services',
    year: '2023',
    icon: <FiAward className="h-6 w-6 text-primary" />
  },
  {
    name: 'TensorFlow Developer Certificate',
    issuer: 'Google',
    year: '2024',
    icon: <FiAward className="h-6 w-6 text-primary" />
  }
];

export default function Education() {
  return (
    <section id="education" className="section-padding bg-muted/30 dark:bg-muted/10">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Education & Certifications</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <FiBookOpen className="mr-2 text-primary" /> Education
            </h3>
            <div className="space-y-6">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">{item.icon}</div>
                    <div>
                      <h4 className="text-xl font-semibold mb-1">{item.degree}</h4>
                      <p className="text-foreground/80 mb-1">{item.institution}</p>
                      <p className="text-foreground/60 text-sm">{item.period}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <FiAward className="mr-2 text-primary" /> Certifications
            </h3>
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">{cert.icon}</div>
                    <div>
                      <h4 className="text-xl font-semibold mb-1">{cert.name}</h4>
                      <p className="text-foreground/80 mb-1">{cert.issuer}</p>
                      <p className="text-foreground/60 text-sm">{cert.year}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}