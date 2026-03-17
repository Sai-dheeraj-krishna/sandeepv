import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import 'vanta/dist/vanta.net.min';

export default function AnimatedBackground() {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let timeoutId = null;
    
    // Vanta expects THREE on the window object
    window.THREE = THREE;

    const initVanta = () => {
      // Use the global VANTA object which is populated by the side-effect import
      const vantaFunc = window.VANTA?.NET;
      
      if (typeof vantaFunc === 'function' && vantaRef.current && !vantaEffect.current) {
        try {
          vantaEffect.current = vantaFunc({
            el: vantaRef.current,
            THREE: THREE,
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
      } else {
        console.warn('Vanta NET effect not yet available, will retry...');
      }
    };

    // Performance Optimization: Delay initialization to allow Hero animations to run smoothly
    timeoutId = setTimeout(() => {
      initVanta();
    }, 1200);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []);

  return (
    <div 
      ref={vantaRef} 
      className={`fixed inset-0 -z-1 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`} 
    />
  );
}



