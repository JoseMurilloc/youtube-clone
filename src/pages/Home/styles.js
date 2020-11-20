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
  margin-top: 30px;
  /* justify-content: center; */

  width: 100%;
  height: 100%;

  /* background-color: purple; */


  div {
    margin: 0 10px;
  }
`;