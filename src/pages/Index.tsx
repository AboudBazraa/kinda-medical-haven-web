import React, { useEffect, useState, Suspense, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ChevronRight,
  ShoppingBag,
  Stethoscope,
  Shield,
  ArrowRight,
  Check,
  Star,
  Phone,
  Mail,
  Building,
  HeartPulse,
  Microscope,
  Activity,
  ArrowDown,
  FileText,
  Download,
  MapPin,
  HelpCircle,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SEO from "@/components/SEO";
import OrganizationSchema from "@/components/schemas/OrganizationSchema";
import { motion, LazyMotion, domAnimation } from "framer-motion";

// Lazy-loaded image component
const LazyImage = ({ src, alt, className, ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className={`relative ${className} overflow-hidden`}>
      {!isLoaded && !error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <Loader2 className="h-8 w-8 text-[#007BFF] animate-spin" />
        </div>
      )}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <span className="text-red-500">Failed to load image</span>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} ${
          isLoaded ? "opacity-100" : "opacity-0"
        } transition-opacity duration-300`}
        onLoad={() => setIsLoaded(true)}
        onError={() => setError(true)}
        loading="lazy"
        {...props}
      />
    </div>
  );
};

const Index: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRefs = useRef<HTMLElement[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsVisible(true);

    // Create better intersection observer for lazy loading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeIn");
            // Also set opacity directly in case animation fails
            (entry.target as HTMLElement).style.opacity = "1";
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    // Get all lazy-section elements and observe them
    const sections = document.querySelectorAll(".lazy-section");
    sections.forEach((section) => {
      observer.observe(section);
      sectionRefs.current.push(section as HTMLElement);
    });

    // Failsafe: If sections don't become visible after 5 seconds, force them visible
    const timer = setTimeout(() => {
      sectionRefs.current.forEach((section) => {
        if (section.style.opacity !== "1") {
          section.style.opacity = "1";
          section.classList.add("animate-fadeIn");
        }
      });
    }, 5000);

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
      clearTimeout(timer);
    };
  }, []);

  // Early return for better initial load
  if (!isVisible) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-10 w-10 text-[#007BFF] animate-spin" />
      </div>
    );
  }

  return (
    <LazyMotion features={domAnimation}>
      <div className="min-h-screen bg-white">
        <SEO
          title="MediGlobal Trading Company | Medical Equipment & Devices Supplier"
          description="MediGlobal Trading Company provides high-quality medical equipment and devices to hospitals, clinics, and healthcare distributors worldwide."
          keywords="medical equipment, medical devices, healthcare supplies, hospital equipment, diagnostic equipment, surgical instruments"
        />
        <OrganizationSchema />

        {/* Hero Section */}
        <section className="py-36 bg-white relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute right-0 top-0 w-1/3 h-1/3 bg-blue-50 opacity-70 rounded-bl-[100px]"></div>
            <div className="absolute left-0 bottom-0 w-1/3 h-1/3 bg-blue-50 opacity-70 rounded-tr-[100px]"></div>
          </div>

          <div className="container mx-auto px-4 md:px-6 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
              <motion.div
                className="space-y-6 md:space-y-8"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-flex items-center px-3 py-1.5 bg-blue-50 rounded-md text-[#007BFF]">
                  <Shield className="h-4 w-4 mr-2" />
                  <span className="text-sm font-medium">
                    ISO 13485 Certified
                  </span>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Advanced Medical{" "}
                  <span className="text-[#007BFF]">Equipment</span> for
                  Healthcare
                </h1>

                <p className="text-base md:text-lg text-gray-600 max-w-lg">
                  High-quality medical devices and equipment for hospitals and
                  healthcare facilities worldwide, enhancing patient care.
                </p>

                <div className="flex flex-wrap gap-4 pt-2">
                  <Link to="/products">
                    <Button className="bg-[#007BFF] hover:bg-blue-600 transition-colors duration-300 px-6">
                      Browse Products
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button
                      variant="outline"
                      className="border-[#007BFF] text-[#007BFF] hover:bg-blue-50 transition-colors duration-300"
                    >
                      Request Quote
                    </Button>
                  </Link>
                </div>

                <div className="flex items-center pt-4">
                  <div className="flex -space-x-2 mr-3">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full border-2 border-white overflow-hidden"
                      >
                        <LazyImage
                          src={`https://randomuser.me/api/portraits/men/${
                            20 + i
                          }.jpg`}
                          alt="Customer"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                    <span>Trusted by 500+ healthcare providers</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-lg">
                  <LazyImage
                    src="https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800"
                    alt="Advanced Medical Equipment"
                    className="w-full h-auto"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <div className="flex items-center">
                      <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
                        <Check className="h-3.5 w-3.5 text-white" />
                        <span className="text-white text-sm font-medium">
                          FDA Approved
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
              <a
                href="#stats"
                className="flex flex-col items-center text-gray-400 hover:text-gray-600 transition-colors duration-300"
              >
                <span className="text-sm mb-1">Scroll</span>
                <ArrowDown className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section id="stats" className="py-16 md:py-20 bg-gray-50 lazy-section">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {[
                { value: "20+", label: "Years Experience" },
                { value: "1000+", label: "Products Available" },
                { value: "50+", label: "Countries Served" },
                { value: "500+", label: "Healthcare Partners" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="text-center bg-white p-4 md:p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.05 }}
                >
                  <p className="text-2xl md:text-3xl font-bold text-[#007BFF] mb-1">
                    {item.value}
                  </p>
                  <p className="text-gray-600">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-16 md:py-24 bg-white lazy-section">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              className="text-center mb-12 md:mb-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-gray-800">
                Medical Equipment Categories
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                High-quality products for healthcare providers worldwide
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  title: "Diagnostic Equipment",
                  description:
                    "Advanced diagnostic tools including ultrasound machines and ECG devices.",
                  path: "/products/diagnostic",
                  icon: HeartPulse,
                },
                {
                  title: "Surgical Instruments",
                  description:
                    "High-quality surgical tools and operating room equipment.",
                  path: "/products/surgical",
                  icon: Stethoscope,
                },
                {
                  title: "Patient Monitoring",
                  description:
                    "Monitoring systems for vital signs in various care settings.",
                  path: "/products/monitoring",
                  icon: Activity,
                },
                {
                  title: "Laboratory Equipment",
                  description:
                    "Laboratory instruments and analyzers for medical testing.",
                  path: "/products/laboratory",
                  icon: Microscope,
                },
                {
                  title: "Medical Supplies",
                  description:
                    "Essential supplies including PPE and wound care products.",
                  path: "/products/supplies",
                  icon: ShoppingBag,
                },
                {
                  title: "Hospital Furniture",
                  description:
                    "Ergonomic beds, examination tables, and medical carts.",
                  path: "/products/furniture",
                  icon: Building,
                },
              ].map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link to={category.path} className="block h-full">
                    <Card className="h-full border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 bg-white overflow-hidden group">
                      <CardContent className="p-4 md:p-6">
                        <div className="flex items-start mb-4">
                          <div className="p-3 bg-blue-50 rounded-lg mr-4 group-hover:bg-[#007BFF] transition-colors duration-300">
                            <category.icon className="h-5 w-5 text-[#007BFF] group-hover:text-white transition-colors duration-300" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-2 text-gray-800 group-hover:text-[#007BFF] transition-colors duration-300">
                              {category.title}
                            </h3>
                            <p className="text-gray-600 text-sm">
                              {category.description}
                            </p>
                          </div>
                        </div>
                        <div className="pt-2 mt-auto">
                          <span className="text-sm inline-flex items-center text-[#007BFF] font-medium">
                            Learn more{" "}
                            <ChevronRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link to="/products">
                <Button className="bg-[#007BFF] hover:bg-blue-600 px-6">
                  View All Products <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 md:py-24 bg-gray-50 lazy-section">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <div className="relative">
                  <div className="absolute -inset-4 bg-blue-100/50 rounded-2xl rotate-3 -z-10"></div>
                  <LazyImage
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800"
                    alt="Medical Equipment Showcase"
                    className="w-full h-auto rounded-xl shadow-md relative z-10"
                  />
                </div>
              </motion.div>

              <motion.div
                className="space-y-6 md:space-y-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
                  Why Choose MediGlobal?
                </h2>

                <p className="text-gray-600">
                  We provide healthcare facilities with high-quality medical
                  equipment at competitive prices to enhance patient care.
                </p>

                <div className="space-y-4 md:space-y-6">
                  {[
                    {
                      title: "Quality Assurance",
                      description:
                        "Products that meet international quality standards",
                    },
                    {
                      title: "Global Distribution",
                      description:
                        "Efficient delivery to healthcare facilities worldwide",
                    },
                    {
                      title: "Technical Support",
                      description:
                        "Comprehensive after-sales support and training",
                    },
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start p-3 md:p-4 rounded-lg hover:bg-white transition-colors duration-300"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <div className="bg-[#007BFF] rounded-lg p-2 mr-4 shrink-0">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 text-base md:text-lg">
                          {feature.title}
                        </h4>
                        <p className="text-gray-600 text-sm md:text-base">
                          {feature.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <Link to="/about">
                  <Button className="bg-[#007BFF] hover:bg-blue-600 px-6">
                    About Us <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section - NEW */}
        <section className="py-16 md:py-24 bg-white lazy-section">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              className="text-center mb-12 md:mb-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-gray-800">
                Our Services
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We offer comprehensive services to support your medical
                equipment needs
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  title: "Equipment Consultation",
                  description:
                    "Expert recommendations on the right equipment for your healthcare facility's specific needs.",
                  icon: HelpCircle,
                },
                {
                  title: "Installation & Setup",
                  description:
                    "Professional installation and configuration of all equipment to ensure optimal performance.",
                  icon: Building,
                },
                {
                  title: "Staff Training",
                  description:
                    "Comprehensive training sessions to ensure your team can effectively operate all equipment.",
                  icon: Activity,
                },
                {
                  title: "Maintenance Plans",
                  description:
                    "Regular maintenance programs to keep your medical equipment in optimal working condition.",
                  icon: Stethoscope,
                },
                {
                  title: "Technical Support",
                  description:
                    "24/7 technical support to assist with any equipment issues or questions.",
                  icon: Phone,
                },
                {
                  title: "Warranty Services",
                  description:
                    "Extended warranty options and prompt repair services for all equipment.",
                  icon: Shield,
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-all duration-300"
                  style={{ opacity: 1 }} // Force initial visibility
                >
                  <div className="flex items-start">
                    <div className="p-3 bg-blue-50 rounded-lg mr-4">
                      <service.icon className="h-5 w-5 text-[#007BFF]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-gray-800">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Global Presence - NEW */}
        <section
          className="py-16 md:py-24 bg-gray-50 lazy-section"
          id="global-presence"
        >
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              className="text-center mb-12 md:mb-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-gray-800">
                Global Presence
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Serving healthcare facilities across 50+ countries with local
                expertise
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className="relative overflow-hidden rounded-xl"
              >
                <LazyImage
                  src="https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800"
                  alt="Global Healthcare Network"
                  className="rounded-xl shadow-md hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>

              <motion.div
                className="space-y-4 md:space-y-6"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                  Our Global Network
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  With strategically located distribution centers worldwide, we
                  deliver timely equipment and provide responsive local support.
                  Our international expertise enables us to navigate diverse
                  healthcare regulations and adapt to regional medical
                  requirements.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mt-6 md:mt-8">
                  {[
                    {
                      region: "North America",
                      countries: "USA, Canada, Mexico",
                      count: "15+ facilities",
                    },
                    {
                      region: "Europe",
                      countries: "UK, Germany, France, Italy, Spain",
                      count: "20+ facilities",
                    },
                    {
                      region: "Asia",
                      countries: "Japan, China, India, Singapore",
                      count: "12+ facilities",
                    },
                    {
                      region: "Middle East",
                      countries: "UAE, Saudi Arabia, Qatar",
                      count: "8+ facilities",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="bg-white p-4 rounded-lg border border-gray-100 hover:shadow-md hover:border-blue-100 transition-all duration-300"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="flex items-center mb-2">
                        <MapPin className="h-4 w-4 text-[#007BFF] mr-2" />
                        <h4 className="font-semibold">{item.region}</h4>
                      </div>
                      <p className="text-gray-600 text-sm">{item.countries}</p>
                      <p className="text-blue-600 text-xs mt-1 font-medium">
                        {item.count}
                      </p>
                    </motion.div>
                  ))}
                </div>

                <Link to="/contact">
                  <Button className="bg-[#007BFF] hover:bg-blue-700 mt-4 md:mt-6 group flex items-center gap-2">
                    Find Local Distributor
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Resources Section - NEW */}
        <section className="py-16 md:py-24 bg-white lazy-section">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              className="text-center mb-12 md:mb-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-gray-800">
                Resources
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Access our learning resources and documentation
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  title: "Product Catalogs",
                  description:
                    "Download our comprehensive product catalogs with detailed specifications and pricing.",
                  icon: FileText,
                },
                {
                  title: "User Manuals",
                  description:
                    "Access user manuals and operating guides for all our medical equipment.",
                  icon: HeartPulse,
                },
                {
                  title: "Certifications",
                  description:
                    "View our product certifications and compliance documentation.",
                  icon: Shield,
                },
              ].map((resource, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
                  style={{ opacity: 1 }} // Force initial visibility
                >
                  <div className="p-3 bg-blue-50 rounded-lg inline-block mb-4">
                    <resource.icon className="h-6 w-6 text-[#007BFF]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <Button
                    variant="outline"
                    className="w-full border-[#007BFF] text-[#007BFF]"
                  >
                    <Download className="h-4 w-4 mr-2" />{" "}
                    {index === 0
                      ? "Download Catalogs"
                      : index === 1
                      ? "Browse Manuals"
                      : "View Certifications"}
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section - NEW */}
        <section
          className="py-16 md:py-24 bg-gray-50 lazy-section"
          style={{ opacity: 1 }}
        >
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              className="text-center mb-12 md:mb-16"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-gray-800">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Find answers to common questions about our products and services
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem
                  value="item-1"
                  className="border border-gray-200 rounded-lg overflow-hidden bg-white"
                >
                  <AccordionTrigger className="px-6 py-4 text-left font-medium text-gray-900 hover:no-underline">
                    What payment methods do you accept?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-2 text-gray-600">
                    We accept various payment methods including bank transfers,
                    letters of credit (LC), and major credit cards. For large
                    orders, we also offer flexible payment plans. Please contact
                    our sales team for more details.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-2"
                  className="border border-gray-200 rounded-lg overflow-hidden bg-white"
                >
                  <AccordionTrigger className="px-6 py-4 text-left font-medium text-gray-900 hover:no-underline">
                    What is your shipping policy?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-2 text-gray-600">
                    We ship worldwide with various shipping options available.
                    Delivery times depend on your location and the specific
                    products ordered. For most countries, standard shipping
                    takes 7-14 business days, while expedited shipping is
                    available for urgent orders.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-3"
                  className="border border-gray-200 rounded-lg overflow-hidden bg-white"
                >
                  <AccordionTrigger className="px-6 py-4 text-left font-medium text-gray-900 hover:no-underline">
                    Do you provide installation services?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-2 text-gray-600">
                    Yes, we offer professional installation services for all our
                    equipment. Our team of trained technicians will ensure that
                    your equipment is properly installed and configured
                    according to manufacturer specifications and safety
                    standards.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-4"
                  className="border border-gray-200 rounded-lg overflow-hidden bg-white"
                >
                  <AccordionTrigger className="px-6 py-4 text-left font-medium text-gray-900 hover:no-underline">
                    What warranty do your products have?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-2 text-gray-600">
                    Most of our products come with a standard 1-year
                    manufacturer warranty. We also offer extended warranty
                    options of up to 5 years for most equipment. The warranty
                    covers manufacturing defects and normal wear and tear but
                    does not cover damage due to misuse or improper maintenance.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-5"
                  className="border border-gray-200 rounded-lg overflow-hidden bg-white"
                >
                  <AccordionTrigger className="px-6 py-4 text-left font-medium text-gray-900 hover:no-underline">
                    How can I request a quote?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-2 text-gray-600">
                    You can request a quote by visiting our "Request Quote"
                    page, calling our sales team, or sending an email with your
                    requirements. We typically respond to quote requests within
                    24-48 hours on business days. For complex equipment or bulk
                    orders, we may schedule a consultation to understand your
                    needs better.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="text-center mt-12">
              <Link to="/faq">
                <Button
                  variant="outline"
                  className="border-[#007BFF] text-[#007BFF]"
                >
                  View All FAQs
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section
          className="py-16 md:py-24 bg-white lazy-section"
          style={{ opacity: 1 }}
        >
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              className="text-center mb-8 md:mb-12"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-gray-800">
                What Our Clients Say
              </h2>
            </motion.div>

            <motion.div
              className="max-w-3xl mx-auto"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
            >
              <Card className="border border-gray-100 shadow-md bg-white overflow-hidden">
                <CardContent className="p-6 md:p-8 lg:p-10">
                  <div className="flex mb-6">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="h-5 w-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  <p className="text-gray-700 italic text-base md:text-lg mb-6 md:mb-8">
                    "MediGlobal has been an exceptional partner for our
                    hospital. Their medical equipment is of the highest quality,
                    and their customer service is outstanding."
                  </p>

                  <div className="flex items-center">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden mr-4 border-2 border-blue-100">
                      <LazyImage
                        src="https://randomuser.me/api/portraits/women/12.jpg"
                        alt="Dr. Sarah Johnson"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 text-base md:text-lg">
                        Dr. Sarah Johnson
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Chief of Surgery, Memorial Hospital
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section
          className="py-16 md:py-20 bg-gradient-to-r from-[#007BFF] to-blue-600 lazy-section"
          style={{ opacity: 1 }}
        >
          <div className="container mx-auto px-4 md:px-6 text-center">
            <motion.div
              className="max-w-2xl mx-auto text-white"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
                Ready to Equip Your Healthcare Facility?
              </h2>
              <p className="text-base md:text-lg mb-8 md:mb-10 opacity-90">
                Contact us today to discuss your medical equipment needs
              </p>
              <div className="flex flex-col md:flex-row flex-wrap justify-center gap-4 md:gap-8 mb-8 md:mb-10">
                <div className="flex items-center bg-white/10 backdrop-blur-sm px-5 py-3 rounded-lg">
                  <Phone className="h-5 w-5 text-white mr-3" />
                  <span className="text-white font-medium">
                    +971 4 123 4567
                  </span>
                </div>
                <div className="flex items-center bg-white/10 backdrop-blur-sm px-5 py-3 rounded-lg">
                  <Mail className="h-5 w-5 text-white mr-3" />
                  <span className="text-white font-medium">
                    info@mediglobal.com
                  </span>
                </div>
              </div>
              <Link to="/contact">
                <Button className="bg-white text-[#007BFF] hover:bg-gray-100 px-8 py-4 md:py-6 text-base md:text-lg font-medium">
                  Request a Quote
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </LazyMotion>
  );
};

export default Index;
