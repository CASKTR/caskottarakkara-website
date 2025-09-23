import { useState, useMemo, useEffect, useRef } from "react";
import {
  Search,
  ChevronDown,
  Calendar,
  BookOpen,
  Grid3X3,
  List,
  ChevronRight,
} from "lucide-react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

// Import course data
import courseData2024 from "../../../assets/CourseBasket/coursebasket2024.json";
import courseData2025 from "../../../assets/CourseBasket/coursebasket2025.json";

interface Course {
  semester: number;
  category: string;
  code: string;
  name: string;
}

interface Discipline {
  discipline: string;
  courses: Course[];
}

interface CourseData {
  courseData: Discipline[];
}

const CollegeCourseBasket = () => {
  const [selectedYear, setSelectedYear] = useState("2025-26");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDiscipline, setSelectedDiscipline] =
    useState("All Disciplines");
  const [selectedSemester, setSelectedSemester] = useState("All Semesters");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [expandedDisciplines, setExpandedDisciplines] = useState<Set<string>>(
    new Set()
  );
  const [isLoading, setIsLoading] = useState(false);

  // Dropdown open states
  const [yearDropdownOpen, setYearDropdownOpen] = useState(false);
  const [disciplineDropdownOpen, setDisciplineDropdownOpen] = useState(false);
  const [semesterDropdownOpen, setSemesterDropdownOpen] = useState(false);
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);

  const [scrollY, setScrollY] = useState(0);
  const [isNavHidden, setIsNavHidden] = useState(false);
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    const handleClickOutside = () => {
      setYearDropdownOpen(false);
      setDisciplineDropdownOpen(false);
      setSemesterDropdownOpen(false);
      setCategoryDropdownOpen(false);
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

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

  // Get current course data based on selected year
  const currentCourseData: CourseData =
    selectedYear === "2024-25" ? courseData2024 : courseData2025;

  // Get unique values for dropdowns
  const disciplines = useMemo(() => {
    return [
      "All Disciplines",
      ...currentCourseData.courseData.map((d) => d.discipline),
    ];
  }, [currentCourseData]);

  const semesters = useMemo(() => {
    const allSemesters = new Set<number>();
    currentCourseData.courseData.forEach((discipline) => {
      discipline.courses.forEach((course) => {
        allSemesters.add(course.semester);
      });
    });
    return [
      "All Semesters",
      ...Array.from(allSemesters)
        .sort((a, b) => a - b)
        .map(String),
    ];
  }, [currentCourseData]);

  const categories = useMemo(() => {
    const allCategories = new Set<string>();
    currentCourseData.courseData.forEach((discipline) => {
      discipline.courses.forEach((course) => {
        allCategories.add(course.category);
      });
    });
    return ["All Categories", ...Array.from(allCategories).sort()];
  }, [currentCourseData]);

  // Handle year change with loading simulation
  const handleYearChange = (year: string) => {
    setIsLoading(true);
    setSelectedYear(year);
    setTimeout(() => setIsLoading(false), 500); // Simulate loading
  };

  // Filter courses based on all criteria
  const filteredData = useMemo(() => {
    let filtered = currentCourseData.courseData;

    // Filter by discipline
    if (selectedDiscipline !== "All Disciplines") {
      filtered = filtered.filter((d) => d.discipline === selectedDiscipline);
    }

    // Apply other filters to courses within each discipline
    filtered = filtered
      .map((discipline) => ({
        ...discipline,
        courses: discipline.courses.filter((course) => {
          // Search filter
          const matchesSearch =
            searchTerm === "" ||
            course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            course.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
            discipline.discipline
              .toLowerCase()
              .includes(searchTerm.toLowerCase());

          // Semester filter
          const matchesSemester =
            selectedSemester === "All Semesters" ||
            course.semester.toString() === selectedSemester;

          // Category filter
          const matchesCategory =
            selectedCategory === "All Categories" ||
            course.category === selectedCategory;

          return matchesSearch && matchesSemester && matchesCategory;
        }),
      }))
      .filter((discipline) => discipline.courses.length > 0);

    return filtered;
  }, [
    currentCourseData,
    searchTerm,
    selectedDiscipline,
    selectedSemester,
    selectedCategory,
  ]);

  const totalCourses = useMemo(() => {
    return filteredData.reduce(
      (total, discipline) => total + discipline.courses.length,
      0
    );
  }, [filteredData]);

  const toggleDiscipline = (disciplineName: string) => {
    const newExpanded = new Set(expandedDisciplines);
    if (newExpanded.has(disciplineName)) {
      newExpanded.delete(disciplineName);
    } else {
      newExpanded.add(disciplineName);
    }
    setExpandedDisciplines(newExpanded);
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      DSC: "bg-blue-100 text-blue-800 border-blue-200",
      DSE: "bg-green-100 text-green-800 border-green-200",
      MDC: "bg-purple-100 text-purple-800 border-purple-200",
      VAC: "bg-yellow-100 text-yellow-800 border-yellow-200",
      SEC: "bg-pink-100 text-pink-800 border-pink-200",
      INT: "bg-orange-100 text-orange-800 border-orange-200",
      CIP: "bg-indigo-100 text-indigo-800 border-indigo-200",
      RPH: "bg-red-100 text-red-800 border-red-200",
    };
    return colors[category] || "bg-gray-100 text-gray-800 border-gray-200";
  };

  const getDisciplineIcon = (discipline: string) => {
    if (discipline.includes("Computer Science")) return "text-green-600";
    if (discipline.includes("Commerce")) return "text-green-600";
    if (discipline.includes("Journalism")) return "text-green-600";
    if (discipline.includes("Psychology")) return "text-green-600";
    return "text-orange-600";
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header
        activeSection="academics"
        onNavigate={noopNavigate}
        scrollY={scrollY}
        isHidden={isNavHidden}
      />

      <section className="pt-[155px] md:pt-[170px] lg:pt-[185px] bg-gradient-to-br from-blue-800 to-indigo-950 text-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center text-sm text-white/80 mb-3">
            <span className="hover:text-white transition-colors cursor-pointer">
              Academics
            </span>
            <ChevronRight className="mx-2 w-4 h-4 opacity-70" />
            <span className="text-white">Course Basket</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">
            College Course Basket
          </h1>
          <p className="mt-2 text-white/90 max-w-2xl">
            Explore our comprehensive collection of courses across all
            disciplines.
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-6">
          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search courses, codes, or disciplines..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl text-base focus:outline-none focus:ring-0 focus:border-gray-300 bg-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Filters Row */}
          <div className="flex flex-wrap gap-4 mb-4">
            {/* Year Selection Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setYearDropdownOpen(true)}
              onMouseLeave={() => setYearDropdownOpen(false)}
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setYearDropdownOpen(!yearDropdownOpen);
                }}
                className="px-4 py-2 border border-blue-300 bg-blue-50 text-blue-700 rounded-lg w-48 shadow-sm font-medium flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <span>{selectedYear}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    yearDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`absolute z-10 w-48 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg transition-all duration-300 ${
                  yearDropdownOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}
                style={{ pointerEvents: yearDropdownOpen ? "auto" : "none" }}
              >
                <button
                  onClick={() => {
                    handleYearChange("2024-25");
                    setYearDropdownOpen(false);
                  }}
                  className="w-full px-4 py-2 text-left hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                >
                  2024-25
                </button>
                <button
                  onClick={() => {
                    handleYearChange("2025-26");
                    setYearDropdownOpen(false);
                  }}
                  className="w-full px-4 py-2 text-left hover:bg-gray-100 focus:outline-none focus:bg-gray-100 border-t border-gray-100"
                >
                  2025-26
                </button>
              </div>
            </div>

            {/* Discipline Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDisciplineDropdownOpen(true)}
              onMouseLeave={() => setDisciplineDropdownOpen(false)}
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setDisciplineDropdownOpen(!disciplineDropdownOpen);
                }}
                className="px-4 py-2 border border-gray-300 rounded-lg bg-white w-48 shadow-sm flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <span className="truncate">{selectedDiscipline}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ml-2 ${
                    disciplineDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`absolute z-10 w-48 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto transition-all duration-300 ${
                  disciplineDropdownOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}
                style={{
                  pointerEvents: disciplineDropdownOpen ? "auto" : "none",
                }}
              >
                {disciplines.map((discipline) => (
                  <button
                    key={discipline}
                    onClick={() => {
                      setSelectedDiscipline(discipline);
                      setDisciplineDropdownOpen(false);
                    }}
                    className="w-full px-4 py-2 text-left hover:bg-gray-100 focus:outline-none focus:bg-gray-100 border-b border-gray-100 last:border-b-0"
                  >
                    {discipline}
                  </button>
                ))}
              </div>
            </div>

            {/* Semester Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setSemesterDropdownOpen(true)}
              onMouseLeave={() => setSemesterDropdownOpen(false)}
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSemesterDropdownOpen(!semesterDropdownOpen);
                }}
                className="px-4 py-2 border border-gray-300 rounded-lg bg-white w-48 shadow-sm flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <span>{selectedSemester}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    semesterDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`absolute z-10 w-48 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto transition-all duration-300 ${
                  semesterDropdownOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}
                style={{
                  pointerEvents: semesterDropdownOpen ? "auto" : "none",
                }}
              >
                {semesters.map((semester) => (
                  <button
                    key={semester}
                    onClick={() => {
                      setSelectedSemester(semester);
                      setSemesterDropdownOpen(false);
                    }}
                    className="w-full px-4 py-2 text-left hover:bg-gray-100 focus:outline-none focus:bg-gray-100 border-b border-gray-100 last:border-b-0"
                  >
                    {semester}
                  </button>
                ))}
              </div>
            </div>

            {/* Category Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setCategoryDropdownOpen(true)}
              onMouseLeave={() => setCategoryDropdownOpen(false)}
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setCategoryDropdownOpen(!categoryDropdownOpen);
                }}
                className="px-4 py-2 border border-gray-300 rounded-lg bg-white w-48 shadow-sm flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <span>{selectedCategory}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    categoryDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`absolute z-10 w-48 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto transition-all duration-300 ${
                  categoryDropdownOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}
                style={{
                  pointerEvents: categoryDropdownOpen ? "auto" : "none",
                }}
              >
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category);
                      setCategoryDropdownOpen(false);
                    }}
                    className="w-full px-4 py-2 text-left hover:bg-gray-100 focus:outline-none focus:bg-gray-100 border-b border-gray-100 last:border-b-0"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Summary and View Toggle */}
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-600">
              <span>{totalCourses}</span> courses found
              <span className="text-blue-600 font-medium">
                {" "}
                ({selectedYear})
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">View:</span>
              <button
                onClick={() => setViewMode("grid")}
                className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 w-10 ${
                  viewMode === "grid"
                    ? "text-blue-600 bg-blue-100 hover:bg-blue-200"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <Grid3X3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 w-10 ${
                  viewMode === "list"
                    ? "text-blue-600 bg-blue-100 hover:bg-blue-200"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <main className="flex-1 bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          {/* Loading Indicator */}
          {isLoading && (
            <div className="animate-pulse mb-6">
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
                <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
                <div
                  className={`grid gap-4 ${
                    viewMode === "grid"
                      ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                      : "grid-cols-1"
                  }`}
                >
                  <div className="h-24 bg-gray-200 rounded"></div>
                  <div className="h-24 bg-gray-200 rounded"></div>
                  <div className="h-24 bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>
          )}

          {/* Course Data Display */}
          {!isLoading &&
            filteredData.map((discipline) => (
              <div
                key={discipline.discipline}
                className="rounded-lg border bg-card text-card-foreground shadow-sm mb-6 overflow-hidden"
              >
                <div className="border-b border-gray-100 bg-gray-50">
                  <button
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onClick={() => toggleDiscipline(discipline.discipline)}
                  >
                    <div className="flex items-center">
                      <BookOpen
                        className={`w-5 h-5 mr-3 ${getDisciplineIcon(
                          discipline.discipline
                        )}`}
                      />
                      <h3 className="text-lg font-semibold text-gray-900">
                        {discipline.discipline}
                      </h3>
                      <span className="ml-3 px-2 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                        {discipline.courses.length} courses
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                        expandedDisciplines.has(discipline.discipline)
                          ? "rotate-180"
                          : ""
                      }`}
                    />
                  </button>
                </div>

                {expandedDisciplines.has(discipline.discipline) && (
                  <div className="p-6">
                    <div
                      className={`grid gap-4 ${
                        viewMode === "grid"
                          ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                          : "grid-cols-1"
                      }`}
                    >
                      {discipline.courses.map((course) => (
                        <div
                          key={course.code}
                          className="rounded-lg border bg-card text-card-foreground shadow-sm border-gray-200 hover:shadow-md transition-shadow duration-200"
                        >
                          <div className="p-4">
                            <div className="flex items-start justify-between mb-2">
                              <div className="flex items-center">
                                <Calendar className="w-4 h-4 text-gray-400 mr-2" />
                                <span className="text-sm text-gray-600">
                                  Semester {course.semester}
                                </span>
                              </div>
                              <span
                                className={`px-2 py-1 text-xs font-medium rounded border ${getCategoryColor(
                                  course.category
                                )}`}
                              >
                                {course.category}
                              </span>
                            </div>
                            <h4 className="font-medium text-gray-900 mb-1 text-sm leading-snug">
                              {course.name}
                            </h4>
                            <p className="text-xs text-gray-500 font-mono">
                              {course.code}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

          {!isLoading && filteredData.length === 0 && (
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm text-center p-8">
              <div>
                <BookOpen className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  No courses found
                </h3>
                <p className="text-gray-600">
                  Try adjusting your search criteria or filters.
                </p>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer from principal.tsx (shared component) */}
      <Footer onNavigate={noopNavigate} />
    </div>
  );
};

export default CollegeCourseBasket;
