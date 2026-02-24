import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Container from '../layout/Container';
import { fadeUp, staggerContainer } from '../../animations/motionVariants';
import ThreeBackground from './ThreeBackground';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-primary flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <ThreeBackground />
      
      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-radial from-netflixRed/10 via-transparent to-transparent"></div>
      </div>

      <Container>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 text-center py-[120px]"
        >
          {/* Massive Main Headline */}
          <motion.h1
            variants={fadeUp}
            className="text-6xl md:text-7xl lg:text-8xl font-bold text-text-primary mb-8 leading-tight tracking-tight"
          >
            Engineering Digital
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-netflixRed to-red-600">
              Products That Dominate.
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={fadeUp}
            className="text-lg text-text-secondary mb-16 max-w-2xl mx-auto leading-relaxed"
          >
            I design and build high-performance web applications, AI-powered systems, and data-driven platforms that scale with ambition.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-20"
          >
            <Link to="/projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="bg-netflixRed text-text-primary px-12 py-5 rounded-full text-xl font-bold hover:bg-red-600 transition-all duration-300 shadow-[0_0_40px_rgba(229,9,20,0.6)]"
              >
                Explore Projects
              </motion.button>
            </Link>
            
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="border-2 border-white/20 text-text-primary px-12 py-5 rounded-full text-xl font-bold hover:bg-white/10 transition-all duration-300 backdrop-blur-md"
              >
                Let's Build Something
              </motion.button>
            </Link>
          </motion.div>

          {/* Micro Line */}
          <motion.p
            variants={fadeUp}
            className="text-sm text-text-secondary mb-20"
          >
            Trusted by startups, founders, and growing businesses.
          </motion.p>

          {/* Smooth Scroll Indicator */}
          <motion.div
            variants={fadeUp}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          >
            <div className="flex flex-col items-center text-text-secondary/60">
              <span className="text-sm mb-3 font-medium">Scroll</span>
              <div className="w-6 h-12 border-2 border-text-secondary/30 rounded-full flex justify-center">
                <div className="w-1 h-4 bg-netflixRed rounded-full mt-3 animate-bounce"></div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Hero;
