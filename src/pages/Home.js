import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import Value from '../components/sections/Value';
import Container from '../components/layout/Container';
import Section from '../components/layout/Section';
import Card from '../components/ui/Card';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-primary">
      <Navbar />
      <Hero />
      {/* Services Section */}
      <Section className="bg-secondary">
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
            {[
              {
                title: 'Web Development',
                description: 'Custom websites and web applications built with the latest technologies for optimal performance, security, and scalability.',
                logo: 'react'
              },
              {
                title: 'UI/UX Design',
                description: 'Beautiful, intuitive interfaces designed with user experience at the forefront.',
                logo: 'figma'
              },
              {
                title: 'Mobile Development',
                description: 'Cross-platform mobile applications that deliver native-like performance.',
                logo: 'mobile'
              },
              {
                title: 'API Development',
                description: 'Robust and well-documented RESTful APIs that power your applications.',
                logo: 'api'
              },
              {
                title: 'E-commerce Solutions',
                description: 'Custom e-commerce solutions that drive sales and enhance customer experience.',
                logo: 'shopify'
              },
              {
                title: 'Ongoing Support',
                description: 'Reliable maintenance and support services to keep your digital products running smoothly.',
                logo: 'support'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mb-6">
                    {service.logo === 'react' && (
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                      </svg>
                    )}
                    {service.logo === 'figma' && (
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M15.852 8.98h-.001a3.965 3.965 0 00-1.852-3.354V1.4a1.4 1.4 0 00-2.8 0v4.226A3.965 3.965 0 008 8.98a3.965 3.965 0 000 7.04v6.58a1.4 1.4 0 002.8 0v-4.226a3.965 3.965 0 001.999-3.354h.001a3.965 3.965 0 000-7.04h-.001z"/>
                      </svg>
                    )}
                    {service.logo === 'mobile' && (
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M16 1H8C6.34 1 5 2.34 5 4v16c0 1.66 1.34 3 3 3h8c1.66 0 3-1.34 3-3V4c0-1.66-1.34-3-3-3zM14 20h-4v-1h4v1zm3.25-3H6.75V4h10.5v13z"/>
                      </svg>
                    )}
                    {service.logo === 'api' && (
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"/>
                      </svg>
                    )}
                    {service.logo === 'shopify' && (
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M11.5 21.5c0 .3-.2.5-.5.5s-.5-.2-.5-.5.2-.5.5-.5.5.2.5.5zm5 0c0 .3-.2.5-.5.5s-.5-.2-.5-.5.2-.5.5-.5.5.2.5.5zm2.5-2.5h-11c-.6 0-1-.4-1-1v-11c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v11c0 .6-.4 1-1 1zm-10-10v9h9v-9h-9z"/>
                      </svg>
                    )}
                    {service.logo === 'support' && (
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/>
                      </svg>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold text-text-primary mb-4">
                    {service.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <motion.a
                    href="#contact"
                    className="inline-flex items-center text-accent hover:text-accent/80 font-medium transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    Get Started <i className="fas fa-arrow-right ml-2"></i>
                  </motion.a>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Portfolio Section */}
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
              Strategic Digital Solutions
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Delivering measurable results through innovative digital solutions that drive business growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Business-First Strategy',
                description: 'Before tools, platforms, or code — we define clear revenue objectives, target audience positioning, competitive differentiation, funnel architecture, and growth roadmap. Every digital decision supports a business outcome.',
                icon: '🏗'
              },
              {
                title: 'Scalable Digital Infrastructure',
                description: 'I design systems that grow with you: high-performance websites, custom web applications, backend architecture, cloud-ready deployments, secure optimized environments. Built clean. Built modular. Built future-ready.',
                icon: '📈'
              },
              {
                title: 'Full-Funnel Growth Engineering',
                description: 'Traffic without conversion is wasted potential. Strategic systems include landing page optimization, lead generation flows, email automation, conversion tracking, retargeting structures, performance analytics.',
                icon: '🎨'
              },
              {
                title: 'Experience-Led Design',
                description: 'Users don\'t just browse — they decide. I craft conversion-focused UI/UX, psychology-driven layouts, frictionless navigation, mobile-first experiences, clear calls-to-action. Design is not decoration — it\'s persuasion.',
                icon: '⚙'
              },
              {
                title: 'Automation & Efficiency Systems',
                description: 'Smart systems reduce manual work and increase profitability. CRM integrations, workflow automation, payment gateway systems, data pipelines, reporting dashboards. Less chaos. More clarity. Better decisions.',
                icon: '🔍'
              },
              {
                title: 'Data-Driven Optimization',
                description: 'Strategy doesn\'t end at launch. I integrate advanced analytics, heatmaps, user behavior tracking, A/B testing, performance monitoring. If it can be measured, it can be improved.',
                icon: '📊'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="h-full">
                  <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mb-6 text-3xl">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-4">
                    {service.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed text-sm">
                    {service.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      <Value />

      {/* Journey Section */}
      <Section className="bg-secondary">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Top row images */}
            <div className="grid grid-cols-2 gap-6 mb-8 justify-items-end">
              {['image_1.png', '11.jpeg'].map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="overflow-hidden rounded-2xl w-full max-w-md"
                >
                  <img
                    src={`/images/My_journey/${image}`}
                    alt={`Journey Image ${index + 1}`}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                </motion.div>
              ))}
            </div>

            {/* Middle content */}
            <div className="text-center mb-8">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary mb-6">
                My Journey
              </h2>
              <div className="max-w-4xl mx-auto text-center space-y-6">
                <p className="text-lg text-text-secondary leading-relaxed">
                  Every strong digital builder starts somewhere.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  Mine didn't begin with big clients or massive launches. It started with curiosity — understanding how things work, how systems connect, and how ideas turn into platforms that create real impact.
                </p>
                
                <h3 className="text-xl font-bold text-text-primary mt-8 mb-4">The Beginning — Curiosity Over Comfort</h3>
                <p className="text-text-secondary leading-relaxed">
                  I was fascinated by:
                </p>
                <ul className="list-disc list-inside text-text-secondary space-y-2 ml-4 inline-block text-left">
                  <li>How websites function behind the scenes</li>
                  <li>How user interfaces influence behavior</li>
                  <li>How businesses scale digitally</li>
                  <li>How code becomes experience</li>
                </ul>
                <p className="text-text-secondary leading-relaxed">
                  What started as learning soon became obsession — not just building things, but building them the right way.
                </p>

                <h3 className="text-xl font-bold text-text-primary mt-8 mb-4">The Builder Phase — From Code to Systems</h3>
                <p className="text-text-secondary leading-relaxed">
                  At first, it was about development:
                </p>
                <ul className="list-disc list-inside text-text-secondary space-y-2 ml-4 inline-block text-left">
                  <li>Writing clean frontend layouts</li>
                  <li>Structuring backend logic</li>
                  <li>Connecting databases</li>
                  <li>Debugging endlessly</li>
                </ul>
                <p className="text-text-secondary leading-relaxed">
                  But I realized something important: Web development alone wasn't enough. Clients didn't just need code — they needed growth systems. That shifted everything.
                </p>

                <h3 className="text-xl font-bold text-text-primary mt-8 mb-4">The Strategic Shift — Thinking Beyond Pages</h3>
                <p className="text-text-secondary leading-relaxed">
                  Instead of building "websites," I started building:
                </p>
                <ul className="list-disc list-inside text-text-secondary space-y-2 ml-4 inline-block text-left">
                  <li>Conversion funnels</li>
                  <li>Lead generation systems</li>
                  <li>Data-driven dashboards</li>
                  <li>Automated workflows</li>
                  <li>Scalable digital infrastructures</li>
                </ul>
                <p className="text-text-secondary leading-relaxed">
                  I began thinking like a founder, not just a developer. What problem does this solve? How does this generate revenue? How does this scale?
                </p>

                <h3 className="text-xl font-bold text-text-primary mt-8 mb-4">The Growth Era — Full-Funnel Thinking</h3>
                <p className="text-text-secondary leading-relaxed">
                  Over time, I mastered:
                </p>
                <ul className="list-disc list-inside text-text-secondary space-y-2 ml-4 inline-block text-left">
                  <li>UI/UX psychology</li>
                  <li>Performance optimization</li>
                  <li>SEO architecture</li>
                  <li>Analytics integration</li>
                  <li>Automation systems</li>
                </ul>
                <p className="text-text-secondary leading-relaxed">
                  Every project became more strategic. Every build became more measurable. Not just beautiful. Profitable.
                </p>

                <h3 className="text-xl font-bold text-text-primary mt-8 mb-4">Today — Digital Growth Architect</h3>
                <p className="text-text-secondary leading-relaxed">
                  Now, I don't just build platforms. I design:
                </p>
                <ul className="list-disc list-inside text-text-secondary space-y-2 ml-4 inline-block text-left">
                  <li>End-to-end digital ecosystems</li>
                  <li>Conversion-focused experiences</li>
                  <li>High-performance web applications</li>
                  <li>Systems that evolve with the business</li>
                </ul>
                <p className="text-text-secondary leading-relaxed font-medium">
                  Clean architecture. Clear strategy. Scalable execution.
                </p>

                <h3 className="text-xl font-bold text-text-primary mt-8 mb-4">What Hasn't Changed</h3>
                <ul className="list-disc list-inside text-text-secondary space-y-2 ml-4 inline-block text-left">
                  <li>Curiosity</li>
                  <li>Obsession with improvement</li>
                  <li>Focus on quality</li>
                  <li>Long-term thinking</li>
                </ul>
                <p className="text-text-secondary leading-relaxed mt-4">
                  Because technology evolves — but principles don't.
                </p>
              </div>
            </div>

            {/* Bottom row images */}
            <div className="grid grid-cols-2 gap-6 justify-items-end">
              {['Gemini_Generated_Image_5lopx75lopx75lop_1.png', 'Gemini_Generated_Image_2wkwgf2wkwgf2wkw.png'].map((image, index) => (
                <motion.div
                  key={index + 2}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: (index + 2) * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="overflow-hidden rounded-2xl w-full max-w-md"
                >
                  <img
                    src={`/images/My_journey/${image}`}
                    alt={`Journey Image ${index + 3}`}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
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
              Let's discuss how we can work together to achieve your business goals.
            </p>
            <motion.button
              className="bg-white text-accent px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-all duration-300 shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/contact')}
            >
              Schedule Your Free Consultation
            </motion.button>
          </motion.div>
        </Container>
      </Section>

      <Footer />
    </div>
  );
};

export default Home;
