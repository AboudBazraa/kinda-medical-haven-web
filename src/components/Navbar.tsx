
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/1038b500-df4f-4406-a86a-78b88a493244.png" 
              alt="Kinda Medical Logo" 
              className="h-8 w-auto mr-2"
            />
            <span className="text-xl font-bold text-medical-primary">Kinda Medical</span>
            <span className="text-medical-gray text-sm ml-2 hidden md:inline">Trading Company</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-medical-darkGray hover:text-medical-primary transition duration-300">Home</Link>
          <Link to="/about" className="text-medical-darkGray hover:text-medical-primary transition duration-300">About Us</Link>
          <Link to="/services" className="text-medical-darkGray hover:text-medical-primary transition duration-300">Services</Link>
          <Link to="/facilities" className="text-medical-darkGray hover:text-medical-primary transition duration-300">Facilities</Link>
          <Link to="/contact" className="text-medical-darkGray hover:text-medical-primary transition duration-300">Contact</Link>
          <Button variant="default" size="sm" className="bg-medical-primary hover:bg-medical-dark">
            Get in Touch
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-medical-gray">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white shadow-md`}>
        <div className="container-custom py-4 flex flex-col space-y-4">
          <Link to="/" className="text-medical-darkGray hover:text-medical-primary transition duration-300">Home</Link>
          <Link to="/about" className="text-medical-darkGray hover:text-medical-primary transition duration-300">About Us</Link>
          <Link to="/services" className="text-medical-darkGray hover:text-medical-primary transition duration-300">Services</Link>
          <Link to="/facilities" className="text-medical-darkGray hover:text-medical-primary transition duration-300">Facilities</Link>
          <Link to="/contact" className="text-medical-darkGray hover:text-medical-primary transition duration-300">Contact</Link>
          <Button variant="default" size="sm" className="bg-medical-primary hover:bg-medical-dark w-full">
            Get in Touch
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
