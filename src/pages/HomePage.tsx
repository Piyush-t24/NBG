import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Layout from './Layout';
import Button from '../components/ui/Button';
import Card, { CardHeader, CardBody } from '../components/ui/Card';
import AnimatedBackground from '../components/ui/AnimatedBackground';
import { 
  Brain, 
  Pencil, 
  Users, 
  Zap, 
  Trophy, 
  Target, 
  X, 
  Play,
  Sparkles,
  Heart,
  Activity,
  BookOpen,
  Shield,
  ArrowRight,
  Star,
  Crown,
  Flame,
  Rocket,
  TrendingUp
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [showGameModeModal, setShowGameModeModal] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Mouse tracking for parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    // Add loading animation
    setTimeout(() => setIsLoaded(true), 100);
    
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleStartPlaying = () => {
    setShowGameModeModal(true);
  };

  const handleGameModeSelect = (gameMode: 'mcq' | 'draw') => {
    setShowGameModeModal(false);
    navigate(`/${gameMode}/play`);
  };

  return (
    <Layout>
      <div className="min-h-screen relative overflow-hidden">
        {/* Enhanced Animated Background */}
        <AnimatedBackground />
        
        {/* Floating Elements for Extra Attractiveness */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Floating Crown */}
          <div className="absolute top-20 right-20 animate-bounce opacity-20">
            <Crown size={32} className="text-yellow-400" />
          </div>
          
          {/* Floating Flame */}
          <div className="absolute bottom-40 left-20 animate-pulse opacity-30">
            <Flame size={24} className="text-orange-400" />
          </div>
          
          {/* Floating Rocket */}
          <div className="absolute top-1/3 left-1/4 animate-bounce opacity-25" style={{ animationDelay: '1s' }}>
            <Rocket size={28} className="text-purple-400" />
          </div>
          
          {/* Floating Trending */}
          <div className="absolute bottom-1/3 right-1/4 animate-pulse opacity-20" style={{ animationDelay: '2s' }}>
            <TrendingUp size={20} className="text-green-400" />
          </div>
        </div>

        {/* Hero Section with Enhanced Attractiveness */}
        <div className={`relative z-10 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              {/* Enhanced Animated Logo */}
              <div className="flex justify-center mb-8">
                <div className="relative group">
                  {/* Multiple glow layers for extra attractiveness */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500 animate-pulse" style={{ animationDelay: '0.5s' }} />
                  
                  <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-full transform group-hover:scale-110 transition-transform duration-500 shadow-2xl">
                    <Brain size={64} className="text-white" />
                  </div>
                  
                  {/* Multiple sparkles for extra attractiveness */}
                  <div className="absolute -top-2 -right-2">
                    <div className="bg-yellow-400 rounded-full p-2 animate-bounce">
                      <Sparkles size={16} className="text-yellow-900" />
                    </div>
                  </div>
                  <div className="absolute -bottom-2 -left-2">
                    <div className="bg-purple-400 rounded-full p-2 animate-pulse">
                      <Star size={12} className="text-purple-900" />
                    </div>
                  </div>
                  <div className="absolute top-1/2 -right-4">
                    <div className="bg-pink-400 rounded-full p-1 animate-ping">
                      <Heart size={10} className="text-pink-900" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Main Title with Multiple Glow Effects */}
              <h1 className="text-6xl md:text-7xl font-black text-white mb-6 relative">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
                  NEET
                </span>
                <br />
                <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent animate-pulse" style={{ animationDelay: '0.3s' }}>
                  BATTLEGROUND
                </span>
                {/* Multiple glow layers */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 blur-xl opacity-30 -z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 blur-2xl opacity-20 -z-20" />
              </h1>

              {/* Enhanced Subtitle with Animated Highlights */}
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
                Master NEET concepts through 
                <span className="text-yellow-300 font-semibold animate-pulse"> interactive multiplayer battles</span>. 
                Challenge friends, test your knowledge, and visualize complex medical concepts.
              </p>

              {/* Enhanced CTA Buttons with More Attractive Effects */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                <Button 
                  size="lg" 
                  className="px-12 py-6 text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-500/50 animate-pulse"
                  onClick={handleStartPlaying}
                  icon={<Play className="w-6 h-6" />}
                >
                  Start Playing
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="px-12 py-6 text-xl font-bold border-2 border-blue-400 text-blue-100 hover:bg-blue-400 hover:text-white transform hover:scale-105 transition-all duration-300 animate-pulse"
                  icon={<BookOpen className="w-6 h-6" />}
                  style={{ animationDelay: '0.2s' }}
                >
                  Learn More
                </Button>
              </div>

              {/* Enhanced Stats Section with Animations */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="text-center group">
                  <div className="text-3xl font-bold text-yellow-400 mb-2 animate-bounce">1000+</div>
                  <div className="text-blue-200 group-hover:text-yellow-300 transition-colors duration-300">Active Students</div>
                </div>
                <div className="text-center group">
                  <div className="text-3xl font-bold text-green-400 mb-2 animate-pulse">5000+</div>
                  <div className="text-blue-200 group-hover:text-green-300 transition-colors duration-300">Questions Solved</div>
                </div>
                <div className="text-center group">
                  <div className="text-3xl font-bold text-purple-400 mb-2 animate-bounce" style={{ animationDelay: '0.5s' }}>95%</div>
                  <div className="text-blue-200 group-hover:text-purple-300 transition-colors duration-300">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Game Modes Section */}
        <div className="relative z-10 bg-gradient-to-b from-transparent to-slate-800 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-pulse">
                Choose Your 
                <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"> Battle Mode</span>
              </h2>
              <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                Two exciting ways to master NEET concepts with cutting-edge interactive gameplay
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Enhanced MCQ Quiz Mode Card */}
              <div 
                className="group relative"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                <Card className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 text-white border-0 shadow-2xl hover:shadow-blue-500/50 transform hover:scale-105 transition-all duration-500 overflow-hidden">
                  {/* Enhanced animated background pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent" />
                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-white/10 to-transparent rounded-full animate-pulse" />
                    <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-gradient-to-br from-white/5 to-transparent rounded-full animate-ping" />
                  </div>
                  
                  <CardHeader className="bg-transparent border-b border-white/20 pb-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="relative">
                          <div className="absolute inset-0 bg-yellow-400 rounded-full blur-md opacity-50 animate-pulse" />
                          <div className="relative bg-gradient-to-r from-blue-400 to-purple-400 p-4 rounded-full transform group-hover:scale-110 transition-transform duration-300">
                            <Brain size={40} className="text-white" />
                          </div>
                        </div>
                        <div className="ml-4">
                          <h3 className="text-2xl font-bold">MCQ Quiz Battle</h3>
                          <p className="text-blue-100">Test your knowledge</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Zap size={28} className="text-yellow-300 animate-pulse" />
                        <div className="text-sm bg-yellow-400/20 px-3 py-1 rounded-full text-yellow-200 animate-pulse">
                          LIVE
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardBody className="relative">
                    <div className="space-y-6">
                      <p className="text-blue-100 text-lg leading-relaxed">
                        Challenge yourself and others with timed multiple-choice questions 
                        covering the entire NEET syllabus with real-time competitive gameplay.
                      </p>
                      
                      <div className="space-y-3">
                        <div className="flex items-center text-blue-100 group/item">
                          <Target size={20} className="mr-3 text-green-400 group-hover/item:scale-110 transition-transform duration-200" />
                          <span>Real-time competitive gameplay</span>
                        </div>
                        <div className="flex items-center text-blue-100 group/item">
                          <Heart size={20} className="mr-3 text-red-400 group-hover/item:scale-110 transition-transform duration-200" />
                          <span>Detailed explanations for each answer</span>
                        </div>
                        <div className="flex items-center text-blue-100 group/item">
                          <Activity size={20} className="mr-3 text-blue-400 group-hover/item:scale-110 transition-transform duration-200" />
                          <span>Physics, Chemistry, and Biology topics</span>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3 pt-4">
                        <Link to="/mcq/create">
                          <Button 
                            fullWidth 
                            className="bg-white/20 hover:bg-white/30 text-white border-white/30 hover:border-white/50 transition-all duration-300 transform hover:scale-105"
                          >
                            Create Room
                          </Button>
                        </Link>
                        <Link to="/mcq/play">
                          <Button 
                            variant="outline" 
                            fullWidth 
                            className="border-white/30 text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                          >
                            Join Public
                          </Button>
                        </Link>
                      </div>
                      
                      <Link to="/mcq/join">
                        <Button 
                          variant="secondary" 
                          fullWidth 
                          className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0 transition-all duration-300 transform hover:scale-105"
                        >
                          Join Private Room
                        </Button>
                      </Link>
                    </div>
                  </CardBody>
                </Card>
              </div>

              {/* Enhanced Drawing Challenge Mode Card */}
              <div 
                className="group relative"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                <Card className="relative bg-gradient-to-br from-purple-600 via-purple-700 to-pink-700 text-white border-0 shadow-2xl hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-500 overflow-hidden">
                  {/* Enhanced animated background pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent" />
                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-white/10 to-transparent rounded-full animate-pulse" />
                    <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-gradient-to-br from-white/5 to-transparent rounded-full animate-ping" />
                  </div>
                  
                  <CardHeader className="bg-transparent border-b border-white/20 pb-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="relative">
                          <div className="absolute inset-0 bg-pink-400 rounded-full blur-md opacity-50 animate-pulse" />
                          <div className="relative bg-gradient-to-r from-purple-400 to-pink-400 p-4 rounded-full transform group-hover:scale-110 transition-transform duration-300">
                            <Pencil size={40} className="text-white" />
                          </div>
                        </div>
                        <div className="ml-4">
                          <h3 className="text-2xl font-bold">Drawing Challenge</h3>
                          <p className="text-purple-100">Visualize concepts</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Trophy size={28} className="text-yellow-300 animate-pulse" />
                        <div className="text-sm bg-pink-400/20 px-3 py-1 rounded-full text-pink-200 animate-pulse">
                          CREATIVE
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardBody className="relative">
                    <div className="space-y-6">
                      <p className="text-purple-100 text-lg leading-relaxed">
                        Draw and guess medical terms, anatomical structures, and biological 
                        processes in this interactive pictionary-style game.
                      </p>
                      
                      <div className="space-y-3">
                        <div className="flex items-center text-purple-100 group/item">
                          <Target size={20} className="mr-3 text-green-400 group-hover/item:scale-110 transition-transform duration-200" />
                          <span>Visual learning reinforcement</span>
                        </div>
                        <div className="flex items-center text-purple-100 group/item">
                          <Heart size={20} className="mr-3 text-red-400 group-hover/item:scale-110 transition-transform duration-200" />
                          <span>Collaborative drawing tools</span>
                        </div>
                        <div className="flex items-center text-purple-100 group/item">
                          <Activity size={20} className="mr-3 text-blue-400 group-hover/item:scale-110 transition-transform duration-200" />
                          <span>Anatomy and biology focus</span>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3 pt-4">
                        <Link to="/draw/create">
                          <Button 
                            fullWidth 
                            className="bg-white/20 hover:bg-white/30 text-white border-white/30 hover:border-white/50 transition-all duration-300 transform hover:scale-105"
                          >
                            Create Room
                          </Button>
                        </Link>
                        <Link to="/draw/play">
                          <Button 
                            variant="outline" 
                            fullWidth 
                            className="border-white/30 text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                          >
                            Join Public
                          </Button>
                        </Link>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3">
                        <Link to="/draw/join">
                          <Button 
                            variant="secondary" 
                            fullWidth 
                            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 transition-all duration-300 transform hover:scale-105"
                          >
                            Join Private
                          </Button>
                        </Link>
                        <Link to="/draw/practice">
                          <Button 
                            variant="outline" 
                            fullWidth 
                            className="border-white/30 text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                          >
                            Practice Mode
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Features Section */}
        <div className="relative z-10 bg-gradient-to-b from-slate-800 to-slate-900 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-pulse">
                Why Choose 
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> NBG?</span>
              </h2>
              <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                The ultimate platform for NEET preparation with cutting-edge technology
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center group">
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
                  <div className="relative bg-gradient-to-r from-blue-500 to-purple-500 p-6 rounded-full w-24 h-24 mx-auto flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <Users size={40} className="text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Multiplayer Learning</h3>
                <p className="text-blue-200 leading-relaxed">
                  Study with friends or compete with students worldwide in real-time battles with advanced matchmaking.
                </p>
              </div>

              <div className="text-center group">
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
                  <div className="relative bg-gradient-to-r from-purple-500 to-pink-500 p-6 rounded-full w-24 h-24 mx-auto flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <Brain size={40} className="text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">NEET-Focused Content</h3>
                <p className="text-blue-200 leading-relaxed">
                  Curated questions and drawing prompts specifically designed for NEET success with AI-powered difficulty adjustment.
                </p>
              </div>

              <div className="text-center group">
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-400 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
                  <div className="relative bg-gradient-to-r from-green-500 to-blue-500 p-6 rounded-full w-24 h-24 mx-auto flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <Trophy size={40} className="text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Track Progress</h3>
                <p className="text-blue-200 leading-relaxed">
                  Monitor your improvement with detailed statistics, leaderboards, and personalized learning analytics.
                </p>
              </div>
            </div>

            {/* Enhanced Additional Features */}
            <div className="mt-20 grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <Shield className="w-8 h-8 text-blue-400 mr-3 animate-pulse" />
                  <h3 className="text-xl font-bold text-white">Secure & Private</h3>
                </div>
                <p className="text-blue-200">
                  Your data is protected with enterprise-grade security. Private rooms ensure focused study sessions.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-8 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <Star className="w-8 h-8 text-purple-400 mr-3 animate-pulse" />
                  <h3 className="text-xl font-bold text-white">Premium Experience</h3>
                </div>
                <p className="text-blue-200">
                  Enjoy a premium gaming experience with smooth animations, real-time updates, and intuitive controls.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Game Mode Selection Modal */}
        {showGameModeModal && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-in fade-in duration-300">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl max-w-md w-full border border-blue-500/30 animate-in zoom-in duration-300">
              <div className="flex items-center justify-between p-6 border-b border-blue-500/30">
                <h3 className="text-2xl font-bold text-white">Choose Your Battle Mode</h3>
                <button
                  onClick={() => setShowGameModeModal(false)}
                  className="text-blue-300 hover:text-white transition-colors duration-200"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="p-6 space-y-4">
                <button
                  onClick={() => handleGameModeSelect('mcq')}
                  className="w-full p-6 border-2 border-blue-500/30 rounded-xl hover:border-blue-400 hover:bg-blue-500/20 transition-all duration-300 group transform hover:scale-105"
                >
                  <div className="flex items-center">
                    <div className="relative mr-4">
                      <div className="absolute inset-0 bg-blue-400 rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
                      <div className="relative bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-full">
                        <Brain size={24} className="text-white" />
                      </div>
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-white text-lg">MCQ Quiz Battle</div>
                      <div className="text-blue-300 text-sm">Test your knowledge with timed questions</div>
                    </div>
                    <ArrowRight className="ml-auto text-blue-400 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </button>
                <button
                  onClick={() => handleGameModeSelect('draw')}
                  className="w-full p-6 border-2 border-purple-500/30 rounded-xl hover:border-purple-400 hover:bg-purple-500/20 transition-all duration-300 group transform hover:scale-105"
                >
                  <div className="flex items-center">
                    <div className="relative mr-4">
                      <div className="absolute inset-0 bg-purple-400 rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
                      <div className="relative bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full">
                        <Pencil size={24} className="text-white" />
                      </div>
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-white text-lg">Drawing Challenge</div>
                      <div className="text-purple-300 text-sm">Draw and guess medical concepts</div>
                    </div>
                    <ArrowRight className="ml-auto text-purple-400 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default HomePage;