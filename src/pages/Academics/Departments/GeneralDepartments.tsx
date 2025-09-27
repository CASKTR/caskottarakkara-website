import React, { useEffect, useRef, useState } from "react";
import { ChevronRight, Code, Phone, Mail } from "lucide-react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import facultyDataJson from "../../../../public/assets/FacultyData/departmentfacultydata.json";

const GeneralDepartmentsPage: React.FC = () => {
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
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-10">
          <div className="flex items-center text-sm text-white/80 mb-3">
            <span className="hover:text-white transition-colors">
              Academics
            </span>
            <ChevronRight className="mx-2 h-4 w-4 opacity-70" />
            <span className="text-white">Departments</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">
            General Departments{" "}
          </h1>
          <p className="mt-2 text-white/90 max-w-2xl">
            Essential courses that build a strong base for students across all
            disciplines.{" "}
          </p>
        </div>
      </section>

      {/* Main content */}

      <div className="flex-1 py-8">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 space-y-16">
          {/* About Department Section */}
          <section id="about">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-3xl font-bold text-gray-900 mb-4">
                About Our Department
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            </div>

            <div className="space-y-8">
              {/* Department Overview */}
              <div className="rounded-3xl bg-white shadow-xl ring-1 ring-gray-100 p-6 md:p-10">
                <div className="flex items-start space-x-4">
                  <Code className="h-8 w-8 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Department Overview
                    </h3>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                      The General Department serves as the academic foundation
                      of the institution, offering essential courses that build
                      a strong base for students across all disciplines. Our
                      department focuses on core subjects such as Mathematics,
                      Zoology, English, Malayalam and Humanities, which play a
                      vital role in shaping well-rounded graduates.
                    </p>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                      We are committed to delivering high-quality education,
                      fostering analytical skills, critical thinking,
                      communication abilities, and scientific temper among
                      students. By integrating traditional teaching methods with
                      modern learning tools, the department ensures that
                      students are prepared to excel in their specialized fields
                      and future careers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Faculty Section */}
          <section id="faculty">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-3xl font-bold text-black-900 mb-4">
                Our Distinguished Faculty
              </h2>
              <div className="w-24 h-1 bg-blue-600 rounded  mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Meet our dedicated team of educators and researchers who are
                committed to excellence in teaching and innovation
              </p>
            </div>

            <div className="rounded-3xl bg-white shadow-xl ring-1 ring-gray-100 p-6 md:p-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {facultyDataJson.genraldepartmentfaculty.map(
                  (genraldepartmentfaculty: any, index: number) => (
                    <div
                      key={index}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group ring-1 ring-gray-100"
                    >
                      <div className="relative">
                        <img
                          src={genraldepartmentfaculty.image}
                          alt={genraldepartmentfaculty.name}
                          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                          {genraldepartmentfaculty.name}
                        </h3>
                        <p className="text-blue-600 font-semibold mb-2">
                          {genraldepartmentfaculty.designation}
                        </p>
                        <p className="text-gray-600 text-sm mb-3">
                          {genraldepartmentfaculty.qualifications}
                        </p>

                        <div className="space-y-2 border-t pt-4">
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Phone className="h-4 w-4 text-blue-500" />
                            <span>{genraldepartmentfaculty.phone}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Mail className="h-4 w-4 text-blue-500" />
                            <span>{genraldepartmentfaculty.email}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer onNavigate={noopNavigate} />
    </div>
  );
};

export default GeneralDepartmentsPage;
