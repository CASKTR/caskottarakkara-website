import React, { useEffect, useRef, useState } from "react";
import { User, Phone, Mail, Award, ChevronRight } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const principalData = {
  name: "Smt. Thara. K.S",
  position: "Principal",
  qualifications: "********",
  phone: "+91 ********",
  email: "**********",
  achievements: [
    "********************************",
    "********************************",
    "********************************",
  ],
  image:
    "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=400",
};

const PrincipalPage: React.FC = () => {
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
        activeSection="administration"
        onNavigate={noopNavigate}
        scrollY={scrollY}
        isHidden={isNavHidden}
      />

      {/* Page title band */}
      <section className="pt-[155px] md:pt-[170px] lg:pt-[185px] bg-gradient-to-br from-blue-800 to-indigo-950 text-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center text-sm text-white/80 mb-3">
            <span className="hover:text-white transition-colors">
              Administration
            </span>
            <ChevronRight className="mx-2 h-4 w-4 opacity-70" />
            <span className="text-white">Principal</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">Principal</h1>
          <p className="mt-2 text-white/90 max-w-2xl">
            Leadership, vision, and commitment to academic excellence.
          </p>
        </div>
      </section>

      {/* Principal content */}
      <section className="flex-1 py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white shadow-xl ring-1 ring-gray-100 p-6 md:p-10">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="text-center lg:text-left">
                <div className="relative w-80 h-80 mx-auto lg:mx-0 mb-6">
                  <div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-500 opacity-20 blur"
                    aria-hidden="true"
                  />
                  <img
                    src={principalData.image}
                    alt={principalData.name}
                    className="relative w-full h-full object-cover rounded-2xl shadow-2xl ring-2 ring-blue-100"
                  />
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center shadow-xl">
                    <User className="h-12 w-12 text-white" />
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  {principalData.name}
                </h3>
                <p className="text-xl text-blue-600 font-semibold mb-4">
                  {principalData.position}
                </p>
                <p className="text-gray-600 mb-6">
                  {principalData.qualifications}
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-blue-500" />
                    <span className="text-gray-700">{principalData.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-blue-500" />
                    <span className="text-gray-700">{principalData.email}</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {principalData.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Award className="h-4 w-4 text-yellow-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{achievement}</span>
                      </li>
                    ))}
                  </ul>
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

export default PrincipalPage;
