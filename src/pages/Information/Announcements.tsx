import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  ChevronRight,
  ChevronDown,
  Calendar,
  Tag,
  Bell,
  ExternalLink,
} from "lucide-react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import mockAnnouncementsData from "../../../public/assets/AnnouncementData/announcements.json";

// Announcement type definition
type Announcement = {
  id: number;
  title: string;
  description: string;
  date: string;
  category: string;
  documentUrl?: string;
};
// Individual Announcement Card Component
const AnnouncementCard = ({
  announcement,
  autoExpand,
}: {
  announcement: Announcement;
  autoExpand?: boolean;
}) => {
  const [isExpanded, setIsExpanded] = useState(!!autoExpand);

  useEffect(() => {
    if (autoExpand) setIsExpanded(true);
  }, [autoExpand]);

  const toggleExpanded = () => {
    setIsExpanded((prev) => !prev);
  };

  const getCategoryColor = (category: string): string => {
    const colorMap: { [key: string]: string } = {
      exam: "bg-red-100 text-red-800 border-red-200",
      event: "bg-blue-100 text-blue-800 border-blue-200",
      notice: "bg-yellow-100 text-yellow-800 border-yellow-200",
    };
    return (
      colorMap[category.toLowerCase()] ||
      "bg-gray-100 text-gray-800 border-gray-200"
    );
  };

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  interface GetPreviewProps {
    text: string;
  }

  const getPreview = (text: GetPreviewProps["text"]): string => {
    const words = text.split(" ");
    return words.length > 20 ? words.slice(0, 20).join(" ") + "..." : text;
  };

  return (
    <div
      id={`announcement-${announcement.id}`}
      className="bg-white rounded-3xl shadow-xl ring-1 ring-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 w-full"
    >
      <div className="p-6 cursor-pointer" onClick={toggleExpanded}>
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <span
                className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(
                  announcement.category
                )}`}
              >
                <Tag className="w-3 h-3 mr-1" />
                {announcement.category}
              </span>
              <div className="flex items-center text-gray-500 text-sm">
                <Calendar className="w-4 h-4 mr-1" />
                {formatDate(announcement.date)}
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
              {announcement.title}
            </h3>
          </div>
          <div className="flex-shrink-0 ml-4">
            <div
              className={`p-2 rounded-full bg-gray-100 transition-transform duration-200 ${
                isExpanded ? "rotate-180" : ""
              }`}
            >
              <ChevronDown className="w-5 h-5 text-gray-600" />
            </div>
          </div>
        </div>

        <div className="text-gray-700 leading-relaxed">
          {isExpanded ? (
            <div className="space-y-4">
              <p>{announcement.description}</p>
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Bell className="w-4 h-4 mr-1" />
                    Click to collapse
                  </div>
                  {announcement.documentUrl && (
                    <a
                      href={announcement.documentUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors"
                    >
                      Click Here
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <p className="text-gray-600">
              {getPreview(announcement.description)}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

// Main Announcements Page Component
const AnnouncementsPage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isNavHidden, setIsNavHidden] = useState(false);
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const lastScrollYRef = useRef(0);
  const location = useLocation();
  const [autoExpandId, setAutoExpandId] = useState<string | null>(null);

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

  useEffect(() => {
    const loadAnnouncements = () => {
      // Sort by date descending
      const sortedAnnouncements = [...mockAnnouncementsData].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
      setAnnouncements(sortedAnnouncements);
    };

    loadAnnouncements();
  }, []);

  // Auto-expand and scroll to announcement if hash is present
  useEffect(() => {
    if (location.hash.startsWith("#")) {
      const id = location.hash.replace("#", "");
      setAutoExpandId(id);
      setTimeout(() => {
        const el = document.getElementById(`announcement-${id}`);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 200);
    } else {
      setAutoExpandId(null);
    }
  }, [location.hash, announcements.length]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header
        activeSection="academics"
        onNavigate={() => {}}
        scrollY={scrollY}
        isHidden={isNavHidden}
      />

      {/* Page title band */}
      <section className="pt-[155px] md:pt-[170px] lg:pt-[185px] bg-gradient-to-br from-blue-800 to-indigo-950 text-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center text-sm text-white/80 mb-3">
            <span className="hover:text-white transition-colors cursor-pointer">
              Home
            </span>
            <ChevronRight className="mx-2 h-4 w-4 opacity-70" />
            <span className="text-white">Announcements</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">Announcements</h1>
          <p className="mt-2 text-white/90 max-w-2xl">
            Stay updated with the latest news, events, and important notices
            from our college.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="flex-1 py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          {/* Announcements List */}
          <div className="space-y-6">
            {announcements.length > 0 ? (
              announcements.map((announcement) => (
                <AnnouncementCard
                  key={announcement.id}
                  announcement={announcement}
                  autoExpand={autoExpandId === String(announcement.id)}
                />
              ))
            ) : (
              <div className="text-center py-12">
                <Bell className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  No Announcements
                </h3>
                <p className="text-gray-600">
                  Check back later for updates and important notices.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer onNavigate={() => {}} />
    </div>
  );
};

export default AnnouncementsPage;
