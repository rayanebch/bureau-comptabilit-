import React from 'react'
import arrow from "../assets/images/arrow.png";
const Page1 = () => {
  return ( 

    <div className='bg-bg1 bg-cover w-full h-[100vh] flex flex-col justify-center items-center gap-6 sm:gap-8 md:gap-12 p-4 text-center'>
      <p className='text-white text-2xl sm:text-4xl md:text-5xl font-bold'>BH Consulting,<br />cabinet d’expertise comptable <br />et de conseil fiscal</p>
      <p className='text-white text-lg sm:text-2xl md:text-4xl font-thin'>Fort d’une expertise de plus de 20 années, nous sommes un cabinet d’expertise <br /> comptable, de conseil fiscal et de commissariat aux comptes, basé à Alger.</p>
      <img 
        src={arrow}
        alt="arrow logo"
        className="mt-8 sm:mt-16 md:mt-32 animate-bounce transition-all" 
      />
    </div>
  )
}

export default Page1;
