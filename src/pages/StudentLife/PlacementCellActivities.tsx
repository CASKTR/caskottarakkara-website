import React, { useEffect, useRef, useState } from "react";
import {
  ChevronRight,
  Target,
  BookOpen,
  TrendingUp,
  MessageSquare,
  Building2,
  Mail,
  User,
} from "lucide-react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

const PlacementCellActivities: React.FC = () => {
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

  const activities = [
    {
      category: "Training Programs",
      icon: BookOpen,
      items: [
        "Aptitude test preparation",
        "Resume writing workshops",
        "Mock interview sessions",
        "Soft skills development",
        "Industry-specific training",
        "Group discussion practice",
      ],
    },
    {
      category: "Employment Exchange Programs",
      icon: TrendingUp,
      items: [
        "Employability training sessions",
        "Career guidance counseling",
        "Job matching services",
        "Skills assessment programs",
        "Professional development workshops",
        "Industry mentorship programs",
      ],
    },
    {
      category: "Industry Connect",
      icon: Building2,
      items: [
        "Regular placement drives",
        "Corporate partnerships",
        "Industry expert sessions",
        "Company visits and tours",
        "Internship opportunities",
        "Alumni networking events",
      ],
    },
    {
      category: "Career Guidance",
      icon: Target,
      items: [
        "Career counseling sessions",
        "Academic-industry bridge programs",
        "Professional pathway guidance",
        "Interview preparation training",
        "Personal branding workshops",
        "Career planning seminars",
      ],
    },
  ];

  const noopNavigate = () => {};

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header
        activeSection="student-life"
        onNavigate={noopNavigate}
        scrollY={scrollY}
        isHidden={isNavHidden}
      />
      {/* Title Section */}
      <section className="pt-[155px] md:pt-[170px] lg:pt-[185px] bg-gradient-to-br from-blue-800 to-indigo-950 text-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center text-sm text-white/80 mb-3">
            <span className="hover:text-white transition-colors">
              Student Life
            </span>
            <ChevronRight className="mx-2 h-4 w-4 opacity-70" />
            <span className="text-white">Placement Cell</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">Placement Cell</h1>
          <p className="mt-2 text-white/90 max-w-2xl">
            Dedicated to equipping students with the skills and opportunities
            required to secure employment in their respective fields through
            comprehensive training and industry collaboration.
          </p>
        </div>
      </section>

      {/* Main Activities Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Placement Cell Activities
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The Placement Cell of will become active as the final year
              students approach their graduation. Various training programs,
              career guidance sessions, and placement activities will be
              conducted to assist students in preparing for employment
              opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {activities.map((activity, index) => {
              const IconComponent = activity.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center mb-6">
                    <div className="bg-blue-100 rounded-full p-3 mr-4">
                      <IconComponent className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {activity.category}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {activity.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Annual Programs Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              Annual Training Programs
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
                <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-green-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  Aptitude Test Preparation
                </h4>
                <p className="text-gray-700">
                  Comprehensive training to enhance logical reasoning,
                  quantitative aptitude, and verbal abilities.
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-6">
                <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-purple-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  Employability Training
                </h4>
                <p className="text-gray-700">
                  Specialized programs offered through Employment Exchange to
                  enhance job readiness and skills.
                </p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6">
                <div className="bg-orange-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <MessageSquare className="h-6 w-6 text-orange-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  Interview Training
                </h4>
                <p className="text-gray-700">
                  Mock interviews and comprehensive training sessions to build
                  confidence and interview skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section>
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Get in Touch</h3>
            <p className="text-gray-600">
              Connect with our Placement Cell for career guidance and
              opportunities
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="bg-gray-100 rounded-2xl p-8 text-center">
              <div className="bg-orange-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <User className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-2">Placement Officer</h4>
              <p className="text-lg text-blue-700 mb-4 font-bold">Afsana N</p>
              <p className="text-gray-700 mb-6">
                College of Applied Science, Kottarakkara
              </p>
              <div className="flex flex-col gap-3 items-center">
                <div className="flex items-center justify-center bg-white rounded-lg p-4 border border-gray-200 w-full">
                  <Mail className="h-5 w-5 text-blue-500 mr-3" />
                  <a
                    href="mailto:fazilafsu@gmail.com "
                    className="text-blue-600 hover:text-blue-500 transition-colors"
                  >
                    fazilafsu@gmail.com
                  </a>
                </div>
                <div className="flex items-center justify-center bg-white rounded-lg p-4 border border-gray-200 w-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-blue-500 mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm0 12a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2zm12-12a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zm0 12a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                    />
                  </svg>
                  <a
                    href="tel:+ +9895992693"
                    className="text-blue-600 hover:text-blue-500 transition-colors"
                  >
                    +91 9895992693
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer onNavigate={noopNavigate} />
    </div>
  );
};

export default PlacementCellActivities;
