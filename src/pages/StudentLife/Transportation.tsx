import { useEffect, useRef, useState } from "react";
import {
  ChevronRight,
  Bus,
  Clock,
  IndianRupee,
  User,
  MapPin,
  CheckCircle2,
  Shield,
  Timer,
  CalendarDays,
} from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
const busFeatures = [
  {
    icon: Shield,
    title: "Safe & Secure",
    description:
      "Well-maintained buses with experienced drivers ensuring student safety",
  },
  {
    icon: Timer,
    title: "Punctual Service",
    description:
      "Strict adherence to scheduled timings for reliable daily commute",
  },
  {
    icon: MapPin,
    title: "Convenient Routes",
    description: "Strategic stops covering major areas for easy accessibility",
  },
  {
    icon: IndianRupee,
    title: "Affordable Pricing",
    description: "Cost-effective transportation options for all students",
  },
];

const committeeMembers = [
  {
    name: "Ms. Aadarsha S",
    position: "Assistant Professor in Commerce",
    role: "Coordinator",
    department: "Department of Commerce",
  },
  {
    name: "Smt. Dhanya S",
    position: "Office Assistant",
    role: "Administrative Support",
    department: "Administrative Office",
  },
  {
    name: "Sri. Premachandran Pillai K",
    position: "LGS",
    role: "Operational Support",
    department: "Support Staff",
  },
];

const TransportationPage = () => {
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
            <span className="text-white">Transportation</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">Transportation </h1>
          <p className="mt-2 text-white/90 max-w-2xl">
            Your first launch pad for an entrepreneurial journey, empowering
            students with cutting-edge technology and exceptional mentorship.
          </p>
        </div>
      </section>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-3xl font-bold text-gray-900 mb-4 mt-8">
              College Transportation Service
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The College of Applied Science, Kottarakkara provides a safe and
              convenient bus service for students commuting to and from the
              campus. Our transportation system ensures punctuality, comfort,
              and accessibility for all students.
            </p>
          </div>

          {/* Service Overview */}
          <div className="rounded-2xl bg-white shadow-lg ring-1 ring-gray-100 p-6 md:p-6">
            <div className="flex items-start space-x-4">
              <Bus className="h-8 w-8 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Service Overview
                </h3>
                <p className="text-gray-700 text-base mb-4">
                  Our dedicated bus service connects students from key locations
                  to the campus, ensuring safe and timely transportation for
                  daily academic activities.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-900 mb-1">
                      Key Benefits
                    </h4>
                    <ul className="space-y-1 text-blue-800 text-sm">
                      <li className="flex items-start">
                        <CheckCircle2 className="h-4 w-4 mt-0.5 mr-2 flex-shrink-0" />
                        Safe and reliable transportation
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-4 w-4 mt-0.5 mr-2 flex-shrink-0" />
                        Punctual daily service
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-4 w-4 mt-0.5 mr-2 flex-shrink-0" />
                        Affordable pricing options
                      </li>
                    </ul>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-semibold text-green-900 mb-1">
                      Coverage Areas
                    </h4>
                    <ul className="space-y-1 text-green-800 text-sm">
                      <li className="flex items-start">
                        <CheckCircle2 className="h-4 w-4 mt-0.5 mr-2 flex-shrink-0" />
                        Kottarakkara town
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-4 w-4 mt-0.5 mr-2 flex-shrink-0" />
                        ETC Junction area
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-4 w-4 mt-0.5 mr-2 flex-shrink-0" />
                        College campus
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bus Features */}
          <div className="rounded-3xl bg-white shadow-xl ring-1 ring-gray-100 p-6 md:p-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Service Features
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {busFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <feature.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bus Routes & Timing */}
          <div className="rounded-3xl bg-white shadow-xl ring-1 ring-gray-100 p-6 md:p-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Bus Routes & Timing
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Clock className="h-6 w-6 text-blue-600 mr-3" />
                  <h4 className="text-lg font-semibold text-blue-900">
                    Morning Service
                  </h4>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-blue-800 font-medium">
                      Departure Time:
                    </span>
                    <span className="text-blue-900 font-bold">8:50 AM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-800 font-medium">Route:</span>
                    <span className="text-blue-900">
                      Kottarakkara → College
                    </span>
                  </div>
                  <p className="text-blue-800 text-sm mt-3">
                    Bus departs from Kottarakkara at 8:50 AM, ensuring students
                    reach college on time for morning classes.
                  </p>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Clock className="h-6 w-6 text-green-600 mr-3" />
                  <h4 className="text-lg font-semibold text-green-900">
                    Evening Service
                  </h4>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-green-800 font-medium">
                      Departure Time:
                    </span>
                    <span className="text-green-900 font-bold">3:30 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-green-800 font-medium">Route:</span>
                    <span className="text-green-900">
                      College → Kottarakkara
                    </span>
                  </div>
                  <p className="text-green-800 text-sm mt-3">
                    Return journey from college to Kottarakkara after completion
                    of daily classes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Fare Options */}
          <div className="rounded-3xl bg-white shadow-xl ring-1 ring-gray-100 p-6 md:p-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Fare Options
            </h3>
            <p className="text-gray-600 mb-6">
              Students can choose the plan that best suits their schedule and
              budget:
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Monthly Pass */}
              <div className="border border-blue-200 rounded-lg p-6 bg-blue-50 hover:shadow-lg transition-shadow">
                <div className="text-center">
                  <CalendarDays className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-blue-900 mb-2">
                    Monthly Pass
                  </h4>
                  <div className="flex items-center justify-center mb-3">
                    <IndianRupee className="h-6 w-6 text-blue-600 mr-1" />
                    <span className="text-3xl font-bold text-blue-900">
                      600
                    </span>
                    <span className="text-blue-700 ml-2">per month</span>
                  </div>
                  <p className="text-blue-800 text-sm">
                    Most economical option for regular commuters. Valid for
                    unlimited trips throughout the month.
                  </p>
                </div>
              </div>

              {/* Daily Ticket - Kottarakkara */}
              <div className="border border-green-200 rounded-lg p-6 bg-blue-50 hover:shadow-lg transition-shadow">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-blue-900 mb-2">
                    Kottarakkara Route
                  </h4>
                  <div className="flex items-center justify-center mb-3">
                    <IndianRupee className="h-6 w-6 text-blue-600 mr-1" />
                    <span className="text-3xl font-bold text-blue-900">20</span>
                    <span className="text-blue-700 ml-2">per trip</span>
                  </div>
                  <p className="text-blue-800 text-sm">
                    Daily ticket for Kottarakkara to College route. Pay per trip
                    basis.
                  </p>
                </div>
              </div>

              {/* Daily Ticket - ETC Junction */}
              <div className="border border-blue-200 rounded-lg p-6 bg-blue-50 hover:shadow-lg transition-shadow">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-blue-900 mb-2">
                    ETC Junction Route
                  </h4>
                  <div className="flex items-center justify-center mb-3">
                    <IndianRupee className="h-6 w-6 text-blue-600 mr-1" />
                    <span className="text-3xl font-bold text-blue-900">10</span>
                    <span className="text-blue-700 ml-2">per trip</span>
                  </div>
                  <p className="text-blue-800 text-sm">
                    Daily ticket for ETC Junction to College route. Shorter
                    distance, lower fare.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
              <h4 className="font-semibold text-yellow-900 mb-2">
                Payment Information
              </h4>
              <p className="text-yellow-800 text-sm">
                Monthly passes can be purchased at the beginning of each month
                from the college office. Daily tickets are available directly
                from the bus conductor. All fares are subject to revision as per
                college administration decisions.
              </p>
            </div>
          </div>

          {/* Committee Members */}
          <div className="space-y-8 mt-16">
            <div className="text-center mb-12">
              <h3 className="text-4xl md:text-3xl font-bold text-gray-900 mb-4">
                College Bus Committee
              </h3>
              <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The college bus service is managed by a dedicated committee to
                ensure smooth operations and address student transportation
                needs
              </p>
            </div>

            <div className="rounded-3xl bg-white shadow-xl ring-1 ring-gray-100 p-6 md:p-10">
              <div className="grid md:grid-cols-3 gap-8">
                {committeeMembers.map((member, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg p-8 text-center hover:shadow-lg transition-shadow"
                  >
                    <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <User className="w-12 h-12 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      {member.name}
                    </h4>
                    <p className="text-gray-600 font-medium mb-1">
                      {member.role}
                    </p>
                    <p className="text-green-700 font-medium mb-1">
                      {member.position}
                    </p>
                    <p className="text-gray-600 text-sm">{member.department}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-blue-50 rounded-lg p-6 text-center">
                <h4 className="font-semibold text-blue-900 mb-2">
                  Transportation Support
                </h4>
                <p className="text-blue-800 text-sm">
                  For queries regarding bus schedules, routes, or fare-related
                  issues, please contact the committee members through the
                  college administrative office or your respective department
                  heads.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer onNavigate={noopNavigate} />
    </div>
  );
};

export default TransportationPage;
