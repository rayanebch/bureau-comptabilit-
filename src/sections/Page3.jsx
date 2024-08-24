import React from 'react';
import logo1 from "../assets/icons/logo1service.png";
import logo2 from "../assets/icons/logo2service.png";
import logo3 from "../assets/icons/logo3service.png";
import logo4 from "../assets/icons/logo4service.png";
import { Service } from "../constants";

const Page3 = () => {
  const logos = [logo1, logo2, logo3, logo4];

  return (
    <div className="flex flex-col items-center gap-12 mt-16">
      <p className="text-4xl font-bold mb-8">NOS SERVICES</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-72">
        {logos.map((logo, index) => (
          <div 
            key={index} 
            className="bg-[#2C1005] h-80 w-96 flex flex-col justify-center items-center mx-auto relative overflow-hidden group"
          >
            <img 
              src={logo}
              alt={`Service Logo ${index + 1}`}
              className="h-24 w-24 transition-transform duration-300 group-hover:translate-y-[-20%]"
            />
            <p className="text-white text-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:translate-y-0 mt-4">
              {Service[index].label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page3;
