import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  navbarReveal, 
  navbarLinkHover, 
  cinematicButton, 
  cinematicFadeUp 
} from '../animations/cinematicVariants';
import { useScrollProgress, useMagneticCursor } from '../hooks/useCinematicAnimations';

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { progress } = useScrollProgress();
  const { ref: logoRef, position: logoPosition } = useMagneticCursor(0.2);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' },
    { path: '/services', label: 'Services' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' }
  ];

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      className={`navbar glass-navbar fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'scrolled' : ''
      }`}
      variants={navbarReveal}
      initial="hidden"
      animate="visible"
      style={{
        backdropFilter: scrolled ? 'blur(20px)' : 'blur(0px)',
        backgroundColor: scrolled ? 'rgba(11, 18, 32, 0.8)' : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(59, 130, 246, 0.2)' : 'none'
      }}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo with magnetic effect */}
          <motion.div 
            ref={logoRef}
            className="nav-brand"
            animate={{ x: logoPosition.x, y: logoPosition.y }}
            transition={{ type: "spring", stiffness: 150, damping: 25 }}
          >
            <Link to="/" className="logo group">
              <motion.span 
                className="logo-text text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                Ishuraj
              </motion.span>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-20 blur-xl rounded-full"
                initial={false}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div 
            className="hidden md:flex items-center space-x-8"
            variants={cinematicFadeUp}
            initial="hidden"
            animate="visible"
          >
            {navLinks.map((link, index) => (
              <motion.div
                key={link.path}
                variants={navbarLinkHover}
                initial="rest"
                whileHover="hover"
                className="relative"
              >
                <Link
                  to={link.path}
                  className={`nav-link relative px-2 py-1 text-sm font-medium transition-colors ${
                    location.pathname === link.path 
                      ? 'text-blue-400' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.label}
                  {/* Active indicator */}
                  {location.pathname === link.path && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600"
                      layoutId="activeNavIndicator"
                      initial={{ opacity: 0, scaleX: 0 }}
                      animate={{ opacity: 1, scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  {/* Hover underline */}
                  {location.pathname !== link.path && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 origin-left"
                      variants={{ rest: { scaleX: 0 }, hover: { scaleX: 1 } }}
                    />
                  )}
                </Link>
                {/* Glow effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-blue-400 opacity-0 blur-md rounded-lg -z-10"
                  variants={{ rest: { opacity: 0 }, hover: { opacity: 0.2 } }}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div className="hidden md:block">
            <motion.button
              variants={cinematicButton}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              className="px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full font-medium shadow-lg"
              onClick={() => window.location.href = '/contact'}
            >
              Get Started
            </motion.button>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button 
            className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
            variants={cinematicButton}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
          >
            <motion.span 
              className={`hamburger-line block w-6 h-0.5 bg-current transition-all duration-300 ${
                mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}
              animate={{ backgroundColor: mobileMenuOpen ? '#3B82F6' : '#FFFFFF' }}
            />
            <motion.span 
              className={`hamburger-line block w-6 h-0.5 bg-current transition-all duration-300 my-1 ${
                mobileMenuOpen ? 'opacity-0' : ''
              }`}
              animate={{ 
                opacity: mobileMenuOpen ? 0 : 1,
                backgroundColor: mobileMenuOpen ? '#3B82F6' : '#FFFFFF'
              }}
            />
            <motion.span 
              className={`hamburger-line block w-6 h-0.5 bg-current transition-all duration-300 ${
                mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}
              animate={{ backgroundColor: mobileMenuOpen ? '#3B82F6' : '#FFFFFF' }}
            />
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="md:hidden absolute top-16 left-0 right-0 glass-card rounded-b-2xl overflow-hidden"
              variants={{
                hidden: { opacity: 0, y: -20, height: 0 },
                visible: { opacity: 1, y: 0, height: 'auto' },
                exit: { opacity: 0, y: -20, height: 0 }
              }}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3 }}
              style={{
                backdropFilter: 'blur(20px)',
                backgroundColor: 'rgba(11, 18, 32, 0.9)',
                borderTop: '1px solid rgba(59, 130, 246, 0.2)'
              }}
            >
              <div className="p-6 space-y-4">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    variants={navbarLinkHover}
                    initial="rest"
                    whileHover="hover"
                    custom={index}
                  >
                    <Link
                      to={link.path}
                      className={`block px-4 py-3 rounded-lg text-lg font-medium transition-colors ${
                        location.pathname === link.path 
                          ? 'text-blue-400 bg-blue-400/10' 
                          : 'text-gray-300 hover:text-white hover:bg-white/5'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div className="pt-4 border-t border-gray-700">
                  <motion.button
                    variants={cinematicButton}
                    initial="rest"
                    whileHover="hover"
                    whileTap="tap"
                    className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full font-medium"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      window.location.href = '/contact';
                    }}
                  >
                    Get Started
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Scroll Progress Indicator */}
      <motion.div 
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 origin-left"
        style={{ scaleX: progress / 100 }}
        initial={{ scaleX: 0 }}
      />
    </motion.nav>
  );
};

export default Navigation;
