// 🚀 PERFORMANCE-OPTIMIZED ANIMATION VARIANTS
// Minimal luxury motion design - Apple + Linear + Vercel style
// ONLY animate: transform, opacity
// AVOID: filter, box-shadow, backdrop-filter, layout properties

import { LazyMotion } from 'framer-motion';
import { useState, useEffect } from 'react';

// 🎯 CORE MOTION FEATURES (LAZY LOADED)
const loadFeatures = () => import('framer-motion').then(mod => mod.domAnimation);

// ⚡ GPU-ACCELERATED ENTRANCE ANIMATIONS
export const optimizedFadeUp = {
  hidden: { 
    opacity: 0, 
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

export const optimizedFadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

export const optimizedScaleIn = {
  hidden: { 
    opacity: 0, 
    scale: 0.98
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

export const optimizedSlideIn = {
  hidden: { 
    opacity: 0, 
    x: -20
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

// 🌊 LIGHTWEIGHT STAGGER CONTAINERS
export const optimizedStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};

export const optimizedFastStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.05
    }
  }
};

// ✨ OPTIMIZED HOVER EFFECTS (GPU ACCELERATED ONLY)
export const optimizedHover = {
  rest: { 
    scale: 1,
    transition: { duration: 0.2, ease: "easeOut" }
  },
  hover: { 
    scale: 1.02,
    transition: { duration: 0.15, ease: "easeInOut" }
  }
};

export const optimizedCardHover = {
  rest: { 
    y: 0,
    scale: 1,
    transition: { duration: 0.2, ease: "easeOut" }
  },
  hover: { 
    y: -4,
    scale: 1.01,
    transition: { duration: 0.15, ease: "easeInOut" }
  }
};

// 🎯 MINIMAL BUTTON ANIMATIONS
export const optimizedButton = {
  rest: { 
    scale: 1,
    transition: { duration: 0.15, ease: "easeOut" }
  },
  hover: { 
    scale: 1.03,
    transition: { duration: 0.1, ease: "easeInOut" }
  },
  tap: { 
    scale: 0.98,
    transition: { duration: 0.1, ease: "easeInOut" }
  }
};

export const optimizedSecondaryButton = {
  rest: { 
    scale: 1,
    transition: { duration: 0.15, ease: "easeOut" }
  },
  hover: { 
    scale: 1.03,
    transition: { duration: 0.1, ease: "easeInOut" }
  },
  tap: { 
    scale: 0.98,
    transition: { duration: 0.1, ease: "easeInOut" }
  }
};

// 📱 LIGHTWEIGHT NAVBAR ANIMATIONS
export const optimizedNavbarReveal = {
  hidden: { 
    opacity: 0, 
    y: -16
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

export const optimizedNavbarLinkHover = {
  rest: { 
    scale: 1
  },
  hover: { 
    scale: 1.05,
    transition: { duration: 0.15, ease: "easeInOut" }
  }
};

// 🌟 CLEAN TEXT ANIMATIONS
export const optimizedTextReveal = {
  hidden: { 
    opacity: 0, 
    y: 16
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

export const optimizedHeadingReveal = {
  hidden: { 
    opacity: 0, 
    y: 20,
    scale: 0.98
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

// 🎪 LIGHTWEIGHT PAGE TRANSITIONS
export const optimizedPageTransition = {
  hidden: { 
    opacity: 0, 
    scale: 0.98
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  },
  exit: {
    opacity: 0,
    scale: 1.01,
    transition: {
      duration: 0.2,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

export const optimizedSlidePageTransition = {
  hidden: { 
    opacity: 0, 
    x: 20
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  },
  exit: {
    opacity: 0,
    x: -20,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

// 🎭 MINIMAL BACKGROUND ANIMATIONS
export const optimizedFloatingOrb = {
  initial: { 
    scale: 0.8,
    opacity: 0
  },
  animate: {
    scale: [0.8, 1, 0.8],
    opacity: [0.3, 0.5, 0.3],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export const optimizedPulseGlow = {
  initial: { 
    opacity: 0.4,
    scale: 1
  },
  animate: {
    opacity: [0.4, 0.6, 0.4],
    scale: [1, 1.05, 1],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// 🎪 SCROLL ANIMATIONS (ONCE ONLY)
export const optimizedScrollReveal = {
  hidden: { 
    opacity: 0, 
    y: 30
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

// 🎨 IMAGE ANIMATIONS
export const optimizedImageReveal = {
  hidden: { 
    opacity: 0, 
    scale: 1.02
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

export const optimizedImageHover = {
  rest: { 
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" }
  },
  hover: { 
    scale: 1.04,
    transition: { duration: 0.2, ease: "easeInOut" }
  }
};

// 🎯 MICRO INTERACTIONS
export const optimizedIconBounce = {
  rest: { 
    scale: 1,
    rotate: 0
  },
  hover: { 
    scale: 1.1,
    rotate: 5,
    transition: { duration: 0.15, ease: "easeInOut" }
  }
};

// 🌊 RESPONSIVE ANIMATION HELPERS
export const getMobileOptimizedVariants = (desktopVariants, mobileVariants = null) => {
  // Return different variants for mobile to reduce animations
  if (typeof window !== 'undefined' && window.innerWidth < 768) {
    return mobileVariants || {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.2 } }
    };
  }
  return desktopVariants;
};

// 🚀 LAZY MOTION WRAPPER
export const OptimizedMotion = ({ children }) => (
  <LazyMotion features={loadFeatures}>
    {children}
  </LazyMotion>
);

// 📱 MOBILE DETECTION HOOK
export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  return isMobile;
};

// 🎯 PERFORMANCE MONITORING
export const usePerformanceMode = () => {
  const [reduceMotion, setReduceMotion] = useState(false);
  
  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduceMotion(mediaQuery.matches);
    
    const handleChange = (e) => setReduceMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);
  
  return reduceMotion;
};

// 🚀 REDUCED MOTION VARIANTS
export const reducedMotionVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.1 }
  }
};

const optimizedVariants = {
  // Entrance
  optimizedFadeUp,
  optimizedFadeIn,
  optimizedScaleIn,
  optimizedSlideIn,
  
  // Stagger
  optimizedStagger,
  optimizedFastStagger,
  
  // Hover
  optimizedHover,
  optimizedCardHover,
  
  // Buttons
  optimizedButton,
  optimizedSecondaryButton,
  
  // Navbar
  optimizedNavbarReveal,
  optimizedNavbarLinkHover,
  
  // Text
  optimizedTextReveal,
  optimizedHeadingReveal,
  
  // Page transitions
  optimizedPageTransition,
  optimizedSlidePageTransition,
  
  // Background
  optimizedFloatingOrb,
  optimizedPulseGlow,
  
  // Scroll
  optimizedScrollReveal,
  
  // Images
  optimizedImageReveal,
  optimizedImageHover,
  
  // Micro
  optimizedIconBounce,
  
  // Helpers
  OptimizedMotion,
  getMobileOptimizedVariants,
  useIsMobile,
  usePerformanceMode,
  reducedMotionVariants
};

export default optimizedVariants;
