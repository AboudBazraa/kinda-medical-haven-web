
import React from 'react';
import { Hospital, Stethoscope, Building, Users, Briefcase, Shield, Microscope, Heart } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with improved gradient and animation */}
      <section className="bg-gradient-to-r from-medical-dark to-medical-primary text-white py-20">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-up">Our Services</h1>
          <p className="text-xl max-w-2xl animate-fade-up animation-delay-200">
            Comprehensive healthcare solutions designed to meet the needs of healthcare facilities and patients in Yemen.
          </p>
        </div>
      </section>

      {/* Main Services - Updated with modern card design */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">What We Offer</h2>
            <p className="section-subtitle">
              Our range of healthcare services and solutions to improve healthcare standards in Yemen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group p-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-medical-light text-medical-primary rounded-full flex items-center justify-center mb-4 md:mb-0 md:mr-6 group-hover:bg-medical-primary group-hover:text-white transition-colors duration-300">
                  <Hospital className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-medical-dark">Hospital Management</h3>
                  <p className="text-medical-gray mb-5">
                    We provide comprehensive hospital management services, ensuring efficient operations, 
                    quality patient care, and optimal resource utilization.
                  </p>
                  <ul className="grid gap-3">
                    <li className="flex items-center text-medical-gray">
                      <span className="w-2 h-2 bg-medical-primary rounded-full mr-3"></span>
                      Strategic planning and policy development
                    </li>
                    <li className="flex items-center text-medical-gray">
                      <span className="w-2 h-2 bg-medical-primary rounded-full mr-3"></span>
                      Financial management and resource allocation
                    </li>
                    <li className="flex items-center text-medical-gray">
                      <span className="w-2 h-2 bg-medical-primary rounded-full mr-3"></span>
                      Quality assurance and patient safety
                    </li>
                    <li className="flex items-center text-medical-gray">
                      <span className="w-2 h-2 bg-medical-primary rounded-full mr-3"></span>
                      Staff recruitment, training, and management
                    </li>
                    <li className="flex items-center text-medical-gray">
                      <span className="w-2 h-2 bg-medical-primary rounded-full mr-3"></span>
                      Facility maintenance and upgrades
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group p-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-medical-light text-medical-primary rounded-full flex items-center justify-center mb-4 md:mb-0 md:mr-6 group-hover:bg-medical-primary group-hover:text-white transition-colors duration-300">
                  <Stethoscope className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-medical-dark">Medical Equipment Supply</h3>
                  <p className="text-medical-gray mb-5">
                    We source and supply state-of-the-art medical equipment from trusted global manufacturers.
                  </p>
                  <ul className="grid gap-3">
                    <li className="flex items-center text-medical-gray">
                      <span className="w-2 h-2 bg-medical-primary rounded-full mr-3"></span>
                      Procurement of diagnostic and treatment equipment
                    </li>
                    <li className="flex items-center text-medical-gray">
                      <span className="w-2 h-2 bg-medical-primary rounded-full mr-3"></span>
                      Installation and commissioning of medical devices
                    </li>
                    <li className="flex items-center text-medical-gray">
                      <span className="w-2 h-2 bg-medical-primary rounded-full mr-3"></span>
                      Maintenance and technical support
                    </li>
                    <li className="flex items-center text-medical-gray">
                      <span className="w-2 h-2 bg-medical-primary rounded-full mr-3"></span>
                      Staff training on equipment operation
                    </li>
                    <li className="flex items-center text-medical-gray">
                      <span className="w-2 h-2 bg-medical-primary rounded-full mr-3"></span>
                      Supply of consumables and spare parts
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group p-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-medical-light text-medical-primary rounded-full flex items-center justify-center mb-4 md:mb-0 md:mr-6 group-hover:bg-medical-primary group-hover:text-white transition-colors duration-300">
                  <Building className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-medical-dark">Infrastructure Development</h3>
                  <p className="text-medical-gray mb-5">
                    We design and develop modern healthcare facilities that meet international standards.
                  </p>
                  <ul className="grid gap-3">
                    <li className="flex items-center text-medical-gray">
                      <span className="w-2 h-2 bg-medical-primary rounded-full mr-3"></span>
                      Healthcare facility design and planning
                    </li>
                    <li className="flex items-center text-medical-gray">
                      <span className="w-2 h-2 bg-medical-primary rounded-full mr-3"></span>
                      Construction management and supervision
                    </li>
                    <li className="flex items-center text-medical-gray">
                      <span className="w-2 h-2 bg-medical-primary rounded-full mr-3"></span>
                      Renovation and expansion of existing facilities
                    </li>
                    <li className="flex items-center text-medical-gray">
                      <span className="w-2 h-2 bg-medical-primary rounded-full mr-3"></span>
                      Equipment planning and installation
                    </li>
                    <li className="flex items-center text-medical-gray">
                      <span className="w-2 h-2 bg-medical-primary rounded-full mr-3"></span>
                      Compliance with healthcare facility standards
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group p-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-medical-light text-medical-primary rounded-full flex items-center justify-center mb-4 md:mb-0 md:mr-6 group-hover:bg-medical-primary group-hover:text-white transition-colors duration-300">
                  <Users className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-medical-dark">Medical Staff Training</h3>
                  <p className="text-medical-gray mb-5">
                    We provide comprehensive training programs for healthcare professionals to enhance their skills and knowledge.
                  </p>
                  <ul className="grid gap-3">
                    <li className="flex items-center text-medical-gray">
                      <span className="w-2 h-2 bg-medical-primary rounded-full mr-3"></span>
                      Clinical skills development for medical staff
                    </li>
                    <li className="flex items-center text-medical-gray">
                      <span className="w-2 h-2 bg-medical-primary rounded-full mr-3"></span>
                      Management training for healthcare administrators
                    </li>
                    <li className="flex items-center text-medical-gray">
                      <span className="w-2 h-2 bg-medical-primary rounded-full mr-3"></span>
                      Continuing medical education programs
                    </li>
                    <li className="flex items-center text-medical-gray">
                      <span className="w-2 h-2 bg-medical-primary rounded-full mr-3"></span>
                      Specialized training for new equipment and procedures
                    </li>
                    <li className="flex items-center text-medical-gray">
                      <span className="w-2 h-2 bg-medical-primary rounded-full mr-3"></span>
                      Quality improvement and patient safety training
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services - Updated with modern card design */}
      <section className="py-20 bg-gradient-to-b from-white to-medical-lightGray">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Additional Services</h2>
            <p className="section-subtitle">
              Specialized healthcare services to complement our core offerings
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center group">
              <div className="w-16 h-16 bg-medical-light text-medical-primary rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-medical-primary group-hover:text-white transition-colors duration-300">
                <Briefcase className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-medical-dark">Healthcare Consulting</h3>
              <p className="text-medical-gray">
                Expert advice on healthcare operations, strategic planning, and quality improvement.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center group">
              <div className="w-16 h-16 bg-medical-light text-medical-primary rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-medical-primary group-hover:text-white transition-colors duration-300">
                <Microscope className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-medical-dark">Laboratory Services</h3>
              <p className="text-medical-gray">
                Modern diagnostic laboratory facilities with advanced testing capabilities.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center group">
              <div className="w-16 h-16 bg-medical-light text-medical-primary rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-medical-primary group-hover:text-white transition-colors duration-300">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-medical-dark">Quality Assurance</h3>
              <p className="text-medical-gray">
                Comprehensive quality assurance programs to ensure the highest standards of care.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center group">
              <div className="w-16 h-16 bg-medical-light text-medical-primary rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-medical-primary group-hover:text-white transition-colors duration-300">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-medical-dark">Preventive Healthcare</h3>
              <p className="text-medical-gray">
                Community health programs focused on prevention and early detection of diseases.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <a href="/contact" className="inline-block bg-medical-primary hover:bg-medical-dark text-white font-medium py-3 px-8 rounded-full transition-colors duration-300">
              Contact Us About Our Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
