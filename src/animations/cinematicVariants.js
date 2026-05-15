// 🎬 PREMIUM CINEMATIC ANIMATION VARIANTS
// Designed for premium SaaS applications like Linear, Stripe, Vercel

// 🎬 PREMIUM CINEMATIC ANIMATION VARIANTS
// Designed for premium SaaS applications like Linear, Stripe, Vercel

// 🔥 ENTRANCE ANIMATIONS
export const cinematicFadeUp = {
  hidden: { 
    opacity: 0, 
    y: 40,
    filter: 'blur(4px)'
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
      staggerChildren: 0.08
    }
  }
};

export const cinematicSlideIn = {
  hidden: { 
    opacity: 0, 
    x: -60,
    filter: 'blur(3px)'
  },
  visible: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

export const cinematicScaleIn = {
  hidden: { 
    opacity: 0, 
    scale: 0.9,
    filter: 'blur(2px)'
  },
  visible: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

// 🌊 STAGGER CONTAINERS
export const cinematicStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

export const cinematicFastStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05
    }
  }
};

// ✨ HOVER ANIMATIONS
export const cinematicHover = {
  rest: { 
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" }
  },
  hover: { 
    scale: 1.05,
    transition: { duration: 0.2, ease: "easeInOut" }
  }
};

export const cinematicCardHover = {
  rest: { 
    y: 0,
    scale: 1,
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    transition: { duration: 0.3, ease: "easeOut" }
  },
  hover: { 
    y: -8,
    scale: 1.02,
    boxShadow: '0 20px 60px rgba(59, 130, 246, 0.3)',
    transition: { duration: 0.2, ease: "easeInOut" }
  }
};

// 🎯 BUTTON ANIMATIONS
export const cinematicButton = {
  rest: { 
    scale: 1,
    boxShadow: '0 4px 15px rgba(59, 130, 246, 0.2)',
    transition: { duration: 0.2, ease: "easeOut" }
  },
  hover: { 
    scale: 1.05,
    boxShadow: '0 8px 30px rgba(59, 130, 246, 0.4)',
    transition: { duration: 0.15, ease: "easeInOut" }
  },
  tap: { 
    scale: 0.98,
    transition: { duration: 0.1, ease: "easeInOut" }
  }
};

export const cinematicSecondaryButton = {
  rest: { 
    scale: 1,
    boxShadow: '0 0 0 1px rgba(255, 30, 30, 0.5)',
    transition: { duration: 0.2, ease: "easeOut" }
  },
  hover: { 
    scale: 1.05,
    boxShadow: '0 0 0 2px rgba(255, 30, 30, 0.8)',
    transition: { duration: 0.15, ease: "easeInOut" }
  },
  tap: { 
    scale: 0.98,
    transition: { duration: 0.1, ease: "easeInOut" }
  }
};

// 📱 NAVBAR ANIMATIONS
export const navbarReveal = {
  hidden: { 
    opacity: 0, 
    y: -20,
    backdropFilter: 'blur(0px)'
  },
  visible: {
    opacity: 1,
    y: 0,
    backdropFilter: 'blur(20px)',
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

export const navbarLinkHover = {
  rest: { 
    scale: 1,
    color: '#94A3B8'
  },
  hover: { 
    scale: 1.05,
    color: '#3B82F6',
    transition: { duration: 0.2, ease: "easeInOut" }
  }
};

// 🌟 TEXT ANIMATIONS
export const cinematicTextReveal = {
  hidden: { 
    opacity: 0, 
    y: 20,
    filter: 'blur(3px)'
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

export const cinematicHeadingReveal = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.98,
    filter: 'blur(4px)'
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

// 🎪 PAGE TRANSITIONS
export const pageTransition = {
  hidden: { 
    opacity: 0, 
    scale: 0.98,
    filter: 'blur(4px)'
  },
  visible: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  },
  exit: {
    opacity: 0,
    scale: 1.02,
    filter: 'blur(4px)',
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

export const slidePageTransition = {
  hidden: { 
    opacity: 0, 
    x: 40,
    filter: 'blur(6px)'
  },
  visible: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  },
  exit: {
    opacity: 0,
    x: -40,
    filter: 'blur(6px)',
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

// 🌈 GLOW EFFECTS
export const neonGlow = {
  rest: {
    boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)',
    transition: { duration: 0.3, ease: "easeOut" }
  },
  hover: {
    boxShadow: '0 0 40px rgba(59, 130, 246, 0.6)',
    transition: { duration: 0.2, ease: "easeInOut" }
  }
};

export const redGlow = {
  rest: {
    boxShadow: '0 0 20px rgba(255, 30, 30, 0.3)',
    transition: { duration: 0.3, ease: "easeOut" }
  },
  hover: {
    boxShadow: '0 0 40px rgba(255, 30, 30, 0.6)',
    transition: { duration: 0.2, ease: "easeInOut" }
  }
};

// 🎭 BACKGROUND ANIMATIONS
export const floatingOrb = {
  initial: { 
    scale: 0,
    opacity: 0
  },
  animate: {
    scale: [1, 1.2, 1],
    opacity: [0.3, 0.6, 0.3],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export const pulseGlow = {
  initial: { 
    opacity: 0.3,
    scale: 1
  },
  animate: {
    opacity: [0.3, 0.8, 0.3],
    scale: [1, 1.1, 1],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// 🎪 SCROLL ANIMATIONS
export const scrollReveal = {
  hidden: { 
    opacity: 0, 
    y: 60,
    filter: 'blur(8px)'
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

export const parallaxSlow = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: "linear"
    }
  }
};

// 🎨 IMAGE ANIMATIONS
export const imageReveal = {
  hidden: { 
    opacity: 0, 
    scale: 1.05,
    filter: 'blur(4px)'
  },
  visible: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

export const imageHover = {
  rest: { 
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" }
  },
  hover: { 
    scale: 1.08,
    transition: { duration: 0.3, ease: "easeInOut" }
  }
};

// 🎯 MICRO INTERACTIONS
export const iconBounce = {
  rest: { 
    scale: 1,
    rotate: 0
  },
  hover: { 
    scale: 1.2,
    rotate: 5,
    transition: { duration: 0.2, ease: "easeInOut" }
  }
};

export const linkUnderline = {
  rest: { 
    width: '0%'
  },
  hover: { 
    width: '100%',
    transition: { duration: 0.3, ease: "easeInOut" }
  }
};

// 🌊 LIQUID ANIMATIONS
export const liquidButton = {
  rest: { 
    borderRadius: '12px',
    scale: 1
  },
  hover: { 
    borderRadius: '20px',
    scale: 1.05,
    transition: { duration: 0.3, ease: "easeInOut" }
  }
};

export const liquidCard = {
  rest: { 
    borderRadius: '16px',
    scale: 1
  },
  hover: { 
    borderRadius: '24px',
    scale: 1.02,
    transition: { duration: 0.4, ease: "easeInOut" }
  }
};

// 🎭 PERFORMANCE OPTIMIZED VARIANTS
export const optimizedFade = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3, ease: "easeOut" }
  }
};

export const optimizedScale = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.2, ease: "easeOut" }
  }
};
