import React, { memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { OptimizedMotion } from '../../animations/optimizedVariants';
import { optimizedPageTransition, optimizedSlidePageTransition } from '../../animations/optimizedVariants';
import { useScrollProgress } from '../../hooks/useCinematicAnimations';

// 🚀 PERFORMANCE-OPTIMIZED PAGE TRANSITION WRAPPER
// Lightweight page transitions with minimal GPU usage

const PageTransition = memo(({ children, location, transitionType = 'fade' }) => {
  const { progress } = useScrollProgress();
  
  const getTransitionVariants = () => {
    switch (transitionType) {
      case 'slide':
        return optimizedSlidePageTransition;
      case 'fade':
      default:
        return optimizedPageTransition;
    }
  };

  return (
    <AnimatePresence mode="wait">
      <OptimizedMotion>
        <motion.div
          key={location.pathname}
          variants={getTransitionVariants()}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="min-h-screen"
        >
          {/* Simplified transition overlay - removed blur effects */}
          <motion.div
            className="fixed inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 pointer-events-none z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.3, 0] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Content */}
          {children}
          
          {/* Optimized page progress indicator */}
          <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-blue-600 origin-left z-50 pointer-events-none"
            style={{ scaleX: progress / 100 }}
            initial={{ scaleX: 0 }}
          />
        </motion.div>
      </OptimizedMotion>
    </AnimatePresence>
  );
});

PageTransition.displayName = 'PageTransition';

export default PageTransition;
