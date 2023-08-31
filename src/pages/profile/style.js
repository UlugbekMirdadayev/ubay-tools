import { styled } from "styled-components";

export const ProfileStyled = styled.section`
  width: 80vw;
  margin: 0 auto;
  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 0 4.325699745547074vw;
  }
  .grid {
    display: grid;
    grid-template-columns: 24.791666666666668vw 50vw;
    justify-content: space-between;
    align-items: flex-start;

    &:not(.orders) {
      grid-template-columns: 24.791666666666668vw 22.34375vw 25.989583333333332vw;
      @media only screen and (max-width: 768px) {
        grid-template-columns: 100%;
      }
    }

    @media only screen and (max-width: 768px) {
      grid-template-columns: 100%;
    }
    .space {
      ul {
        display: grid;
        a,
        .a {
          cursor: pointer;
          color: #015ccf;
          font-size: 1.0416666666666667vw;
          font-weight: 500;
          line-height: 1.25vw;
          display: flex;
          align-items: center;
          padding: 0.8333333333333334vw;
          border-radius: 0.625vw;
          border: 0.10416666666666667vw solid transparent;
          transition: 100ms ease;
          margin-bottom: 0.5208333333333334vw;
          &.active,
          &:hover {
            border-color: #015ccf;
          }

          @media only screen and (max-width: 768px) {
            font-size: 3.8516539440203563vw;
            line-height: 18.165px;
            border-radius: 2.310941475826972vw;
            padding: 3.053435114503817vw;
          }

          svg {
            width: 1.25vw;
            height: 1.25vw;
            margin-right: 0.625vw;
            @media only screen and (max-width: 768px) {
              width: 5vw;
              height: 5vw;
              margin-right: 2.5vw;
              margin-bottom: 1.272264631043257vw;
            }
          }
        }
      }
    }
    .infos {
      display: grid;
      gap: 0.9375vw;
      @media only screen and (max-width: 768px) {
        gap: 3.816793893129771vw;
      }
      h1 {
        color: #015ccf;
        font-size: 1.6666666666666667vw;
        font-weight: 500;
        line-height: 2.0833333333333335vw;
        white-space: pre;
        @media only screen and (max-width: 768px) {
          font-size: 7.298473282442749vw;
          line-height: 9.123155216284987vw;
        }
      }
      li {
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: space-between;
        cursor: pointer;
        span {
          color: #999;
          font-size: 0.8333333333333334vw;
          font-weight: 500;
          line-height: 1.25vw;
          @media only screen and (max-width: 768px) {
            font-size: 3.6493638676844786vw;
            line-height: 150%;
          }
          &.value {
            text-decoration: underline;
            color: #000;
          }
        }
      }
      .editor {
        color: #015ccf;
        font-size: 0.95vw;
        font-weight: 500;
        line-height: 1.0833333333333334vw;
        text-transform: uppercase;
        display: inline-block;
        border: 0;
        background: none;
        width: max-content;
        padding: 0.1vw;
        border-radius: 0.2vw;
        display: grid;
        place-content: center;

        &:hover {
          background-color: #015ecf41;
        }

        @media only screen and (max-width: 768px) {
          font-size: 2.7368956743002544vw;
          line-height: 3.6493638676844786vw;
          padding: 0.5vw;
        }
      }
    }
    .addresses {
      @media only screen and (max-width: 768px) {
        margin-top: 7.633587786259542vw;
      }
      li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1.5625vw;
        @media only screen and (max-width: 768px) {
          margin-bottom: 5.089058524173028vw;
        }
        .left {
          display: flex;
          align-items: center;
          .circle {
            width: 2.0833333333333335vw;
            height: 2.0833333333333335vw;
            border-radius: 50%;
            display: grid;
            place-content: center;
            border: 0.052083333333333336vw solid #015ccf;
            background: #f6f6f6;
            margin-right: 0.8333333333333334vw;
            @media only screen and (max-width: 768px) {
              width: 10.178117048346056vw;
              height: 10.178117048346056vw;
              margin-right: 4.071246819338422vw;
              border-width: 0.2544529262086514vw;
            }

            svg {
              width: 1.0416666666666667vw;
              height: 1.0416666666666667vw;
              @media only screen and (max-width: 768px) {
                width: 5.089058524173028vw;
                height: 5.089058524173028vw;
              }
            }
          }
          span {
            color: #333;
            font-size: 0.9291666666666666vw;
            font-weight: 500;
            line-height: 1.2416666666666667vw;
            @media only screen and (max-width: 768px) {
              font-size: 3.66412213740458vw;
              line-height: 5.234351145038169vw;
            }
          }
        }
        button {
          color: #333;
          font-family: Roboto;
          font-size: 0.9291666666666666vw;
          font-weight: 400;
          line-height: 1.2416666666666667vw;
          background-color: #fff;
          border-radius: 6px;
          border: 0.052083333333333336vw solid #b5bbbf;
          padding: 0.3125vw 0.8333333333333334vw;
          @media only screen and (max-width: 768px) {
            padding: 1.5267175572519085vw 4.071246819338422vw;
            border-width: 0.2544529262086514vw;
            line-height: 5.234351145038169vw;
            font-size: 3.66412213740458vw;
          }
        }
      }
      .scroll-area {
        overflow-y: auto;
        max-height: 40vh;
        padding-right: 0.3vw;
        @media only screen and (max-width: 768px) {
          max-height: 60vh;
          padding-right: 0;
        }
        .address {
          display: grid;
          padding: 0.5vw;
          border-radius: 0.2vw;
          background-color: #015ecf25;
          margin-bottom: 0.2vw;
          transition: 300ms ease;
          cursor: pointer;
          &:hover,
          &.active {
            background-color: #015ccf;
            p,
            h1 {
              color: #fff;
            }
          }
          @media only screen and (max-width: 768px) {
            padding: 1.5267175572519085vw 4.071246819338422vw;
            margin-bottom: 1.5267175572519085vw;
          }
          h1 {
            color: #015ccf;
            font-size: 1vw;
            font-weight: 500;
            @media only screen and (max-width: 768px) {
              font-size: 3.5623409669211195vw;
            }
          }
          p {
            font-size: 0.9291666666666666vw;
            color: #000;
            font-weight: 500;
            line-height: 150%;
            @media only screen and (max-width: 768px) {
              font-size: 2.544529262086514vw;
            }
          }
        }
      }
    }
    .order {
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 2.6041666666666665vw;
      padding: 0.5208333333333334vw;
      border-radius: 0.5208333333333334vw;
      border: 0.052083333333333336vw solid #dedede;
      &.payed {
        background-color: #015ccf;
        * {
          color: #fff !important;
        }
      }
      &.canceled {
        background-color: #e74c3c2b;
        border-color: #e74c3c;
        * {
          border-color: #e74c3c !important;
        }
        .product {
          background-color: rgba(255, 255, 255, 0.5);
        }
      }
      @media only screen and (max-width: 768px) {
        margin-bottom: 1.5267175572519085vw;
        border-radius: 0.5267175572519085vw;
        border-width: 0.2vw;
        padding: 1.5267175572519085vw;
      }
      .view_btn {
        margin: 0 auto;
        text-align: center;
        padding-top: 0.5208333333333334vw;
        font-size: 0.8333333333333334vw;
        font-weight: 500;
        color: #015ccf;
        cursor: pointer;
        @media only screen and (max-width: 768px) {
          font-size: 2.544529262086514vw;
          padding-top: 1.5267175572519085vw;
        }
      }
      &[open] {
        .view_btn {
          display: none;
        }
      }
      .top_bar {
        width: 100%;
        border-bottom: 0.052083333333333336vw solid #dedede;
        padding: 0.5208333333333334vw 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        @media only screen and (max-width: 768px) {
          padding: 1.5267175572519085vw 0;
          border-bottom-width: 0.2544529262086514vw;
        }

        .left {
          font-size: 0.8333333333333334vw;
          font-weight: 500;
          color: #000;
          display: grid;
          gap: 0.8333333333333334vw;
          @media only screen and (max-width: 768px) {
            font-size: 2.544529262086514vw;
          }
          span {
            &.promo {
              color: #e74c3c;
              font-family: "SF Pro Display";
            }
          }
        }
        .pay {
          font-size: 0.8333333333333334vw;
          font-weight: 500;
          @media only screen and (max-width: 768px) {
            font-size: 2.544529262086514vw;
          }
          p {
            color: #000;
          }
          a {
            color: #015ccf;
          }
        }
      }
      .products {
        display: flex;
        flex-wrap: wrap;
        @media only screen and (max-width: 768px) {
          gap: 1.0178117048346056vw;
          margin-top: 2.544529262086514vw;
          justify-content: space-between;
        }
      }
      .product {
        width: 15vw;
        display: flex;
        align-items: flex-start;
        padding: 0.5208333333333334vw;
        margin: 0.5208333333333334vw;
        background-color: #dedede4f;
        border-radius: 0.3125vw;

        @media only screen and (max-width: 768px) {
          width: calc(50% - 1.0178117048346056vw / 2);
          padding: 1.272264631043257vw;
          margin: 0;
          border-radius: 1.0178117048346056vw;
          flex-direction: column;
        }

        .col_text {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;

          .name_product {
            font-size: 0.75vw;
            font-weight: 500;
            color: #000;
            margin-bottom: 0.5208333333333334vw;
            line-height: 120%;
            @media only screen and (max-width: 768px) {
              font-size: 2.544529262086514vw;
              margin-bottom: 2vw;
            }
          }
          h3 {
            font-size: 1.0416666666666667vw;
            font-weight: 600;
            color: #000;
            @media only screen and (max-width: 768px) {
              font-size: 3.053435114503817vw;
            }
          }
        }
        img {
          width: 5vw;
          height: 5vw;
          object-fit: contain;
          margin-right: 0.5208333333333334vw;
          @media only screen and (max-width: 768px) {
            width: 100%;
            height: 35vw;
            margin-right: 0;
            margin-bottom: 1vw;
          }
        }
      }
    }
  }
  .sticky {
    position: sticky;
    top: 0;
    background: #fff;
    @media only screen and (max-width: 768px) {
      position: static;
    }
  }
`;
