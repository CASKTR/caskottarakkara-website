import React, { useEffect, useState } from "react";
import { ChevronRight, Award, Users, BookOpen, Globe } from "lucide-react";

interface HeroProps {
  onNavigate: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  // --- Stats with animated numbers ---
  const stats = [
    { icon: Users, label: "Students Enrolled", value: 160, suffix: "+" },
    { icon: BookOpen, label: "Academic Programs", value: 5, suffix: "+" },
    { icon: Award, label: "Years of Excellence", value: 3, suffix: "+" },
    { icon: Globe, label: "Alumni Network", value: 0, suffix: "+" },
  ];

  // Fade-in effect for hero content
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden mt-[140px] md:mt-[150px] lg:mt-[15A0px]">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop"
          alt="College Campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/70 to-indigo-900/80"></div>
      </div>

      {/* Content (fade-in effect) */}
      <div
        className={`relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 text-center transition-all duration-700 ${
          visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-2 relative inline-block">
            <span className="block">College of</span>
            <span className="block mt-2">Applied Science</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-200 mb-4 max-w-3xl mx-auto leading-relaxed">
            <span className="font-bold text-3xl md:text-5xl text-white">
              Kottarakkara
            </span>
          </p>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Empowering minds, fostering innovation, and building tomorrow's
            leaders through excellence in education, research, and community
            service.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button
              onClick={() => {
                const aboutSection = document.getElementById("overview");
                if (aboutSection) {
                  aboutSection.scrollIntoView({ behavior: "smooth" });
                } else {
                  onNavigate("overview");
                }
              }}
              className="group hero-shine-btn bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2 hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Discover Our Story
              <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button
              onClick={() => onNavigate("admissions")}
              className="group hero-shine-btn bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 hover:border-white/50 transform hover:scale-105 transition-all duration-300"
            >
              Apply Now
            </button>

            {/* --- Button Shine/Spark Sweep Effect CSS --- */}
            <style>{`
              .hero-shine-btn {
                position: relative;
                overflow: hidden;
              }
              .hero-shine-btn::before {
                content: '';
                position: absolute;
                top: 0;
                left: -60%;
                width: 60%;
                height: 100%;
                background: linear-gradient(120deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0) 100%);
                transform: skewX(-20deg);
                pointer-events: none;
              }
              .hero-shine-btn:hover::before {
                animation: heroShineSweep 0.7s cubic-bezier(0.77,0,0.175,1);
              }
              @keyframes heroShineSweep {
                0% {
                  left: -60%;
                }
                100% {
                  left: 120%;
                }
              }
            `}</style>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full mb-4 group-hover:bg-white/20 transition-all duration-300">
                  <stat.icon className="h-8 w-8 text-yellow-400 stat-icon-pop" />
                </div>

                {/* --- Stat Icon Pop/Bounce Animation CSS --- */}
                <style>{`
                  .stat-icon-pop {
                    animation: statPopBounce 0.7s cubic-bezier(.34,1.56,.64,1) both;
                  }
                  @keyframes statPopBounce {
                    0% {
                      transform: scale(0.7);
                      opacity: 0;
                    }
                    60% {
                      transform: scale(1.15);
                      opacity: 1;
                    }
                    80% {
                      transform: scale(0.95);
                    }
                    100% {
                      transform: scale(1);
                    }
                  }
                `}</style>
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.value}
                  {stat.suffix}
                </div>
                <div className="text-blue-200 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-400/20 rounded-full blur-xl animate-pulse animation-delay-1000"></div>
      <div className="absolute top-1/2 left-5 w-16 h-16 bg-indigo-400/20 rounded-full blur-xl animate-pulse animation-delay-2000"></div>
    </section>
  );
};

export default Hero;
