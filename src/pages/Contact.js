import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Container from '../components/layout/Container';
import Section from '../components/layout/Section';
import Card from '../components/ui/Card';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-primary">
      <Navbar />
      
      {/* Contact Hero */}
      <Section className="bg-gradient-to-br from-primary to-secondary">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary mb-6">
              Get In Touch
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Let's discuss how I can help you with your next project
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* Contact Content */}
      <Section>
        <Container>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card>
                <h2 className="text-3xl font-bold text-text-primary mb-6">Send Me a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border-medium rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200 bg-primary text-text-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border-medium rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200 bg-primary text-text-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-text-primary mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border-medium rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200 bg-primary text-text-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border-medium rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200 bg-primary text-text-primary resize-vertical"
                    ></textarea>
                  </div>
                  <motion.button
                    type="submit"
                    className="w-full bg-accent text-text-primary px-6 py-3 rounded-lg font-medium hover:bg-accent/80 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <i className="fas fa-paper-plane mr-2"></i> Send Message
                  </motion.button>
                </form>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <Card>
                <h2 className="text-3xl font-bold text-text-primary mb-6">Let's Connect</h2>
                <p className="text-text-secondary mb-8">
                  I'm always interested in hearing about new projects and opportunities.
                </p>
                
                <div className="space-y-6">
                  <motion.div
                    className="flex items-start space-x-4"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs font-bold">MAIL</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-text-primary mb-1">Email</h3>
                      <a href="mailto:ishuraj176@gmail.com" className="text-accent hover:text-accent/80 transition-colors">
                        ishuraj176@gmail.com
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start space-x-4"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs font-bold">PHONE</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-text-primary mb-1">Phone</h3>
                      <a href="tel:+917634000688" className="text-accent hover:text-accent/80 transition-colors">
                        +91 7634000688
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start space-x-4"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs font-bold">LOC</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-text-primary mb-1">Location</h3>
                      <p className="text-text-secondary">Available for remote work worldwide</p>
                    </div>
                  </motion.div>
                </div>
              </Card>

              {/* Social Links */}
              <Card>
                <h3 className="text-xl font-semibold text-text-primary mb-4">Follow Me</h3>
                <div className="flex space-x-4">
                  {[
                    { href: 'https://github.com/ishuraj', icon: 'fab fa-github', logo: true },
                    { href: 'https://linkedin.com/in/ishuraj', icon: 'fab fa-linkedin', logo: true },
                    { href: 'https://twitter.com/ishuraj', icon: 'fab fa-twitter', logo: true }
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {social.logo ? (
                        social.href.includes('github') ? (
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                        ) : social.href.includes('linkedin') ? (
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-1.846 1.789-1.846 1.846v2.949h-3.146c0 .027 0 5.562 0 5.562-1.846 0-1.846-1.789-1.846-1.789v-2.949c0-1.846 1.789-1.846 1.789v-2.949h3.146c0-.027 0-5.562 0-5.562z"/>
                            <path d="M3.547 20.452h3.554v-10.229h-3.554v10.229z"/>
                            <path d="M5.324 8.588c0 1.107-.898 2.006-2.006 2.006s-2.006-.898-2.006-2.006.898-2.006 2.006-.898 2.006.898z"/>
                          </svg>
                        ) : social.href.includes('twitter') ? (
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.965 4.965 0 00-2.184 2.235 9.9 9.9 0 004.59 3.055 10 10 0 01-9.795 6.336c.075.633.1 1.277.1 1.925 0 6.15-4.669 11.255-11.245 11.255-2.09 0-4.06-.395-5.93-1.1 2.845 5.415 5.415 0 004.901 2.855 10.95 10.95 0 006.204-2.42 10.95-10.95 0-5.415-4.465-10.95-10.95-10.95z"/>
                          </svg>
                        ) : (
                          <i className={`${social.icon}`}></i>
                        )
                      ) : (
                        <i className={`${social.icon}`}></i>
                      )}
                    </motion.a>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </Container>
      </Section>

      <Footer />
    </div>
  );
};

export default Contact;
