import {
  cinematicButton,
  cinematicCardHover,
  cinematicTextReveal,
  cinematicFadeUp,
  pageTransition
} from './cinematicVariants';

// 🎬 MOTION PRESETS - REUSABLE ANIMATION CONFIGURATIONS
// Premium motion settings for consistent cinematic experience

// 🎯 SPRING CONFIGURATIONS
export const springPresets = {
  // Smooth, bouncy spring for UI elements
  smooth: {
    type: "spring",
    stiffness: 100,
    damping: 20,
    mass: 1
  },
  
  // Quick, responsive spring for buttons
  snappy: {
    type: "spring",
    stiffness: 400,
    damping: 30,
    mass: 0.8
  },
  
  // Gentle spring for background elements
  gentle: {
    type: "spring",
    stiffness: 50,
    damping: 15,
    mass: 2
  },
  
  // Elastic spring for playful elements
  elastic: {
    type: "spring",
    stiffness: 200,
    damping: 10,
    mass: 1
  }
};

// 🌊 EASING FUNCTIONS
export const easingPresets = {
  // Premium SaaS easing
  cinematic: [0.25, 0.46, 0.45, 0.94],
  
  // Smooth entrance
  smoothEntrance: [0.23, 1, 0.32, 1],
  
  // Quick exit
  quickExit: [0.87, 0, 0.13, 1],
  
  // Bouncy entrance
  bouncy: [0.68, -0.55, 0.265, 1.55],
  
  // Linear for backgrounds
  linear: [0, 0, 1, 1],
  
  // Custom premium easing
  premium: [0.19, 1, 0.22, 1]
};

// ⏱️ DURATION PRESETS
export const durationPresets = {
  // Fast micro-interactions
  instant: 0.15,
  quick: 0.2,
  
  // Standard UI animations
  fast: 0.3,
  normal: 0.4,
  
  // Content reveal animations
  slow: 0.6,
  slower: 0.8,
  
  // Cinematic entrances
  cinematic: 1.0,
  dramatic: 1.2,
  
  // Background animations
  background: 2.0,
  ambient: 3.0
};

// 🎭 TRANSITION COMBINATIONS
export const transitionPresets = {
  // Button interactions
  button: {
    type: "spring",
    stiffness: 400,
    damping: 30,
    mass: 0.8
  },
  
  // Card hover effects
  cardHover: {
    type: "spring",
    stiffness: 300,
    damping: 25,
    mass: 1
  },
  
  // Page transitions
  pageTransition: {
    type: "tween",
    duration: 0.6,
    ease: easingPresets.cinematic
  },
  
  // Text reveal
  textReveal: {
    type: "tween",
    duration: 0.8,
    ease: easingPresets.smoothEntrance
  },
  
  // Image reveal
  imageReveal: {
    type: "tween",
    duration: 1.0,
    ease: easingPresets.cinematic
  },
  
  // Navbar animations
  navbar: {
    type: "tween",
    duration: 0.4,
    ease: easingPresets.smoothEntrance
  },
  
  // Background elements
  background: {
    type: "tween",
    duration: 2.0,
    ease: easingPresets.linear
  },
  
  // Scroll animations
  scroll: {
    type: "tween",
    duration: 0.6,
    ease: easingPresets.smoothEntrance
  },
  
  // Micro-interactions
  micro: {
    type: "spring",
    stiffness: 500,
    damping: 35,
    mass: 0.6
  }
};

// 🎪 STAGGER PRESETS
export const staggerPresets = {
  // Fast stagger for lists
  fast: 0.05,
  
  // Normal stagger for cards
  normal: 0.1,
  
  // Slow stagger for sections
  slow: 0.15,
  
  // Very slow for dramatic reveals
  dramatic: 0.2,
  
  // Quick stagger for navigation
  navigation: 0.08,
  
  // Medium stagger for content blocks
  content: 0.12,
  
  // Slow stagger for hero sections
  hero: 0.2
};

// 🌟 DELAY PRESETS
export const delayPresets = {
  // No delay
  instant: 0,
  
  // Quick delays
  quick: 0.1,
  short: 0.2,
  
  // Standard delays
  normal: 0.3,
  medium: 0.4,
  
  // Long delays
  long: 0.6,
  dramatic: 0.8,
  
  // Sequential delays
  step1: 0.2,
  step2: 0.4,
  step3: 0.6,
  step4: 0.8,
  step5: 1.0
};

// 🎯 VIEWPORT CONFIGURATIONS
export const viewportPresets = {
  // Once animations (default)
  once: {
    once: true,
    amount: 0.3
  },
  
  // Repeat animations
  repeat: {
    once: false,
    amount: 0.3
  },
  
  // Early trigger
  early: {
    once: true,
    amount: 0.5
  },
  
  // Late trigger
  late: {
    once: true,
    amount: 0.1
  },
  
  // Full visibility
  full: {
    once: true,
    amount: 0.8
  },
  
  // Mobile optimized
  mobile: {
    once: true,
    amount: 0.2
  }
};

// 🎪 PERFORMANCE CONFIGURATIONS
export const performancePresets = {
  // GPU accelerated transforms only
  optimized: {
    opacity: 1,
    scale: 1,
    x: 0,
    y: 0,
    transition: {
      type: "tween",
      duration: 0.3,
      ease: "easeOut"
    }
  },
  
  // Minimal animations for mobile
  minimal: {
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: "easeOut"
    }
  },
  
  // Full animations for desktop
  full: {
    opacity: 1,
    scale: 1,
    x: 0,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "tween",
      duration: 0.6,
      ease: easingPresets.cinematic
    }
  }
};

// 🎨 CURSOR INTERACTIONS
export const cursorPresets = {
  // Magnetic effect
  magnetic: {
    type: "spring",
    stiffness: 150,
    damping: 25,
    mass: 1
  },
  
  // Follow cursor
  follow: {
    type: "spring",
    stiffness: 100,
    damping: 20,
    mass: 1.5
  },
  
  // Parallax effect
  parallax: {
    type: "spring",
    stiffness: 50,
    damping: 15,
    mass: 2
  }
};

// 🌊 RESPONSIVE CONFIGURATIONS
export const responsivePresets = {
  // Mobile optimized
  mobile: {
    duration: 0.3,
    ease: easingPresets.smoothEntrance,
    stagger: 0.05
  },
  
  // Tablet optimized
  tablet: {
    duration: 0.4,
    ease: easingPresets.cinematic,
    stagger: 0.08
  },
  
  // Desktop full experience
  desktop: {
    duration: 0.6,
    ease: easingPresets.cinematic,
    stagger: 0.12
  }
};

// 🎭 UTILITY FUNCTIONS
export const createTransition = (preset, custom = {}) => {
  return {
    ...transitionPresets[preset],
    ...custom
  };
};

export const createViewport = (preset, custom = {}) => {
  return {
    ...viewportPresets[preset],
    ...custom
  };
};

export const createStagger = (delay, children = {}) => {
  return {
    transition: {
      staggerChildren: delay,
      ...children
    }
  };
};

// 🎯 PRESET COMBINATIONS
export const presetCombinations = {
  // Premium button
  premiumButton: {
    variants: cinematicButton,
    transition: transitionPresets.button,
    viewport: viewportPresets.once
  },
  
  // Cinematic card
  cinematicCard: {
    variants: cinematicCardHover,
    transition: transitionPresets.cardHover,
    viewport: viewportPresets.once
  },
  
  // Smooth text reveal
  textReveal: {
    variants: cinematicTextReveal,
    transition: transitionPresets.textReveal,
    viewport: viewportPresets.early
  },
  
  // Hero entrance
  heroEntrance: {
    variants: cinematicFadeUp,
    transition: transitionPresets.cinematic,
    viewport: viewportPresets.once
  },
  
  // Page transition
  pageTransition: {
    variants: pageTransition,
    transition: transitionPresets.pageTransition
  }
};
