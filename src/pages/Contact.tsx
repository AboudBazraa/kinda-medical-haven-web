import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Globe,
  ArrowRight,
  Building,
  Users,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import ContactForm from "../components/ContactForm";
import Map from "../components/Map";
import OptimizedImage from "@/components/OptimizedImage";
import SEO from "@/components/SEO";

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Contact Us | MediGlobal Trading Company"
        description="Get in touch with MediGlobal Trading Company for inquiries about our medical equipment, products, or to request a quote."
        keywords="contact MediGlobal, medical equipment inquiry, medical devices contact, healthcare supplies contact"
      />

      {/* Hero Section - Modern Design */}
      <section className="relative py-36 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <OptimizedImage
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1920"
            alt="Contact MediGlobal"
            className="w-full h-full"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-[#007BFF]/80"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <p className="text-blue-300 font-medium mb-4 animate-fade-in">
              GET IN TOUCH
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-up">
              Let's <span className="text-[#28a745]">Connect</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl animate-fade-up">
              Reach out to our team for inquiries about our medical equipment,
              products, or to request a personalized quote.
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

      {/* Contact Information and Form */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="text-[#007BFF] font-medium mb-2">
                CONTACT INFORMATION
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
                Get In Touch
              </h2>

              <div className="grid gap-8 md:gap-10">
                <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-50 text-[#007BFF] rounded-full flex items-center justify-center">
                        <Building className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">
                          Headquarters
                        </h3>
                        <p className="text-gray-700 mt-1">
                          Dubai Healthcare City, Dubai, UAE
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-50 text-[#007BFF] rounded-full flex items-center justify-center">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">
                          Email Us
                        </h3>
                        <p className="text-gray-700 mt-1">
                          info@mediglobal.com
                        </p>
                        <p className="text-gray-700">sales@mediglobal.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-50 text-[#007BFF] rounded-full flex items-center justify-center">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">
                          Call Us
                        </h3>
                        <p className="text-gray-700 mt-1">+971 4 123 4567</p>
                        <p className="text-gray-700">+971 4 123 4568</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-50 text-[#007BFF] rounded-full flex items-center justify-center">
                        <Globe className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">
                          Global Offices
                        </h3>
                        <p className="text-gray-700 mt-1">
                          USA • Germany • Saudi Arabia • India • Singapore
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-50 text-[#007BFF] rounded-full flex items-center justify-center">
                        <Clock className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">
                          Business Hours
                        </h3>
                        <p className="text-gray-700 mt-1">
                          Monday - Friday: 9:00 AM - 6:00 PM
                        </p>
                        <p className="text-gray-700">
                          Saturday: 10:00 AM - 2:00 PM
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-10">
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  Connect With Us
                </h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-10 h-10 bg-blue-50 text-[#007BFF] rounded-full flex items-center justify-center hover:bg-[#007BFF] hover:text-white transition duration-300"
                    aria-label="Facebook"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-blue-50 text-[#007BFF] rounded-full flex items-center justify-center hover:bg-[#007BFF] hover:text-white transition duration-300"
                    aria-label="Twitter"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-blue-50 text-[#007BFF] rounded-full flex items-center justify-center hover:bg-[#007BFF] hover:text-white transition duration-300"
                    aria-label="LinkedIn"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-blue-50 text-[#007BFF] rounded-full flex items-center justify-center hover:bg-[#007BFF] hover:text-white transition duration-300"
                    aria-label="YouTube"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <Card className="border-none shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-8 h-8 bg-[#007BFF] rounded-full flex items-center justify-center">
                    <Mail className="h-4 w-4 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Request a Quote
                  </h2>
                </div>
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section - Modern Design */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <p className="text-[#007BFF] font-medium mb-2">GLOBAL PRESENCE</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Our Headquarters
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Visit our global headquarters in Dubai Healthcare City, UAE
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <Map location={{ lat: 25.2048, lng: 55.2708 }} />
          </div>
        </div>
      </section>

      {/* Distributors Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <p className="text-[#007BFF] font-medium mb-2">BECOME A PARTNER</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Distributor Opportunities
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Join our global network of medical equipment distributors
            </p>
          </div>

          <div className="bg-blue-50 rounded-xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Become a MediGlobal Distributor
                </h3>
                <p className="text-gray-700 mb-6">
                  We're expanding our global network of distributors to bring
                  high-quality medical equipment to healthcare facilities
                  worldwide. Partner with us to access:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-[#28a745] flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="3"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                    <span>Competitive pricing and margins</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-[#28a745] flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="3"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                    <span>Comprehensive product training</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-[#28a745] flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="3"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                    <span>Marketing and sales support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-[#28a745] flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="3"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                    <span>Technical support for your customers</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <a
                    href="/partners"
                    className="inline-flex items-center gap-2 bg-[#007BFF] text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300"
                  >
                    Learn More <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
              <div>
                <OptimizedImage
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800"
                  alt="Business partnership"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#007BFF]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Ready to equip your healthcare facility?
              </h2>
              <p className="text-white/90">
                Our team is ready to assist you with product selection and
                quotes.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="/products"
                className="bg-white text-[#007BFF] px-6 py-3 rounded-lg font-medium hover:bg-[#28a745] hover:text-white transition-all duration-300"
              >
                Browse Products
              </a>
              <a
                href="tel:+97141234567"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-[#007BFF] transition-all duration-300"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
