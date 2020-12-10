import { GoThreeBars } from 'react-icons/go';
import { SiYoutube } from 'react-icons/si';
import { ImSearch } from 'react-icons/im';
import { MdNotifications } from 'react-icons/md';

import cameraPlus from '../../assets/camera_plus.svg';
import app from '../../assets/app.svg';

import { Container, YoutubeLogo, AppImg } from './styles';

const Header = () => {
  return (
    <Container>
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
        <img src={cameraPlus} alt="Plus"/>
        <AppImg src={app} alt="App"/>
        <MdNotifications size={25} color="#fff" />
        <img src="https://avatars0.githubusercontent.com/u/43470555?s=460&u=d5a88d8aa43e4fc0f53a417320d1cc6fb4fc13d5&v=4" alt="Profile"/>
      </div>
  </Container>
  );
};

export default Header;
