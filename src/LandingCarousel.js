import React from 'react';
import Carousel from './Carousel';
import './LandingCarousel.css'

const LandingCarousel = () => {
  const slides = [
    {
      image: 'assets/land_921750d154.webp',
      text: <div> 
              <h1>Providing Smart Security Solutions</h1>
              <p>Be confident about our ability to help protect you, your family, home, business and other vital assets from every security threat.</p>
            </div>,
    },
    {
      image: 'assets/hmmm_df145491e9.jpg',
      text: <div> 
              <h1> A Premium, Security Risk Centre of Excellence</h1>
              <p>We enable achievement by eliminating security related anxieties and enabling an environment of sustainable safety.</p>
            </div>,
    },
    {
      image: 'assets/land2_26cba00e88.jpg',
      text: <div> 
              <h1>Welcome to HALOGEN</h1>
              <p>We are a premium, innovation led, technology centred security risk solutions group. We combine deep knowledge of security risk management & global best practice asset protection knowhow with comprehensive & unrivalled understanding of the local terrain.</p>
            </div>,
    },
  ];

  return (
    <div id='LP'>
      <Carousel slides={slides} />
    </div>
  );
};

export default LandingCarousel;