import React from 'react';
import { cn } from '../../lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  onClick?: () => void;
  gradient?: boolean;
  glass?: boolean;
  glow?: 'blue' | 'purple' | 'green' | 'pink' | 'orange' | 'none';
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverable = false,
  onClick,
  gradient = false,
  glass = false,
  glow = 'none',
}) => {
  const glowClasses = {
    blue: 'hover:shadow-blue-500/50',
    purple: 'hover:shadow-purple-500/50',
    green: 'hover:shadow-green-500/50',
    pink: 'hover:shadow-pink-500/50',
    orange: 'hover:shadow-orange-500/50',
    none: '',
  };

  return (
    <div
      className={cn(
        'rounded-xl shadow-lg overflow-hidden transition-all duration-500',
        glass && 'backdrop-blur-sm bg-white/10 border border-white/20',
        !glass && 'bg-white',
        hoverable && 'hover:shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer',
        glow !== 'none' && glowClasses[glow],
        gradient && 'bg-gradient-to-br from-white/20 to-white/10',
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
  gradient?: boolean;
}

export const CardHeader: React.FC<CardHeaderProps> = ({
  children,
  className = '',
  gradient = false,
}) => {
  return (
    <div className={cn(
      'px-6 py-4 border-b border-gray-200',
      gradient && 'bg-gradient-to-r from-blue-600 to-purple-600 text-white border-white/20',
      className
    )}>
      {children}
    </div>
  );
};

interface CardBodyProps {
  children: React.ReactNode;
  className?: string;
  glass?: boolean;
}

export const CardBody: React.FC<CardBodyProps> = ({
  children,
  className = '',
  glass = false,
}) => {
  return (
    <div className={cn(
      'px-6 py-4',
      glass && 'bg-white/5 backdrop-blur-sm',
      className
    )}>
      {children}
    </div>
  );
};

export default Card;