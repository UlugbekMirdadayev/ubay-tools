import styled from "styled-components";

export const CartStyled = styled.section`
  width: 80vw;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0 4.325699745547074vw;
  }
  .title {
    color: #111;
    font-size: 1.3541666666666667vw;
    font-weight: 500;
    margin-bottom: 2.0833333333333335vw;
    @media screen and (max-width: 768px) {
      font-size: 6.6157760814249365vw;
      margin-bottom: 3.816793893129771vw;
    }
  }
  .grid {
    display: grid;
    grid-template-columns: 53.4375vw 20.885416666666668vw;
    justify-content: space-between;
    min-height: 100vh;
    align-items: flex-start;
    @media screen and (max-width: 768px) {
      grid-template-columns: 100%;
      min-height: auto;
    }
    .list {
      display: flex;
      flex-direction: column;
      gap: 0.8333333333333334vw;
      @media screen and (max-width: 768px) {
        gap: 5vw;
      }
      .product {
        border-radius: 0.8333333333333334vw;
        border: 0.026041666666666668vw solid #0071bc;
        background: #fff;
        padding: 1.0416666666666667vw;
        display: flex;
        justify-content: space-between;

        @media screen and (max-width: 768px) {
          flex-direction: column;
          padding: 2vw;
          position: relative;
        }

        .space {
          display: flex;

          .name_prod {
            color: #000;
            font-size: 0.9343750000000001vw;
            font-weight: 500;
            @media screen and (max-width: 768px) {
              font-size: 4.071246819338422vw;
              max-width: calc(100% - 8vw);
            }
          }
          .image-box {
            width: 8.617708333333333vw;
            height: 8.617708333333333vw;
            background-color: rgba(217, 217, 217, 0.2);
            border-radius: 0.5208333333333334vw;
            margin-right: 2.0833333333333335vw;
            @media screen and (max-width: 768px) {
              min-width: 25.445293vw;
              max-width: 25.445293vw;
              height: 30.44529262086514vw;
            }
            img {
              max-width: 100%;
              height: 100%;
              object-fit: contain;
            }
          }
          .infos {
            display: flex;
            flex-direction: column;
            gap: 0.5973958333333333vw;
            justify-content: space-between;
            align-items: flex-start;
            .stars {
              display: flex;
              align-items: center;
              font-size: 0.9375vw;
              @media screen and (max-width: 768px) {
                font-size: 3vw;
              }
            }
            .price {
              display: flex;
              align-items: flex-end;
              gap: 1vw;
              .main_price {
                color: #000;
                font-size: 0.9343750000000001vw;
                font-weight: 500;
                @media screen and (max-width: 768px) {
                  font-size: 4.071246819338422vw;
                }
              }
              .sale_price {
                font-size: 0.625vw;
                font-weight: 600;
                color: red;
              }
            }
            .btn-more {
              color: #fff;
              font-size: 0.8333333333333334vw;
              font-weight: 600;
              border-radius: 0.5208333333333334vw;
              background: #015ccf;
              padding: 0.6770833333333334vw 2.6041666666666665vw;
              display: flex;
              align-items: center;
              justify-content: center;
              transition: 100ms ease;
              border: 1px solid #015ccf;

              @media screen and (max-width: 768px) {
                font-size: 2vw;
                padding: 2vw;
              }

              &:hover {
                background-color: #fff;
                color: #015ccf;
              }
            }
          }
        }
        .between {
          display: flex;
          justify-content: space-between;
          flex-direction: column;
          align-items: flex-end;
          .delete_cart {
            border: 0;
            background: none;
            display: flex;
            align-items: center;
            gap: 0.46875vw;
            padding: 0.2vw 0.2vw 0.2vw 0.5vw;
            transition: 100ms ease;
            border-radius: 0.2vw;
            &:hover {
              background-color: #da002c16;
            }
            &:active {
              background-color: #da002c36;
            }
            @media screen and (max-width: 768px) {
              padding: 0.5vw;
              position: absolute;
              top: 0vw;
              right: 0vw;
              border-radius: 0.5vw;
            }
            span {
              color: #da002b;
              font-size: 0.625vw;
              font-weight: 400;
              font-family: "Inter", sans-serif;
              @media screen and (max-width: 768px) {
                display: none;
              }
            }
            svg {
              width: 1.6145833333333333vw;
              height: 1.6145833333333333vw;
              @media screen and (max-width: 768px) {
                width: 7vw;
                height: 7vw;
              }
            }
          }
          .flex_row {
            display: flex;
            align-items: center;
            gap: 0.8854166666666666vw;

            @media screen and (max-width: 768px) {
              gap: 2.8vw;
            }

            .count_changers {
              display: flex;
              align-items: center;
              padding: 0.2864583333333333vw;
              border: 0.052083333333333336vw solid #015ccf;
              border-radius: 0.40729166666666666vw;
              gap: 0.8333333333333334vw;
              @media screen and (max-width: 768px) {
                gap: 2vw;
                padding: 0;
                margin-top: 5vw;
                border: 0;
              }
              .ranger {
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 0.5208333333333334vw;
                border: 0.052083333333333336vw solid #015ccf;
                border-radius: 0.32578125vw;
                background: none;
                flex: 1;

                @media screen and (max-width: 768px) {
                  gap: 2vw;
                  padding: 2.2900763358778624vw;
                  border-radius: 2.0279898218829517vw;
                }

                svg {
                  width: 0.829375vw;
                  height: 0.829375vw;
                  stroke: #015ccf;
                  @media screen and (max-width: 768px) {
                    width: 5.089058524173028vw;
                    height: 5.089058524173028vw;
                  }
                }
                &:hover {
                  background-color: #015ccf;
                  svg {
                    stroke: #fff;
                  }
                }
              }
              span {
                color: #000;
                font-family: Inter;
                font-size: 0.73296875vw;
                font-weight: 500;
                min-width: 1.5vw;
                text-align: center;
                @media screen and (max-width: 768px) {
                  font-size: 4.0559796437659035vw;
                  min-width: 10vw;
                }
              }
            }
            .primary {
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 0.625vw;
              border: 0.052083333333333336vw solid #015ccf;
              border-radius: 0.32578125vw;
              background: none;
              flex: 1;

              @media screen and (max-width: 768px) {
                margin-top: 5vw;
                padding: 2.2900763358778624vw;
                border-radius: 2.0279898218829517vw;
              }

              svg {
                width: 1.25vw;
                height: 1.25vw;
                stroke: #015ccf;
                @media screen and (max-width: 768px) {
                  width: 5.089058524173028vw;
                  height: 5.089058524173028vw;
                }
              }

              &:hover {
                @media screen and (min-width: 768px) {
                  background-color: #0071bc;

                  svg {
                    stroke: #fff;
                    fill: #fff;
                  }
                }
              }

              &.active {
                background-color: #015ccf;
                svg {
                  stroke: #fff;
                  fill: #fff;
                }
              }
            }
          }
        }
      }
    }
    .card {
      padding: 0.8333333333333334vw 1.0416666666666667vw;
      border-radius: 0.8333333333333334vw;
      background-color: rgba(217, 217, 217, 0.1);
      position: sticky;
      top: 0;

      @media screen and (max-width: 768px) {
        margin-top: 5vw;
        border-radius: 0;
        background: none;
      }

      ul {
        padding: 0.8333333333333334vw;
        border-bottom: 0.15625vw solid rgba(56, 126, 202, 0.2);
        width: 100%;

        @media screen and (max-width: 768px) {
          padding: 3.053435114503817vw 0;
          border-bottom: 0.19796437659033078vw solid #e8e8e8;
        }

        li {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.8333333333333334vw;
          @media screen and (max-width: 768px) {
            margin-bottom: 2.3740458015267176vw;
          }
          .key,
          .value {
            color: #000;
            font-size: 0.7291666666666666vw;
            font-weight: 400;
            font-family: "SF Pro Display";
            @media screen and (max-width: 768px) {
              font-size: 3.1666666666666665vw;
            }
          }
          .key {
            font-weight: 500;
          }
          .fs_18 {
            font-size: 0.9375vw;
            font-weight: 510;
            @media screen and (max-width: 768px) {
              font-size: 4.750127226463104vw;
            }
          }
          .total_value {
            color: #387eca;
          }
          .black {
            color: #000;
          }
        }
      }

      .submit {
        color: #fff;
        font-family: Inter;
        font-size: 0.8333333333333334vw;
        font-weight: 500;
        padding: 0.825vw;
        border-radius: 0.5208333333333334vw;
        background: #015ccf;
        width: 100%;
        border: 0;
        margin-top: 1.5625vw;
        @media screen and (max-width: 768px) {
          margin-top: 4.580152671755725vw;
          font-size: 3.1666666666666665vw;
          padding: 3.1666666666666665vw;
          border-radius: 2.375063613231552vw;
        }
      }
    }
  }
  .center {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
    .empty_text {
      font-size: 2vw;
      color: #000;
      text-align: center;
    }
    .go_main {
      display: inline-flex;
      margin: 1vw auto;
      font-size: 1vw;
      color: #fff;
      background-color: #015ccf;
      border-radius: 0.5vw;
      padding: 0.83vw;
    }
  }
`;
