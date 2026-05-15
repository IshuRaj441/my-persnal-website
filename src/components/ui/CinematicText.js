import React from 'react';
import { motion } from 'framer-motion';
import { 
  cinematicTextReveal, 
  cinematicHeadingReveal,
  cinematicStagger,
  cinematicFastStagger
} from '../../animations/cinematicVariants';
import { useScrollAnimation } from '../../hooks/useCinematicAnimations';

// 🎬 CINEMATIC TEXT COMPONENTS
// Premium text animations with stagger effects

// Word-by-word animation
export const AnimatedText = ({ 
  text, 
  className = '', 
  delay = 0,
  stagger = 0.05,
  variants = cinematicTextReveal,
  ...props 
}) => {
  const { ref, controls } = useScrollAnimation(variants);
  
  const words = text.split(' ');
  
  return (
    <motion.div
      ref={ref}
      className={`animated-text ${className}`}
      initial="hidden"
      animate={controls}
      variants={cinematicStagger}
      {...props}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={variants}
          style={{ display: 'inline-block', marginRight: '0.25em' }}
          transition={{ delay: delay + (i * stagger) }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

// Character-by-character animation
export const AnimatedHeading = ({ 
  text, 
  className = '', 
  delay = 0,
  stagger = 0.03,
  variants = cinematicHeadingReveal,
  ...props 
}) => {
  const { ref, controls } = useScrollAnimation(variants);
  
  const chars = text.split('');
  
  return (
    <motion.h1
      ref={ref}
      className={`animated-heading ${className}`}
      initial="hidden"
      animate={controls}
      variants={cinematicFastStagger}
      {...props}
    >
      {chars.map((char, i) => (
        <motion.span
          key={i}
          variants={variants}
          style={{ display: 'inline-block' }}
          transition={{ delay: delay + (i * stagger) }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.h1>
  );
};

// Typewriter effect
export const TypewriterText = ({ 
  text, 
  className = '', 
  speed = 50,
  delay = 0,
  cursor = true,
  ...props 
}) => {
  const { ref, controls } = useScrollAnimation({
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  });
  
  return (
    <motion.div
      ref={ref}
      className={`typewriter-text ${className}`}
      initial="hidden"
      animate={controls}
      {...props}
    >
      <motion.span
        initial={{ width: 0 }}
        animate={{ width: 'auto' }}
        transition={{ 
          delay,
          duration: text.length * speed / 1000,
          ease: "easeOut"
        }}
        style={{
          display: 'inline-block',
          overflow: 'hidden',
          whiteSpace: 'nowrap'
        }}
      >
        {text}
      </motion.span>
      {cursor && (
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="ml-1"
        >
          |
        </motion.span>
      )}
    </motion.div>
  );
};

// Gradient text animation
export const GradientText = ({ 
  text, 
  className = '', 
  colors = ['#3B82F6', '#8B5CF6', '#EC4899'],
  duration = 3,
  ...props 
}) => {
  return (
    <motion.span
      className={`gradient-text ${className} bg-clip-text text-transparent font-bold`}
      style={{
        backgroundImage: `linear-gradient(90deg, ${colors.join(', ')})`,
        backgroundSize: '200% 100%',
      }}
      animate={{
        backgroundPosition: ['0% 50%', '200% 50%', '0% 50%'],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear"
      }}
      {...props}
    >
      {text}
    </motion.span>
  );
};

// Glitch text effect
export const GlitchText = ({ 
  text, 
  className = '', 
  intensity = 0.1,
  ...props 
}) => {
  return (
    <motion.div
      className={`glitch-text ${className} relative font-bold text-white`}
      style={{
        textShadow: `0 0 10px rgba(59, 130, 246, 0.5)`
      }}
      whileHover={{
        textShadow: [
          `2px 2px 0px rgba(255, 30, 30, ${intensity})`,
          `-2px -2px 0px rgba(59, 130, 246, ${intensity})`,
          `2px -2px 0px rgba(139, 92, 246, ${intensity})`,
          `0 0 10px rgba(59, 130, 246, 0.5)`
        ]
      }}
      transition={{ duration: 0.3 }}
      {...props}
    >
      {text}
      {/* Glitch layers */}
      <motion.span
        className="absolute inset-0 text-red-500"
        style={{ clipPath: 'inset(0 0 50% 0)' }}
        animate={{
          x: [0, 2, -2, 0],
          y: [0, -1, 1, 0]
        }}
        transition={{
          duration: 0.2,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        {text}
      </motion.span>
      <motion.span
        className="absolute inset-0 text-blue-500"
        style={{ clipPath: 'inset(50% 0 0 0)' }}
        animate={{
          x: [0, -2, 2, 0],
          y: [0, 1, -1, 0]
        }}
        transition={{
          duration: 0.2,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        {text}
      </motion.span>
    </motion.div>
  );
};

// Floating text animation
export const FloatingText = ({ 
  text, 
  className = '', 
  amplitude = 5,
  frequency = 2,
  ...props 
}) => {
  return (
    <motion.span
      className={`floating-text ${className} inline-block`}
      animate={{
        y: [0, -amplitude, 0]
      }}
      transition={{
        duration: frequency,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      {...props}
    >
      {text}
    </motion.span>
  );
};

// Reveal text with underline
export const RevealText = ({ 
  text, 
  className = '', 
  delay = 0,
  underlineColor = '#3B82F6',
  ...props 
}) => {
  const { ref, controls } = useScrollAnimation({
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  });
  
  return (
    <div className={`reveal-text ${className}`} ref={ref} {...props}>
      <motion.span
        initial="hidden"
        animate={controls}
        transition={{ delay }}
      >
        {text}
      </motion.span>
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 origin-left"
        style={{ backgroundColor: underlineColor }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: delay + 0.3, duration: 0.6 }}
      />
    </div>
  );
};

// Text with highlight effect
export const HighlightText = ({ 
  text, 
  highlight,
  className = '',
  highlightColor = 'rgba(59, 130, 246, 0.3)',
  ...props 
}) => {
  const parts = text.split(highlight);
  
  return (
    <span className={`highlight-text ${className}`} {...props}>
      {parts.map((part, i) => (
        <React.Fragment key={i}>
          {part}
          {i < parts.length - 1 && (
            <motion.span
              className="px-2 py-1 rounded"
              style={{ backgroundColor: highlightColor }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1, duration: 0.3 }}
            >
              {highlight}
            </motion.span>
          )}
        </React.Fragment>
      ))}
    </span>
  );
};

// Counter animation
export const AnimatedCounter = ({ 
  from = 0,
  to,
  duration = 2,
  className = '',
  suffix = '',
  prefix = '',
  ...props 
}) => {
  return (
    <motion.span
      className={`animated-counter ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      {...props}
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {prefix}
      </motion.span>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        {from}
      </motion.span>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        {suffix}
      </motion.span>
    </motion.span>
  );
};

// Default export
export { AnimatedText as default };
