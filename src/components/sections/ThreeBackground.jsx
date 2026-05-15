import React, { useEffect, useState, memo } from 'react';
import { motion } from 'framer-motion';
import { OptimizedMotion, optimizedPulseGlow, useIsMobile } from '../animations/optimizedVariants';

export default memo(function ThreeBackground() {
  const [isClient, setIsClient] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-secondary"></div>
      </div>
    );
  }

  // On mobile, render minimal background
  if (isMobile) {
    return (
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-secondary">
          {/* Single subtle orb on mobile */}
          <OptimizedMotion>
            <motion.div
              className="absolute top-1/3 left-1/4 w-32 h-32 bg-accent/10 rounded-full blur-xl"
              variants={optimizedPulseGlow}
              initial="initial"
              animate="animate"
            />
          </OptimizedMotion>
        </div>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Optimized gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-secondary">
        {/* Reduced floating orbs - from 4 to 2 */}
        <OptimizedMotion>
          <motion.div
            className="absolute top-20 left-20 w-32 h-32 bg-accent/15 rounded-full blur-xl"
            variants={optimizedPulseGlow}
            initial="initial"
            animate="animate"
            style={{ animationDelay: '0s' }}
          />
          <motion.div
            className="absolute bottom-32 right-20 w-36 h-36 bg-netflixRed/15 rounded-full blur-xl"
            variants={optimizedPulseGlow}
            initial="initial"
            animate="animate"
            style={{ animationDelay: '2s' }}
          />
        </OptimizedMotion>
        
        {/* Reduced particles - from 20 to 8 */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-accent/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 3 + 3}s`
              }}
            />
          ))}
        </div>
        
        {/* Reduced geometric shapes - from 3 to 1 */}
        <OptimizedMotion>
          <motion.div
            className="absolute top-1/4 left-1/4 w-16 h-16 border-2 border-accent/20 rotate-45"
            animate={{ rotate: [0, 45, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
        </OptimizedMotion>
        
        {/* Optimized moving gradient overlay */}
        <OptimizedMotion>
          <motion.div 
            className="absolute inset-0 opacity-20"
            style={{
              background: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.2) 0%, transparent 50%)'
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.3, 0.2]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </OptimizedMotion>
      </div>
    </div>
  );
});
