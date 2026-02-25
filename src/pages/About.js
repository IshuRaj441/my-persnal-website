import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Container from '../components/layout/Container';
import Section from '../components/layout/Section';

const About = () => {
  return (
    <div className="min-h-screen bg-primary">
      <Navbar />
      
      {/* About Hero */}
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
              About Me
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Learn more about my journey, expertise, and passion for creating impactful software solutions
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* About Content */}
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="prose prose-lg text-text-secondary"
            >
              <p className="text-lg mb-6">
                I'm a freelance developer passionate about creating impactful software solutions that help businesses thrive in the digital age. With expertise in web development, automation, and emerging technologies, I transform ideas into reality.
              </p>
              
              <h2 className="text-2xl font-bold text-text-primary mb-4">My Expertise</h2>
              <ul className="space-y-2 mb-8">
                <li>• Web Development (React, Node.js, Python)</li>
                <li>• Business Automation & Process Optimization</li>
                <li>• Data Analytics & Business Intelligence</li>
                <li>• AI & Machine Learning Solutions</li>
                <li>• Mobile App Development</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-text-primary mb-4">My Approach</h2>
              <p className="mb-6">
                I believe in building long-term partnerships with my clients. Every project is an opportunity to understand unique business challenges and deliver tailored solutions that drive real results. My approach combines technical excellence with business acumen to ensure that the software I build not only works perfectly but also aligns with your strategic goals.
              </p>
            </motion.div>
          </div>
        </Container>
      </Section>

      <Footer />
    </div>
  );
};

export default About;
