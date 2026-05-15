// 🚀 Performance Monitoring & Optimization Utilities

// Core Web Vitals monitoring
export const measureWebVitals = () => {
  const isDevelopment = process.env.NODE_ENV === 'development';
  
  // Largest Contentful Paint (LCP)
  const measureLCP = () => {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      if (!isDevelopment) console.log('LCP:', lastEntry.renderTime || lastEntry.loadTime);
      
      // Send to analytics if needed
      if (window.gtag) {
        window.gtag('event', 'LCP', {
          event_category: 'Web Vitals',
          value: Math.round(lastEntry.renderTime || lastEntry.loadTime),
          non_interaction: true,
        });
      }
    });
    observer.observe({ entryTypes: ['largest-contentful-paint'] });
  };

  // First Input Delay (FID)
  const measureFID = () => {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (!isDevelopment) console.log('FID:', entry.processingStart - entry.startTime);
        
        if (window.gtag) {
          window.gtag('event', 'FID', {
            event_category: 'Web Vitals',
            value: Math.round(entry.processingStart - entry.start),
            non_interaction: true,
          });
        }
      });
    });
    observer.observe({ entryTypes: ['first-input'] });
  };

  // Cumulative Layout Shift (CLS)
  const measureCLS = () => {
    let clsValue = 0;
    let lastLoggedValue = 0;
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      });
      
      // Only log if CLS changed significantly (reduce console spam)
      if (Math.abs(clsValue - lastLoggedValue) > 0.01) {
        if (!isDevelopment) console.log('CLS:', clsValue.toFixed(3));
        lastLoggedValue = clsValue;
        
        if (window.gtag) {
          window.gtag('event', 'CLS', {
            event_category: 'Web Vitals',
            value: Math.round(clsValue * 1000),
            non_interaction: true,
          });
        }
      }
    });
    observer.observe({ entryTypes: ['layout-shift'] });
  };

  // Time to Interactive (TTI)
  const measureTTI = () => {
    const measure = () => {
      const timing = performance.timing;
      const tti = timing.domInteractive - timing.navigationStart;
      if (!isDevelopment) console.log('TTI:', tti);
      
      if (window.gtag) {
        window.gtag('event', 'TTI', {
          event_category: 'Web Vitals',
          value: Math.round(tti),
          non_interaction: true,
        });
      }
    };

    if (document.readyState === 'complete') {
      measure();
    } else {
      window.addEventListener('load', measure);
    }
  };

  measureLCP();
  measureFID();
  measureCLS();
  measureTTI();
};

// Resource loading optimization
export const optimizeResourceLoading = () => {
  // Defer non-critical images
  const deferImages = () => {
    const images = document.querySelectorAll('img[data-defer]');
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-defer');
            imageObserver.unobserve(img);
          }
        }
      });
    });

    images.forEach((img) => imageObserver.observe(img));
  };

  // Preload critical resources
  const preloadCriticalResources = () => {
    const criticalResources = [
      { href: '/fonts/inter-v12-latin-regular.woff2', as: 'font', type: 'font/woff2' },
    ];

    criticalResources.forEach((resource) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource.href;
      link.as = resource.as;
      if (resource.type) link.type = resource.type;
      if (resource.as === 'font') link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });
  };

  deferImages();
  preloadCriticalResources();
};

// Service Worker registration
export const registerServiceWorker = async () => {
  // Disable SW in development to prevent hot reload conflicts
  if (process.env.NODE_ENV === 'development') {
    console.log('Service Worker disabled in development mode');
    return null;
  }
  
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js');
      console.log('SW registered:', registration);

      // Check for updates
      registration.addEventListener('updatefound', () => {
        const newWorker = registration.installing;
        newWorker.addEventListener('statechange', () => {
          if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
            // New version available - use a more user-friendly approach
            console.log('New version available! Refresh to see updates.');
            // Optionally show a custom notification instead of confirm
          }
        });
      });

      return registration;
    } catch (error) {
      console.error('SW registration failed:', error);
    }
  }
  return null;
};

// Performance budget monitoring
export const checkPerformanceBudget = () => {
  // Increased budgets for development mode (includes hot reload overhead)
  const isDevelopment = process.env.NODE_ENV === 'development';
  const budget = {
    js: isDevelopment ? 5000000 : 250000, // 5MB dev / 250KB prod
    css: isDevelopment ? 500000 : 50000, // 500KB dev / 50KB prod
    images: isDevelopment ? 2000000 : 500000, // 2MB dev / 500KB prod
    total: isDevelopment ? 10000000 : 1000000, // 10MB dev / 1MB prod
  };

  const resources = performance.getEntriesByType('resource');
  const usage = {
    js: 0,
    css: 0,
    images: 0,
    total: 0,
  };

  resources.forEach((resource) => {
    const size = resource.transferSize || 0;
    usage.total += size;

    if (resource.name.includes('.js')) {
      usage.js += size;
    } else if (resource.name.includes('.css')) {
      usage.css += size;
    } else if (resource.name.match(/\.(jpg|jpeg|png|gif|webp|svg)$/i)) {
      usage.images += size;
    }
  });

  const warnings = [];
  if (usage.js > budget.js) warnings.push(`JS budget exceeded: ${usage.js} > ${budget.js}`);
  if (usage.css > budget.css) warnings.push(`CSS budget exceeded: ${usage.css} > ${budget.css}`);
  if (usage.images > budget.images) warnings.push(`Images budget exceeded: ${usage.images} > ${budget.images}`);
  if (usage.total > budget.total) warnings.push(`Total budget exceeded: ${usage.total} > ${budget.total}`);

  if (warnings.length > 0 && !isDevelopment) {
    console.warn('Performance budget warnings:', warnings);
  }

  return { usage, budget, warnings };
};

// Memory usage monitoring
export const monitorMemoryUsage = () => {
  const isDevelopment = process.env.NODE_ENV === 'development';
  
  if ('memory' in performance) {
    const memory = performance.memory;
    const usage = {
      used: Math.round(memory.usedJSHeapSize / 1048576), // MB
      total: Math.round(memory.totalJSHeapSize / 1048576), // MB
      limit: Math.round(memory.jsHeapSizeLimit / 1048576), // MB
    };

    // Only log memory usage periodically to reduce console spam
    const now = Date.now();
    if (!monitorMemoryUsage.lastLog || now - monitorMemoryUsage.lastLog > 10000) {
      if (!isDevelopment) console.log('Memory usage:', usage);
      monitorMemoryUsage.lastLog = now;

      // Warning if memory usage is critically high (increased threshold)
      if (usage.used > usage.total * 0.9 && !isDevelopment) {
        console.warn('High memory usage detected:', usage);
      }
    }

    return usage;
  }
  return null;
};

// Initialize performance monitoring
export const initPerformanceMonitoring = () => {
  // Start monitoring after page loads
  if (document.readyState === 'complete') {
    startMonitoring();
  } else {
    window.addEventListener('load', startMonitoring);
  }
};

function startMonitoring() {
  measureWebVitals();
  optimizeResourceLoading();
  registerServiceWorker();
  
  // Check performance budget after a delay to allow resources to load
  setTimeout(() => {
    checkPerformanceBudget();
    monitorMemoryUsage();
  }, 3000);

  // Monitor memory usage periodically
  setInterval(monitorMemoryUsage, 60000);
}

// Export utilities for manual usage
const performanceUtils = {
  measureWebVitals,
  optimizeResourceLoading,
  registerServiceWorker,
  checkPerformanceBudget,
  monitorMemoryUsage,
  initPerformanceMonitoring,
};

export default performanceUtils;
