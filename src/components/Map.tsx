import React from "react";

interface MapProps {
  location: {
    lat: number;
    lng: number;
  };
}

const Map: React.FC<MapProps> = ({ location }) => {
  const { lat, lng } = location;

  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-md">
      <iframe
        title="Kinda Medical Location"
        width="100%"
        height="100%"
        frameBorder="0"
        style={{ border: 0 }}
        src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.4127280103606!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDEyJzE3LjMiTiA1NcKwMTYnMTQuOSJF!5e0!3m2!1sen!2sus!4v1714435710912!5m2!1sen!2sus`}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
