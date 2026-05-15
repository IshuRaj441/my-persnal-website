import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  cinematicCardHover, 
  cinematicFadeUp, 
  cinematicHover,
  neonGlow,
  liquidCard 
} from '../../animations/cinematicVariants';

// 🎬 CINEMATIC CARD COMPONENT
// Premium 3D hover effects with glassmorphism

const CinematicCard = ({ 
  children, 
  className = '', 
  hoverEffect = '3d',
  glowColor = 'blue',
  delay = 0,
  ...props 
}) => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current || hoverEffect !== '3d') return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const rotateX = ((e.clientY - centerY) / rect.height) * -15;
    const rotateY = ((e.clientX - centerX) / rect.width) * 15;
    
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const getGlowColor = () => {
    switch (glowColor) {
      case 'red':
        return 'rgba(255, 30, 30, 0.3)';
      case 'purple':
        return 'rgba(139, 92, 246, 0.3)';
      case 'green':
        return 'rgba(34, 197, 94, 0.3)';
      case 'blue':
      default:
        return 'rgba(59, 130, 246, 0.3)';
    }
  };

  return (
    <motion.div
      ref={cardRef}
      className={`cinematic-card glass-card rounded-2xl p-6 cursor-pointer transition-all duration-300 ${className}`}
      variants={cinematicFadeUp}
      initial="hidden"
      animate="visible"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: hoverEffect === '3d' ? `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)` : 'none',
        transformStyle: 'preserve-3d',
        boxShadow: isHovered 
          ? `0 25px 80px ${getGlowColor()}, 0 15px 40px rgba(0, 0, 0, 0.3)`
          : '0 8px 32px rgba(0, 0, 0, 0.1)',
        background: isHovered
          ? 'rgba(255, 255, 255, 0.08)'
          : 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(20px)',
        border: isHovered
          ? `1px solid ${getGlowColor().replace('0.3', '0.5')}`
          : '1px solid rgba(255, 255, 255, 0.1)'
      }}
      {...props}
    >
      {/* Glow effect overlay */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        variants={neonGlow}
        initial="rest"
        animate={isHovered ? "hover" : "rest"}
        style={{
          background: `radial-gradient(circle at center, ${getGlowColor()}, transparent)`,
          opacity: isHovered ? 0.6 : 0,
        }}
      />

      {/* Animated gradient border */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          background: isHovered
            ? `linear-gradient(45deg, ${getGlowColor()}, transparent, ${getGlowColor()})`
            : 'none',
          padding: '1px',
          opacity: isHovered ? 1 : 0,
        }}
        animate={{
          backgroundPosition: isHovered ? ['0% 50%', '100% 50%', '0% 50%'] : '0% 50%',
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="w-full h-full rounded-2xl bg-slate-950/90" />
      </motion.div>

      {/* Content with enhanced depth */}
      <div className="relative z-10" style={{ transform: 'translateZ(50px)' }}>
        {children}
      </div>

      {/* Floating particles on hover */}
      {isHovered && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                y: [0, -20, -40],
              }}
              transition={{
                duration: 2,
                delay: i * 0.2,
                repeat: Infinity,
                ease: "easeOut"
              }}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
};

// 🎯 SPECIALIZED CARD VARIANTS

export const ServiceCard = ({ service, index, ...props }) => (
  <CinematicCard 
    delay={index * 0.1} 
    glowColor="blue"
    hoverEffect="3d"
    className="h-full"
    {...props}
  >
    <div className="flex flex-col h-full">
      {/* Icon Container */}
      <div className="w-14 h-14 bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-500/30 rounded-2xl flex items-center justify-center mb-5 shadow-lg shadow-blue-500/10">
        <div className="text-2xl">
          {service.icon}
        </div>
      </div>

      {/* Service Title */}
      <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
        {service.title}
      </h3>

      {/* Subtitle */}
      <p className="text-sm font-semibold text-blue-400 mb-4 leading-relaxed">
        {service.subtitle}
      </p>

      {/* Brief Description */}
      <p className="text-gray-400 text-sm leading-relaxed mb-5">
        {service.description}
      </p>

      {/* What I Deliver Section */}
      <div className="mb-5 flex-grow">
        <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
          What I Deliver
        </h4>
        <ul className="space-y-1.5">
          {service.deliverables?.slice(0, 5).map((item, i) => (
            <li key={i} className="flex items-start text-xs text-gray-300">
              <span className="text-blue-400 mr-2 mt-0.5">•</span>
              <span>{item}</span>
            </li>
          ))}
          {service.deliverables?.length > 5 && (
            <li className="flex items-start text-xs text-gray-400">
              <span className="text-blue-400 mr-2 mt-0.5">•</span>
              <span>+{service.deliverables.length - 5} more</span>
            </li>
          )}
        </ul>
      </div>

      {/* Tech Stack Section */}
      <div className="mb-5">
        <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
          {service.techLabel || 'Tech Focus'}
        </h4>
        <div className="flex flex-wrap gap-2">
          {service.techStack?.map((tech, i) => (
            <span
              key={i}
              className="px-2.5 py-1 bg-blue-500/10 border border-blue-500/20 rounded-md text-xs text-blue-300 font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  </CinematicCard>
);

export const ProjectCard = ({ project, index, ...props }) => (
  <CinematicCard 
    delay={index * 0.15} 
    glowColor="purple"
    hoverEffect="liquid"
    {...props}
  >
    <div className="flex flex-col h-full">
      <div className="relative mb-6 overflow-hidden rounded-xl">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-lg font-bold text-white">
            {project.title}
          </h3>
        </div>
      </div>
      <p className="text-gray-300 leading-relaxed flex-grow">
        {project.description}
      </p>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.tags?.map((tag, i) => (
          <span
            key={i}
            className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </CinematicCard>
);

export const FeatureCard = ({ feature, index, ...props }) => (
  <CinematicCard 
    delay={index * 0.08} 
    glowColor="green"
    hoverEffect="scale"
    {...props}
  >
    <div className="flex items-start space-x-4">
      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
        <span className="text-white text-xl">
          {feature.icon}
        </span>
      </div>
      <div>
        <h3 className="text-lg font-bold text-white mb-2">
          {feature.title}
        </h3>
        <p className="text-gray-300 leading-relaxed">
          {feature.description}
        </p>
      </div>
    </div>
  </CinematicCard>
);

export default CinematicCard;
