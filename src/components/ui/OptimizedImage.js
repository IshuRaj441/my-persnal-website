import React, { useState, memo, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { optimizedImageReveal, optimizedImageHover, useIsMobile } from '../../animations/optimizedVariants';

// 🚀 PERFORMANCE-OPTIMIZED IMAGE COMPONENT
// WebP support, lazy loading, responsive sizing, blur-up effect

const OptimizedImage = memo(({ 
  src,
  webpSrc,
  alt,
  className = '',
  width,
  height,
  priority = false,
  lazy = true,
  objectFit = 'cover',
  animate = true,
  hover = false,
  placeholder = 'blur',
  blurDataURL,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(!lazy || priority);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef();
  const isMobile = useIsMobile();

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (!lazy || priority || !imgRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, [lazy, priority]);

  // Generate blur placeholder
  const generateBlurDataURL = (w = 40, h = 40) => {
    if (blurDataURL) return blurDataURL;
    return `data:image/svg+xml,%3Csvg width='${w}' height='${h}' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23f3f4f6'/%3E%3C/svg%3E`;
  };

  // Determine image source based on WebP support
  const getImageSrc = () => {
    if (hasError) return generateBlurDataURL();
    
    // Check WebP support
    const canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    const webpSupported = canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
    
    if (webpSupported && webpSrc) {
      return webpSrc;
    }
    return src;
  };

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
  };

  const shouldAnimate = animate && !isMobile;
  const shouldHover = hover && !isMobile;

  const imageVariants = shouldAnimate ? optimizedImageReveal : {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const hoverVariants = shouldHover ? optimizedImageHover : undefined;

  return (
    <div 
      ref={imgRef} 
      className={`relative overflow-hidden ${className}`}
      {...props}
    >
      {/* Placeholder */}
      {placeholder === 'blur' && !isLoaded && (
        <div 
          className="absolute inset-0 blur-xl scale-110"
          style={{ 
            backgroundImage: `url(${generateBlurDataURL()})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
      )}

      {/* Loading skeleton */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}

      {/* Actual image */}
      {isInView && (
        <motion.img
          src={getImageSrc()}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          loading={priority ? 'eager' : 'lazy'}
          onLoad={handleLoad}
          onError={handleError}
          variants={hoverVariants ? { ...imageVariants, ...hoverVariants } : imageVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          whileHover={hoverVariants ? "hover" : undefined}
          className={`w-full h-full transition-opacity duration-300 ${
            objectFit === 'cover' ? 'object-cover' : 
            objectFit === 'contain' ? 'object-contain' : 
            objectFit === 'fill' ? 'object-fill' : 
            'object-scale-down'
          }`}
          style={{
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.3s ease-in-out'
          }}
        />
      )}

      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-400">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
      )}
    </div>
  );
});

OptimizedImage.displayName = 'OptimizedImage';

// Picture component for responsive images
export const ResponsivePicture = memo(({ 
  sources,
  fallbackSrc,
  webpFallbackSrc,
  alt,
  className = '',
  loading = 'lazy',
  sizes,
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      
      <picture>
        {/* WebP sources */}
        {sources.map((source, index) => (
          <source
            key={`webp-${index}`}
            type="image/webp"
            media={source.media}
            srcSet={source.webpSrcSet}
            sizes={sizes}
          />
        ))}
        
        {/* Original format sources */}
        {sources.map((source, index) => (
          <source
            key={`original-${index}`}
            type={source.type || 'image/jpeg'}
            media={source.media}
            srcSet={source.srcSet}
            sizes={sizes}
          />
        ))}
        
        {/* Fallback image */}
        <OptimizedImage
          src={webpFallbackSrc || fallbackSrc}
          alt={alt}
          onLoad={() => setIsLoaded(true)}
          loading={loading}
          className={`transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          {...props}
        />
      </picture>
    </div>
  );
});

ResponsivePicture.displayName = 'ResponsivePicture';

// Avatar component - optimized
export const Avatar = memo(({ 
  src,
  alt,
  size = 'md',
  className = '',
  fallback,
  ...props 
}) => {
  const [hasError, setHasError] = useState(false);
  
  const sizeStyles = {
    xs: 'w-6 h-6',
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-20 h-20',
    '2xl': 'w-24 h-24'
  };

  const handleError = () => {
    setHasError(true);
  };

  if (hasError || !src) {
    return (
      <div className={`${sizeStyles[size]} rounded-full bg-gray-200 flex items-center justify-center ${className}`}>
        <span className="text-gray-500 text-sm font-medium">
          {fallback || alt?.charAt(0)?.toUpperCase() || '?'}
        </span>
      </div>
    );
  }

  return (
    <OptimizedImage
      src={src}
      alt={alt}
      className={`${sizeStyles[size]} rounded-full object-cover ${className}`}
      onError={handleError}
      {...props}
    />
  );
});

Avatar.displayName = 'Avatar';

// Gallery image component
export const GalleryImage = memo(({ 
  src,
  webpSrc,
  alt,
  className = '',
  onClick,
  index,
  ...props 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`relative overflow-hidden cursor-pointer ${className}`}
      whileHover={{ scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
      {...props}
    >
      <OptimizedImage
        src={src}
        webpSrc={webpSrc}
        alt={alt}
        hover={true}
        className="w-full h-full"
      />
      
      {/* Overlay on hover */}
      <motion.div
        className="absolute inset-0 bg-black/40 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
        </svg>
      </motion.div>
    </motion.div>
  );
});

GalleryImage.displayName = 'GalleryImage';

export default OptimizedImage;
