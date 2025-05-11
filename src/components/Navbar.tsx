import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`overflow-hidden sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/60 shadow-md backdrop-blur-md" : ""
      }`}
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className="px-20 py-3 flex items-center justify-between">
        <motion.div
          className="flex items-center"
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Link to="/" className="flex items-center">
            <img
              src="/lovable-uploads/1038b500-df4f-4406-a86a-78b88a493244.png"
              alt="MediGlobal Logo"
              className="h-10 w-auto mr-2"
            />
            <span className="text-xl font-bold text-[#007BFF]">MediGlobal</span>
            <span className="text-gray-600 text-sm ml-2 hidden md:inline">
              Trading Company
            </span>
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-7">
          {[
            { path: "/", label: "Home" },
            { path: "/services", label: "Services" },
            { path: "/about", label: "About Us" },
            { path: "/facilities", label: "Facilities" },
            { path: "/contact", label: "Contact" },
          ].map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative text-gray-700 hover:text-[#007BFF] transition duration-300 py-1 ${
                isActive(item.path) ? "text-[#007BFF] font-medium" : ""
              }`}
              aria-current={isActive(item.path) ? "page" : undefined}
            >
              {item.label}
              {isActive(item.path) && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#007BFF]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </Link>
          ))}
          {/* <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="default"
              size="sm"
              className="bg-[#007BFF] hover:bg-blue-700 transition-all duration-300"
            >
              Request a Quote
            </Button>
          </motion.div> */}
        </div>

        {/* Mobile Menu Button */}
        <motion.div
          className="md:hidden"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <button
            onClick={toggleMenu}
            className="text-gray-700 p-2 rounded-full hover:bg-gray-100 transition-all"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg overflow-hidden"
          >
            <div className="container-custom py-4 flex flex-col space-y-5">
              {[
                { path: "/", label: "Home" },
                { path: "/products", label: "Products" },
                { path: "/about", label: "About Us" },
                { path: "/partners", label: "Partners" },
                { path: "/contact", label: "Contact" },
              ].map((item) => (
                <motion.div
                  key={item.path}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Link
                    to={item.path}
                    className={`block text-gray-700 hover:text-[#007BFF] transition duration-300 py-2 ${
                      isActive(item.path) ? "text-[#007BFF] font-medium" : ""
                    }`}
                    aria-current={isActive(item.path) ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="pt-2"
              >
                <Button
                  variant="default"
                  size="sm"
                  className="bg-[#007BFF] hover:bg-blue-700 w-full transition-all duration-300"
                >
                  Request a Quote
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
