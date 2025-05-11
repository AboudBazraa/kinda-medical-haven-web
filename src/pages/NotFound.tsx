import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home, Phone } from "lucide-react";
import SEO from "@/components/SEO";
import OptimizedImage from "@/components/OptimizedImage";

const NotFound: React.FC = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 flex flex-col items-center justify-center py-20 px-4">
      <SEO
        title="Page Not Found | MediGlobal Trading Company"
        description="The page you were looking for could not be found. Please navigate back to the MediGlobal Trading Company homepage."
        keywords="404, page not found, error page, medical equipment, medical devices"
      />

      <div className="max-w-3xl w-full text-center">
        <div className="mb-8 inline-block">
          <img
            src="/lovable-uploads/1038b500-df4f-4406-a86a-78b88a493244.png"
            alt="MediGlobal Logo"
            className="h-16 w-auto"
          />
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center">
              <span className="text-5xl font-bold text-[#007BFF]">404</span>
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Page Not Found
          </h1>

          <p className="text-lg text-gray-600 mb-6 max-w-xl mx-auto">
            We're sorry, the page you requested at{" "}
            <span className="font-medium text-[#007BFF]">
              {location.pathname}
            </span>{" "}
            could not be found.
          </p>

          <OptimizedImage
            src="https://images.unsplash.com/photo-1581595219315-a187dd40c322?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600"
            alt="Medical equipment illustration"
            className="rounded-xl mx-auto mb-8 max-w-sm"
          />

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link to="/">
              <Button className="bg-[#007BFF] hover:bg-blue-700 flex items-center gap-2 w-full md:w-auto">
                <Home size={18} /> Return to Home
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                variant="outline"
                className="border-[#007BFF] text-[#007BFF] hover:bg-blue-50 flex items-center gap-2 w-full md:w-auto"
              >
                <Phone size={18} /> Contact Support
              </Button>
            </Link>
          </div>
        </div>

        <div className="text-center">
          <p className="text-gray-600 mb-6">Quick Links:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/products"
              className="text-[#007BFF] hover:text-blue-700 font-medium"
            >
              Products
            </Link>
            <Link
              to="/about"
              className="text-[#007BFF] hover:text-blue-700 font-medium"
            >
              About Us
            </Link>
            <Link
              to="/partners"
              className="text-[#007BFF] hover:text-blue-700 font-medium"
            >
              Partners
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
