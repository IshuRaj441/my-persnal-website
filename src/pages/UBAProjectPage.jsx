import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import Footer from '../components/layout/Footer';
import Container from '../components/layout/Container';
import Section from '../components/layout/Section';

const UBAProjectPage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const smoothScrollY = useSpring(backgroundY, { stiffness: 100, damping: 20 });
  const architectureRef = useRef(null);

  const scrollToArchitecture = () => {
    console.log('Scroll to architecture clicked');
    console.log('Ref current:', architectureRef.current);
    
    // Method 1: Try React ref first
    if (architectureRef.current) {
      console.log('Scrolling to ref element');
      architectureRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }
    
    // Method 2: Try getElementById
    const element = document.getElementById('system-architecture');
    console.log('Element found by ID:', element);
    if (element) {
      console.log('Scrolling to element by ID');
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }
    
    // Method 3: Try querySelector
    const queryElement = document.querySelector('#system-architecture');
    console.log('Element found by querySelector:', queryElement);
    if (queryElement) {
      console.log('Scrolling to element by querySelector');
      queryElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }
    
    // Method 4: Try finding by heading text
    const heading = document.querySelector('h2');
    if (heading && heading.textContent.includes('System Architecture')) {
      console.log('Found System Architecture heading, scrolling to it');
      heading.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }
    
    console.error('System architecture section not found by any method');
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const Counter = ({ end, suffix = "" }) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
      const timer = setInterval(() => {
        setCount((prev) => (prev < end ? prev + 1 : end));
      }, 50);
      return () => clearInterval(timer);
    }, [end]);
    return <span>{count}{suffix}</span>;
  };

  return (
    <div className="min-h-screen bg-[#050816] text-white overflow-hidden">
      
      {/* Animated Background */}
      <motion.div 
        className="fixed inset-0 z-0"
        style={{ y: smoothScrollY }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#050816] via-[#0B1220] to-[#050816]" />
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59,130,246,0.15), transparent 50%)`,
          }}
        />
        <div className="absolute inset-0">
          <div className="h-full w-full bg-grid-pattern opacity-5" />
        </div>
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </motion.div>

      {/* HERO SECTION */}
      <Section className="relative z-10 min-h-screen flex items-center">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <motion.div
                className="inline-block mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="px-4 py-2 bg-gradient-to-r from-[#FF1E1E] to-[#3B82F6] rounded-full text-sm font-medium">
                  AI-Powered Business Automation
                </span>
              </motion.div>
              
              <motion.h1
                className="text-5xl lg:text-7xl xl:text-8xl font-black leading-none mb-6"
                style={{ 
                  fontSize: 'clamp(4rem, 8vw, 7rem)',
                  lineHeight: '0.95'
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Universal Business
                <span className="block bg-gradient-to-r from-[#3B82F6] to-[#FF1E1E] bg-clip-text text-transparent">
                  Automation Platform
                </span>
              </motion.h1>
              
              <motion.p
                className="text-xl text-[#94A3B8] mb-8 max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                AI-powered workflow automation, document processing, lead generation, 
                and enterprise operations management in one scalable ecosystem.
              </motion.p>
              
              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <motion.button
                  className="px-8 py-4 bg-gradient-to-r from-[#3B82F6] to-[#FF1E1E] rounded-lg font-semibold hover:shadow-2xl transition-shadow"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Live Demo
                </motion.button>
                <motion.button
                  className="px-8 py-4 border border-[#3B82F6] rounded-lg font-semibold hover:bg-[#3B82F6]/10 transition-colors"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={scrollToArchitecture}
                >
                  View Architecture
                </motion.button>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <div className="relative grid grid-cols-2 gap-4">
                <motion.div
                  className="relative"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 0 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#3B82F6] to-[#FF1E1E] rounded-2xl blur-xl opacity-50" />
                  <img 
                    src="/images/UiverslBIzAutomate/UBA lg 0.png" 
                    alt="Lead Generation UI"
                    className="relative rounded-2xl shadow-2xl border border-[#3B82F6]/30"
                  />
                </motion.div>
                <motion.div
                  className="relative mt-8"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FF1E1E] to-[#3B82F6] rounded-2xl blur-xl opacity-50" />
                  <img 
                    src="/images/UiverslBIzAutomate/UBA dashboard.png" 
                    alt="Dashboard UI"
                    className="relative rounded-2xl shadow-2xl border border-[#FF1E1E]/30"
                  />
                </motion.div>
                <motion.div
                  className="relative mt-8 col-span-2"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#3B82F6] to-[#FF1E1E] rounded-2xl blur-xl opacity-50" />
                  <img 
                    src="/images/UiverslBIzAutomate/UBA FC.png" 
                    alt="File Converter UI"
                    className="relative rounded-2xl shadow-2xl border border-[#3B82F6]/30 w-full"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* PLATFORM OVERVIEW */}
      <Section className="relative z-10 py-20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Platform Overview
            </h2>
            <p className="text-xl text-[#94A3B8] max-w-3xl mx-auto">
              Transform your business operations with intelligent automation
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-blue-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all" />
              <div className="relative bg-[rgba(17,24,39,0.75)] backdrop-blur-xl rounded-3xl p-8 border border-[rgba(59,130,246,0.3)]">
                <h3 className="text-2xl font-bold mb-6 text-[#FF1E1E]">Problem Statement</h3>
                <ul className="space-y-4">
                  {[
                    "Fragmented workflows across multiple tools",
                    "Manual document handling and processing",
                    "Time-consuming file conversion operations",
                    "Repetitive business operations",
                    "High operational overhead and costs",
                    "Lack of centralized control and visibility",
                    "Inefficient scalability for growing businesses",
                    "Slow execution and delayed responses"
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3"
                    >
                      <span className="text-[#FF1E1E] mt-1">▸</span>
                      <span className="text-[#94A3B8]">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all" />
              <div className="relative bg-[rgba(17,24,39,0.75)] backdrop-blur-xl rounded-3xl p-8 border border-[rgba(59,130,246,0.3)]">
                <h3 className="text-2xl font-bold mb-6 text-[#3B82F6]">UBA Solution Architecture</h3>
                <ul className="space-y-4">
                  {[
                    "Centralized automation ecosystem",
                    "Intelligent document processing pipelines",
                    "Secure authentication and authorization",
                    "Scalable cloud infrastructure",
                    "AI-driven workflow orchestration",
                    "Real-time analytics and monitoring",
                    "RESTful API integration",
                    "Enterprise-grade security protocols"
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3"
                    >
                      <span className="text-[#3B82F6] mt-1">✓</span>
                      <span className="text-[#94A3B8]">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* CORE FEATURES */}
      <Section className="relative z-10 py-20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Core Capabilities
            </h2>
            <p className="text-xl text-[#94A3B8] max-w-3xl mx-auto">
              Enterprise-grade features for modern business automation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "📄",
                title: "Smart Document Processing",
                description: "PDF, DOCX, PPT, image conversion pipelines with OCR and AI extraction",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: "⚡",
                title: "Workflow Automation",
                description: "Automate repetitive business operations with intelligent triggers",
                color: "from-yellow-500 to-orange-500"
              },
              {
                icon: "🔐",
                title: "Secure Authentication",
                description: "JWT authentication, protected APIs, role-based access control",
                color: "from-green-500 to-emerald-500"
              },
              {
                icon: "📊",
                title: "Analytics & Monitoring",
                description: "Track workflows and operational performance with real-time dashboards",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: "💳",
                title: "Credit-Based Monetization",
                description: "Scalable SaaS-ready billing infrastructure with usage tracking",
                color: "from-red-500 to-rose-500"
              },
              {
                icon: "🧠",
                title: "AI Processing Engine",
                description: "Future-ready AI integrations and advanced automation capabilities",
                color: "from-indigo-500 to-purple-500"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#3B82F6]/20 to-[#FF1E1E]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all" />
                <div className="relative bg-[rgba(17,24,39,0.75)] backdrop-blur-xl rounded-2xl p-6 border border-[rgba(59,130,246,0.3)] h-full">
                  <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${feature.color} rounded-t-2xl`} />
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-[#94A3B8] text-sm">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* LIVE PLATFORM SHOWCASE */}
      <Section className="relative z-10 py-20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Live Platform Showcase
            </h2>
            <p className="text-xl text-[#94A3B8] max-w-3xl mx-auto">
              Experience the power of UBA through real interface demonstrations
            </p>
          </motion.div>

          <div className="space-y-20">
            {/* Lead Generation Engine */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <span className="text-[#3B82F6] font-semibold uppercase tracking-wider">Lead Generation</span>
                  <h3 className="text-3xl font-bold mt-2 mb-4">Intelligent Lead Capture & Management</h3>
                  <p className="text-[#94A3B8] mb-6">
                    Advanced lead generation system with automated data extraction, 
                    intelligent scoring, and seamless CRM integration.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                  className="space-y-3"
                >
                  {[
                    "Multi-source lead aggregation",
                    "AI-powered lead scoring",
                    "Automated follow-up sequences",
                    "Real-time analytics dashboard"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#3B82F6] rounded-full" />
                      <span className="text-[#94A3B8]">{item}</span>
                    </div>
                  ))}
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#3B82F6] to-[#FF1E1E] rounded-3xl blur-2xl opacity-50" />
                <img 
                  src="/images/UiverslBIzAutomate/UBA lg 0.png" 
                  alt="Lead Generation Interface"
                  className="relative rounded-3xl shadow-2xl border border-[#3B82F6]/30 w-full"
                />
              </motion.div>
            </motion.div>

            {/* File Conversion Engine */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="relative order-2 lg:order-1"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF1E1E] to-[#3B82F6] rounded-3xl blur-2xl opacity-50" />
                <img 
                  src="/images/UiverslBIzAutomate/UBA FC.png" 
                  alt="File Converter Interface"
                  className="relative rounded-3xl shadow-2xl border border-[#FF1E1E]/30 w-full"
                />
              </motion.div>
              <div className="space-y-6 order-1 lg:order-2">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <span className="text-[#FF1E1E] font-semibold uppercase tracking-wider">File Processing</span>
                  <h3 className="text-3xl font-bold mt-2 mb-4">Universal File Converter</h3>
                  <p className="text-[#94A3B8] mb-6">
                    Advanced file conversion engine supporting 50+ formats with 
                    batch processing, cloud storage, and API integration.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                  className="space-y-3"
                >
                  {[
                    "Multi-format document conversion",
                    "Batch processing capabilities",
                    "Cloud storage integration",
                    "API-first design approach"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#FF1E1E] rounded-full" />
                      <span className="text-[#94A3B8]">{item}</span>
                    </div>
                  ))}
                </motion.div>
              </div>
            </motion.div>

            {/* Admin Dashboard */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <span className="text-[#3B82F6] font-semibold uppercase tracking-wider">Analytics</span>
                  <h3 className="text-3xl font-bold mt-2 mb-4">Command Center Dashboard</h3>
                  <p className="text-[#94A3B8] mb-6">
                    Comprehensive analytics dashboard providing real-time insights 
                    into workflow performance, user activity, and system health.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                  className="space-y-3"
                >
                  {[
                    "Real-time performance metrics",
                    "Custom report generation",
                    "Predictive analytics",
                    "System health monitoring"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#3B82F6] rounded-full" />
                      <span className="text-[#94A3B8]">{item}</span>
                    </div>
                  ))}
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#3B82F6] to-[#FF1E1E] rounded-3xl blur-2xl opacity-50" />
                <img 
                  src="/images/UiverslBIzAutomate/UBA dashboard.png" 
                  alt="Admin Dashboard"
                  className="relative rounded-3xl shadow-2xl border border-[#3B82F6]/30 w-full"
                />
              </motion.div>
            </motion.div>

            {/* Authentication System */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="relative order-2 lg:order-1"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF1E1E] to-[#3B82F6] rounded-3xl blur-2xl opacity-50" />
                <img 
                  src="/images/UiverslBIzAutomate/UBA login.png" 
                  alt="Authentication System"
                  className="relative rounded-3xl shadow-2xl border border-[#FF1E1E]/30 w-full"
                />
              </motion.div>
              <div className="space-y-6 order-1 lg:order-2">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <span className="text-[#FF1E1E] font-semibold uppercase tracking-wider">Security</span>
                  <h3 className="text-3xl font-bold mt-2 mb-4">Enterprise Authentication</h3>
                  <p className="text-[#94A3B8] mb-6">
                    Military-grade security with JWT authentication, 
                    role-based access control, and comprehensive audit trails.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                  className="space-y-3"
                >
                  {[
                    "JWT token-based authentication",
                    "Role-based access control",
                    "Multi-factor authentication",
                    "Comprehensive audit logging"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#FF1E1E] rounded-full" />
                      <span className="text-[#94A3B8]">{item}</span>
                    </div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* TECH STACK */}
      <Section className="relative z-10 py-20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Technology Stack
            </h2>
            <p className="text-xl text-[#94A3B8] max-w-3xl mx-auto">
              Built with cutting-edge technologies for maximum performance and scalability
            </p>
          </motion.div>

          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-center text-[#3B82F6]">Frontend</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {['React.js', 'TypeScript', 'Material UI', 'Redux', 'Context API', 'Axios'].map((tech, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#3B82F6] to-[#FF1E1E] rounded-full blur-lg opacity-50" />
                    <div className="relative px-6 py-3 bg-[rgba(17,24,39,0.75)] backdrop-blur-xl rounded-full border border-[#3B82F6]/50">
                      <span className="font-medium">{tech}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-center text-[#FF1E1E]">Backend</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {['Flask', 'SQLAlchemy', 'PostgreSQL', 'JWT', 'REST APIs'].map((tech, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#FF1E1E] to-[#3B82F6] rounded-full blur-lg opacity-50" />
                    <div className="relative px-6 py-3 bg-[rgba(17,24,39,0.75)] backdrop-blur-xl rounded-full border border-[#FF1E1E]/50">
                      <span className="font-medium">{tech}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-center text-[#3B82F6]">DevOps</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {['Docker', 'Nginx', 'CI/CD', 'Cloud Deployment'].map((tech, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#3B82F6] to-[#FF1E1E] rounded-full blur-lg opacity-50" />
                    <div className="relative px-6 py-3 bg-[rgba(17,24,39,0.75)] backdrop-blur-xl rounded-full border border-[#3B82F6]/50">
                      <span className="font-medium">{tech}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* SYSTEM ARCHITECTURE */}
      <Section className="relative z-10 py-20">
        <Container id="system-architecture" ref={architectureRef}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              System Architecture
            </h2>
            <p className="text-xl text-[#94A3B8] max-w-3xl mx-auto">
              Enterprise-grade architecture designed for scalability and reliability
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#3B82F6]/20 to-[#FF1E1E]/20 rounded-3xl blur-2xl" />
            <div className="relative bg-[rgba(17,24,39,0.75)] backdrop-blur-xl rounded-3xl p-8 border border-[rgba(59,130,246,0.3)]">
              <div className="space-y-6">
                {[
                  { name: "Client", color: "from-blue-500 to-cyan-500" },
                  { name: "React Frontend", color: "from-cyan-500 to-blue-500" },
                  { name: "Flask API Gateway", color: "from-green-500 to-emerald-500" },
                  { name: "Auth + Processing Engine", color: "from-yellow-500 to-orange-500" },
                  { name: "Database + File Storage", color: "from-purple-500 to-pink-500" }
                ].map((layer, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${layer.color} rounded-2xl blur-xl opacity-50`} />
                    <div className="relative bg-[rgba(17,24,39,0.9)] rounded-2xl p-6 border border-white/10">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xl font-bold">{layer.name}</h4>
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                          className="w-3 h-3 bg-gradient-to-r from-[#3B82F6] to-[#FF1E1E] rounded-full"
                        />
                      </div>
                    </div>
                    {i < 4 && (
                      <motion.div
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute left-1/2 -bottom-3 w-0.5 h-6 bg-gradient-to-b from-[#3B82F6] to-[#FF1E1E]"
                      />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* BUSINESS IMPACT */}
      <Section className="relative z-10 py-20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Business Impact
            </h2>
            <p className="text-xl text-[#94A3B8] max-w-3xl mx-auto">
              Measurable results that transform business operations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: 80, suffix: "%", label: "Reduction in manual operations", color: "from-blue-500 to-cyan-500" },
              { number: 10, suffix: "x", label: "Faster workflow execution", color: "from-green-500 to-emerald-500" },
              { number: 99.9, suffix: "%", label: "Secure document handling", color: "from-purple-500 to-pink-500" },
              { number: 24, suffix: "/7", label: "Automated processing", color: "from-yellow-500 to-orange-500" }
            ].map((metric, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center"
              >
                <div className="relative">
                  <div className={`absolute inset-0 bg-gradient-to-r ${metric.color} rounded-3xl blur-2xl opacity-50`} />
                  <div className="relative bg-[rgba(17,24,39,0.75)] backdrop-blur-xl rounded-3xl p-8 border border-[rgba(59,130,246,0.3)]">
                    <div className={`text-5xl lg:text-6xl font-black bg-gradient-to-r ${metric.color} bg-clip-text text-transparent mb-4`}>
                      <Counter end={metric.number} suffix={metric.suffix} />
                    </div>
                    <p className="text-[#94A3B8] font-medium">{metric.label}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* DEPLOYMENT & SCALABILITY */}
      <Section className="relative z-10 py-20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Enterprise Deployment
            </h2>
            <p className="text-xl text-[#94A3B8] max-w-3xl mx-auto">
              Cloud-native architecture built for scale and reliability
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "SaaS Ready",
              "Multi-Tenant",
              "Docker Deployment",
              "Cloud Infrastructure",
              "REST APIs",
              "Enterprise Integrations"
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -3 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#3B82F6]/20 to-[#FF1E1E]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all" />
                <div className="relative bg-[rgba(17,24,39,0.75)] backdrop-blur-xl rounded-2xl p-6 border border-[rgba(59,130,246,0.3)] text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-[#3B82F6] to-[#FF1E1E] rounded-2xl flex items-center justify-center">
                    <span className="text-2xl font-bold">{i + 1}</span>
                  </div>
                  <h4 className="text-lg font-semibold">{feature}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* FUTURE ROADMAP */}
      <Section className="relative z-10 py-20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Future Roadmap
            </h2>
            <p className="text-xl text-[#94A3B8] max-w-3xl mx-auto">
              Innovation pipeline for next-generation automation
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#3B82F6] to-[#FF1E1E] transform -translate-x-1/2" />
            <div className="space-y-8">
              {[
                "AI OCR Integration",
                "ML Automation",
                "Team Collaboration",
                "GraphQL APIs",
                "Mobile Applications",
                "Blockchain Verification"
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex ${i % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                >
                  <div className="w-full md:w-5/12">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="relative group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-[#3B82F6]/20 to-[#FF1E1E]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all" />
                      <div className="relative bg-[rgba(17,24,39,0.75)] backdrop-blur-xl rounded-2xl p-6 border border-[rgba(59,130,246,0.3)]">
                        <div className="flex items-center gap-4">
                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                            className="w-4 h-4 bg-gradient-to-r from-[#3B82F6] to-[#FF1E1E] rounded-full"
                          />
                          <h4 className="text-lg font-semibold">{item}</h4>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* FINAL CTA */}
      <Section className="relative z-10 py-32">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF1E1E]/20 to-[#3B82F6]/20 rounded-3xl blur-3xl" />
              <div className="relative bg-[rgba(17,24,39,0.75)] backdrop-blur-xl rounded-3xl p-12 lg:p-16 border border-[rgba(59,130,246,0.3)]">
                <motion.h2
                  className="text-4xl lg:text-6xl font-black mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Ready To Automate
                  <span className="block bg-gradient-to-r from-[#3B82F6] to-[#FF1E1E] bg-clip-text text-transparent">
                    Your Business Operations?
                  </span>
                </motion.h2>
                
                <motion.p
                  className="text-xl text-[#94A3B8] mb-8 max-w-2xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Build scalable automation systems, AI workflows, and enterprise-grade 
                  document processing infrastructure.
                </motion.p>
                
                <motion.div
                  className="flex flex-wrap justify-center gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link 
                      to="/contact"
                      className="inline-block px-8 py-4 bg-gradient-to-r from-[#3B82F6] to-[#FF1E1E] rounded-lg font-semibold hover:shadow-2xl transition-shadow"
                    >
                      Schedule Consultation
                    </Link>
                  </motion.div>
                  <motion.button
                    className="px-8 py-4 border border-[#3B82F6] rounded-lg font-semibold hover:bg-[#3B82F6]/10 transition-colors"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Request Demo
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </Container>
      </Section>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
};

export default UBAProjectPage;
