import React from 'react';

import { 
  Container
} from './styles';

import linkparkthumb from '../../assets/linkparkthumb.svg';
import check from '../../assets/check.svg';

const CardVideo = () => {
  return (
    <Container>
      <img src={linkparkthumb} alt="Thumbmail"/>
      <div>
        <img src="https://i.pinimg.com/originals/c8/a5/39/c8a53946edee70b5af7208ed3e898981.jpg" alt="profile"/>
        <h1>Numb (Official Video) - Linkin Park</h1>
      </div>
      <span>
        Linkin Park
        <img src={check} alt=""/>
      </span> <br/>
      <span>100 mil visualizações hás 2 horas</span>
    </Container>
  );
};

export default CardVideo;
