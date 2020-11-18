import styled from 'styled-components';

export const Container = styled.div`
  > img {
    width: 250px;
    height: 150px;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }


  div img {
    width: 35px;
    height: 35px;
    border-radius: 100%;
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
  }
`;
