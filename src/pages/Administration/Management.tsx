import React, { useEffect, useRef, useState } from "react";
import { ChevronRight } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const ManagementPage: React.FC = () => {
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

      {/* Title section remains unchanged */}
      <section className="pt-[155px] md:pt-[170px] lg:pt-[185px] bg-gradient-to-br from-blue-800 to-indigo-950 text-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-10">
          <div className="flex items-center text-sm text-white/80 mb-3">
            <span className="hover:text-white transition-colors">
              Administration
            </span>
            <ChevronRight className="mx-2 h-4 w-4 opacity-70" />
            <span className="text-white">Management</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">Management</h1>
          <p className="mt-2 text-white/90 max-w-2xl">
            Meet the management team of our institution.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="flex-1">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16 space-y-20">
          {/* IHRD Section - Split Layout */}
          <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden border border-blue-100">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Decorative / Graphic Side */}
              <div className="bg-gradient-to-br from-blue-200 to-indigo-200 flex items-center justify-center p-10">
                <div className="w-48 h-48 bg-white rounded-full shadow-lg flex items-center justify-center overflow-hidden">
                  <img
                    src="https://ihrdadmissions.org/assets/img/ihrdlogorx.png"
                    alt="IHRD Logo"
                    className="w-full h-full object-contain p-2"
                  />
                </div>
              </div>

              {/* Text Side */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blue-900">
                  Institute of Human Resources Development (IHRD)
                </h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Institute of Human Resources Development (IHRD) is an
                  autonomous educational institution established by the
                  Government of Kerala in 1987. The management of the institute
                  is vested with a Governing Body composed of the Hon’ble
                  Minister of Higher Education, Government of Kerala, as the
                  Chairman and Chief Secretary to Government of Kerala as the
                  Vice-Chairman.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  IHRD is dedicated to the scientific advancement, technological
                  progress and economic growth of the country through human
                  resources development. Based on the principle,{" "}
                  <span className="italic text-blue-700">
                    "Think Globally and Act Locally"
                  </span>
                  , it endeavours to provide education and training of
                  consistently high standards through innovative and versatile
                  programmes suitable for the current and emerging needs of the
                  community. For more details visit:{" "}
                  <a
                    href="https://ihrd.ac.in/"
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://ihrd.ac.in/
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Key Office Bearers */}
          <div className="flex flex-col items-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-black-900 text-center">
              Managing Body{" "}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
              {[
                {
                  title: "Chairman",
                  name: "Dr. R. Bindu, Hon’ble Minister of Higher Education",
                  img: "https://minister-highereducation.kerala.gov.in/wp-content/uploads/2021/08/bindhu_minister-273x300.jpg",
                },
                {
                  title: "Director",
                  name: "Dr. V. A. Arun Kumar",
                  img: "https://ceconline.edu/wp-content/uploads/2019/06/dir-160x190.jpg",
                },
                {
                  title: "Higher Education Principal Secretary",
                  name: "Dr. Sharmila Mary Joseph IAS",
                  img: "https://apacnewsnetwork.com/wp-content/uploads/2025/02/Copy-of-Copy-of-News391.png",
                },
              ].map((person, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center border border-gray-100 hover:shadow-xl hover:-translate-y-1 transform transition duration-300"
                  style={{
                    animation: `fadeInUp 0.4s ease ${i * 0.1 + 0.2}s both`,
                  }}
                >
                  <img
                    src={person.img}
                    alt={person.name}
                    className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover border-4 border-blue-200 shadow-md mb-4"
                  />
                  <h4 className="text-lg font-bold text-blue-900 text-center">
                    {person.title}
                  </h4>
                  <p className="text-gray-600 text-center text-sm mt-1 font-semibold">
                    {person.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer onNavigate={noopNavigate} />
    </div>
  );
};

export default ManagementPage;
