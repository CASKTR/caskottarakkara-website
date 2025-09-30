import { useEffect, useRef, useState } from "react";
import {
  FileText,
  Info,
  Users,
  ChevronRight,
  Clock,
  Shield,
  Eye,
  MapPin,
  Calendar,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

const RTIDetails = () => {
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
        activeSection="rti"
        onNavigate={noopNavigate}
        scrollY={scrollY}
        isHidden={isNavHidden}
      />

      {/* Page title band */}
      <section className="pt-[155px] md:pt-[170px] lg:pt-[185px] bg-gradient-to-br from-blue-800 to-indigo-950 text-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-10">
          <div className="flex items-center text-sm text-white/80 mb-3">
            <span className="hover:text-white transition-colors cursor-pointer">
              Information{" "}
            </span>
            <ChevronRight className="mx-2 h-4 w-4 opacity-70" />
            <span className="text-white">RTI Details</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">RTI Details </h1>
          <p className="mt-2 text-white/90 max-w-2xl">
            Promoting transparency and accountability in the working of our
            institution through the Right to Information Act, 2005.
          </p>
        </div>
      </section>

      {/* RTI Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-3xl font-bold text-gray-900 mb-6">
              RTI Act Implementation
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              The Right to Information Act, 2005 has been enacted by the
              Parliament and came into force from 15 June 2005. This Act
              provides citizens with the right to secure access to information
              under the control of public authorities.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-blue-50 rounded-2xl">
              <Eye className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Transparency
              </h3>
              <p className="text-gray-600">
                Promoting openness in institutional operations and
                decision-making processes
              </p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-2xl">
              <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Accountability
              </h3>
              <p className="text-gray-600">
                Ensuring responsible governance and administrative practices
              </p>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-2xl">
              <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Citizen Rights
              </h3>
              <p className="text-gray-600">
                Empowering citizens with access to public information
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Act Details Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-3xl font-bold text-gray-900 mb-6">
                About the RTI Act
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                The <strong>Right to Information Act, 2005 (22 of 2005)</strong>{" "}
                provides for a right to information for citizens to secure
                access to information under the control of public authorities in
                order to promote transparency and accountability.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-500 rounded-full p-2 mt-1">
                    <Calendar className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Effective Date
                    </h4>
                    <p className="text-gray-600">
                      The Act came into force from 15 June 2005
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-green-500 rounded-full p-2 mt-1">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Institutional Compliance
                    </h4>
                    <p className="text-gray-600">
                      All Universities and Colleges established by law come
                      within the meaning of Public Authority
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-purple-500 rounded-full p-2 mt-1">
                    <FileText className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Proactive Disclosure
                    </h4>
                    <p className="text-gray-600">
                      Information must be made available to the public through
                      institutional websites
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-green-50 border-green-200 border rounded-lg p-6 transition-all duration-200 hover:shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="p-3 bg-white rounded-lg shadow-sm">
                    <Info className="w-6 h-6" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    RTI Circular
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Access Right to Information circulars and related
                    documentation
                  </p>
                  <a
                    href="/documents/other-docs/rti-circular.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors duration-200 font-medium inline-block"
                  >
                    Download RTI Circular
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* College Compliance Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-3xl font-bold text-gray-900 mb-6">
              Our Commitment to RTI
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              College of Applied Science, Kottarakkara complies with the Act
              enacted by the Parliament and is committed to transparency in all
              its operations.
            </p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 md:p-12">
            <div className="flex items-start gap-6">
              <div className="bg-green-500 rounded-full p-3 mt-1">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Full Compliance Statement
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  The college complies with the Act enacted by the Parliament.
                  All Universities and Colleges established by law made by
                  Parliament or by the State Legislature or by notification by
                  the appropriate Government or owned, controlled or
                  substantially financed directly or indirectly by funds
                  provided by the Government shall come within the meaning of a
                  Public Authority under this Act.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-3xl font-bold text-gray-900 mb-6">
              Contact Information
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              For RTI applications and information requests, please contact our
              office using the details below.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
              <div className="text-center mb-8">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Public Information Officer
                </h3>
                <p className="text-gray-600">Contact for RTI Applications</p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
                  <Users className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      The Principal
                    </h4>
                    <p className="text-gray-600">
                      College of Applied Science, Kottarakkara
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
                  <MapPin className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Address
                    </h4>
                    <p className="text-gray-600">
                      Kottarakkara P.O
                      <br />
                      Kollam (Dist) - 691531
                      <br />
                      Kerala, India
                    </p>
                  </div>
                </div>

                <div className="bg-yellow-50 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <AlertCircle className="h-6 w-6 text-yellow-600" />
                    <h4 className="font-semibold text-gray-900">
                      RTI Application Process
                    </h4>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    RTI applications should be submitted in writing to the above
                    address. Applications must clearly specify the information
                    sought and include the prescribed fee as per RTI rules.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-3xl font-bold text-gray-900 mb-6">
              Important Information
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <Clock className="h-8 w-8 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-900">
                  Response Timeline
                </h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span>
                    Information to be provided within 30 days of application
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span>
                    Response within 48 hours for life and liberty matters
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span>Additional 30 days if third party is involved</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <FileText className="h-8 w-8 text-green-600" />
                <h3 className="text-xl font-bold text-gray-900">
                  Application Requirements
                </h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span>Written application in prescribed format</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span>Clear specification of information sought</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span>Payment of prescribed fees as applicable</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer onNavigate={noopNavigate} />
    </div>
  );
};

export default RTIDetails;
