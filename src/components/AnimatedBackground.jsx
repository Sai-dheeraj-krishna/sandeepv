import { useEffect, useRef, useState } from 'react';

export default function AnimatedBackground() {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let timeoutId = null;

    const initVanta = () => {
      if (window.VANTA && window.VANTA.NET && vantaRef.current && !vantaEffect.current) {
        try {
          vantaEffect.current = window.VANTA.NET({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            color: 0x22d3ee,
            backgroundColor: 0x0a0f1e,
            points: 9.0,
            maxDistance: 21.0,
            spacing: 16.0,
          });
          // Fade in after initialization
          setIsVisible(true);
        } catch (err) {
          console.error('Vanta initialization failed:', err);
        }
      }
    };

    // Performance Optimization: Delay initialization to allow Hero animations to run smoothly
    timeoutId = setTimeout(() => {
      initVanta();
    }, 1200);

    window.addEventListener('vantaReady', initVanta);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
      window.removeEventListener('vantaReady', initVanta);
    };
  }, []);

  return (
    <div 
      ref={vantaRef} 
      className={`fixed inset-0 -z-10 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`} 
    />
  );
}
