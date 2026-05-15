import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '../../animations/motionVariants';

const CTA = () => {
  return (
    <section className="py-[120px] bg-black relative overflow-hidden">
      {/* Massive Background Glow Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-[rgba(229,9,20,0.6)]/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="max-w-6xl mx-auto px-6 lg:px-8 text-center relative z-10"
      >
        {/* Massive Title */}
        <motion.h2
          variants={fadeUp}
          className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-12 leading-tight"
        >
          Ready to Build Something
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e50914] to-red-600">
            Exceptional?
          </span>
        </motion.h2>

        {/* Enhanced Subtitle */}
        <motion.p
          variants={fadeUp}
          className="text-xl md:text-2xl text-[#b3b3b3] mb-16 leading-relaxed max-w-4xl mx-auto"
        >
          Let's discuss how we can transform your vision into a powerful digital product that drives results and scales with your ambition.
        </motion.p>

        {/* Massive Glowing Primary CTA Button */}
        <motion.div
          variants={fadeUp}
          className="mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="bg-[#e50914] text-white px-16 py-6 rounded-2xl text-2xl font-black hover:bg-red-600 transition-all duration-300 shadow-[0_0_40px_rgba(229,9,20,0.6)] relative group"
          >
            <span className="relative z-10">Schedule a Strategy Call</span>
            {/* Button Glow Background */}
            <div className="absolute inset-0 bg-[#e50914] rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CTA;
