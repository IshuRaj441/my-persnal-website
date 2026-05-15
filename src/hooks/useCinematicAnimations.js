import { useState, useEffect, useRef } from 'react';
import { useAnimation, useInView, useScroll, useTransform } from 'framer-motion';
import { viewportPresets } from '../animations/motionPresets';

// 🎬 CINEMATIC ANIMATION HOOKS
// Premium animation utilities for consistent motion design

// 🎯 SCROLL-TRIGGERED ANIMATIONS
export const useScrollAnimation = (variants, options = {}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    ...viewportPresets.once,
    ...options.viewport
  });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else if (!options.viewport?.once) {
      controls.start('hidden');
    }
  }, [isInView, controls, options.viewport?.once]);

  return { ref, controls, isInView };
};

// 🌊 PARALLAX EFFECTS
export const useParallax = (speed = 0.5) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return { ref, y, opacity };
};

// 🎭 STAGGERED ANIMATIONS
export const useStaggeredAnimation = (itemCount, stagger = 0.1) => {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, viewportPresets.early);

  useEffect(() => {
    if (isInView) {
      const items = new Set();
      const interval = setInterval(() => {
        const nextIndex = items.size;
        if (nextIndex < itemCount) {
          items.add(nextIndex);
          setVisibleItems(new Set(items));
        } else {
          clearInterval(interval);
        }
      }, stagger * 1000);
      
      return () => clearInterval(interval);
    }
  }, [isInView, itemCount, stagger]);

  return { containerRef, visibleItems, isInView };
};

// 🧬 MAGNETIC CURSOR EFFECT
export const useMagneticCursor = (strength = 0.3) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const deltaX = (e.clientX - centerX) * strength;
      const deltaY = (e.clientY - centerY) * strength;
      
      setPosition({ x: deltaX, y: deltaY });
    };

    const handleMouseLeave = () => {
      setPosition({ x: 0, y: 0 });
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [strength]);

  return { ref, position };
};

// 🎪 LOADING STATES
export const useLoadingAnimation = (duration = 1000) => {
  const [isLoading, setIsLoading] = useState(true);
  const controls = useAnimation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      controls.start('visible');
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, controls]);

  return { isLoading, controls };
};

// 🌟 HOVER STATES
export const useHoverAnimation = (hoverVariant = 'hover') => {
  const [isHovered, setIsHovered] = useState(false);

  const hoverProps = {
    onHoverStart: () => setIsHovered(true),
    onHoverEnd: () => setIsHovered(false),
    animate: isHovered ? hoverVariant : 'rest'
  };

  return { isHovered, hoverProps };
};

// 📱 RESPONSIVE ANIMATIONS
export const useResponsiveAnimation = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  const getAnimationConfig = (mobileConfig, tabletConfig, desktopConfig) => {
    if (isMobile) return mobileConfig;
    if (isTablet) return tabletConfig;
    return desktopConfig;
  };

  return { isMobile, isTablet, getAnimationConfig };
};

// 🎯 INTERSECTION OBSERVER
export const useIntersectionObserver = (threshold = 0.1) => {
  const [entries, setEntries] = useState([]);
  const observer = useRef();

  const observe = (element) => {
    if (!observer.current) {
      observer.current = new IntersectionObserver(
        (entries) => setEntries(entries),
        { threshold }
      );
    }
    observer.current.observe(element);
  };

  const unobserve = (element) => {
    if (observer.current) {
      observer.current.unobserve(element);
    }
  };

  useEffect(() => {
    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  return { entries, observe, unobserve };
};

// 🌊 SCROLL PROGRESS
export const useScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  
  const progress = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);
  
  return { progress, scaleY, scrollYProgress };
};

// 🎭 REDUCED MOTION
export const useReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return prefersReducedMotion;
};

// 🎪 PERFORMANCE MONITORING
export const usePerformanceMonitor = () => {
  const [fps, setFps] = useState(60);
  const frameCount = useRef(0);
  const lastTime = useRef(performance.now());

  useEffect(() => {
    let animationId;
    
    const measureFPS = () => {
      frameCount.current++;
      const currentTime = performance.now();
      
      if (currentTime >= lastTime.current + 1000) {
        setFps(Math.round((frameCount.current * 1000) / (currentTime - lastTime.current)));
        frameCount.current = 0;
        lastTime.current = currentTime;
      }
      
      animationId = requestAnimationFrame(measureFPS);
    };
    
    animationId = requestAnimationFrame(measureFPS);
    
    return () => cancelAnimationFrame(animationId);
  }, []);

  const shouldReduceAnimations = fps < 30;
  
  return { fps, shouldReduceAnimations };
};

// 🌟 CURSOR POSITION
export const useCursorPosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return position;
};

// 🎯 DEVICE ORIENTATION
export const useDeviceOrientation = () => {
  const [orientation, setOrientation] = useState({ alpha: 0, beta: 0, gamma: 0 });

  useEffect(() => {
    const handleOrientation = (e) => {
      setOrientation({
        alpha: e.alpha || 0,
        beta: e.beta || 0,
        gamma: e.gamma || 0
      });
    };

    window.addEventListener('deviceorientation', handleOrientation);
    return () => window.removeEventListener('deviceorientation', handleOrientation);
  }, []);

  return orientation;
};

// 🎪 COMBINED HOOKS
export const useCinematicElement = (variants, options = {}) => {
  const { ref, controls, isInView } = useScrollAnimation(variants, options);
  const { isHovered, hoverProps } = useHoverAnimation();
  const { isMobile, getAnimationConfig } = useResponsiveAnimation();
  const prefersReducedMotion = useReducedMotion();
  const { shouldReduceAnimations } = usePerformanceMonitor();

  const shouldAnimate = !prefersReducedMotion && !shouldReduceAnimations;
  const responsiveConfig = getAnimationConfig(
    options.mobile || {},
    options.tablet || {},
    options.desktop || {}
  );

  return {
    ref,
    controls,
    isInView,
    isHovered,
    isMobile,
    shouldAnimate,
    hoverProps,
    responsiveConfig
  };
};
