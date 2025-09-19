import React, { useEffect, useRef, useState } from "react";
import {
  Camera,
  Play,
  Filter,
  Search,
  Download,
  ChevronRight,
} from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";

const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
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

  const categories = [
    { id: "all", label: "All Photos" },
    { id: "academic", label: "Academic Events" },
    { id: "cultural", label: "Cultural Programs" },
    { id: "sports", label: "Sports Activities" },
    { id: "infrastructure", label: "Infrastructure" },
    { id: "graduation", label: "Graduation" },
  ];

  const galleryItems = [
    {
      id: 1,
      src: "https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Annual Convocation 2024",
      category: "graduation",
      date: "2024-11-15",
    },
    {
      id: 2,
      src: "https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Technical Symposium",
      category: "academic",
      date: "2024-10-20",
    },
    {
      id: 3,
      src: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Cultural Festival - Dance Performance",
      category: "cultural",
      date: "2024-09-25",
    },
    {
      id: 4,
      src: "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Inter-College Football Championship",
      category: "sports",
      date: "2024-08-30",
    },
    {
      id: 5,
      src: "https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "New Academic Block",
      category: "infrastructure",
      date: "2024-07-10",
    },
    {
      id: 6,
      src: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "National Hackathon Winners",
      category: "academic",
      date: "2024-06-15",
    },
    {
      id: 7,
      src: "https://images.pexels.com/photos/1181681/pexels-photo-1181681.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Music Concert - College Day",
      category: "cultural",
      date: "2024-05-20",
    },
    {
      id: 8,
      src: "https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Basketball Tournament",
      category: "sports",
      date: "2024-04-25",
    },
    {
      id: 9,
      src: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Central Library",
      category: "infrastructure",
      date: "2024-03-30",
    },

    {
      id: 11,
      src: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Drama Club Performance",
      category: "cultural",
      date: "2024-01-28",
    },
    {
      id: 12,
      src: "https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Swimming Pool Complex",
      category: "infrastructure",
      date: "2024-01-15",
    },
  ];

  const filteredItems =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const openLightbox = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header
        activeSection="gallery"
        onNavigate={noopNavigate}
        scrollY={scrollY}
        isHidden={isNavHidden}
      />

      {/* Page title band */}
      <section className="pt-[155px] md:pt-[170px] lg:pt-[185px] bg-gradient-to-br from-blue-800 to-indigo-950 text-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-10">
          <div className="flex items-center text-sm text-white/80 mb-3">
            <span className="hover:text-white transition-colors">Gallery</span>
            <ChevronRight className="mx-2 h-4 w-4 opacity-70" />
            <span className="text-white">Visual Stories</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">Picture Gallery</h1>
          <p className="mt-2 text-white/90 max-w-2xl">
            Explore our campus life through captivating images and moments.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="flex-1 py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Picture Gallery
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Capturing moments of excellence, achievement, and vibrant campus
              life through our visual journey.
            </p>
          </div>

          {/* Gallery Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                2,500+
              </div>
              <div className="text-gray-600">Photos</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Play className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">150+</div>
              <div className="text-gray-600">Videos</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Filter className="h-8 w-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
              <div className="text-gray-600">Events</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="h-8 w-8 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                1,000+
              </div>
              <div className="text-gray-600">Downloads</div>
            </div>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-12">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search photos by title or date..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? "bg-blue-600 text-white shadow-lg"
                      : "bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-sm"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                onClick={() => openLightbox(item.src)}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                    <p className="text-sm opacity-80">
                      {new Date(item.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                    <Camera className="h-5 w-5 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl">
              Load More Photos
            </button>
          </div>

          {/* Video Highlights */}
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Video Highlights
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer">
                <div className="aspect-video overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="College Campus Tour"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play className="h-8 w-8 text-white ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h4 className="text-lg font-semibold">Campus Tour 2024</h4>
                  <p className="text-sm opacity-80">
                    Virtual tour of our beautiful campus
                  </p>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer">
                <div className="aspect-video overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Convocation Ceremony"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play className="h-8 w-8 text-white ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h4 className="text-lg font-semibold">Convocation 2024</h4>
                  <p className="text-sm opacity-80">
                    Graduation ceremony highlights
                  </p>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer">
                <div className="aspect-video overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Cultural Festival"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play className="h-8 w-8 text-white ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h4 className="text-lg font-semibold">Cultural Festival</h4>
                  <p className="text-sm opacity-80">
                    Annual cultural celebration
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <div className="relative max-w-7xl max-h-full">
              <img
                src={selectedImage}
                alt="Gallery Image"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors duration-200"
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
      </section>

      <Footer onNavigate={noopNavigate} />
    </div>
  );
};

export default GallerySection;
