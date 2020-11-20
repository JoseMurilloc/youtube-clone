import styled from 'styled-components';

export const Container = styled.div`
  > img {
    width: 250px;
    height: 150px;
    margin-bottom: 10px;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
  }


  div img {
    width: 35px;
    height: 35px;
    border-radius: 100%;
    background-size: cover;
  }

  div h1 {
    width: 200px;
    height: 43px;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
  }


  span {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;

    color: #949494;
    margin-left: 65px;
  }
`;

export const ContainerLive = styled.div`
  font-size: 12px;
  line-height: 14px;

  display: flex;
  justify-content: center;
  align-items: center;
 
  width: 100px !important;
  margin-left: 65px !important;
  margin-top: 10px !important;
  height: 23px;

  border: 1px solid #D51D1D;
  color: #D51D1D;
`;