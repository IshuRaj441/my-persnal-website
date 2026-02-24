import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../../animations/motionVariants';

const ProjectsRow = () => {
  const projects = [
    {
      id: 1,
      title: "Web Application System",
      description: "Full-stack scalable SaaS architecture built with modern UI/UX and robust backend engineering.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Data Analytics & BI Platform",
      description: "Interactive dashboards transforming complex data into business intelligence.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "AI Fraud Detection Engine",
      description: "Real-time anomaly detection powered by machine learning.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "E-Commerce Platform",
      description: "Scalable marketplace with real-time inventory and secure payments.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "Mobile Banking App",
      description: "Secure financial management with biometric authentication.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="py-24 bg-[#0b0b0f]">
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
            Featured Work
          </h2>
          <p className="text-xl text-[#b3b3b3]">
            Real systems. Real scale. Real impact.
          </p>
        </motion.div>

        {/* Netflix-Style Horizontal Scroll Container */}
        <div className="relative group">
          <div className="overflow-x-auto pb-8 scrollbar-hide">
            <div className="flex gap-8" style={{ width: 'max-content' }}>
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={fadeUp}
                  custom={index}
                  whileHover={{ 
                    scale: 1.08,
                    boxShadow: '0 0 60px rgba(229, 9, 20, 0.6)',
                    zIndex: 10
                  }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 400, 
                    damping: 10 
                  }}
                  className="bg-[#141414] rounded-xl overflow-hidden cursor-pointer group relative"
                  style={{ minWidth: '340px' }}
                >
                  {/* Project Image - aspect-video */}
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Title Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {project.title}
                      </h3>
                    </div>
                    
                    {/* Hover Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        whileHover={{ scale: 1.2 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        className="w-16 h-16 bg-[#e50914] rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(229,9,20,0.6)]"
                      >
                        <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </motion.div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <p className="text-[#b3b3b3] leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Hover Indicator */}
                    <div className="mt-6 flex items-center text-[#e50914] opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <span className="text-base font-bold">View Project</span>
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Enhanced Scroll Indicators */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#0b0b0f] to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#0b0b0f] to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </motion.div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default ProjectsRow;
