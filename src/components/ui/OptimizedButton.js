import React, { useState, memo } from 'react';
import { motion } from 'framer-motion';
import { 
  optimizedButton,
  optimizedSecondaryButton,
  useIsMobile,
  usePerformanceMode
} from '../../animations/optimizedVariants';

// 🚀 PERFORMANCE-OPTIMIZED BUTTON COMPONENTS
// Minimal luxury motion design with mobile responsiveness

const OptimizedButton = memo(({ 
  children, 
  variant = 'primary',
  size = 'md',
  glowColor = 'blue',
  magnetic = false,
  className = '',
  disabled = false,
  loading = false,
  icon,
  iconPosition = 'right',
  ...props 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const isMobile = useIsMobile();
  const reduceMotion = usePerformanceMode();

  // Disable magnetic effects on mobile and with reduced motion
  // const enableMagnetic = magnetic && !isMobile && !reduceMotion;

  const getButtonVariants = () => {
    if (reduceMotion) {
      return {
        rest: { scale: 1 },
        hover: { scale: 1.02 },
        tap: { scale: 0.98 }
      };
    }
    
    if (variant === 'secondary') return optimizedSecondaryButton;
    return optimizedButton;
  };

  const getButtonStyles = () => {
    const baseStyles = "relative overflow-hidden font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-950 transition-all duration-200 rounded-xl backdrop-blur-sm";
    
    const sizeStyles = {
      sm: 'px-5 py-2.5 text-sm',
      md: 'px-7 py-3.5 text-base',
      lg: 'px-9 py-4.5 text-lg',
      xl: 'px-11 py-5.5 text-xl'
    };

    const variantStyles = {
      primary: 'bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 border border-blue-400/20',
      secondary: 'bg-gradient-to-r from-red-600 via-red-500 to-red-600 text-white shadow-lg shadow-red-500/20 hover:shadow-xl hover:shadow-red-500/30 border border-red-400/20',
      outline: 'bg-gradient-to-r from-transparent via-blue-500/10 to-transparent text-blue-400 border-2 border-blue-400/50 hover:border-blue-400 hover:bg-blue-500/20 hover:text-blue-300 shadow-md shadow-blue-500/10',
      ghost: 'text-blue-400 hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-blue-600/10 hover:text-blue-300 backdrop-blur-sm',
      link: 'text-blue-400 hover:text-blue-300 underline-offset-4 hover:underline decoration-2 decoration-blue-400/50 hover:decoration-blue-300'
    };

    return `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;
  };

  return (
    <motion.button
      className={getButtonStyles()}
      variants={getButtonVariants()}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
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

      {/* Optimized shimmer effect - only on desktop */}
      {!isMobile && variant !== 'ghost' && variant !== 'link' && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/15 to-white/0 opacity-0"
          animate={{
            opacity: isHovered ? 1 : 0,
            x: isHovered ? ['-100%', '100%'] : ['-100%', '-100%']
          }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        />
      )}
    </motion.button>
  );
});

OptimizedButton.displayName = 'OptimizedButton';

// Specialized button variants
export const PrimaryButton = memo((props) => (
  <OptimizedButton variant="primary" glowColor="blue" {...props} />
));

PrimaryButton.displayName = 'PrimaryButton';

export const SecondaryButton = memo((props) => (
  <OptimizedButton variant="secondary" glowColor="red" {...props} />
));

SecondaryButton.displayName = 'SecondaryButton';

export const OutlineButton = memo((props) => (
  <OptimizedButton variant="outline" glowColor="blue" {...props} />
));

OutlineButton.displayName = 'OutlineButton';

export const GhostButton = memo((props) => (
  <OptimizedButton variant="ghost" magnetic={false} {...props} />
));

GhostButton.displayName = 'GhostButton';

export const LinkButton = memo((props) => (
  <OptimizedButton variant="link" magnetic={false} {...props} />
));

LinkButton.displayName = 'LinkButton';

// Icon button - optimized
export const IconButton = memo(({ 
  icon, 
  size = 'md', 
  variant = 'primary',
  tooltip,
  ...props 
}) => {
  const isMobile = useIsMobile();
  
  const sizeStyles = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
    xl: 'w-14 h-14'
  };

  return (
    <div className="relative inline-block group">
      <OptimizedButton
        variant={variant}
        size={size}
        className={`${sizeStyles[size]} p-0 flex items-center justify-center`}
        {...props}
      >
        {icon}
      </OptimizedButton>
      {/* Tooltip only on desktop */}
      {!isMobile && tooltip && (
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
});

IconButton.displayName = 'IconButton';

// Floating action button - optimized
export const FloatingActionButton = memo(({ 
  icon, 
  position = 'bottom-right',
  color = 'blue',
  ...props 
}) => {
  const isMobile = useIsMobile();
  
  const positionStyles = {
    'bottom-right': 'fixed bottom-6 right-6',
    'bottom-left': 'fixed bottom-6 left-6',
    'top-right': 'fixed top-6 right-6',
    'top-left': 'fixed top-6 left-6'
  };

  const colorStyles = {
    blue: 'bg-gradient-to-br from-blue-600 via-blue-500 to-blue-600 shadow-lg shadow-blue-500/25',
    red: 'bg-gradient-to-br from-red-600 via-red-500 to-red-600 shadow-lg shadow-red-500/25',
    purple: 'bg-gradient-to-br from-purple-600 via-purple-500 to-purple-600 shadow-lg shadow-purple-500/25',
    green: 'bg-gradient-to-br from-green-600 via-green-500 to-green-600 shadow-lg shadow-green-500/25'
  };

  return (
    <motion.div
      className={`${positionStyles[position]} z-50`}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: isMobile ? 0 : 0.3, duration: 0.2 }}
    >
      <motion.button
        className={`w-14 h-14 rounded-full ${colorStyles[color]} text-white flex items-center justify-center border border-white/20 backdrop-blur-sm`}
        whileHover={{ scale: isMobile ? 1 : 1.1 }}
        whileTap={{ scale: 0.9 }}
        {...props}
      >
        {icon}
        {/* Subtle inner glow effect - only on desktop */}
        {!isMobile && (
          <motion.div
            className="absolute inset-0 rounded-full bg-white/15 blur-sm"
            animate={{ opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        )}
      </motion.button>
    </motion.div>
  );
});

FloatingActionButton.displayName = 'FloatingActionButton';

// Button group - optimized
export const ButtonGroup = memo(({ children, spacing = 'sm', className = '' }) => {
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
});

ButtonGroup.displayName = 'ButtonGroup';

export default OptimizedButton;
