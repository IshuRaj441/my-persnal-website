import React from 'react';

export default React.forwardRef(function Section({ children, className = "" }, ref) {
  return (
    <section ref={ref} className={`py-28 ${className}`}>
      {children}
    </section>
  );
});
