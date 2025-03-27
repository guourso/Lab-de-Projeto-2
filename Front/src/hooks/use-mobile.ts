import { useState, useEffect } from 'react';

export function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkSize = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };
    
    // Initial check
    checkSize();
    
    // Add listener for window resize
    window.addEventListener('resize', checkSize);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkSize);
  }, [breakpoint]);

  return isMobile;
}
