import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #181818;
    color: #ffffff;
    font-size: 13px;
    font-family: Roboto, sans-serif;
  }

  ::-webkit-scrollbar {
    width: 5px;    
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #383838; 
    border-radius: 10px;
  }

  /* Handle on hover #212121 */
  ::-webkit-scrollbar-thumb:hover {
    background: #383838; 
  }

`;