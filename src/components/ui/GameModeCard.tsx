import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Card, { CardHeader, CardBody } from './Card';
import Button from './Button';
import { LucideIcon } from 'lucide-react';

interface GameModeCardProps {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  color: 'blue' | 'purple' | 'green' | 'pink' | 'orange';
  createPath: string;
  joinPublicPath: string;
  joinPrivatePath: string;
  practicePath?: string;
  status?: 'LIVE' | 'CREATIVE' | 'BETA';
  className?: string;
}

export const GameModeCard: React.FC<GameModeCardProps> = ({
  title,
  subtitle,
  description,
  features,
  icon: Icon,
  color,
  createPath,
  joinPublicPath,
  joinPrivatePath,
  practicePath,
  status,
  className = '',
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const colorClasses = {
    blue: {
      gradient: 'from-blue-600 via-blue-700 to-purple-700',
      glow: 'hover:shadow-blue-500/50',
      iconBg: 'from-blue-400 to-purple-400',
      statusBg: 'bg-blue-400/20',
      statusText: 'text-blue-200',
    },
    purple: {
      gradient: 'from-purple-600 via-purple-700 to-pink-700',
      glow: 'hover:shadow-purple-500/50',
      iconBg: 'from-purple-400 to-pink-400',
      statusBg: 'bg-pink-400/20',
      statusText: 'text-pink-200',
    },
    green: {
      gradient: 'from-green-600 via-green-700 to-blue-700',
      glow: 'hover:shadow-green-500/50',
      iconBg: 'from-green-400 to-blue-400',
      statusBg: 'bg-green-400/20',
      statusText: 'text-green-200',
    },
    pink: {
      gradient: 'from-pink-600 via-pink-700 to-purple-700',
      glow: 'hover:shadow-pink-500/50',
      iconBg: 'from-pink-400 to-purple-400',
      statusBg: 'bg-pink-400/20',
      statusText: 'text-pink-200',
    },
    orange: {
      gradient: 'from-orange-600 via-orange-700 to-red-700',
      glow: 'hover:shadow-orange-500/50',
      iconBg: 'from-orange-400 to-red-400',
      statusBg: 'bg-orange-400/20',
      statusText: 'text-orange-200',
    },
  };

  const currentColor = colorClasses[color];

  return (
    <div 
      className={`group relative ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow effect */}
      <div className={`absolute inset-0 bg-gradient-to-r ${currentColor.gradient} rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
      
      <Card className={`relative bg-gradient-to-br ${currentColor.gradient} text-white border-0 shadow-2xl ${currentColor.glow} transform hover:scale-105 transition-all duration-500 overflow-hidden`}>
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-white/10 to-transparent rounded-full" />
        </div>
        
        <CardHeader className="bg-transparent border-b border-white/20 pb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="relative">
                <div className={`absolute inset-0 bg-yellow-400 rounded-full blur-md opacity-50 ${isHovered ? 'animate-pulse' : 'animate-pulse'}`} />
                <div className={`relative bg-gradient-to-r ${currentColor.iconBg} p-4 rounded-full transform ${isHovered ? 'scale-110' : 'scale-100'} transition-transform duration-300`}>
                  <Icon size={40} className="text-white" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-2xl font-bold">{title}</h3>
                <p className="text-blue-100">{subtitle}</p>
              </div>
            </div>
            {status && (
              <div className="flex items-center space-x-2">
                <div className={`text-sm ${currentColor.statusBg} px-3 py-1 rounded-full ${currentColor.statusText}`}>
                  {status}
                </div>
              </div>
            )}
          </div>
        </CardHeader>
        
        <CardBody className="relative">
          <div className="space-y-6">
            <p className="text-blue-100 text-lg leading-relaxed">
              {description}
            </p>
            
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center text-blue-100">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-2 gap-3 pt-4">
              <Link to={createPath}>
                <Button 
                  fullWidth 
                  className="bg-white/20 hover:bg-white/30 text-white border-white/30 hover:border-white/50 transition-all duration-300"
                >
                  Create Room
                </Button>
              </Link>
              <Link to={joinPublicPath}>
                <Button 
                  variant="outline" 
                  fullWidth 
                  className="border-white/30 text-white hover:bg-white/20 transition-all duration-300"
                >
                  Join Public
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <Link to={joinPrivatePath}>
                <Button 
                  variant="secondary" 
                  fullWidth 
                  className={`bg-gradient-to-r ${currentColor.iconBg} hover:from-${color}-600 hover:to-${color === 'blue' ? 'purple' : color === 'purple' ? 'pink' : color === 'green' ? 'blue' : color === 'pink' ? 'purple' : 'red'}-600 text-white border-0 transition-all duration-300`}
                >
                  Join Private
                </Button>
              </Link>
              {practicePath && (
                <Link to={practicePath}>
                  <Button 
                    variant="outline" 
                    fullWidth 
                    className="border-white/30 text-white hover:bg-white/20 transition-all duration-300"
                  >
                    Practice Mode
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default GameModeCard; 