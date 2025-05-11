import React from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Shield,
  Award,
  CheckCircle,
} from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img
                src="/lovable-uploads/1038b500-df4f-4406-a86a-78b88a493244.png"
                alt="MediGlobal Logo"
                className="h-10 w-auto mr-2"
              />
              <h3 className="text-xl font-bold text-[#007BFF]">MediGlobal</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Global leader in medical equipment trading, committed to providing
              high-quality healthcare solutions worldwide.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white hover:text-[#007BFF] transition duration-300"
                aria-label="Facebook"
              >
                <svg
                  className="w-6 h-6"
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
                className="text-white hover:text-[#007BFF] transition duration-300"
                aria-label="Twitter"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a
                href="#"
                className="text-white hover:text-[#007BFF] transition duration-300"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="hover:text-[#007BFF] transition duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="hover:text-[#007BFF] transition duration-300"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-[#007BFF] transition duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/partners"
                  className="hover:text-[#007BFF] transition duration-300"
                >
                  Partners
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-[#007BFF] transition duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Product Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/products/diagnostic"
                  className="hover:text-[#007BFF] transition duration-300"
                >
                  Diagnostic Equipment
                </Link>
              </li>
              <li>
                <Link
                  to="/products/surgical"
                  className="hover:text-[#007BFF] transition duration-300"
                >
                  Surgical Instruments
                </Link>
              </li>
              <li>
                <Link
                  to="/products/monitoring"
                  className="hover:text-[#007BFF] transition duration-300"
                >
                  Patient Monitoring
                </Link>
              </li>
              <li>
                <Link
                  to="/products/laboratory"
                  className="hover:text-[#007BFF] transition duration-300"
                >
                  Laboratory Equipment
                </Link>
              </li>
              <li>
                <Link
                  to="/products/imaging"
                  className="hover:text-[#007BFF] transition duration-300"
                >
                  Medical Imaging
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <p className="flex items-center">
                <MapPin className="mr-2 h-5 w-5 text-[#28a745]" />
                <span>Global Headquarters, Dubai UAE</span>
              </p>
              <p className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-[#28a745]" />
                <span>+971 4 123 4567</span>
              </p>
              <p className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-[#28a745]" />
                <span>info@mediglobal.com</span>
              </p>
              <p className="flex items-center">
                <Globe className="mr-2 h-5 w-5 text-[#28a745]" />
                <span>www.mediglobal.com</span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            <div className="flex items-center bg-gray-800 px-3 py-1 rounded-full">
              <Shield size={14} className="text-[#28a745] mr-1" />
              <span className="text-xs">ISO 13485</span>
            </div>
            <div className="flex items-center bg-gray-800 px-3 py-1 rounded-full">
              <CheckCircle size={14} className="text-[#28a745] mr-1" />
              <span className="text-xs">CE Certified</span>
            </div>
            <div className="flex items-center bg-gray-800 px-3 py-1 rounded-full">
              <Award size={14} className="text-[#28a745] mr-1" />
              <span className="text-xs">FDA Approved</span>
            </div>
          </div>

          <div className="text-center text-sm text-gray-400">
            &copy; {new Date().getFullYear()} MediGlobal Trading Company. All
            Rights Reserved.
          </div>

          <div className="flex justify-center md:justify-end gap-4 text-sm">
            <Link to="/privacy" className="text-gray-400 hover:text-[#007BFF]">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-[#007BFF]">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
