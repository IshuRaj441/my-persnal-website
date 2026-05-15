import React, { memo, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  optimizedTextReveal,
  optimizedHeadingReveal,
  useIsMobile,
  usePerformanceMode
} from '../../animations/optimizedVariants';

// 🚀 PERFORMANCE-OPTIMIZED TEXT COMPONENTS
// Minimal luxury text animations with mobile responsiveness

const OptimizedText = memo(({ 
  children, 
  className = '',
  animate = true,
  delay = 0,
  ...props 
}) => {
  const isMobile = useIsMobile();
  const reduceMotion = usePerformanceMode();
  
  // Disable animations on mobile or with reduced motion preference
  const shouldAnimate = animate && !isMobile && !reduceMotion;
  
  const variants = shouldAnimate ? optimizedTextReveal : {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  return (
    <motion.span
      className={className}
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{ delay }}
      {...props}
    >
      {children}
    </motion.span>
  );
});

OptimizedText.displayName = 'OptimizedText';

// Animated Heading Component
export const AnimatedHeading = memo(({ 
  text, 
  className = '',
  tag = 'h1',
  stagger = 0,
  delay = 0,
  ...props 
}) => {
  const isMobile = useIsMobile();
  const reduceMotion = usePerformanceMode();
  
  // Memoize words array to prevent recalculation
  const words = useMemo(() => {
    // Only split into words for short headings (< 10 words) to reduce DOM elements
    const wordCount = text.split(' ').length;
    if (wordCount > 10) return [];
    return text.split(' ');
  }, [text]);
  
  const shouldAnimate = !isMobile && !reduceMotion && stagger > 0 && words.length > 0;
  
  const variants = shouldAnimate ? optimizedHeadingReveal : {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const MotionTag = motion[tag];

  if (shouldAnimate && stagger > 0) {
    return (
      <MotionTag 
        className={className}
        initial="hidden"
        animate="visible"
        transition={{ delay, staggerChildren: stagger }}
        variants={{
          hidden: {},
          visible: {}
        }}
        {...props}
      >
        {words.map((word, index) => (
          <motion.span
            key={`${word}-${index}`}
            variants={variants}
            style={{ display: 'inline-block', marginRight: '0.25em' }}
          >
            {word}
          </motion.span>
        ))}
      </MotionTag>
    );
  }

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{ delay }}
      {...props}
    >
      {text}
    </MotionTag>
  );
});

AnimatedHeading.displayName = 'AnimatedHeading';

// Animated Text Component (for paragraphs)
export const AnimatedText = memo(({ 
  text, 
  className = '',
  stagger = 0,
  delay = 0,
  ...props 
}) => {
  const isMobile = useIsMobile();
  const reduceMotion = usePerformanceMode();
  
  // Memoize characters array for performance
  const chars = useMemo(() => {
    if (!stagger || isMobile || reduceMotion) return [];
    // Only split into characters for short text (< 50 chars) to reduce DOM elements
    if (text.length > 50) return [];
    return text.split('');
  }, [text, stagger, isMobile, reduceMotion]);
  
  const shouldAnimate = !isMobile && !reduceMotion && stagger > 0 && chars.length > 0;
  
  const variants = shouldAnimate ? optimizedTextReveal : {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  if (shouldAnimate && chars.length > 0) {
    return (
      <motion.span
        className={className}
        initial="hidden"
        animate="visible"
        transition={{ delay, staggerChildren: stagger }}
        variants={{
          hidden: {},
          visible: {}
        }}
        {...props}
      >
        {chars.map((char, index) => (
          <motion.span
            key={`${char}-${index}`}
            variants={variants}
            style={{ display: 'inline-block' }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </motion.span>
    );
  }

  return (
    <motion.span
      className={className}
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{ delay }}
      {...props}
    >
      {text}
    </motion.span>
  );
});

AnimatedText.displayName = 'AnimatedText';

// Gradient Text Component - optimized
export const GradientText = memo(({ 
  text, 
  colors = ['#3B82F6', '#1D4ED8'],
  className = '',
  animate = true,
  ...props 
}) => {
  const isMobile = useIsMobile();
  const reduceMotion = usePerformanceMode();
  
  // Disable animation on mobile or with reduced motion
  const shouldAnimate = animate && !isMobile && !reduceMotion;
  
  const gradientStyle = useMemo(() => {
    const gradient = `linear-gradient(135deg, ${colors.join(', ')})`;
    return {
      background: gradient,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    };
  }, [colors]);

  const MotionComponent = shouldAnimate ? motion.div : 'div';

  const motionProps = shouldAnimate ? {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  } : {};

  return (
    <MotionComponent
      className={className}
      style={gradientStyle}
      {...motionProps}
      {...props}
    >
      {text}
    </MotionComponent>
  );
});

GradientText.displayName = 'GradientText';

// Typewriter Effect Component - optimized
export const TypewriterText = memo(({ 
  text, 
  className = '',
  speed = 50,
  delay = 0,
  cursor = true,
  ...props 
}) => {
  const [displayText, setDisplayText] = React.useState('');
  const [isComplete, setIsComplete] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayText(text.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          setIsComplete(true);
          clearInterval(interval);
        }
      }, speed);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [text, speed, delay]);

  return (
    <span className={className} {...props}>
      {displayText}
      {cursor && !isComplete && (
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="ml-1"
        >
          |
        </motion.span>
      )}
    </span>
  );
});

TypewriterText.displayName = 'TypewriterText';

// Counter Animation Component - optimized
export const AnimatedCounter = memo(({ 
  from = 0,
  to,
  duration = 2,
  className = '',
  prefix = '',
  suffix = '',
  ...props 
}) => {
  const [count, setCount] = React.useState(from);
  const isMobile = useIsMobile();
  const reduceMotion = usePerformanceMode();

  React.useEffect(() => {
    // Skip animation on mobile or with reduced motion
    if (isMobile || reduceMotion) {
      setCount(to);
      return;
    }

    const startTime = Date.now();
    const endTime = startTime + duration * 1000;

    const updateCount = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / (endTime - startTime), 1);
      
      // Easing function
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(from + (to - from) * easeOutQuart);
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      }
    };

    requestAnimationFrame(updateCount);
  }, [from, to, duration, isMobile, reduceMotion]);

  return (
    <span className={className} {...props}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
});

AnimatedCounter.displayName = 'AnimatedCounter';

export default OptimizedText;
