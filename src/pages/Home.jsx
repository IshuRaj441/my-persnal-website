import React, { memo, useRef, useEffect, useState } from 'react';
import { lazy, Suspense } from 'react';
import { OptimizedMotion, optimizedFadeIn } from '../animations/optimizedVariants';

// 🚀 LAZY LOADED COMPONENTS FOR PERFORMANCE
const Hero = lazy(() => import('../components/sections/Hero'));
const ProjectsRow = lazy(() => import('../components/sections/ProjectsRow'));
const Metrics = lazy(() => import('../components/sections/Metrics'));
const Process = lazy(() => import('../components/sections/Process'));
const StrategicSolutions = lazy(() => import('../components/sections/StrategicSolutions'));
const Value = lazy(() => import('../components/sections/Value'));
const CaseStudy = lazy(() => import('../components/sections/CaseStudy'));
const Testimonials = lazy(() => import('../components/sections/Testimonials'));
const CTA = lazy(() => import('../components/sections/CTA'));
const Footer = lazy(() => import('../components/layout/Footer'));

// 🚀 INTERSECTION-BASED LAZY SECTION COMPONENT
const LazySection = memo(({ children, threshold = 0.05 }) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: '50px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div ref={ref}>
      {isInView ? (
        <Suspense fallback={
          <div className="min-h-[200px] bg-bg-primary flex items-center justify-center">
            <OptimizedMotion>
              <motion.div 
                variants={optimizedFadeIn}
                initial="hidden"
                animate="visible"
                className="text-center text-text-secondary"
              >
                Loading section...
              </motion.div>
            </OptimizedMotion>
          </div>
        }>
          {children}
        </Suspense>
      ) : (
        <div className="min-h-[200px] bg-bg-primary" />
      )}
    </div>
  );
});

LazySection.displayName = 'LazySection';

// 🚀 PERFORMANCE-OPTIMIZED HOME PAGE
const Home = memo(() => {
  return (
    <div className="bg-[#0b0b0f] text-white overflow-x-hidden">
      {/* Above the fold - load immediately */}
      <Suspense fallback={
        <div className="min-h-screen bg-bg-primary flex items-center justify-center">
          <OptimizedMotion>
            <motion.div 
              variants={optimizedFadeIn}
              initial="hidden"
              animate="visible"
              className="text-center text-text-secondary"
            >
              Loading hero section...
            </motion.div>
          </OptimizedMotion>
        </div>
      }>
        <Hero />
      </Suspense>

      {/* Below the fold - lazy load with intersection observer */}
      <LazySection>
        <ProjectsRow />
      </LazySection>
      
      <LazySection>
        <Metrics />
      </LazySection>
      
      <LazySection>
        <Process />
      </LazySection>
      
      <LazySection>
        <StrategicSolutions />
      </LazySection>
      
      <LazySection>
        <Value />
      </LazySection>
      
      <LazySection>
        <CaseStudy />
      </LazySection>
      
      <LazySection>
        <Testimonials />
      </LazySection>
      
      <LazySection>
        <CTA />
      </LazySection>
      
      <LazySection>
        <Footer />
      </LazySection>
    </div>
  );
});

Home.displayName = 'Home';

export default Home;
