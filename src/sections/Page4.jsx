import React from 'react';
import map from '../assets/images/map.png';
import phone1 from '../assets/icons/phonelogo.png';
import phone2 from '../assets/icons/phonelogo2.png';
import mail from '../assets/icons/mail.png';
import location from '../assets/icons/locationlogo.png';

const Page4 = () => {
  return (
    <div id="contact" className="bg-bg2 bg-cover flex flex-col items-center justify-center p-6 md:p-8 py-16 md:py-24 gap-10 md:gap-20">
      {/* Conteneur principal avec couleur de fond et effets */}
      <div className="relative bg-[#1B263B] py-6 px-6 md:py-10 md:px-10 bg-opacity-60 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-opacity-80 ease-in-out duration-300">
        <p className="text-2xl md:text-4xl text-white text-center mb-6 md:mb-8 uppercase font-bold hover:text-red-600">
          Contactez-nous :
        </p>
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center">
          {/* Section de l'image de la carte */}
          <div className="flex-shrink-0 transition-transform transform">
            <img src={map} alt="Map" className="w-full md:w-5/6 max-w-xs md:max-w-md" />
          </div>
          {/* Section des informations de contact */}
          <div className="flex flex-col text-white gap-6 md:gap-8 text-lg md:text-2xl">
            {[
              { src: phone1, alt: "Phone 1", text: "+213 793 44 00 13" },
              { src: phone2, alt: "Phone 2", text: "+213 555 69 65 67" },
              { src: mail, alt: "Mail", text: "bediafhouria123@gmail.com" },
              { src: location, alt: "Location", text: "rue cite maouch" },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2 md:gap-4 transition-transform transform hover:scale-105 ease-in-out duration-300">
                <img src={item.src} alt={item.alt} className="w-6 h-6 md:w-8 md:h-8" />
                <p className="hover:text-red-600 transition-colors duration-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page4;
