import React, { useState, useRef, useEffect } from "react";
import { BookOpen, ChevronRight } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Library: React.FC = () => {
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
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center text-sm text-white/80 mb-3">
            <span className="hover:text-white transition-colors">
              Academics
            </span>
            <ChevronRight className="mx-2 h-4 w-4 opacity-70" />
            <span className="text-white">Library</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">Library</h1>
          <p className="mt-2 text-white/90 max-w-2xl">
            Explore our resources, digital access, and modern facilities.
          </p>
        </div>
      </section>

      <main className="flex-1 py-10 sm:py-14">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Library</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                The Library of the College of Applied Science serves as an
                essential academic support unit for students, faculty, and
                staff. Its primary functions include providing access to
                resources that strengthen the curriculum, facilitate research,
                and promote professional development. The library maintains
                specialized collections, subscribes to online databases, and
                delivers services such as research guidance, instructional
                workshops, and dedicated study environments. Furthermore, it
                fosters digital literacy by equipping users with the skills
                necessary to critically evaluate and effectively utilize the
                vast array of information resources available in the
                contemporary knowledge landscape.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <BookOpen className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">
                    25,000+
                  </div>
                  <div className="text-sm text-gray-600">Books</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-xl">
                  <BookOpen className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">150+</div>
                  <div className="text-sm text-gray-600">Journals</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-xl">
                  <BookOpen className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">50+</div>
                  <div className="text-sm text-gray-600">Magazines</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-xl">
                  <BookOpen className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">5,000+</div>
                  <div className="text-sm text-gray-600">E-Books</div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Library Timings
                </h4>
                <div className="space-y-2 text-gray-700">
                  <p>
                    <strong>Weekdays:</strong> 9:00 AM - 8:00 PM
                  </p>
                  <p>
                    <strong>Saturdays:</strong> 9:00 AM - 5:00 PM
                  </p>
                  <p>
                    <strong>Sundays:</strong> 10:00 AM - 4:00 PM
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t">
                  <p className="text-sm text-gray-600">
                    <strong>Librarian:</strong> Dr. Radha Krishnan
                    <br />
                    <strong>Contact:</strong> library@cas.edu.in |
                    +91-9876543221
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6 flex flex-col">
              <img
                src="https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Library"
                className="w-full h-56 sm:h-64 md:h-80 lg:h-96 object-cover rounded-2xl shadow-lg mb-2"
              />
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Digital Resources
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• IEEE Digital Library Access</li>
                  <li>• ACM Digital Library</li>
                  <li>• SpringerLink Online Journals</li>
                  <li>• DELNET Membership</li>
                  <li>• NPTEL Video Lectures</li>
                  <li>• Online Databases & Research Papers</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer onNavigate={noopNavigate} />
    </div>
  );
};

export default Library;
