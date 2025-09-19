import React, { useEffect, useRef, useState } from "react";
import { Phone, Mail, ChevronRight } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const headOfDepartmentsData = [
  {
    name: "Smt. Bindhu. S	",
    post: "	Asst. Professor in Computer Science",
    department: "Department of Computer Science",
    qualifications: "MSc, MPhil in Computer Science",
    phone: "+91-9876543211",
    email: "hod.cse@cas.edu.in",
    image:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "Ms. Aadarsha S	",
    post: "	Asst. Professor in Commerce",
    department: "Department of B.com",
    qualifications: "MCom Finance, SET, NET, DIFA",
    phone: "+91-9188458680",
    email: "hod.ece@cas.edu.in",
    image:
      "https://images.pexels.com/photos/3727464/pexels-photo-3727464.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "Ms. Jincy Johnson",
    post: "	Asst. Professor in Psychology",
    department: "Department of Psychology",
    qualifications: "MSc Psychology, SET",
    phone: "+91-8590641504",
    email: "hod.it@cas.edu.in",
    image:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "Ms. Sangeetha Santhosh",
    post: "	Asst. Professor in Journalism",
    department: "Department of Journalism",
    qualifications: "MA Journalism & Mass Communication, SET, NET",
    phone: "+91-8289911226",
    email: "hod.me@cas.edu.in",
    image:
      "https://images.pexels.com/photos/4065159/pexels-photo-4065159.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
];

const HeadOfDepartmentsPage: React.FC = () => {
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
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-10">
          <div className="flex items-center text-sm text-white/80 mb-3">
            <span className="hover:text-white transition-colors">
              Administration
            </span>
            <ChevronRight className="mx-2 h-4 w-4 opacity-70" />
            <span className="text-white">Head of Departments</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">
            Head of Departments
          </h1>
          <p className="mt-2 text-white/90 max-w-2xl">
            Academic leadership across departments.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="flex-1 py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white shadow-xl ring-1 ring-gray-100 p-6 md:p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {headOfDepartmentsData.map((hod, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group ring-1 ring-gray-100"
                >
                  <div className="relative">
                    <img
                      src={hod.image}
                      alt={hod.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {hod.name}
                    </h3>
                    <p className="text-blue-600 font-semibold mb-2">
                      {hod.department}
                    </p>
                    <p className="text-gray-600 text-sm mb-4">
                      {hod.qualifications}
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Phone className="h-4 w-4 text-blue-500" />
                        <span>{hod.phone}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Mail className="h-4 w-4 text-blue-500" />
                        <span>{hod.email}</span>
                      </div>
                    </div>
                  </div>
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

export default HeadOfDepartmentsPage;
