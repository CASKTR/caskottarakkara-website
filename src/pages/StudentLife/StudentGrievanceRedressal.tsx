import React, { useEffect, useRef, useState } from "react";
import {
  Shield,
  Users,
  Scale,
  Heart,
  Mail,
  Phone,
  User,
  Award,
  ChevronRight,
} from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const GrievanceCommitteeSection: React.FC = () => {
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

  const features = [
    {
      icon: <Scale className="w-6 h-6" />,
      title: "Fair & Transparent",
      description: "Ensures fair and transparent resolution of all grievances",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Student-Friendly",
      description: "Promotes a supportive environment for all students",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Rights Protection",
      description: "Upholds and protects students' rights and dignity",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Trust Building",
      description: "Fosters trust while maintaining institutional integrity",
    },
  ];

  const members = [
    {
      name: "Ms. Jincy Johnson",
      department: "Assistant Professor, Psychology",
      email: "priya.sharma@caskottarakkara.edu.in",
      phone: "+91 9876543210",
    },
    {
      name: "Sri. Antony Varghese",
      department: "Assistant Professor, Mathematics",
      email: "rajesh.kumar@caskottarakkara.edu.in",
      phone: "+91 9876543211",
    },
    {
      name: "Sri. Prasanth P",
      department: "Assistant Professor, Journalism",
      email: "anjali.menon@caskottarakkara.edu.in",
      phone: "+91 9876543212",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header
        activeSection="studentlife"
        onNavigate={noopNavigate}
        scrollY={scrollY}
        isHidden={isNavHidden}
      />

      {/* Page title band */}
      <section className="pt-[155px] md:pt-[170px] lg:pt-[185px] bg-gradient-to-br from-blue-800 to-indigo-950 text-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center text-sm text-white/80 mb-3">
            <span className="hover:text-white transition-colors">
              Student Life
            </span>
            <ChevronRight className="mx-2 h-4 w-4 opacity-70" />
            <span className="text-white">Student Grievance Redressal</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">
            Student Grievance Redressal Committee
          </h1>
          <p className="mt-2 text-white/90 max-w-2xl">
            Ensuring a fair, transparent, and student-friendly environment for
            all grievances.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1">
        {/* Introduction Section */}
        <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Student Grievance Redressal Committee
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto"></p>
            </div>

            {/* Main Content */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              {/* Description */}
              <div className="space-y-6">
                <div className="prose prose-lg">
                  <p className="text-gray-700 leading-relaxed">
                    The <strong>Student Grievance Redressal Committee</strong>{" "}
                    has been constituted to address and resolve grievances of
                    students in a{" "}
                    <span className="text-blue-600 font-semibold">
                      fair, transparent, and timely manner
                    </span>
                    .
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    The committee provides a platform for students to voice
                    their concerns related to{" "}
                    <span className="font-medium">
                      academic, administrative, or personal issues
                    </span>{" "}
                    and ensures that appropriate measures are taken to redress
                    them.
                  </p>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Primary Objective
                  </h3>
                  <p className="text-gray-700">
                    To promote a student-friendly environment by upholding
                    dignity, fostering trust, and ensuring that students' rights
                    are protected while maintaining the discipline and integrity
                    of the institution.
                  </p>
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid sm:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mr-3">
                        {feature.icon}
                      </div>
                      <h4 className="font-semibold text-gray-900">
                        {feature.title}
                      </h4>
                    </div>
                    <p className="text-gray-600 text-sm">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Committee Members Section */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-6">
                <Users className="w-8 h-8 text-indigo-600" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Committee Members
              </h2>
              <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Meet our dedicated team of faculty members committed to ensuring
                fair and transparent resolution of student grievances
              </p>
            </div>

            {/* Members Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {members.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group"
                >
                  {/* Profile Header */}
                  <div className="relative h-10 bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-end">
                    <div className="absolute top-4 right-4"></div>
                  </div>

                  {/* Member Info */}
                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {member.name}
                      </h3>
                      <p className="text-indigo-600 font-semibold mb-2"></p>
                      <p className="text-gray-600 text-sm mb-1">
                        {member.department}
                      </p>
                      <div className="flex items-center text-gray-500 text-xs mb-3">
                        <Award className="w-3 h-3 mr-1" />
                      </div>
                    </div>

                    {/* Role Description */}
                    <div className="mb-4">
                      <p className="text-gray-600 text-sm italic"></p>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-600 hover:text-indigo-600 transition-colors group">
                        <Mail className="w-4 h-4 mr-2 flex-shrink-0" />
                        <span className="truncate group-hover:underline cursor-pointer">
                          {member.email}
                        </span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600 hover:text-indigo-600 transition-colors group">
                        <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                        <span className="group-hover:underline cursor-pointer">
                          {member.phone}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Information Box */}
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-100">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  How to Reach the Committee
                </h3>
                <p className="text-gray-600">
                  For any grievances or queries, you can contact any of the
                  committee members directly or use the official channels below
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <Mail className="w-8 h-8 text-indigo-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Email Committee
                  </h4>
                  <p className="text-sm text-gray-600">
                    grievance@caskottarakkara.edu.in
                  </p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <Phone className="w-8 h-8 text-indigo-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Call Committee
                  </h4>
                  <p className="text-sm text-gray-600">+91 474-123-4567</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <User className="w-8 h-8 text-indigo-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Visit Office
                  </h4>
                  <p className="text-sm text-gray-600">Admin Block, Room 204</p>
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

export default GrievanceCommitteeSection;
