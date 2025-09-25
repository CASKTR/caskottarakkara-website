import React from "react";
import {
  MapPin,
  Calendar,
  Trophy,
  Target,
  Eye,
  Sparkles,
  ShieldCheck,
  Rocket,
} from "lucide-react";

const sectionPadding = "py-[60px] px-5 sm:px-6 lg:px-8";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="bg-white">
      {/* Overview */}
      <div id="overview" className={`${sectionPadding} bg-white`}>
        <div className="max-w-7xl mx-auto">
          {/* Section accent and label */}
          <div className="flex justify-center">
            <div className="h-1.5 w-28 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 mb-6" />
          </div>
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 ring-1 ring-blue-200">
              <Sparkles className="h-3.5 w-3.5" />
              About the College
            </span>
          </div>

          <div className="rounded-3xl bg-white/90 backdrop-blur-sm shadow-xl ring-1 ring-gray-100 p-6 md:p-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center animate-fade-in-up">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  <span className="block">Welcome to</span>
                  <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    College of Applied Science, Kottarakkara
                  </span>
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    <strong>Affiliated University:</strong> University of Kerala
                  </p>
                  <p>
                    <strong>Location:</strong> Kottarakkara, Kollam, Kerala,
                    India
                  </p>
                  <p className="leading-relaxed">
                    The College of Applied Science, Kottarakkara is an esteemed
                    institution of higher learning established under the
                    Institute of Human Resources Development (IHRD) and
                    affiliated to the University of Kerala (UoK). Located in the
                    cultural and historical town of Kottarakkara, the college is
                    committed to providing quality education in applied
                    sciences, technology, and related disciplines. Since its
                    inception, the college has been dedicated to nurturing
                    skilled professionals who can meet the challenges of an
                    ever-evolving global workforce. Guided by the academic
                    framework of the University of Kerala, the institution
                    offers undergraduate and postgraduate programmes that
                    combine strong theoretical foundations with practical
                    exposure. Managed by IHRD, a Government of Kerala
                    undertaking, the college benefits from modern
                    infrastructure, well-equipped laboratories, an extensive
                    library, and a committed faculty team. The institution
                    places emphasis on academic excellence, research aptitude,
                    and holistic student development, fostering an environment
                    where innovation and learning thrive. With a mission to
                    create competent, responsible, and ethical professionals,
                    the College of Applied Science, Kottarakkara continues to be
                    a trusted destination for aspiring learners seeking quality
                    higher education.
                  </p>
                  <p className="leading-relaxed">
                    With state-of-the-art facilities, experienced faculty, and a
                    vibrant campus life, we provide an environment that
                    encourages learning, research, and personal growth.
                  </p>
                </div>

                {/* Highlights strip */}
                <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {[
                    {
                      icon: Sparkles,
                      title: "Modern Curriculum",
                      desc: "Industry-aligned, future-ready",
                    },
                    {
                      icon: ShieldCheck,
                      title: "Safe & Supportive",
                      desc: "Mentorship and wellbeing",
                    },
                    {
                      icon: Rocket,
                      title: "Career Launchpad",
                      desc: "Placements and startups",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 p-4 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div
                        className="absolute -top-6 -right-6 w-20 h-20 bg-white/40 rounded-full blur-xl"
                        aria-hidden="true"
                      />
                      <div className="flex items-start gap-3 relative z-10">
                        <div className="w-9 h-9 rounded-xl bg-white/80 backdrop-blur flex items-center justify-center shadow">
                          <item.icon className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-900">
                            {item.title}
                          </p>
                          <p className="text-xs text-gray-600">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    "Industry-Tied Internship Programs",
                    "Entrepreneurship & Startup Incubation Hub",
                    "100% Placement Record",
                    "Excellence in Industry-Academia Collaboration",
                    "Skill-Oriented Curriculum",
                    "Strong Faculty Mentorship",
                  ].map((achievement, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-gray-600"
                    >
                      <Trophy className="h-4 w-4 text-yellow-500" />
                      <span className="text-sm">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl ring-1 ring-blue-100 transform transition-transform duration-500 hover:scale-[1.01]">
                  <img
                    src="https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="College Campus"
                    className="w-full h-80 md:h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
                </div>
                <div className="bg-blue-50 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    <h4 className="text-lg font-semibold text-gray-900">
                      Location
                    </h4>
                  </div>
                  <p className="text-gray-600">
                    The College of Applied Science is situated in Kottarakkara,
                    a historic town in the Kollam district of Kerala, often
                    regarded as the birthplace of Kathakali. Known for its
                    cultural heritage, serene landscapes, and well-connected
                    transport facilities, Kottarakkara offers an inspiring
                    environment for academic pursuit while maintaining close
                    ties to Kerala’s rich traditions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* History */}
      <div id="history" className={`${sectionPadding} bg-gray-50`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center">
            <div className="h-1.5 w-28 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 mb-6" />
          </div>
          <div className="flex justify-center mb-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 ring-1 ring-blue-200">
              <Calendar className="h-3.5 w-3.5" />
              Timeline
            </span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Our Journey Through Time
          </h2>
          <div className="rounded-3xl bg-white shadow-xl ring-1 ring-gray-100 p-6 md:p-8">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Foundation & Early Years section removed as requested */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 ring-1 ring-emerald-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 mb-2 text-emerald-700">
                  <Calendar className="h-5 w-5" />
                  <span className="font-semibold">2023</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Establishment
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Founded in 2023, the College of Applied Science, Kottarakkara
                  stands as one of the newest and most dynamic institutions
                  under IHRD. Despite its young age, the college has quickly
                  gained recognition for its state-of-the-art facilities, modern
                  infrastructure, and innovative curriculum designed to meet the
                  evolving demands of today’s learners. With a forward-looking
                  vision, the institution is committed to nurturing academic
                  excellence, fostering creativity, and equipping students with
                  skills for the future.
                </p>
              </div>
              <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-2xl p-6 ring-1 ring-violet-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 mb-2 text-violet-700">
                  <Calendar className="h-5 w-5" />
                  <span className="font-semibold">2024</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Introduction of FYUGP
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  In 2024, the College of Applied Science, Kottarakkara
                  introduced the Four-Year Undergraduate Programme (FYUGP) under
                  the University of Kerala as part of the National Education
                  Policy (NEP) 2020 reforms. The programme offers students
                  enhanced flexibility, interdisciplinary learning
                  opportunities, and a choice to exit with appropriate
                  certification at multiple stages. With an emphasis on skill
                  development, research exposure, and holistic education, FYUGP
                  aims to equip graduates with the knowledge and competencies
                  required to excel in their chosen career paths or higher
                  studies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vision & Mission */}
      <div id="vision" className={`${sectionPadding} bg-white`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center">
            <div className="h-1.5 w-28 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 mb-6" />
          </div>
          <div className="flex justify-center mb-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 ring-1 ring-blue-200">
              <Eye className="h-3.5 w-3.5" />
              Vision & Mission
            </span>
          </div>

          <div className="rounded-3xl bg-white/90 backdrop-blur-sm shadow-xl ring-1 ring-gray-100 p-6 md:p-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Eye className="h-8 w-8 text-blue-600" />
                  <h3 className="text-2xl font-bold text-gray-900">
                    Our Vision
                  </h3>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <p className="text-gray-700 leading-relaxed">
                    To be a leading college providing high-quality education and
                    empowering students to become successful professionals and
                    responsible citizens.
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Target className="h-8 w-8 text-green-600" />
                  <h3 className="text-2xl font-bold text-gray-900">
                    Our Mission
                  </h3>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <ul className="space-y-3 text-gray-700">
                    <li>
                      Offer relevant, contemporary courses aligned to market
                      needs.
                    </li>
                    <li>
                      Develop knowledge, skills, and values for success and
                      impact.
                    </li>
                    <li>
                      Foster critical thinking, creativity, and problem-solving.
                    </li>
                    <li>Promote social responsibility and civic engagement.</li>
                    <li>
                      Collaborate with the community for sustainable
                      development.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Principal's Message */}
      <div id="principal" className={`${sectionPadding} bg-gray-50`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center">
            <div className="h-1.5 w-28 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 mb-6" />
          </div>
          <div className="flex justify-center mb-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 ring-1 ring-blue-200">
              <Sparkles className="h-3.5 w-3.5" />
              From the Principal
            </span>
          </div>
          <div className="rounded-3xl bg-white shadow-xl ring-1 ring-gray-100 p-6 md:p-8">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-1 text-center">
                <div className="relative w-40 h-40 md:w-48 md:h-48 mx-auto mb-6">
                  <div
                    className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 opacity-20 blur"
                    aria-hidden="true"
                  />
                  <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl ring-2 ring-blue-100">
                    <img
                      src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=400"
                      alt="Principal"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  Dr. Murali. V.S
                </h3>
                <p className="text-blue-600 font-medium">Principal</p>
              </div>
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Message from Principal's Desk
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    It gives me immense pleasure to welcome you to the College
                    of Applied Science. Our institution strives to provide
                    quality education and holistic development.
                  </p>
                  <p>
                    We focus on critical thinking, problem-solving, and ethical
                    values that prepare our students for the challenges of the
                    modern world.
                  </p>
                  <p>
                    With innovative curriculum, state-of-the-art facilities, and
                    dedicated faculty, we ensure the best possible education for
                    every student.
                  </p>
                  <p className="font-semibold">
                    Warm regards, Dr. Murali. V.S, Principal
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
