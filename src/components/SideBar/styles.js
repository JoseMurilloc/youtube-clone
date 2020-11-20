import styled from 'styled-components';

export const Container = styled.div`
  background-color: #212121;
  height: 91vh;
  width: 240px;
  overflow: auto;

  div {
    border-bottom: 1px solid #383838;
  }

  footer {

    width: 158px;
    height: 165px;

    font-weight: 500px;
    font-weight: bold;
    font-size: 13px;
    line-height: 15px;

    color: #343434;
    margin-bottom: 10px;
  }

  footer span {
    margin-top: 37px;
    font-weight: bold;
    font-size: 13px;
    line-height: 15px;

    color: #FFFFFF; 
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
