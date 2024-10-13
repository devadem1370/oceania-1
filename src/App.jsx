import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Cards from './sections/Cards';
import BgImg from "./assets/hero.jpg";
import Testimonial from './sections/Testimonial'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from './sections/Footer';

const bgImg = {
  backgroundImage: `url(${BgImg})`,
  backgroundSize: 'cover', // Use 'contain' to ensure the full image is visible
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat', // Prevent the image from repeating
  height: '950px' ,
  // or any height you prefer
};

const App = () => {
  return (
    <> <div style={bgImg}>
    <Navbar />
    <Hero />
  </div>
  <Cards/>
  <Testimonial/>
  <Footer/>



   </>
)
   
   
}

export default App;
