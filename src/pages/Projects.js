import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Container from '../components/layout/Container';
import Section from '../components/layout/Section';
import Card from '../components/ui/Card';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Web Application System',
      description: 'A comprehensive web application with modern UI/UX, responsive design, and robust backend functionality.',
      category: 'Web Development',
      image: '/images/View_Project/web application system.png',
      technologies: ['React', 'Node.js', 'MongoDB']
    },
    {
      id: 2,
      title: 'Data Analytics and Power BI',
      description: 'Interactive dashboards and data visualization solutions for business intelligence and analytics.',
      category: 'Data Analytics',
      image: '/images/View_Project/Data Analytics and power bi.png',
      technologies: ['Power BI', 'SQL', 'Python']
    },
    {
      id: 3,
      title: 'Intelligent Fraud Detection',
      description: 'AI-powered fraud detection system that identifies and prevents fraudulent activities in real-time.',
      category: 'AI/ML',
      image: '/images/View_Project/intelligent fraud system.png',
      technologies: ['Python', 'TensorFlow', 'Scikit-learn']
    }
  ];

  return (
    <div className="min-h-screen bg-primary">
      <Navbar />
      
      {/* Projects Hero */}
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
              My Projects
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Explore my latest work and technical achievements across various domains
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* Projects Grid */}
      <Section>
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="h-full overflow-hidden">
                  <div className="relative overflow-hidden h-64">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div className="space-x-2">
                        <span className="inline-block px-3 py-1 text-xs font-medium text-white bg-accent rounded-full">
                          {project.category}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-text-primary mb-2">{project.title}</h3>
                    <p className="text-text-secondary mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-2 py-1 text-xs bg-secondary text-text-secondary rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-3">
                      <motion.button
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-text-primary bg-secondary rounded-lg hover:bg-tertiary transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        View Project
                      </motion.button>
                      <motion.button
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-text-primary bg-accent rounded-lg hover:bg-accent/80 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Live Demo
                      </motion.button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      <Footer />
    </div>
  );
};

export default Projects;
