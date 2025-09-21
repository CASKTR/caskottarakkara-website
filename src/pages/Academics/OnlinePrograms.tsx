import { useEffect, useRef, useState } from "react";
import { ChevronRight } from "lucide-react";
import {
  BookOpen,
  Calendar,
  BarChart3,
  Shield,
  Bell,
  Clock,
  CheckCircle,
  Users,
  User,
  Award,
  Database,
  CreditCard,
  FileText,
  CheckCircle2,
} from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const creditFeatures = [
  {
    icon: Database,
    title: "Academic Bank of Credit (ABC)",
    description:
      "Centralized digital repository for storing and transferring academic credits.",
  },
  {
    icon: FileText,
    title: "DigiLocker Integration",
    description: "Secure digital storage of certificates and academic records.",
  },
  {
    icon: CheckCircle2,
    title: "Seamless Credit Transfer",
    description:
      "Effortless transfer of credits between institutions through digital platforms.",
  },
  {
    icon: Shield,
    title: "Secure Verification",
    description:
      "Robust digital verification of academic credentials and credit records.",
  },
];

const onlinePlatforms = [
  {
    name: "SWAYAM",
    description:
      "Government of India's MOOC platform offering a wide range of courses from top institutions.",
    features: [
      "UGC/AICTE approved courses",
      "Graded evaluation and certification",
      "Wide subject coverage",
    ],
  },
  {
    name: "NPTEL",
    description:
      "National Programme on Technology Enhanced Learning, focused on engineering and science courses.",
    features: [
      "IIT/IISc faculty",
      "Proctored exams",
      "Industry-recognized certificates",
    ],
  },
  {
    name: "Coursera",
    description:
      "Global online learning platform with university and industry partners.",
    features: [
      "Flexible scheduling",
      "Verified certificates",
      "International content",
    ],
  },
];

const OnlineProgramsPage: React.FC = () => {
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

  useEffect(() => {
    const interval = setInterval(() => {}, 4000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Timetable Access",
      description:
        "View your personalised daily and weekly class timetable at a glance.",
      details: [
        "Quick access to room numbers, faculty names, and subject details",
        "Automatic timetable updates when changes are made by the administration",
      ],
      color: "bg-blue-600",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Attendance Management",
      description:
        "Centralised system for recording and maintaining attendance for all courses.",
      details: [
        "Faculty can mark and update attendance through the app",
        "Records are stored centrally for transparency",
        "Students can view their attendance record for each subject in real time",
      ],
      color: "bg-indigo-600",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Personalised Tracking",
      description:
        "Student-specific dashboard showing attendance percentage and trends.",
      details: [
        "Subject-wise breakdown and historical trends",
        "Alerts for low attendance and actionable tips",
        "Help students reach required thresholds",
      ],
      color: "bg-green-600",
    },
    {
      icon: <Bell className="w-8 h-8" />,
      title: "Real-time Updates",
      description:
        "Instant push notifications for class cancellations and timetable changes.",
      details: [
        "Notifications when attendance is marked",
        "Alerts when you fall below a threshold",
        "Immediate updates when action is required",
      ],
      color: "bg-orange-600",
    },
  ];

  const committeeMembers = [
    {
      name: "Smt. Afsana N.",
      position: "Assistant Professor",
      department: "Department of Computer Science",
    },
    {
      name: "Smt. Teena Thankachan",
      position: "Assistant Professor",
      department: "Department of Psychology",
    },
  ];

  const noopNavigate = () => {};

  return (
    <>
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
              <span className="text-white">Online Programs</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">Online Programs</h1>
            <p className="mt-2 text-white/90 max-w-2xl">
              Explore our flexible and accessible online learning opportunities.
            </p>
          </div>
        </section>

        {/* Main content */}
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12">
          {/* Online Programs Section */}
          <div className="space-y-8">
            {/* Section Title */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-3xl font-bold text-gray-900 mb-4 mt-8">
                Online/MOOC Programs
              </h1>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover quality-assured online learning opportunities with full
                academic credit recognition
              </p>
            </div>

            {/* Overview */}
            <div className="rounded-2xl bg-white shadow-lg ring-1 ring-gray-100 p-6 md:p-6">
              <div className="flex items-start space-x-4">
                <BookOpen className="h-8 w-8 text-blue-600 flex-shrink-0" />
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">
                    Program Overview
                  </h2>
                  <p className="text-gray-700 text-base mb-4">
                    Earn academic credits by completing quality-assured online
                    programs from approved platforms.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h3 className="font-semibold text-blue-900 mb-1">
                        Key Benefits
                      </h3>
                      <ul className="space-y-1 text-blue-800 text-sm">
                        <li className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 mt-0.5 mr-2 flex-shrink-0" />
                          Flexible, self-paced learning
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 mt-0.5 mr-2 flex-shrink-0" />
                          Academic credit recognition
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 mt-0.5 mr-2 flex-shrink-0" />
                          Quality content from approved platforms
                        </li>
                      </ul>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4">
                      <h3 className="font-semibold text-green-900 mb-1">
                        Requirements
                      </h3>
                      <ul className="space-y-1 text-green-800 text-sm">
                        <li className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 mt-0.5 mr-2 flex-shrink-0" />
                          Graded evaluation
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 mt-0.5 mr-2 flex-shrink-0" />
                          Proper grades/points
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 mt-0.5 mr-2 flex-shrink-0" />
                          BoS approved courses
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Approved Platforms */}
            <div className="rounded-3xl bg-white shadow-xl ring-1 ring-gray-100 p-6 md:p-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Approved Online Platforms
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {onlinePlatforms.map((platform, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow flex flex-col justify-between"
                  >
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {platform.name}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {platform.description}
                      </p>
                      <div className="space-y-2 mb-4">
                        {platform.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-center text-sm text-gray-700"
                          >
                            <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* Button with logo placeholder */}
                    <a
                      href={
                        platform.name === "SWAYAM"
                          ? "https://swayam.gov.in/"
                          : platform.name === "NPTEL"
                          ? "https://nptel.ac.in/"
                          : platform.name === "Coursera"
                          ? "https://www.coursera.org/"
                          : "#"
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow transition-colors"
                    >
                      {/* SWAYAM logo for SWAYAM, placeholder for others */}
                      {platform.name === "SWAYAM" ? (
                        <span className="inline-block w-6 h-6 rounded-full overflow-hidden mr-2 bg-white">
                          <img
                            src="https://w7.pngwing.com/pngs/876/808/png-transparent-book-review-swayam-hurricane-harvey-book-angle-rectangle-logo.png"
                            alt="SWAYAM Logo"
                            className="w-full h-full object-contain"
                          />
                        </span>
                      ) : platform.name === "NPTEL" ? (
                        <span className="inline-block w-6 h-6 rounded-full overflow-hidden mr-2 bg-white">
                          <img
                            src="https://cdn-1.webcatalog.io/catalog/nptel/nptel-social-preview.png"
                            alt="NPTEL Logo"
                            className="w-full h-full object-contain"
                          />
                        </span>
                      ) : platform.name === "Coursera" ? (
                        <span className="inline-block w-6 h-6 rounded-full overflow-hidden mr-2 bg-white">
                          <img
                            src="https://blog.coursera.org/wp-content/uploads/2020/12/cropped-android-chrome-512x512-1.png"
                            alt="Coursera Logo"
                            className="w-full h-full object-contain"
                          />
                        </span>
                      ) : (
                        <span className="inline-block w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center mr-2">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <circle cx="10" cy="10" r="8" fill="#888" />
                          </svg>
                        </span>
                      )}
                      <span>Visit {platform.name}</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Process and Guidelines */}
            <div className="rounded-3xl bg-white shadow-xl ring-1 ring-gray-100 p-6 md:p-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Process & Guidelines
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Course Selection Process
                  </h3>
                  <div className="space-y-4">
                    <div className="flex">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold mr-4">
                        1
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">
                          Review Approved List
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Check the semester-wise list published by Board of
                          Studies
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold mr-4">
                        2
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">
                          Course Registration
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Register for approved courses on respective platforms
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold mr-4">
                        3
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">
                          Complete Assessment
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Finish comprehensive graded evaluation
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold mr-4">
                        4
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">
                          Credit Integration
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Credits added to semester grade card
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Important Guidelines
                  </h3>
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                    <div className="space-y-3 text-sm">
                      <p className="text-yellow-800">
                        <strong>Board of Studies Approval:</strong> Only courses
                        approved by the University of Kerala's BoS are eligible
                        for credit recognition.
                      </p>
                      <p className="text-yellow-800">
                        <strong>Quality Assessment:</strong> All courses must
                        have comprehensive graded evaluation with proper grade
                        points.
                      </p>
                      <p className="text-yellow-800">
                        <strong>Semester Integration:</strong> Credits are
                        included in the semester grade card upon successful
                        completion.
                      </p>
                      <p className="text-yellow-800">
                        <strong>Academic Council Recognition:</strong> Courses
                        must be from platforms recognized by the Academic
                        Council.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Credit Transfer Section */}
          <div className="space-y-8 mt-16">
            {/* Section Title */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-3xl font-bold text-gray-900 mb-4">
                Credit Transfer & ABC System
              </h1>
              <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive digital framework for seamless academic credit
                management and transfer
              </p>
            </div>

            {/* Overview */}
            <div className="rounded-3xl bg-white shadow-xl ring-1 ring-gray-100 p-6 md:p-10">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <CreditCard className="h-8 w-8 text-green-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Credit Transfer & Accumulation System
                  </h2>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    Our university has established a comprehensive digital
                    framework for credit transfer and accumulation, integrating
                    with national systems like Academic Bank of Credit (ABC),
                    DigiLocker, and APAAR for seamless academic mobility.
                  </p>

                  <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-6 border border-gray-200">
                    <h3 className="font-semibold text-gray-900 mb-3">
                      Key Requirements
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-center text-gray-700">
                        <Award className="h-5 w-5 text-blue-600 mr-3" />
                        <span>Minimum 50% credits from our University</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <Clock className="h-5 w-5 text-green-600 mr-3" />
                        <span>Credit validity up to 7 years</span>
                      </div>
                    </div>
                    {/* ABC and DigiLocker Buttons */}
                    <div className="flex flex-wrap gap-4 mt-6">
                      <a
                        href="https://www.abc.gov.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-lg shadow transition-colors"
                      >
                        <Database className="h-5 w-5 text-white" />
                        <span>Academic Bank of Credit (ABC)</span>
                      </a>
                      <a
                        href="https://www.digilocker.gov.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg shadow transition-colors"
                      >
                        <FileText className="h-5 w-5 text-white" />
                        <span>DigiLocker</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Digital Facilities */}
            <div className="rounded-3xl bg-white shadow-xl ring-1 ring-gray-100 p-6 md:p-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Digital Facilities & Integration
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {creditFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <feature.icon className="h-8 w-8 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* APAAR ID System */}
            <div className="rounded-3xl bg-white shadow-xl ring-1 ring-gray-100 p-6 md:p-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                APAAR ID Registration
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-blue-900 mb-3">
                      Automated Permanent Academic Account Registry (APAAR)
                    </h3>
                    <p className="text-blue-800 mb-4">
                      Every student must create an APAAR ID, which serves as a
                      unique identifier generated by the Ministry of Education,
                      Government of India. This ID enables seamless academic
                      record management across institutions.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-blue-800">
                          Mandatory for all students
                        </span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-blue-800">
                          Issued by Ministry of Education
                        </span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-blue-800">
                          Enables nationwide academic mobility
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <FileText className="h-12 w-12 text-gray-600 mx-auto mb-3" />
                    <h4 className="font-medium text-gray-900 mb-2">
                      Registration Process
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Contact the Department Head or Academic Office for APAAR
                      ID registration assistance
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Important Regulations */}
            <div className="rounded-3xl bg-white shadow-xl ring-1 ring-gray-100 p-6 md:p-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Important Regulations
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded">
                  <h3 className="font-semibold text-red-900 mb-3">
                    Credit Validity Period
                  </h3>
                  <p className="text-red-800 text-sm">
                    All transferred credits are valid for a maximum period of{" "}
                    <strong>seven (7) years</strong> from the date of earning,
                    as per UGC and university regulations.
                  </p>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded">
                  <h3 className="font-semibold text-blue-900 mb-3">
                    Minimum University Credits
                  </h3>
                  <p className="text-blue-800 text-sm">
                    Students must earn at least{" "}
                    <strong>50% of their total degree credits</strong> from our
                    University. The remaining credits may be obtained through
                    approved transfer mechanisms.
                  </p>
                </div>

                <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded">
                  <h3 className="font-semibold text-green-900 mb-3">
                    Quality Assurance
                  </h3>
                  <p className="text-green-800 text-sm">
                    All credit transfers are subject to quality assessment and
                    must meet the academic standards set by our University and
                    regulatory bodies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Main content - matching OnlinePrograms layout */}
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12">
          {/* Core Functions Section */}
          <div className="space-y-8">
            {/* Section Title */}
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-3xl font-bold text-gray-900 mb-4">
                EZYGO
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The college uses EZYGO mobile application designed to simplify
                timetable access and attendance management for students,
                faculty, and administrators. Providing fast, personalised, and
                reliable attendance tracking with real‑time updates and
                notifications.
              </p>
            </div>

            {/* Overview Card */}
            <div className="rounded-3xl bg-white shadow-xl ring-1 ring-gray-100 p-6 md:p-10">
              <div className="flex items-start space-x-4 mb-8">
                <BookOpen className="h-8 w-8 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Application Overview
                  </h3>
                  <p className="text-gray-700 text-lg mb-6">
                    EZYGO serves as the central hub for all academic scheduling
                    and attendance needs, ensuring seamless communication
                    between students, faculty, and administration.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h4 className="font-semibold text-blue-900 mb-2">
                        For Students
                      </h4>
                      <ul className="space-y-1 text-blue-800 text-sm">
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 mt-0.5 mr-2 flex-shrink-0" />
                          View personalized timetables
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 mt-0.5 mr-2 flex-shrink-0" />
                          Track attendance in real-time
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 mt-0.5 mr-2 flex-shrink-0" />
                          Receive instant notifications
                        </li>
                      </ul>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4">
                      <h4 className="font-semibold text-green-900 mb-2">
                        For Faculty
                      </h4>
                      <ul className="space-y-1 text-green-800 text-sm">
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 mt-0.5 mr-2 flex-shrink-0" />
                          Mark attendance efficiently
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 mt-0.5 mr-2 flex-shrink-0" />
                          Update timetable changes
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 mt-0.5 mr-2 flex-shrink-0" />
                          Access centralized records
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile App Preview */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Features List */}
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="border border-gray-200 rounded-lg p-6 hover:shadow-lg cursor-pointer"
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`p-3 rounded-xl ${feature.color} text-white`}
                        >
                          {feature.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-semibold text-gray-900 mb-2">
                            {feature.title}
                          </h4>
                          <p className="text-gray-600 mb-3">
                            {feature.description}
                          </p>
                          <ul className="space-y-1">
                            {feature.details.map((detail, idx) => (
                              <li
                                key={idx}
                                className="flex items-start gap-2 text-sm text-gray-700"
                              >
                                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Mobile Mockup */}
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="w-72 h-[580px] bg-gray-900 rounded-[3rem] p-4 shadow-2xl">
                      <div className="w-full h-full bg-gradient-to-b from-blue-50 to-indigo-50 rounded-[2.5rem] relative overflow-hidden">
                        {/* Phone Screen Content */}
                        <div className="absolute inset-0 p-6">
                          <div className="text-center mb-6">
                            <div className="w-12 h-12 bg-blue-600 rounded-xl mx-auto mb-3 flex items-center justify-center">
                              <BookOpen className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">
                              EZYGO
                            </h3>
                            <p className="text-sm text-gray-600">
                              Student Dashboard
                            </p>
                          </div>

                          <div className="space-y-3">
                            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
                              <div className="flex items-center gap-3 mb-2">
                                <Clock className="w-5 h-5 text-blue-600" />
                                <span className="font-medium text-gray-900">
                                  Next Class
                                </span>
                              </div>
                              <p className="text-sm text-gray-700">
                                Computer Science Lab
                              </p>
                              <p className="text-xs text-gray-500">
                                Room 204 • 2:00 PM
                              </p>
                            </div>

                            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
                              <div className="flex items-center gap-3 mb-2">
                                <BarChart3 className="w-5 h-5 text-green-600" />
                                <span className="font-medium text-gray-900">
                                  Attendance
                                </span>
                              </div>
                              <div className="flex justify-between text-sm">
                                <span className="text-gray-700">
                                  Overall: 87%
                                </span>
                                <span className="text-green-600 font-medium">
                                  Good
                                </span>
                              </div>
                            </div>

                            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
                              <div className="flex items-center gap-3 mb-2">
                                <Bell className="w-5 h-5 text-orange-600" />
                                <span className="font-medium text-gray-900">
                                  Recent Updates
                                </span>
                              </div>
                              <p className="text-xs text-gray-600">
                                Timetable updated for tomorrow
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute -top-3 -right-3 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center animate-bounce shadow-lg">
                      <Bell className="w-6 h-6 text-white" />
                    </div>
                    <div className="absolute -bottom-3 -left-3 w-10 h-10 bg-green-600 rounded-full flex items-center justify-center animate-bounce shadow-lg">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Administration Committee Section */}
          <div className="space-y-8 mt-16">
            {/* Section Title */}
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-3xl font-bold text-gray-900 mb-4">
                EZYGO Administration Committee
              </h2>
              <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The EZYGO App is overseen by dedicated committee members who
                guide its implementation and daily operations
              </p>
            </div>

            <div className="rounded-3xl bg-white shadow-xl ring-1 ring-gray-100 p-6 md:p-10">
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {committeeMembers.map((member, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg p-8 text-center hover:shadow-lg"
                  >
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <User className="w-12 h-12 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      {member.name}
                    </h4>
                    <p className="text-gray-700 font-medium mb-1">
                      {member.position}
                    </p>
                    <p className="text-gray-600 text-sm">{member.department}</p>
                  </div>
                ))}
              </div>

              {/* Contact Information */}
              <div className="mt-8 bg-blue-50 rounded-lg p-6 text-center">
                <h4 className="font-semibold text-blue-900 mb-2">
                  Need Support?
                </h4>
                <p className="text-blue-800 text-sm">
                  For technical assistance or queries regarding EZYGO, please
                  contact the administration committee members through your
                  respective department heads.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer onNavigate={noopNavigate} />
    </>
  );
};

export default OnlineProgramsPage;