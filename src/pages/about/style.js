import styled from "styled-components";

export const AboutStyled = styled.section`
  .flex {
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 768px) {
      flex-direction: column;
      padding: 0 4.071246819338422vw;
    }
  }
  .space {
    width: 60vw;

    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }
  .title {
    font-size: 1.4583333333333333vw;
    margin-bottom: 1.1979166666666667vw;
    @media screen and (max-width: 768px) {
      font-size: 7.124681933842239vw;
      margin-bottom: 3.053435114503817vw;
      margin-top: 2.2900763358778624vw;
    }
  }
  .prg {
    font-size: 0.7291666666666666vw;
    line-height: 140%;
    margin-bottom: 1.1979166666666667vw;
    @media screen and (max-width: 768px) {
      font-size: 3.5623409669211195vw;
      margin-bottom: 3.053435114503817vw;
    }
  }
  .link-btns {
    display: flex;
    flex-direction: column;
    margin-top: 3.2395833333333335vw;
    a {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      padding: 0.8854166666666666vw 1.5vw;
      font-size: 1.0416666666666667vw;
      border-radius: 0.7871875vw;

      @media screen and (max-width: 768px) {
        width: 100%;
        padding: 5.089058524173028vw 0;
        font-size: 5.089058524173028vw;
      }

      &.primary {
        background-color: #015ccf;
        color: #fff;
        font-weight: 600;
      }
      &.secondary {
        background-color: #ffda00;
        box-shadow: -8px 9px 47px 0px rgba(255, 218, 0, 0.3);
        color: #1d2e75;
        font-weight: 700;
        rotate: 4.461deg;
        z-index: 2;

        svg {
          width: 0.7291666666666666vw;
          height: 0.7291666666666666vw;
          @media screen and (max-width: 768px) {
            width: 3.5623409669211195vw;
            height: 3.5623409669211195vw;
          }
        }
      }
    }
  }
  .middle {
    width: 15vw;
    padding: 2.34375vw 0;
    @media screen and (max-width: 768px) {
      width: 72.64758269720102vw;
      margin: 0 auto;
      margin-top: 10vw;
    }
    .grid {
      display: grid;
      grid-template-columns: 5vw 8vw;
      justify-content: space-between;
      @media screen and (max-width: 768px) {
        grid-template-columns: 50% 50%;
      }
      .qr_code {
        width: 5.520833333333333vw;
        height: 5.520833333333333vw;
        @media screen and (max-width: 768px) {
          width: 100%;
          height: auto;
        }
      }
    }
  }
  .text-3 {
    font-family: "SF Pro Display";
  }
  .text-small {
    font-family: "SF Pro Display";
    font-size: 0.625vw;
    margin-top: 0.625vw;
    display: inline-flex;
    color: #000;
    text-decoration-line: underline;
    @media screen and (max-width: 768px) {
      font-size: 3.053435114503817vw;
      margin-top: 2vw;
    }
  }
  .full-img-bottom {
    width: 100%;
    height: 14.0625vw;
    border-radius: 1.25vw;
    object-fit: cover;
    @media screen and (max-width: 768px) {
      padding: 4.071246819338422vw;
      height: 40.20356234096692vw;
      border-radius: 0;
    }
  }
  .row {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1.0416666666666667vw;
    @media screen and (max-width: 768px) {
      flex-wrap: wrap;
      justify-content: center;
      gap: 7vw 4.071246819338422vw;
    }
    .link-btn {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      color: #015ccf;
      font-size: 0.7291666666666666vw;
      font-weight: 400;
      line-height: 140%;
      padding: 0.625vw 2.03125vw;
      background-color: rgb(217 217 217 / 30%);
      border-radius: 1.1197916666666667vw;
      &:nth-child(1) {
        color: #fff;
        background: #015ccf;
      }
      @media screen and (max-width: 768px) {
        padding: 2.7989821882951653vw;
        font-size: 3.367684478371501vw;
        width: 43vw;
      }
      &.icon {
        padding: 0.5729166666666666vw;
        border-radius: 50%;
        @media screen and (max-width: 768px) {
          width: 12.43994910941476vw;
          height: 12.43994910941476vw;
          padding: 3.053435114503817vw;
        }
        svg {
          width: 1.0416666666666667vw;
          height: 1.0416666666666667vw;
          @media screen and (max-width: 768px) {
            width: 100%;
            height: 100%;
          }
          path {
            fill: #015ccf;
          }
        }
      }
    }
  }
`;
