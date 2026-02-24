import React, { useEffect, useState } from 'react';

export default function ThreeBackground() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-secondary"></div>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-secondary">
        {/* Floating orbs using CSS animations */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-32 w-48 h-48 bg-netflixRed/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 left-40 w-40 h-40 bg-accent/15 rounded-full blur-xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-20 right-20 w-36 h-36 bg-netflixRed/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-accent/40 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 3 + 2}s`
              }}
            ></div>
          ))}
        </div>
        
        {/* Geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-16 h-16 border-2 border-accent/30 rotate-45 animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute top-3/4 right-1/4 w-12 h-12 border-2 border-netflixRed/30 rotate-45 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
        <div className="absolute top-1/2 left-3/4 w-20 h-20 border-2 border-accent/20 rounded-full animate-pulse" style={{ animationDuration: '3s' }}></div>
        
        {/* Moving gradient overlay */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)',
            animation: 'float 6s ease-in-out infinite'
          }}
        ></div>
      </div>
    </div>
  );
}
