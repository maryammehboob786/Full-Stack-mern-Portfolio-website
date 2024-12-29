import React from 'react'
import maryam from '../../assets/maryam.jpg';

const Hero = () => {
  return (
    <div className='flex items-center flex-col gap-[15px]'>
        <img src={maryam} alt="Maryam's Image" className="w-60 h-60 rounded-full" />

        <h1 className="text-[40px] text-center w-[80%] font-semibold">
        <span className="bg-gradient-to-r from-[#DF8908] to-[#B415FF] bg-clip-text text-transparent">I'm Maryam Mehboob</span>, full stack Developer based in Pakistan
        </h1>
        <p className='text-[18px] text-center w-[60%] leading-[30px]'>Maryam Mehboob is a talented WordPress web developer with over three years of experience in building custom websites and digital solutions.</p>
        <div className='flex items-center flex-row gap-[20]'>
            <div className="p-[20px] py-[10px] mx-[5px] rounded-[50px] text-[15px] cursor-pointer transition-transform duration-500 ease-in-out transform hover:scale-105" style={{ background: 'linear-gradient(267deg, #DA7C25 0.36%, #B923E1)' }}>     Connect with me</div>
            <div className="p-[20px] py-[10px] rounded-[50px] text-[15px] text-white cursor-pointer border-2 border-white transition-transform duration-500 ease-in-out transform hover:scale-105">My Portfolio</div>

            
        </div>
    </div>
  )
}

export default Hero