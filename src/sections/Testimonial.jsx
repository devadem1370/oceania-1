import React from "react";
import Slider from "react-slick";
import TestimonialCard from '../components/TestimonialCard';
import bgImg from '../assets/tes.svg';

const BgImg = {
  backgroundImage: `url(${bgImg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  height: '550px',
};

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Medium screens (md)
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Small screens (sm)
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-black px-7 sm:px-8 md:px-10 lg:px-36">
      <div style={BgImg}>
        <Slider {...settings} className="pt-16 text-white">
          <div>
            <TestimonialCard />
          </div>
          <div>
            <TestimonialCard />
          </div>
          <div>
            <TestimonialCard />
          </div>
          <div>
            <TestimonialCard />
          </div>
          <div>
            <TestimonialCard />
          </div>
        </Slider>
      </div>
    </div>
  );
}
