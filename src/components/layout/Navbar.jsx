import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Container from './Container';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-primary/90 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <h1 className="text-2xl font-bold text-text-primary">
              <span className="text-netflixRed">Ishuraj</span>
              <span className="text-text-primary">.</span>
            </h1>
          </motion.div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {[
                { path: '/', label: 'Home' },
                { path: '/projects', label: 'Projects' },
                { path: '/services', label: 'Services' },
                { path: '/contact', label: 'Contact' }
              ].map((item) => (
                <motion.div
                  key={item.path}
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link
                    to={item.path}
                    className={`text-text-secondary hover:text-text-primary px-3 py-2 text-sm font-medium transition-colors duration-200 relative group ${
                      location.pathname === item.path ? 'text-text-primary' : ''
                    }`}
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-netflixRed transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <motion.button
            className="bg-netflixRed text-text-primary px-6 py-2 rounded-md text-sm font-medium hover:bg-red-600 transition-all duration-300 shadow-lg hover:shadow-glow-red"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            onClick={() => navigate('/contact')}
          >
            Get In Touch
          </motion.button>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-text-secondary hover:text-text-primary p-2">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </Container>
    </motion.nav>
  );
};

export default Navbar;
