import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, ExternalLink, Building, MapPin, AlertTriangle, Phone } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const ScholarshipsPage: React.FC = () => {
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
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  const navigate = useNavigate();

  const NationalScholarshipCard = () => (
    <div className="bg-orange-50 rounded-3xl shadow-xl ring-1 ring-orange-100 overflow-hidden hover:shadow-2xl transition-shadow duration-300">
  <div className="bg-blue-600 px-8 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white">National Scholarship Portal</h2>
            <p className="text-orange-100 mt-1">Central Government Scholarships</p>
          </div>
          <div className="bg-white/20 p-3 rounded-full">
            <Building className="h-8 w-8 text-white" />
          </div>
        </div>
      </div>
      
  <div className="p-8 bg-blue-50">
        <p className="text-gray-700 mb-6 leading-relaxed">
          The National Scholarship Portal (NSP) is a one-stop platform that provides access to a wide range of scholarships offered by the Central Government. 
          It brings together various schemes under one umbrella, making the application process simple, transparent, and efficient for students across the country.
        </p>
        
        <div className="space-y-4 mt-6">
          <h3 className="font-semibold text-gray-900 text-lg mb-2">Available Scholarship Categories</h3>
          <div className="p-4 bg-gray-50 rounded-xl space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-medium text-gray-900">Merit-Based Scholarships</h4>
                <ul className="text-sm text-gray-600 space-y-1 pl-4">
                  <li>• Academic excellence awards</li>
                  <li>• Top performer scholarships</li>
                  <li>• Research fellowships</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium text-gray-900">Need-Based Scholarships</h4>
                <ul className="text-sm text-gray-600 space-y-1 pl-4">
                  <li>• Income-based assistance</li>
                  <li>• Financial hardship support</li>
                  <li>• Emergency funding</li>
                </ul>
              </div>
            </div>
            <div className="pt-3 border-t border-gray-200">
              <h4 className="font-medium text-gray-900 mb-2">Special Categories</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Minority Communities</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Differently Abled</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Single Girl Child</span>
                <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">Technical Education</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a 
            href="https://scholarships.gov.in/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 group"
            data-testid="link-national-portal"
          >
            Visit National Portal
            <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );

  const KeralaScholarshipCard = () => (
    <div className="bg-white rounded-3xl shadow-xl ring-1 ring-gray-100 overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <div className="bg-gradient-to-r from-green-600 to-emerald-700 px-8 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white">e-grantz Kerala</h2>
            <p className="text-green-100 mt-1">State Government Scholarships</p>
          </div>
          <div className="bg-white/20 p-3 rounded-full">
            <MapPin className="h-8 w-8 text-white" />
          </div>
        </div>
      </div>
      
  <div className="p-8 bg-green-50">
        <p className="text-gray-700 mb-6 leading-relaxed">
          The official e-grantz Kerala portal provides the most up-to-date information about state government 
          scholarships and grants. This dedicated platform ensures Kerala students have easy access to 
          local scholarship opportunities.
        </p>
        
        <div className="space-y-4 mt-6">
          <h3 className="font-semibold text-gray-900 text-lg mb-2">Kerala State Scholarship Programmes</h3>
          <div className="p-4 bg-gray-50 rounded-xl space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-medium text-gray-900">Post-Matric Scholarships</h4>
                <ul className="text-sm text-gray-600 space-y-1 pl-4">
                  <li>• OBC, SC, ST, Minority scholarships</li>
                  <li>• State merit scholarships</li>
                  <li>• Suvarna Jubilee Merit Scholarship</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium text-gray-900">Pre-Matric Scholarships</h4>
                <ul className="text-sm text-gray-600 space-y-1 pl-4">
                  <li>• For school-going children of minority communities</li>
                  <li>• OBC, SC, ST, SEBC scholarships</li>
                </ul>
              </div>
            </div>
            <div className="pt-3 border-t border-gray-200">
              <h4 className="font-medium text-gray-900 mb-2">Other State Schemes</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">Fisheries Scholarship</span>
                <span className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm">Children of Ex-Servicemen</span>
                <span className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm">Mother Teresa Scholarship</span>
                <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">State Merit Scholarship</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a 
            href="https://egrantz.kerala.gov.in" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors flex items-center justify-center gap-2 group"
            data-testid="link-kerala-portal"
          >
            Visit e-grantz Kerala
            <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
          {/* Learn More button removed */}
        </div>
      </div>
    </div>
  );

  const FeeConcessionsCard = () => (
    <div className="bg-white rounded-3xl shadow-xl ring-1 ring-gray-100 p-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Fee Concessions</h2>
        <p className="text-gray-600">Special provisions for SC, ST, and OBC categories</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6">
        <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl">
          <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-lg">SC</span>
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">Scheduled Castes</h3>
          <p className="text-sm text-gray-600">Eligible for government-mandated fee concessions based on official orders</p>
        </div>
        
        <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl">
          <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-lg">ST</span>
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">Scheduled Tribes</h3>
          <p className="text-sm text-gray-600">Special tribal community benefits and educational support programs</p>
        </div>
        
        <div className="text-center p-6 bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl">
          <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-xs">OBC</span>
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">Other Backward Classes</h3>
          <p className="text-sm text-gray-600">Category-specific concessions and reservation benefits</p>
        </div>
      </div>
      
      <div className="mt-8 p-6 bg-yellow-50 rounded-2xl border-l-4 border-yellow-400">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <AlertTriangle className="h-6 w-6 text-yellow-600" />
          </div>
          <div className="ml-3">
            <h4 className="text-sm font-medium text-yellow-800">Important Note</h4>
            <p className="mt-1 text-sm text-yellow-700">
              Eligibility criteria, concession amounts, and application procedures can vary depending on the 
              educational institution and type of program. Please contact the Academic Office for specific 
              details regarding your eligibility and application process.
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <button 
          className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-colors inline-flex items-center gap-2"
          data-testid="button-contact-academic-office"
          onClick={() => {
            navigate('/contact');
            window.scrollTo({ top: 0, behavior: 'auto' });
          }}
        >
          <Phone className="h-4 w-4" />
          Contact Academic Office
        </button>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
  <Header activeSection="academics" onNavigate={() => {}} scrollY={scrollY} isHidden={isNavHidden} />

      {/* Page title band */}
      <section className="pt-[155px] md:pt-[170px] lg:pt-[185px] bg-gradient-to-br from-blue-800 to-indigo-950 text-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center text-sm text-white/80 mb-3">
            <span className="hover:text-white transition-colors cursor-pointer">Academics</span>
            <ChevronRight className="mx-2 h-4 w-4 opacity-70" />
            <span className="text-white">Scholarships</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">Scholarships</h1>
          <p className="mt-2 text-white/90 max-w-2xl">Explore the various scholarships available to support your academic journey.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="flex-1 py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          
        

          <div className="grid gap-8 lg:gap-12">
            <NationalScholarshipCard />
            <KeralaScholarshipCard />
            <FeeConcessionsCard />
          </div>
        </div>
      </section>

  <Footer onNavigate={() => {}} />
    </div>
  );
};

export default ScholarshipsPage;
