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
      width: max-content;
      padding: 0.5vw 0.2vw;

      .hover_body {
        width: 14.0625vw;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        transition: 300ms ease;
        position: relative;
        padding: 1.21875vw 0.5291666666666666vw;
        min-height: 28vw;
        gap: 1.5vw;
        &:hover {
          box-shadow: 0 0 4px 1px #00000026;
        }
      }

      .like_button {
        position: absolute;
        top: 1vw;
        right: 1vw;
        cursor: pointer;

        svg {
          width: 0.8333333333333334vw;
          height: 0.8333333333333334vw;
        }
      }
      img {
        width: 12.65625vw;
        height: 11.40625vw;
      }
      h2 {
        color: #1d2f77;
        font-size: 0.8165104166666667vw;
        font-weight: 700;
      }
      .link-category {
        display: inline-flex;
        color: #00132c;
        font-size: 0.8544270833333333vw;
        text-decoration: underline;
      }
      h1 {
        color: #000;
        font-size: 0.9375vw;
        font-weight: 700;
      }
      .motorcycle_cultivator_cart {
        display: flex;
        justify-content: space-between;
        width: 100%;
        .button {
          color: #fff;
          text-align: center;
          font-size: 0.7291666666666666vw;
          font-weight: 600;
          text-transform: uppercase;
          background: #015ccf;
          padding: 0.140625vw 0;
          margin: 0;
          margin-right: 0.6770833333333334vw;
          cursor: pointer;
          border: 0;
          width: 100%;
        }
        .compare-btn {
          cursor: pointer;
          background: #FFDA00;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.78125vw;
          border: 0;

          svg {
            width: 1vw;
            height: 1vw;
          }
        }
      }
    }
  }
`;
