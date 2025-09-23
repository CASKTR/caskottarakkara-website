import React, { useEffect, useRef, useState } from "react";
import {
  ChevronRight,
  Code,
  Users,
  Trophy,
  Cpu,
  Database,
  Globe,
  Smartphone,
  Brain,
  Shield,
  CheckCircle,
  Phone,
  Mail,
  ArrowRight,
} from "lucide-react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import facultyDataJson from "../../../assets/FacultyData/departmentfacultydata.json";

const achievements = [
  {
    student: "Arjun Krishnan",
    achievement: "First Prize in National Level Hackathon 2024",
    year: "2024",
    category: "Competition",
  },
  {
    student: "Meera Sathyan",
    achievement: "Best Project Award - AI in Healthcare",
    year: "2024",
    category: "Project",
  },
  {
    student: "Vishnu Mohan",
    achievement: "Google Summer of Code 2023",
    year: "2023",
    category: "Internship",
  },
  {
    student: "Lakshmi Nair",
    achievement: "Microsoft Student Ambassador",
    year: "2024",
    category: "Recognition",
  },
  {
    student: "Rahul Varma",
    achievement: "Published Paper in IEEE Conference",
    year: "2023",
    category: "Research",
  },
  {
    student: "Sneha Pillai",
    achievement: "Winner - Smart India Hackathon",
    year: "2023",
    category: "Competition",
  },
];

const activities = [
  {
    title: "Annual Tech Fest - CodeCarnival",
    date: "March 2024",
    description:
      "Three-day technical festival featuring coding competitions, tech talks, and workshops.",
    participants: "500+ students",
    image:
      "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    title: "Industry Expert Lecture Series",
    date: "Monthly",
    description:
      "Regular sessions with industry professionals sharing insights on latest technologies.",
    participants: "200+ students",
    image:
      "https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    title: "Coding Club Workshops",
    date: "Weekly",
    description:
      "Hands-on workshops covering programming languages, frameworks, and development tools.",
    participants: "100+ students",
    image:
      "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    title: "Research Symposium",
    date: "November 2024",
    description:
      "Platform for students to present their research work and innovative projects.",
    participants: "150+ students",
    image:
      "https://images.pexels.com/photos/1181678/pexels-photo-1181678.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
];

const specializations = [
  {
    icon: Brain,
    title: "Artificial Intelligence & Machine Learning",
    description:
      "Advanced studies in AI algorithms, neural networks, and intelligent systems.",
    courses: [
      "Deep Learning",
      "Natural Language Processing",
      "Computer Vision",
    ],
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description:
      "Comprehensive security solutions and ethical hacking methodologies.",
    courses: ["Network Security", "Cryptography", "Ethical Hacking"],
  },
  {
    icon: Database,
    title: "Data Science & Analytics",
    description:
      "Big data processing, analytics, and business intelligence solutions.",
    courses: ["Big Data Analytics", "Data Mining", "Statistical Computing"],
  },
  {
    icon: Smartphone,
    title: "Mobile & Web Development",
    description: "Full-stack development for web and mobile applications.",
    courses: ["React Native", "Web Technologies", "Mobile App Development"],
  },
  {
    icon: Globe,
    title: "Computer Networks & IoT",
    description:
      "Network protocols, distributed systems, and Internet of Things.",
    courses: ["Network Programming", "IoT Systems", "Cloud Computing"],
  },
  {
    icon: Cpu,
    title: "Software Engineering",
    description:
      "Software design patterns, project management, and quality assurance.",
    courses: [
      "Software Architecture",
      "Agile Methodology",
      "Testing Frameworks",
    ],
  },
];

const PsychologyPage: React.FC = () => {
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
            Department of Psychology{" "}
          </h1>
          <p className="mt-2 text-white/90 max-w-2xl">
            Advancing knowledge in human behavior and mental well-being{" "}
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
                      The Department of Psychology is a leading center for the
                      study of human behavior, cognition, and mental health.
                      Established with the vision of developing skilled
                      professionals and researchers, we offer a curriculum that
                      integrates scientific theory with practical applications
                      in diverse areas of psychology.
                    </p>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                      Our department is committed to nurturing critical
                      thinking, empathy, and research-driven inquiry among
                      students. With modern laboratories, counseling facilities,
                      experienced faculty, and collaborative academic networks,
                      we prepare students to excel in fields such as clinical
                      psychology, counseling, organizational behavior, and
                      social research.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mt-8 justify-center">
                      <div className="bg-blue-50 rounded-lg p-4 text-center">
                        <div className="text-3xl font-bold text-blue-600 mb-2">
                          200+
                        </div>
                        <div className="text-gray-700">Students</div>
                      </div>
                      <div className="bg-green-50 rounded-lg p-4 text-center">
                        <div className="text-3xl font-bold text-green-600 mb-2">
                          15+
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
                            <Icon className="h-8 w-8 text-blue-600" />
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
                    The Department of Psychology aspires to be a center of
                    excellence in understanding human behavior and promoting
                    mental well-being, shaping professionals who make meaningful
                    contributions to individuals and communities.
                  </p>
                </div>
                <div className="rounded-3xl bg-white shadow-xl ring-1 ring-gray-100 p-6 md:p-8">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    Our Mission
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    The mission of the department is to foster intellectual
                    curiosity, empathy, and scientific inquiry in the study of
                    psychology. By integrating theory with practice, it aims to
                    develop skilled professionals who can apply psychological
                    knowledge in clinical, organizational, educational, and
                    social contexts.
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
                {facultyDataJson.psychologyfaculty.map(
                  (psychologyfaculty: any, index: number) => (
                    <div
                      key={index}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group ring-1 ring-gray-100"
                    >
                      <div className="relative">
                        <img
                          src={psychologyfaculty.image}
                          alt={psychologyfaculty.name}
                          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                          {psychologyfaculty.name}
                        </h3>
                        <p className="text-blue-600 font-semibold mb-2">
                          {psychologyfaculty.designation}
                        </p>
                        <p className="text-gray-600 text-sm mb-3">
                          {psychologyfaculty.qualifications}
                        </p>

                        <div className="space-y-2 mb-4">
                          <div className="text-sm"></div>
                          <div className="text-sm"></div>
                          <div className="text-sm"></div>
                        </div>

                        <div className="space-y-2 border-t pt-4">
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Phone className="h-4 w-4 text-blue-500" />
                            <span>{psychologyfaculty.phone}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Mail className="h-4 w-4 text-blue-500" />
                            <span>{psychologyfaculty.email}</span>
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
                {achievements.map((achievement, index) => (
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
                        <div className="flex justify-between items-center">
                          <span className="text-sm px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
                            {achievement.category}
                          </span>
                          <span className="text-sm text-gray-500">
                            {achievement.year}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
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
              {activities.map((activity, index) => (
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
                        <span className="text-sm px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
                          {activity.date}
                        </span>
                      </div>
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        {activity.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Users className="h-4 w-4" />
                          <span>{activity.participants}</span>
                        </div>
                        <button
                          className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                          onClick={() =>
                            (window.location.href =
                              "../../studentlife/clubs&cells/intrudex")
                          }
                        >
                          Learn More <ArrowRight className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      <Footer onNavigate={noopNavigate} />
    </div>
  );
};

export default PsychologyPage;
