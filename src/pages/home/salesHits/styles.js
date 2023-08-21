import { styled } from "styled-components";

export const StyledSalesHits = styled.div`
  .flex {
    display: flex;
    padding: 2.0833333333333335vw 0.7291666666666666vw;
    padding-left: 0;
    padding-bottom: 0;
    @media only screen and (max-width: 768px) {
      flex-direction: column;
      padding: 0;
    }

    .sales {
      width: 20.677083333333332vw;
      padding: 2.7604166666666665vw 1.5625vw;
      margin-right: 2.1354166666666665vw;
      border: 0.052083333333333336vw solid #e2e2e2;
      border-bottom: 0;
      background: #fff;
      @media only screen and (max-width: 768px) {
        padding: 0;
        width: 100%;
        border: 0;
      }
      h1 {
        color: #1d2f77;
        font-size: 1.6666666666666667vw;
        font-style: normal;
        font-weight: 700;
        line-height: 2.0833333333333335vw;
        text-transform: uppercase;
        max-width: 8.333333333333334vw;
        margin-bottom: 0.9895833333333334vw;
        @media only screen and (max-width: 768px) {
          max-width: 40.712468193384225vw;
          font-size: 8.142493638676845vw;
          line-height: 1;
          margin-bottom: 4.8346055979643765vw;
          margin-top: 10.687022900763358vw;
        }
      }
      p {
        margin-bottom: 1.8229166666666667vw;
        color: #999;
        font-size: 0.7291666666666666vw;
        font-weight: 500;
        line-height: 1.2395833333333333vw;
        @media only screen and (max-width: 768px) {
          font-size: 3.5623409669211195vw;
          line-height: 1;
          margin-bottom: 10.178117048346056vw;
        }
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
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background-color: #fff;
        cursor: pointer;
        &.empty-btn {
          padding: 1vw;
          border: 0;
        }

        &.active {
          border-color: #ffa73d;
        }
        @media only screen and (max-width: 768px) {
          font-size: 3.3078880407124682vw;
          line-height: 1;
          border-radius: 3.053435114503817vw;
          padding: 3.5623409669211195vw;
          margin-bottom: 2.7989821882951653vw;
          margin-right: 2.7989821882951653vw;
        }
      }
    }
    .motorcycle_cultivator {
      flex: 1;
      &.isLoading {
        margin-right: 1vw;
      }
      @media only screen and (max-width: 768px) {
        width: 100%;
        margin-top: 12.72264631043257vw;
      }
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
          min-height: 30vw;
          gap: 1.5vw;
          &:hover {
            box-shadow: 0 0 4px 1px #00000026;
            @media only screen and (max-width: 768px) {
              box-shadow: none;
            }
          }

          @media only screen and (max-width: 768px) {
            width: 47vw;
            gap: 5.089058524173028vw;
            padding: 0 2.5vw;
            min-height: 80vw;
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
            @media only screen and (max-width: 768px) {
              width: 4.071246819338422vw;
              height: 4.071246819338422vw;
            }
          }
        }
        img {
          width: 12.65625vw;
          height: 11.40625vw;
          object-fit: contain;
          @media only screen and (max-width: 768px) {
            width: 34.01246819338423vw;
            height: 27.28091603053435vw;
          }
        }
        h2 {
          color: #1d2f77;
          font-size: 0.8165104166666667vw;
          font-weight: 700;
          @media only screen and (max-width: 768px) {
            font-size: 2.8343511450381675vw;
          }
        }
        .link-category {
          display: inline-flex;
          color: #00132c;
          font-size: 0.8544270833333333vw;
          text-decoration: underline;
          @media only screen and (max-width: 768px) {
            font-size: 2.480152671755725vw;
          }
        }
        h1 {
          color: #000;
          font-size: 0.9375vw;
          font-weight: 700;
          @media only screen and (max-width: 768px) {
            font-size: 4.78295165394402vw;
          }
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
            display: flex;
            align-items: center;
            justify-content: center;
            @media only screen and (max-width: 768px) {
              font-size: 2.480152671755725vw;
              padding: 3vw 0;
            }
            span {
              width: 33.3%;
              display: inline-flex;
              align-items: center;
              justify-content: center;
            }
          }

          .compare-btn {
            cursor: pointer;
            background: #ffda00;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0.78125vw;
            border: 0;

            @media only screen and (max-width: 768px) {
              font-size: 2.480152671755725vw;
              padding: 3vw;
            }

            &.selected {
              background-color: rgb(248 113 113/1);
            }

            svg {
              width: 1vw;
              height: 1vw;
              @media only screen and (max-width: 768px) {
                width: 3vw;
                height: 3vw;
              }
            }
          }
        }
      }
    }
  }
  .show_all {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2vw;
    font-size: 0.7291666666666666vw;
    color: #1d2f77;
    text-transform: uppercase;
    font-weight: 700;
    border-top: 0.052083333333333336vw solid #e2e2e2;
    @media only screen and (max-width: 768px) {
      font-size: 3.053435114503817vw;
      justify-content: flex-start;
      border: 0;
      padding: 3vw;
      width: max-content;
    }
  }
`;
