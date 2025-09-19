import React, { useEffect, useRef, useState } from "react";
import { FileText, Download, ChevronRight } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const feeStructure = [
  {
    program: "BSc Psychology",
    fees: {
      tuition: 17270,
      admission: 330,
      caution: 1000,
      firstSemesterTotal: 18600,
      subsequentSemesters: 17270,
    },
  },
  {
    program: "BSc Computer Science",
    fees: {
      tuition: 17270,
      admission: 330,
      caution: 1000,
      firstSemesterTotal: 18600,
      subsequentSemesters: 17270,
    },
  },
  {
    program: "B.Com",
    fees: {
      tuition: 13035,
      admission: 330,
      caution: 1000,
      firstSemesterTotal: 14365,
      subsequentSemesters: 13035,
    },
  },
  {
    program: "BA Journalism and Mass Communication",
    fees: {
      tuition: 8470,
      admission: 330,
      caution: 1000,
      firstSemesterTotal: 9800,
      subsequentSemesters: 8470,
    },
  },
];

const FeeStructure: React.FC = () => {
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
        activeSection="admissions"
        onNavigate={noopNavigate}
        scrollY={scrollY}
        isHidden={isNavHidden}
      />

      {/* Page title band */}
      <section className="pt-[155px] md:pt-[170px] lg:pt-[185px] bg-gradient-to-br from-blue-800 to-indigo-950 text-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-10">
          <div className="flex items-center text-sm text-white/80 mb-3">
            <span className="hover:text-white transition-colors cursor-pointer">
              Admissions & Fee
            </span>
            <ChevronRight className="mx-2 h-4 w-4 opacity-70" />
            <span className="text-white">Fee Structure</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">
            Fee Structure 2024–25
          </h1>
          <p className="mt-2 text-white/90 max-w-2xl">
            All fees are in Indian Rupees (INR) per semester.
          </p>
        </div>
      </section>

      <main className="flex-1 py-16 sm:py-20">
        <section className="bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Programs Grid */}
            <div className="grid lg:grid-cols-2 gap-8">
              {feeStructure.map((programFee, index) => (
                <div key={index} className="group relative">
                  {/* Program Card */}
                  <div className="bg-white/70 backdrop-blur-sm border border-white/40 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                    {/* Program Header */}
                    <div className="relative bg-gradient-to-r from-blue-700 via-blue-600 to-blue-400 p-8">
                      <div className="absolute inset-0 bg-black/10"></div>
                      <div className="relative">
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {programFee.program}
                        </h3>
                        <div className="w-20 h-1 bg-white/50 rounded-full"></div>
                      </div>
                    </div>

                    {/* Fee Cards Container */}
                    <div className="p-8 space-y-6">
                      {/* First Semester Card */}
                      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-6 border border-blue-200/50">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="text-lg font-bold text-gray-800">
                            First Semester
                          </h4>
                          <div className="px-3 py-1 bg-blue-500 text-white text-xs font-semibold rounded-full">
                            Initial Payment
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600 font-medium">
                              Tuition Fee
                            </span>
                            <span className="font-bold text-gray-800">
                              ₹{programFee.fees.tuition.toLocaleString()}
                            </span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600 font-medium">
                              Admission Fee
                            </span>
                            <span className="font-bold text-gray-800">
                              ₹{programFee.fees.admission.toLocaleString()}
                            </span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600 font-medium">
                              Caution Deposit
                            </span>
                            <span className="font-bold text-gray-800">
                              ₹{programFee.fees.caution.toLocaleString()}
                            </span>
                          </div>
                          <div className="h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent my-3"></div>
                          <div className="flex justify-between items-center bg-white rounded-xl p-4 shadow-sm">
                            <span className="text-lg font-bold text-gray-900">
                              Total Amount
                            </span>
                            <span className="text-2xl font-bold text-black">
                              ₹
                              {programFee.fees.firstSemesterTotal.toLocaleString()}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Subsequent Semesters Card */}
                      <div className="bg-gradient-to-br from-emerald-50 to-green-100 rounded-2xl p-6 border border-green-200/50">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="text-lg font-bold text-gray-800">
                            From II Semester
                          </h4>
                          <div className="px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full">
                            Recurring
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600 font-medium">
                              Tuition Fee
                            </span>
                            <span className="font-bold text-gray-800">
                              ₹
                              {programFee.fees.subsequentSemesters.toLocaleString()}
                            </span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600 font-medium">
                              Exam Fee
                            </span>
                            <span className="font-bold text-gray-500 italic">
                              As applicable
                            </span>
                          </div>
                          <div className="h-px bg-gradient-to-r from-transparent via-green-300 to-transparent my-3"></div>
                          <div className="flex justify-between items-center bg-white rounded-xl p-4 shadow-sm">
                            <span className="text-lg font-bold text-gray-900">
                              Per Semester
                            </span>
                            <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                              ₹
                              {programFee.fees.subsequentSemesters.toLocaleString()}
                              *
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Quick Info */}
                      <div className="flex items-center gap-2 text-sm text-gray-500 bg-gray-50 rounded-xl p-3">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                        <span>
                          *Plus applicable exam fees | Caution deposit is fully
                          refundable
                        </span>
                      </div>
                    </div>

                    {/* Hover Effect Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl pointer-events-none"></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary Section */}
            <div className="mt-16">
              <div className="bg-white/80 backdrop-blur-sm border border-white/50 rounded-3xl p-8 shadow-xl">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                    Fee Summary Overview
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Quick comparison across all programs
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {feeStructure.map((program, index) => (
                    <div
                      key={index}
                      className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                      <h4 className="font-bold text-gray-800 mb-4 text-sm">
                        {program.program}
                      </h4>
                      <div className="space-y-2">
                        <div className="text-2xl font-bold text-blue-600">
                          ₹{program.fees.firstSemesterTotal.toLocaleString()}
                        </div>
                        <div className="text-xs text-gray-500">
                          First Semester
                        </div>
                        <div className="text-lg font-semibold text-green-600">
                          ₹{program.fees.subsequentSemesters.toLocaleString()}
                        </div>
                        <div className="text-xs text-gray-500">
                          Subsequent Semesters
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Fee Refund Policy*/}
            <div className="mt-16">
              <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                <div className="bg-gray-100 p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gray-200 rounded-2xl flex items-center justify-center">
                      <FileText className="h-7 w-7 text-blue-500" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-800">
                        Fee Refund Policy
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center text-center bg-white rounded-2xl p-8">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-5">
                    <Download className="h-8 w-8 text-blue-500" />
                  </div>
                  <h6 className="font-bold text-gray-800 mb-2">
                    Download Complete Policy
                  </h6>
                  <p className="text-gray-600 text-sm mb-5">
                    Get the detailed refund policy document with all terms and
                    conditions
                  </p>
                  <button className="bg-blue-100 text-blue-700 px-7 py-3 rounded-xl font-semibold flex items-center gap-2 hover:bg-blue-200 transition-all duration-200 shadow-sm">
                    <Download className="h-5 w-5" />
                    Download PDF
                  </button>
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

export default FeeStructure;
