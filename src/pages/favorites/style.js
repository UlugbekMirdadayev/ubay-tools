import styled from "styled-components";

export const FavoritesStyled = styled.section`
  width: 80vw;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0 4.325699745547074vw;
  }
  h1.title {
    font-size: 1.4583333333333333vw;
    padding-bottom: 2.6041666666666665vw;
    @media screen and (max-width: 768px) {
      font-size: 7.124681933842239vw;
      padding-bottom: 5.089058524173028vw;
    }
  }
  .empty_text {
    font-size: 1vw;
    color: #000;
    min-height: 20vw;
    @media screen and (max-width: 768px) {
      font-size: 5vw;
    }
  }
  .motorcycle_cultivator {
    flex: 1;
    @media screen and (max-width: 768px) {
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
        min-height: 28vw;
        gap: 1.5vw;
        &:hover {
          box-shadow: 0 0 4px 1px #00000026;
          @media screen and (max-width: 768px) {
            box-shadow: none;
          }
        }

        @media screen and (max-width: 768px) {
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
          @media screen and (max-width: 768px) {
            width: 4.071246819338422vw;
            height: 4.071246819338422vw;
          }
        }
      }
      img {
        width: 12.65625vw;
        height: 11.40625vw;
        object-fit: contain;
        @media screen and (max-width: 768px) {
          width: 34.01246819338423vw;
          height: 27.28091603053435vw;
        }
      }
      h2 {
        color: #1d2f77;
        font-size: 0.8165104166666667vw;
        font-weight: 700;
        @media screen and (max-width: 768px) {
          font-size: 2.8343511450381675vw;
        }
      }
      .link-category {
        display: inline-flex;
        color: #00132c;
        font-size: 0.8544270833333333vw;
        cursor: pointer;
        @media screen and (max-width: 768px) {
          font-size: 2.480152671755725vw;
        }
      }
      h1 {
        color: #000;
        font-size: 0.9375vw;
        font-weight: 700;
        @media screen and (max-width: 768px) {
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
          @media screen and (max-width: 768px) {
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

          @media screen and (max-width: 768px) {
            font-size: 2.480152671755725vw;
            padding: 3vw;
          }

          &.selected {
            background-color: rgb(248 113 113/1);
          }

          svg {
            width: 1vw;
            height: 1vw;
            @media screen and (max-width: 768px) {
              width: 3vw;
              height: 3vw;
            }
          }
        }
      }
    }
  }
`;
