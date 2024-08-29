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
    background: '#2C1005',
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
    background: '#2C1005',
  },
  {
    title: 'Conseillé',
    description: 'Nous fournissons des services de comptabilité, de gestion de la paie...',
    logo: logo4,
    background: '#1B263B',
  }
];

const Page5 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? services.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === services.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative flex justify-center items-center my-10">
      {/* Flèche gauche */}
      <button 
        onClick={handlePrevious} 
        className="absolute left-0 text-4xl hover:text-gray-300 transition-colors duration-300 z-10"
      >
        <svg className="h-8 w-8 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"/>
        </svg>
      </button>

      <div 
        className='flex w-2/3 h-80 text-white px-8 py-4 transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg animate-float'
        style={{ backgroundColor: services[currentIndex].background }}
      >
        <div className="flex justify-between items-center w-full">
          <div className='flex flex-col w-3/4 gap-6 mt-8 text-center'>
            <h1 className='text-3xl font-bold'>{services[currentIndex].title} :</h1>
            <p className='text-lg'>{services[currentIndex].description}</p>
          </div>
          <img 
            src={services[currentIndex].logo} 
            alt={`${services[currentIndex].title} Logo`} 
            className='w-1/4 h-auto object-contain' 
          />
        </div>
      </div>

      {/* Flèche droite */}
      <button 
        onClick={handleNext} 
        className="absolute right-0 text-4xl hover:text-gray-300 transition-colors duration-300 z-10"
      >
        <svg className="h-8 w-8 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      </button>
    </div>
  );
}

export default Page5;
