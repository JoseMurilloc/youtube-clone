import React from 'react';

import { 
  Container,
  Main
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
        <CardVideo />
      </Main>
    </Container>
  );
};

export default Home;
