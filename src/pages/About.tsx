
import React from 'react';
import { Award, Target, CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-medical-dark to-medical-primary text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-up">About Us</h1>
          <p className="text-xl max-w-2xl animate-fade-up">
            Leading healthcare investment company in Yemen, committed to improving healthcare standards and facilities.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-medical-dark">Our Company</h2>
              <p className="text-medical-gray mb-4">
                Kinda Medical Trading Company was established in 2010 as a pioneering healthcare investment firm based in Seiyun – Hadramout, Yemen. 
                Over the years, we have grown to become a leading provider of healthcare services and medical equipment throughout Yemen.
              </p>
              <p className="text-medical-gray mb-4">
                Our commitment to excellence and innovation has allowed us to develop state-of-the-art healthcare facilities 
                that serve thousands of patients every year. We invest in the latest medical technologies and employ 
                highly qualified healthcare professionals to ensure the highest standards of care.
              </p>
              <p className="text-medical-gray">
                As a registered healthcare company in Yemen, we adhere to strict quality standards and regulatory requirements, 
                ensuring that all our facilities operate with the necessary approvals and certifications.
              </p>
            </div>
            <div className="flex justify-center">
              <img 
                src="/public/placeholder.svg" 
                alt="Kinda Medical Company" 
                className="rounded-lg shadow-xl max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-medical-lightGray">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Vision & Mission</h2>
            <p className="section-subtitle">
              Our guiding principles that drive our operations and strategies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <Target className="h-10 w-10 text-medical-primary mr-4" />
                <h3 className="text-2xl font-bold text-medical-dark">Our Vision</h3>
              </div>
              <p className="text-medical-gray">
                To lead the healthcare sector in Yemen with global standards, creating a healthcare ecosystem that is 
                accessible, affordable, and of the highest quality. We aspire to be the most trusted name in healthcare 
                services and management in the region.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <Award className="h-10 w-10 text-medical-primary mr-4" />
                <h3 className="text-2xl font-bold text-medical-dark">Our Mission</h3>
              </div>
              <p className="text-medical-gray">
                To provide safe, effective, and integrated healthcare through skilled staff and advanced facilities. 
                We are committed to investing in modern healthcare infrastructure, training healthcare professionals, 
                and ensuring the availability of essential medical equipment throughout Yemen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-subtitle">
              The principles that guide our actions and define our culture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h3 className="flex items-center text-xl font-bold mb-3 text-medical-dark">
                <CheckCircle className="h-6 w-6 text-medical-primary mr-2" /> Excellence
              </h3>
              <p className="text-medical-gray">
                We strive for excellence in everything we do, from patient care to facility management.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h3 className="flex items-center text-xl font-bold mb-3 text-medical-dark">
                <CheckCircle className="h-6 w-6 text-medical-primary mr-2" /> Integrity
              </h3>
              <p className="text-medical-gray">
                We uphold the highest ethical standards and are transparent in all our dealings.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h3 className="flex items-center text-xl font-bold mb-3 text-medical-dark">
                <CheckCircle className="h-6 w-6 text-medical-primary mr-2" /> Compassion
              </h3>
              <p className="text-medical-gray">
                We treat all patients with dignity, respect, and genuine care for their well-being.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h3 className="flex items-center text-xl font-bold mb-3 text-medical-dark">
                <CheckCircle className="h-6 w-6 text-medical-primary mr-2" /> Innovation
              </h3>
              <p className="text-medical-gray">
                We continuously seek new and better ways to improve healthcare delivery and outcomes.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h3 className="flex items-center text-xl font-bold mb-3 text-medical-dark">
                <CheckCircle className="h-6 w-6 text-medical-primary mr-2" /> Collaboration
              </h3>
              <p className="text-medical-gray">
                We believe in the power of teamwork and partnerships to achieve our goals.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h3 className="flex items-center text-xl font-bold mb-3 text-medical-dark">
                <CheckCircle className="h-6 w-6 text-medical-primary mr-2" /> Community Focus
              </h3>
              <p className="text-medical-gray">
                We are committed to the communities we serve and invested in their health and well-being.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
