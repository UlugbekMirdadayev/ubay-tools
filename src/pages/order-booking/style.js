import styled from "styled-components";

export const BookingOrderStyled = styled.section`
  width: 80vw;
  margin: 0 auto;
  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 0 4.325699745547074vw;
  }
  h1 {
    font-size: 1.4583333333333333vw;
    padding: 2.6041666666666665vw 0;
    @media only screen and (max-width: 768px) {
      font-size: 7.124681933842239vw;
      padding: 5.089058524173028vw 0;
    }
  }
  .grid {
    display: grid;
    grid-template-columns: 53.4375vw 20.885416666666668vw;
    align-items: flex-start;
    justify-content: space-between;
    @media only screen and (max-width: 768px) {
      grid-template-columns: 100%;
    }
    .product {
      display: grid;
      grid-template-columns: 5.208333333333333vw 25vw 6.25vw 10.416666666666666vw;
      margin-bottom: 1.0416666666666667vw;
      align-items: flex-start;
      gap: 1.5625vw;
      @media only screen and (max-width: 768px) {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 5.089058524173028vw;
        margin-bottom: 5.089058524173028vw;
      }
      img {
        width: 5.208333333333333vw;
        height: 5.208333333333333vw;
        object-fit: contain;

        @media only screen and (max-width: 768px) {
          width: 25.44529262086514vw;
          height: 25.44529262086514vw;
        }
      }
      .info {
        display: grid;
        align-content: space-between;
        @media only screen and (max-width: 768px) {
          max-width: 60%;
          gap: 2.544529262086514vw;
        }

        h3 {
          color: #111;
          font-size: 0.8333333333333334vw;
          font-weight: 700;
          line-height: 1.25vw;
          @media only screen and (max-width: 768px) {
            font-size: 4.071246819338422vw;
            line-height: 6.106870229007634vw;
          }
        }

        .row {
          display: flex;
          p {
            color: #2b71f8;
            font-size: 0.6944270833333334vw;
            font-weight: 400;
            padding: 0.625vw;
            cursor: pointer;
            user-select: none;

            &:first-child {
              margin-right: 0.625vw;
              border-right: 0.052083333333333336vw solid #e8e8e8;

              @media only screen and (max-width: 768px) {
                margin-right: 0;
              }
            }
            &.active {
              background-color: #015ccf;
              color: #fff;
            }
            &:not(.active):hover {
              background-color: #015ecf36;
            }

            @media only screen and (max-width: 768px) {
              font-size: 3.392620865139949vw;
              padding: 3.053435114503817vw;
            }
          }
        }
      }
      .controller {
        display: flex;
        padding: 0.5208333333333334vw;
        justify-content: space-between;
        padding: 0.4166666666666667vw;
        align-items: center;
        gap: 0.4166666666666667vw;
        border-radius: 0.4166666666666667vw;
        border: 0.052083333333333336vw solid #111;
        @media only screen and (max-width: 768px) {
          border-width: 0.2544529262086514vw;
          border-radius: 2.035623409669211vw;
          padding: 2.2900763358778624vw;
          gap: 2.035623409669211vw;
        }
        button {
          border: 0;
          background: none;

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
          color: #111;
          text-align: center;
          font-family: Roboto;
          font-size: 0.8333333333333334vw;
          font-weight: 500;
          line-height: 1.25vw;
          @media only screen and (max-width: 768px) {
            font-size: 4.071246819338422vw;
            line-height: 6.106870229007634vw;
          }
        }
      }
      .price {
        color: #111;
        font-size: 0.9375vw;
        font-weight: 700;
        line-height: 1.25vw;
        font-family: Roboto;
        @media only screen and (max-width: 768px) {
          font-size: 4.580152671755725vw;
          line-height: 6.106870229007634vw;
        }
      }
    }
    .add_address {
      margin-top: 2.0833333333333335vw;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      padding: 1.0416666666666667vw;
      border-radius: 0.4166666666666667vw;
      border: 0.052083333333333336vw solid #015ccf;
      background-color: #fff;
      color: #015ccf;
      font-size: 0.9291666666666666vw;
      font-weight: 500;
      line-height: 1.25vw;
      @media only screen and (max-width: 768px) {
        font-size: 3.5623409669211195vw;
        line-height: 6.106870229007634vw;
      }
      svg {
        width: 1.25vw;
        height: 1.25vw;
        margin-right: 0.4166666666666667vw;
        @media only screen and (max-width: 768px) {
          width: 6.106870229007634vw;
          height: 6.106870229007634vw;
          margin-right: 1.0178117048346056vw;
        }
      }
    }
    .row_btn {
      display: flex;
      align-items: center;
      gap: 2.6041666666666665vw;
      @media only screen and (max-width: 768px) {
        justify-content: space-between;
      }
      .primary {
        color: #fff;
        font-size: 0.8333333333333334vw;
        font-weight: 500;
        line-height: 1.25vw;
        padding: 0.4802083333333334vw 1.0416666666666667vw;
        border-radius: 0.625vw;
        background-color: #015ccf;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.8333333333333334vw;

        @media only screen and (max-width: 768px) {
          font-size: 3.5623409669211195vw;
          line-height: 6.106870229007634vw;
          background-color: #fff;
          color: #015ccf;
          padding: 2.2900763358778624vw;
          border: 0.2544529262086514vw solid #015ccf;
          border-radius: 3.053435114503817vw;

          &.active {
            background-color: #015ccf;
            color: #fff;
          }
        }

        svg {
          width: 1.25vw;
          height: 1.25vw;
          @media only screen and (max-width: 768px) {
            display: none;
          }
        }
      }
    }
    .user_info {
      display: flex;
      align-items: center;
      gap: 2.0833333333333335vw;
      @media only screen and (max-width: 768px) {
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 7.633587786259542vw;
      }
      li {
        display: flex;
        align-items: center;
        gap: 0.4166666666666667vw;
        color: #111;
        font-family: Raleway;
        font-size: 1.0416666666666667vw;
        font-weight: 500;
        line-height: 1.25vw;
        @media only screen and (max-width: 768px) {
          font-size: 5.089058524173028vw;
          line-height: 6.106870229007634vw;
        }
        svg {
          width: 1.25vw;
          height: 1.25vw;
          @media only screen and (max-width: 768px) {
            width: 6.106870229007634vw;
            height: 6.106870229007634vw;
          }
        }
      }
      .edit {
        padding: 0.5208333333333334vw 1.0416666666666667vw;
        border-radius: 0.4166666666666667vw;
        border: 0.052083333333333336vw solid #015ccf;
        color: #015ccf;
        font-size: 0.9291666666666666vw;
        font-weight: 500;
        line-height: 1.2416666666666667vw;
        background-color: #fff;
        @media only screen and (max-width: 768px) {
          font-size: 3.5623409669211195vw;
          line-height: 5.089058524173028vw;
          padding: 3.053435114503817vw 5.597964376590331vw;
          border-radius: 2.035623409669211vw;
          border-width: 0.2544529262086514vw;
        }
      }
    }
    .addresses {
      display: grid;

      label {
        color: #111;
        font-family: Raleway;
        font-size: 1.0416666666666667vw;
        font-weight: 500;
        line-height: 1.25vw;
        padding: 0.8333333333333334vw;
        border-radius: 0.4vw;
        border: 0.052083333333333336vw solid rgb(209 213 219/1);
        margin-top: 1.5625vw;
        display: flex;
        align-items: center;
        gap: 0.8333333333333334vw;
        &.active {
          color: #015ccf;
          border-color: #015ccf;
        }
        @media only screen and (max-width: 768px) {
          font-size: 3.5623409669211195vw;
          line-height: 6.106870229007634vw;
          padding: 2.2900763358778624vw;
          margin-top: 3vw;
          gap: 1vw;
        }
      }
    }

    .payment_type {
      label {
        align-items: flex-start;
        @media only screen and (max-width: 768px) {
          font-size: 5.089058524173028vw;
          border: 0;
          gap: 4.071246819338422vw;
        }
        p {
          color: #999;
          font-family: Raleway;
          font-size: 0.8333333333333334vw;
          font-weight: 500;
          line-height: 1.25vw;
          margin-top: 0.375vw;
          @media only screen and (max-width: 768px) {
            font-size: 4.071246819338422vw;
            line-height: 6.106870229007634vw;
          }
        }

        @media only screen and (max-width: 768px) {
          svg {
            min-width: 6.106870229007634vw;
            min-height: 6.106870229007634vw;
          }
        }
        img {
          width: 4.427083333333333vw;
          height: 1.5625vw;
          object-fit: contain;
          @media only screen and (max-width: 768px) {
            width: 16.857760814249364vw;
            height: 6.040203562340968vw;
          }
        }
        &:has(img) {
          align-items: center;
          display: inline-flex;
          margin-right: 1.5625vw;
          @media only screen and (max-width: 768px) {
            color: #e8e8e8;
            border: 0.2544529262086514vw solid #e8e8e8;
            border-radius: 2.544529262086514vw;
            padding: 6.361323155216285vw 4.071246819338422vw;
            width: 47%;
            margin-right: 5.089058524173028vw;

            svg {
              width: 4.580152671755725vw;
              height: 4.580152671755725vw;
              min-width: auto;
              min-height: auto;
            }
          }
          &:last-of-type {
            margin-right: 0;
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

      @media only screen and (max-width: 768px) {
        margin-top: 5vw;
        border-radius: 0;
        background: none;
      }

      ul {
        padding: 0.8333333333333334vw;
        border-bottom: 0.15625vw solid rgba(56, 126, 202, 0.2);
        width: 100%;

        @media only screen and (max-width: 768px) {
          padding: 3.053435114503817vw 0;
          border-bottom: 0.19796437659033078vw solid #e8e8e8;
        }

        li {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.8333333333333334vw;
          @media only screen and (max-width: 768px) {
            margin-bottom: 2.3740458015267176vw;
          }
          .key,
          .value,
          input {
            color: #000;
            font-size: 0.9291666666666666vw;
            font-weight: 400;
            font-family: "SF Pro Display";
            max-width: 50%;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            text-align: right;
            @media only screen and (max-width: 768px) {
              font-size: 3.1666666666666665vw;
            }
          }
          input {
            max-width: 50%;
            padding: 2%;
            border: 1px solid #000;
            &.error {
              border-color: #da002b;
            }
          }
          .key {
            font-weight: 500;
          }
          .fs_18 {
            font-size: 0.9375vw;
            font-weight: 510;
            @media only screen and (max-width: 768px) {
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
        display: grid;
        place-content: center;
        text-align: center;
        &.error {
          background-color: #da002b;
        }
        @media only screen and (max-width: 768px) {
          margin-top: 4.580152671755725vw;
          font-size: 3.1666666666666665vw;
          padding: 3.1666666666666665vw;
          border-radius: 2.375063613231552vw;
        }
      }
      .policy {
        margin-top: 0.78125vw;
        color: #999;
        font-size: 0.9291666666666666vw;
        font-weight: 500;
        line-height: 1.2416666666666667vw;
        a {
          color: #2b71f8;
        }
        @media only screen and (max-width: 768px) {
          font-size: 3.1666666666666665vw;
          margin-top: 2.3740458015267176vw;
          line-height: 4vw;
        }
      }
    }
    .commentary {
      margin-top: 1.5625vw;
      @media only screen and (max-width: 768px) {
        margin-top: 8.142493638676845vw;
      }
      h3 {
        color: #111;
        font-family: Raleway;
        font-size: 1.0416666666666667vw;
        font-weight: 500;
        line-height: 1.25vw;
        padding-bottom: 1.3541666666666667vw;
        @media only screen and (max-width: 768px) {
          font-size: 5.089058524173028vw;
          line-height: 6.106870229007634vw;
          padding-bottom: 3.816793893129771vw;
        }
      }
      textarea {
        resize: vertical;
        width: 100%;
        max-height: 30vh;
        min-height: 10vh;
        padding: 0.8333333333333334vw;
        border-radius: 0.42vw;
        border: 0.052083333333333336vw solid #e8e8e8;
        font-size: 0.8333333333333334vw;
        &::placeholder {
          color: #111;
          font-weight: 500;
        }
        @media only screen and (max-width: 768px) {
          font-size: 4.071246819338422vw;
          padding: 2.7989821882951653vw 4.071246819338422vw;
          min-height: 30.53435114503817vw;
          border-radius: 3.053435114503817vw;
          line-height: 6.106870229007634vw;
        }
      }
    }
    .submit {
      display: flex;
      margin-top: 1.875vw;
      @media only screen and (max-width: 768px) {
        display: none;
      }
      button {
        margin: 0 auto;
        color: #fff;
        font-size: 0.8333333333333334vw;
        font-weight: 500;
        line-height: 1.25vw;
        padding: 0.4802083333333334vw 1.0416666666666667vw;
        border-radius: 0.625vw;
        background-color: #015ccf;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.8333333333333334vw;
        border: 0.052083333333333336vw solid #015ccf;

        &:hover {
          background-color: #fff;
          color: #015ccf;
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
