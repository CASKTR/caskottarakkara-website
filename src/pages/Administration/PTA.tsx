import { useEffect, useRef, useState } from "react";
import {
  ChevronRight,
  Users,
  Target,
  HandHeart,
  MessageCircle,
} from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const PTAData = {
  title: "Parent Teacher Association (PTA)",
  description:
    "Fostering collaboration between parents and teachers for the holistic development of students.",
  about:
    "The Parent-Teacher Association at our college serves as a vital link between parents, teachers, and students. It works to foster cooperation, mutual understanding, and active participation in the academic and personal development of students. The PTA plays a key role in supporting institutional activities, addressing student needs, and contributing to the overall growth of the college. By encouraging collaboration and open dialogue, the PTA ensures a strong partnership between home and institution for the betterment of every learner.",
  members: [
    { name: "P. Sureshkumar", position: "PTA President" },
    { name: "Beena Baby", position: "Vice President" },
    { name: "Remya Raj", position: "Joint Secretary" },
  ],
};

const PTAPage = () => {
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

  const objectives = [
    {
      icon: HandHeart,
      title: "Foster Cooperation",
      description:
        "Building strong partnerships between parents, teachers, and students for mutual understanding and support.",
    },
    {
      icon: Target,
      title: "Academic Excellence",
      description:
        "Supporting institutional activities and initiatives that contribute to academic and personal development.",
    },
    {
      icon: MessageCircle,
      title: "Open Dialogue",
      description:
        "Encouraging transparent communication and active participation in addressing student needs and concerns.",
    },
    {
      icon: Users,
      title: "Community Growth",
      description:
        "Contributing to the overall growth and development of the college community and its stakeholders.",
    },
  ];

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
            <span className="text-white">PTA</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">
            Parent Teacher Association (PTA)
          </h1>
          <p className="mt-2 text-white/90 max-w-2xl">
            Fostering collaboration between parents and teachers for the
            holistic development of students.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="flex-1 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          {/* About Section */}
          <div className="mb-16">
            <div className="rounded-3xl bg-white shadow-2xl ring-1 ring-gray-100 p-8 md:p-12 relative overflow-hidden">
              <div className="relative">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Users className="mr-3 h-8 w-8 text-blue-600" />
                  About the PTA
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {PTAData.about}
                </p>
              </div>
            </div>
          </div>

          {/* Objectives Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Our Objectives
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {objectives.map((objective, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                >
                  <div className="bg-gradient-to-br from-blue-500 to-indigo-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <objective.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {objective.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {objective.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Leadership Team */}
          <div className="mb-16">
            <div className="rounded-3xl bg-gray-50 border border-gray-200 p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
                Leadership Team
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {PTAData.members.map((member, index) => (
                  <div key={index} className="text-center group">
                    <div className="bg-white rounded-2xl p-6 border bsorder-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-300">
                      <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center border border-gray-200">
                        <Users className="h-7 w-7 text-green-600" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-800">
                        {member.name}
                      </h3>
                      <p className="text-gray-500 text-sm">{member.position}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer onNavigate={noopNavigate} />
    </div>
  );
};

export default PTAPage;
