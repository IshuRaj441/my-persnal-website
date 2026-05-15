import React, { memo } from 'react';
import { motion } from 'framer-motion';
import Container from '../layout/Container';
import Section from '../layout/Section';
import { 
  optimizedFadeUp, 
  optimizedStagger,
  optimizedCardHover,
  OptimizedMotion
} from '../../animations/optimizedVariants';
import SectionBackgroundEffects from '../effects/SectionBackgroundEffects';

// 🎯 SOLUTION DATA STRUCTURE
const solutionsData = [
  {
    id: 1,
    icon: '🏗',
    title: 'Business-First Strategy',
    subtitle: 'Strategic Planning Before Development Begins',
    description: 'Successful digital products are built through strategic planning, market understanding, and business-focused decision-making. Every project begins with clear objectives, audience positioning, customer journey analysis, and scalable growth planning.',
    keyCapabilities: [
      'Business Requirement Analysis',
      'Digital Product Strategy',
      'Customer Journey Mapping',
      'Revenue & Conversion Planning',
      'Competitor Research',
      'Funnel Architecture',
      'Growth-Oriented Technical Planning',
      'Product Roadmaps'
    ],
    focusAreas: ['Business Growth', 'Market Positioning', 'Conversion Optimization', 'Long-Term Scalability'],
    gradient: 'from-purple-500 to-purple-600'
  },
  {
    id: 2,
    icon: '📈',
    title: 'Scalable Digital Infrastructure',
    subtitle: 'Building High-Performance Systems for Long-Term Growth',
    description: 'I engineer scalable web applications, cloud-ready systems, and optimized backend infrastructures designed for performance, security, reliability, and future scalability.',
    keyCapabilities: [
      'High-Performance Websites',
      'Full-Stack Applications',
      'Backend Architecture & APIs',
      'Cloud Deployment',
      'Authentication Systems',
      'Database Optimization',
      'SaaS Platforms',
      'Enterprise Architecture'
    ],
    focusAreas: ['React', 'Next.js', 'Node.js', 'MongoDB', 'PostgreSQL', 'Cloud Services'],
    gradient: 'from-blue-500 to-blue-600'
  },
  {
    id: 3,
    icon: '🎨',
    title: 'Full-Funnel Growth Engineering',
    subtitle: 'Engineering Systems That Drive Conversions',
    description: 'I build conversion-focused digital systems that transform traffic into measurable business growth through automation, optimization, and intelligent funnel experiences.',
    keyCapabilities: [
      'Landing Page Optimization',
      'Lead Generation Systems',
      'Conversion Funnels',
      'Email Automation',
      'CRM Integrations',
      'Conversion Tracking',
      'User Journey Optimization',
      'Marketing Automation'
    ],
    focusAreas: ['Lead Generation', 'Conversion Growth', 'Retention', 'Funnel Performance'],
    gradient: 'from-emerald-500 to-emerald-600'
  },
  {
    id: 4,
    icon: '⚙',
    title: 'Experience-Led Design',
    subtitle: 'Designing Intuitive & Engaging User Experiences',
    description: 'I craft modern, user-centered interfaces that combine aesthetics with usability, accessibility, responsiveness, and seamless interaction design.',
    keyCapabilities: [
      'Modern UI/UX Design',
      'Mobile-First Interfaces',
      'Interactive Prototypes',
      'Design Systems',
      'Responsive Layouts',
      'Conversion-Focused Design',
      'Accessibility Improvements',
      'User Journey Optimization'
    ],
    focusAreas: ['Minimal', 'Modern', 'Responsive', 'High-Converting', 'User-Centered'],
    gradient: 'from-pink-500 to-pink-600'
  },
  {
    id: 5,
    icon: '🔍',
    title: 'Automation & Efficiency Systems',
    subtitle: 'Smart Systems Designed to Reduce Manual Work',
    description: 'I develop intelligent automation systems that streamline workflows, improve operational efficiency, and reduce repetitive manual processes.',
    keyCapabilities: [
      'Workflow Automation',
      'CRM Integrations',
      'Notification Systems',
      'API Integrations',
      'File Processing Automation',
      'Payment Gateway Systems',
      'Data Pipelines',
      'Internal Productivity Platforms'
    ],
    focusAreas: ['Efficiency', 'Scalability', 'Automation', 'Process Optimization'],
    gradient: 'from-orange-500 to-orange-600'
  },
  {
    id: 6,
    icon: '📊',
    title: 'Data-Driven Optimization',
    subtitle: 'Performance Improvement Through Analytics',
    description: 'I integrate analytics and optimization systems that help businesses understand user behavior, monitor performance, and improve conversion outcomes through real data.',
    keyCapabilities: [
      'Performance Analytics',
      'User Behavior Tracking',
      'Heatmaps',
      'A/B Testing',
      'SEO Monitoring',
      'Funnel Analysis',
      'Conversion Optimization',
      'Business Intelligence Dashboards'
    ],
    focusAreas: ['Analytics', 'Performance', 'Conversion Growth', 'Data Intelligence'],
    gradient: 'from-cyan-500 to-cyan-600'
  }
];

// 🎨 REUSABLE SOLUTION CARD COMPONENT
const SolutionCard = memo(({ solution, index }) => {
  return (
    <motion.div
      variants={optimizedFadeUp}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      whileHover="hover"
      className="group"
    >
      <motion.div
        variants={optimizedCardHover}
        className="relative h-full"
      >
        {/* Glass Card with Glow Border */}
        <div className="relative h-full bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden">
          
          {/* Hover Glow Effect */}
          <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
          
          {/* Top Gradient Border */}
          <div className={`absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r ${solution.gradient} opacity-50`} />
          
          {/* Card Content */}
          <div className="relative p-8 flex flex-col h-full">
            
            {/* Icon Container */}
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.2 }}
              className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${solution.gradient} flex items-center justify-center text-3xl mb-6 shadow-lg shadow-${solution.gradient.split('-')[1]}-500/20`}
            >
              {solution.icon}
            </motion.div>
            
            {/* Title */}
            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70 transition-all duration-300">
              {solution.title}
            </h3>
            
            {/* Subtitle */}
            <p className="text-sm font-medium text-white/60 mb-4 uppercase tracking-wider">
              {solution.subtitle}
            </p>
            
            {/* Description */}
            <p className="text-gray-300 leading-relaxed text-sm mb-6 flex-grow">
              {solution.description}
            </p>
            
            {/* Key Capabilities */}
            <div className="mb-6">
              <h4 className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-3">
                Key Capabilities
              </h4>
              <ul className="space-y-2">
                {solution.keyCapabilities.map((capability, idx) => (
                  <li key={idx} className="flex items-start text-sm text-gray-400">
                    <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${solution.gradient} mt-1.5 mr-3 flex-shrink-0`} />
                    <span className="group-hover:text-gray-300 transition-colors duration-200">
                      {capability}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Focus Areas Tags */}
            <div className="mt-auto">
              <h4 className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-3">
                Focus Areas
              </h4>
              <div className="flex flex-wrap gap-2">
                {solution.focusAreas.map((area, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 text-xs font-medium rounded-lg bg-white/5 border border-white/10 text-gray-300 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-200"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
});

SolutionCard.displayName = 'SolutionCard';

// 🚀 MAIN STRATEGIC SOLUTIONS SECTION
const StrategicSolutions = memo(() => {
  return (
    <Section className="bg-[#0b0b0f] relative overflow-hidden">
      
      {/* 🌌 Cinematic Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <SectionBackgroundEffects />
      </div>
      
      <Container>
        <OptimizedMotion>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={optimizedStagger}
            className="relative z-10"
          >
            
            {/* Section Header */}
            <motion.div
              variants={optimizedFadeUp}
              className="text-center mb-20"
            >
              {/* Gradient Heading */}
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white/80 to-white/60">
                  Strategic Digital
                </span>
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400">
                  Solutions
                </span>
              </h2>
              
              {/* Subtitle */}
              <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Delivering scalable, high-performance digital systems designed to accelerate growth, automation, user engagement, and business transformation.
              </p>
              
              {/* Decorative Line */}
              <div className="mt-8 flex justify-center">
                <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
              </div>
            </motion.div>
            
            {/* Solutions Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {solutionsData.map((solution, index) => (
                <SolutionCard
                  key={solution.id}
                  solution={solution}
                  index={index}
                />
              ))}
            </div>
            
          </motion.div>
        </OptimizedMotion>
      </Container>
    </Section>
  );
});

StrategicSolutions.displayName = 'StrategicSolutions';

export default StrategicSolutions;
