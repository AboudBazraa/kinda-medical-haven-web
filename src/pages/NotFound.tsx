
import React from 'react';
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const NotFound: React.FC = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-medical-lightGray">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-medical-primary mb-4">404</h1>
        <h2 className="text-3xl font-bold text-medical-dark mb-6">Page Not Found</h2>
        <p className="text-xl text-medical-gray mb-8 max-w-md mx-auto">
          We're sorry, the page you requested at <span className="font-medium">{location.pathname}</span> could not be found.
        </p>
        <Link to="/">
          <Button className="bg-medical-primary hover:bg-medical-dark">
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
