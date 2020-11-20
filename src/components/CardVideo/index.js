import React from 'react';

import { 
  Container,
  ContainerLive
} from './styles';

import check from '../../assets/check.svg';

const CardVideo = ({ live=false}) => {
  return (
    <Container>
      <img src="https://i.ytimg.com/vi/racmy7Y9P4M/maxresdefault.jpg" alt="Thumbmail"/>
      <div>
        <img src="https://yt3.ggpht.com/ytc/AAUvwngNqcWYtovTnQmfwAfoFnssxeV-EI-b-v0aKAbqKQ=s88-c-k-c0x00ffffff-no-rj" alt="profile"/>
        <h1>Bring Me The Horizon - Parasite Eve (Official Video)</h1>
      </div>
      <span>
        Bring Me The Horizon
        <img src={check} alt=""/>
      </span> <br/>
      <span>100 mil visualizações</span> <br/>
      
      {live ? (
        <ContainerLive>AO VIVO AGORA</ContainerLive>
      ) : (
        <span>hás 2 horas</span>
      )}

    </Container>
  );
};

export default CardVideo;
