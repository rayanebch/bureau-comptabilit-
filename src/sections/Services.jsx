import React from 'react'
import Nav from '../components/Nav'
import logo1 from "../assets/icons/logo1service.png";
import logo2 from "../assets/icons/logo2service.png";
import logo3 from "../assets/icons/logo3service.png";
import logo4 from "../assets/icons/logo4service.png";
import image from "../assets/images/Group 3.png";
import image2 from "../assets/images/GroupF.png";
import image3 from "../assets/images/GroupE.png";
import image4 from "../assets/images/GroupC.png";
import line1 from "../assets/images/Line 1.png"
import line2 from "../assets/images/Line 2.png"
import { Service } from "../constants";
import Page4 from './Page4';
const Services = () => {
  const logos = [logo1, logo2, logo3, logo4];
  return (
    <div id='Service' className='bg-bg2 bg-cover w-full h-[80vh]'>
      <Nav></Nav>
      <div className='flex flex-col justify-center items-center gap-6 sm:gap-8 md:gap-12 p-4 text-center'>
      <p className='text-white text-2xl mt-52 sm:text-4xl md:text-5xl font-bold transition-transform transform hover:scale-105 ease-in-out duration-300'>
      Nos services
      </p>
      <p className='text-white text-lg sm:text-2xl md:text-4xl font-thin transition-transform transform hover:scale-105 ease-in-out duration-300'>
      Nous offrons une gamme complete de services adaptés a vos besoins
      </p>
      </div>
      <div className="grid grid-cols-1 mt-48 sm:grid-cols-2 lg:grid-cols-4 ">
        {logos.map((logo, index) => (
          <div 
            key={index} 
            className="bg-[#1B263B] h-80 w-[350px] flex flex-col justify-center items-center mx-auto relative overflow-hidden group"
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
      <div className='w-full flex flex-col ml-44 my-16 items-center justify-center'>
      {/* Section 1: Comptabilité */}
      <div className='flex flex-row gap-16 md:space-x-24 pt-24 pb-12'>
        {/* Texte de Comptabilité */}
        <div className='flex flex-col w-1/2 md:w-1/3 text-center md:text-left ml-8 md:ml-16'>
          <p className='font-bold text-[#1B263B] text-4xl transition-transform duration-500 hover:scale-105'>
            Comptabilité :
          </p>
          <p className='text-xl mt-4 transition-transform duration-500 hover:scale-105'>
            FT Consulting est un cabinet d’expertise-comptable basé à Alger. Nous fournissons des services de comptabilité, de gestion de la paie et de conseil fiscal à un portefeuille de clients étrangers et nationaux. Notre cabinet mobilise une équipe de professionnels pour vous accompagner tout au long de la vie de votre entreprise.
          </p>
          <img 
            src={line1}
            className='mt-28 h-8 w-96'
          />
        </div>
        
        {/* Image de Comptabilité */}
        <div className='w-1/2 md:w-1/4'>
          <img 
            src={image}
            alt="Comptabilité Logo"
            className='w-full h-auto transition-transform duration-500 hover:scale-110 hover:rotate-6 hover:animate-swing'
          />
        </div>
      </div>

      {/* Section 2: Fiscalité */}
      <div className='flex flex-row gap-16 md:space-x-24 pt-24 pb-12'>
        {/* Image de Fiscalité */}
        <div className='w-1/2 md:w-1/4'>
          <img 
            src={image2}
            alt="Fiscalité Logo"
            className='w-full h-auto transition-transform duration-500 hover:scale-110 hover:rotate-6 hover:animate-swing'
          />
        </div>
        
        {/* Texte de Fiscalité */}
        <div className='flex flex-col w-1/2 md:w-1/3 text-center md:text-left ml-8 md:ml-16'>
          <p className='font-bold text-[#1B263B] text-4xl transition-transform duration-500 hover:scale-105'>
            Fiscalité :
          </p>
          <p className='text-xl mt-4 transition-transform duration-500 hover:scale-105'>
            FT Consulting est un cabinet d’expertise-comptable basé à Alger. Nous fournissons des services de comptabilité, de gestion de la paie et de conseil fiscal à un portefeuille de clients étrangers et nationaux. Notre cabinet mobilise une équipe de professionnels pour vous accompagner tout au long de la vie de votre entreprise.
          </p>
          <img 
            src={line2}
            className='mt-28 h-8 w-96'
          />
        </div>
      </div>

      {/* Section 2: Fiscalité */}
      <div className='flex flex-row gap-16 md:space-x-24 pt-24 pb-12'>
        {/* Texte de Comptabilité */}
        <div className='flex flex-col w-1/2 md:w-1/3 text-center md:text-left ml-8 md:ml-16'>
          <p className='font-bold text-[#1B263B] text-4xl transition-transform duration-500 hover:scale-105'>
            Expertise :
          </p>
          <p className='text-xl mt-4 transition-transform duration-500 hover:scale-105'>
            FT Consulting est un cabinet d’expertise-comptable basé à Alger. Nous fournissons des services de comptabilité, de gestion de la paie et de conseil fiscal à un portefeuille de clients étrangers et nationaux. Notre cabinet mobilise une équipe de professionnels pour vous accompagner tout au long de la vie de votre entreprise.
          </p>
          <img 
            src={line1}
            className='mt-28 h-8 w-96'
          />
        </div>
        
        {/* Image de Comptabilité */}
        <div className='w-1/2 md:w-1/4'>
          <img 
            src={image3}
            alt="Comptabilité Logo"
            className='w-full h-auto transition-transform duration-500 hover:scale-110 hover:rotate-6 hover:animate-swing'
          />
        </div>
      </div>


      <div className='flex flex-row gap-16 md:space-x-24 pt-24 pb-24'>
        {/* Image de Fiscalité */}
        <div className='w-1/2 md:w-1/4'>
          <img 
            src={image4}
            alt="Fiscalité Logo"
            className='w-full h-auto transition-transform duration-500 hover:scale-110 hover:rotate-6 hover:animate-swing'
          />
        </div>
        
        {/* Texte de Fiscalité */}
        <div className='flex flex-col w-1/2 md:w-1/3 text-center md:text-left ml-8 md:ml-16'>
          <p className='font-bold text-[#1B263B] text-4xl transition-transform duration-500 hover:scale-105'>
          Conseillé :
          </p>
          <p className='text-xl mt-4 transition-transform duration-500 hover:scale-105'>
            FT Consulting est un cabinet d’expertise-comptable basé à Alger. Nous fournissons des services de comptabilité, de gestion de la paie et de conseil fiscal à un portefeuille de clients étrangers et nationaux. Notre cabinet mobilise une équipe de professionnels pour vous accompagner tout au long de la vie de votre entreprise.
          </p>
        </div>
      </div>
     </div>
    <Page4></Page4>
  </div>
    
  )
}

export default Services
