import { useState, useRef, useEffect } from "react";
import ComputerSciencePage from "./pages/Academics/Departments/ComputerScience";
import BcomPage from "./pages/Academics/Departments/Bcom";
import Journalism from "./pages/Academics/Departments/Journalism";
import Psychology from "./pages/Academics/Departments/Psychology";
import GeneralDepartmentsPage from "./pages/Academics/Departments/GeneralDepartments";
import CollegeCourseBasket from "./pages/Academics/AcademicPrograms/CollegeCourseBasket";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AccreditationRecognitionStatus from "./pages/Academics/Accreditation&RecognitionStatus";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import PrincipalPage from "./pages/Administration/Principal";
import HeadOfDepartmentsPage from "./pages/Administration/HeadOfDepartments";
import AdministrativeStaffPage from "./pages/Administration/AdministrativeStaff";
import ManagementPage from "./pages/Administration/Management";
import PTAPage from "./pages/Administration/PTA";
import AdmissionProcessAndGuidelines from "./pages/Admission&Fee/AdmissionProcess&Guidelines";
import Prospectus from "./pages/Admission&Fee/Prospectus";
import FeeStructure from "./pages/Admission&Fee/FeeStructure";
import SportsFacilities from "./pages/StudentLife/SportsFacilities";
import NSS from "./pages/StudentLife/NSS";
import Courses from "./pages/Academics/AcademicPrograms/Courses";
import AcademicCalendar from "./pages/Academics/AcademicCalendar";
import OnlineProgramsPage from "./pages/Academics/OnlinePrograms";
import AcademicCollaborationsPage from "./pages/Academics/AcademicCollaborations";
import IQAC from "./pages/Academics/IQAC";
import Library from "./pages/Academics/Library";
import FYUGP from "./pages/Academics/FYUGP";
import PlacementCellActivities from "./pages/StudentLife/PlacementCellActivities";
import StudentGrievanceRedressal from "./pages/StudentLife/StudentGrievanceRedressal";
import WomensGrievanceCellPage from "./pages/StudentLife/Women'sGrievanceCell";
import RTIDetails from "./pages/Information/RTIDetails";
import CircularsAndNotices from "./pages/Information/CircularsAndNotices";
import ScholarshipsPage from "./pages/Academics/Scholarships";
import DownloadsPage from "./pages/Academics/Downloads";
import AntiRaggingCell from "./pages/StudentLife/Clubs&Cells/AntiRaggingCell";
import IEDCPage from "./pages/StudentLife/Clubs&Cells/EDClub";
import CollegeSenate from "./pages/StudentLife/Clubs&Cells/CollegeSenate";
import TransportationPage from "./pages/StudentLife/Transportation";
import AlumniSection from "./components/AlumniSection";
import GallerySection from "./components/GallerySection";
import ContactUs from "./pages/Information/Contact";

function HomePage({
  activeSection,
  scrollToSection,
  scrollY,
  isNavHidden,
}: {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
  scrollY: number;
  isNavHidden: boolean;
}) {
  return (
    <>
      <Header
        activeSection={activeSection}
        onNavigate={scrollToSection}
        scrollY={scrollY}
        isHidden={isNavHidden}
      />
      <main>
        <Hero onNavigate={scrollToSection} />
        <AboutSection />
      </main>

      <Footer onNavigate={scrollToSection} />
    </>
  );
}

function App() {
  const [activeSection, setActiveSection] = useState("home");
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

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const topBarEl = document.querySelector(".fixed.top-0");
        const mainNavEl = document.querySelector("#main-nav-bar");
        let totalHeaderHeight = 155;
        if (
          topBarEl instanceof HTMLElement &&
          mainNavEl instanceof HTMLElement
        ) {
          totalHeaderHeight = topBarEl.offsetHeight + mainNavEl.offsetHeight;
        } else if (topBarEl instanceof HTMLElement) {
          const isMobile = window.innerWidth < 768;
          const isLarge = window.innerWidth >= 1024;
          const navHeight = isMobile ? 55 : isLarge ? 65 : 60;
          totalHeaderHeight = topBarEl.offsetHeight + navHeight;
        }
        const elementPosition = element.offsetTop - totalHeaderHeight;
        window.scrollTo({ top: elementPosition, behavior: "smooth" });
      }
    }
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              activeSection={activeSection}
              scrollToSection={scrollToSection}
              scrollY={scrollY}
              isNavHidden={isNavHidden}
            />
          }
        />
        <Route path="/administration/principal" element={<PrincipalPage />} />
        <Route
          path="/administration/headofdepartments"
          element={<HeadOfDepartmentsPage />}
        />
        <Route path="/administration/pta" element={<PTAPage />} />
        <Route
          path="/administration/administrativestaff"
          element={<AdministrativeStaffPage />}
        />
        <Route path="/administration/management" element={<ManagementPage />} />
        <Route
          path="/admissions&fee/admissionprocess&guidelines"
          element={<AdmissionProcessAndGuidelines />}
        />
        <Route path="/admissions&fee/prospectus" element={<Prospectus />} />
        <Route path="/admissions&fee/feestructure" element={<FeeStructure />} />
        <Route
          path="/academics/academicprogrammes/courses"
          element={<Courses />}
        />
        <Route
          path="/academics/departments/computerscience"
          element={<ComputerSciencePage />}
        />
        <Route path="/academics/departments/b.com" element={<BcomPage />} />
        <Route
          path="/academics/departments/journalism"
          element={<Journalism />}
        />
        <Route
          path="/academics/departments/psychology"
          element={<Psychology />}
        />
        <Route
          path="/academics/departments/generaldepartments"
          element={<GeneralDepartmentsPage />}
        />
        <Route
          path="/academics/academicprogrammes/coursebasket"
          element={<CollegeCourseBasket />}
        />
        <Route
          path="/academics/academiccalendar"
          element={<AcademicCalendar />}
        />
        <Route path="/academics/iqac" element={<IQAC />} />
        <Route path="/academics/scholarships" element={<ScholarshipsPage />} />
        <Route path="/academics/library" element={<Library />} />
        <Route path="/academics/fyugp" element={<FYUGP />} />
        <Route
          path="/academics/academiccollaborations"
          element={<AcademicCollaborationsPage />}
        />
        <Route
          path="/academics/onlineprograms"
          element={<OnlineProgramsPage />}
        />
        <Route
          path="/academics/accreditation&recognitionstatus"
          element={<AccreditationRecognitionStatus />}
        />
        <Route
          path="/studentlife/sportsfacilities"
          element={<SportsFacilities />}
        />
        <Route
          path="/studentlife/transportation"
          element={<TransportationPage />}
        />
        <Route path="/studentlife/nationalservicescheme" element={<NSS />} />
        <Route
          path="/studentlife/placementcell"
          element={<PlacementCellActivities />}
        />
        <Route
          path="/studentlife/studentgrievanceredressal"
          element={<StudentGrievanceRedressal />}
        />
        <Route
          path="/studentlife/womensgrievancecell"
          element={<WomensGrievanceCellPage />}
        />
        <Route
          path="/studentlife/clubs&cells/iedcclub"
          element={<IEDCPage />}
        />
        <Route
          path="/studentlife/clubs&cells/collegesenate"
          element={<CollegeSenate />}
        />
        <Route path="/information/rtidetails" element={<RTIDetails />} />
        <Route
          path="/information/circularsandnotices"
          element={<CircularsAndNotices />}
        />
        <Route path="/information/downloads" element={<DownloadsPage />} />
        <Route
          path="/studentlife/clubs&cells/antiraggingcell"
          element={<AntiRaggingCell />}
        />
        <Route path="/information/contactus" element={<ContactUs />} />
        <Route path="/gallery" element={<GallerySection />} />{" "}
        <Route path="/alumni" element={<AlumniSection />} />{" "}
      </Routes>
    </Router>
  );
}

export default App;
