import styled from "styled-components";

export const NotFoundStyled = styled.section`
  width: 100%;
  height: 100%;
  display: grid;
  place-content: center;
  text-align: center;
  gap: 0.5208333333333334vw;
  @media only screen and (max-width: 768px) {
    gap: 2.544529262086514vw;
  }
  img {
    width: 34.479166666666664vw;
    height: 23.90625vw;
    object-fit: contain;
    margin: 0 auto;
    @media only screen and (max-width: 768px) {
      width: 80vw;
      height: auto;
    }
  }
  p {
    color: #015ccf;
    font-size: 1.6666666666666667vw;
    font-weight: 700;
    text-transform: capitalize;
    @media only screen and (max-width: 768px) {
      font-size: 5.089058524173028vw;
    }
  }
  a {
    border-radius: 1.59890625vw;
    background: #015ccf;
    padding: 0.5208333333333334vw 1.3020833333333333vw;
    color: #fff;
    font-size: 1.1286458333333333vw;
    font-weight: 500;
    display: inline-flex;
    width: max-content;
    margin: 0 auto;
    gap: 0.5208333333333334vw;
    align-items: center;
    line-height: 1.5625vw;

    @media only screen and (max-width: 768px) {
      font-size: 4.071246819338422vw;
      line-height: 5.089058524173028vw;
      gap: 2.544529262086514vw;
      padding: 2.544529262086514vw 4.071246819338422vw;
      border-radius: 5.089058524173028vw;
    }

    svg {
      width: 1.9779687499999998vw;
      height: 1.5625vw;
      @media only screen and (max-width: 768px) {
        width: 7.633587786259542vw;
        height: 5.089058524173028vw;
      }
    }
  }
`;
