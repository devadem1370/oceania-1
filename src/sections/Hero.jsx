import React, { useEffect, useState } from 'react';
import BlurCard from '../components/BlurCard';
import Arrow from '../assets/Arrow.png';

const Hero = () => {
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasLoaded(true);
    }, 100); // Delay before showing the elements
    return () => clearTimeout(timer);
  }, []);

  return (
    <header className='flex flex-col w-full md:flex-row lg:pl-[150px] lg:pr-[125px]'>
      <div className={`text-center px-6 py-12 text-white text-[32px] font-bold md:w-1/2 ${hasLoaded ? 'slide-in' : ''}`}>
        <div className='md:pr-20 md:text-left'>
          <h1 className={`text-[32px] sm:text-7xl md:w-[421px] lg:w-full ${hasLoaded ? 'slide-in' : ''}`}>Discover the water</h1>
          <p className={`text-white text-2xl font-normal py-9 md:w-[421px] ${hasLoaded ? 'slide-in' : ''}`}>
            From pristine waters to majestic forests... we have it all
          </p>
          <div className="hidden md:hidden lg:block w-[340px] h-[0px] origin-top-left rotate-[90.24deg] bg-[#d9d9d9] border border-[#d9d9d9]"></div>
          <p className={`text-silver font-semibold text-2xl md:w-[421px] lg:mt-80 lg:ml-44 ${hasLoaded ? 'slide-in' : ''}`}>Start your Journey Today</p>
          <img src={Arrow} alt="" className={`mt-[-18px] hidden lg:block ${hasLoaded ? 'slide-in' : ''}`} />
        </div>
      </div>
      <div className={`backdrop-blur-lg px-6 py-12 md:w-1/2 lg:mt-20 ${hasLoaded ? 'slide-in' : ''}`}>
        <div className="sm:px-8 ">
          <BlurCard heading="Saltwater Fishing" paragraph="Love fishing? With some of the best spots available year-round, from coastline to the deep sea, you won’t be short for choice." />
          <BlurCard heading="Marine Snorkelling" paragraph="Go deep sea diving in some of the most pristine waters on the planet, from Costa Rica and the Canary Islands to Hawaii and Thailand." />
          <BlurCard heading="All-Day Parasailing" paragraph="Glide through the wide open, fresh air overlooking gorgeous open bodies of ocean water to sun-swept vistas and woodland hills." />
        </div>
      </div>
    </header>
  );
}

export default Hero;
