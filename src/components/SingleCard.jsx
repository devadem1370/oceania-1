import React from 'react';
import Img from '../assets/cardImg.png'

const TestimonialCard = () => {
  return (
    <div className='flex justify-center'> {/* Centering the card container */}
      <div className='w-[285px] h-[420px] flex flex-col px-2 '>
        <img src={Img} alt="Profile" className='pt-2' />
       <h1 className='font-bold text-4xl leading-6 mt-8 text-center text-white'>Punta Monita</h1>
        <p className=' font-normal text-[18px] text-center mt-8 text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
     <p className="font-semibold text-xl text-center mt-8 text-white">from $399 pp</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
 