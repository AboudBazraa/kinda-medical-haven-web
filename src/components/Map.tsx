
import React from 'react';

const Map: React.FC = () => {
  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-md">
      <iframe 
        title="Kinda Medical Location"
        width="100%" 
        height="100%" 
        frameBorder="0" 
        style={{ border: 0 }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3892.4127280103606!2d48.782335!3d15.942873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3dac25f994b5e89d%3A0x9e0b732879d8c78!2sSeiyun%2C%20Yemen!5e0!3m2!1sen!2sus!4v1714435710912!5m2!1sen!2sus" 
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
