import { useEffect, useState } from 'react';

export const SpotlightEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      {/* Main spotlight effect */}
      <div 
        className="spotlight"
        style={{
          '--x': `${mousePosition.x}%`,
          '--y': `${mousePosition.y}%`,
          opacity: isVisible ? 1 : 0
        } as React.CSSProperties}
      />
      
      {/* Floating particles */}
      <div className="particles">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${10 + Math.random() * 10}s`
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