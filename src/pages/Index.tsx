
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Hospital, Stethoscope, Users, Building, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-medical-dark to-medical-primary text-white py-24">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-12 md:mb-0 animate-fade-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Kinda Medical Trading Company
              </h1>
              <p className="text-xl mb-8 text-medical-accent">
                Leading Healthcare Investment in Yemen
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/about">
                  <Button className="bg-white text-medical-primary hover:bg-medical-accent hover:text-medical-dark">
                    Learn More
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-medical-primary">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center animate-fade-in">
              <img 
                src="/public/placeholder.svg" 
                alt="Healthcare professionals" 
                className="rounded-lg shadow-xl max-w-full h-auto"
                style={{ maxHeight: '400px' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-medical-lightGray">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">About Us</h2>
            <p className="section-subtitle">
              Leading healthcare investment company committed to improving healthcare services in Yemen
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/public/placeholder.svg" 
                alt="About Kinda Medical" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-medical-primary">Our Story</h3>
              <p className="mb-6 text-medical-gray">
                Kinda Medical Trading Company is a pioneering healthcare investment firm based in Seiyun – Hadramout, Yemen. 
                We are dedicated to enhancing healthcare infrastructure and services throughout the region.
              </p>
              <p className="mb-6 text-medical-gray">
                Our company brings together experienced healthcare professionals, modern facilities, and cutting-edge medical equipment 
                to deliver exceptional care to communities across Yemen.
              </p>
              <Link to="/about">
                <Button className="flex items-center bg-medical-primary hover:bg-medical-dark">
                  Read More <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">
              Comprehensive healthcare solutions tailored to meet the needs of our communities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 group">
              <div className="w-16 h-16 bg-medical-light text-medical-primary rounded-full flex items-center justify-center mb-6 group-hover:bg-medical-primary group-hover:text-white transition duration-300">
                <Hospital className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-medical-dark">Hospital Management</h3>
              <p className="text-medical-gray">
                Professional management of healthcare facilities with focus on quality patient care and operational efficiency.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 group">
              <div className="w-16 h-16 bg-medical-light text-medical-primary rounded-full flex items-center justify-center mb-6 group-hover:bg-medical-primary group-hover:text-white transition duration-300">
                <Stethoscope className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-medical-dark">Medical Equipment Supply</h3>
              <p className="text-medical-gray">
                Procurement and distribution of modern medical equipment to healthcare facilities across Yemen.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 group">
              <div className="w-16 h-16 bg-medical-light text-medical-primary rounded-full flex items-center justify-center mb-6 group-hover:bg-medical-primary group-hover:text-white transition duration-300">
                <Building className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-medical-dark">Infrastructure Development</h3>
              <p className="text-medical-gray">
                Design and construction of modern healthcare facilities that meet international standards.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 group">
              <div className="w-16 h-16 bg-medical-light text-medical-primary rounded-full flex items-center justify-center mb-6 group-hover:bg-medical-primary group-hover:text-white transition duration-300">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-medical-dark">Medical Staff Training</h3>
              <p className="text-medical-gray">
                Comprehensive training programs for healthcare professionals to enhance their skills and knowledge.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button className="bg-medical-primary hover:bg-medical-dark">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 bg-medical-lightGray">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Healthcare Facilities</h2>
            <p className="section-subtitle">
              Modern healthcare facilities providing quality care to communities across Yemen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="/public/placeholder.svg" 
                alt="Al-Hayat General Hospital" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-medical-dark">Al-Hayat General Hospital</h3>
                <p className="text-medical-gray mb-4">
                  A comprehensive healthcare facility providing a wide range of medical services.
                </p>
                <Link to="/facilities" className="text-medical-primary font-medium hover:underline">
                  Learn More
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="/public/placeholder.svg" 
                alt="Cardiac Specialty Center" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-medical-dark">Cardiac Specialty Center</h3>
                <p className="text-medical-gray mb-4">
                  Specialized center for the diagnosis and treatment of heart diseases.
                </p>
                <Link to="/facilities" className="text-medical-primary font-medium hover:underline">
                  Learn More
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="/public/placeholder.svg" 
                alt="Dialysis Center" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-medical-dark">Dialysis Center</h3>
                <p className="text-medical-gray mb-4">
                  Modern facility providing dialysis services for patients with kidney diseases.
                </p>
                <Link to="/facilities" className="text-medical-primary font-medium hover:underline">
                  Learn More
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/facilities">
              <Button className="bg-medical-primary hover:bg-medical-dark">
                View All Facilities
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-medical-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Partner with Us?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join us in our mission to improve healthcare services and facilities in Yemen. Contact us today to discuss potential collaborations.
          </p>
          <Link to="/contact">
            <Button className="bg-white text-medical-primary hover:bg-medical-accent hover:text-medical-dark">
              Get In Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
