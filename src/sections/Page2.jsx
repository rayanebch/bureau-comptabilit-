import React from 'react'
import image from "../assets/images/image.png";
const Page2 = () => {
  return (
    <div className='w-full flex gap-52 pb-24'>
      <div className='flex flex-col w-1/3 pt-28 gap-12 ml-48'>
        <p className='font-bold text-4xl'>Qui sommes-nous ?</p>
        <p className='text-xl'>FT Consulting est un cabinet d’expertise-comptable basé à Alger. Nous fournissons des services de comptabilité, de gestion de la paie et de conseil fiscal à un portefeuille de clients étrangers et nationaux. Notre cabinet mobilise une équipe de professionnels pour vous accompagner tout au long de la vie de votre entreprise.</p>
      </div>
      <img 
        src={image}
        alt="logo"
        className='w-1/4 h-1/2 mt-24'
      />
    </div>
  )
}

export default Page2
