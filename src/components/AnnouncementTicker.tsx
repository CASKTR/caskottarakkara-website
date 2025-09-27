import React from "react";
import { Link } from "react-router-dom";
import announcements from "../../public/assets/AnnouncementData/announcements.json";

// Sort and get the latest 5 announcements by date
type Announcement = {
  id: number;
  title: string;
  date: string;
};

const getLatestAnnouncements = (data: Announcement[]) => {
  return [...data]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5);
};

const AnnouncementTicker: React.FC = () => {
  const latest = getLatestAnnouncements(announcements as Announcement[]);

  return (
    <div className="overflow-hidden w-full bg-blue-50 rounded-xl shadow mb-6">
      <div className="flex items-center gap-3 px-4 py-2 bg-blue-300 border-b border-blue-200">
        <span className="font-semibold text-black-700 text-sm">
          Latest Announcements:
        </span>
      </div>
      <div className="relative w-full h-10">
        <div className="absolute left-0 top-0 w-full h-full flex items-center justify-center sm:justify-start animate-marquee whitespace-nowrap">
          {latest.map((a) => (
            <Link
              key={a.id}
              to={`/information/announcementsandnotices#${a.id}`}
              className="mx-8 text-black-800 hover:text-blue-600 font-medium transition-colors cursor-pointer"
              title={a.title}
            >
              {a.title}
            </Link>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 18s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default AnnouncementTicker;
