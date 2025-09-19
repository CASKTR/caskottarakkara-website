import React, { useState, useEffect, useRef } from "react";
import { CalendarDays, AlertCircle, ChevronDown, ChevronRight } from "lucide-react";
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const academicCalendar34 = [
  { no: 1, item: "Commencement of classes", date: "June 2, 2025" },
  { no: 2, item: "Course Registration", date: "Up to June 13, 2025" },
  { no: 3, item: "College Union Election", date: "Before August 30, 2025" },
  { no: 4, item: "Exam Registration", date: "On or before September 30, 2024" },
  { no: 5, item: "First Semester Examination Timetable", date: "October 15, 2025" },
  { no: 6, item: "End of regular classes of 3rd semester", date: "October 8, 2025" },
  { no: 7, item: "Finalization of Internal Assessment Mark", date: "Before October 10, 2025" },
  { no: 8, item: "Commencement of 4th Semester", date: "October 9, 2025" },
  { no: 9, item: "3rd Semester Examinations", date: "November 3–18, 2025" },
  { no: 10, item: "Publication of 3rd Semester Examination Results", date: "On or before December 15, 2025" },
  { no: 11, item: "Resume of 4th Semester", date: "November 27, 2025" },
  { no: 12, item: "Sports (College/ University Level)", date: "Before December 19, 2025" },
  { no: 13, item: "Arts Festival (College/ University Level)", date: "Before January 31, 2026" },
  { no: 14, item: "Interuniversity Youth and Sports Festival", date: "Before February 28, 2026" },
  { no: 15, item: "Last working day of 4th semester", date: "March 31, 2026" },
  { no: 16, item: "Finalisation of Internal Marks", date: "March 31, 2026" },
  { no: 17, item: "4th Semester Examination", date: "April 6–24, 2026" },
  { no: 18, item: "Publication of 4th Semester Examination Results", date: "On or before May 25, 2026" },
  { no: 19, item: "Internship", date: "May 2026" }
];

const AcademicCalendar: React.FC = () => {
  const [selectedCalendar, setSelectedCalendar] = useState("34");
  const [openDropdown, setOpenDropdown] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isNavHidden, setIsNavHidden] = useState(false);
  const lastScrollYRef = useRef(0);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSelect = (value: string) => {
    setSelectedCalendar(value);
    setOpenDropdown(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const isScrollingDown = currentY > lastScrollYRef.current;
      setIsNavHidden(isScrollingDown && currentY > 60);
      lastScrollYRef.current = currentY;
      setScrollY(currentY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const noopNavigate = () => { };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header activeSection="academics" onNavigate={noopNavigate} scrollY={scrollY} isHidden={isNavHidden} />

      {/* Page title band */}
      <section className="pt-[155px] md:pt-[170px] lg:pt-[185px] bg-gradient-to-br from-blue-800 to-indigo-950 text-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-10">
          <div className="flex items-center text-sm text-white/80 mb-3">
            <span className="hover:text-white transition-colors">Academics</span>
            <ChevronRight className="mx-2 h-4 w-4 opacity-70" />
            <span className="text-white">Academic Calendar</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">Academic Calendar</h1>
          <p className="mt-2 text-white/90 max-w-2xl">Stay updated with important academic dates and schedules.</p>
        </div>
      </section>

      {/* Content */}
      <section className="flex-1 py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white shadow-xl ring-1 ring-gray-100 p-6 md:p-8">

            {/* Dropdown Selection */}
            <div className="text-center mb-8">
              <p className="text-gray-600 mb-4">
                Select the semester set to view the schedule.
              </p>

              {/* Custom Dropdown */}
              <div ref={dropdownRef} className="relative inline-block text-left">
                <button
                  type="button"
                  onClick={() => setOpenDropdown(!openDropdown)}
                  className="flex items-center justify-between w-72 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-700 shadow-sm hover:bg-gray-50 transition focus:outline-none"
                >
                  {selectedCalendar === "34"
                    ? "Semester 3&4 (2024 Admission)"
                    : "Semester 1&2 (2025 Admission)"}
                  <ChevronDown
                    size={18}
                    className={`ml-2 transition-transform ${openDropdown ? "rotate-180" : ""}`}
                  />
                </button>

                <div
                  className={`absolute left-0 mt-2 w-72 rounded-lg bg-white border border-gray-200 shadow-lg overflow-hidden transition-all duration-300 ease-in-out z-[9999] ${openDropdown
                    ? 'opacity-100 visible translate-y-0'
                    : 'opacity-0 invisible -translate-y-2'
                    }`}
                  style={{ transformOrigin: "top" }}
                >
                  <div
                    onClick={() => handleSelect("34")}
                    className={`px-4 py-2 cursor-pointer transition-all duration-200 ${selectedCalendar === "34"
                      ? 'bg-blue-50 text-blue-700'
                      : 'hover:bg-gray-50 hover:text-gray-900'
                      }`}
                  >
                    Semester 3&4 (2024 Admission)
                  </div>
                  <div
                    onClick={() => handleSelect("12")}
                    className={`px-4 py-2 cursor-pointer transition-all duration-200 ${selectedCalendar === "12"
                      ? 'bg-blue-50 text-blue-700'
                      : 'hover:bg-gray-50 hover:text-gray-900'
                      }`}
                  >
                    Semester 1&2 (2025 Admission)
                  </div>
                </div>
              </div>
            </div>

            {/* Calendar Content */}
            <div key={selectedCalendar} className="animate-slideFadeIn">
              {selectedCalendar === "34" ? (
                <div className="overflow-x-auto rounded-xl shadow-lg border border-gray-200 bg-white">
                  <table className="w-full text-sm text-left">
                    <thead className="bg-blue-600 text-white">
                      <tr>
                        <th className="px-4 py-3">No.</th>
                        <th className="px-4 py-3">Event</th>
                        <th className="px-4 py-3">Date</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {academicCalendar34.map((entry, index) => (
                        <tr
                          key={entry.no}
                          className="hover:bg-gray-50 transition-all duration-200"
                          style={{
                            animation: `fadeInUp 0.3s ease ${index * 0.05}s forwards`,
                            opacity: 0
                          }}
                        >
                          <td className="px-4 py-3 font-medium">{entry.no}</td>
                          <td className="px-4 py-3">{entry.item}</td>
                          <td className="px-4 py-3 flex items-center gap-2">
                            <CalendarDays size={16} className="text-blue-600" />
                            {entry.date}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center bg-white rounded-xl shadow-lg border border-gray-200 py-12">
                  <AlertCircle size={48} className="text-blue-600 mb-3" />
                  <h2 className="text-xl font-semibold text-gray-700">
                    Calendar To Be Announced
                  </h2>
                  <p className="text-gray-500 mt-2 text-center px-4">
                    The schedule for Semester 1 & 2 (2025 Admission) will be updated soon.
                    Please check back later.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer onNavigate={noopNavigate} />

      {/* Animations */}
      <style>{`
        @keyframes slideFadeIn {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-slideFadeIn {
          animation: slideFadeIn 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default AcademicCalendar;
