import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #212121;
  position: fixed;

  padding: 0 30px;

  height: 60px;
  width: 100%;

  > div {
    /* background-color: green; */
    width: 184px;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  form input {
    background-color: black;
    border: 1px solid #323232;
    width: 500px;
    height: 30px;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: #fff;
    padding: 0 10px;
  }

  form button {
    width: 65px;
    height: 30px;
    background-color: #323232;
    border: none;
  }

  div img {
    width: 30px;
    border-radius: 20px;
  }
`;

export const YoutubeLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    font-size: 18px;
    font-weight: bold;
  }
`;

export const AppImg = styled.img`
  border-radius: 0 !important;
  width: 20px !important;
`;