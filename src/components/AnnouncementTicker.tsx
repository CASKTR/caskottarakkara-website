import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import announcements from "../../public/assets/AnnouncementData/announcements.json";

type Announcement = {
  id: number;
  title: string;
  date: string;
  category: string;
};
// Category color utility
const getCategoryColor = (category: string): string => {
  const colorMap: { [key: string]: string } = {
    exam: "bg-red-100 text-red-800 border-red-200",
    event: "bg-blue-100 text-blue-800 border-blue-200",
    notice: "bg-yellow-100 text-yellow-800 border-yellow-200",
  };
  return (
    colorMap[category?.toLowerCase?.()] ||
    "bg-gray-100 text-gray-800 border-gray-200"
  );
};

const getLatestAnnouncements = (data: Announcement[]) => {
  return [...data]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 6);
};

const pairIntervals = [5000, 3000, 2000];

const AnnouncementTicker: React.FC = () => {
  const latest = getLatestAnnouncements(announcements as Announcement[]);
  // Show 2 announcements per scroll position
  const numPairs = Math.ceil(latest.length / 2);
  const [pairIndex, setPairIndex] = useState(0);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    const currentInterval = pairIntervals[pairIndex % pairIntervals.length];
    timeoutRef.current = window.setTimeout(() => {
      setPairIndex((prev) => {
        const next = prev + 1;
        return next >= numPairs ? 0 : next;
      });
    }, currentInterval);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [pairIndex, numPairs]);

  // Prepare pairs for display (2 per card)
  const pairs: Announcement[][] = [];
  for (let i = 0; i < latest.length; i += 2) {
    const pair = [latest[i], latest[i + 1]].filter(Boolean) as Announcement[];
    pairs.push(pair);
  }

  return (
    <div className="w-full p-4">
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden w-full flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-5">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 bg-white rounded-full animate-pulse" />
            <h3 className="font-bold text-white text-lg tracking-wide">
              Latest Announcements
            </h3>
          </div>
        </div>
        {/* Ticker Container */}
        <div className="relative flex-1 min-h-[10rem] bg-gradient-to-br from-gray-50 to-white overflow-hidden w-full flex flex-col">
          <div
            className="absolute w-full h-full transition-transform duration-700 ease-in-out flex flex-col"
            style={{
              transform: `translateY(-${pairIndex * 100}%)`,
            }}
          >
            {pairs.map((pair, i) => (
              <div
                key={i}
                className="flex flex-col h-full min-h-[10rem] divide-y divide-gray-100"
              >
                {[0, 1].map((idx) => {
                  const announcement = pair[idx];
                  return (
                    <div
                      key={announcement ? announcement.id : idx}
                      className={
                        announcement
                          ? "flex-1 flex items-center px-6 py-4 group hover:bg-blue-50 transition-colors duration-200 min-h-0"
                          : "flex-1 px-6 py-4 min-h-0 opacity-0 pointer-events-none"
                      }
                      style={{ minHeight: 0 }}
                    >
                      {announcement && (
                        <Link
                          to={`/information/announcementsandnotices#${announcement.id}`}
                          className="flex items-center gap-4 w-full"
                        >
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 group-hover:scale-150 transition-transform" />
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-0.5">
                              <span
                                className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border ${getCategoryColor(
                                  announcement.category
                                )}`}
                                title={announcement.category}
                              >
                                {announcement.category}
                              </span>
                              <span className="text-xs text-gray-500 font-normal">
                                {new Date(announcement.date).toLocaleDateString(
                                  undefined,
                                  {
                                    year: "numeric",
                                    month: "short",
                                    day: "numeric",
                                  }
                                )}
                              </span>
                            </div>
                            <p className="text-gray-800 font-bold text-sm lg:text-lg font-serif leading-snug group-hover:text-blue-700 transition-colors whitespace-normal">
                              {announcement.title}
                            </p>
                          </div>
                          <svg
                            className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all flex-shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </Link>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
        {/* Progress Indicators */}
        <div className="flex justify-center gap-2 py-3 bg-gray-50 border-t border-gray-100">
          {pairs.map((_, idx) => (
            <div
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === pairIndex ? "w-8 bg-blue-600" : "w-1.5 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnnouncementTicker;
