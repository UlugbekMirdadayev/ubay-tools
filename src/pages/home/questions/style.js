import styled from "styled-components";

export const QuestionSection = styled.div`
  .header {
    border-top: 0.052083333333333336vw solid #e2e2e2;
    border-bottom: 0.052083333333333336vw solid #e2e2e2;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media only screen and (max-width: 768px) {
      border: 0;
    }

    .row {
      display: flex;
      flex-direction: row;
      @media only screen and (max-width: 768px) {
        display: none;
      }
      a {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: #ffda00;
        padding: 1.1458333333333333vw 2.34375vw;
        flex: 1;
        gap: 0.4166666666666667vw;

        &.primary {
          background-color: #015ccf;
          flex-direction: row;
          gap: 1.0416666666666667vw;

          .icon {
            width: 1.9791666666666667vw;
            height: 1.9791666666666667vw;
            padding: 0.4166666666666667vw;
            border-radius: 50%;
            background-color: #ffffff;

            svg {
              width: 100%;
              height: 100%;
            }
          }

          span {
            color: #ffffff;
            width: max-content;
          }
        }

        span {
          font-size: 0.9375vw;
          color: #015ccf;
          font-weight: 700;
        }
        p {
          font-size: 0.9291666666666666vw;
          width: max-content;
          color: #015ccf;
          font-weight: 500;
        }
      }
    }
    .title {
      padding-left: 2.4479166666666665vw;
      font-size: 1.25vw;
      font-weight: 700;
      @media only screen and (max-width: 768px) {
        font-size: 5.089058524173028vw;
        padding-left: 0;
      }
    }
  }
  .ismobile {
    display: none;
    @media only screen and (max-width: 768px) {
      display: flex;
      flex-direction: column;
      padding-top: 3.5623409669211195vw;
      a {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: #ffda00;
        padding: 6.106870229007634vw 0;
        flex: 1;
        gap: 1.7811704834605597vw;

        &.primary {
          background-color: #015ccf;
          flex-direction: row;
          gap: 1.0416666666666667vw;

          .icon {
            width: 9.669211195928753vw;
            height: 9.669211195928753vw;
            padding: 2.5vw;
            border-radius: 50%;
            background-color: #ffffff;

            svg {
              width: 100%;
              height: 100%;
            }
          }

          span {
            color: #ffffff;
            width: max-content;
          }
        }

        span {
          font-size: 4.644529262086514vw;
          color: #015ccf;
          font-weight: 700;
        }
        p {
          font-size: 3.6124681933842235vw;
          width: max-content;
          color: #015ccf;
          font-weight: 500;
        }
      }
    }
  }
  .empty {
    width: 100%;
    min-height: 20vh;
  }
`;
