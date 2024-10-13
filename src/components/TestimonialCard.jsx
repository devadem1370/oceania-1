import React from 'react';
import profile1 from '../assets/profile1.png';

const TestimonialCard = () => {
  return (
    <div className='w-[285px] h-[420px] backdrop-blur-md flex flex-col items-center '> {/* Added background and rounded corners */}
      <img src={profile1} alt="" className='pt-2' />
      <p className='text-center py-9 font-normal text-[21px] md:text-sm md:px-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <p className='font-bold text-lg'>Emaan Fatima</p>
    </div>
  );
};

export default TestimonialCard;
