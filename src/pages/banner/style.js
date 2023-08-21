import styled from "styled-components";

export const BannerStyled = styled.section`
  width: 100vw;
  color: #fff;

  .top_row {
    display: flex;
    align-items: center;
    border-bottom: 0.052083333333333336vw solid #464646;
    .img_place {
      width: 55vw;
      height: 34vw;

      @media only screen and (max-width: 768px) {
        width: 45vw;
        height: 40vw;
      }
    }
    .infos {
      display: grid;
      gap: 5.208333333333333vw;
      max-width: 23.020833333333332vw;
      @media only screen and (max-width: 768px) {
        max-width: 40vw;
        gap: 2vw;
      }
      h1 {
        color: #fff;
        font-size: 7.291666666666667vw;
        font-weight: 700;
        line-height: 85.971%;
        white-space: pre;
      }
      p {
        font-size: 0.8333333333333334vw;
        font-weight: 400;
        line-height: 150%;
        span {
          color: #015ccf;
        }
        @media only screen and (max-width: 768px) {
          font-size: 2vw;
          line-height: 120%;
        }
      }
      .row_btn {
        display: flex;
        align-items: center;
        gap: 0.8333333333333334vw;
        @media only screen and (max-width: 768px) {
          gap: 1vw;
        }

        button {
          padding: 0.5729166666666666vw;
          font-size: 0.8333333333333334vw;
          font-style: normal;
          font-weight: 500;
          text-align: center;
          border: 0.052083333333333336vw solid #fff;
          background-color: transparent;
          color: #fff;

          @media only screen and (max-width: 768px) {
            font-size: 2.053435114503817vw;
            padding: 1vw;
          }

          &.primary {
            background-color: #015ccf;
            border-color: #015ccf;
          }
        }
      }
    }
  }
  .second_row {
    display: flex;
    border-bottom: 0.052083333333333336vw solid #464646;
    .img_place {
      width: 30.208333333333332vw;
      height: 25.729166666666668vw;

      @media only screen and (max-width: 768px) {
        width: 37.208333vw;
        height: 35.729167vw;
      }
    }
    .infos {
      width: 57vw;
      border-left: 0.052083333333333336vw solid #464646;
      padding: 2.8125vw 7.291666666666667vw;
      display: grid;
      place-content: flex-start;
      gap: 0.8333333333333334vw;
      @media only screen and (max-width: 768px) {
        width: 65vw;
      }
      h3 {
        font-size: 1.539375vw;
        font-weight: 500;
        line-height: 140%;
        @media only screen and (max-width: 768px) {
          font-size: 3.539375vw;
        }
      }
      p {
        font-size: 0.8333333333333334vw;
        font-weight: 400;
        line-height: 140%;
        @media only screen and (max-width: 768px) {
          font-size: 2vw;
        }
      }
    }
  }
  .threed_row {
    display: grid;
    grid-template-columns: 50% 50%;
    border-bottom: 0.052083333333333336vw solid #464646;

    .left {
      border-right: 0.052083333333333336vw solid #464646;

      .top {
        border-bottom: 0.052083333333333336vw solid #464646;
        position: relative;
        display: grid;
        place-content: center;
        padding: 2.0833333333333335vw 0;
        @media only screen and (max-width: 768px) {
          padding: 5.208333333333333vw;
        }
        .number {
          color: #fff;
          font-size: 15.260416666666666vw;
          font-weight: 700;
          line-height: 15.625vw;
          text-transform: uppercase;
        }
        .popup {
          color: #192128;
          font-size: 1.6666666666666667vw;
          font-weight: 700;
          line-height: 1.25vw;
          padding: 0.5729166666666666vw;
          background: #fff;
          box-shadow: 0 0 2.1354166666666665vw 0 #192128;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
      .bottom {
        display: grid;
        place-content: center;
        padding: 7.552083333333333vw 0;
        .popup {
          color: #192128;
          font-size: 2.9323437500000002vw;
          font-weight: 700;
          line-height: 2.19921875vw;
          padding: 1.0416666666666667vw;
          background: #fff;
          box-shadow: 0 0 3.757040103276571vw 0 #192128;
        }
      }
    }
    .right {
      padding-left: 4.947916666666667vw;
      padding-top: 5.208333333333333vw;
      display: grid;
      gap: 4.6875vw;
      place-content: flex-start;
      .top {
        p {
          font-size: 0.8333333333333334vw;
          font-weight: 400;
          line-height: 140%;
          width: 28.802083333333332vw;
          @media only screen and (max-width: 768px) {
            width: 40vw;
            font-size: 2vw;
          }
        }
      }
      .img_place {
        width: 49.6875vw;
        height: 26.015364583333334vw;
        .prod_image {
          width: 100%;
          height: 100%;
          left: unset;
          right: 0;
          transform: translate(0%, -50%);
        }
      }
    }
  }
  .fourth_row {
    display: grid;
    grid-template-columns: 45% 10% 45%;
    align-items: center;
    padding: 6.25vw 0;
    @media only screen and (max-width: 768px) {
      grid-template-columns: 55% 10% 35%;
    }
    .space {
      display: grid;
      place-content: center;

      ul {
        width: 22.083333333333332vw;
        margin-bottom: 6.25vw;
        @media only screen and (max-width: 768px) {
          width: 35vw;
        }
        &:last-of-type {
          margin-bottom: 0;
        }
        li {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: #fff;
          font-size: 1.25vw;
          font-weight: 700;
          line-height: 140%;
          @media only screen and (max-width: 768px) {
            font-size: 2vw;
          }
        }
      }
    }
    .center {
      width: 0.2604166666666667vw;
      background: #464646;
      height: 100%;
      position: relative;
      .right,
      &::before,
      &:after {
        content: "";
        top: 33%;
        transform: translateY(-50%);
        width: 5.052083333333333vw;
        height: 0.2604166666666667vw;
        background: #464646;
        position: absolute;
        right: 0;
      }
      &::before {
        top: 66%;
        transform: translateY(-50%);
        right: 0;
      }
      .right {
        top: 0;
        right: unset;
        left: 0;
      }
    }
    .between {
      img {
        width: 17.395833333333332vw;
        height: 41.927083333333336vw;
        object-fit: contain;
      }
    }
  }
  .img_place {
    position: relative;
    img {
      position: absolute;
      object-fit: contain;
      &.banner_bg {
        z-index: 1;
        width: 100%;
        height: 100%;
        mix-blend-mode: lighten;
      }
      &.prod_image {
        width: 50%;
        height: 50%;
        z-index: 2;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
`;
