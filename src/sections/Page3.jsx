import React, { useState } from 'react';
import logo1 from "../assets/icons/logo1service.png";
import logo2 from "../assets/icons/logo2service.png";
import logo3 from "../assets/icons/logo3service.png";
import logo4 from "../assets/icons/logo4service.png";

const services = [
  {
    title: 'Comptabilité',
    description: 'FT Consulting est un cabinet d’expertise-comptable basé à Alger...',
    logo: logo1,
    background: '#1B263B',
  },
  {
    title: 'Fiscalité',
    description: 'Nous fournissons des services de comptabilité, de gestion de la paie...',
    logo: logo2,
    background: '#1B263B',
  },
  {
    title: 'Expertise',
    description: 'FT Consulting est un cabinet d’expertise-comptable basé à Alger...',
    logo: logo3,
    background: '#1B263B',
  },
  {
    title: 'Conseillé',
    description: 'Nous fournissons des services de comptabilité, de gestion de la paie...',
    logo: logo4,
    background: '#1B263B',
  }
];

const Page3 = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleExpand = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index); // Toggle the expansion
  };

  return (
    <div className="mt-10 mb-36">
      <p className="text-4xl font-bold mb-8 text-center">NOS SERVICES</p>

      <div className="flex flex-wrap justify-center gap-x-10 gap-y-6">
        {services.map((service, index) => (
          <div
            key={index}
            onClick={() => handleExpand(index)}
            className={`transition-all duration-500 ease-in-out cursor-pointer
              ${expandedIndex === index ? 'w-3/4 h-80 shadow-lg' : 'w-1/3 h-40 shadow-md border rounded-md'}
              text-white px-8 py-4 flex items-center 
              hover:scale-105 hover:bg-opacity-80 rounded-md`}
            style={{ backgroundColor: service.background }}
          >
            <div className={`flex flex-col justify-center ${expandedIndex === index ? 'w-3/4' : 'w-full'} gap-6 text-center`}>
              <h1 className={`font-bold ${expandedIndex === index ? 'text-3xl' : 'text-xl'}`}>{service.title}</h1>
              {expandedIndex === index && <p className='text-lg'>{service.description}</p>}
            </div>
            {expandedIndex === index && (
              <img
                src={service.logo}
                alt={`${service.title} Logo`}
                className='max-w-[100px] max-h-[100px] object-contain'
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page3;
