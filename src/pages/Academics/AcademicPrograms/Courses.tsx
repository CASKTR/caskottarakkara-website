import React, { useState, useRef, useEffect } from "react";
import {
  GraduationCap,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  BookOpen,
  ArrowRight,
  Users,
  Clock,
  Target,
  Briefcase,
  Award,
} from "lucide-react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

const programs = {
  undergraduate: [
    {
      name: "B.Sc. Computer Science (Honours with Research)",
      duration: "4 years",
      intake: 32,
      stream: "Science Stream",
      fullDescription:
        "The B.Sc. Computer Science (Honours with Research) is a prestigious undergraduate programme offered by the University of Kerala under the science stream. It is tailored for students who have completed 10+2 and are passionate about building a career in Computing or Information Technology. This programme equips students with a strong foundation in computer science, preparing them for both higher education and professional careers.",
      highlights: [
        "Attracts young minds to the dynamic field of computer applications",
        "Provides robust foundation for advanced studies",
        "Focuses on developing practical software development skills",
        "Fosters industry readiness",
        "Enhances communication skills in English for global workplace",
      ],
      pathways: [
        "MCA",
        "M.Sc. (Computer Science)",
        "M.Sc. (IT)",
        "MBA",
        "Related fields at University of Kerala or other reputed institutions",
      ],
      careers: [
        "Entry-level positions in IT and IT-enabled Services (ITES)",
        "Self-employed entrepreneurs in software market",
        "Advanced studies preparation",
        "Global technology industry roles",
      ],
      coreAreas: [
        "Programming Languages",
        "Data Structures",
        "Design and Analysis of Algorithms",
        "Database Management Systems (DBMS)",
        "Computer Graphics",
        "Internet of Things (IoT)",
        "Artificial Intelligence (AI)",
      ],
      structure:
        "8 semesters over four years with 90 instructional days per semester, 5 hours of instruction per day, five days a week. Semester-end examinations conducted by the University.",
    },
    {
      name: "B.Com Finance and Accounting (Honours with Research)",
      duration: "4 years",
      intake: 40,
      stream: "Commerce Stream",
      fullDescription:
        "The B.Com Finance and Accounting (Honours with Research) is an undergraduate programme under the commerce stream offered by the University of Kerala. It is designed for students who have completed 10+2 and wish to pursue a career in finance, accounting, or related business fields. This programme provides students with a strong foundation in financial principles, accounting practices, and business management.",
      highlights: [
        "Strong foundation in financial principles and accounting practices",
        "Business management focus",
        "Analytical and problem-solving skills development",
        "Managerial skills enhancement",
        "Prepares for corporate, banking, and financial sectors",
      ],
      pathways: [
        "M.Com",
        "MBA",
        "Other master's programmes at University of Kerala",
        "Reputed universities in India and abroad",
      ],
      careers: [
        "Accounting firms",
        "Corporate finance departments",
        "Banking institutions",
        "Entrepreneurial ventures",
        "Financial sector roles",
      ],
      coreAreas: [
        "Financial principles",
        "Accounting practices",
        "Business management",
        "Analytical skills",
        "Problem-solving",
        "Managerial skills",
      ],
      structure:
        "8 semesters with 90 instructional days each, following five-day week with five hours of instruction per day. Semester-end examinations conducted by the University.",
    },
    {
      name: "B.Com Co-operation (Honours with Research)",
      duration: "4 years",
      intake: 40,
      stream: "Commerce Stream",
      fullDescription:
        "The B.Com Co-operation (Honours with Research) is a four-year undergraduate programme under the commerce stream offered by the University of Kerala. It is designed for students who have completed 10+2 and are interested in building careers in accounting, finance, and the co-operative sector. The programme provides a comprehensive understanding of commerce, financial management, and the principles and practices of co-operation.",
      highlights: [
        "Comprehensive understanding of commerce and financial management",
        "Specialization in co-operative sector principles",
        "Practical knowledge combined with theoretical learning",
        "Preparation for diverse professional environments",
        "Focus on co-operative enterprise management",
      ],
      pathways: [
        "M.Com",
        "MBA",
        "Other master's programmes at University of Kerala",
        "Reputed institutions in India and abroad",
      ],
      careers: [
        "Accounting firms",
        "Corporate finance departments",
        "Co-operative societies",
        "Banking sector",
        "Public sector organisations",
      ],
      coreAreas: [
        "Commerce principles",
        "Financial management",
        "Co-operation principles and practices",
        "Enterprise management",
        "Accounting",
        "Business operations",
      ],
      structure:
        "8 semesters with 90 instructional days each, following five-day week with five instructional hours per day. Semester-end examinations conducted by the University.",
    },
    {
      name: "B.Sc. Psychology (Honours with Research)",
      duration: "4 years",
      intake: 32,
      stream: "Science Stream",
      fullDescription:
        "The Bachelor of Science in Psychology (Honours with Research) is a four-year undergraduate programme consisting of eight semesters. This course explores human behaviour and the physiological processes that influence it, combining psychology and basic cognitive science to provide a clear understanding of human nature. It is designed for students who have completed 10+2 and are interested in the scientific study of the mind and behaviour.",
      highlights: [
        "Scientific study of mind and behaviour",
        "Combines psychology with basic cognitive science",
        "Explores human behaviour and physiological processes",
        "Clear understanding of human nature",
        "Preparation for diverse psychology careers",
      ],
      pathways: [
        "M.A. in Psychology",
        "M.Sc. in Psychology",
        "M.A. in Counselling Psychology",
        "M.Sc. in Forensic Psychology",
        "Master of Public Health (MPH) with focus on Behavioural and Social Sciences",
        "Specialisation in School Psychology, Industrial–Organisational Psychology",
      ],
      careers: [
        "Clinical Psychologist - Assess, diagnose, and treat mental, emotional, and behavioural disorders",
        "Counselling Psychologist - Help with relationship issues, grief, career development",
        "School Psychologist - Support students' academic, social, emotional needs",
        "Neuropsychologist - Study brain function and behaviour connection",
        "Forensic Psychologist - Apply psychology in legal and criminal justice contexts",
      ],
      coreAreas: [
        "Human behaviour analysis",
        "Cognitive science",
        "Mental health studies",
        "Behavioural disorders",
        "Research methodology",
        "Applied psychology",
        "Physiological processes",
      ],
      structure:
        "8 semesters over four years with comprehensive theoretical learning and practical applications in mental health, education, research, and applied psychology sectors.",
    },
    {
      name: "B.A. Journalism and Mass Communication (Honours with Research)",
      duration: "4 years",
      intake: 40,
      stream: "Arts Stream",
      fullDescription:
        "The B.A. Journalism and Mass Communication (Honours with Research) is a four-year undergraduate programme under the arts stream offered by the University of Kerala. It is designed for students who have completed 10+2 and wish to pursue a career in journalism, media, and mass communication. The programme provides a comprehensive understanding of news reporting, media production, communication theories, and the ethical and legal aspects of the media industry.",
      highlights: [
        "Comprehensive understanding of news reporting and media production",
        "Communication theories and media ethics",
        "Legal aspects of media industry",
        "Practical training combined with theoretical study",
        "Preparation for fast-evolving media landscape",
      ],
      pathways: [
        "Master's Degree in Journalism and Mass Communication (MJMC)",
        "MBA",
        "Related master's programmes at University of Kerala",
        "Reputed institutions in India and abroad",
      ],
      careers: [
        "Print and broadcast journalism",
        "Digital media",
        "Public relations",
        "Corporate communications",
        "Content creation",
        "Media management",
      ],
      coreAreas: [
        "News reporting",
        "Media production",
        "Communication theories",
        "Media ethics",
        "Legal aspects of media",
        "Digital media",
        "Content creation",
      ],
      structure:
        "8 semesters with 90 instructional days each, five instructional hours per day on five-day week schedule. Semester-end examinations conducted by the University.",
    },
  ],
};

const Courses: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isNavHidden, setIsNavHidden] = useState(false);
  const [expandedPrograms, setExpandedPrograms] = useState<number[]>([]);
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

  const toggleProgram = (index: number) => {
    setExpandedPrograms((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

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
            <span className="text-white">Courses</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">
            Four Year Undergraduate Programs
          </h1>
          <p className="mt-2 text-white/90 max-w-2xl">
            Explore our range of honors and research-based undergraduate
            programs designed for academic excellence and career readiness.
          </p>
        </div>
      </section>

      {/* Courses content */}
      <section className="flex-1 py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {programs.undergraduate.map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-xl ring-1 ring-gray-100 overflow-hidden transition-all duration-300"
              >
                {/* Compact Card View */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="bg-blue-100 p-3 rounded-2xl">
                        <GraduationCap className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 leading-tight">
                          {program.name}
                        </h4>
                        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 mb-2">
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {program.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            {program.intake} seats
                          </span>
                        </div>
                        <div className="text-sm text-blue-600 font-medium">
                          {program.stream}
                        </div>
                      </div>
                    </div>

                    {/* Expand/Collapse Button */}
                    <button
                      onClick={() => toggleProgram(index)}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 self-start sm:self-center whitespace-nowrap"
                    >
                      {expandedPrograms.includes(index) ? (
                        <>
                          <ChevronUp className="h-4 w-4" />
                          Show Less
                        </>
                      ) : (
                        <>
                          <ChevronDown className="h-4 w-4" />
                          Learn More
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Expanded Content */}

                <div
                  className={`transition-all duration-500 ease-in-out ${
                    expandedPrograms.includes(index)
                      ? "max-h-[2000px] opacity-100"
                      : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  <div className="p-6 space-y-6 bg-white">
                    {/* Description */}

                    <div>
                      <h5 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <BookOpen className="h-4 w-4 mr-2 text-blue-600" />
                        Programme Description
                      </h5>
                      <p className="text-gray-700 leading-relaxed">
                        {program.fullDescription}
                      </p>
                    </div>

                    {/* Programme Structure */}
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-blue-600" />
                        Programme Structure
                      </h5>
                      <p className="text-gray-700 leading-relaxed">
                        {program.structure}
                      </p>
                    </div>

                    {/* Programme Highlights */}
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <Award className="h-4 w-4 mr-2 text-blue-600" />
                        Programme Highlights
                      </h5>
                      <ul className="space-y-2">
                        {program.highlights.map((highlight, idx) => (
                          <li
                            key={idx}
                            className="text-gray-700 flex items-start"
                          >
                            <span className="w-2 h-2 rounded-full bg-blue-600 mt-2 mr-3 flex-shrink-0"></span>
                            <span className="flex-1">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                      {/* Academic Pathways */}
                      <div className="bg-gradient-to-br from-blue-50 to-white-50 rounded-2xl p-4">
                        <h5 className="font-semibold text-blue-800 mb-3 flex items-center">
                          <ArrowRight className="h-4 w-4 mr-2" />
                          Academic Pathways
                        </h5>
                        <div className="space-y-2">
                          {program.pathways.map((pathway, idx) => (
                            <div
                              key={idx}
                              className="bg-white/80 px-3 py-2 rounded-lg text-sm text-black-700 font-medium"
                            >
                              {pathway}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Career Opportunities */}
                      <div className="bg-gradient-to-br from-blue-50 to-white-50 rounded-2xl p-4">
                        <h5 className="font-semibold text-blue-800 mb-3 flex items-center">
                          <Briefcase className="h-4 w-4 mr-2" />
                          Career Opportunities
                        </h5>
                        <div className="space-y-2">
                          {program.careers.map((career, idx) => (
                            <div
                              key={idx}
                              className="bg-white/80 px-3 py-2 rounded-lg text-sm text-black-700 font-medium"
                            >
                              {career}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Core Areas */}
                      <div className="bg-gradient-to-br from-blue-50 to-white-50 rounded-2xl p-4">
                        <h5 className="font-semibold text-blue-800 mb-3 flex items-center">
                          <Target className="h-4 w-4 mr-2" />
                          Core Areas of Study
                        </h5>
                        <div className="space-y-2">
                          {program.coreAreas.map((area, idx) => (
                            <div
                              key={idx}
                              className="bg-white/80 px-3 py-2 rounded-lg text-sm text-black-700 font-medium"
                            >
                              {area}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer onNavigate={noopNavigate} />
    </div>
  );
};

export default Courses;
