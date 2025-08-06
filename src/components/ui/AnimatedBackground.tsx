import React from 'react';

interface AnimatedBackgroundProps {
  className?: string;
}

export const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ 
  className = '' 
}) => {
  // Generate more particles for extra attractiveness
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 6 + 2,
    speed: Math.random() * 3 + 1,
    delay: Math.random() * 3,
    type: Math.random() > 0.5 ? 'pulse' : 'bounce',
  }));

  // Generate additional floating elements
  const floatingElements = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 20 + 10,
    animation: ['pulse', 'bounce', 'ping'][Math.floor(Math.random() * 3)],
    delay: Math.random() * 2,
    color: ['blue', 'purple', 'pink', 'green', 'yellow'][Math.floor(Math.random() * 5)],
  }));

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900" />
      
      {/* Enhanced animated particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={`absolute w-1 h-1 bg-blue-400 rounded-full opacity-30 animate-${particle.type}`}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.speed}s`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
        />
      ))}
      
      {/* Additional floating elements for extra attractiveness */}
      {floatingElements.map((element) => (
        <div
          key={element.id}
          className={`absolute w-${element.size} h-${element.size} border border-${element.color}-400 rounded-full opacity-10 animate-${element.animation}`}
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            animationDelay: `${element.delay}s`,
            width: `${element.size}px`,
            height: `${element.size}px`,
          }}
        />
      ))}
      
      {/* Medical-themed decorative elements */}
      <div className="absolute top-20 left-10 opacity-10">
        <div 
          className="w-32 h-32 border border-blue-400 rounded-full animate-spin" 
          style={{ animationDuration: '20s' }} 
        />
      </div>
      
      <div className="absolute bottom-20 right-10 opacity-10">
        <div 
          className="w-24 h-24 border border-purple-400 rounded-full animate-spin" 
          style={{ animationDuration: '15s', animationDirection: 'reverse' }} 
        />
      </div>
      
      {/* Enhanced DNA helix effect */}
      <div className="absolute top-1/2 left-0 w-full h-64 opacity-5">
        <div className="flex justify-center space-x-1">
          {Array.from({ length: 25 }).map((_, i) => (
            <div
              key={i}
              className="w-1 h-8 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full animate-pulse"
              style={{
                animationDelay: `${i * 0.1}s`,
                transform: `translateY(${Math.sin(i * 0.5) * 25}px)`,
                height: `${Math.random() * 20 + 20}px`,
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Enhanced floating medical symbols */}
      <div className="absolute top-1/4 right-1/4 opacity-5">
        <div className="w-16 h-16 border-2 border-green-400 rounded-full animate-ping" />
      </div>
      
      <div className="absolute bottom-1/4 left-1/4 opacity-5">
        <div className="w-12 h-12 border-2 border-red-400 rounded-full animate-pulse" />
      </div>
      
      {/* Additional decorative circles */}
      <div className="absolute top-1/3 left-1/3 opacity-5">
        <div className="w-20 h-20 border border-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="absolute bottom-1/3 right-1/3 opacity-5">
        <div className="w-16 h-16 border border-pink-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
      
      {/* Moving light streaks for extra attractiveness */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-32 bg-gradient-to-b from-transparent via-blue-400 to-transparent opacity-20 animate-pulse"
            style={{
              left: `${20 + i * 15}%`,
              top: '-32px',
              animationDelay: `${i * 0.5}s`,
              animationDuration: '3s',
              transform: 'rotate(45deg)',
            }}
          />
        ))}
      </div>
      
      {/* Radial gradient overlays for depth */}
      <div className="absolute inset-0 bg-radial-gradient from-blue-500/10 via-transparent to-purple-500/10" />
      
      {/* Subtle noise texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-gradient-to-br from-white/5 to-transparent" />
      </div>
    </div>
  );
};

export default AnimatedBackground; 