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
        isScrolled
          ? "bg-white/70 shadow-md backdrop-blur-sm"
          : "bg-gradient-to-r from-medical-dark to-medical-primary"
      }`}
    >
      <div className="container-custom py-4 flex items-center justify-between">
        <motion.div
          className="flex items-center"
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Link to="/" className="flex items-center">
            <img
              src="/lovable-uploads/1038b500-df4f-4406-a86a-78b88a493244.png"
              alt="Kinda Medical Logo"
              className="h-10 w-auto mr-2"
            />
            <span className="text-xl font-bold text-medical-primary">
              Kinda Medical
            </span>
            <span className="text-medical-gray text-sm ml-2 hidden md:inline">
              Trading Company
            </span>
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {[
            { path: "/", label: "Home" },
            { path: "/about", label: "About Us" },
            { path: "/services", label: "Services" },
            { path: "/facilities", label: "Facilities" },
            { path: "/contact", label: "Contact" },
          ].map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative  ${
                isScrolled ? "text-medical-darkGray" : "text-white"
              } hover:text-medical-primary transition duration-300 py-1 ${
                isActive(item.path) ? "text-medical-primary font-medium" : ""
              }`}
            >
              {item.label}
              {isActive(item.path) && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-medical-primary"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </Link>
          ))}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="default"
              size="sm"
              className="bg-medical-primary hover:bg-medical-dark transition-all duration-300"
            >
              Get in Touch
            </Button>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <motion.div
          className="md:hidden"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <button
            onClick={toggleMenu}
            className="text-medical-gray p-2 rounded-full hover:bg-gray-100 transition-all"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg overflow-hidden"
          >
            <div className="container-custom py-4 flex flex-col space-y-5">
              {[
                { path: "/", label: "Home" },
                { path: "/about", label: "About Us" },
                { path: "/services", label: "Services" },
                { path: "/facilities", label: "Facilities" },
                { path: "/contact", label: "Contact" },
              ].map((item) => (
                <motion.div
                  key={item.path}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Link
                    to={item.path}
                    className={`block text-medical-darkGray hover:text-medical-primary transition duration-300 py-2 ${
                      isActive(item.path)
                        ? "text-medical-primary font-medium"
                        : ""
                    }`}
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
                  className="bg-medical-primary hover:bg-medical-dark w-full transition-all duration-300"
                >
                  Get in Touch
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
