import { styled } from "styled-components";

export const OurAddressStyled = styled.section`
  width: 80vw;
  margin: 0 auto;
  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 0 4.325699745547074vw;
  }
  ul {
    display: grid;
    gap: 0.8333333333333334vw;
    @media only screen and (max-width: 768px) {
      gap: 2.5vw;
    }
    li {
      display: flex;
      align-items: center;
      gap: 0.5208333333333334vw;
      cursor: alias;
      width: max-content;
      padding: 0.5vw;
      border-radius: 0.2vw;

      @media only screen and (max-width: 768px) {
        gap: 2.5vw;
      }

      &:hover {
        background-color: #015ecf22;
        span {
          color: #015ccf;
        }
        svg {
          stroke: #015ccf;
        }
      }

      span {
        font-size: 0.9375vw;
        color: #000;
        font-weight: 500;
      
        @media only screen and (max-width: 768px) {
          font-size: 3.5623409669211195vw;
          line-height: 1.071246819338422vw;
        }
      }

      svg {
        width: 1.1458333333333333vw;
        height: 1.1458333333333333vw;
        @media only screen and (max-width: 768px) {
          width: 4vw;
          height: 4vw;
        }
      }
    }
  }
`;
