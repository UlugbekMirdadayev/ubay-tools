import styled from "styled-components";

export const NewsSectionContainer = styled.section`
  margin-top: 5.729166666666667vw;
  padding-bottom: 2.6041666666666665vw;
  @media only screen and (max-width: 768px) {
    margin-top: 10.687022900763358vw;
  }
  h1 {
    font-size: 1.4583333333333333vw;
    padding-bottom: 2.6041666666666665vw;
    @media only screen and (max-width: 768px) {
      font-size: 7.124681933842239vw;
      padding-bottom: 5.089058524173028vw;
    }
  }
  .row {
    display: flex;
    flex-direction: row;

    .card {
      width: 18.979166666666668vw;
      &.isLoading {
        min-height: 20vh;
        margin: 1vw;
      }
      @media only screen and (max-width: 768px) {
        width: 44.529262086513995vw;
        margin-bottom: 5vw;
      }
      a {
        display: flex;
        flex-direction: column;
        gap: 0.78125vw;
        transition: 300ms ease;
        padding: 1vw;
        @media only screen and (max-width: 768px) {
          gap: 5.089058524173028vw;
        }

        &:hover {
          background-color: #015ccf0f;
        }
      }
      .date {
        color: #015ccf;
        font-family: "SF Pro Display";
        font-size: 0.9895833333333334vw;
        font-weight: 400;
        @media only screen and (max-width: 768px) {
          font-size: 2.5656488549618324vw;
        }
      }
      .title {
        color: #000;
        font-family: Roboto;
        font-size: 0.9375vw;
        font-weight: 700;
        @media only screen and (max-width: 768px) {
          font-size: 3.0358778625954197vw;
        }
      }
      img {
        width: 100%;
        height: 6.5625vw;
        object-fit: cover;
        @media only screen and (max-width: 768px) {
          height: 16.20381679389313vw;
        }
      }
      .prg {
        margin-top: 0.78125vw;
        color: #000;
        font-family: Roboto;
        font-size: 0.7291666666666666vw;
        font-weight: 400;
        line-height: 1.2497916666666666vw;
        @media only screen and (max-width: 768px) {
          font-size: 3.0358778625954197vw;
          line-height: 150%;
          margin-top: 0;
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
      padding: 3vw 0;
      margin-top: 1vw;
    }
  }
`;
