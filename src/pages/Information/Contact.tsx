import { useEffect, useRef, useState, ChangeEvent } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  User,
  MessageSquare,
  ChevronRight,
  Building,
} from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const ContactUs = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isNavHidden, setIsNavHidden] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
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

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (
      formData.name &&
      formData.email &&
      formData.subject &&
      formData.message
    ) {
      alert("Thank you for your message! We will get back to you soon.");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } else {
      alert("Please fill in all required fields.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header
        activeSection="contact"
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
            <span className="text-white">Contact Us</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">Contact Us </h1>
          <p className="mt-2 text-white/90 max-w-2xl">
            Get in touch with College of Applied Science, Kottarakkara.
          </p>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-3xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We'd love to hear from you. Choose the most convenient way to
              contact us.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Address Card */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="bg-blue-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Address</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                College of Applied Science, Kottarakkara
                <br />
                Kottarakkara P.O.
                <br />
                Kollam, Kottarakkara - 691531
                <br />
                Kerala, India
              </p>
            </div>

            {/* Phone Card */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="bg-green-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Phone</h3>
              <div className="space-y-2 text-gray-600">
                <p className="font-medium">8089754259</p>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="bg-purple-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Email</h3>
              <div className="space-y-2 text-gray-600 text-sm">
                <p>caskottarakkara.ihrd@gmail.com</p>
                <p>casktr.ac.in</p>
              </div>
            </div>

            {/* Office Hours Card */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="bg-orange-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Office Hours
              </h3>
              <div className="space-y-1 text-gray-600 text-sm">
                <p>Monday - Friday</p>
                <p className="font-medium">9:00 AM - 5:00 PM</p>
                <p>Saturday: 9:00 AM - 1:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principal Information */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Building className="h-10 w-10 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Principal's Office
              </h2>
              <div className="max-w-2xl mx-auto">
                <h3 className="text-2xl font-semibold text-blue-800 mb-2">
                  Dr. Murali V.S.
                </h3>
                <p className="text-lg text-gray-600 mb-4">Principal</p>
                <p className="text-gray-700 leading-relaxed">
                  For academic inquiries, administrative matters, or to schedule
                  a meeting with the Principal, please contact us using the
                  information provided above. Dr. Murali V.S. is committed to
                  fostering excellence in education and is available to discuss
                  matters related to the college's academic programs and student
                  welfare.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Send us a Message
              </h2>
              <p className="text-gray-600 mb-8">
                Have a question or need more information? Fill out the form
                below and we'll get back to you as soon as possible.
              </p>

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="What is your message about?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Please enter your message here..."
                    ></textarea>
                  </div>
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <Send className="h-5 w-5" />
                  Send Message
                </button>
              </div>
            </div>

            {/* Map Section */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Find Us</h2>
              <p className="text-gray-600 mb-8">
                Located in the heart of Kottarakkara, Kollam district, our
                college is easily accessible by road and public transport.
              </p>

              <div className="bg-gray-100 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="w-full h-full">
                  <iframe
                    title="College Location Map"
                    src="https://www.google.com/maps?q=College+of+Applied+Science,+Kottarakkara&hl=en&z=16&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0, borderRadius: "1rem" }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                  <a
                    href="https://maps.app.goo.gl/daJEwXZejmgbft8D9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-blue-400 text-xs text-center mt-2 hover:underline"
                  >
                    Open in Google Maps
                  </a>
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

export default ContactUs;
