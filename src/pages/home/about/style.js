import styled from "styled-components";

export const AboutSectionCont = styled.div`
  padding-bottom: 4.895833333333333vw;

  .container_ {
    border: 0.052083333333333336vw solid #e2e2e2;
    border-bottom: 0;
    @media only screen and (max-width: 768px) {
      border: 0;
    }
    .flex {
      display: flex;
      @media only screen and (max-width: 768px) {
        flex-direction: column;
      }
    }
    .space {
      width: 40.416666666666664vw;
      padding: 1.6666666666666667vw;
      border-right: 0.052083333333333336vw solid #e2e2e2;
      @media only screen and (max-width: 768px) {
        width: 100%;
        border: 0;
        padding: 0;
        margin-top: 10.687022900763358vw;
      }
    }
    .full-img-bottom {
      margin-top: 1.25vw;
      width: 100%;
      height: 8vw;
      border-radius: 0.625vw;
      object-fit: cover;
      @media only screen and (max-width: 768px) {
        margin-top: 5.089058524173028vw;
        height: 50.89058524173028vw;
        border-radius: 2.625vw;
      }
    }
    .title {
      font-size: 1.25vw;
      @media only screen and (max-width: 768px) {
        font-size: 6.106870229007634vw;
      }
    }
    .prg {
      font-size: 0.7291666666666666vw;
      font-weight: 400;
      margin: 1.25vw 0;
      line-height: 150%;
      @media only screen and (max-width: 768px) {
        font-size: 3.5623409669211195vw;
        margin: 3.816793893129771vw 0;
      }
    }
    .row {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 1.0416666666666667vw;
      .link-btn {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        color: #fff;
        font-size: 0.7291666666666666vw;
        font-weight: 600;
        line-height: 140%;
        padding: 0.625vw 2.03125vw;
        background-color: #d9d9d9;
        &:nth-child(1) {
          background-color: #00132c;
        }
        &:nth-child(2) {
          color: #00132c;
        }
        @media only screen and (max-width: 768px) {
          font-size: 3.322900763358778vw;
          padding: 3.053435114503817vw 0;
          width: 50%;
        }
        &.icon {
          padding: 0.5729166666666666vw;
          border-radius: 50%;
          @media only screen and (max-width: 768px) {
            display: none;
          }
          svg {
            width: 1.0416666666666667vw;
            height: 1.0416666666666667vw;
          }
        }
      }
    }
    .column {
      display: flex;
      flex-direction: column;
    }
    .middle {
      width: 18.75vw;
      padding: 2.34375vw;
      border-right: 0.052083333333333336vw solid #e2e2e2;
      @media only screen and (max-width: 768px) {
        width: 100%;
      }
      .qr_code {
        width: 50%;
        height: auto;
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
      @media only screen and (max-width: 768px) {
        font-size: 3.053435114503817vw;
        margin-top: 2vw;
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

        @media only screen and (max-width: 768px) {
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
            @media only screen and (max-width: 768px) {
              width: 3.5623409669211195vw;
              height: 3.5623409669211195vw;
            }
          }
        }
      }
    }
    .card {
      width: 17.552083333333332vw;
      margin-right: 1.0416666666666667vw;
      display: flex;
      flex-direction: column;
      gap: 0.8333333333333334vw;
      margin-top: 0.7291666666666666vw;
      &.isLoading {
        min-height: 20vh;
      }
      @media only screen and (max-width: 768px) {
        width: 44.020356234096695vw;
        margin-right: 4.071246819338422vw;
        margin-top: 4.071246819338422vw;
        gap: 2.035623409669211vw;
      }
      iframe {
        width: 100%;
        height: 9.895833333333334vw;
        object-fit: cover;
        @media only screen and (max-width: 768px) {
          height: 24.818575063613235vw;
        }
      }

      .title_card {
        font-size: 0.9375vw;
        font-weight: 700;
        @media only screen and (max-width: 768px) {
          font-size: 3.053435114503817vw;
        }
      }
      .prg_card {
        font-size: 0.7291666666666666vw;
        font-weight: 400;
        @media only screen and (max-width: 768px) {
          font-size: 3.053435114503817vw;
        }
      }
    }
    .full-cards {
      width: 100%;
      border-top: 0.052083333333333336vw solid #e2e2e2;
      @media only screen and (max-width: 768px) {
        border: 0;
      }
    }
  }
`;
