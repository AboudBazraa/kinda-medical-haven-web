import React from "react";
import {
  MapPin,
  Phone,
  Clock,
  User,
  ChevronRight,
  Building,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import OptimizedImage from "@/components/OptimizedImage";
import SEO from "@/components/SEO";

const Facilities: React.FC = () => {
  const facilities = [
    {
      id: "general-hospital",
      name: "Al-Hayat General Hospital",
      description:
        "A comprehensive healthcare facility providing a wide range of medical services including emergency care, surgery, internal medicine, pediatrics, obstetrics, and more.",
      image:
        "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
      location: "Seiyun, Hadramout, Yemen",
      contact: "+967 123 456 789",
      hours: "24/7 Emergency Services",
      capacity: "150 beds",
      services: [
        "Emergency Care",
        "Surgery",
        "Internal Medicine",
        "Pediatrics",
        "Obstetrics",
      ],
    },
    {
      id: "cardiac-center",
      name: "Cardiac Specialty Center",
      description:
        "Specialized center for the diagnosis and treatment of heart diseases, equipped with modern cardiac catheterization labs, ECG, echocardiography, and staffed by experienced cardiologists.",
      image:
        "https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
      location: "Seiyun, Hadramout, Yemen",
      contact: "+967 123 456 790",
      hours: "8:00 AM - 5:00 PM, Sunday to Thursday",
      capacity: "50 beds",
      services: [
        "Cardiology",
        "Cardiac Surgery",
        "Cardiac Rehabilitation",
        "Echocardiography",
        "ECG Testing",
      ],
    },
    {
      id: "dialysis-center",
      name: "Dialysis Center",
      description:
        "Modern facility providing dialysis services for patients with kidney diseases, equipped with latest dialysis machines and staffed by nephrologists and specialized nurses.",
      image:
        "https://images.unsplash.com/photo-1580281657702-257584239a55?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
      location: "Seiyun, Hadramout, Yemen",
      contact: "+967 123 456 791",
      hours: "7:00 AM - 11:00 PM, Daily",
      capacity: "30 dialysis stations",
      services: [
        "Hemodialysis",
        "Peritoneal Dialysis",
        "Nephrology Consultation",
        "Kidney Care Education",
        "Nutritional Support",
      ],
    },
    {
      id: "maternal-child",
      name: "Maternal & Child Health Center",
      description:
        "Specialized center for maternal and child health services, providing prenatal care, delivery services, postnatal care, and pediatric services.",
      image:
        "https://images.unsplash.com/photo-1631815588090-d1bcbe9a88b1?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
      location: "Seiyun, Hadramout, Yemen",
      contact: "+967 123 456 792",
      hours: "8:00 AM - 8:00 PM, Daily",
      capacity: "75 beds",
      services: [
        "Prenatal Care",
        "Delivery Services",
        "Postnatal Care",
        "Pediatric Care",
        "Immunization",
      ],
    },
    {
      id: "surgical-center",
      name: "Specialty Surgical Center",
      description:
        "Advanced surgical center equipped for various surgical procedures including general surgery, orthopedics, ENT, ophthalmology, and more.",
      image:
        "https://images.unsplash.com/photo-1626498733722-7894968cd7bf?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
      location: "Seiyun, Hadramout, Yemen",
      contact: "+967 123 456 793",
      hours: "8:00 AM - 6:00 PM, Sunday to Thursday",
      capacity: "5 operating theaters, 40 beds",
      services: [
        "General Surgery",
        "Orthopedic Surgery",
        "ENT Surgery",
        "Ophthalmologic Surgery",
        "Minimally Invasive Surgery",
      ],
    },
    {
      id: "rehab-center",
      name: "Rehabilitation Center",
      description:
        "Comprehensive rehabilitation facility offering physical therapy, occupational therapy, speech therapy, and other rehabilitation services.",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
      location: "Seiyun, Hadramout, Yemen",
      contact: "+967 123 456 794",
      hours: "8:00 AM - 5:00 PM, Sunday to Thursday",
      capacity: "25 beds",
      services: [
        "Physical Therapy",
        "Occupational Therapy",
        "Speech Therapy",
        "Neurological Rehabilitation",
        "Orthopedic Rehabilitation",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Our Healthcare Facilities | Kinda Medical Trading Company"
        description="Explore Kinda Medical Trading Company's network of modern healthcare facilities providing quality care to communities across Yemen."
        keywords="healthcare facilities Yemen, hospitals Yemen, medical centers, dialysis center, cardiac center"
      />

      {/* Hero Section - Modern Design */}
      <section className="relative py-36 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <OptimizedImage
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1920"
            alt="Modern healthcare facility"
            className="w-full h-full"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-700/80"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block p-2 bg-white/10 backdrop-blur-sm rounded-lg mb-6">
              <img
                src="/lovable-uploads/1038b500-df4f-4406-a86a-78b88a493244.png"
                alt="Kinda Medical Logo"
                className="h-12 w-auto"
              />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-up">
              World-Class <span className="text-green-400">Healthcare</span>{" "}
              Facilities
            </h1>
            <p className="text-xl text-white/80 max-w-2xl animate-fade-up">
              Modern, well-equipped healthcare facilities providing quality care
              to communities across Yemen.
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

      {/* Overview Stats - New Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-6 rounded-lg bg-blue-50">
              <div className="flex justify-center mb-3">
                <Building className="h-8 w-8 text-blue-600" />
              </div>
              <p className="text-3xl font-bold text-blue-600 mb-1">6+</p>
              <p className="text-gray-700">Facilities</p>
            </div>
            <div className="p-6 rounded-lg bg-blue-50">
              <div className="flex justify-center mb-3">
                <User className="h-8 w-8 text-blue-600" />
              </div>
              <p className="text-3xl font-bold text-blue-600 mb-1">350+</p>
              <p className="text-gray-700">Bed Capacity</p>
            </div>
            <div className="p-6 rounded-lg bg-blue-50">
              <div className="flex justify-center mb-3">
                <MapPin className="h-8 w-8 text-blue-600" />
              </div>
              <p className="text-3xl font-bold text-blue-600 mb-1">5+</p>
              <p className="text-gray-700">Locations</p>
            </div>
            <div className="p-6 rounded-lg bg-blue-50">
              <div className="flex justify-center mb-3">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <p className="text-3xl font-bold text-blue-600 mb-1">24/7</p>
              <p className="text-gray-700">Emergency Care</p>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities List - Modern Design */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <p className="text-blue-600 font-medium mb-2">
              OUR HEALTHCARE NETWORK
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              State-of-the-Art Facilities
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our comprehensive network of healthcare facilities is designed to
              provide high-quality care throughout Yemen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <Card
                key={index}
                className="border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="relative">
                  <OptimizedImage
                    src={facility.image}
                    alt={facility.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-green-500 hover:bg-green-600 text-white">
                      {facility.id === "general-hospital"
                        ? "24/7"
                        : "Specialty Care"}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">
                    {facility.name}
                  </h3>
                  <p className="text-gray-700 mb-4 line-clamp-2">
                    {facility.description}
                  </p>

                  <div className="space-y-3 mb-5">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">
                        {facility.location}
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">
                        {facility.contact}
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">
                        {facility.hours}
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <User className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">
                        Capacity: {facility.capacity}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {facility.services.slice(0, 3).map((service, idx) => (
                      <Badge
                        key={idx}
                        variant="outline"
                        className="bg-blue-50 text-blue-700 hover:bg-blue-100 border-blue-200"
                      >
                        {service}
                      </Badge>
                    ))}
                    {facility.services.length > 3 && (
                      <Badge
                        variant="outline"
                        className="bg-blue-50 text-blue-700 hover:bg-blue-100 border-blue-200"
                      >
                        +{facility.services.length - 3} more
                      </Badge>
                    )}
                  </div>

                  <Link to={`/facilities/${facility.id}`}>
                    <Button
                      variant="outline"
                      className="w-full text-blue-600 border-blue-200 hover:bg-blue-50 hover:text-blue-700 flex items-center justify-center"
                    >
                      View Details <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section - New */}
      <section className="py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <p className="text-blue-600 font-medium mb-2">
              FIND OUR FACILITIES
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Facilities Map
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our healthcare facilities are strategically located to serve
              communities across Yemen
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-xl p-4 md:p-8">
            <div className="h-[400px] bg-blue-50 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <Building className="h-12 w-12 text-blue-300 mx-auto mb-4" />
                <p className="text-gray-500">Interactive map coming soon</p>
                <p className="text-sm text-gray-400 mt-2">
                  View our facilities locations across Yemen
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-2xl p-8 md:p-12 shadow-xl text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="col-span-2">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Interested in our facilities?
                </h2>
                <p className="text-white/80 mb-6 max-w-2xl">
                  Contact us to learn more about our healthcare facilities or to
                  schedule a visit. We're committed to providing the highest
                  quality healthcare services to our communities.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/contact">
                    <Button className="bg-white text-blue-700 hover:bg-green-400 hover:text-white">
                      Contact Us
                    </Button>
                  </Link>
                  <Link to="/services">
                    <Button
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-blue-700"
                    >
                      Our Services
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-green-400" />
                      <span>+967 123 456 789</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-green-400" />
                      <span>Seiyun – Hadramout, Yemen</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-green-400" />
                      <span>8:00 AM - 5:00 PM, Sun-Thu</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Facilities;
