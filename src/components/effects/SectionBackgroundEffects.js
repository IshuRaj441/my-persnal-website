import React, { useEffect, useRef, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { floatingOrb, pulseGlow } from '../../animations/cinematicVariants';
import { usePerformanceMonitor, useReducedMotion } from '../../hooks/useCinematicAnimations';

// 🌌 SECTION-SPECIFIC CINEMATIC BACKGROUND EFFECTS
// Premium ambient animations for sections (not global/viewport-fixed)

const SectionBackgroundEffects = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [containerRect, setContainerRect] = useState({ width: 0, height: 0 });
  const animationRef = useRef();
  const { shouldReduceAnimations } = usePerformanceMonitor();
  const prefersReducedMotion = useReducedMotion();
  
  const shouldOptimize = shouldReduceAnimations || prefersReducedMotion;

  // Track container dimensions
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setContainerRect({ width: rect.width, height: rect.height });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Optimized animated gradient orbs
  const orbs = useMemo(() => {
    const baseOrbs = [
      { id: 1, size: 400, color: 'rgba(59, 130, 246, 0.15)', delay: 0, top: '20%', left: '20%' },
      { id: 2, size: 300, color: 'rgba(139, 92, 246, 0.12)', delay: 2, top: '60%', left: '70%' },
      { id: 3, size: 350, color: 'rgba(255, 30, 30, 0.08)', delay: 4, top: '40%', left: '50%' }
    ];
    return shouldOptimize ? baseOrbs.slice(0, 2) : baseOrbs;
  }, [shouldOptimize]);

  // Optimized particle system (section-scoped)
  useEffect(() => {
    if (shouldOptimize || !containerRef.current) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const particles = [];
    const particleCount = shouldOptimize ? 15 : 30;

    // Set canvas size to container dimensions
    const resizeCanvas = () => {
      if (containerRef.current) {
        canvas.width = containerRef.current.offsetWidth;
        canvas.height = containerRef.current.offsetHeight;
      }
    };
    resizeCanvas();

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2
      });
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59, 130, 246, ${particle.opacity})`;
        ctx.fill();
      });
      
      // Draw connections only for nearby particles (optimized)
      if (!shouldOptimize) {
        particles.forEach((p1, i) => {
          particles.slice(i + 1).forEach(p2 => {
            const distance = Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
            if (distance < 100) {
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.strokeStyle = `rgba(59, 130, 246, ${0.05 * (1 - distance / 100)})`;
              ctx.lineWidth = 0.3;
              ctx.stroke();
            }
          });
        });
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [shouldOptimize, containerRect]);

  // Mouse follow gradient (section-scoped)
  useEffect(() => {
    if (!containerRef.current) return;
    
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePos({ 
          x: e.clientX - rect.left, 
          y: e.clientY - rect.top 
        });
      }
    };
    
    const container = containerRef.current;
    container.addEventListener('mousemove', handleMouseMove);
    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/50 to-slate-950" />
      
      {/* Animated gradient orbs */}
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className="absolute rounded-full blur-3xl"
          style={{
            width: `${orb.size}px`,
            height: `${orb.size}px`,
            background: orb.color,
            top: orb.top,
            left: orb.left,
          }}
          variants={floatingOrb}
          initial="initial"
          animate="animate"
          transition={{
            delay: orb.delay,
            duration: 8 + orb.id,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      ))}

      {/* Mouse-following spotlight - only on non-optimized mode */}
      {!shouldOptimize && (
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl"
          style={{
            left: mousePos.x - 192,
            top: mousePos.y - 192,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      )}

      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{ mixBlendMode: 'screen' }}
      />

      {/* Animated grid overlay - only on non-optimized mode */}
      {!shouldOptimize && (
        <svg
          className="absolute inset-0 w-full h-full"
          style={{ mixBlendMode: 'overlay' }}
        >
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="rgba(59, 130, 246, 0.1)"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      )}

      {/* Subtle noise texture */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E")`,
          mixBlendMode: 'overlay'
        }}
      />

      {/* Radial gradient vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, rgba(5, 8, 22, 0.4) 100%)'
        }}
      />

      {/* Pulsing glow effects - reduced for performance */}
      {!shouldOptimize && (
        <>
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
            variants={pulseGlow}
            initial="initial"
            animate="animate"
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
            variants={pulseGlow}
            initial="initial"
            animate="animate"
            transition={{ delay: 1.5 }}
          />
        </>
      )}
    </div>
  );
};

export default SectionBackgroundEffects;
