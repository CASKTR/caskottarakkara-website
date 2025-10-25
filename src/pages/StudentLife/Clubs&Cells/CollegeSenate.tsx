import React, { useEffect, useRef, useState } from "react";
import { User, ChevronRight, Crown } from "lucide-react";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import unionMembers from "../../../../public/assets/unionmembers.json";

const CollegeSenate = () => {
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

  interface Member {
    position?: string;
    name: string;
    course: string;
    category: "executive" | "secretary" | "representative";
    priority?: number;
  }

  const getIcon = (position: string): JSX.Element => {
    switch (position.toLowerCase()) {
      case "chairman":
        return <User className="w-6 h-6" />;
      case "general secretary":
        return <User className="w-6 h-6" />;
      case "vice chairman":
        return <User className="w-6 h-6" />;
      case "university union councillor":
        return <User className="w-6 h-6" />;
      case "arts club secretary":
        return <User className="w-6 h-6" />;
      case "magazine editor":
        return <User className="w-6 h-6" />;
      case "sports secretary":
        return <User className="w-6 h-6" />;
      case "1st year representative":
      case "2nd year representative":
        return <User className="w-6 h-6" />;
      default:
        return <User className="w-6 h-6" />;
    }
  };

  interface GetGradientProps {
    position: string;
  }

  const getGradient = (position: GetGradientProps["position"]): string => {
    switch (position.toLowerCase()) {
      case "chairman":
        return "from-blue-500 to-cyan-600";
      case "general secretary":
        return "from-blue-500 to-cyan-600";
      case "vice chairman":
        return "from-blue-500 to-cyan-600";
      case "university union councillor":
        return "from-blue-500 to-cyan-600";
      case "arts club secretary":
        return "from-green-500 to-green-600";
      case "magazine editor":
        return "from-green-500 to-green-600";
      case "sports secretary":
        return "from-green-500 to-green-600";
      default:
        return "from-purple-500 to-purple-600";
    }
  };

  interface SectionHeaderProps {
    title: string;
    subtitle: string;
    icon: React.ElementType;
    color?: string;
  }

  const SectionHeader: React.FC<SectionHeaderProps> = ({
    title,
    subtitle,
    icon: Icon,
    color = "blue",
  }) => (
    <div className="text-center mb-8">
      <div
        className={`inline-flex items-center justify-center w-16 h-16 bg-${color}-100 rounded-full mb-4`}
      >
        <Icon className={`w-8 h-8 text-${color}-600`} />
      </div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
      <p className="text-gray-600">{subtitle}</p>
      <div className={`w-24 h-1 bg-${color}-600 mx-auto mt-4`}></div>
    </div>
  );

  // MemberCard //
  const MemberCard: React.FC<{ member: Member; isHighlighted?: boolean }> = ({
    member,
    isHighlighted = false,
  }) => {
    const pos = member.position || "";
    const gradient = getGradient(pos);
    return (
      <div
        className={`flex items-center p-4 rounded-xl shadow-sm ${
          isHighlighted ? "" : "bg-white"
        }`}
      >
        <div
          className={`flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br ${gradient} p-1 mr-4`}
        >
          <div className="flex items-center justify-center w-full h-full bg-white rounded-full">
            {getIcon(pos)}
          </div>
        </div>
        <div className="min-w-0">
          <div className="text-lg font-bold text-gray-900 truncate">
            {member.name}
          </div>
          {member.position && (
            <div className="text-sm font-bold text-gray-600 truncate">
              {member.position}
            </div>
          )}
        </div>
      </div>
    );
  };

  function noopNavigate(): void {}

  return (
    <>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Header
          activeSection="student-life"
          onNavigate={noopNavigate}
          scrollY={scrollY}
          isHidden={isNavHidden}
        />

        {/* Page title band */}
        <section className="pt-[155px] md:pt-[170px] lg:pt-[185px] bg-gradient-to-br from-blue-800 to-indigo-950 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex items-center text-sm text-white/80 mb-3">
              <span className="hover:text-white transition-colors">
                Student Life
              </span>
              <ChevronRight className="mx-2 w-4 h-4 opacity-70" />
              <span className="text-white">College Senate</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">College Senate</h1>
            <p className="mt-2 text-white/90 max-w-2xl">
              Representing student voices and fostering leadership excellence in
              our academic community.
            </p>
          </div>
        </section>

        {/* Main content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="space-y-12">
            {/* Introduction */}
            <section className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                College Student Union
              </h1>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-x2 text-black-600 max-w-5xl mx-auto">
                The Student's Union of the College serves as an excellent
                platform for students to develop leadership and decision-making
                skills. Guided by the Principal and staff advisors, the Union
                organizes most co-curricular activities and encourages
                participation in sports, arts, and cultural events. Its main
                objectives are to promote responsible citizenship, leadership,
                character development, and a spirit of service among students.
                Every year, a new body of student representatives is elected as
                per Kerala University guidelines. The principal office bearers
                include the Chairman, Vice Chairman, General Secretary, Arts
                Club Secretary, Student Editor, University Union Councillors,
                and Class Representatives. Elections are conducted in a
                two-stage Parliamentary mode following the simple majority
                system.
              </p>
            </section>

            {/* Executive Committee */}
            <section className="bg-white rounded-3xl shadow-xl ring-1 ring-gray-100 p-6 md:p-10">
              <SectionHeader
                title="Senate Leadership"
                subtitle="Leading with vision and dedication to student welfare"
                icon={Crown}
                color="blue"
              />
              <div className="grid gap-6 lg:grid-cols-2">
                {unionMembers.executiveMembers.map((member, index) => (
                  <MemberCard
                    key={index}
                    member={{
                      ...member,
                      category: member.category as
                        | "executive"
                        | "secretary"
                        | "representative",
                    }}
                    isHighlighted={member.position === "Chairman"}
                  />
                ))}
              </div>
            </section>
          </div>
        </main>
        <Footer onNavigate={noopNavigate} />
      </div>
    </>
  );
};

export default CollegeSenate;
