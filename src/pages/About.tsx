import React from "react";
import {
  Award,
  Target,
  CheckCircle,
  Globe,
  Stethoscope,
  HeartPulse,
  Clock,
  Shield,
  Users,
  Truck,
  BadgeCheck,
  Headphones,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import OptimizedImage from "@/components/OptimizedImage";
import SEO from "@/components/SEO";

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="About MediGlobal | Leading Medical Equipment Trading Company"
        description="Learn about MediGlobal Trading Company, our mission, vision, and values as we provide high-quality medical equipment and devices worldwide."
        keywords="about MediGlobal, medical equipment supplier, medical devices, global healthcare supplier, medical trading company"
      />

      {/* Hero Section - Modern Design */}
      <section className="relative py-36 overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* <OptimizedImage
            src="https://images.unsplash.com/photo-1581093196277-9f608bb3b511?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1920"
            alt="Medical equipment showcase"
            className="w-full h-full"
            objectFit="cover"
          /> */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-[#007BFF]/80"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <p className="text-blue-300 font-medium mb-4 animate-fade-in">
              ABOUT OUR COMPANY
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-up">
              Global <span className="text-[#28a745]">Medical</span> Equipment
              Excellence
            </h1>
            <p className="text-xl text-white/80 max-w-2xl animate-fade-up">
              Learn about our journey to become a leading global supplier of
              medical equipment and devices, committed to enhancing healthcare
              through quality products and exceptional service.
            </p>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 120"
            className="w-full"
          >
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Company Overview - Modern Design */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <p className="text-[#007BFF] font-medium mb-2">OUR COMPANY</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Supplying Excellence Since 2003
              </h2>
              <div className="space-y-6 text-gray-700">
                <p>
                  MediGlobal Trading Company was established in 2003 as a
                  specialized supplier of medical equipment and devices. Over
                  the years, we have grown to become a trusted global provider
                  serving healthcare facilities in over 50 countries.
                </p>
                <p>
                  Our commitment to quality and innovation has allowed us to
                  build strong relationships with leading manufacturers and
                  healthcare providers worldwide. We offer a comprehensive range
                  of medical equipment, from diagnostic devices to surgical
                  instruments and hospital furniture.
                </p>
                <p>
                  As an ISO 13485 certified company, we adhere to strict quality
                  standards and regulatory requirements, ensuring that all our
                  products meet international safety and performance standards.
                </p>
              </div>

              {/* Key stats */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center p-4 rounded-lg bg-blue-50">
                  <p className="text-3xl font-bold text-[#007BFF]">20+</p>
                  <p className="text-sm text-gray-600">Years Experience</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-blue-50">
                  <p className="text-3xl font-bold text-[#007BFF]">50+</p>
                  <p className="text-sm text-gray-600">Countries Served</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-blue-50">
                  <p className="text-3xl font-bold text-[#007BFF]">1000+</p>
                  <p className="text-sm text-gray-600">Products</p>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2 relative">
              <div className="absolute -inset-4 bg-[#007BFF]/10 rounded-lg rotate-3"></div>
              <div className="absolute -inset-4 bg-[#28a745]/5 rounded-lg -rotate-2"></div>
              <OptimizedImage
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800"
                alt="MediGlobal Company"
                className="rounded-lg shadow-xl relative z-10"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-3 rounded-lg shadow-lg z-20">
                <Globe className="h-10 w-10 text-[#007BFF]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission - Modern Design */}
      <section className="py-24 bg-gradient-to-b from-white via-blue-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <p className="text-[#007BFF] font-medium mb-2">VISION & MISSION</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Our Guiding Principles
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              These principles drive our operations and strategies as we work to
              enhance healthcare globally through quality medical equipment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="h-2 bg-[#007BFF]"></div>
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="bg-blue-100 inline-flex p-3 rounded-lg">
                    <Target className="h-8 w-8 text-[#007BFF]" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-700">
                  To be the most trusted global supplier of medical equipment,
                  recognized for quality, innovation, and exceptional customer
                  service. We aim to contribute to improved healthcare outcomes
                  worldwide by providing reliable medical technology solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="h-2 bg-[#28a745]"></div>
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="bg-green-100 inline-flex p-3 rounded-lg">
                    <Award className="h-8 w-8 text-[#28a745]" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-700">
                  To provide healthcare facilities worldwide with high-quality
                  medical equipment and devices at competitive prices, supported
                  by excellent customer service and technical expertise. We are
                  committed to maintaining the highest standards of product
                  quality, reliability, and regulatory compliance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values - Modern Design */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <p className="text-[#007BFF] font-medium mb-2">OUR CORE VALUES</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Principles That Define Us
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our values guide every decision we make and every action we take
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white border-none shadow-md hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="p-3 bg-blue-50 rounded-lg inline-flex mb-4">
                  <CheckCircle className="h-6 w-6 text-[#007BFF]" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  Quality
                </h3>
                <p className="text-gray-700">
                  We are committed to providing products that meet or exceed
                  international quality standards.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-md hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="p-3 bg-blue-50 rounded-lg inline-flex mb-4">
                  <Shield className="h-6 w-6 text-[#007BFF]" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  Integrity
                </h3>
                <p className="text-gray-700">
                  We conduct business with honesty, transparency, and ethical
                  practices in all our dealings.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-md hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="p-3 bg-blue-50 rounded-lg inline-flex mb-4">
                  <Headphones className="h-6 w-6 text-[#007BFF]" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  Customer Focus
                </h3>
                <p className="text-gray-700">
                  We prioritize our customers' needs and strive to exceed their
                  expectations with exceptional service.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-md hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="p-3 bg-blue-50 rounded-lg inline-flex mb-4">
                  <Globe className="h-6 w-6 text-[#007BFF]" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  Global Perspective
                </h3>
                <p className="text-gray-700">
                  We embrace diversity and adapt to meet the unique needs of
                  healthcare providers worldwide.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Advantages - Modern Design */}
      <section className="py-24 bg-blue-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <p className="text-[#007BFF] font-medium mb-2">WHY CHOOSE US</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              The MediGlobal Advantage
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              What sets us apart in the global medical equipment market
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="bg-[#007BFF]/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <BadgeCheck className="h-8 w-8 text-[#007BFF]" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                Quality Assurance
              </h3>
              <p className="text-gray-700">
                All our products undergo rigorous quality testing and meet
                international standards including ISO 13485, CE, and FDA
                requirements where applicable.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="bg-[#007BFF]/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Truck className="h-8 w-8 text-[#007BFF]" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                Global Distribution
              </h3>
              <p className="text-gray-700">
                Our efficient logistics network ensures timely delivery of
                medical equipment to healthcare facilities worldwide, with local
                support in key regions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="bg-[#007BFF]/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Headphones className="h-8 w-8 text-[#007BFF]" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                Technical Support
              </h3>
              <p className="text-gray-700">
                Our team of technical experts provides comprehensive product
                training, installation assistance, and ongoing support for all
                equipment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications - Modern Design */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <p className="text-[#007BFF] font-medium mb-2">CERTIFICATIONS</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Quality You Can Trust
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our commitment to quality is backed by international
              certifications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 bg-blue-50 rounded-full flex items-center justify-center mb-6 border-4 border-[#007BFF]/20">
                <Shield className="h-16 w-16 text-[#007BFF]" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                ISO 13485
              </h3>
              <p className="text-center text-gray-700">
                Medical devices quality management systems certification
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-32 h-32 bg-blue-50 rounded-full flex items-center justify-center mb-6 border-4 border-[#007BFF]/20">
                <Award className="h-16 w-16 text-[#007BFF]" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                CE Marking
              </h3>
              <p className="text-center text-gray-700">
                Products comply with EU health, safety, and environmental
                requirements
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-32 h-32 bg-blue-50 rounded-full flex items-center justify-center mb-6 border-4 border-[#007BFF]/20">
                <BadgeCheck className="h-16 w-16 text-[#007BFF]" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                FDA Approval
              </h3>
              <p className="text-center text-gray-700">
                Products meet US Food and Drug Administration standards
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <OptimizedImage
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1920"
            alt="Medical equipment background"
            className="w-full h-full"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-[#007BFF]/90"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Explore Our Products?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Browse our extensive catalog of medical equipment and devices, or
              contact our team for personalized assistance.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/products"
                className="bg-white text-[#007BFF] hover:bg-[#28a745] hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300"
              >
                Browse Products
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-[#007BFF] px-8 py-3 rounded-lg font-medium transition-all duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
