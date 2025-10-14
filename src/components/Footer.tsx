import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  ChevronRight,
  Rocket,
} from "lucide-react";

interface FooterProps {
  onNavigate: (section: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const studentServices: string[] = [
    "Clubs & Cells",
    "Health Facilities",
    "NSS",
    "Placement Cell Activities",
    "Sports Facilities",
    "Student Grievance Redressal",
  ];
  const [rocketLaunch, setRocketLaunch] = React.useState(false);
  const quickLinks = [
    { label: "Overview", section: "overview" },
    { label: "Admissions", section: "admissions" },
    { label: "Academics", section: "academics" },
    { label: "Student Life", section: "student-life" },
    { label: "Contact", section: "contact" },
  ];

  const academicLinks = [
    "Undergraduate Programs",
    "Academic Calendar",
    "Examination Results",
    "Placement Cell",
    "Sports Facilities",
  ];

  const importantLinks = [
    {
      label: "University of Kerala",
      url: "https://keralauniversity.ac.in",
    },
    {
      label: "Institute of Human Resources Development (IHRD)",
      url: "https://ihrd.ac.in",
    },
    {
      label: "E-Grantz Kerala",
      url: "https://www.egrantz.kerala.gov.in/",
    },
    {
      label: "Grievance Redressal",
      url: "studentlife/studentgrievanceredressal",
    },
    {
      label: "Anti-Ragging",
      url: "/studentlife/clubs&cells/antiraggingcell",
    },
    {
      label: "Payment Portal",
      url: "https://pay.keralauniversity.ac.in/",
    },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* College Information */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mr-3 p-[-2]">
                <img
                  src="https://ihrdadmissions.org/assets/img/ihrdlogorx.png"
                  alt="IHRD Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">
                  College of Applied Science
                </h3>
                <p className="text-gray-400 text-sm">Excellence in Education</p>
              </div>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering minds, fostering innovation, and building tomorrow's
              leaders through excellence in education, research, and community.
            </p>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">
                    IHRD Campus, E.T.C. P.O. Kottarakkara
                  </p>
                  <p className="text-gray-300">Kollam, Kerala â€" 691531</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <p className="text-gray-300">0474-2424444</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <p className="text-gray-300">caskottarakkara.ihrd@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Student Services & Academic Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Student Services</h4>
            <ul className="space-y-3">
              {studentServices.map((service: string, index: number) => (
                <li key={index}>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors duration-200 group"
                  >
                    <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
            {/* Academic Programs */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">Academic Programs</h4>
              <ul className="space-y-3">
                {academicLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors duration-200 group"
                    >
                      <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => onNavigate(link.section)}
                    className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors duration-200 group"
                  >
                    <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          {/* Map Section */}
          <div className="lg:col-span-1 flex flex-col items-end justify-start">
            <h4 className="text-lg font-semibold mb-6">Find Us on Map</h4>
            <div className="w-80 h-80 rounded-lg overflow-hidden shadow-lg border border-gray-800">
              <iframe
                title="College Location Map"
                src="https://www.google.com/maps?q=College+of+Applied+Science,+Kottarakkara&hl=en&z=16&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <a
                href="https://maps.app.goo.gl/daJEwXZejmgbft8D9"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-blue-400 text-xs text-center mt-2 hover:underline"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>

        {/* Important Links Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <h4 className="text-lg font-semibold mb-6">Important Links</h4>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {importantLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target={
                  link.label === "University of Kerala" ? "_blank" : undefined
                }
                rel={
                  link.label === "University of Kerala"
                    ? "noopener noreferrer"
                    : undefined
                }
                className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Social Media  */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                {[
                  { icon: Facebook, color: "hover:text-blue-500" },
                  { icon: Twitter, color: "hover:text-sky-400" },
                  { icon: Linkedin, color: "hover:text-blue-600" },
                  { icon: Instagram, color: "hover:text-pink-500" },
                  { icon: Youtube, color: "hover:text-red-500" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className={`w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover:scale-110`}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-950 py-6">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2025 College of Applied Science, Kottarakkara. All rights
              reserved.
            </div>
            <div className="flex gap-6 text-sm text-gray-400 items-center">
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                Accessibility
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                Site Map
              </a>
              <div className="relative">
                <button
                  aria-label="Scroll to top"
                  onClick={() => {
                    setRocketLaunch(true);
                    setTimeout(() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }, 500);
                    setTimeout(() => setRocketLaunch(false), 2200);
                  }}
                  className="ml-4 p-4 rounded-full bg-gray-800 hover:bg-blue-600 text-white transition-colors duration-300 flex items-center justify-center shadow-lg border-2 border-blue-500 overflow-visible focus:outline-none"
                  style={{ position: "relative" }}
                >
                  <Rocket
                    className={`h-8 w-8 transition-transform duration-500 transform ${
                      rocketLaunch
                        ? "-translate-y-32 scale-125 rotate-0"
                        : "-rotate-45"
                    }`}
                    style={{ zIndex: 2, position: "relative" }}
                  />
                  {rocketLaunch && (
                    <div
                      className="absolute left-1/2 -translate-x-1/2 bottom-2 w-4 h-24 flex flex-col items-center"
                      style={{ zIndex: 1 }}
                    >
                      <div className="w-4 h-4 rounded-full bg-gradient-to-t from-gray-400 to-transparent opacity-70 animate-pulse mb-1"></div>
                      <div className="w-3 h-6 rounded-full bg-gradient-to-t from-gray-300 to-transparent opacity-60 animate-bounce mb-1"></div>
                      <div className="w-2 h-8 rounded-full bg-gradient-to-t from-gray-200 to-transparent opacity-50 animate-bounce"></div>
                    </div>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
