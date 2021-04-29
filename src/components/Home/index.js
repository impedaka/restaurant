import React from 'react';
import {
  HomeContainer,
  HomeContent,
  HomeItems,
  HomeH1,
  HomeP,
  HomeBtn
} from './HomePage';
import {Link} from 'react-router-dom';
//homepage
const Home = () => {
  return (
    <HomeContainer>
      <HomeContent>
        <HomeItems>
          <HomeH1>Sushi 🍣 Restaurant</HomeH1>
          <HomeP>delicious sushi</HomeP>
          <Link to ="/menu">
          <HomeBtn>PLACE ORDER NOW</HomeBtn>
          </Link>
        </HomeItems>
      </HomeContent>
    </HomeContainer>
  );
};

export default Home;