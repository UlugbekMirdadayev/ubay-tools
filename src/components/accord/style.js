import styled from "styled-components";

export const AccordStyled = styled.div`
  border-top: 0.052083333333333336vw solid #e2e2e2;
  @media only screen and (max-width: 768px) {
    border-top: 0;
    margin-top: 4.071246819338422vw;
  }

  .accordion {
    padding: 1.25vw 2.4479166666666665vw;
    width: 100%;
    transition: 0.4s;
    border: 0;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;

    @media only screen and (max-width: 768px) {
      background: #015ccf;
      padding: 1.5267175572519085vw 2.035623409669211vw;
    }

    svg {
      width: 1.1458333333333333vw;
      height: 1.1458333333333333vw;

      @media only screen and (max-width: 768px) {
        width: 5.343511450381679vw;
        height: 5.343511450381679vw;
        path {
          stroke: #fff;
          fill: #fff;
        }
      }
    }

    span {
      text-align: left;
      font-weight: 700;
      font-size: 0.9375vw;
      @media only screen and (max-width: 768px) {
        font-size: 3.5623409669211195vw;
        color: #fff;
      }
    }
  }
  .panel {
    padding: 0 2.4479166666666665vw;
    background-color: white;
    max-height: 0;
    font-weight: 500;
    overflow: hidden;
    transition: max-height 0.2s ease-out;
    font-size: 0.9291666666666666vw;
    line-height: 1.1666666666666667vw;
    transition: 300ms ease;
    margin-bottom: 0px;
    @media only screen and (max-width: 768px) {
      background-color: #ffda00;
      font-size: 3.5623409669211195vw;
      padding: 0 2.2900763358778624vw;
      line-height: 150%;
    }

    &.open {
      margin-bottom: 20px;
      @media only screen and (max-width: 768px) {
        margin-bottom: 0;
      }
    }
  }
`;
