import { useState, useRef, useEffect } from "react";
import {
  ChevronRight,
  BookOpen,
  GraduationCap,
  Target,
  Users,
  Clock,
  CheckCircle,
  Star,
  Lightbulb,
  TrendingUp,
  Globe,
  Calendar,
  FileText,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const FYUGP = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isNavHidden, setIsNavHidden] = useState(false);
  const noopNavigate = () => {};
  const gradingSystem = [
    {
      grade: "O",
      point: "10",
      range: "95% and above",
      class: "First Class with Distinction",
      color: "bg-green-600",
    },
    {
      grade: "A+",
      point: "9",
      range: "85-95%",
      class: "First Class with Distinction",
      color: "bg-green-500",
    },
    {
      grade: "A",
      point: "8",
      range: "75-85%",
      class: "First Class with Distinction",
      color: "bg-blue-600",
    },
    {
      grade: "B+",
      point: "7",
      range: "65-75%",
      class: "First Class",
      color: "bg-blue-500",
    },
    {
      grade: "B",
      point: "6",
      range: "55-65%",
      class: "First Class",
      color: "bg-yellow-500",
    },
    {
      grade: "C",
      point: "5",
      range: "45-55%",
      class: "Second Class",
      color: "bg-orange-500",
    },
    {
      grade: "P",
      point: "4",
      range: "35-45%",
      class: "Third Class",
      color: "bg-red-500",
    },
    {
      grade: "F",
      point: "0",
      range: "Below 35%",
      class: "Fail",
      color: "bg-red-600",
    },
  ];
  const [activeSection, setActiveSection] = useState("introduction");

  const lastScrollYRef = useRef(0);
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const isScrollingDown = currentY > lastScrollYRef.current;
      setIsNavHidden(isScrollingDown && currentY > 60);
      lastScrollYRef.current = currentY;
      setScrollY(currentY);

      // Update active section based on scroll position
      const sections = [
        "introduction",
        "design",
        "pathways",
        "pedagogy",
        "implementation",
      ];
      for (const section of sections) {
        const element = sectionRefs.current[section];
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const setSectionRef = (key: string) => (el: HTMLElement | null) => {
    sectionRefs.current[key] = el;
  };

  const scrollToSection = (sectionId: string) => {
    const element = sectionRefs.current[sectionId];
    if (element) {
      const offset = 100;
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  const graduateAttributes = [
    "Continuously strive for excellence in education",
    "Continue life-long learning as an autonomous learner",
    "Apply and nurture critical and creative thinking",
    "Promote sustainable development practices",
    "Promote cooperation over competition",
    "Balance rights with responsibilities",
    "Understand and respect diversity and difference",
    "Use education as a tool for the emancipation and empowerment of humanity",
  ];

  const programPathways = [
    {
      title: "Degree with Single Major",
      description:
        "Students pursuing FYUG in a specific discipline securing at least 50% credits in that discipline",
      example: "BSc Physics Major, BA Economics Major, BCom Commerce Major",
    },
    {
      title: "Degree Major with Minor",
      description:
        "Major degree with minimum 36 credits from 9 pathway courses in another discipline",
      example:
        "BSc Physics Major with Chemistry Minor, BCom Commerce Major with Economics Minor",
    },
    {
      title: "Major with Multiple Disciplines",
      description:
        "Core competencies in multiple disciplines with 12 credits from each discipline",
      example: "BSc Physics Major with Chemistry and Mathematics",
    },
    {
      title: "Interdisciplinary Major",
      description:
        "Credits distributed among constituent disciplines for interdisciplinary competence",
      example: "BA Econometrics Major, BSc Global Studies Major",
    },
    {
      title: "Multidisciplinary Major",
      description:
        "Credits distributed among broad disciplines like Life Sciences, Physical Sciences",
      example: "BSc Life Science, BSc Data Science, BSc Nano Science",
    },
    {
      title: "Degree with Double Major",
      description:
        "50% credits from first major and 40% credits from second discipline",
      example:
        "BSc Physics and Chemistry Major, BA Economics and History Major",
    },
  ];

  const degreeOptions = [
    {
      title: "Three-year UG Degree",
      credits: "133 credits",
      description:
        "Exit option after three years with UG Degree in Major discipline",
      features: [
        "Foundation courses",
        "Major pathway",
        "Minor pathway",
        "Exit flexibility",
      ],
    },
    {
      title: "Four-year UG Degree (Honours)",
      credits: "177 credits",
      description: "Complete four-year program with Honours degree",
      features: [
        "Advanced major courses",
        "Research methodology",
        "Internship",
        "Specialization options",
      ],
    },
    {
      title: "Four-year UG Degree (Honours with Research)",
      credits: "177 credits including 12 credits research",
      description: "Research-focused pathway with mandatory research project",
      features: [
        "Research project",
        "Advanced coursework",
        "Faculty supervision",
        "Direct PhD eligibility",
      ],
    },
  ];

  const foundationCourses = [
    {
      name: "Ability Enhancement Courses (AEC)",
      courses: 4,
      credits: 12,
      description:
        "English and other language proficiency with communication skills",
    },
    {
      name: "Skill Enhancement Courses (SEC)",
      courses: 3,
      credits: 9,
      description:
        "21st century skills - Creativity, Critical thinking, Communication, Collaboration",
    },
    {
      name: "Value-Added Courses (VAC)",
      courses: 3,
      credits: 9,
      description:
        "Personality development, self-awareness, and perspective building",
    },
    {
      name: "Multi-Disciplinary Courses (MDC)",
      courses: 3,
      credits: 9,
      description:
        "Broad intellectual experience across arts, science, commerce, and social sciences",
    },
  ];

  const navigationItems = [
    { id: "introduction", label: "Introduction", icon: BookOpen },
    { id: "design", label: "Design & Regulations", icon: FileText },
    { id: "pathways", label: "Programme Pathways", icon: TrendingUp },
    { id: "pedagogy", label: "Pedagogy & Assessment", icon: Target },
    { id: "implementation", label: "Implementation", icon: Users },
  ];

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
            <span className="text-white">Four Year Undergraduate Program</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">
            Four Year Undergraduate Program (FYUGP)
          </h1>
          <p className="mt-2 text-white/90 max-w-2xl">
            Our four-year undergraduate program cultivates scientifically and
            technologically skilled graduates ready to drive world's social and
            economic growth.
          </p>
        </div>
      </section>

      {/* Sticky Navigation */}
      <div className="sticky top-0 z-9999 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto scrollbar-hide">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-2 px-6 py-4 text-sm font-medium border-b-2 transition-all duration-300 whitespace-nowrap focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 ${
                    activeSection === item.id
                      ? "text-blue-600 bg-blue-50 border-transparent"
                      : "border-transparent text-gray-600 hover:text-blue-600 hover:border-gray-300"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <main className="flex-1">
        {/* Chapter 1: Introduction */}
        <section ref={setSectionRef("introduction")} className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-3xl font-bold text-gray-900">
                  Introduction & Context
                </h2>
              </div>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              <div className="lg:col-span-2">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 shadow-xl border border-blue-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <Globe className="h-6 w-6 text-blue-600" />
                    Context of the Four-Year UG Programme
                  </h3>
                  <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-4">
                    <p>
                      Kerala is currently at a pivotal moment in its journey
                      towards becoming a knowledge-based society. The University
                      of Kerala's Four-Year Undergraduate Programme (UoK-FYUGP)
                      represents a progressive higher education curriculum
                      designed to achieve this transformation.
                    </p>
                    <p>
                      This curriculum framework addresses the need for
                      interdisciplinary and multidisciplinary approaches,
                      innovative content and methodologies, while maintaining
                      flexibility to adapt to the dynamic requirements of
                      Kerala's vibrant society and economy.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 shadow-xl border border-gray-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <Target className="h-5 w-5 text-green-600" />
                    </div>
                    <h4 className="font-bold text-gray-900">Key Focus</h4>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Building a knowledge society through revitalized higher
                    education that serves the greater social good.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 shadow-xl border border-gray-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <Lightbulb className="h-5 w-5 text-purple-600" />
                    </div>
                    <h4 className="font-bold text-gray-900">Innovation</h4>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Embracing innovative technologies and methods to enhance
                    quality and enable experiential learning.
                  </p>
                </div>
              </div>
            </div>

            {/* Aims and Objectives */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Aims and Objectives
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div>
            </div>

            {/* Graduate Attributes */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8 shadow-xl border border-indigo-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center gap-3">
                <Star className="h-6 w-6 text-indigo-600" />
                Graduate Attributes
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {graduateAttributes.map((attribute, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-white/60 rounded-xl backdrop-blur-sm"
                  >
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-800 text-sm leading-relaxed">
                      {attribute}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Chapter 2: Design and Regulations */}
        <section ref={setSectionRef("design")} className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-3xl font-bold text-gray-900">
                  Design & Regulations
                </h2>
              </div>
              <div className="w-32 h-1 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto rounded-full"></div>
            </div>

            {/* Degree Options */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Degree Options
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {degreeOptions.map((option, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:scale-105"
                  >
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <GraduationCap className="h-8 w-8 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">
                        {option.title}
                      </h4>
                      <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full px-4 py-1 inline-block">
                        <span className="text-blue-800 font-semibold text-sm">
                          {option.credits}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-700 text-center mb-6 leading-relaxed">
                      {option.description}
                    </p>
                    <div className="space-y-2">
                      {option.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-gray-600 text-sm">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Foundation Component */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Foundation Component Structure
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {foundationCourses.map((course, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="text-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-3">
                        <BookOpen className="h-6 w-6 text-white" />
                      </div>
                      <h4 className="font-bold text-gray-900 text-sm mb-2">
                        {course.name}
                      </h4>
                      <div className="flex justify-center gap-4 text-xs text-gray-600">
                        <span className="bg-gray-100 px-2 py-1 rounded">
                          {course.courses} Courses
                        </span>
                        <span className="bg-blue-100 px-2 py-1 rounded text-blue-800">
                          {course.credits} Credits
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-700 text-xs leading-relaxed text-center">
                      {course.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Credit Structure */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center gap-3">
                <Calendar className="h-6 w-6 text-blue-600" />
                Credit Structure Overview
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-blue-600 text-white rounded-2xl p-6 mb-4">
                    <Clock className="h-8 w-8 mx-auto mb-2" />
                    <div className="text-2xl font-bold">177</div>
                    <div className="text-sm opacity-90">
                      Total Credits (4-year)
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Minimum credits required for 4-year Honours degree
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-green-600 text-white rounded-2xl p-6 mb-4">
                    <Clock className="h-8 w-8 mx-auto mb-2" />
                    <div className="text-2xl font-bold">133</div>
                    <div className="text-sm opacity-90">
                      Total Credits (3-year)
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Credits for 3-year degree with exit option
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-600 text-white rounded-2xl p-6 mb-4">
                    <Clock className="h-8 w-8 mx-auto mb-2" />
                    <div className="text-2xl font-bold">28</div>
                    <div className="text-sm opacity-90">
                      Max Credits/Semester
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Maximum credits allowed per semester
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Chapter 3: Programme Pathways */}
        <section ref={setSectionRef("pathways")} className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-lg">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-3xl font-bold text-gray-900">
                  Programme Pathways
                </h2>
              </div>
              <div className="w-32 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {programPathways.map((pathway, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
                >
                  <div className="mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <TrendingUp className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">
                      {pathway.title}
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed mb-4">
                      {pathway.description}
                    </p>
                  </div>
                  <div className="bg-white/60 rounded-xl p-4 backdrop-blur-sm">
                    <h5 className="font-semibold text-gray-900 text-xs mb-2">
                      Example:
                    </h5>
                    <p className="text-gray-700 text-xs leading-relaxed font-medium">
                      {pathway.example}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Chapter 4: Pedagogy & Assessment */}
        <section ref={setSectionRef("pedagogy")} className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-pink-600 rounded-full flex items-center justify-center shadow-lg">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-3xl font-bold text-gray-900">
                  Pedagogy & Assessment
                </h2>
              </div>
              <div className="w-32 h-1 bg-gradient-to-r from-red-600 to-pink-600 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Assessment Structure */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8">
                  Assessment Structure
                </h3>
                <div className="space-y-6">
                  <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                    <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-bold text-sm">
                          30%
                        </span>
                      </div>
                      Continuous Comprehensive Assessment (CCA)
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                        <span className="text-gray-700 font-medium text-sm">
                          Formative Assessment (FA)
                        </span>
                        <span className="text-blue-600 font-bold text-sm">
                          15%
                        </span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                        <span className="text-gray-700 font-medium text-sm">
                          Summative Assessment (SA)
                        </span>
                        <span className="text-blue-600 font-bold text-sm">
                          15%
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                    <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-green-600 font-bold text-sm">
                          70%
                        </span>
                      </div>
                      End Semester Evaluation (ESE)
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Theory and practical examinations conducted at the end of
                      each semester with comprehensive evaluation.
                    </p>
                  </div>
                  {/* SGPA/CGPA Computation Section */}
                  <section className="bg-white rounded-lg shadow-md p-6 mt-8">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">
                      Computation of SGPA and CGPA
                    </h2>
                    <p className="mb-4 text-gray-700">
                      The following method is recommended to compute the SGPA
                      and CGPA:
                    </p>
                    <ol className="list-decimal list-inside space-y-3 text-gray-700">
                      <li>
                        <span className="font-semibold">SGPA Calculation:</span>{" "}
                        <br />
                        The SGPA is the ratio of the sum of the product of the
                        number of credits with the grade points scored by a
                        student in all the courses taken by a student and the
                        sum of the number of credits of all the courses
                        undergone by a student in the semester, i.e.
                        <br />
                        <span className="bg-blue rounded-2xl p-4 shadow-xl border border-gray-50 block my-2 font-mono text-blue-700">
                          SGPA (Si) = Σ(Ci x Gi) / ΣCi
                        </span>
                        Where Si is the SGPA in the ith semester, Ci is the
                        number of credits for the ith course, and Gi is the
                        grade point scored by the student in the ith course.
                      </li>
                      <li>
                        <span className="font-semibold">CGPA Calculation:</span>{" "}
                        <br />
                        The CGPA is also calculated in the same manner
                        considering all the courses undergone by a student over
                        all the semesters of a programme, i.e.
                        <br />
                        <span className="bg-blue rounded-2xl p-4 shadow-xl border border-gray-50 block my-2 font-mono text-blue-700">
                          CGPA = Σ(Ci x Si) / ΣCi
                        </span>
                        Where Si is the SGPA in the ith semester, Ci is the
                        total number of credits in the ith semester.
                      </li>
                      <li>
                        The SGPA and CGPA shall be rounded to 2 decimal points
                        and reported in the transcripts.
                      </li>
                    </ol>
                  </section>{" "}
                </div>
              </div>

              {/* Grading System */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8">
                  Grading System
                </h3>
                <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                  <div className="space-y-3">
                    {gradingSystem.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-10 h-10 ${item.color} rounded-full flex items-center justify-center`}
                          >
                            <span className="text-white font-bold text-sm">
                              {item.grade}
                            </span>
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900">
                              {item.range}
                            </div>
                            <div className="text-xs text-gray-600">
                              {item.class}
                            </div>
                          </div>
                        </div>
                        <div className="text-lg font-bold text-gray-700">
                          {item.point}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Pedagogy Methods */}
            <div className="mb-16 mt-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Modern Pedagogical Approaches
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: Target,
                    title: "Project-Based Learning (PBL)",
                    description:
                      "Student-centered approach emphasizing active learning and critical thinking through real-world projects.",
                    features: [
                      "Hands-on experience",
                      "Problem-solving skills",
                      "Team collaboration",
                    ],
                  },
                  {
                    icon: Lightbulb,
                    title: "Blended Learning Mode",
                    description:
                      "Integration of technology with traditional classroom methods for enhanced 21st-century skill development.",
                    features: [
                      "Digital resources",
                      "Flexible learning",
                      "Interactive content",
                    ],
                  },
                  {
                    icon: Users,
                    title: "Cooperative Learning",
                    description:
                      "Peer-supported activities empowering students to take charge of their learning journey.",
                    features: [
                      "Peer collaboration",
                      "Group discussions",
                      "Shared responsibility",
                    ],
                  },
                ].map((method, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="text-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-3">
                        <method.icon className="h-6 w-6 text-white" />
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2">
                        {method.title}
                      </h4>
                    </div>
                    <p className="text-gray-600 text-sm text-center mb-4 leading-relaxed">
                      {method.description}
                    </p>
                    <div className="space-y-2">
                      {method.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-gray-600 text-xs">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Assessment Methods */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center gap-3">
                <FileText className="h-6 w-6 text-red-600" />
                Assessment Methodologies
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-gray-900 mb-4">
                    Formative Assessment Methods
                  </h4>
                  <div className="space-y-2">
                    {[
                      "Practical Assignments",
                      "Viva Voce",
                      "Quiz & Interview",
                      "Oral Presentations",
                      "In-class Discussions",
                      "Group Tutorial Work",
                      "Reflection Writing",
                      "Peer Assessments",
                    ].map((method, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 p-2 bg-blue-50 rounded-lg"
                      >
                        <CheckCircle className="h-4 w-4 text-blue-600" />
                        <span className="text-gray-700 text-sm">{method}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-4">
                    Summative Assessment Methods
                  </h4>
                  <div className="space-y-2">
                    {[
                      "Written Tests",
                      "Open Book Tests",
                      "Laboratory Reports",
                      "Individual Projects",
                      "Case Study Reports",
                      "Team Projects",
                      "Literature Survey",
                      "Standardized Tests",
                    ].map((method, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 p-2 bg-green-50 rounded-lg"
                      >
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-gray-700 text-sm">{method}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Chapter 5: Implementation */}
        <section
          ref={setSectionRef("implementation")}
          className="py-20 bg-white"
        >
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8"></div>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl md:text-3xl font-bold text-gray-900">
                Implementation & Governance
              </h2>
            </div>
            <div className="w-32 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          {/* Committee Structure */}
          <div className="mb-14">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Implementation Committees
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-4 md:px-8 lg:px-16 justify-items-center">
              {/* University Level Committee */}
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8 shadow-xl border border-indigo-100 w-full max-w-md mx-auto">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">
                    University Level
                  </h4>
                  <p className="text-sm text-indigo-600 font-medium">
                    Implementation & Monitoring
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="bg-white/60 rounded-xl p-3 backdrop-blur-sm">
                    <p className="text-gray-700 text-base">
                      Chairman: Vice Chancellor / Pro Vice-Chancellor
                    </p>
                  </div>
                  <div className="bg-white/60 rounded-xl p-3 backdrop-blur-sm">
                    <p className="text-gray-700 text-base">
                      Ensures smooth implementation across all affiliated
                      institutions
                    </p>
                  </div>
                </div>
              </div>

              {/* College Level Committee */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 shadow-xl border border-blue-100 w-full max-w-md mx-auto">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">
                    College Level
                  </h4>
                  <p className="text-sm text-blue-600 font-medium">
                    Academic Committee
                  </p>
                </div>
                <div className="space-y-2">
                  {[
                    "Principal (Chairman)",
                    "Academic Coordinator",
                    "All Department Heads",
                    "External Experts",
                    "Industry Representatives",
                  ].map((member, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-700 text-base ">{member}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Department Level Committee */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 shadow-xl border border-green-100 w-full max-w-md mx-auto">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">
                    Department Level
                  </h4>
                  <p className="text-sm text-green-600 font-medium">
                    Subject Committee
                  </p>
                </div>
                <div className="space-y-2">
                  {[
                    "Head of Department",
                    "Entire Faculty",
                    "External Subject Experts",
                    "Industry Representative",
                    "Alumnus Representative",
                  ].map((member, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <span className="text-gray-700 text-base">{member}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Higher Study Options */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Progression to Higher Studies
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-8 lg:px-16 justify-items-center">
              {[
                {
                  degree: "3-Year Bachelor's",
                  next: "2-Year Master's",
                  description:
                    "Traditional pathway with comprehensive master's programme",
                  duration: "2 Years",
                },
                {
                  degree: "4-Year Bachelor's",
                  next: "1-Year Master's",
                  description:
                    "Accelerated master's programme for honours graduates",
                  duration: "1 Year",
                },
                {
                  degree: "4-Year Honours",
                  next: "Direct PhD",
                  description: "Direct admission to doctoral programmes",
                  duration: "Variable",
                },
                {
                  degree: "Honours with Research",
                  next: "Advanced PhD",
                  description:
                    "Fast-track doctoral admission with research experience",
                  duration: "Reduced",
                },
              ].map((option, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 w-full max-w-xs mx-auto"
                >
                  <div className="text-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <TrendingUp className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-900 text-sm mb-1">
                      {option.degree}
                    </h4>
                    <ArrowRight className="h-4 w-4 text-gray-400 mx-auto mb-1" />
                    <h5 className="font-semibold text-purple-600 text-sm">
                      {option.next}
                    </h5>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-3 mb-3">
                    <span className="text-purple-600 font-bold text-xs">
                      {option.duration}
                    </span>
                  </div>
                  <p className="text-gray-600 text-xs text-center leading-relaxed">
                    {option.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* FYUGP Coordinator */}

          <section className="py-8">
            <div className="max-w-md mx-auto bg-gradient-to-br from-blue-50 via-white to-indigo-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-200 to-indigo-300 rounded-full opacity-20 -translate-y-10 translate-x-10"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-purple-200 to-blue-300 rounded-full opacity-20 translate-y-8 -translate-x-8"></div>

              <div className="relative text-center">
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mb-3">
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full"></div>
                    </div>
                  </div>
                  <h2 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent mb-1">
                    FYUGP Co-ordinator
                  </h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full mx-auto"></div>
                </div>

                <div className="space-y-3">
                  <p className="text-2xl font-bold text-gray-800 tracking-wide">
                    Smt. Bindu. S
                  </p>
                  <div className="inline-block bg-gradient-to-r from-blue-100 to-indigo-100 px-4 py-2 rounded-full">
                    <p className="text-sm font-medium text-blue-800">
                      Assistant Professor in Computer Science
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Resources and Support */}
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-4xl p-8 shadow-xl border border-indigo-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center gap-3">
              <Lightbulb className="h-6 w-6 text-indigo-600" />
              Programme Resources & Support
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">
                  Academic Bank of Credit
                </h4>
                <p className="text-gray-600 text-sm">
                  Credit storage and transfer facility ensuring student mobility
                  and flexibility across institutions.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ExternalLink className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">
                  Technology Integration
                </h4>
                <p className="text-gray-600 text-sm">
                  Advanced learning management systems and digital resources for
                  enhanced educational experience.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">
                  Student Support Services
                </h4>
                <p className="text-gray-600 text-sm">
                  Comprehensive support including counseling, career guidance,
                  and academic mentoring.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer onNavigate={() => {}} />
    </div>
  );
};

export default FYUGP;
