import { useEffect, useRef, useState } from "react";
import { ChevronRight } from "lucide-react";
import {
  Lightbulb,
  Users,
  Rocket,
  Award,
  Target,
  TrendingUp,
  Globe,
  Briefcase,
  Brain,
  Star,
  ArrowRight,
  CheckCircle2,
  Building,
  DollarSign,
  Network,
  User,
} from "lucide-react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

const outcomes = [
  {
    icon: TrendingUp,
    title: "Entrepreneurial Mindset",
    description:
      "Students develop a proactive, innovative, and resilient approach to challenges.",
  },
  {
    icon: Brain,
    title: "Skill Enhancement",
    description:
      "Improved leadership, teamwork, and technical skills through hands-on experience.",
  },
  {
    icon: Network,
    title: "Professional Network",
    description:
      "Expanded connections with industry experts, mentors, and peers.",
  },
  {
    icon: Target,
    title: "Successful Ventures",
    description: "Launch of student-led startups and impactful projects.",
  },
];

// Define keyFeatures array
const keyFeatures = [
  {
    icon: Lightbulb,
    color: "bg-yellow-500",
    title: "Innovation Hub",
    description:
      "A space to brainstorm, prototype, and develop creative solutions.",
    details: [
      "Access to labs and resources",
      "Mentorship from industry experts",
      "Collaborative environment",
    ],
  },
  {
    icon: Users,
    color: "bg-blue-600",
    title: "Networking Opportunities",
    description: "Connect with entrepreneurs, investors, and professionals.",
    details: [
      "Startup events and meetups",
      "Industry visits",
      "Alumni network",
    ],
  },
  {
    icon: Award,
    color: "bg-purple-600",
    title: "Skill Development",
    description: "Workshops and training to enhance entrepreneurial skills.",
    details: [
      "Leadership programs",
      "Technical skill workshops",
      "Soft skill training",
    ],
  },
  {
    icon: DollarSign,
    color: "bg-green-600",
    title: "Funding Support",
    description: "Guidance and opportunities for early-stage funding.",
    details: ["Pitch competitions", "Seed funding access", "Investor connects"],
  },
];

const initiatives = [
  {
    icon: Briefcase,
    title: "Startup Bootcamp",
    description:
      "Intensive training program for aspiring entrepreneurs to learn the basics of building a startup.",
    benefits: ["Hands-on workshops", "Mentorship sessions", "Pitch practice"],
  },
  {
    icon: Globe,
    title: "Global Exposure",
    description:
      "Opportunities to participate in international competitions and exchange programs.",
    benefits: [
      "International hackathons",
      "Student exchange",
      "Global networking",
    ],
  },
  {
    icon: Building,
    title: "Industry Connect",
    description:
      "Collaborations with leading companies for internships and live projects.",
    benefits: [
      "Corporate internships",
      "Live industry projects",
      "Expert talks",
    ],
  },
];

const IEDCPage: React.FC = () => {
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
            <span className="hover:text-white transition-colors">
              Clubs & Cells
            </span>
            <ChevronRight className="mx-2 h-4 w-4 opacity-70" />
            <span className="text-white">IEDC</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">
            Innovation and Entrepreneurship Development Club
          </h1>
          <p className="mt-2 text-white/90 max-w-2xl">
            Your first launch pad for an entrepreneurial journey, empowering
            students with cutting-edge technology and exceptional mentorship.
          </p>
        </div>
      </section>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12">
        <div className="space-y-12">
          {/* Section Title */}
          <div className="text-center">
            <h2 className="text-4xl md:text-3xl font-bold text-gray-900 mb-4">
              IEDC Club, College of Applied Science, Kottarakkara
            </h2>
            <div className="w-24 h-1 bg-blue-600 rounded mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Your first launch pad for an entrepreneurial journey, empowering
              students with cutting-edge technology, world-class infrastructure,
              and exceptional mentorship.
            </p>
          </div>

          {/* Overview */}
          <div className="rounded-2xl bg-white shadow-lg ring-1 ring-gray-100 p-6 md:p-10">
            <div className="flex items-start space-x-4">
              <Rocket className="h-8 w-8 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  About IEDC
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  The Innovation and Entrepreneurship Development Club (IEDC) at
                  the College of Applied Science, Kottarakkara, serves as a
                  vibrant platform for students to explore, experiment, and
                  innovate. Acting as the first launch pad for a student's
                  entrepreneurial journey, the club empowers young minds with
                  access to cutting-edge technology, world-class infrastructure,
                  high-quality mentorship, early-stage funding opportunities,
                  and global exposure.
                </p>

                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 border border-gray-200 mb-6">
                  <div className="flex items-center mb-3">
                    <Star className="h-6 w-6 text-yellow-500 mr-2" />
                    <h4 className="font-semibold text-gray-900">
                      Supported by Kerala Startup Mission
                    </h4>
                  </div>
                  <p className="text-gray-700">
                    As a flagship initiative supported by the Kerala Startup
                    Mission, our IEDC is dedicated to nurturing a culture of
                    innovation and entrepreneurship within the college. The club
                    encourages students from diverse academic backgrounds to
                    engage in creative problem-solving, develop entrepreneurial
                    skills, and translate their ideas into impactful ventures.
                  </p>
                </div>

                <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                  <h4 className="font-semibold text-green-900 mb-2">
                    Our Mission
                  </h4>
                  <p className="text-green-800">
                    Through the IEDC, students gain hands-on experience in
                    techno-entrepreneurship, fostering innovation that
                    contributes to wealth creation and employment opportunities.
                    By leveraging the expertise and infrastructure available at
                    the college, the club ensures that every student has the
                    tools and guidance necessary to transform their innovative
                    ideas into reality.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="rounded-3xl bg-white shadow-xl ring-1 ring-gray-100 p-6 md:p-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              What We Offer
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {keyFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`p-3 rounded-xl ${feature.color} text-white`}
                    >
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600 mb-3">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {feature.details.map((detail, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-gray-700"
                      >
                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Programs & Initiatives */}
          <div className="rounded-3xl bg-white shadow-xl ring-1 ring-gray-100 p-6 md:p-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Programs & Initiatives
            </h3>
            <div className="space-y-8">
              {initiatives.map((initiative, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-indigo-600 text-white">
                      <initiative.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">
                        {initiative.title}
                      </h4>
                      <p className="text-gray-600 mb-4">
                        {initiative.description}
                      </p>
                      <div className="grid md:grid-cols-3 gap-4">
                        {initiative.benefits.map((benefit, idx) => (
                          <div key={idx} className="bg-gray-50 rounded-lg p-3">
                            <div className="flex items-start gap-2">
                              <ArrowRight className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-gray-700">
                                {benefit}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Expected Outcomes */}
          <div className="rounded-3xl bg-white shadow-xl ring-1 ring-gray-100 p-6 md:p-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Expected Outcomes
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {outcomes.map((outcome, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <outcome.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {outcome.title}
                      </h4>
                      <p className="text-gray-600">{outcome.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Coordinator Information */}
          <div className="rounded-3xl bg-white shadow-xl ring-1 ring-gray-100 p-6 md:p-10">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Club Coordinator
              </h3>
              <div className="w-24 h-1 bg-blue-600 rounded mx-auto"></div>
            </div>

            <div className="max-w-md mx-auto">
              <div className="border border-gray-200 rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <User className="w-12 h-12 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Smt. Nisa Babu
                </h4>
                <p className="text-gray-700 font-medium mb-1">
                  Assistant Professor
                </p>
                <p className="text-gray-600 text-sm">
                  Department of Psychology
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mt-8 bg-green-50 rounded-lg p-6 text-center">
              <h4 className="font-semibold text-black-900 mb-2">
                Get Involved
              </h4>
              <p className="text-black-800 text-sm">
                Ready to start your entrepreneurial journey? Contact our
                coordinator to learn more about joining the IEDC and accessing
                our resources and programs.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer onNavigate={noopNavigate} />
    </div>
  );
};

export default IEDCPage;
