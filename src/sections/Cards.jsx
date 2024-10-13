import React from "react";
import Slider from "react-slick";
import TestimonialCard from '../components/TestimonialCard';
import SingleCard from '../components/SingleCard';
import bgImg from '../assets/tes.svg';

const BgImg = {
  backgroundImage: `url(${bgImg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  height: '550px',
};

const Cards = () => {
  return (
    <div className="w-full h-full bg-black">
      <div >
        <div className="border-2 h-full mx-8 py-12 overflow-hidden flex justify-center">
          <div className="w-full sm:w-1/2 md:w-1/3 p-2"> {/* Responsive classes */}
            <SingleCard />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 p-2"> {/* Responsive classes */}
            <SingleCard />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 p-2"> {/* Responsive classes */}
            <SingleCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
