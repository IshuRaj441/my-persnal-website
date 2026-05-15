import React from 'react';

export default React.forwardRef(function Container({ children, className = "" }, ref) {
  return (
    <div ref={ref} className={`max-w-[1400px] mx-auto px-6 lg:px-12 ${className}`}>
      {children}
    </div>
  );
});
