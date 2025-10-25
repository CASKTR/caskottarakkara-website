import React, { useEffect, useRef, useState } from "react";
import {
  ChevronRight,
  Code,
  Trophy,
  Monitor,
  Camera,
  Briefcase,
  PenTool,
  Database,
  BookOpen,
  CheckCircle,
  Mail,
} from "lucide-react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import facultyDataJson from "../../../../public/assets/FacultyData/departmentfacultydata.json";
import studentAchievementsJson from "../../../../public/assets/DepartmentData/studentachievements.json";
import departmentActivitiesJson from "../../../../public/assets/DepartmentData/departmentactivities.json";

const specializations = [
  {
    icon: Monitor,
    title: "Online Journalism",
    description:
      "Advanced studies in digital reporting, editing, and publishing across web and mobile platforms.",
    courses: ["Web Journalism", "Social Media Reporting", "Mobile Journalism"],
  },
  {
    icon: Database,
    title: "Data Journalism",
    description:
      "In-depth training in collecting, analyzing, and visualizing data to produce impactful, fact-based stories.",
    courses: [
      "Data Visualization",
      "Investigative Reporting",
      "Infographics & Analytics",
    ],
  },
  {
    icon: Camera,
    title: "Multimedia Production",
    description:
      "Hands-on expertise in producing audio, video, photography, and cross-platform digital content.",
    courses: ["Video Production", "Audio Storytelling", "Photojournalism"],
  },
  {
    icon: Briefcase,
    title: "Media Management",
    description:
      "Focused learning on the business, economics, and organizational aspects of media industries.",
    courses: [
      "Media Entrepreneurship",
      "Media Economics",
      "Advertising & Brand Management",
    ],
  },
  {
    icon: PenTool,
    title: "Content Writing",
    description:
      "Skill development in writing for diverse platforms, from news and blogs to corporate and creative media.",
    courses: ["Feature Writing", "Copywriting", "Corporate Communication"],
  },
  {
    icon: BookOpen,
    title: "Digital Storytelling",
    description:
      "Creative approaches to narrative-building using modern digital tools and interactive platforms.",
    courses: [
      "Interactive Media",
      "Cross-Platform Storytelling",
      "Creative Narratives in Digital Space",
    ],
  },
];

const JournalismPage: React.FC = () => {
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
            Department of Journalism and Mass Communication{" "}
          </h1>
          <p className="mt-2 text-white/90 max-w-2xl">
            Empowering voices, shaping media, and inspiring change{" "}
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
                      The Department of Journalism and Mass Communication at the
                      College of Applied Science, Kottarakkara, is the first and
                      only media department under IHRD in the state to offer an
                      undergraduate programme in Journalism and Mass
                      Communication. Established in 2023, the department aims to
                      provide students with a comprehensive understanding of
                      both conceptual and practical skills required to engage
                      with past and contemporary media phenomena and
                      technologies. Whether a student is interested in pursuing
                      a career in the media industry, film, television,
                      journalism, photography, advertising, or many other
                      fields, the department offers both a broad-based
                      curriculum and hands-on opportunities.
                    </p>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                      The programme provides theoretical as well as practical
                      inputs to Mass Communication students in print and visual
                      media through newspaper production, production of short
                      films, Public Service Advertisements, documentaries, and
                      news bulletin production.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mt-8 justify-center">
                      <div className="bg-blue-50 rounded-lg p-4 text-center">
                        <div className="text-3xl font-bold text-blue-600 mb-2">
                          23+
                        </div>
                        <div className="text-gray-700">Students</div>
                      </div>
                      <div className="bg-green-50 rounded-lg p-4 text-center">
                        <div className="text-3xl font-bold text-green-600 mb-2">
                          3+
                        </div>
                        <div className="text-gray-700">Faculty Members</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Specializations */}
              <div className="rounded-3xl bg-white shadow-xl ring-1 ring-gray-100 p-6 md:p-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                  Areas of Specialization
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {specializations.map((spec, index) => {
                    const Icon = spec.icon;
                    return (
                      <div
                        key={index}
                        className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                      >
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0">
                            <Icon className="h-6 w-6 text-green-500" />
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">
                              {spec.title}
                            </h4>
                            <p className="text-gray-600 mb-3 text-sm">
                              {spec.description}
                            </p>
                            <div className="space-y-1">
                              {spec.courses.map((course, i) => (
                                <div
                                  key={i}
                                  className="flex items-center text-xs text-gray-700"
                                >
                                  <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                                  {course}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Vision & Mission */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="rounded-3xl bg-white shadow-xl ring-1 ring-gray-100 p-6 md:p-8">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    Our Vision
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    The Department of Journalism and Mass Communication
                    envisions becoming a leader in media education, cultivating
                    professionals who shape narratives, influence public
                    opinion, and contribute responsibly to society.
                  </p>
                </div>
                <div className="rounded-3xl bg-white shadow-xl ring-1 ring-gray-100 p-6 md:p-8">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    Our Mission
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    The mission of the department is to provide transformative
                    media education that blends creativity, ethics, and
                    practical training. It seeks to empower students with the
                    skills and values needed to excel in journalism, public
                    relations, broadcasting, advertising, and digital
                    communication.
                  </p>
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
                {facultyDataJson.journalismfaculty.map(
                  (journalismfaculty: any, index: number) => (
                    <div
                      key={index}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group ring-1 ring-gray-100"
                    >
                      <div className="relative">
                        <img
                          src={journalismfaculty.image}
                          alt={journalismfaculty.name}
                          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                          {journalismfaculty.name}
                        </h3>
                        <p className="text-blue-600 font-semibold mb-2">
                          {journalismfaculty.designation}
                        </p>
                        <p className="text-gray-600 text-sm mb-3">
                          {journalismfaculty.qualifications}
                        </p>

                        <div className="space-y-2 mb-4">
                          <div className="text-sm"></div>
                          <div className="text-sm"></div>
                          <div className="text-sm"></div>
                        </div>

                        <div className="space-y-2 border-t pt-4">
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Mail className="h-4 w-4 text-blue-500" />
                            <span>{journalismfaculty.email}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </section>

          {/* Student Achievements Section */}
          <section id="achievements">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-3xl font-bold text-gray-900 mb-4">
                Student Achievements
              </h2>
              <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
              <p className="text-xl text-black-600 max-w-3xl mx-auto">
                Celebrating the outstanding accomplishments of our talented
                students
              </p>
            </div>

            <div className="rounded-3xl bg-white shadow-xl ring-1 ring-gray-100 p-6 md:p-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {studentAchievementsJson.journalismstudents.map(
                  (achievement, index) => (
                    <div
                      key={index}
                      className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow group"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Trophy className="h-6 w-6 text-white" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {achievement.student}
                          </h3>
                          <p className="text-gray-700 mb-3">
                            {achievement.achievement}
                          </p>
                          <div className="flex justify-between items-center"></div>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </section>

          {/* Activities & Events Section */}
          <section id="activities">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-3xl font-bold text-gray-900 mb-4">
                Activities & Events
              </h2>
              <div className="w-24 h-1 bg-blue- rounded h-1 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover our vibrant community through various technical and
                cultural activities
              </p>
            </div>

            <div className="space-y-6 mb-8">
              {departmentActivitiesJson.journalismactivities.map(
                (activity, index) => (
                  <div
                    key={index}
                    className="rounded-3xl bg-white shadow-xl ring-1 ring-gray-100 p-6 md:p-8"
                  >
                    <div className="grid md:grid-cols-3 gap-6 items-center">
                      <div className="md:col-span-1">
                        <img
                          src={activity.image}
                          alt={activity.title}
                          className="w-full h-48 object-cover rounded-lg"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <div className="flex items-start justify-between mb-4">
                          <h3 className="text-2xl font-bold text-gray-900">
                            {activity.title}
                          </h3>
                        </div>
                        <p className="text-gray-700 mb-4 leading-relaxed">
                          {activity.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-sm text-gray-600"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </section>
        </div>
      </div>

      <Footer onNavigate={noopNavigate} />
    </div>
  );
};

export default JournalismPage;
