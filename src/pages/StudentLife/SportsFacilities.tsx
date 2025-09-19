import { useEffect, useRef, useState } from "react";
import {
  Trophy,
  Activity,
  Users,
  ChevronRight,
  Clock,
  Target,
  Zap,
} from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const SportsFacilities = () => {
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

      {/* Title Band */}
      <section className="pt-[155px] md:pt-[170px] lg:pt-[185px] bg-gradient-to-br from-blue-800 to-indigo-950 text-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center text-sm text-white/80 mb-3">
            <span className="hover:text-white transition-colors cursor-pointer">
              Student Life
            </span>
            <ChevronRight className="mx-2 h-4 w-4 opacity-70" />
            <span className="text-white">Sports Facilities</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">Sports Facilities</h1>
          <p className="mt-2 text-white/90 max-w-2xl">
            The college offers a multipurpose ground for cricket, football, and
            athletics, along with a tennis court and sports equipment for
            students.
          </p>
        </div>
      </section>

      {/* Main Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-3xl font-bold text-gray-900 mb-6">
              Sports Infrastructure
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Whether for recreation or competition, our sports facilities
              create the perfect balance to complement academic life. Every
              student can actively take part and experience the thrill of the
              game with our comprehensive sports infrastructure.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-blue-50 rounded-2xl">
              <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Teamwork</h3>
              <p className="text-gray-600">
                Building collaborative spirit through sports
              </p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-2xl">
              <Activity className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Discipline
              </h3>
              <p className="text-gray-600">Developing focus and commitment</p>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-2xl">
              <Zap className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Lifelong Fitness
              </h3>
              <p className="text-gray-600">
                Promoting healthy lifestyle habits
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Multipurpose Ground Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-3xl font-bold text-gray-900 mb-6">
                Versatile Multipurpose Ground
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our campus is home to a{" "}
                <strong>versatile multipurpose ground</strong>, where students
                can enjoy cricket, football, or athletics in a lively and
                energetic setting. This expansive facility serves as the heart
                of our sporting activities.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-green-500 rounded-full p-2 mt-1">
                    <Activity className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Cricket Facilities
                    </h4>
                    <p className="text-gray-600">
                      Full-size cricket pitch with professional wickets and
                      boundary markings
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-500 rounded-full p-2 mt-1">
                    <Target className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Football Arena
                    </h4>
                    <p className="text-gray-600">
                      Standard football field with goal posts and quality turf
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-orange-500 rounded-full p-2 mt-1">
                    <Zap className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Athletics Track
                    </h4>
                    <p className="text-gray-600">
                      Running tracks and field event areas for comprehensive
                      athletics training
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl opacity-20 blur-lg"></div>
              <img
                src="https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Multipurpose Ground with football field and athletics track"
                className="relative w-full h-80 lg:h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tennis Court Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <h2 className="text-3xl md:text-3xl font-bold text-gray-900 mb-6">
                Dedicated Tennis Court
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Adding to this is our <strong>dedicated tennis court</strong>,
                offering both beginners and seasoned players the chance to
                refine their game. Our professional-grade court provides the
                perfect environment for skill development and competitive play.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-red-500 rounded-full p-2 mt-1">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      For All Skill Levels
                    </h4>
                    <p className="text-gray-600">
                      Perfect for both beginners learning the basics and
                      advanced players honing their skills
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-yellow-500 rounded-full p-2 mt-1">
                    <Trophy className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Professional Standards
                    </h4>
                    <p className="text-gray-600">
                      Regulation court with quality surface and proper net setup
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-purple-500 rounded-full p-2 mt-1">
                    <Clock className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Flexible Access
                    </h4>
                    <p className="text-gray-600">
                      Available for practice sessions, tournaments, and
                      recreational play
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:order-1 relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-red-400 to-pink-500 rounded-2xl opacity-20 blur-lg"></div>
              <img
                src="https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional tennis court with net and court lines"
                className="relative w-full h-80 lg:h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sports Equipment Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-3xl font-bold text-gray-900 mb-6">
              Sports Equipment
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              To make participation seamless, the college also provides the
              necessary <strong>sports equipment</strong>, ensuring that every
              student can actively take part and experience the thrill of the
              game.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-all duration-300">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Activity className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Cricket Equipment
              </h3>
              <p className="text-gray-600">
                Bats, balls, wickets, pads, and protective gear
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-all duration-300">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Football Gear
              </h3>
              <p className="text-gray-600">
                Footballs, goal nets, cones, and training equipment
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-all duration-300">
              <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Trophy className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Tennis Equipment
              </h3>
              <p className="text-gray-600">
                Rackets, tennis balls, and court maintenance tools
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-all duration-300">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Athletics Gear
              </h3>
              <p className="text-gray-600">
                Track spikes, javelins, shot puts, and timing equipment
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer onNavigate={noopNavigate} />
    </div>
  );
};

export default SportsFacilities;
