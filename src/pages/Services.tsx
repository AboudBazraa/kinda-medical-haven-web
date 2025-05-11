import React from "react";
import {
  Hospital,
  Stethoscope,
  Building,
  Users,
  Briefcase,
  Shield,
  Microscope,
  Heart,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import OptimizedImage from "@/components/OptimizedImage";
import SEO from "@/components/SEO";

const Services: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Services | Kinda Medical Trading Company"
        description="Explore our comprehensive healthcare solutions including hospital management, medical equipment supply, infrastructure development and staff training."
        keywords="medical services Yemen, hospital management, healthcare infrastructure, medical equipment, staff training"
      />

      {/* Hero Section - Modern Design */}
      <section className="relative py-40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* <OptimizedImage
            src="https://images.unsplash.com/photo-1579684288361-5c1a2955cdd5?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1920"
            alt="Medical services"
            className="w-full h-full"
            objectFit="cover"
          /> */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-700/80"></div>
          <div className="absolute inset-0 bg-[url('/public/grid-pattern.png')] opacity-10"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <p className="text-blue-300 font-medium mb-4 animate-fade-in">
              OUR SERVICES
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-up">
              Comprehensive <span className="text-green-400">Healthcare</span>{" "}
              Solutions
            </h1>
            <p className="text-xl text-white/80 max-w-2xl animate-fade-up">
              We deliver end-to-end healthcare services designed to meet the
              needs of healthcare facilities and patients throughout Yemen.
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

      {/* Service Categories - New Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Hospital className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="font-bold">Hospital Management</h3>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Stethoscope className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="font-bold">Equipment Supply</h3>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="font-bold">Infrastructure</h3>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="font-bold">Staff Training</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services - Redesigned with Cards */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <p className="text-blue-600 font-medium mb-2">WHAT WE OFFER</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Our Core Services
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We provide a comprehensive range of healthcare services designed
              to improve the quality and accessibility of healthcare in Yemen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="h-2 bg-blue-600"></div>
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center">
                    <Hospital className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">
                      Hospital Management
                    </h3>
                    <p className="text-gray-700 mb-6">
                      We provide comprehensive hospital management services,
                      ensuring efficient operations, quality patient care, and
                      optimal resource utilization.
                    </p>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          Strategic planning and policy development
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          Financial management and resource allocation
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          Quality assurance and patient safety
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          Staff recruitment, training, and management
                        </span>
                      </li>
                    </ul>
                    <Link
                      to="/services/hospital-management"
                      className="text-blue-600 font-medium inline-flex items-center"
                    >
                      Learn more <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="h-2 bg-blue-600"></div>
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center">
                    <Stethoscope className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">
                      Medical Equipment Supply
                    </h3>
                    <p className="text-gray-700 mb-6">
                      We source and supply state-of-the-art medical equipment
                      from trusted global manufacturers.
                    </p>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          Procurement of diagnostic and treatment equipment
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          Installation and commissioning of medical devices
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          Maintenance and technical support
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          Staff training on equipment operation
                        </span>
                      </li>
                    </ul>
                    <Link
                      to="/services/equipment"
                      className="text-blue-600 font-medium inline-flex items-center"
                    >
                      Learn more <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="h-2 bg-blue-600"></div>
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center">
                    <Building className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">
                      Infrastructure Development
                    </h3>
                    <p className="text-gray-700 mb-6">
                      We design and develop modern healthcare facilities that
                      meet international standards.
                    </p>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          Healthcare facility design and planning
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          Construction management and supervision
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          Renovation and expansion of existing facilities
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          Equipment planning and installation
                        </span>
                      </li>
                    </ul>
                    <Link
                      to="/services/infrastructure"
                      className="text-blue-600 font-medium inline-flex items-center"
                    >
                      Learn more <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="h-2 bg-blue-600"></div>
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center">
                    <Users className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">
                      Medical Staff Training
                    </h3>
                    <p className="text-gray-700 mb-6">
                      We provide comprehensive training programs for healthcare
                      professionals to enhance their skills and knowledge.
                    </p>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          Clinical skills development for medical staff
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          Management training for healthcare administrators
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          Continuing medical education programs
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          Specialized training for new equipment
                        </span>
                      </li>
                    </ul>
                    <Link
                      to="/services/training"
                      className="text-blue-600 font-medium inline-flex items-center"
                    >
                      Learn more <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Process - New Section */}
      <section className="py-24 bg-gradient-to-b from-white via-blue-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <p className="text-blue-600 font-medium mb-2">HOW WE WORK</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Our Service Process
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We follow a systematic approach to ensure the highest quality of
              service delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative inline-block mb-6">
                <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                  01
                </div>
                <div className="hidden md:block absolute top-1/2 left-full h-1 w-full bg-gray-200 -translate-y-1/2"></div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Assessment & Planning
              </h3>
              <p className="text-gray-700 max-w-xs mx-auto">
                We begin by thoroughly assessing your needs and developing a
                comprehensive plan tailored to your specific requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="relative inline-block mb-6">
                <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                  02
                </div>
                <div className="hidden md:block absolute top-1/2 left-full h-1 w-full bg-gray-200 -translate-y-1/2"></div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Implementation
              </h3>
              <p className="text-gray-700 max-w-xs mx-auto">
                Our expert team implements the solution with a focus on quality,
                efficiency, and minimal disruption to ongoing operations.
              </p>
            </div>

            <div className="text-center">
              <div className="relative inline-block mb-6">
                <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                  03
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Continuous Support
              </h3>
              <p className="text-gray-700 max-w-xs mx-auto">
                We provide ongoing support, monitoring, and maintenance to
                ensure the long-term success of your healthcare services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services - Updated with Modern Design */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <p className="text-blue-600 font-medium mb-2">
              SPECIALIZED SOLUTIONS
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Additional Services
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Specialized healthcare services to complement our core offerings
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Briefcase className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  Healthcare Consulting
                </h3>
                <p className="text-gray-700 mb-6">
                  Expert advice on healthcare operations, strategic planning,
                  and quality improvement.
                </p>
                <Link
                  to="/services/consulting"
                  className="text-blue-600 font-medium inline-flex items-center justify-center"
                >
                  Details <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Microscope className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  Laboratory Services
                </h3>
                <p className="text-gray-700 mb-6">
                  Modern diagnostic laboratory facilities with advanced testing
                  capabilities.
                </p>
                <Link
                  to="/services/laboratory"
                  className="text-blue-600 font-medium inline-flex items-center justify-center"
                >
                  Details <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Shield className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  Quality Assurance
                </h3>
                <p className="text-gray-700 mb-6">
                  Comprehensive quality assurance programs to ensure the highest
                  standards of care.
                </p>
                <Link
                  to="/services/quality"
                  className="text-blue-600 font-medium inline-flex items-center justify-center"
                >
                  Details <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Heart className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  Preventive Healthcare
                </h3>
                <p className="text-gray-700 mb-6">
                  Community health programs focused on prevention and early
                  detection of diseases.
                </p>
                <Link
                  to="/services/preventive"
                  className="text-blue-600 font-medium inline-flex items-center justify-center"
                >
                  Details <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section - Modern Design */}
      <section className="py-24 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Elevate Your Healthcare Services?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Contact us today to discuss how our comprehensive healthcare
              solutions can benefit your facility and patients.
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-white text-blue-700 hover:bg-green-400 hover:text-white"
              >
                Contact Us About Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
