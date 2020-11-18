import React from 'react';

import { Container, OptionsMenu } from './styles';

import sub from '../../assets/sub.svg';
import house from '../../assets/house.svg';
import fire from '../../assets/fire.svg';

import biblioteca from '../../assets/biblioteca.svg';
import time from '../../assets/time.svg';
import movies from '../../assets/movies.svg';
import videos from '../../assets/videos.svg';
import array from '../../assets/array.svg';


const SideBar = () => {
  return (
    <Container>
      <OptionsMenu>
        <ul>
          <li>
            <img src={house} alt=""/>
            Início
          </li>
          <li>
            <img src={fire} alt=""/>
            Em alta
          </li>
          <li>
            <img src={sub} alt="Subscribe"/>
            Inscrições
          </li>
        </ul>
      </OptionsMenu>

      <OptionsMenu>
        <ul>
          <li>
            <img src={biblioteca} alt=""/>
            Biblioteca
          </li>
          <li>
            <img src={time} alt=""/>
            Histórico
          </li>
          <li>
            <img src={videos} alt=""/>
            Seus vídeos
          </li>
          <li>
            <img src={movies} alt=""/>
            Seus filmes
          </li>
          <li>
            <img src={array} alt=""/>
            Assistir mais tarde
          </li>
        </ul>
      </OptionsMenu>

      <div>
        <h1>Mais vídeos</h1>
        <ul>
          <li>Youtube Premium</li>
          <li>Filmes</li>
          <li>Jogos</li>
          <li>Ao vivo</li>
          <li>Aprender</li>
        </ul>
      </div>

      <div>
        <ul>
          <li>Configurações</li>
          <li>Histórico de denúncias</li>
          <li>Ajuda</li>
          <li>Enviar feedback</li>
        </ul>
      </div>

      <div>
        <span>Sobre IMprensa</span>
        <span>Direitos autorais</span>
        <span>Entre em contato</span>
        <span>Criadores de conteúdo</span>
        <span>Publicidade Desenvolvedores</span>
        <p>© 2020 Google LLC</p>
      </div>
    </Container>
  );
};

export default SideBar;
