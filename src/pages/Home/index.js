import React from 'react';

import { 
  Container,
  Main,
  CardVideoGrid
} from './styles';

import Header from '../../components/Header';

import SideBar from '../../components/SideBar';
import CardVideo from '../../components/CardVideo';

const Home = () => {
  return (
    <Container>
      <Header />
      <Main>
        <SideBar />
          <CardVideoGrid>
              <CardVideo live={true} />
              <CardVideo />
              <CardVideo live={true}/>
              <CardVideo />
          </CardVideoGrid>
      </Main>
    </Container>
  );
};

export default Home;
