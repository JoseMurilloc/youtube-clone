import React from 'react';

import { 
  Container,
  CardImageVideo,
  ProfileAndTitle
} from './styles';

const CardVideo = () => {
  return (
    <Container>
        <CardImageVideo 
          src="https://i.ytimg.com/vi/7yyW7z8fbB4/maxresdefault.jpg" 
          alt="imagem video"
        />  
      <ProfileAndTitle>
        <img 
          src="https://yt3.ggpht.com/a/AATXAJz-oJY2C2N2gxv09ri8u0twlKqtaeQJTVYixpDh0w=s900-c-k-c0x00ffffff-no-rj" 
          alt="Perfil do canal"
        />
        <h1>APP CODE REVIEW DO APP MOBILE</h1>
      </ProfileAndTitle>
      <span>Rocketseat</span>
      <span>11k Views</span>

    </Container>
  );
};

export default CardVideo;
