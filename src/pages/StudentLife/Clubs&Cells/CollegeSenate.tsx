import React, { useEffect, useRef, useState } from "react";
import {
  Users,
  Award,
  BookOpen,
  Palette,
  Edit,
  Trophy,
  UserCheck,
  ChevronRight,
  Crown,
  Shield,
  Star,
  Briefcase,
} from "lucide-react";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

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
        return <Crown className="w-6 h-6" />;
      case "general secretary":
        return <Award className="w-6 h-6" />;
      case "vice chairman":
        return <Shield className="w-6 h-6" />;
      case "university union councillor":
        return <BookOpen className="w-6 h-6" />;
      case "arts club secretary":
        return <Palette className="w-6 h-6" />;
      case "magazine editor":
        return <Edit className="w-6 h-6" />;
      case "sports secretary":
        return <Trophy className="w-6 h-6" />;
      case "1st year representative":
      case "2nd year representative":
        return <Users className="w-6 h-6" />;
      default:
        return <UserCheck className="w-6 h-6" />;
    }
  };

  interface GetGradientProps {
    position: string;
  }

  const getGradient = (position: GetGradientProps["position"]): string => {
    switch (position.toLowerCase()) {
      case "chairman":
        return "from-purple-500 to-indigo-600";
      case "general secretary":
        return "from-blue-500 to-cyan-600";
      case "vice chairman":
        return "from-indigo-500 to-purple-600";
      case "university union councillor":
        return "from-green-500 to-teal-600";
      case "arts club secretary":
        return "from-pink-500 to-rose-600";
      case "magazine editor":
        return "from-orange-500 to-red-600";
      case "sports secretary":
        return "from-yellow-500 to-orange-600";
      default:
        return "from-gray-500 to-slate-600";
    }
  };

  const executiveMembers: Member[] = [
    {
      position: "Chairman",
      name: "Indraraj RS",
      course: "S2 Psychology",
      category: "executive",
      priority: 1,
    },
    {
      position: "General Secretary",
      name: "Arjuna Dipu R",
      course: "S4 Journalism and Mass Communication",
      category: "executive",
      priority: 2,
    },
    {
      position: "Vice Chairman",
      name: "Ansa Thomas",
      course: "S4 B. Com",
      category: "executive",
      priority: 3,
    },
    {
      position: "University Union Councillor",
      name: "Devadath BR",
      course: "S2 Journalism and Mass Communication",
      category: "executive",
      priority: 4,
    },
  ];

  const secretaryMembers: Member[] = [
    {
      position: "Arts Club Secretary",
      name: "Arsha SH",
      course: "S2 B. Com",
      category: "secretary",
    },
    {
      position: "Magazine Editor",
      name: "Kavya S",
      course: "S4 Psychology",
      category: "secretary",
    },
    {
      position: "Sports Secretary",
      name: "Sarath",
      course: "S4 B. Com",
      category: "secretary",
    },
  ];

  const ladyRepresentatives: Member[] = [
    {
      name: "Vishnumaya A",
      course: "Lady Representative",
      category: "representative",
    },
    {
      name: "Gowri Gireesh",
      course: "S4 Psychology",
      category: "representative",
    },
  ];

  const yearRepresentatives: Member[] = [
    {
      position: "1st Year Representative",
      name: "Aditya",
      course: "S4 Journalism",
      category: "representative",
    },
    {
      position: "2nd Year Representative",
      name: "Bittu Baby",
      course: "S4 Computer Science",
      category: "representative",
    },
  ];
  const MemberCard = ({
    member,
    isHighlighted = false,
  }: {
    member: Member;
    isLadyRep?: boolean;
    isHighlighted?: boolean;
  }) => (
    <div
      className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-l-4 hover:scale-105 ${
        isHighlighted
          ? "border-purple-500 ring-2 ring-purple-200"
          : member.category === "executive"
          ? "border-blue-500"
          : member.category === "secretary"
          ? "border-green-500"
          : "border-gray-400"
      }`}
    >
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div
            className={`w-12 h-12 bg-gradient-to-br ${getGradient(
              member.position || "representative"
            )} rounded-full flex items-center justify-center text-white shadow-lg`}
          >
            {getIcon(member.position || "representative")}
          </div>
        </div>
        <div className="flex-grow">
          <h3 className="text-xl font-bold text-gray-800 mb-1">
            {member.name}
          </h3>
          {member.position && (
            <p
              className={`font-semibold mb-2 ${
                member.category === "executive"
                  ? "text-blue-600"
                  : member.category === "secretary"
                  ? "text-green-600"
                  : "text-purple-600"
              }`}
            >
              {member.position}
            </p>
          )}
          <p className="text-gray-600">{member.course}</p>
        </div>
        {isHighlighted && (
          <div className="flex-shrink-0">
            <Star className="w-6 h-6 text-purple-500" />
          </div>
        )}
      </div>
    </div>
  );

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
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12">
            <div className="flex items-center text-sm text-white/80 mb-3">
              <span className="hover:text-white transition-colors">
                Student Life
              </span>
              <ChevronRight className="mx-2 h-4 w-4 opacity-70" />
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
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12">
          <div className="space-y-12">
            {/* Introduction */}
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Student Leadership Council
              </h1>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our College Senate represents the collective voice of students,
                driving initiatives for academic excellence, cultural
                enrichment, and holistic development within our institution.
              </p>
            </div>

            {/* Executive Committee */}
            <div className="rounded-3xl bg-white shadow-xl ring-1 ring-gray-100 p-6 md:p-10">
              <SectionHeader
                title="Executive Committee"
                subtitle="Leading with vision and dedication to student welfare"
                icon={Crown}
                color="blue"
              />
              <div className="grid lg:grid-cols-2 gap-6">
                {executiveMembers.map((member, index) => (
                  <MemberCard
                    key={index}
                    member={member}
                    isHighlighted={member.position === "Chairman"}
                  />
                ))}
              </div>
            </div>

            {/* Secretaries */}
            <div className="rounded-3xl bg-white shadow-xl ring-1 ring-gray-100 p-6 md:p-10">
              <SectionHeader
                title="Department Secretaries"
                subtitle="Specialized leadership for diverse student activities"
                icon={Briefcase}
                color="green"
              />
              <div className="grid lg:grid-cols-3 gap-6">
                {secretaryMembers.map((member, index) => (
                  <MemberCard key={index} member={member} />
                ))}
              </div>
            </div>

            {/* Representatives Section */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Lady Representatives */}
              <div className="rounded-3xl bg-white shadow-xl ring-1 ring-gray-100 p-6 md:p-8">
                <SectionHeader
                  title="Lady Representatives"
                  subtitle="Advocating for women's participation and empowerment"
                  icon={Users}
                  color="purple"
                />
                <div className="space-y-6">
                  {ladyRepresentatives.map((member, index) => (
                    <MemberCard key={index} member={member} isLadyRep={true} />
                  ))}
                </div>
              </div>

              {/* Year Representatives */}
              <div className="rounded-3xl bg-white shadow-xl ring-1 ring-gray-100 p-6 md:p-8">
                <SectionHeader
                  title="Year Representatives"
                  subtitle="Bridging communication between students and administration"
                  icon={UserCheck}
                  color="orange"
                />
                <div className="space-y-6">
                  {yearRepresentatives.map((member, index) => (
                    <MemberCard key={index} member={member} />
                  ))}
                </div>
              </div>
            </div>

            {/* Senate Responsibilities */}
            <div className="rounded-3xl bg-white shadow-xl ring-1 ring-gray-100 p-6 md:p-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Senate Responsibilities
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center p-6 bg-blue-50 rounded-xl">
                  <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-blue-900 mb-2">
                    Student Representation
                  </h3>
                  <p className="text-blue-800 text-sm">
                    Voice student concerns and suggestions to college
                    administration
                  </p>
                </div>
                <div className="text-center p-6 bg-green-50 rounded-xl">
                  <Award className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-green-900 mb-2">
                    Academic Excellence
                  </h3>
                  <p className="text-green-800 text-sm">
                    Promote quality education and academic initiatives
                  </p>
                </div>
                <div className="text-center p-6 bg-purple-50 rounded-xl">
                  <Palette className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-purple-900 mb-2">
                    Cultural Activities
                  </h3>
                  <p className="text-purple-800 text-sm">
                    Organize and oversee cultural events and celebrations
                  </p>
                </div>
                <div className="text-center p-6 bg-orange-50 rounded-xl">
                  <Trophy className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-orange-900 mb-2">
                    Sports & Wellness
                  </h3>
                  <p className="text-orange-800 text-sm">
                    Promote physical fitness and competitive sports
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="rounded-3xl bg-white shadow-xl ring-1 ring-gray-100 p-6 md:p-10">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 text-center border border-blue-200">
                <Users className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-blue-900 mb-3">
                  Connect with Your Senate
                </h3>
                <p className="text-blue-800 mb-6 max-w-2xl mx-auto">
                  The College Senate is here to serve you. Reach out with your
                  ideas, concerns, or suggestions to help us make our college
                  experience better for everyone.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
                  <div className="text-blue-700">
                    <strong>Student Affairs Office</strong>
                  </div>
                  <div className="text-blue-700">
                    <strong>Email:</strong> senate@college.edu
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer onNavigate={noopNavigate} />
    </>
  );
};

export default CollegeSenate;
