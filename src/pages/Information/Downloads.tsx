import React, { useEffect, useRef, useState } from "react";
import {
  FileText,
  Bus,
  CreditCard,
  CheckCircle,
  ChevronRight,
} from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const DownloadsPage: React.FC = () => {
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
  const forms = [
    {
      id: "permission-form",
      title: "Permission Form",
      description:
        "Download the official permission form for various administrative requests",
      icon: <FileText className="w-6 h-6" />,
      buttonText: "Download Permission Form",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
    },
    {
      id: "ksrtc-form",
      title: "KSRTC Form",
      description:
        "Access the Kerala State Road Transport Corporation related forms",
      icon: <Bus className="w-6 h-6" />,
      buttonText: "Download KSRTC Form",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
    },
    {
      id: "caution-deposit-refund",
      title: "Caution Deposit Refund",
      description: "Form for processing caution deposit refund requests",
      icon: <CreditCard className="w-6 h-6" />,
      buttonText: "Download Refund Form",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
    },
    {
      id: "no-dues-form",
      title: "No Dues Form",
      description:
        "Certificate form confirming clearance of all dues and obligations",
      icon: <CheckCircle className="w-6 h-6" />,
      buttonText: "Download No Dues Form",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
    },
  ];

  // Map form ids to their URLs
  const formUrls: Record<string, string> = {
    "permission-form":
      "/documents/downloads-docs/application-for-permission.pdf",
    "ksrtc-form": "/documents/downloads-docs/ksrtc-form.pdf",
    "caution-deposit-refund":
      "/documents/downloads-docs/caution-deposit-refund.pdf",
    "no-dues-form": "/documents/downloads-docs/no-dues-form.pdf",
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header
        activeSection="academics"
        onNavigate={noopNavigate}
        scrollY={scrollY}
        isHidden={isNavHidden}
      />

      {/* Page title band */}
      <section className="pt-[155px] md:pt-[170px] lg:pt-[185px] bg-gradient-to-br from-blue-800 to-indigo-950 text-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center text-sm text-white/80 mb-3">
            <span className="hover:text-white transition-colors">
              Academics
            </span>
            <ChevronRight className="mx-2 h-4 w-4 opacity-70" />
            <span className="text-white">Downloads</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">Downloads</h1>
          <p className="mt-2 text-white/90 max-w-2xl">
            Find important forms, documents, and resources for students and
            staff.
          </p>
        </div>
      </section>

      {/* Main content section */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Downloads</h1>
          <p className="text-lg text-gray-600">
            Access and download important forms and documents
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {forms.map((form) => (
            <div
              key={form.id}
              className={`${form.bgColor} ${form.borderColor} border rounded-lg p-6 transition-all duration-200 hover:shadow-lg`}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="p-3 bg-white rounded-lg shadow-sm">
                    {form.icon}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {form.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{form.description}</p>
                  <a
                    href={formUrls[form.id]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${form.buttonColor} text-white px-4 py-2 rounded-md transition-colors duration-200 font-medium inline-block`}
                  >
                    {form.buttonText}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional info section */}
        <div className="mt-12 bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Important Notes
          </h2>
          <ul className="text-gray-600 space-y-2">
            <li>• All forms are available in PDF format</li>
            <li>• Please fill out forms completely before submission</li>
            <li>• For technical support, contact the administrative office</li>
            <li>• Keep copies of submitted forms for your records</li>
          </ul>
        </div>
      </main>
      <Footer onNavigate={noopNavigate} />
    </div>
  );
};

export default DownloadsPage;
