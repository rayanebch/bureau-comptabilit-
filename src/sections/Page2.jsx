import React from 'react';
import image from "../assets/images/image.png";

const Page2 = () => {
  return (
    <div
      id="apropos"
      className="w-full flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-20 lg:gap-52 p-4 md:pb-24"
    >
      <div className="flex flex-col w-full md:w-2/3 lg:w-1/3 pt-10 md:pt-28 gap-4 md:gap-8 lg:gap-12 ml-0 md:ml-12 lg:ml-48">
        <p className="font-bold text-2xl md:text-3xl lg:text-4xl transition-transform duration-500 hover:scale-105">
          Qui sommes-nous ?
        </p>
        <p className="text-sm md:text-lg lg:text-xl transition-transform duration-500 hover:scale-105">
        Bureau Bediaf Conseil et Comptabilité est un cabinet basé à Alger, Hussein Dey, spécialisé dans la comptabilité, la fiscalité, et l'expertise judiciaire. Avec plus de 32 ans d'expérience, nous accompagnons nos clients dans toutes les phases de développement de leur entreprise, en leur offrant des services de qualité et des conseils personnalisés.
        </p>
      </div>
      <img
        src={image}
        alt="logo"
        className="w-3/4 md:w-1/3 lg:w-1/4 h-auto mt-8 md:mt-24 transition-transform duration-500 hover:scale-110 hover:rotate-6"
      />
    </div>
  );
};

export default Page2;
