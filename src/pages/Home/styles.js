import styled from 'styled-components';

export const Container = styled.div`

`;

export const Main = styled.div`
  display: flex;
`;

export const CardVideoGrid = styled.div`
  display: grid; 
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;  
  grid-gap: 10px; 
  margin-top: 90px;

  margin-left: 225px;

  height: 100%;

  /* background-color: purple; */


  div {
    margin: 0 10px;
  }
`;