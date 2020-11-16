import React from 'react';

import { 
  Container,
  Header,
  YoutubeLogo,
  Main
} from './styles';

import { GoThreeBars } from 'react-icons/go';
import { SiYoutube } from 'react-icons/si';
import { ImSearch } from 'react-icons/im';
import { MdNotifications } from 'react-icons/md';

import SideBar from '../../components/SideBar';
import CardVideo from '../../components/CardVideo';

const Home = () => {
  return (
    <Container>
      <Header>
        <div>
          <GoThreeBars color="#fff" size={25} />
          <YoutubeLogo>
            <SiYoutube color="#fe0000" size={30} />
            <span>Youtube</span>   
          </YoutubeLogo>
        </div>

        <form>
          <input type="text"/>
          <button>
            <ImSearch size={15} color="#585858" />
          </button>
        </form>

        <div>
          <MdNotifications size={25} color="#fff" />
          <MdNotifications size={25} color="#fff" />
          <MdNotifications size={25} color="#fff" />
          <img src="https://avatars0.githubusercontent.com/u/43470555?s=460&u=d5a88d8aa43e4fc0f53a417320d1cc6fb4fc13d5&v=4" alt="Profile"/>
        </div>
      </Header>
      <Main>
        <SideBar />
        <CardVideo />
      </Main>
    </Container>
  );
};

export default Home;
