import { styled } from "styled-components";

export const StyledSalesHits = styled.div`
  display: flex;
  padding: 2.0833333333333335vw 0.7291666666666666vw;
  margin-right: 1.0416666666666667vw;

  .sales {
    width: 20.677083333333332vw;
    padding: 2.7604166666666665vw 1.5625vw;
    margin-right: 2.1354166666666665vw;
    border: 0.052083333333333336vw solid #e2e2e2;
    background: #fff;
    h1 {
      color: #1d2f77;
      font-family: TT Travels;
      font-size: 1.6666666666666667vw;
      font-style: normal;
      font-weight: 700;
      line-height: 2.0833333333333335vw; /* 125% */
      text-transform: uppercase;
      max-width: 8.333333333333334vw;
      margin-bottom: 0.9895833333333334vw;
    }
    p {
      margin-bottom: 1.8229166666666667vw;
      color: #999;
      font-size: 0.7291666666666666vw;
      font-weight: 500;
      line-height: 1.2395833333333333vw;
    }
    button {
      color: #000;
      text-align: center;
      font-size: 0.6770833333333334vw;
      font-weight: 500;
      line-height: 1.25vw;
      text-transform: uppercase;
      padding: 0.15625vw 0.7291666666666666vw;
      border-radius: 0.625vw;
      border: 0.10416666666666667vw solid #e2e2e2;
      margin-bottom: 0.4166666666666667vw;
      margin-right: 0.4166666666666667vw;
      background-color: #fff;
      cursor: pointer;

      &.active {
        border-color: #ffa73d;
      }
    }
  }
  .motorcycle_cultivator {
    flex: 1;
    .motorcycle_cultivator_card {
      width: 14.0625vw;
      padding: 0.5vw 0.2vw;
      min-height: 29.34796875vw;

      .hover_body {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        transition: 300ms ease;
        position: relative;
        padding: 1.21875vw 0.5291666666666666vw;
        height: 100%;
        &:hover {
          box-shadow: 0 0 4px 1px #00000026;
        }
      }

      .like_button {
        position: absolute;
        top: 0;
        right: 0;
      }
      img {
        width: 12.65625vw;
        height: 11.40625vw;
        margin-bottom: 1.71875vw;
      }
      h2 {
        color: #1d2f77;
        font-size: 15.677px;
        font-weight: 700;
        line-height: 19.603px;
        margin-bottom: 1.3020833333333333vw;
      }
      button {
        color: #00132c;
        font-size: 16.405px;
        font-weight: 274;
        text-decoration-line: underline;
        background: transparent;
        border: none;
        margin-bottom: 2.7083333333333335vw;
        cursor: pointer;
      }
      h1 {
        color: #000;
        font-size: 1.8229166666666667vw;
        font-weight: 700;
        line-height: 39.987px;
        margin-bottom: 1.6666666666666667vw;
      }
      .motorcycle_cultivator_cart {
        display: flex;
        button {
          color: #fff;
          text-align: center;
          font-size: 14px;
          font-weight: 600;
          line-height: 44px; /* 314.286% */
          letter-spacing: 0.16px;
          text-transform: uppercase;
          background: #015ccf;
          padding: 0.140625vw 2.4479166666666665vw;
          margin-right: 0.6770833333333334vw;
          cursor: pointer;
        }
        svg {
          cursor: pointer;
        }
      }
    }
  }
`;
