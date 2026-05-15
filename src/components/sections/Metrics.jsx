import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, counterAnimation } from '../../animations/motionVariants';

const Metrics = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  const metrics = [
    { value: 50, suffix: '+', label: 'PROJECTS DELIVERED', duration: 2000 },
    { value: 5, suffix: '+', label: 'YEARS ENGINEERING', duration: 1500 },
    { value: 100, suffix: '%', label: 'CLIENT SATISFACTION', duration: 2500 },
    { value: 10, suffix: '+', label: 'TECHNOLOGIES MASTERED', duration: 1800 }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const AnimatedCounter = ({ value, suffix, duration }) => {
    const [count, setCount] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);

    useEffect(() => {
      if (isVisible && !hasStarted) {
        setHasStarted(true);
        const increment = value / (duration / 16);
        let current = 0;

        const timer = setInterval(() => {
          current += increment;
          if (current >= value) {
            setCount(value);
            clearInterval(timer);
          } else {
            setCount(Math.floor(current));
          }
        }, 16);

        return () => clearInterval(timer);
      }
    }, [isVisible, hasStarted, value, duration]);

    return (
      <span className="text-6xl font-bold text-white drop-shadow-[0_0_20px_rgba(229,9,20,0.6)]">
        {count}{suffix}
      </span>
    );
  };

  return (
    <section ref={ref} className="py-24 bg-[#141414]">
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
            Numbers That Matter
          </h2>
          <p className="text-xl text-[#b3b3b3]">
            Proven track record of excellence and innovation.
          </p>
        </motion.div>

        {/* Centered Horizontal Row of Metrics */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-16 md:gap-24">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              custom={index}
              whileHover={{ 
                scale: 1.05,
              }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="text-center group"
            >
              <div className="relative">
                {/* Glow Background */}
                <div className="absolute inset-0 bg-[rgba(229,9,20,0.6)] rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Counter */}
                <div className="relative">
                  <AnimatedCounter 
                    value={metric.value} 
                    suffix={metric.suffix} 
                    duration={metric.duration}
                  />
                </div>
              </div>
              
              <p className="text-[#b3b3b3] mt-6 text-sm font-medium uppercase tracking-wider group-hover:text-white transition-colors duration-300">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Metrics;
