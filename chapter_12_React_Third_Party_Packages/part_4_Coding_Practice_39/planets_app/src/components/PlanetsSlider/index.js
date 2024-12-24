import React from 'react';
import './index.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const PlanetsSlider = ({ planetsList }) => {
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
      <div className="slider-container">
          <h1>Planntes</h1>
      <Slider {...settings}>
        {planetsList.map((item) => (
          <div key={item.id}>
            <div>
              <img src={item.imageUrl} alt={item.name} className="image" />
            </div>
            <div className="details">
              <h1>{item.name}</h1>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PlanetsSlider;
