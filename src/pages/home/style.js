import styled from "styled-components";

export const ScrollAreaView = styled.div`
  width: 83vw;
`;

const HomeStyled = styled.main`
  display: flex;
  padding: 1.5vw 0;
  flex: 1;
  article {
    width: 17vw;
    margin-right: 2.4479166666666665vw;
    border-right: 0.052083333333333336vw solid #e2e2e2;
    border-top: 0.052083333333333336vw solid #e2e2e2;
    position: sticky;
    top: 0;
    height: 100%;

    .title-c {
      padding: 1.1979166666666667vw 2.5vw;
      border-bottom: 0.052083333333333336vw solid #e2e2e2;
      font-size: 0.9375vw;
    }
    ul {
      padding: 1.1979166666666667vw 2.5vw;
      height: 100%;

      a {
        color: #000;
        font-size: 0.7vw;
        margin-bottom: 1vw;
        font-weight: 500;
        display: flex;
      }
    }
  }
`;

export default HomeStyled;
