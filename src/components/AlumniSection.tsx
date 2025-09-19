import React, { useEffect, useRef, useState } from "react";
import { ChevronRight, Users } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AlumniSection: React.FC = () => {
  // Scroll and navbar logic
  const [scrollY, setScrollY] = useState(0);
  const [isNavHidden, setIsNavHidden] = useState(false);
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const isScrollingDown = currentY > lastScrollYRef.current;
      setIsNavHidden(isScrollingDown && currentY > 60);
      lastScrollYRef.current = currentY;
      setScrollY(currentY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const noopNavigate = () => {};

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header
        activeSection="alumni"
        onNavigate={noopNavigate}
        scrollY={scrollY}
        isHidden={isNavHidden}
      />

      {/* Page title band */}
      <section className="pt-[155px] md:pt-[170px] lg:pt-[185px] bg-gradient-to-br from-blue-800 to-indigo-950 text-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-10">
          <div className="flex items-center text-sm text-white/80 mb-3">
            <span className="hover:text-white transition-colors">Alumni</span>
            <ChevronRight className="mx-2 h-4 w-4 opacity-70" />
            <span className="text-white">Our Graduates</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">Alumni Network</h1>
          <p className="mt-2 text-white/90 max-w-2xl">
            Stay connected with our growing community of successful graduates.
          </p>
        </div>
      </section>

      {/* AlumniSection content */}
      <section className="flex-1 py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Alumni Network
            </h2>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-16 shadow-lg">
              <div className="flex justify-center mb-6">
                <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center">
                  <Users className="h-12 w-12 text-white" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Alumni Details Will Be Updated Soon
              </h3>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                We are currently working on updating our alumni database and
                information. Please check back soon for detailed alumni
                profiles, achievements, and networking opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer onNavigate={noopNavigate} />
    </div>
  );
};

export default AlumniSection;
