import React, { useEffect, useRef, useState } from "react";
import { ChevronRight } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const IQAC: React.FC = () => {
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
        activeSection="iqac"
        onNavigate={noopNavigate}
        scrollY={scrollY}
        isHidden={isNavHidden}
      />
      {/* Page title band */}
      <section className="pt-[140px] md:pt-[160px] lg:pt-[180px] bg-gradient-to-br from-blue-800 to-indigo-950 text-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center text-sm text-white/80 mb-3">
            <span className="hover:text-white transition-colors">
              Academics
            </span>
            <ChevronRight className="mx-2 h-4 w-4 opacity-70" />
            <span className="text-white">IQAC</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">
            Internal Quality Assurance Cell (IQAC)
          </h1>
          <p className="mt-2 text-white/90 max-w-2xl">
            Committed to excellence in education and continuous quality
            enhancement.
          </p>
        </div>
      </section>
      <main className="bg-white">
        {/* College Introduction */}
        <section className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                About College of Applied Science, Kottarakkara
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            </div>
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
              <p className="text-center">
                The College of Applied Science (CAS), Kottarakkara, established
                in 2023, operates under the Institute of Human Resources
                Development (IHRD), a Government of Kerala initiative. The
                college is affiliated with the University of Kerala and offers a
                range of undergraduate and postgraduate programs in disciplines
                such as Computer Science, Psychology, Commerce and Journalism.
              </p>
            </div>
          </div>
        </section>

        {/* IQAC Overview */}
        <section className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 pb-12">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              IQAC Overview
            </h2>
            <p className="text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
              The Internal Quality Assurance Cell (IQAC) at CAS Kottarakkara is
              integral to the institution's commitment to maintaining and
              enhancing academic and administrative standards. Under the
              leadership of Dr. Murali. V.S, the Principal, the IQAC is actively
              involved in various quality assurance initiatives, including the
              preparation for NAAC accreditation. These efforts aim to improve
              teaching, learning, research, infrastructure, and industry
              collaborations.
            </p>
          </div>
        </section>

        {/* Core Committee */}
        <section className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 pb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              IQAC Core Committee
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Principal
              </h3>
              <p className="text-blue-600 font-medium">Dr. Murali. V.S</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Co-ordinator
              </h3>
              <p className="text-green-600 font-medium">Ms. Anzalna .H</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Joint Co-Ordinator
              </h3>
              <p className="text-purple-600 font-medium">Ms. Jincy Johnson</p>
            </div>
          </div>
        </section>

        {/* Aims & Objectives and Programs */}
        <section className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 pb-12">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Aims & Objectives */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Aims & Objectives
              </h3>
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-500">
                  <h4 className="font-semibold text-blue-900 mb-3 flex items-center">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                    Quality Enhancement
                  </h4>
                  <p className="text-blue-800 text-sm leading-relaxed">
                    Ensure continuous improvement in teaching-learning process
                    and overall institutional development through systematic
                    quality measures.
                  </p>
                </div>

                <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-500">
                  <h4 className="font-semibold text-green-900 mb-3 flex items-center">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                    Academic Standards
                  </h4>
                  <p className="text-green-800 text-sm leading-relaxed">
                    Maintain and enhance academic standards through regular
                    monitoring, evaluation, and implementation of best
                    practices.
                  </p>
                </div>

                <div className="bg-purple-50 rounded-xl p-6 border-l-4 border-purple-500">
                  <h4 className="font-semibold text-purple-900 mb-3 flex items-center">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                    NAAC Accreditation
                  </h4>
                  <p className="text-purple-800 text-sm leading-relaxed">
                    Prepare for NAAC accreditation and promote adoption of best
                    practices in curriculum design, pedagogy, and assessment.
                  </p>
                </div>
              </div>
            </div>

            {/* Key Initiatives */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Key Initiatives
              </h3>
              <div className="space-y-3">
                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                    Faculty Development Programs
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Regular training sessions on modern teaching methodologies
                    and educational technologies.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                    Student Feedback Analysis
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Systematic collection and analysis of student feedback for
                    continuous improvement.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-purple-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    Curriculum Review Meetings
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Regular review and updating of curriculum to meet current
                    industry needs and standards.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-orange-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5H7a2 2 0 00-2 2v6a2 2 0 002 2h2m0-8H5m0 8h8m-5-2a2 2 0 11-4 0 2 2 0 014 0zm0 0V5a2 2 0 012-2h8a2 2 0 012 2v6.5"
                      />
                    </svg>
                    Quality Audit Programs
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Internal and external audits to ensure adherence to quality
                    standards and procedures.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-red-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                    Industry Collaborations
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Strengthening partnerships with industry for enhanced
                    learning and placement opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer onNavigate={noopNavigate} />
    </div>
  );
};

export default IQAC;
