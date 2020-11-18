import styled from 'styled-components';

export const Container = styled.div`
  background-color: #212121;
  height: 100vh;
  width: 240px;

  div {
    border-bottom: 1px solid #383838;
  }

  div span {
    font-weight: 500px;
    color: #343434;
  }
`;

export const OptionsMenu = styled.div`
  border-bottom: 1px solid #383838;

  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: #fff;


  li {
    display: flex;
    align-items: center;
    height: 40px;
    padding: 0 20px;

    img {
      margin-right: 20px; 
    }
  }


  /* background-color: red; */
`;
