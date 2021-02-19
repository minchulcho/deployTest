import React from 'react';
import MainPage from '../../MainPage';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import Pricing from '../../Pricing';
  //<MainPage {...homeObjThree} />
  //<Pricing />
  //<MainPage {...homeObjFour} >
function Home() {
  return (
    <>
      <MainPage {...homeObjOne} />
      <MainPage {...homeObjTwo} />
      <MainPage {...homeObjThree} />
    </>
  );
}

export default Home;
