import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import Layout from '@/components/Layout';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    },
  };

  return (
    <Layout>
      <motion.div 
        className="container mx-auto px-4 py-16 max-w-6xl"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-center mb-8"
          variants={itemVariants}
        >
          Contact Us
        </motion.h1>

        <motion.p 
          className="text-lg text-center mb-12 max-w-2xl mx-auto text-gray-300"
          variants={itemVariants}
        >
          Have questions about Orbynet? Need support? Want to partner with us? We'd love to hear from you.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.div 
            className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 text-center"
            variants={itemVariants}
          >
            <div className="mx-auto w-12 h-12 bg-indigo-500/20 rounded-full flex items-center justify-center mb-4">
              <Mail className="text-indigo-400" size={24} />
            </div>
            <h3 className="font-semibold text-xl mb-2">Email Us</h3>
            <p className="text-gray-400">contact@orbynet.ai</p>
            <p className="text-gray-400">support@orbynet.ai</p>
          </motion.div>

          <motion.div 
            className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 text-center"
            variants={itemVariants}
          >
            <div className="mx-auto w-12 h-12 bg-indigo-500/20 rounded-full flex items-center justify-center mb-4">
              <MapPin className="text-indigo-400" size={24} />
            </div>
            <h3 className="font-semibold text-xl mb-2">Office Location</h3>
            <p className="text-gray-400">123 Innovation Drive</p>
            <p className="text-gray-400">Tech Valley, CA 94043</p>
          </motion.div>

          <motion.div 
            className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 text-center"
            variants={itemVariants}
          >
            <div className="mx-auto w-12 h-12 bg-indigo-500/20 rounded-full flex items-center justify-center mb-4">
              <Phone className="text-indigo-400" size={24} />
            </div>
            <h3 className="font-semibold text-xl mb-2">Call Us</h3>
            <p className="text-gray-400">+1 (555) 123-4567</p>
            <p className="text-gray-400">Mon-Fri: 9AM - 5PM PST</p>
          </motion.div>
        </div>

        <motion.div 
          className="bg-gray-800/30 p-8 rounded-xl border border-gray-700 max-w-3xl mx-auto"
          variants={itemVariants}
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Send Us a Message</h2>
          
          {isSubmitted ? (
            <motion.div 
              className="bg-green-500/20 border border-green-500/50 text-green-400 p-4 rounded-lg text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Thank you for your message! We'll get back to you soon.
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 resize-none"
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white font-medium transition-all flex items-center justify-center disabled:opacity-70"
              >
                {isSubmitting ? (
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  <Send size={18} className="mr-2" />
                )}
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </motion.div>
      </motion.div>
    </Layout>
  );
} 