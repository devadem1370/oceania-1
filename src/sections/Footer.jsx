import React from 'react';
import Logo from '../assets/logo.png';
import Tw from '../assets/twitter.png';
import fb from '../assets/fb.png';
import Yt from '../assets/youtube.png';
import Pin from '../assets/Pin.png';
import Insta from '../assets/insta.png';

const Footer = () => {
  return (
    <div className="bg-black text-white px-4 py-6">
      <div className="flex flex-col items-center mb-7">
        <div className="flex items-center justify-center mb-3">
          <img src={Logo} alt="Oceania Logo" width={40} height={40} />
          <div className='font-bold text-3xl text-silver ml-3'>Oceania</div>
        </div>
      </div>

      <div className="flex flex-col items-center mb-10">
        <span className='font-normal text-sm mt-3 text-center'>1 The Marina</span>
        <span className='font-normal text-sm mt-3 text-center'>Lakeside</span>
        <span className='font-normal text-sm mt-3 text-center'>Oceanvile</span>
        <span className='font-normal text-sm mt-3 text-center'>STATE</span>
        <span className='font-normal text-sm mt-3 text-center'>xxxxxx-xxxxx</span>
      </div>

      <div className="flex flex-col sm:flex-row mt-10 gap-8 justify-center text-center">
        <div className="flex flex-col px-3 flex-1">
          <h1 className='border-b-2 pb-2 text-lg font-semibold'>About & Support</h1>
          <div className='flex flex-col gap-2 mt-2'>
            <span>Home</span>
            <span>Tour</span>
            <span>Pricing</span>
            <span>Contact & Support</span>
            <span>FAQs</span>
          </div>
        </div>

        <div className="flex flex-col px-3 flex-1">
          <h1 className='border-b-2 pb-2 text-lg font-semibold'>Deals</h1>
          <div className='flex flex-col gap-2 mt-2'>
            <span>Travel Blog</span>
            <span>Subscription</span>
            <span>Popular Destination</span>
            <span>Last Minute Package</span>
            <span>Site Map</span>
          </div>
        </div>

        <div className="flex flex-col px-3 flex-1">
          <h1 className='border-b-2 pb-2 text-lg font-semibold'>Legal</h1>
          <div className='flex flex-col gap-2 mt-2'>
            <span>Terms & Conditions</span>
            <span>Privacy Statement</span>
            <span>Cookie Policy</span>
            <span>Disclaimer</span>
            <span>Payment Options</span>
          </div>
        </div>
      </div>

      <div className="pt-10 flex flex-col items-center justify-center">
        <div className="text-center mb-4">
          <p>Sign Up to receive 10% off your first package deal*</p>
        </div>
        <div className="">
          <div className="flex items-center justify-center pt-3 gap-6">
            <input
              type="email"
              placeholder='Email Address'
              className="bg-transparent border-b border-white text-white pb-3 text-center placeholder-white focus:outline-none w-64 lg:w-80"
            />
            <button className="mt-2 text-white px-4 py-1 border-white border-2 cursor-pointer rounded">Submit</button>
          </div>
          <div className="flex items-center justify-center mt-2">
            <input
              type="checkbox"
              id="gdpr-checkbox"
              className="mr-2 h-5 w-5"
            />
            <label htmlFor="gdpr-checkbox" className="text-sm ">
              GDPR Statement
            </label>
          </div>
          
          <p className="text-xs text-center mt-6">
            *Offer valid for a certain period and only on particular packages. T&Cs apply.
          </p>
        </div>
      </div>
      
      <div className="flex justify-center mt-4 gap-8">
        <img src={Tw} alt="Twitter" className="h-8 w-8 object-contain" />
        <img src={fb} alt="Facebook" className="h-8 w-8 object-contain" />
        <img src={Insta} alt="Instagram" className="h-8 w-8 object-contain" />
        <img src={Yt} alt="YouTube" className="h-8 w-8 object-contain" />
        <img src={Pin} alt="Pinterest" className="h-8 w-8 object-contain" />
      </div>
    </div>
  );
}

export default Footer;
