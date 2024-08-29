import React from 'react';
import arrow from "../assets/images/arrow.png";

const Page1 = () => {
  return (
    <div id="Accueil" className='bg-bg1 bg-cover w-full h-[100vh] flex flex-col justify-center items-center gap-6 sm:gap-8 md:gap-12 p-4 text-center'>
      <p className='text-white text-2xl sm:text-4xl md:text-5xl font-bold transition-transform transform hover:scale-105 ease-in-out duration-300'>
        BH Consulting,<br />cabinet d’expertise comptable <br />et de conseil fiscal
      </p>
      <p className='text-white text-lg sm:text-2xl md:text-4xl font-thin transition-transform transform hover:scale-105 ease-in-out duration-300'>
        Fort d’une expertise de plus de 20 années, nous sommes un cabinet d’expertise <br /> comptable, de conseil fiscal et de commissariat aux comptes, basé à Alger.
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
