import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import PageTransition from "./components/layout/PageTransition";
import Navigation from "./components/Navigation";
import { OptimizedMotion } from "./animations/optimizedVariants";
import { initPerformanceMonitoring } from './utils/performance';

// Initialize performance monitoring
initPerformanceMonitoring();

// 🚀 LAZY LOADED PAGES FOR PERFORMANCE
const Home = lazy(() => import('./pages/Home'));
const Contact = lazy(() => import('./pages/Contact'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const About = lazy(() => import('./pages/About'));
const Blog = lazy(() => import('./pages/Blog'));
const Services = lazy(() => import('./pages/Services'));
const Projects = lazy(() => import('./pages/Projects'));
const UBAProjectPage = lazy(() => import('./pages/UBAProjectPage'));
const FreelancingBlogPage = lazy(() => import('./pages/blog/FreelancingBlogPage'));
const RemoteWorkBlogPage = lazy(() => import('./pages/blog/RemoteWorkBlogPage'));

// 🚀 PERFORMANCE-OPTIMIZED APP WITH LAZY LOADING
function AppContent() {
  const location = useLocation();
  
  return (
    <>
      <Navigation />
      <PageTransition location={location} transitionType="fade">
        <Suspense fallback={
          <OptimizedMotion>
            <motion.div 
              className="min-h-screen bg-bg-primary flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-center">
                <motion.div
                  className="w-12 h-12 border-4 border-primary-red border-t-transparent rounded-full mx-auto mb-4"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
                <p className="text-text-secondary">Loading...</p>
              </div>
            </motion.div>
          </OptimizedMotion>
        }>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/universal-business-automation" element={<UBAProjectPage />} />
            <Route path="/blog/from-code-to-client" element={<FreelancingBlogPage />} />
            <Route path="/blog/future-of-remote-work-2024" element={<RemoteWorkBlogPage />} />
          </Routes>
        </Suspense>
      </PageTransition>
    </>
  );
}

function App() {
  return (
    <Router
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <AppContent />
    </Router>
  );
}

export default App;
