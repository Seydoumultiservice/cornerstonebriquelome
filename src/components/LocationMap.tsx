
import React from 'react';

export const LocationMap = () => {
  return (
    <div className="w-full h-full">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126931.50698900232!2d1.1286202152939228!3d6.1812732487384685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1023e1c113185419%3A0x3224b5422caf411d!2zTG9tw6k!5e0!3m2!1sfr!2stg!4v1714575980609!5m2!1sfr!2stg" 
        width="100%" 
        height="100%" 
        style={{ border: 0 }} 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="Cornerstone Briques Location"
        className="rounded-lg"
        allowFullScreen
      />
    </div>
  );
};
