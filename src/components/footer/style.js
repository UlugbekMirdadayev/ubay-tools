import styled from "styled-components";

export const FooterStyled = styled.footer`
  width: 80vw;
  margin-top: 3.125vw;
  margin-left: auto;
  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 4.071246819338422vw;
  }
  &.isNight {
    a,
    .mini-list span,
    .copyright span,
    .title_link {
      color: #fff !important;
    }
    .payments img {
      mix-blend-mode: plus-lighter;
    }
  }
  .desc {
    color: #999;
    font-family: Roboto;
    font-size: 0.95vw;
    line-height: 1vw;
    font-weight: 400;
    padding: 0 3.6458333333333335vw;
    margin-bottom: 0.8333333333333334vw;
    @media only screen and (max-width: 768px) {
      display: none;
    }
  }
  .contact {
    background-color: #ffda00;
    padding: 1.71875vw 3.6458333333333335vw;
    display: flex;
    flex-direction: row;
    margin-bottom: 4.583333333333333vw;
    margin-top: 2.6041666666666665vw;
    position: relative;
    align-items: end;

    @media only screen and (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
      padding: 6.361323155216285vw 3.5623409669211195vw;
      margin-bottom: 16.28498727735369vw;
    }

    .title {
      font-family: "Roboto";
      color: #000;
      font-size: 1.5625vw;
      font-weight: 700;
      line-height: 2.0833333333333335vw;
      margin-right: 5.208333333333333vw;
      max-width: 14.229166666666668vw;
      @media only screen and (max-width: 768px) {
        max-width: 64.8854961832061vw;
        font-size: 7.612468193384225vw;
        line-height: 1;
        margin-right: 0;
        margin-bottom: 2.544529262086514vw;
      }
    }

    .col {
      display: flex;
      flex-direction: column;
      gap: 0.78125vw;
      @media only screen and (max-width: 768px) {
        gap: 1.5267175572519085vw;
        width: 100%;
      }
    }
    .row {
      display: flex;
      flex-direction: row;
      gap: 0.78125vw;
      @media only screen and (max-width: 768px) {
        flex-direction: column;
        gap: 1.5267175572519085vw;
      }
    }

    .input_card {
      padding: 0.5729166666666666vw 0.78125vw;
      background-color: #fff;
      font-family: "Roboto";
      border: 0.052083333333333336vw solid transparent;

      @media only screen and (max-width: 768px) {
        padding: 3.5623409669211195vw 4.0600508905852415vw;
        border-width: 0.2544529262086514vw;
      }
      p {
        font-size: 0.8333333333333334vw;
        @media only screen and (max-width: 768px) {
          font-size: 4.0600508905852415vw;
        }
      }
      span {
        padding: 0.5729166666666666vw 0;
        padding-right: 0.5729166666666666vw;
        margin-right: 0.5729166666666666vw;
        font-size: 0.8333333333333334vw;
        font-family: "Roboto";
        line-height: 1.8333333333333334vw;
        border-right: 0.052083333333333336vw solid #e4e4e4;

        @media only screen and (max-width: 768px) {
          padding: 4.8346055979643765vw;
          font-size: 4.0600508905852415vw;
          margin-right: 4.0600508905852415vw;
        }
      }
      input {
        font-family: "Roboto";
        border: 0;
        background: transparent;
        width: 100%;
        font-size: 0.8333333333333334vw;
        @media only screen and (max-width: 768px) {
          font-size: 4.0600508905852415vw;
        }
      }
    }
    .row_input {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 0 0.78125vw;
    }
    .error {
      border-color: red;
    }
    button {
      color: #fff;
      background-color: #3d3bff;
      padding: 1vw 2vw;
      border: 0;
      font-size: 0.9375vw;
      font-weight: 400;
      cursor: pointer;
      margin-left: 0.9375vw;
      @media only screen and (max-width: 768px) {
        padding: 4.0600508905852415vw;
        margin-left: 0;
        font-size: 4.567430025445293vw;
        margin-top: 4.8346055979643765vw;
      }
    }

    img {
      position: absolute;
      width: 29.635416666666668vw;
      height: 14.0625vw;
      right: 0;
      bottom: 0;
      pointer-events: none;
      @media only screen and (max-width: 768px) {
        display: none;
      }
    }
  }
  nav {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 2.5vw;

    @media only screen and (max-width: 768px) {
      flex-direction: column;
      padding: 0;
      gap: 10.178117048346056vw;
    }
  }
  .block {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
  .title_link {
    margin-bottom: 1.8229166666666667vw;
    color: #000;
    font-size: 0.8854166666666666vw;
    font-weight: 700;
    line-height: 1.25vw;
    @media only screen and (max-width: 768px) {
      font-size: 4.325699745547074vw;
      line-height: 6.106870229007634vw;
    }
  }

  .list {
    display: flex;
    flex-direction: column;
    gap: 0.78125vw;
    @media only screen and (max-width: 768px) {
      gap: 3.816793893129771vw;
    }
    a {
      color: #000;
      font-family: Roboto;
      font-size: 0.9291666666666666vw;
      font-weight: 400;
      line-height: 0.8333333333333334vw;
      @media only screen and (max-width: 768px) {
        font-size: 3.5623409669211195vw;
        line-height: 4.071246819338422vw;
      }
    }
  }
  .mini-list {
    margin-bottom: 1.3020833333333333vw;
    display: flex;
    flex-direction: column;
    gap: 0.5208333333333334vw;
    @media only screen and (max-width: 768px) {
      margin-bottom: 10.178117048346056vw;
      gap: 2.2900763358778624vw;
    }
    span {
      color: #999;
      font-family: Roboto;
      font-size: 0.95vw;
      line-height: 1.08vw;
      font-weight: 400;
      @media only screen and (max-width: 768px) {
        font-size: 4.071246819338422vw;
        line-height: 1;
      }
    }
    a {
      color: #000;
      font-size: 0.8854166666666666vw;
      font-weight: 700;
      line-height: 1.25vw;
      @media only screen and (max-width: 768px) {
        font-size: 4.325699745547074vw;
        line-height: 1;
      }
    }
  }
  .row_links {
    margin-bottom: 1.8229166666666667vw;
    @media only screen and (max-width: 768px) {
      margin-bottom: 10.178117048346056vw;

      width: max-content;
    }
  }
  .row_links,
  .payments {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.78125vw;
    @media only screen and (max-width: 768px) {
      gap: 5vw;
    }
    a {
      display: inline-flex;
    }
    img {
      max-width: 3.6458333333333335vw;
      object-fit: contain;
      @media only screen and (max-width: 768px) {
        max-width: 20vw;
      }
    }
    svg {
      width: 1.5vw;
      height: 1.5vw;
      @media only screen and (max-width: 768px) {
        width: 6.106870229007634vw;
        height: 6.106870229007634vw;
      }
    }
  }
  .copyright {
    background: #ffda00;
    padding: 0.625vw;
    display: flex;
    gap: 1.40625vw;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width: 768px) {
      display: none;
    }
    span {
      color: #015ccf;
      font-family: Roboto;
      font-size: 0.9375vw;
      font-weight: 400;
      line-height: 1.5628125vw;
    }
  }
`;
