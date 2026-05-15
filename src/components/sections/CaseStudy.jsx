import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, slideInLeft, slideInRight } from '../../animations/motionVariants';

const CaseStudy = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-secondaryBg to-primaryBg relative overflow-hidden">
      {/* Cinematic Background Glow Effects */}
      <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-netflixRed/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-[1000px] h-[1000px] bg-accentGlow rounded-full blur-3xl"></div>

      <div className="max-w-8xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-textPrimary mb-6">
            From Concept to Category Leader
          </h2>
          <p className="text-xl text-textSecondary">
            Real transformation. Real results.
          </p>
        </motion.div>

        {/* Wide Cinematic Case Study Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Problem & Architecture */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInLeft}
            className="space-y-8"
          >
            <div className="bg-secondaryBg/50 backdrop-blur-sm rounded-2xl p-10 border border-white/10 hover:border-netflixRed/50 transition-all duration-300 group">
              <h3 className="text-3xl font-bold text-netflixRed mb-6 group-hover:scale-105 transition-transform duration-300">
                Problem
              </h3>
              <p className="text-textSecondary leading-relaxed text-lg">
                A fragmented web platform struggling with scalability, poor user experience, and outdated technology stack was limiting business growth and user engagement.
              </p>
            </div>

            <div className="bg-secondaryBg/50 backdrop-blur-sm rounded-2xl p-10 border border-white/10 hover:border-netflixRed/50 transition-all duration-300 group">
              <h3 className="text-3xl font-bold text-netflixRed mb-6 group-hover:scale-105 transition-transform duration-300">
                Architecture
              </h3>
              <p className="text-textSecondary leading-relaxed text-lg">
                Designed a microservices architecture with React frontend, Node.js backend, and cloud-native deployment strategy for optimal performance and scalability.
              </p>
            </div>
          </motion.div>

          {/* Right Side - Implementation & Growth */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInRight}
            className="space-y-8"
          >
            <div className="bg-secondaryBg/50 backdrop-blur-sm rounded-2xl p-10 border border-white/10 hover:border-netflixRed/50 transition-all duration-300 group">
              <h3 className="text-3xl font-bold text-netflixRed mb-6 group-hover:scale-105 transition-transform duration-300">
                Implementation
              </h3>
              <p className="text-textSecondary leading-relaxed text-lg">
                Agile development approach with CI/CD pipelines, automated testing, and progressive deployment ensured smooth transition with zero downtime.
              </p>
            </div>

            <div className="bg-secondaryBg/50 backdrop-blur-sm rounded-2xl p-10 border border-white/10 hover:border-netflixRed/50 transition-all duration-300 group">
              <h3 className="text-3xl font-bold text-netflixRed mb-6 group-hover:scale-105 transition-transform duration-300">
                Growth Impact
              </h3>
              <p className="text-textSecondary leading-relaxed text-lg">
                Transformed into a high-performance ecosystem serving thousands of users daily with 99.9% uptime, 3x faster load times, and 40% increase in user engagement.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Key Metrics - Enhanced */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { value: '99.9%', label: 'Uptime' },
            { value: '3x', label: 'Faster Performance' },
            { value: '40%', label: 'User Growth' }
          ].map((metric, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="text-center bg-gradient-to-b from-netflixRed/20 to-transparent rounded-2xl p-8 border border-netflixRed/30 backdrop-blur-sm group"
            >
              <div className="text-4xl md:text-5xl font-black text-netflixRed mb-4 group-hover:scale-110 transition-transform duration-300">
                {metric.value}
              </div>
              <div className="text-textSecondary text-lg font-medium">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mt-20"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="bg-netflixRed text-textPrimary px-12 py-5 rounded-xl text-xl font-bold hover:bg-red-600 transition-all duration-300 shadow-lg hover:shadow-glow-red"
          >
            View Full Case Study
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudy;
