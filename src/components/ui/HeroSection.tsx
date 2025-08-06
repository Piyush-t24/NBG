import React from 'react';
import { Brain, Play, BookOpen, Sparkles } from 'lucide-react';
import Button from './Button';

interface HeroSectionProps {
  className?: string;
  onStartPlaying: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ 
  className = '',
  onStartPlaying 
}) => {
  return (
    <div className={`relative z-10 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Animated Logo */}
          <div className="flex justify-center mb-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
              <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-full transform group-hover:scale-110 transition-transform duration-500">
                <Brain size={64} className="text-white" />
              </div>
              <div className="absolute -top-2 -right-2">
                <div className="bg-yellow-400 rounded-full p-2 animate-bounce">
                  <Sparkles size={16} className="text-yellow-900" />
                </div>
              </div>
            </div>
          </div>

          {/* Main Title with Glow Effect */}
          <h1 className="text-6xl md:text-7xl font-black text-white mb-6 relative">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              NEET
            </span>
            <br />
            <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              BATTLEGROUND
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 blur-xl opacity-30 -z-10" />
          </h1>

          {/* Subtitle with medical theme */}
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            Master NEET concepts through 
            <span className="text-yellow-300 font-semibold"> interactive multiplayer battles</span>. 
            Challenge friends, test your knowledge, and visualize complex medical concepts.
          </p>

          {/* CTA Buttons with enhanced interactivity */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button 
              size="lg" 
              className="px-12 py-6 text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-500/50"
              onClick={onStartPlaying}
              icon={<Play className="w-6 h-6" />}
            >
              Start Playing
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-12 py-6 text-xl font-bold border-2 border-blue-400 text-blue-100 hover:bg-blue-400 hover:text-white transform hover:scale-105 transition-all duration-300"
              icon={<BookOpen className="w-6 h-6" />}
            >
              Learn More
            </Button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">1000+</div>
              <div className="text-blue-200">Active Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">5000+</div>
              <div className="text-blue-200">Questions Solved</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">95%</div>
              <div className="text-blue-200">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection; 