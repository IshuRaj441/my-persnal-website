import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '../../animations/motionVariants';

const Testimonials = () => {
  return (
    <section className="py-24 bg-[#0b0b0f] relative overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="max-w-6xl mx-auto px-6 lg:px-8 text-center relative z-10"
      >
        {/* Massive Quote Mark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12"
        >
          <svg className="w-24 h-24 mx-auto text-[#e50914]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </motion.div>

        {/* Large Testimonial Quote */}
        <motion.blockquote
          variants={fadeUp}
          className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-16 leading-tight max-w-3xl mx-auto italic"
        >
          "Working with Ishuraj wasn't just development — 
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e50914] to-red-600">
            it was strategic partnership.
          </span>"
        </motion.blockquote>

        {/* Author Information */}
        <motion.div
          variants={fadeUp}
          className="space-y-4 mb-16"
        >
          <div className="text-2xl font-bold text-white">
            Sarah Chen
          </div>
          <div className="text-[#b3b3b3] text-lg">
            CEO & Founder, TechVentures
          </div>
        </motion.div>

        {/* Additional Context */}
        <motion.p
          variants={fadeUp}
          className="text-[#b3b3b3] text-lg max-w-3xl mx-auto leading-relaxed mb-16"
        >
          From initial concept to scalable deployment, the attention to detail and technical excellence transformed our vision into a market-leading product that exceeded all expectations.
        </motion.p>
      </motion.div>

      {/* Subtle Background Accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-[rgba(229,9,20,0.6)]/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default Testimonials;
