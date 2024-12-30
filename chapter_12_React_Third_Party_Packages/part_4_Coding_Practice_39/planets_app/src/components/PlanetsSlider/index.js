// import Slider from 'react-slick'

// import PlanetItem from '../PlanetItem'

// import './index.css'

// const PlanetsSlider = props => {
//   const {planetsList} = props

//   return (
//     <div className="planets-app-container" data-testid="planets">
//       <h1 className="heading">PLANETS</h1>
//       <Slider>
//         {planetsList.map(eachPlanet => (
//           <PlanetItem key={eachPlanet.id} planetDetails={eachPlanet} />
//         ))}
//       </Slider>
//     </div>
//   )
// }

// export default PlanetsSlider


import React from 'react';
import Slider from 'react-slick';
import PlanetItem from '../PlanetItem';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.css';

const PlanetsSlider = props => {
  const { planetsList } = props;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="planets-app-container" data-testid="planets">
      <h1 className="heading">PLANETS</h1>
      <Slider {...settings}>
        {planetsList.map(eachPlanet => (
          <PlanetItem key={eachPlanet.id} planetDetails={eachPlanet} />
        ))}
      </Slider>
    </div>
  );
};

export default PlanetsSlider;

