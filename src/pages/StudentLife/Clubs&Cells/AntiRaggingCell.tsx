import React, { useEffect, useRef, useState } from "react";
import {
  AlertTriangle,
  Scale,
  FileText,
  UserX,
  Users,
  Phone,
  Shield,
  AlertCircle,
  Mail,
  ChevronRight,
} from "lucide-react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

const AntiRaggingCell: React.FC = () => {
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
            <span className="text-white">Anti-Ragging Cell</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">Anti-Ragging Cell</h1>
          <p className="mt-2 text-white/90 max-w-2xl">
            Ensuring a safe, inclusive, and ragging-free campus environment for
            all students.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="flex-1 py-12">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          {/* Act Overview */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <Scale className="h-8 w-8 text-black-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-900">
                Kerala Prohibition of Ragging Act 1998
              </h2>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-bold text-red-800 mb-3">
                IMPORTANT NOTICE
              </h3>
              <p className="text-red-700 leading-relaxed">
                The institution will take stern action against the offenders.
                The cardinal points contained in the act are furnished below for
                information of the concerned.
              </p>
            </div>
          </div>

          {/* Act Sections */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Title and Extent */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <FileText className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">
                  Title and Extent
                </h3>
              </div>
              <div className="space-y-3 text-gray-700">
                <p>
                  <strong>(a)</strong> The Act may be called the Kerala
                  Prohibition of Ragging Act 1998.
                </p>
                <p>
                  <strong>(b)</strong> It extends to the whole of the State of
                  Kerala.
                </p>
              </div>
            </div>

            {/* Definition */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <AlertTriangle className="h-6 w-6 text-amber-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">
                  Definition of Ragging
                </h3>
              </div>
              <div className="text-gray-700 space-y-3">
                <p>
                  <strong>"Ragging"</strong> means display of disorderly
                  conduct, doing any act which causes or is likely to cause
                  physical or psychological harm or raise apprehension or fear
                  or shame or embarrassment to a student in any educational
                  institution and includes:
                </p>
                <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                  <p>
                    <strong>a)</strong> teasing, abusing of, playing practical
                    jokes on or causing hurt to such student; or
                  </p>
                  <p>
                    <strong>b)</strong> asking the student to do any act or
                    perform something which such student will not in the
                    ordinary course willingly do.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Prohibition and Penalties */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <UserX className="h-7 w-7 text-red-600 mr-3" />
              Prohibition and Penalties
            </h3>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                <h4 className="font-bold text-black-800 mb-3">Prohibition</h4>
                <p className="text-black-700">
                  Ragging within or outside any educational institution is{" "}
                  <strong>strictly prohibited</strong>.
                </p>
              </div>

              <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                <h4 className="font-bold text-black-800 mb-3">
                  Criminal Penalty
                </h4>
                <p className="text-black-700">
                  Imprisonment up to <strong>2 years</strong> and fine up to{" "}
                  <strong>₹10,000</strong> for offenders.
                </p>
              </div>

              <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                <h4 className="font-bold text-black-800 mb-3">
                  Academic Penalty
                </h4>
                <p className="text-black-700">
                  <strong>Dismissal</strong> from institution and{" "}
                  <strong>3-year ban</strong> from other institutions.
                </p>
              </div>
            </div>
          </div>

          {/* Complaint Process */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <Users className="h-7 w-7 text-green-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">
                Complaint and Action Process
              </h3>
            </div>

            <div className="space-y-6">
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h4 className="font-bold text-green-800 mb-3">
                  Immediate Action Required
                </h4>
                <p className="text-green-700 mb-4">
                  When any student, parent, guardian, or teacher complains in
                  writing of ragging to the head of the educational institution:
                </p>
                <div className="space-y-2 text-green-700">
                  <p>
                    • <strong>Within 7 days:</strong> Head of institution must
                    enquire into the matter
                  </p>
                  <p>
                    • <strong>If prima facie true:</strong> Immediate suspension
                    of accused student
                  </p>
                  <p>
                    • <strong>Forward to police:</strong> Complaint sent to
                    local police station for further action
                  </p>
                </div>
              </div>

              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <h4 className="font-bold text-green-800 mb-3">
                  If Complaint is Unfounded
                </h4>
                <p className="text-green-700">
                  Where enquiry proves there is no substance in the complaint,
                  the head of institution shall intimate this fact in writing to
                  the complainant.
                </p>
              </div>
            </div>
          </div>

          {/* Declaration and Reference */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Declaration and Reference
            </h3>
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>Copy of the Prohibition of Ragging Act 1998</strong>{" "}
                  will be available in the institution for reference.
                </p>
                <p>
                  The applicants as well as his/her{" "}
                  <strong>
                    parent/guardian are required to furnish declaration
                  </strong>{" "}
                  on the awareness of the provisions of the Act in the
                  application form.
                </p>
              </div>
            </div>
          </div>

          {/* Anti-Ragging Affidavit Section */}
          <div className="bg-gradient-to-r from-red-600 to-orange-700 rounded-2xl shadow-lg p-8 text-white mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4">
                MANDATORY: Anti-Ragging Affidavit
              </h3>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm mb-6">
                <p className="text-xl font-semibold text-emerald-100 mb-3">
                  IMMEDIATE ACTION REQUIRED
                </p>
                <p className="text-emerald-50 text-lg leading-relaxed">
                  All students and their parents/guardians <strong>MUST</strong>{" "}
                  fill and submit the Anti-Ragging Affidavit as per UGC
                  regulations. This is a <strong>mandatory requirement</strong>{" "}
                  for admission and continuation of studies.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                  <h4 className="font-bold text-lg text-left mb-3">
                    For Students
                  </h4>
                  <ul className="text-emerald-100 space-y-2 text-left">
                    <li>• Submit personal undertaking</li>
                    <li>• Pledge to maintain discipline</li>
                    <li>• Promise not to indulge in ragging</li>
                    <li>• Accept consequences if violated</li>
                  </ul>
                </div>

                <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                  <h4 className="font-bold text-lg text-left mb-3">
                    For Parents/Guardians
                  </h4>
                  <ul className="text-emerald-100 space-y-2 text-left">
                    <li>• Acknowledge awareness of anti-ragging laws</li>
                    <li>• Promise to guide ward properly</li>
                    <li>• Accept liability for ward's actions</li>
                    <li>• Support institution's disciplinary measures</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <a
                  href="https://www.antiragging.in/affidavit_affiliated_form.php"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-emerald-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-emerald-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  FILL ANTI-RAGGING AFFIDAVIT NOW
                </a>
                <p className="text-emerald-200 text-sm">
                  Click above to access the official UGC Anti-Ragging portal and
                  complete your mandatory affidavit submission.
                </p>
              </div>
            </div>
          </div>

          {/* Anti-Ragging Posters */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Anti-Ragging Posters
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              <div className="w-full h-96 bg-gray-200 rounded-xl flex items-center justify-center overflow-hidden">
                <img
                  src="https://caskottarakkara.ihrd.ac.in/images/ragging_1.jpg"
                  alt="Anti Ragging Poster 1"
                  className="object-contain w-full h-full rounded-xl"
                />
              </div>
              <div className="w-full h-96 bg-gray-200 rounded-xl flex items-center justify-center overflow-hidden">
                <img
                  src="https://caskottarakkara.ihrd.ac.in/images/ragging_2_-_Copy.jpg"
                  alt="Anti Ragging Poster 2"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="w-full h-96 bg-gray-200 rounded-xl flex items-center justify-center overflow-hidden">
                <img
                  src="https://caskottarakkara.ihrd.ac.in/images/ragging_3_-_Copy.jpg"
                  alt="Anti Ragging Poster 3"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="w-full h-96 bg-gray-200 rounded-xl flex items-center justify-center overflow-hidden">
                <img
                  src="https://caskottarakkara.ihrd.ac.in/images/ragging__4_-_Copy.jpg"
                  alt="Anti Ragging Poster 4"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
          {/* Contact Information (Replaced) */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full mb-4">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-2">
              Anti-Ragging Support
            </h3>
            <p className="text-gray-600">
              Confidential help and guidance available 24/7
            </p>
          </div>

          {/* Main Contact Card */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            {/* Contact Person Header */}
            <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 p-6 text-white">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Phone className="h-8 w-8" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold">Sri. Antony Varghese</h4>
                  <p className="text-emerald-100 text-lg">
                    Anti-Ragging Convenor
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Phone Contact */}
                <div className="group hover:bg-gray-50 p-6 rounded-2xl transition-all duration-300 border border-gray-100">
                  <div className="flex items-center space-x-4 mb-3">
                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
                      <Phone className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                        Call Now
                      </p>
                      <p className="text-xl font-bold text-gray-800">
                        +91-94474-12345
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Available for immediate assistance and emergency support
                  </p>
                </div>

                {/* Email Contact */}
                <div className="group hover:bg-gray-50 p-6 rounded-2xl transition-all duration-300 border border-gray-100">
                  <div className="flex items-center space-x-4 mb-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                        Email
                      </p>
                      <p className="text-lg font-semibold text-gray-800">
                        antony.varghese@college.edu.in
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Send detailed reports and documentation securely
                  </p>
                </div>
              </div>

              {/* Services Section */}
              <div className="mt-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6">
                <h5 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                  <AlertCircle className="h-5 w-5 mr-2 text-amber-600" />
                  Available Support Services
                </h5>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-xl shadow-sm">
                    <p className="font-medium text-gray-700">
                      Confidential Reporting
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      Safe and private incident reporting
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-sm">
                    <p className="font-medium text-gray-700">
                      Crisis Intervention
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      Immediate help during emergencies
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-sm">
                    <p className="font-medium text-gray-700">
                      Ongoing Guidance
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      Long-term support and counseling
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Important Notice */}
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-t border-amber-200 p-6">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Shield className="h-4 w-4 text-amber-600" />
                </div>
                <div>
                  <p className="font-semibold text-amber-800 mb-2">
                    Your Safety is Our Priority
                  </p>
                  <p className="text-amber-700 text-sm leading-relaxed">
                    All complaints and reports are handled with strict
                    confidentiality. We are committed to creating a safe
                    environment for every student. Don't hesitate to reach out
                    for support, guidance, or to report any incidents.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer onNavigate={noopNavigate} />
    </div>
  );
};

export default AntiRaggingCell;
