import { useEffect, useRef, useState } from "react";
import {
  Handshake,
  Users,
  ChevronRight,
  BookOpen,
  Target,
  Award,
  MapPin,
  Calendar,
  FileText,
  CheckCircle2,
  Building,
  Globe,
  Star,
} from "lucide-react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

const collaborations = [
  {
    name: "Mar Thoma College of Science & Technology, Ayur",
    location: "Ayur",
    description:
      "Strategic partnership focused on academic excellence and NAAC initiatives, fostering collaborative learning environments.",
    areas: [
      "NAAC Initiatives",
      "FYUGP Skill Courses",
      "Quality Enhancement",
      "Research Collaboration",
    ],
    established: "2024",
    type: "Educational Alliance",
  },
  {
    name: "St. John's College, Anchal",
    location: "Anchal",
    description:
      "Comprehensive collaboration aimed at enhancing educational quality and expanding skill development opportunities.",
    areas: [
      "FYUGP Skill Courses",
      "Academic Standards",
      "Joint Research Projects",
      "Quality Enhancement",
    ],
    established: "2024",
    type: "Educational Alliance",
  },
  {
    name: " St. Gregorios College, Kottarakkara",
    location: "Kottarakkara",
    description:
      "Multi-faceted partnership supporting accreditation processes and innovative skill-based learning programs.",
    areas: [
      "NAAC Support",
      "Skill Development",
      "Quality Enhancement",
      "Academic Standards",
    ],
    established: "2024",
    type: "Educational Alliance",
  },
];

const benefits = [
  {
    icon: BookOpen,
    title: "Enhanced Learning Experiences",
    description:
      "Access to diverse academic resources and teaching methodologies from partner institutions.",
    color: "bg-blue-600",
  },
  {
    icon: Users,
    title: "Faculty & Student Exchange",
    description:
      "Opportunities for academic mobility and exposure to different institutional cultures.",
    color: "bg-indigo-600",
  },
  {
    icon: Target,
    title: "Resource Optimization",
    description:
      "Efficient utilization of infrastructure, technology, and academic resources across institutions.",
    color: "bg-green-600",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description:
      "Collaborative approach to maintaining and improving academic standards and accreditation.",
    color: "bg-orange-600",
  },
];

const initiatives = [
  {
    title: "NAAC-Related Initiatives",
    description:
      "Collaborative efforts to enhance institutional quality and meet accreditation standards.",
    details: [
      "Joint quality enhancement programs",
      "Shared best practices and methodologies",
      "Collaborative assessment and evaluation",
      "Institutional development initiatives",
    ],
    icon: Award,
    color: "blue",
  },
  {
    title: "FYUGP Skill Courses",
    description:
      "Four Year Undergraduate Program skill development courses offered through partnerships.",
    details: [
      "Industry-relevant skill training",
      "Cross-institutional course offerings",
      "Shared expertise and resources",
      "Enhanced employability focus",
    ],
    icon: Target,
    color: "green",
  },
];

const AcademicCollaborationsPage = () => {
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
      <section className="pt-[140px] md:pt-[160px] lg:pt-[180px] bg-gradient-to-br from-blue-800 to-indigo-950 text-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center text-sm text-white/80 mb-3">
            <span className="hover:text-white transition-colors">
              Academics
            </span>
            <ChevronRight className="mx-2 h-4 w-4 opacity-70" />
            <span className="text-white">Academic Collaborations</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">
            Academic Collaborations
          </h1>
          <p className="mt-2 text-white/90 max-w-2xl">
            Building bridges for academic excellence through strategic
            partnerships and collaborative initiatives.
          </p>
        </div>
      </section>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12">
        {/* Overview Section */}
        <div className="space-y-8">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-3xl font-bold text-gray-900 mb-4 mt-8">
              Strategic Academic Partnerships
            </h1>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fostering collaborative relationships to enhance educational
              quality, promote academic excellence, and create enriched learning
              environments for our students.
            </p>
          </div>

          {/* Mission Statement */}
          <div className="rounded-2xl bg-white shadow-lg ring-1 ring-gray-100 p-6 md:p-8">
            <div className="flex items-start space-x-4">
              <Handshake className="h-8 w-8 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  Collaborative Vision
                </h2>
                <p className="text-gray-700 text-base mb-4">
                  The College actively fosters academic partnerships to enhance
                  quality education and holistic development. Through strategic
                  collaborations with nearby institutions, we ensure enriched
                  learning experiences, better resource utilization, and a
                  collaborative approach to academic excellence.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h3 className="font-semibold text-blue-900 mb-1">
                      Partnership Focus
                    </h3>
                    <p className="text-blue-800 text-sm">
                      Quality enhancement and academic standards
                    </p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <h3 className="font-semibold text-green-900 mb-1">
                      Collaborative Approach
                    </h3>
                    <p className="text-green-800 text-sm">
                      Shared resources and expertise
                    </p>
                  </div>
                  <div className="bg-indigo-50 rounded-lg p-4">
                    <h3 className="font-semibold text-indigo-900 mb-1">
                      Student Benefits
                    </h3>
                    <p className="text-indigo-800 text-sm">
                      Enhanced learning opportunities
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Partner Institutions */}
          <div className="rounded-3xl bg-white shadow-xl ring-1 ring-gray-100 p-6 md:p-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Partner Institutions
            </h2>
            <div className="grid lg:grid-cols-3 gap-6">
              {collaborations.map((collaboration, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                        {collaboration.name}
                      </h3>
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <MapPin className="h-4 w-4 mr-1" />
                        {collaboration.location}
                      </div>
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {collaboration.type}
                      </span>
                    </div>
                    <Building className="h-8 w-8 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  </div>

                  <p className="text-gray-600 mb-4 text-sm">
                    {collaboration.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-2 text-sm">
                      Collaboration Areas:
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {collaboration.areas.map((area, areaIndex) => (
                        <span
                          key={areaIndex}
                          className="inline-flex items-center px-2 py-1 rounded text-xs bg-gray-100 text-gray-700"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center text-xs text-gray-500">
                      <Calendar className="h-3 w-3 mr-1" />
                      Est. {collaboration.established}
                    </div>
                    <div className="flex items-center text-xs text-green-600">
                      <CheckCircle2 className="h-3 w-3 mr-1" />
                      Active
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Initiatives */}
          <div className="rounded-3xl bg-white shadow-xl ring-1 ring-gray-100 p-6 md:p-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Key Collaborative Initiatives
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {initiatives.map((initiative, index) => (
                <div key={index} className="space-y-4">
                  <div
                    className={`flex items-center gap-3 p-4 bg-${initiative.color}-50 rounded-lg`}
                  >
                    <initiative.icon
                      className={`h-6 w-6 text-${initiative.color}-600`}
                    />
                    <h3
                      className={`text-lg font-semibold text-${initiative.color}-900`}
                    >
                      {initiative.title}
                    </h3>
                  </div>
                  <p className="text-gray-700">{initiative.description}</p>
                  <div className="space-y-2">
                    {initiative.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start gap-2">
                        <CheckCircle2
                          className={`h-4 w-4 text-${initiative.color}-600 mt-0.5 flex-shrink-0`}
                        />
                        <span className="text-gray-700 text-sm">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="rounded-3xl bg-white shadow-xl ring-1 ring-gray-100 p-6 md:p-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Partnership Benefits
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-3 rounded-xl ${benefit.color} text-white flex-shrink-0`}
                    >
                      <benefit.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Impact and Future Plans */}
          <div className="rounded-3xl bg-white shadow-xl ring-1 ring-gray-100 p-6 md:p-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Impact & Future Vision
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  Current Impact
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Star className="h-5 w-5 text-yellow-500" />
                    <span className="text-gray-700">
                      Enhanced academic standards through collaborative quality
                      initiatives
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="h-5 w-5 text-blue-500" />
                    <span className="text-gray-700">
                      Expanded access to diverse skill development courses
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">
                      Strengthened faculty development and research
                      opportunities
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="h-5 w-5 text-purple-500" />
                    <span className="text-gray-700">
                      Improved NAAC accreditation outcomes through shared
                      expertise
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  Future Expansion
                </h3>
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200">
                  <p className="text-gray-700 mb-4">
                    Looking ahead, we plan to expand our collaborative network
                    to include more regional institutions and explore
                    partnerships with industry leaders to further enhance our
                    academic offerings.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-blue-800">
                      <CheckCircle2 className="h-4 w-4" />
                      <span>Additional institutional partnerships</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-blue-800">
                      <CheckCircle2 className="h-4 w-4" />
                      <span>Industry collaboration programs</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-blue-800">
                      <CheckCircle2 className="h-4 w-4" />
                      <span>International academic exchanges</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="rounded-3xl bg-white shadow-xl ring-1 ring-gray-100 p-6 md:p-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Partnership Opportunities
            </h2>
            <div className="bg-blue-50 rounded-lg p-6 text-center">
              <FileText className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                Interested in Collaboration?
              </h3>
              <p className="text-blue-800 mb-4">
                We welcome discussions with institutions interested in forming
                academic partnerships that align with our mission of educational
                excellence and student development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="text-sm text-blue-700">
                  <strong>Contact:</strong> 8089754259
                </div>
                <div className="text-sm text-blue-700">
                  <strong>Email:</strong> caskottarakkara.ihrd@gmail.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer onNavigate={noopNavigate} />
    </div>
  );
};

export default AcademicCollaborationsPage;
