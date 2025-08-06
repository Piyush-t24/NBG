import React from 'react';
import { Users, Brain, Trophy, Shield, Star } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon, 
  title, 
  description, 
  gradient,
  className = '' 
}) => {
  return (
    <div className={`text-center group ${className}`}>
      <div className="relative mb-8">
        <div className={`absolute inset-0 bg-gradient-to-r ${gradient} rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300`} />
        <div className={`relative bg-gradient-to-r ${gradient} p-6 rounded-full w-24 h-24 mx-auto flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
          {icon}
        </div>
      </div>
      <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
      <p className="text-blue-200 leading-relaxed">{description}</p>
    </div>
  );
};

interface FeaturesSectionProps {
  className?: string;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({ 
  className = '' 
}) => {
  const features = [
    {
      icon: <Users size={40} className="text-white" />,
      title: "Multiplayer Learning",
      description: "Study with friends or compete with students worldwide in real-time battles with advanced matchmaking.",
      gradient: "from-blue-400 to-purple-400"
    },
    {
      icon: <Brain size={40} className="text-white" />,
      title: "NEET-Focused Content",
      description: "Curated questions and drawing prompts specifically designed for NEET success with AI-powered difficulty adjustment.",
      gradient: "from-purple-400 to-pink-400"
    },
    {
      icon: <Trophy size={40} className="text-white" />,
      title: "Track Progress",
      description: "Monitor your improvement with detailed statistics, leaderboards, and personalized learning analytics.",
      gradient: "from-green-400 to-blue-400"
    }
  ];

  const additionalFeatures = [
    {
      icon: <Shield className="w-8 h-8 text-blue-400 mr-3" />,
      title: "Secure & Private",
      description: "Your data is protected with enterprise-grade security. Private rooms ensure focused study sessions.",
      gradient: "from-blue-600/20 to-purple-600/20",
      border: "border-blue-500/30"
    },
    {
      icon: <Star className="w-8 h-8 text-purple-400 mr-3" />,
      title: "Premium Experience",
      description: "Enjoy a premium gaming experience with smooth animations, real-time updates, and intuitive controls.",
      gradient: "from-purple-600/20 to-pink-600/20",
      border: "border-purple-500/30"
    }
  ];

  return (
    <div className={`relative z-10 bg-gradient-to-b from-slate-800 to-slate-900 py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose 
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> NBG?</span>
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            The ultimate platform for NEET preparation with cutting-edge technology
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              gradient={feature.gradient}
            />
          ))}
        </div>

        {/* Additional Features */}
        <div className="mt-20 grid md:grid-cols-2 gap-8">
          {additionalFeatures.map((feature, index) => (
            <div 
              key={index}
              className={`bg-gradient-to-r ${feature.gradient} rounded-2xl p-8 border ${feature.border}`}
            >
              <div className="flex items-center mb-4">
                {feature.icon}
                <h3 className="text-xl font-bold text-white">{feature.title}</h3>
              </div>
              <p className="text-blue-200">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection; 