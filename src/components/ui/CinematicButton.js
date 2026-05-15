import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  cinematicButton,
  cinematicSecondaryButton,
  liquidButton
} from '../../animations/cinematicVariants';
import { useMagneticCursor } from '../../hooks/useCinematicAnimations';

// 🎬 CINEMATIC BUTTON COMPONENTS
// Premium button animations with magnetic effects

const CinematicButton = ({ 
  children, 
  variant = 'primary',
  size = 'md',
  glowColor = 'blue',
  magnetic = true,
  liquid = false,
  className = '',
  disabled = false,
  loading = false,
  icon,
  iconPosition = 'right',
  ...props 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const { ref: magneticRef, position: magneticPosition } = useMagneticCursor(magnetic ? 0.3 : 0);

  const getButtonVariants = () => {
    if (liquid) return liquidButton;
    if (variant === 'secondary') return cinematicSecondaryButton;
    return cinematicButton;
  };

  const getButtonStyles = () => {
    const baseStyles = "relative overflow-hidden font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-950 rounded-xl backdrop-blur-sm";
    
    const sizeStyles = {
      sm: 'px-5 py-2.5 text-sm',
      md: 'px-7 py-3.5 text-base',
      lg: 'px-9 py-4.5 text-lg',
      xl: 'px-11 py-5.5 text-xl'
    };

    const variantStyles = {
      primary: 'bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 text-white shadow-xl shadow-blue-500/25 hover:shadow-2xl hover:shadow-blue-500/40 border border-blue-400/20',
      secondary: 'bg-gradient-to-r from-red-600 via-red-500 to-red-600 text-white shadow-xl shadow-red-500/25 hover:shadow-2xl hover:shadow-red-500/40 border border-red-400/20',
      outline: 'bg-gradient-to-r from-transparent via-blue-500/10 to-transparent text-blue-400 border-2 border-blue-400/50 hover:border-blue-400 hover:bg-blue-500/20 hover:text-blue-300 shadow-lg shadow-blue-500/10',
      ghost: 'text-blue-400 hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-blue-600/10 hover:text-blue-300 backdrop-blur-sm',
      link: 'text-blue-400 hover:text-blue-300 underline-offset-4 hover:underline decoration-2 decoration-blue-400/50 hover:decoration-blue-300'
    };

    const glowStyles = {
      blue: 'hover:shadow-blue-500/30',
      red: 'hover:shadow-red-500/30',
      purple: 'hover:shadow-purple-500/30',
      green: 'hover:shadow-green-500/30'
    };

    return `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${glowStyles[glowColor]} ${className}`;
  };

  const getGlowEffect = () => {
    if (variant === 'ghost' || variant === 'link') return null;
    
    const glowColors = {
      blue: 'rgba(59, 130, 246, 0.4)',
      red: 'rgba(255, 30, 30, 0.4)',
      purple: 'rgba(139, 92, 246, 0.4)',
      green: 'rgba(34, 197, 94, 0.4)'
    };

    return glowColors[glowColor];
  };

  return (
    <motion.button
      ref={magneticRef}
      className={getButtonStyles()}
      variants={getButtonVariants()}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      animate={magnetic ? { x: magneticPosition.x, y: magneticPosition.y } : {}}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      disabled={disabled || loading}
      {...props}
    >
      {/* Button content */}
      <span className="relative z-10 flex items-center justify-center">
        {icon && iconPosition === 'left' && (
          <span className="mr-2">{icon}</span>
        )}
        {loading ? (
          <motion.div
            className="w-5 h-5 border-2 border-current border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        ) : (
          children
        )}
        {icon && iconPosition === 'right' && (
          <span className="ml-2">{icon}</span>
        )}
      </span>

      {/* Animated gradient overlay */}
      {variant !== 'ghost' && variant !== 'link' && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0"
          animate={{
            opacity: isHovered ? 1 : 0,
            x: isHovered ? ['-100%', '100%'] : ['-100%', '-100%']
          }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        />
      )}

      {/* Glow effect */}
      {getGlowEffect() && (
        <motion.div
          className="absolute inset-0 rounded-xl blur-xl -z-10"
          style={{ backgroundColor: getGlowEffect() }}
          animate={{
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1.3 : 1
          }}
          transition={{ duration: 0.4 }}
        />
      )}

      {/* Ripple effect on click */}
      <motion.div
        className="absolute inset-0 rounded-xl"
        initial={{ scale: 0, opacity: 0 }}
        whileTap={{
          scale: 1,
          opacity: 0.4,
          transition: { duration: 0.15 }
        }}
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.6)'
        }}
      />
    </motion.button>
  );
};

// Specialized button variants

export const PrimaryButton = (props) => (
  <CinematicButton variant="primary" glowColor="blue" {...props} />
);

export const SecondaryButton = (props) => (
  <CinematicButton variant="secondary" glowColor="red" {...props} />
);

export const OutlineButton = (props) => (
  <CinematicButton variant="outline" glowColor="blue" {...props} />
);

export const GhostButton = (props) => (
  <CinematicButton variant="ghost" magnetic={false} {...props} />
);

export const LinkButton = (props) => (
  <CinematicButton variant="link" magnetic={false} {...props} />
);

export const LiquidButton = (props) => (
  <CinematicButton liquid={true} variant="primary" {...props} />
);

// Icon button
export const IconButton = ({ 
  icon, 
  size = 'md', 
  variant = 'primary',
  tooltip,
  ...props 
}) => {
  const sizeStyles = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
    xl: 'w-14 h-14'
  };

  return (
    <div className="relative inline-block group">
      <CinematicButton
        variant={variant}
        size={size}
        className={`${sizeStyles[size]} p-0 flex items-center justify-center`}
        {...props}
      >
        {icon}
      </CinematicButton>
      {tooltip && (
        <motion.div
          className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-slate-800 text-white text-sm rounded-lg whitespace-nowrap opacity-0 pointer-events-none"
          animate={{
            opacity: tooltip ? 1 : 0,
            y: tooltip ? 0 : 5
          }}
          transition={{ duration: 0.2 }}
        >
          {tooltip}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1 w-2 h-2 bg-slate-800 rotate-45" />
        </motion.div>
      )}
    </div>
  );
};

// Floating action button
export const FloatingActionButton = ({ 
  icon, 
  position = 'bottom-right',
  color = 'blue',
  ...props 
}) => {
  const positionStyles = {
    'bottom-right': 'fixed bottom-6 right-6',
    'bottom-left': 'fixed bottom-6 left-6',
    'top-right': 'fixed top-6 right-6',
    'top-left': 'fixed top-6 left-6'
  };

  const colorStyles = {
    blue: 'bg-gradient-to-br from-blue-600 via-blue-500 to-blue-600 shadow-xl shadow-blue-500/30',
    red: 'bg-gradient-to-br from-red-600 via-red-500 to-red-600 shadow-xl shadow-red-500/30',
    purple: 'bg-gradient-to-br from-purple-600 via-purple-500 to-purple-600 shadow-xl shadow-purple-500/30',
    green: 'bg-gradient-to-br from-green-600 via-green-500 to-green-600 shadow-xl shadow-green-500/30'
  };

  return (
    <motion.div
      className={`${positionStyles[position]} z-50`}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.3 }}
    >
      <motion.button
        className={`w-14 h-14 rounded-full ${colorStyles[color]} text-white flex items-center justify-center border border-white/20 backdrop-blur-sm`}
        whileHover={{ scale: 1.15, rotate: 15 }}
        whileTap={{ scale: 0.9 }}
        {...props}
      >
        {icon}
        {/* Inner glow effect */}
        <motion.div
          className="absolute inset-0 rounded-full bg-white/20 blur-md"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.button>
    </motion.div>
  );
};

// Button group
export const ButtonGroup = ({ children, spacing = 'sm', className = '' }) => {
  const spacingStyles = {
    none: '',
    sm: 'space-x-2',
    md: 'space-x-4',
    lg: 'space-x-6'
  };

  return (
    <div className={`flex items-center ${spacingStyles[spacing]} ${className}`}>
      {children}
    </div>
  );
};

export default CinematicButton;
