import React, { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import Container from '../components/layout/Container';
import LazySection from '../components/layout/LazySection';
import BackgroundEffects from '../components/effects/BackgroundEffects';
import { ServiceCard } from '../components/ui/CinematicCard';
import { PrimaryButton } from '../components/ui/CinematicButton';
import { 
  AnimatedHeading, 
  AnimatedText, 
  GradientText
} from '../components/ui/OptimizedText';
import { 
  optimizedFadeUp, 
  optimizedStagger,
  optimizedScaleIn,
  usePerformanceMode,
  reducedMotionVariants
} from '../animations/optimizedVariants';

// Lazy load heavy sections
const Value = lazy(() => import('../components/sections/Value'));
const StrategicSolutions = lazy(() => import('../components/sections/StrategicSolutions'));

const Home = () => {
  const navigate = useNavigate();
  const reduceMotion = usePerformanceMode();
  
  // Use optimized variants based on device/performance
  const fadeUpVariants = reduceMotion ? reducedMotionVariants : optimizedFadeUp;
  const staggerVariants = reduceMotion ? reducedMotionVariants : optimizedStagger;
  const scaleVariants = reduceMotion ? reducedMotionVariants : optimizedScaleIn;
  
  return (
    <div className="min-h-screen bg-bg-primary relative">
      {/* 🌌 Global Background Effects */}
      <BackgroundEffects />
      
      {/* Content */}
      <div className="relative z-10">
        {/* 🎬 Hero Section */}
        <Hero />
        
        {/* Services Section */}
        <LazySection className="cinematic-section">
          <Container>
            <motion.div
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="text-center mb-20"
            >
              <motion.h2 
                className="text-4xl md:text-5xl font-bold tracking-tight text-gradient mb-6"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                Solutions I Provide
              </motion.h2>
              <motion.p 
                className="text-lg text-text-secondary max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                I deliver high-quality, scalable, and efficient solutions tailored to your business needs.
              </motion.p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={staggerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {[
                {
                  title: 'Web Development',
                  subtitle: 'Modern, Scalable & High-Performance Web Applications',
                  description: 'I create responsive websites and full-stack web applications using modern technologies focused on speed, security, scalability, and exceptional user experience.',
                  deliverables: [
                    'Custom Business Websites',
                    'Full-Stack Web Applications',
                    'Admin Dashboards & Portals',
                    'REST APIs & Backend Systems',
                    'Authentication & Database Integration',
                    'SEO & Performance Optimization',
                    'Responsive Cross-Device Design'
                  ],
                  techStack: ['React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'PostgreSQL'],
                  icon: '🚀'
                },
                {
                  title: 'UI/UX Design',
                  subtitle: 'Designing Clean, Intuitive & User-Centered Interfaces',
                  description: 'I craft modern user experiences that combine aesthetics with functionality while focusing on usability, accessibility, and conversion-driven layouts.',
                  deliverables: [
                    'Modern Website UI Design',
                    'Mobile App Interface Design',
                    'Landing Pages & SaaS Interfaces',
                    'Design Systems & Components',
                    'Interactive Prototypes',
                    'User Experience Optimization',
                    'Brand-Focused Visual Design'
                  ],
                  techStack: ['Minimal', 'Modern', 'Responsive', 'User-Friendly', 'Conversion-Oriented'],
                  techLabel: 'Design Focus',
                  icon: '🎨'
                },
                {
                  title: 'Mobile Development',
                  subtitle: 'Cross-Platform Mobile Apps Built for Performance',
                  description: 'I develop fast, scalable, and user-friendly mobile applications that deliver seamless experiences across Android and iOS platforms.',
                  deliverables: [
                    'Cross-Platform Mobile Apps',
                    'Business & Productivity Applications',
                    'API & Cloud Integration',
                    'Real-Time Features & Notifications',
                    'Secure Authentication Systems',
                    'Optimized Mobile UI/UX',
                    'Scalable App Architecture'
                  ],
                  techStack: ['React Native', 'Firebase', 'REST APIs', 'Cloud Services'],
                  icon: '📱'
                },
                {
                  title: 'Business Automation',
                  subtitle: 'Automating Workflows & Business Operations',
                  description: 'Build intelligent systems that automate repetitive business processes, improve productivity, and reduce manual work using APIs, dashboards, AI integrations, and workflow automation.',
                  deliverables: [
                    'CRM Automation',
                    'Lead Management Systems',
                    'Workflow Automation',
                    'AI-Powered Business Tools',
                    'Email & Notification Systems',
                    'File Processing Automation',
                    'Internal Admin Platforms'
                  ],
                  techStack: ['Zapier', 'Make', 'n8n', 'Python', 'Node.js', 'API Integrations'],
                  icon: '⚡'
                },
                {
                  title: 'SaaS Development',
                  subtitle: 'Scalable Software-as-a-Service Platforms',
                  description: 'Develop complete SaaS products with authentication, subscriptions, dashboards, APIs, and cloud-based infrastructure designed for startups and growing businesses.',
                  deliverables: [
                    'Multi-User SaaS Platforms',
                    'Subscription Systems',
                    'Admin & Analytics Dashboards',
                    'Secure Authentication',
                    'Cloud Deployment',
                    'API Integrations',
                    'Scalable Architecture'
                  ],
                  techStack: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'Firebase', 'Cloud Services'],
                  icon: '☁️'
                },
                {
                  title: 'AI Integration Solutions',
                  subtitle: 'Smart AI-Powered Digital Experiences',
                  description: 'Integrate AI tools and automation into web applications to improve customer interaction, productivity, and business intelligence.',
                  deliverables: [
                    'AI Chatbots',
                    'AI Content Systems',
                    'Smart Search Features',
                    'AI Workflow Automation',
                    'OpenAI API Integration',
                    'Recommendation Systems',
                    'AI Business Tools'
                  ],
                  techStack: ['OpenAI', 'LangChain', 'Python', 'Node.js', 'Vector Databases'],
                  icon: '🤖'
                },
                {
                  title: 'Dashboard & Admin Systems',
                  subtitle: 'Data-Driven Management Platforms',
                  description: 'Create secure admin panels and analytics dashboards that help businesses manage operations, users, reports, and performance efficiently.',
                  deliverables: [
                    'Analytics Dashboards',
                    'Admin Control Panels',
                    'Role-Based Authentication',
                    'Data Visualization',
                    'Reporting Systems',
                    'Real-Time Monitoring',
                    'Business Insights Tools'
                  ],
                  techStack: ['React', 'Chart.js', 'D3.js', 'PostgreSQL', 'Redis'],
                  icon: '📊'
                },
                {
                  title: 'Authentication & Security',
                  subtitle: 'Secure & Reliable Application Infrastructure',
                  description: 'Implement enterprise-grade authentication systems and security practices to protect applications and user data.',
                  deliverables: [
                    'JWT Authentication',
                    'OAuth & Social Login',
                    'Role-Based Access',
                    'API Security',
                    'Database Protection',
                    'Session Management',
                    'Secure Cloud Deployment'
                  ],
                  techStack: ['JWT', 'OAuth2', 'Passport.js', 'bcrypt', 'HTTPS', 'Security Headers'],
                  icon: '🔒'
                }
              ].map((service, index) => (
                <ServiceCard 
                  key={index}
                  service={service}
                  index={index}
                />
              ))}
            </motion.div>
          </Container>
        </LazySection>

        {/* Strategic Digital Solutions Section */}
        <Suspense fallback={<div className="h-96 bg-surface animate-pulse" />}>
          <StrategicSolutions />
        </Suspense>

        <Suspense fallback={<div className="h-96 bg-surface animate-pulse" />}>
          <Value />
        </Suspense>

        {/* Journey Section */}
        <LazySection className="cinematic-section bg-surface">
          <Container>
            <motion.div
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="max-w-6xl mx-auto"
            >
              {/* Top row images */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 justify-items-center">
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
                    <motion.img
                      src={`/images/My_journey/${image}`}
                      alt={`Journey Image ${index + 1}`}
                      className="w-full h-48 object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                    />
                  </motion.div>
                ))}
              </div>

              <AnimatedHeading 
                text="My Journey"
                className="text-4xl md:text-5xl font-bold tracking-tight text-gradient text-center mb-16"
                stagger={0}
                delay={0.2}
              />
              
              <div className="max-w-4xl mx-auto space-y-16">
                <motion.div 
                  variants={fadeUpVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <AnimatedText 
                    text="Every strong digital builder starts somewhere. Mine didn't begin with big clients or massive launches. It started with curiosity — understanding how things work, how systems connect, and how ideas turn into platforms that create real impact."
                    className="text-lg text-text-secondary leading-relaxed text-center"
                    stagger={0}
                    delay={0.3}
                  />
                </motion.div>

                <motion.div 
                  variants={fadeUpVariants} 
                  className="text-center"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <GradientText 
                    text="The Beginning — Curiosity Over Comfort"
                    className="text-2xl font-bold mb-6"
                  />
                  <AnimatedText 
                    text="What started as learning soon became obsession — not just building things, but building them the right way."
                    className="text-text-secondary leading-relaxed"
                    stagger={0}
                    delay={0.4}
                  />
                </motion.div>

                <motion.div 
                  variants={fadeUpVariants} 
                  className="text-center"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <GradientText 
                    text="Today — Digital Growth Architect"
                    className="text-2xl font-bold mb-6"
                  />
                  <AnimatedText 
                    text="Now, I don't just build platforms. I design end-to-end digital ecosystems, conversion-focused experiences, high-performance web applications, and systems that evolve with the business."
                    className="text-text-secondary leading-relaxed"
                    stagger={0}
                    delay={0.5}
                  />
                </motion.div>

                <motion.div 
                  variants={fadeUpVariants} 
                  className="text-center"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="glass-card rounded-2xl p-8 backdrop-blur-xl max-w-2xl mx-auto">
                    <GradientText 
                      text="Clean architecture. Clear strategy. Scalable execution."
                      className="text-xl font-bold"
                    />
                  </div>
                </motion.div>
              </div>

              {/* Bottom row images */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center mt-16">
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
                    <motion.img
                      src={`/images/My_journey/${image}`}
                      alt={`Journey Image ${index + 3}`}
                      className="w-full h-48 object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </Container>
        </LazySection>

        {/* CTA Section */}
        <LazySection className="cinematic-section">
          <Container>
            <motion.div
              variants={scaleVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="text-center"
            >
              <div className="glass-card rounded-3xl p-12 md:p-16 backdrop-blur-xl border border-accent/20">
                <AnimatedHeading 
                  text="Ready to Transform Your Business?"
                  className="text-4xl md:text-5xl font-bold tracking-tight text-gradient mb-6"
                />
                <AnimatedText 
                  text="Let's discuss how we can work together to achieve your business goals."
                  className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto"
                  stagger={0}
                  delay={0.3}
                />
                <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8">
                  <PrimaryButton 
                    size="lg"
                    onClick={() => navigate('/contact')}
                    className="px-8 py-4 text-lg"
                  >
                    Get Started
                  </PrimaryButton>
                  <PrimaryButton 
                    size="lg"
                    onClick={() => navigate('/contact')}
                    className="px-8 py-4 text-lg"
                  >
                    Schedule Your Free Consultation
                  </PrimaryButton>
                </div>
              </div>
            </motion.div>
          </Container>
        </LazySection>

        <Footer />
      </div>
    </div>
  );
};

export default Home;
