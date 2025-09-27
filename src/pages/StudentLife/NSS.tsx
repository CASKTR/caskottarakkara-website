import React, { useEffect, useRef, useState } from "react";
import {
  ChevronRight,
  Users,
  Heart,
  Award,
  Calendar,
  Clock,
  User,
  Instagram,
  ExternalLink,
  CheckCircle,
  Target,
  BookOpen,
  Leaf,
} from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { nssImages } from "../../../public/assets/images/nss-images";

const NSS: React.FC = () => {
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

  const activities = [
    {
      icon: Heart,
      title: "Social Service Activities",
      description: "Community outreach and support programs",
    },
    {
      icon: Leaf,
      title: "Cleaning Initiatives",
      description: "Environmental cleanliness drives",
    },
    {
      icon: BookOpen,
      title: "Nature Study Programmes",
      description: "Environmental awareness and conservation",
    },
    {
      icon: Users,
      title: "Personality Development",
      description: "Leadership and character building programs",
    },
    {
      icon: Target,
      title: "Awareness Campaigns",
      description: "Educational campaigns on social issues",
    },
    {
      icon: CheckCircle,
      title: "Anti-Drug Campaigns",
      description: "Programs against drug addiction and AIDS",
    },
  ];

  const requirements = [
    {
      icon: Clock,
      title: "240 Hours",
      description: "Minimum service hours over two academic years",
    },
    {
      icon: Calendar,
      title: "7-Day Camp",
      description: "Special residential camp participation",
    },
    {
      icon: Award,
      title: "University Certificate",
      description: "Official recognition upon completion",
    },
    {
      icon: Users,
      title: "Community Impact",
      description: "Meaningful contribution to society",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header
        activeSection="student-life"
        onNavigate={noopNavigate}
        scrollY={scrollY}
        isHidden={isNavHidden}
      />

      {/* Page title band */}
      <section className="pt-[155px] md:pt-[170px] lg:pt-[185px] bg-gradient-to-br from-blue-800 to-indigo-950 text-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-10">
          <div className="flex items-center text-sm text-white/80 mb-3">
            <span className="hover:text-white transition-colors cursor-pointer">
              Student Life
            </span>
            <ChevronRight className="mx-2 h-4 w-4 opacity-70" />
            <span className="text-white">National Service Scheme</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">
            National Service Scheme
          </h1>
          <p className="mt-2 text-white/90 max-w-2xl">
            Empowering students through service, leadership, and discipline.
          </p>
        </div>
      </section>
      {/* Main Content */}
      <main className="flex-1">
        {/* Overview Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  <Users className="w-4 h-4 mr-2" />
                  NSS Unit No: 96
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  NSS Unit - College of Applied Science, Kottarakkara
                </h2>
                <div className="prose prose-lg text-gray-600">
                  <p>
                    The NSS Unit of College of Applied Science, Kottarakkara
                    (Unit No: 96) was established in 2024 with the vision of
                    nurturing in students the values of social commitment,
                    empathy, and community living. Since its inception, the unit
                    has been actively organizing programmes that reflect these
                    ideals and contribute meaningfully to society.
                  </p>
                  <p>
                    Guided by its inspiring motto, “Not Me; But You,” the NSS
                    embodies the true spirit of democratic living and selfless
                    service.
                  </p>
                  <p>
                    With a strong focus on enriching the socio-cultural fabric
                    of its community, the NSS Unit consistently encourages
                    students to take part in a wide range of initiatives,
                    cultivating in them a sense of social responsibility,
                    leadership, and civic engagement.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-8 text-white">
                  <div className="text-center space-y-4">
                    <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                      <img
                        src="https://www.perumonec.ac.in/assets/img/pages/nss.png"
                        alt="NSS Logo"
                        className="w-32 h-32 object-contain"
                      />
                    </div>
                    <h3 className="text-2xl font-bold">Our Motto</h3>
                    <p className="text-xl font-semibold text-white-100">
                      "Not Me; But You"
                    </p>
                    <p className="text-white-100">
                      Reflecting the essence of democratic living and selfless
                      service
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Activities Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Activities
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {activities.map((activity, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <activity.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {activity.title}
                  </h3>
                  <p className="text-gray-600">{activity.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Eligibility Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Eligibility and Participation
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Requirements
                  </h3>
                  <div className="space-y-6">
                    {requirements.map((req, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <req.icon className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">
                            {req.title}
                          </h4>
                          <p className="text-gray-600 text-sm">
                            {req.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Benefits
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">
                        University Certificate upon completion
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">
                        Weightage marks as per University guidelines
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">
                        Leadership and personality development
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">
                        Community service experience
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">
                        Social responsibility awareness
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Additional Benefits
                  </h3>
                  <p className="text-gray-600">
                    Besides academic rewards, the NSS programme offers volunteer
                    students a space to be social actors contributing to the
                    well-being of their community, society, and environment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Team
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {/* Programme Officer */}
              <div className="bg-gray-50 rounded-xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <User className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Ms. Sangeetha Santhosh
                </h3>
                <p className="text-blue-600 font-medium mb-2">
                  NSS Programme Officer
                </p>
                <p className="text-gray-600 text-sm">
                  Assistant Professor
                  <br />
                  Department of Journalism and Mass Communication
                </p>
              </div>

              {/* Assistant Program Coordinator */}
              <div className="bg-gray-50 rounded-xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="w-24 h-24 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <User className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Sri. Manoj M.S.
                </h3>
                <p className="text-yellow-600 font-medium mb-2">
                  Assistant Program Coordinator
                </p>
                <p className="text-gray-600 text-sm">
                  Assistant Professor
                  <br />
                  Department of Commerce
                </p>
              </div>

              {/* Volunteer Secretaries */}
              <div className="bg-gray-50 rounded-xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <User className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Amritha Jayan
                </h3>
                <p className="text-green-600 font-medium mb-2">
                  Volunteer Secretary
                </p>
                <p className="text-gray-600 text-sm">
                  Department of Psychology
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <User className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Devadath BR
                </h3>
                <p className="text-purple-600 font-medium mb-2">
                  Volunteer Secretary
                </p>
                <p className="text-gray-600 text-sm">
                  Department of Journalism and Mass Communication
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                NSS Gallery
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {nssImages.map((img, index) => (
                <div
                  key={index}
                  className="aspect-square bg-gray-100 rounded-xl overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <img
                    src={img}
                    alt={`NSS Activity ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Instagram Section */}
        <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 mb-12">
          <div className="text-center space-y-6">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto">
              <Instagram className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">
              Follow Us on Instagram
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stay updated with our latest activities, events, and community
              service initiatives. Follow our Instagram page for
              behind-the-scenes content and real-time updates.
            </p>
            <a
              href="https://www.instagram.com/cas_nss?igsh=MW9zMWg5c3FtcTdxYg=="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              <Instagram className="w-5 h-5 mr-2" />
              Visit @cas_nss
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </main>

      <Footer onNavigate={noopNavigate} />
    </div>
  );
};

export default NSS;
