import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../../animations/motionVariants';

const Process = () => {
  const processSteps = [
    {
      number: '01',
      title: 'Discovery & Strategy',
      description: 'Deep dive into your vision, market analysis, and technical requirements to establish a solid foundation.'
    },
    {
      number: '02',
      title: 'System Architecture',
      description: 'Design scalable, secure, and performant architecture that aligns with your business goals.'
    },
    {
      number: '03',
      title: 'Agile Development',
      description: 'Iterative development with continuous feedback, ensuring we build exactly what you need.'
    },
    {
      number: '04',
      title: 'Optimization & Testing',
      description: 'Rigorous testing, performance optimization, and security audits to guarantee production readiness.'
    },
    {
      number: '05',
      title: 'Launch & Growth Support',
      description: 'Seamless deployment and ongoing support to ensure your product scales with success.'
    }
  ];

  return (
    <section className="py-32 bg-[#0b0b0f]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="max-w-7xl mx-auto px-6 lg:px-8"
      >
        {/* Section Header */}
        <motion.div
          variants={fadeUp}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
            How I Engineer Excellence
          </h2>
          <p className="text-xl text-[#b3b3b3]">
            A proven 5-stage execution framework.
          </p>
        </motion.div>

        {/* Vertical Timeline Process Steps */}
        <div className="relative max-w-4xl mx-auto">
          {/* Left Vertical Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#e50914] via-[rgba(229,9,20,0.6)] to-transparent"></div>

          <div className="space-y-24">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                custom={index}
                whileHover={{ x: 20 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="relative flex items-start group"
              >
                {/* Step Number with Red Glow */}
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="relative flex-shrink-0 w-20 h-20 bg-[#e50914] rounded-full flex items-center justify-center text-white font-black text-2xl shadow-[0_0_40px_rgba(229,9,20,0.6)] z-10"
                >
                  {step.number}
                  {/* Glow Ring */}
                  <div className="absolute inset-0 bg-[rgba(229,9,20,0.6)] rounded-full blur-xl animate-pulse"></div>
                </motion.div>

                {/* Step Content Aligned Right */}
                <div className="flex-grow ml-12">
                  <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-[#e50914] transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-[#b3b3b3] leading-relaxed text-lg">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Process;
