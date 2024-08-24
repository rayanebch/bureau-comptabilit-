import React from 'react';
import map from '../assets/images/map.png';
import phone1 from '../assets/icons/phonelogo.png';
import phone2 from '../assets/icons/phonelogo2.png';
import mail from '../assets/icons/mail.png';
import location from '../assets/icons/locationlogo.png';

const Page4 = () => {
  return (
    <div className=" bg-[#1B263B] flex flex-col items-center justify-center p-8 py-24 gap-20">
      <p className="text-4xl text-white text-center mb-8 uppercase font-bold">Contactez-nous :</p>
      <div className="flex flex-col md:flex-row gap-10 items-center">
        <div className="flex-shrink-0">
          <img src={map} alt="Map" className="w-5/6" />
        </div>
        <div className="flex flex-col text-white gap-12 text-3xl">
          <div className="flex items-center gap-4">
            <img src={phone1} alt="Phone 1" className="w-8 h-8" />
            <p>+213 793 44 00 13</p>
          </div>
          <div className="flex items-center gap-4">
            <img src={phone2} alt="Phone 2" className="w-8 h-8" />
            <p>+213 555 69 65 67</p>
          </div>
          <div className="flex items-center gap-4">
            <img src={mail} alt="Mail" className="w-8 h-8" />
            <p>bediafhouria123@gmail.com</p>
          </div>
          <div className="flex items-center gap-4">
            <img src={location} alt="Location" className="w-8 h-8" />
            <p>rue cite maouch</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page4;
