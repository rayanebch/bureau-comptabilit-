import React from 'react';
import arrow from "../assets/images/arrow.png";

const Page1 = () => {
  return (
    <div id="Accueil" className='bg-bg1 bg-cover w-full h-[100vh] flex flex-col justify-center items-center gap-6 sm:gap-8 md:gap-12 p-4 text-center'>
      <p className='text-white text-2xl sm:text-4xl md:text-5xl font-bold transition-transform transform hover:scale-105 ease-in-out duration-300'>
      Cabinet Bediaf Expertise,<br />bureau de comptabilité, fiscalité <br />et expert judiciaire
      </p>
      <p className='text-white text-lg sm:text-2xl md:text-4xl font-thin transition-transform transform hover:scale-105 ease-in-out duration-300'>
      Fort de plus de 32 ans d'expérience, nous sommes un bureau de comptabilité,<br /> de fiscalité et d'expertise judiciaire basé à Alger, Hussein Dey.
      </p>
      <a href="#apropos">
        <img 
          src={arrow}
          alt="arrow logo"
          className="mt-8 sm:mt-16 md:mt-32 animate-bounce transition-transform transform hover:scale-110 ease-in-out duration-300" 
        />
      </a>
    </div>
  );
}

export default Page1;
