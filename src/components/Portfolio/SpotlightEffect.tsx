import { useEffect, useMemo, useRef, useState } from 'react';

export const SpotlightEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isVisible, setIsVisible] = useState(false);
  const isTouchDevice = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(pointer: coarse)').matches;
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const disabled = isTouchDevice || prefersReducedMotion;

  // Throttle mouse move using rAF
  const frame = useRef<number | null>(null);
  useEffect(() => {
    if (disabled) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (frame.current !== null) return;
      frame.current = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        setMousePosition({ x, y });
        setIsVisible(true);
        frame.current = null;
      });
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (frame.current) cancelAnimationFrame(frame.current);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [disabled]);

  return (
    <>
      {/* Main spotlight effect */}
      {!disabled && (
        <div 
          className="spotlight"
          style={{
            '--x': `${mousePosition.x}%`,
            '--y': `${mousePosition.y}%`,
            opacity: isVisible ? 1 : 0
          } as React.CSSProperties}
        />
      )}
      
      {/* Floating particles - reduce on mobile/reduced motion */}
      <div className="particles">
        {Array.from({ length: disabled ? 0 : 16 }).map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${12 + Math.random() * 6}s`
            }}
          />
        ))}
      </div>
      
      {/* Grid overlay */}
      <div 
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 5px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
    </>
  );
};