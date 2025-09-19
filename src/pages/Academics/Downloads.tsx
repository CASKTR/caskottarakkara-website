import React, { useEffect, useRef, useState } from "react";
import { ChevronRight } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const DownloadsPage: React.FC = () => {
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
        activeSection="academics"
        onNavigate={noopNavigate}
        scrollY={scrollY}
        isHidden={isNavHidden}
      />

      {/* Page title band */}
      <section className="pt-[155px] md:pt-[170px] lg:pt-[185px] bg-gradient-to-br from-blue-800 to-indigo-950 text-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center text-sm text-white/80 mb-3">
            <span className="hover:text-white transition-colors">
              Academics
            </span>
            <ChevronRight className="mx-2 h-4 w-4 opacity-70" />
            <span className="text-white">Downloads</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">Downloads</h1>
          <p className="mt-2 text-white/90 max-w-2xl">
            Find important forms, documents, and resources for students and
            staff.
          </p>
        </div>
      </section>

      {/* Downloads content */}
      <section className="flex-1 py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white shadow-xl ring-1 ring-gray-100 p-6 md:p-10">
            {/* Downloads details go here */}
            <h2 className="text-2xl font-semibold mb-4">Available Downloads</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Application Forms</li>
              <li>Academic Calendar</li>
              <li>Exam Schedules</li>
              <li>Brochures & Prospectus</li>
            </ul>
            <p className="mt-6 text-gray-600">
              For additional documents, please contact the Academic Office.
            </p>
          </div>
        </div>
      </section>

      <Footer onNavigate={noopNavigate} />
    </div>
  );
};

export default DownloadsPage;
