
import React from 'react';
import { MapPin, Phone, Clock, User } from 'lucide-react';

const Facilities: React.FC = () => {
  const facilities = [
    {
      name: "Al-Hayat General Hospital",
      description: "A comprehensive healthcare facility providing a wide range of medical services including emergency care, surgery, internal medicine, pediatrics, obstetrics, and more.",
      image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
      location: "Seiyun, Hadramout, Yemen",
      contact: "+967 123 456 789",
      hours: "24/7 Emergency Services",
      capacity: "150 beds"
    },
    {
      name: "Cardiac Specialty Center",
      description: "Specialized center for the diagnosis and treatment of heart diseases, equipped with modern cardiac catheterization labs, ECG, echocardiography, and staffed by experienced cardiologists.",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
      location: "Seiyun, Hadramout, Yemen",
      contact: "+967 123 456 790",
      hours: "8:00 AM - 5:00 PM, Sunday to Thursday",
      capacity: "50 beds"
    },
    {
      name: "Dialysis Center",
      description: "Modern facility providing dialysis services for patients with kidney diseases, equipped with latest dialysis machines and staffed by nephrologists and specialized nurses.",
      image: "https://images.unsplash.com/photo-1580281657702-257584239a55?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
      location: "Seiyun, Hadramout, Yemen",
      contact: "+967 123 456 791",
      hours: "7:00 AM - 11:00 PM, Daily",
      capacity: "30 dialysis stations"
    },
    {
      name: "Maternal & Child Health Center",
      description: "Specialized center for maternal and child health services, providing prenatal care, delivery services, postnatal care, and pediatric services.",
      image: "https://images.unsplash.com/photo-1631815588090-d1bcbe9a88b1?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
      location: "Seiyun, Hadramout, Yemen",
      contact: "+967 123 456 792",
      hours: "8:00 AM - 8:00 PM, Daily",
      capacity: "75 beds"
    },
    {
      name: "Specialty Surgical Center",
      description: "Advanced surgical center equipped for various surgical procedures including general surgery, orthopedics, ENT, ophthalmology, and more.",
      image: "https://images.unsplash.com/photo-1626498733722-7894968cd7bf?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
      location: "Seiyun, Hadramout, Yemen",
      contact: "+967 123 456 793",
      hours: "8:00 AM - 6:00 PM, Sunday to Thursday",
      capacity: "5 operating theaters, 40 beds"
    },
    {
      name: "Rehabilitation Center",
      description: "Comprehensive rehabilitation facility offering physical therapy, occupational therapy, speech therapy, and other rehabilitation services.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
      location: "Seiyun, Hadramout, Yemen",
      contact: "+967 123 456 794",
      hours: "8:00 AM - 5:00 PM, Sunday to Thursday",
      capacity: "25 beds"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-medical-dark to-medical-primary text-white py-16">
        <div className="container-custom">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/1038b500-df4f-4406-a86a-78b88a493244.png" 
              alt="Kinda Medical Logo" 
              className="h-16 w-auto mr-4"
            />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-up">Our Healthcare Facilities</h1>
              <p className="text-xl max-w-2xl animate-fade-up">
                Modern, well-equipped healthcare facilities providing quality care to communities across Yemen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Overview */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Facilities Network</h2>
            <p className="section-subtitle">
              Kinda Medical Trading Company operates a network of healthcare facilities designed to provide comprehensive care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src={facility.image} 
                  alt={facility.name} 
                  className="w-full h-60 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-medical-dark">{facility.name}</h3>
                  <p className="text-medical-gray mb-6">
                    {facility.description}
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 text-medical-primary mr-3" />
                      <span className="text-medical-gray">{facility.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-medical-primary mr-3" />
                      <span className="text-medical-gray">{facility.contact}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-medical-primary mr-3" />
                      <span className="text-medical-gray">{facility.hours}</span>
                    </div>
                    <div className="flex items-center">
                      <User className="h-5 w-5 text-medical-primary mr-3" />
                      <span className="text-medical-gray">Capacity: {facility.capacity}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Facilities;
