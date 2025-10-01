import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown, ChevronRight, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

interface HeaderProps {
  activeSection: string;
  onNavigate: (section: string) => void;
  scrollY: number;
  isHidden?: boolean;
}

const LogoBlock: React.FC = () => {
  return (
    <div className="flex items-center justify-center flex-shrink-0">
      <img
        className="navbar-logo"
        src="https://ihrdadmissions.org/assets/img/ihrdlogorx.png"
        alt="IHRD Logo"
        style={{ width: "90px", height: "90px", objectFit: "contain" }}
      />
    </div>
  );
};

// Top Bar Component
const TopBar: React.FC<{ onNavigate: (section: string) => void }> = ({
  onNavigate,
}) => {
  return (
    <>
      {/* TopBar always visible */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[70px] md:h-[80px] lg:h-[90px] py-3">
            {/* Logo and College Info */}
            <Link
              to="/"
              className="flex items-center cursor-pointer transition-transform duration-300 hover:scale-105 min-w-0 flex-shrink-0 pl-0 -ml-12"
              style={{ gap: "10px" }}
              onClick={() => onNavigate("home")}
            >
              <div className="ml-8 sm:ml-0">
                <LogoBlock />
              </div>
              <div className="block min-w-0 flex-shrink-0 ml-0 sm:ml-0">
                <div className="flex flex-col items-start text-left max-w-[280px] lg:max-w-[320px] xl:max-w-[360px] space-y-0 font-serif">
                  <h1 className="font-bold text-gray-900 leading-tight text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] xl:text-[19px] break-words">
                    College of Applied Science,
                  </h1>
                  <h2 className="font-bold text-gray-900 leading-tight text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] break-words">
                    Kottarakkara
                  </h2>
                  <p className="text-gray-600 font-medium text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] leading-tight break-words">
                    Managed by IHRD, Government of Kerala
                  </p>
                  <p className="text-gray-500 text-[9px] sm:text-[10px] md:text-[11px] lg:text-[12px] font-normal leading-tight break-words">
                    Affiliated to Kerala University.
                  </p>
                </div>
              </div>
            </Link>
            {/* Contact Info on the right side (desktop/tablet only) */}
            <div className="hidden md:flex flex-col items-start justify-start ml-0 text-left font-sans">
              <span className="flex items-center gap-2 justify-start text-gray-700 text-[13px] md:text-[15px] font-semibold">
                <Phone size={18} className="text-blue-600" />
                <a href="tel:8089754259" className="hover:underline">
                  8089754259
                </a>
              </span>
              <span className="flex items-center gap-2 justify-start text-gray-700 text-[13px] md:text-[15px] font-semibold mt-1">
                <Mail size={18} className="text-blue-600" />
                <a
                  href="mailto:caskottarakkara.ihrd@gmail.com"
                  className="hover:underline"
                >
                  caskottarakkara.ihrd@gmail.com
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Main Navigation Bar Component - Scrollable behavior
const MainNavBar: React.FC<{
  activeSection: string;
  onNavigate: (section: string) => void;
  scrollY: number;
  isHidden?: boolean;
}> = ({ activeSection, onNavigate, scrollY, isHidden = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeNestedDropdown, setActiveNestedDropdown] = useState<
    string | null
  >(null);
  const [isTouch, setIsTouch] = useState(false);

  // Detect first touch to enable touch mode
  useEffect(() => {
    const handleTouch = () => setIsTouch(true);
    window.addEventListener("touchstart", handleTouch, { once: true });
    return () => window.removeEventListener("touchstart", handleTouch);
  }, []);

  const navigationItems = [
    {
      id: "administration",
      label: "Administration",
      submenu: [
        { label: "Principal", route: "/administration/principal" },
        {
          label: "Head of Departments",
          route: "/administration/headofdepartments",
        },
        { label: "Parent Teacher Association", route: "/administration/pta" },
        {
          label: "Administrative Staff",
          route: "/administration/administrativestaff",
        },
        { label: "Management", route: "/administration/management" },
      ],
    },
    {
      id: "academics",
      label: "Academics",
      submenu: [
        {
          label: "Academic Programs",
          route: "/academics/academicprogrammes",
          submenu: [
            {
              label: "Courses",
              route: "/academics/academicprogrammes/courses",
            },
            {
              label: "Course Basket",
              route: "/academics/academicprogrammes/coursebasket",
            },
          ],
        },
        { label: "Academic Calendar", route: "/academics/academiccalendar" },
        {
          label: "Departments",
          route: "/academics/departments",
          submenu: [
            {
              label: "Department of Computer Science",
              route: "/academics/departments/computerscience",
            },
            {
              label: "Department of B.Com",
              route: "/academics/departments/b.com",
            },
            {
              label: "Department of Psychology",
              route: "/academics/departments/psychology",
            },
            {
              label: "Department of Journalism & Mass Communication",
              route: "/academics/departments/journalism",
            },
            {
              label: "General Departments",
              route: "/academics/departments/generaldepartments",
            },
          ],
        },
        { label: "FYUGP", route: "/academics/fyugp" },
        { label: "Scholarships", route: "/academics/scholarships" },
        { label: "Online Programs", route: "/academics/onlineprograms" },
        { label: "IQAC", route: "/academics/iqac" },
        { label: "Library", route: "/academics/library" },
        {
          label: "Academic Collaborations",
          route: "/academics/academiccollaborations",
        },

        {
          label: "Accreditation & Recognition Status",
          route: "/academics/accreditation&recognitionstatus",
        },
      ],
    },
    {
      id: "admissions&fee",
      label: "Admissions & Fee",
      submenu: [
        { label: "Prospectus", route: "/admissions&fee/prospectus" },
        {
          label: "Admission Process and Guidelines",
          route: "/admissions&fee/admissionprocess&guidelines",
        },
        { label: "Fee Structure", route: "/admissions&fee/feestructure" },
      ],
    },

    {
      id: "studentlife",
      label: "Student Life",
      submenu: [
        { label: "Sports Facilities", route: "/studentlife/sportsfacilities" },
        {
          label: "National Service Scheme",
          route: "/studentlife/nationalservicescheme",
        },
        {
          label: "Placement Cell Activities",
          route: "/studentlife/placementcell",
        },
        {
          label: "Student Grievance Redressal",
          route: "/studentlife/studentgrievanceredressal",
        },
        {
          label: "Women's Grievance Cell",
          route: "/studentlife/womensgrievancecell",
        },
        {
          label: "Transportation",
          route: "/studentlife/transportation",
        },
        {
          label: "Clubs & Cells",
          route: "/clubs&cells",
          submenu: [
            {
              label: "Anti Ragging Cell",
              route: "/studentlife/clubs&cells/antiraggingcell",
            },
            {
              label: "  IEDC Club",
              route: "/studentlife/clubs&cells/iedcclub",
            },

            {
              label: "College Senate",
              route: "/studentlife/clubs&cells/collegesenate",
            },
          ],
        },
      ],
    },
    { id: "alumni", label: "Alumni", submenu: [] },
    {
      id: "information",
      label: "Information",
      submenu: [
        { label: "Contact Us", route: "/information/contactus" },

        { label: "Downloads", route: "/information/downloads" },
        { label: "RTI Details", route: "/information/rtidetails" },

        {
          label: "Announcements & Notices",
          route: "/information/announcementsandnotices",
        },
      ],
    },
    {
      id: "gallery",
      label: "Gallery",
      submenu: [],
    },
  ];

  const handleDropdownToggle = (itemId: string) => {
    setActiveDropdown(activeDropdown === itemId ? null : itemId);
    setActiveNestedDropdown(null);
  };

  // Hover handlers for desktop
  const handleDropdownMouseEnter = (itemId: string) => {
    if (!isTouch) {
      setActiveDropdown(itemId);
      setActiveNestedDropdown(null);
    }
  };
  const handleDropdownMouseLeave = (itemId: string) => {
    if (!isTouch) {
      setActiveDropdown((curr) => (curr === itemId ? null : curr));
      setActiveNestedDropdown(null);
    }
  };
  const handleNestedDropdownMouseEnter = (subItemLabel: string) => {
    if (!isTouch) setActiveNestedDropdown(subItemLabel);
  };
  const handleNestedDropdownMouseLeave = (subItemLabel: string) => {
    if (!isTouch)
      setActiveNestedDropdown((curr) => (curr === subItemLabel ? null : curr));
  };

  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      const headerEl = document.getElementById("main-nav-bar");
      if (headerEl && !headerEl.contains(e.target as Node)) {
        setActiveDropdown(null);
        setActiveNestedDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleDocumentClick);
    return () => document.removeEventListener("mousedown", handleDocumentClick);
  }, []);

  const handleNestedDropdownToggle = (subItemLabel: string) => {
    setActiveNestedDropdown(
      activeNestedDropdown === subItemLabel ? null : subItemLabel
    );
  };

  // Only hide navbar on scroll for desktop, not mobile
  const shouldHide = isHidden && !isMenuOpen && window.innerWidth >= 768;

  return (
    <nav
      id="main-nav-bar"
      className={`fixed top-[70px] md:top-[80px] lg:top-[90px] left-0 right-0 z-40 transition-transform duration-300 ${
        scrollY > 20
          ? "bg-gray-100 shadow-lg backdrop-blur-sm"
          : "bg-gray-100/95 backdrop-blur-sm"
      } ${shouldHide ? "-translate-y-full" : "translate-y-0"}`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[55px] md:h-[60px] lg:h-[65px]">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-16">
            {navigationItems.map((item) => (
              <div
                key={item.id}
                className="relative group"
                onMouseEnter={() => handleDropdownMouseEnter(item.id)}
                onMouseLeave={() => handleDropdownMouseLeave(item.id)}
              >
                {item.id === "alumni" ? (
                  <Link
                    to="/alumni"
                    className="px-3 md:px-4 lg:px-5 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
                  >
                    {item.label}
                  </Link>
                ) : item.id === "contact" ? (
                  <Link
                    to="/contact"
                    className="px-3 md:px-4 lg:px-5 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
                  >
                    {item.label}
                  </Link>
                ) : item.id === "gallery" ? (
                  <Link
                    to="/Gallery"
                    className="px-3 md:px-4 lg:px-5 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 flex items-center justify-center"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <div className="relative">
                    <button
                      onClick={() => isTouch && handleDropdownToggle(item.id)}
                      className={`px-3 md:px-4 lg:px-5 py-2 text-sm font-medium rounded-lg transition-all duration-200 flex items-center space-x-1 ${
                        activeSection === item.id
                          ? "text-blue-600 bg-blue-50"
                          : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                      }`}
                      tabIndex={0}
                    >
                      <span>{item.label}</span>
                      {item.submenu.length > 0 && (
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-200 ${
                            activeDropdown === item.id ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </button>

                    <div
                      className={`absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50 transition-all duration-300 ${
                        activeDropdown === item.id
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible -translate-y-2"
                      }`}
                      onMouseEnter={() => handleDropdownMouseEnter(item.id)}
                      onMouseLeave={() => handleDropdownMouseLeave(item.id)}
                    >
                      {item.submenu.map((subItem, index) =>
                        typeof subItem === "string" ? (
                          <button
                            key={index}
                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
                            onClick={() => {
                              setActiveDropdown(null);
                              onNavigate(item.id);
                            }}
                          >
                            {subItem}
                          </button>
                        ) : subItem.submenu && subItem.submenu.length > 0 ? (
                          <div
                            key={index}
                            className="relative"
                            onMouseEnter={() =>
                              handleNestedDropdownMouseEnter(subItem.label)
                            }
                            onMouseLeave={() =>
                              handleNestedDropdownMouseLeave(subItem.label)
                            }
                          >
                            <div className="relative group">
                              <button
                                onClick={() =>
                                  isTouch &&
                                  handleNestedDropdownToggle(subItem.label)
                                }
                                className="flex items-center justify-between w-full px-4 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
                              >
                                <span>{subItem.label}</span>
                                <ChevronRight
                                  className={`h-3 w-3 transition-transform duration-200 ${
                                    activeNestedDropdown === subItem.label
                                      ? "rotate-180"
                                      : ""
                                  }`}
                                />
                              </button>
                              <div
                                className={`absolute left-full top-0 ml-1 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50 transition-all duration-300 ${
                                  activeNestedDropdown === subItem.label
                                    ? "opacity-100 visible translate-x-0"
                                    : "opacity-0 invisible -translate-x-2"
                                }`}
                              >
                                {subItem.submenu.map(
                                  (nestedItem, nestedIndex) => (
                                    <Link
                                      key={nestedIndex}
                                      to={nestedItem.route}
                                      className="block px-4 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
                                      onClick={() => {
                                        setActiveDropdown(null);
                                        setActiveNestedDropdown(null);
                                      }}
                                    >
                                      {nestedItem.label}
                                    </Link>
                                  )
                                )}
                              </div>
                            </div>
                          </div>
                        ) : (
                          <Link
                            key={index}
                            to={subItem.route}
                            className="block px-4 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {subItem.label}
                          </Link>
                        )
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200 focus:outline-none focus:ring-0"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ${
            isMenuOpen
              ? "max-h-[1000px] opacity-100 overflow-hidden"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
          style={{ msOverflowStyle: "none", scrollbarWidth: "none" }}
        >
          <nav className="py-4 space-y-3">
            {navigationItems.map((item) => (
              <div key={item.id}>
                {item.id === "alumni" ? (
                  <Link
                    to="/alumni"
                    className={`flex items-center justify-between w-full px-4 py-3 text-left font-medium rounded-lg transition-all duration-200 ${
                      activeSection === item.id
                        ? "text-blue-600 bg-blue-50"
                        : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : item.id === "gallery" ? (
                  <Link
                    to="/Gallery"
                    className={`flex items-center justify-between w-full px-4 py-3 text-left font-medium rounded-lg transition-all duration-200 ${
                      activeSection === item.id
                        ? "text-blue-600 bg-blue-50"
                        : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    onClick={() => {
                      if (item.submenu.length === 0) {
                        onNavigate(item.id);
                        setIsMenuOpen(false);
                      } else {
                        setActiveDropdown(
                          activeDropdown === item.id ? null : item.id
                        );
                        setActiveNestedDropdown(null);
                      }
                    }}
                    className={`flex items-center justify-between w-full px-4 py-3 text-left font-medium rounded-lg transition-all duration-200 ${
                      activeSection === item.id
                        ? "text-blue-600 bg-blue-50"
                        : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                    }`}
                  >
                    {item.label}
                    {item.submenu.length > 0 && (
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${
                          activeDropdown === item.id ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </button>
                )}
                {/* Submenu: smooth expand/collapse, indented, spaced, styled smaller */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    activeDropdown === item.id ? "max-h-[1000px]" : "max-h-0"
                  }`}
                >
                  {item.submenu.length > 0 && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.submenu.map((subItem, index) =>
                        subItem.submenu && subItem.submenu.length > 0 ? (
                          <div key={index}>
                            <button
                              onClick={() =>
                                setActiveNestedDropdown(
                                  activeNestedDropdown === subItem.label
                                    ? null
                                    : subItem.label
                                )
                              }
                              className="flex items-center justify-between w-full px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                            >
                              <span>{subItem.label}</span>
                              <ChevronDown
                                className={`h-3 w-3 transition-transform duration-200 ${
                                  activeNestedDropdown === subItem.label
                                    ? "rotate-180"
                                    : ""
                                }`}
                              />
                            </button>
                            <div
                              className={`overflow-hidden transition-all duration-300 ${
                                activeNestedDropdown === subItem.label
                                  ? "max-h-[1000px]"
                                  : "max-h-0"
                              }`}
                            >
                              <div className="ml-4 py-1 space-y-2">
                                {subItem.submenu.map(
                                  (nestedItem, nestedIndex) => (
                                    <Link
                                      key={nestedIndex}
                                      to={nestedItem.route}
                                      className="block px-4 py-2 text-xs text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                                      onClick={() => {
                                        setActiveDropdown(null);
                                        setActiveNestedDropdown(null);
                                        setIsMenuOpen(false);
                                      }}
                                    >
                                      {nestedItem.label}
                                    </Link>
                                  )
                                )}
                              </div>
                            </div>
                          </div>
                        ) : (
                          <Link
                            key={index}
                            to={subItem.route}
                            className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                            onClick={() => {
                              setActiveDropdown(null);
                              setIsMenuOpen(false);
                            }}
                          >
                            {subItem.label}
                          </Link>
                        )
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </nav>
        </div>
      </div>
    </nav>
  );
};

// Main Header Component - Combines TopBar and MainNavBar
const Header: React.FC<HeaderProps> = ({
  activeSection,
  onNavigate,
  scrollY,
  isHidden = false,
}) => {
  return (
    <>
      <TopBar onNavigate={onNavigate} />
      <MainNavBar
        activeSection={activeSection}
        onNavigate={onNavigate}
        scrollY={scrollY}
        isHidden={isHidden}
      />
    </>
  );
};

export default Header;
