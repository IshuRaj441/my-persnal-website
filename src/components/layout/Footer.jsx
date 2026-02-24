import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '../../animations/motionVariants';

const Footer = () => {
  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      className="bg-primaryBg border-t border-textSecondary/20"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <motion.h3 
              className="text-2xl font-bold text-textPrimary mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="text-netflixRed">Ishuraj</span>
              <span className="text-textPrimary">.</span>
            </motion.h3>
            <p className="text-textSecondary max-w-md leading-relaxed">
              Engineering digital products that dominate. Building scalable, high-performance web applications and AI-powered systems.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-textPrimary font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Projects', 'About', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <motion.a
                    href={`#${item.toLowerCase()}`}
                    className="text-textSecondary hover:text-netflixRed transition-colors duration-200"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-textPrimary font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              {['LinkedIn', 'GitHub', 'Twitter'].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  className="text-textSecondary hover:text-netflixRed transition-colors duration-200"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <span className="text-sm font-medium">{social}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-textSecondary/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-textSecondary text-sm">
              © 2024 Ishuraj. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <p className="text-textSecondary text-sm">
                Built with React, TailwindCSS & Framer Motion
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
