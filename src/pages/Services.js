import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Container from '../components/layout/Container';
import Section from '../components/layout/Section';
import Card from '../components/ui/Card';

const Services = () => {
  const navigate = useNavigate();
  const services = [
    {
      id: 1,
      title: 'Business Process Automation',
      description: 'Streamline your business operations with custom automation solutions that reduce manual work and increase efficiency.',
      logo: 'BPA',
      features: ['Workflow Automation', 'Process Optimization', 'Cost Reduction', 'Error Minimization']
    },
    {
      id: 2,
      title: 'Custom Software Development',
      description: 'Tailored software solutions built to meet your specific business requirements and scale with your growth.',
      logo: 'CSD',
      features: ['Custom Applications', 'API Development', 'Database Design', 'Cloud Integration']
    },
    {
      id: 3,
      title: 'Data Analytics & Dashboards',
      description: 'Transform your data into actionable insights with interactive dashboards and advanced analytics.',
      logo: 'DAD',
      features: ['Power BI Dashboards', 'Data Visualization', 'Business Intelligence', 'Reporting Solutions']
    },
    {
      id: 4,
      title: 'AI & Machine Learning',
      description: 'Leverage artificial intelligence to solve complex business problems and create intelligent systems.',
      logo: 'AIML',
      features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'ML Models']
    },
    {
      id: 5,
      title: 'Web Development',
      description: 'Modern, responsive websites and web applications built with cutting-edge technologies.',
      logo: 'WEB',
      features: ['Responsive Design', 'E-commerce Solutions', 'Progressive Web Apps', 'SEO Optimization']
    },
    {
      id: 6,
      title: 'Mobile App Development',
      description: 'Cross-platform mobile applications that deliver native performance and excellent user experience.',
      logo: 'APP',
      features: ['iOS & Android Apps', 'React Native', 'Flutter', 'App Store Deployment']
    }
  ];

  return (
    <div className="min-h-screen bg-primary">
      <Navbar />
      
      {/* Services Hero */}
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
              My Services
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Comprehensive solutions to transform your business and drive growth
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* Services Grid */}
      <Section>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary mb-6">
              Solutions I Provide
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              I deliver high-quality, scalable, and efficient solutions tailored to your business needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="h-full">
                  <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mb-6">
                    <span className="text-white text-xl font-bold">{service.logo}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-text-primary mb-4">
                    {service.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-text-secondary">
                        <i className="fas fa-check text-green-500 mr-2"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <motion.button
                    onClick={() => navigate('/contact')}
                    className="inline-flex items-center text-accent hover:text-accent/80 font-medium transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    Get Started <i className="fas fa-arrow-right ml-2"></i>
                  </motion.button>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-r from-accent to-accent/80">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss how my services can help transform your business and achieve your goals.
            </p>
            <motion.button
              className="bg-white text-accent px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-all duration-300 shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/contact')}
            >
              Get a Free Consultation
            </motion.button>
          </motion.div>
        </Container>
      </Section>

      <Footer />
    </div>
  );
};

export default Services;
