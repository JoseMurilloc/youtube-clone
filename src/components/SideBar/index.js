import { Container, OptionsMenu } from './styles';

import sub from '../../assets/sub.svg';
import house from '../../assets/house.svg';
import fire from '../../assets/fire.svg';

import biblioteca from '../../assets/biblioteca.svg';
import time from '../../assets/time.svg';
import movies from '../../assets/movies.svg';
import videos from '../../assets/videos.svg';
import array from '../../assets/array.svg';
import logoYoutube from '../../assets/logo-youtube.svg';
import logoGame from '../../assets/logo-game.svg';
import lamp from '../../assets/lamp.svg';
import live from '../../assets/ao-vivo.svg';
import setting from '../../assets/setting.svg'
import history from '../../assets/history.svg'
import help from '../../assets/help.svg'
import sendFeedback from '../../assets/send-feedback.svg'

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

      <OptionsMenu>
        <h1>Mais do youtube</h1>
        <ul>
          <li>
            <img src={logoYoutube} alt="Logo youtube"/>
            Youtube Premium
          </li>
          <li>
            <img src={movies} alt="Movies"/>
            Filmes
          </li>
          <li>
            <img src={logoGame} alt="Logo game"/>
            Jogos
          </li>
          <li>
            <img src={live} alt=""/>
            Ao vivo
          </li>
          <li>
            <img src={lamp} alt=""/>
            Aprender
          </li>
        </ul>
      </OptionsMenu>

      <OptionsMenu>
        <ul>
          <li>
            <img src={setting} alt="setting-icon" />
            Configurações
          </li>
          <li>
            <img src={history} alt="history-icon" />
            Histórico de denúncias
          </li>
          <li>
            <img src={help} alt="help-icon" />
            Ajuda
          </li>
          <li>
            <img src={sendFeedback} alt="send-feedback" />
            Enviar feedback
          </li>
        </ul>
      </OptionsMenu>

      <footer>
        <span>
          Sobre Imprensa<br/>
          Direitos autorais<br/>
          Entre em contato<br/>
          Criadores de conteúdo<br/>
          Publicidade Desenvolvedores<br/>
        </span>
        <p>Termos Privacidade Política e Segurança Como funciona o YouTube Testar os novos recursos</p>
        <br/>
        <span>© 2020 Google LLC</span>
      </footer>
    </Container>
  );
};

export default SideBar;
