import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function LandingPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/15 to-purple-400/15 rounded-full blur-3xl animate-bounce" style={{ animationDuration: '3s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-pink-400/10 to-rose-400/10 rounded-full blur-3xl animate-ping" style={{ animationDuration: '4s' }}></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        {/* Mouse Following Light */}
        <div 
          className="absolute w-96 h-96 bg-gradient-radial from-yellow-400/20 via-transparent to-transparent rounded-full blur-3xl pointer-events-none transition-all duration-300 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        ></div>
      </div>

      {/* Main Content */}
      <div className={`relative z-10 min-h-screen flex items-center justify-center px-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-6xl w-full text-center">
          {/* Hero Section */}
          <div className="mb-16">
            {/* Glowing Star Icon with Animation */}
            <div className="flex justify-center mb-12">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-xl opacity-75 animate-pulse group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-r from-yellow-400 to-orange-500 p-6 rounded-full transform hover:scale-110 transition-transform duration-300">
                  <svg 
                    className="w-16 h-16 text-white drop-shadow-lg" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                {/* Orbiting Elements */}
                <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
                  <div className="absolute top-0 left-1/2 w-2 h-2 bg-yellow-300 rounded-full -translate-x-1/2 -translate-y-8"></div>
                  <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-orange-300 rounded-full -translate-x-1/2 translate-y-8"></div>
                  <div className="absolute left-0 top-1/2 w-2 h-2 bg-pink-300 rounded-full -translate-x-8 -translate-y-1/2"></div>
                  <div className="absolute right-0 top-1/2 w-2 h-2 bg-blue-300 rounded-full translate-x-8 -translate-y-1/2"></div>
                </div>
              </div>
            </div>

            {/* Main Title with Gradient Text */}
            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-yellow-200 to-orange-300 bg-clip-text text-transparent drop-shadow-2xl">
                Powerful tools
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">
                for everything
              </span>
              <br />
              <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 bg-clip-text text-transparent">
                schedule related
              </span>
            </h1>

            {/* Floating Cards with Features */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 max-w-6xl mx-auto">
              {[
                { icon: "📅", title: "Smart Planning", desc: "AI-powered semester scheduling", color: "from-blue-500 to-cyan-500" },
                { icon: "⚡", title: "Lightning Fast", desc: "Instant schedule optimization", color: "from-yellow-500 to-orange-500" },
                { icon: "👥", title: "Social Sharing", desc: "Share with friends seamlessly", color: "from-green-500 to-teal-500" },
                { icon: "📁", title: "Export Anywhere", desc: "iCal, PDF, and more formats", color: "from-purple-500 to-pink-500" }
              ].map((feature, index) => (
                <div 
                  key={index}
                  className={`group relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl ${isVisible ? 'animate-fade-in-up' : ''}`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-white/70 text-sm">{feature.desc}</p>
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
                </div>
              ))}
            </div>

            {/* Subtitle with Typewriter Effect */}
            <div className="text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              <p className="mb-6">
                Become a superhuman with powerful tools at{' '}
                <span className="relative">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent font-bold text-3xl">
                    studyflow.dev
                  </span>
                  <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 blur-xl rounded-lg"></div>
                </span>
              </p>
            </div>

            {/* Action Buttons with Amazing Effects */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Link
                to="/login"
                className="group relative bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold py-5 px-12 rounded-2xl text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  <svg className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                  Your Schedule
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300"></div>
              </Link>
              
              <Link
                to="/register"
                className="group relative bg-white/10 backdrop-blur-lg border-2 border-white/30 text-white font-bold py-5 px-12 rounded-2xl text-xl transition-all duration-300 transform hover:scale-105 hover:bg-white/20 hover:shadow-2xl overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  <svg className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                  Build Schedule
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-3 gap-8 mb-16 max-w-2xl mx-auto">
            {[
              { number: "10K+", label: "Students" },
              { number: "500+", label: "Universities" },
              { number: "99.9%", label: "Uptime" }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl font-black bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-white/70 uppercase tracking-wide text-sm font-semibold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Footer with Social Proof */}
          <div className="text-center">
            <div className="flex justify-center items-center text-white/60 mb-4">
              <div className="flex -space-x-2 mr-4">
                {[1,2,3,4,5].map(i => (
                  <div key={i} className={`w-10 h-10 bg-gradient-to-r from-yellow-${400 + i*100} to-orange-${400 + i*100} rounded-full border-2 border-white/30`}></div>
                ))}
              </div>
              <span className="text-sm">Trusted by thousands of students worldwide</span>
            </div>
            
            <div className="flex justify-center items-center text-white/40 text-sm">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              Built with ❤️ for students
            </div>
          </div>
        </div>
      </div>

      {/* Additional CSS for custom animations */}
      <style jsx>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px);
          background-size: 20px 20px;
        }
        
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

export default LandingPage;