import React, { useEffect, useRef, useState } from "react";
import { Mail, ChevronRight } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import facultyDataJson from "../../../public/assets/FacultyData/departmentfacultydata.json";

const AdministrativeStaffPage: React.FC = () => {
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
        activeSection="administration"
        onNavigate={noopNavigate}
        scrollY={scrollY}
        isHidden={isNavHidden}
      />

      {/* Page title band */}
      <section className="pt-[155px] md:pt-[170px] lg:pt-[185px] bg-gradient-to-br from-blue-800 to-indigo-950 text-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-10">
          <div className="flex items-center text-sm text-white/80 mb-3">
            <span className="hover:text-white transition-colors">
              Administration
            </span>
            <ChevronRight className="mx-2 h-4 w-4 opacity-70" />
            <span className="text-white">Administrative Staff</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">
            Administrative Staff
          </h1>
          <p className="mt-2 text-white/90 max-w-2xl">
            Supporting academic excellence through efficient administration.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="flex-1 py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white shadow-xl ring-1 ring-gray-100 p-6 md:p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {facultyDataJson.administrativestaff.map(
                (administrativestaff: any, index: number) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group ring-1 ring-gray-100"
                  >
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {administrativestaff.name}
                      </h3>
                      {administrativestaff.designation && (
                        <p className="text-blue-600 font-semibold mb-2">
                          {administrativestaff.designation}
                        </p>
                      )}
                      <div className="space-y-2 mb-4"></div>
                      <div className="space-y-2 border-t pt-4">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Mail className="h-4 w-4 text-blue-500" />
                          <span>{administrativestaff.email}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer onNavigate={noopNavigate} />
    </div>
  );
};

export default AdministrativeStaffPage;
