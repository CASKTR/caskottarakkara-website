import React, { useEffect, useRef, useState } from "react";
import {
  ChevronRight,
  Users,
  Target,
  Shield,
  Mail,
  Phone,
  User,
} from "lucide-react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

const WomensGrievanceCellPage: React.FC = () => {
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
            <span className="text-white">Women's Grievance Cell</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">
            Women's Grievance Cell
          </h1>
          <p className="mt-2 text-white/90 max-w-2xl">
            Ensuring safety, support, and empowerment for women students.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              About the Cell
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              The Women Cell of the College of Applied Science, Kottarakkara,
              functions as a supportive forum for female students and staff. It
              is dedicated to promoting their welfare, enhancing personal
              growth, and providing guidance for both academic and non-academic
              challenges. The Cell aims to create a safe, inclusive, and
              encouraging environment where women can seek support, share
              concerns, and work towards their holistic development.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-purple-100 rounded-lg mr-4">
                <Target className="h-8 w-8 text-purple-600" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Vision
              </h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              To enlighten students in creating a just and progressive society,
              while helping them recognize their true potential and establish
              their identity in a competitive world.
            </p>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
              Objectives
            </h2>
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
              Our comprehensive approach to women's empowerment and support
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "To impart knowledge about the legal rights of women.",
              "To create awareness, instill values, and nurture personality and leadership qualities.",
              "To ensure the holistic development of students, balancing personal growth with academic excellence.",
              "To organize workshops on personality development.",
              "To empower women to make informed and appropriate decisions.",
              "To conduct seminars and awareness programs on issues affecting women.",
              "To foster a supportive socio-economic environment within and beyond the campus.",
            ].map((objective, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border-l-4 border-purple-500"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-4 mt-1">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 leading-relaxed">{objective}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applicability & Membership Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Applicability */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-100 rounded-lg mr-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Applicability
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                The activities and support of the Women's Grievance Cell are
                applicable to all female students and lady staff members of the
                College of Applied Science, Kottarakkara.
              </p>
            </div>

            {/* Membership */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-green-100 rounded-lg mr-4">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Membership</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                All female students of the College of Applied Science,
                Kottarakkara are deemed members of the Women's Grievance Cell.
              </p>

              <div className="bg-gray-50 rounded-lg p-4">
                <div className="space-y-2">
                  <div className="flex items-center">
                    <div></div>
                  </div>
                  <div className="flex items-center">
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-white rounded-2xl shadow-lg">
        {/* Committee Members Section - Updated */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Committee Members
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Meet the dedicated team working to ensure a safe and
                  supportive environment for all women in our college community.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {/* Chairperson */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg border border-purple-100">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <User className="h-10 w-10 text-white" />
                    </div>
                    <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium inline-block mb-2">
                      Chairperson
                    </div>
                  </div>

                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Smt. Dhanya S
                    </h3>
                    <p className="text-gray-600 font-medium">
                      Office Assistant
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-center">
                      <Mail className="h-5 w-5 text-blue-500 mr-3" />
                      <span className="text-gray-700">
                        dhanyashari@gmail.com
                      </span>
                    </div>
                    <div className="flex items-center justify-center">
                      <Phone className="h-5 w-5 text-blue-500 mr-3" />
                      <span className="text-gray-700">+91 8547232871</span>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-purple-200"></div>
                </div>

                {/* Member */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg border border-blue-100">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <User className="h-10 w-10 text-white" />
                    </div>
                    <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium inline-block mb-2">
                      Member
                    </div>
                  </div>

                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Ms. Arunima Sanal
                    </h3>
                    <p className="text-gray-600 font-medium">
                      Assistant Professor in Journalism
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-center">
                      <Mail className="h-5 w-5 text-blue-500 mr-3" />
                      <span className="text-gray-700">
                        arunimasanal24@gmail.com{" "}
                      </span>
                    </div>
                    <div className="flex items-center justify-center">
                      <Phone className="h-5 w-5 text-blue-500 mr-3" />
                      <span className="text-gray-700">+91 8606010797</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Grievance Redressal Section */}
        <section className="py-12 bg-gray-50">
          ``
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Grievance Redressal
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Grievances may be addressed by directly contacting the Women's
                Grievance Cell committee or by submitting a written complaint.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Direct Contact
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Reach out directly to any committee member for immediate
                    assistance and support.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Written Complaint
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Submit a formal written complaint for documented grievance
                    resolution.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer onNavigate={noopNavigate} />
    </div>
  );
};

export default WomensGrievanceCellPage;
