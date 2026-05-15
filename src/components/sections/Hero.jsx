import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Container from '../layout/Container';
import { OptimizedMotion } from '../../animations/optimizedVariants';
import { 
  optimizedFadeUp, 
  optimizedStagger,
  optimizedPulseGlow
} from '../../animations/optimizedVariants';
import { PrimaryButton, SecondaryButton } from '../../components/ui/OptimizedButton';
import { AnimatedHeading, AnimatedText, GradientText } from '../../components/ui/OptimizedText';

const Hero = memo(() => {
  return (
    <section className="relative min-h-screen bg-bg-primary flex items-center justify-center overflow-hidden">
            
      {/* Optimized Radial Gradient Overlay */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary-red/10 via-transparent to-transparent"
          variants={optimizedPulseGlow}
          initial="initial"
          animate="animate"
        />
      </div>

      {/* Optimized geometric shapes - reduced from 3 to 2 */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-20 w-24 h-24 border border-accent/20 rounded-lg"
          animate={{ rotate: [0, 45, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-32 right-16 w-20 h-20 border border-primary-red/20 rounded-full"
          animate={{ rotate: [0, -45, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <Container>
        <OptimizedMotion>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={optimizedStagger}
            className="relative z-10 text-center py-[120px]"
          >
          {/* 🎬 Massive Main Headline with Cinematic Animation */}
          <div className="mb-8">
            <AnimatedHeading 
              text="Engineering Digital"
              className="text-6xl md:text-7xl lg:text-8xl font-bold text-text-primary leading-tight tracking-tight"
            />
            <div className="mt-4">
              <GradientText 
                text="Products That Dominate."
                colors={['#FF1E1E', '#DC2626', '#B91C1C']}
                className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight"
              />
            </div>
          </div>

          {/* Optimized Subtext */}
          <motion.div variants={optimizedFadeUp} className="mb-16">
            <AnimatedText 
              text="I design and build high-performance web applications, AI-powered systems, and data-driven platforms that scale with ambition."
              className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed"
              stagger={0.01}
            />
          </motion.div>

          {/* Optimized CTA Buttons */}
          <motion.div
            variants={optimizedFadeUp}
            className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-20"
          >
            <Link to="/projects">
              <PrimaryButton 
                size="lg"
                className="px-12 py-5 text-xl font-bold"
              >
                Explore Projects
              </PrimaryButton>
            </Link>
            
            <Link to="/contact">
              <SecondaryButton 
                size="lg"
                className="px-12 py-5 text-xl font-bold border-2 border-primary-red/30 hover:border-primary-red/60"
              >
                Let's Build Something
              </SecondaryButton>
            </Link>
          </motion.div>

          {/* Optimized Trust Line */}
          <motion.div
            variants={optimizedFadeUp}
            className="mb-20"
          >
            <div className="glass-card rounded-full px-8 py-4 inline-block">
              <AnimatedText 
                text="Trusted by startups, founders, and growing businesses."
                className="text-sm text-text-secondary"
                stagger={0.005}
              />
            </div>
          </motion.div>

          {/* Optimized Scroll Indicator */}
          <motion.div
            variants={optimizedFadeUp}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          >
            <div className="flex flex-col items-center text-text-secondary/60">
              <motion.span 
                className="text-sm mb-3 font-medium"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Scroll
              </motion.span>
              <div className="w-6 h-12 border-2 border-text-secondary/30 rounded-full flex justify-center glass-card">
                <motion.div
                  className="w-1 h-4 bg-primary-red rounded-full mt-3"
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
        </OptimizedMotion>
      </Container>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;
