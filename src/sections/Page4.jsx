import React from 'react';
import map from '../assets/images/map.png';
import phone1 from '../assets/icons/phonelogo.png';
import phone2 from '../assets/icons/phonelogo2.png';
import mail from '../assets/icons/mail.png';
import location from '../assets/icons/locationlogo.png';

const Page4 = () => {
  return (
    <div id="contact" className="bg-bg2 bg-cover flex flex-col items-center justify-center p-8 py-24 gap-20">
      {/* Conteneur principal avec couleur de fond et effets */}
      <div className="relative bg-[#1B263B] py-10 px-10 bg-opacity-60 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-opacity-80 ease-in-out duration-300">
        <p className="text-4xl text-white text-center mb-8 uppercase font-bold hover:text-red-600">Contactez-nous :</p>
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="flex-shrink-0 transition-transform transform ">
            <img src={map} alt="Map" className="w-5/6" />
          </div>
          <div className="flex flex-col text-white gap-12 text-3xl">
            <div className="flex items-center gap-4 transition-transform transform hover:scale-105 ease-in-out duration-300">
              <img src={phone1} alt="Phone 1" className="w-8 h-8" />
              <p className="hover:text-red-600 transition-colors duration-300">+213 793 44 00 13</p>
            </div>
            <div className="flex items-center gap-4 transition-transform transform hover:scale-105 ease-in-out duration-300">
              <img src={phone2} alt="Phone 2" className="w-8 h-8" />
              <p className="hover:text-red-600 transition-colors duration-300">+213 555 69 65 67</p>
            </div>
            <div className="flex items-center gap-4 transition-transform transform hover:scale-105 ease-in-out duration-300">
              <img src={mail} alt="Mail" className="w-8 h-8" />
              <p className="hover:text-red-600 transition-colors duration-300">bediafhouria123@gmail.com</p>
            </div>
            <div className="flex items-center gap-4 transition-transform transform hover:scale-105 ease-in-out duration-300">
              <img src={location} alt="Location" className="w-8 h-8" />
              <p className="hover:text-red-600 transition-colors duration-300">rue cite maouch</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page4;
