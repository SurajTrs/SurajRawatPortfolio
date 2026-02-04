'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  }>({});
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({});

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus({
        success: true,
        message: 'Your message has been sent successfully! I\'ll get back to you soon.'
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus({
        success: false,
        message: 'Failed to send message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!mounted) {
    return <div className="py-20"></div>;
  }

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-2 inline-block">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Contact <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Contact Info */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 p-10">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Let's Connect</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Have a project in mind or want to discuss potential opportunities? 
                      Feel free to reach out, and I'll get back to you as soon as possible.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg text-blue-600 dark:text-blue-400 mr-4">
                        <FiMail className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-500 dark:text-gray-400 text-sm">Email</h4>
                        <a 
                          href="mailto:suraj.schs99@gmail.com" 
                          className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
suraj.schs99@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-lg text-green-600 dark:text-green-400 mr-4">
                        <FiPhone className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-500 dark:text-gray-400 text-sm">Phone</h4>
                        <a 
                          href="tel:+1234567890" 
                          className="text-gray-900 dark:text-white hover:text-green-600 dark:hover:text-green-400 transition-colors"
                        >
+91 95552 19911
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-lg text-purple-600 dark:text-purple-400 mr-4">
                        <FiMapPin className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-500 dark:text-gray-400 text-sm">Location</h4>
                        <p className="text-gray-900 dark:text-white">Gurgaon, Haryana</p>
                      </div>
                    </div>

                    <div className="pt-4">
                      <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">Follow Me</h4>
                      <div className="flex space-x-4">
                        <a 
                          href="https://github.com/SurajTrs" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2.5 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                          aria-label="GitHub"
                        >
                          <FiGithub className="h-5 w-5" />
                        </a>
                        <a 
                          href="https://www.linkedin.com/in/surajrawat99" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2.5 rounded-lg bg-gray-100 dark:bg-gray-800 text-blue-600 dark:text-blue-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                          aria-label="LinkedIn"
                        >
                          <FiLinkedin className="h-5 w-5" />
                        </a>
                        <a 
                          href="https://surajportfolio-plum.vercel.app" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2.5 rounded-lg bg-gray-100 dark:bg-gray-800 text-blue-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors flex items-center gap-1.5"
                          aria-label="Portfolio"
                        >
                          <span className="text-xs">🌐</span> Portfolio
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="p-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                      placeholder="How can I help you?"
                    ></textarea>
                  </div>

                  {submitStatus.message && (
                    <div className={`p-4 rounded-lg ${
                      submitStatus.success 
                        ? 'bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400' 
                        : 'bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-400'
                    }`}>
                      {submitStatus.message}
                    </div>
                  )}

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <FiSend className="mr-2 h-5 w-5" />
                          Send Message
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;