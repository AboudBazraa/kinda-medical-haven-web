import React from 'react';
import { Hospital, Stethoscope, Building, Users, Briefcase, Shield, Microscope, Heart } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-medical-dark to-medical-primary text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-up">Our Services</h1>
          <p className="text-xl max-w-2xl animate-fade-up">
            Comprehensive healthcare solutions designed to meet the needs of healthcare facilities and patients in Yemen.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">What We Offer</h2>
            <p className="section-subtitle">
              Our range of healthcare services and solutions to improve healthcare standards in Yemen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="flex flex-col md:flex-row">
              <div className="flex-shrink-0 w-16 h-16 bg-medical-light text-medical-primary rounded-full flex items-center justify-center mb-4 md:mb-0 md:mr-6">
                <Hospital className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-medical-dark">Hospital Management</h3>
                <p className="text-medical-gray mb-4">
                  We provide comprehensive hospital management services, ensuring efficient operations, 
                  quality patient care, and optimal resource utilization. Our management approach focuses on:
                </p>
                <ul className="list-disc pl-5 text-medical-gray space-y-2">
                  <li>Strategic planning and policy development</li>
                  <li>Financial management and resource allocation</li>
                  <li>Quality assurance and patient safety</li>
                  <li>Staff recruitment, training, and management</li>
                  <li>Facility maintenance and upgrades</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col md:flex-row">
              <div className="flex-shrink-0 w-16 h-16 bg-medical-light text-medical-primary rounded-full flex items-center justify-center mb-4 md:mb-0 md:mr-6">
                <Stethoscope className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-medical-dark">Medical Equipment Supply</h3>
                <p className="text-medical-gray mb-4">
                  We source and supply state-of-the-art medical equipment from trusted global manufacturers. 
                  Our equipment supply services include:
                </p>
                <ul className="list-disc pl-5 text-medical-gray space-y-2">
                  <li>Procurement of diagnostic and treatment equipment</li>
                  <li>Installation and commissioning of medical devices</li>
                  <li>Maintenance and technical support</li>
                  <li>Staff training on equipment operation</li>
                  <li>Supply of consumables and spare parts</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col md:flex-row">
              <div className="flex-shrink-0 w-16 h-16 bg-medical-light text-medical-primary rounded-full flex items-center justify-center mb-4 md:mb-0 md:mr-6">
                <Building className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-medical-dark">Infrastructure Development</h3>
                <p className="text-medical-gray mb-4">
                  We design and develop modern healthcare facilities that meet international standards. 
                  Our infrastructure development services include:
                </p>
                <ul className="list-disc pl-5 text-medical-gray space-y-2">
                  <li>Healthcare facility design and planning</li>
                  <li>Construction management and supervision</li>
                  <li>Renovation and expansion of existing facilities</li>
                  <li>Equipment planning and installation</li>
                  <li>Compliance with healthcare facility standards</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col md:flex-row">
              <div className="flex-shrink-0 w-16 h-16 bg-medical-light text-medical-primary rounded-full flex items-center justify-center mb-4 md:mb-0 md:mr-6">
                <Users className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-medical-dark">Medical Staff Training</h3>
                <p className="text-medical-gray mb-4">
                  We provide comprehensive training programs for healthcare professionals to enhance their skills and knowledge. 
                  Our training services include:
                </p>
                <ul className="list-disc pl-5 text-medical-gray space-y-2">
                  <li>Clinical skills development for medical staff</li>
                  <li>Management training for healthcare administrators</li>
                  <li>Continuing medical education programs</li>
                  <li>Specialized training for new equipment and procedures</li>
                  <li>Quality improvement and patient safety training</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-medical-lightGray">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Additional Services</h2>
            <p className="section-subtitle">
              Specialized healthcare services to complement our core offerings
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center">
              <div className="w-16 h-16 bg-medical-light text-medical-primary rounded-full flex items-center justify-center mb-6 mx-auto">
                <Briefcase className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-medical-dark">Healthcare Consulting</h3>
              <p className="text-medical-gray">
                Expert advice on healthcare operations, strategic planning, and quality improvement.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center">
              <div className="w-16 h-16 bg-medical-light text-medical-primary rounded-full flex items-center justify-center mb-6 mx-auto">
                <Microscope className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-medical-dark">Laboratory Services</h3>
              <p className="text-medical-gray">
                Modern diagnostic laboratory facilities with advanced testing capabilities.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center">
              <div className="w-16 h-16 bg-medical-light text-medical-primary rounded-full flex items-center justify-center mb-6 mx-auto">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-medical-dark">Quality Assurance</h3>
              <p className="text-medical-gray">
                Comprehensive quality assurance programs to ensure the highest standards of care.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center">
              <div className="w-16 h-16 bg-medical-light text-medical-primary rounded-full flex items-center justify-center mb-6 mx-auto">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-medical-dark">Preventive Healthcare</h3>
              <p className="text-medical-gray">
                Community health programs focused on prevention and early detection of diseases.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
