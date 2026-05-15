import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// 🚀 LAZY LOADING SECTION COMPONENT
// Loads content only when it's about to enter viewport

const LazySection = React.forwardRef(({ 
  children, 
  className = "", 
  threshold = 0.1,
  rootMargin = "200px",
  fallback = null,
  ...props 
}, ref) => {
  const [hasLoaded, setHasLoaded] = useState(false);
  const internalRef = useRef();

  // Use external ref if provided, otherwise use internal ref
  const sectionRef = ref || internalRef;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasLoaded) {
          setHasLoaded(true);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin, hasLoaded, sectionRef]);

  // Fallback component
  const LazyFallback = fallback || (() => (
    <div className="animate-pulse">
      <div className="h-32 bg-surface/50 rounded-2xl"></div>
    </div>
  ));

  return (
    <section ref={sectionRef} className={`py-28 ${className}`} {...props}>
      {hasLoaded ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {children}
        </motion.div>
      ) : (
        <LazyFallback />
      )}
    </section>
  );
});

LazySection.displayName = 'LazySection';

export default LazySection;
