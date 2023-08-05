import styled from "styled-components";

export const NewsSectionContainer = styled.section`
  width: 80vw;
  margin: 0 auto;
  padding-bottom: 2.6041666666666665vw;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0 4.325699745547074vw;
  }
  h1 {
    font-size: 1.4583333333333333vw;
    padding-bottom: 2.6041666666666665vw;
    @media screen and (max-width: 768px) {
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
      @media screen and (max-width: 768px) {
        width: 44.529262086513995vw;
        margin-bottom: 5vw;
      }
      a {
        display: flex;
        flex-direction: column;
        gap: 0.78125vw;
        transition: 300ms ease;
        padding: 1vw;
        @media screen and (max-width: 768px) {
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
        @media screen and (max-width: 768px) {
          font-size: 2.5656488549618324vw;
        }
      }
      .title {
        color: #000;
        font-family: Roboto;
        font-size: 0.9375vw;
        font-weight: 700;
        @media screen and (max-width: 768px) {
          font-size: 3.0358778625954197vw;
        }
      }
      img {
        width: 100%;
        height: 6.5625vw;
        object-fit: cover;
        @media screen and (max-width: 768px) {
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
        @media screen and (max-width: 768px) {
          font-size: 3.0358778625954197vw;
          line-height: 150%;
          margin-top: 0;
        }
      }
    }
  }
  .single {
    .flex {
      display: flex;
      align-items: center;
      gap: 0.78125vw;
      @media screen and (max-width: 768px) {
        gap: 2vw;
      }

      .item {
        display: flex;
        align-items: center;
        gap: 0.2604166666666667vw;
        @media screen and (max-width: 768px) {
          gap: 1.5vw;
        }

        svg {
          width: 0.7291666666666666vw;
          height: 0.7291666666666666vw;
          @media screen and (max-width: 768px) {
            width: 3vw;
            height: 3vw;
          }
        }
        span {
          font-size: 0.625vw;
          color: #015ccf;
          font-family: "Montserrat", sans-serif;
          font-weight: 300;
          @media screen and (max-width: 768px) {
            font-size: 3vw;
            font-weight: 500;
            line-height: 0;
          }
        }
      }
    }
    .title {
      margin: 0.78125vw 0;
      font-size: 1.3541666666666667vw;
      font-weight: 700;
      line-height: 1.6666666666666667vw;
      @media screen and (max-width: 768px) {
        font-size: 4vw;
        line-height: 120%;
        margin: 5vw 0;
      }
    }
    .more {
      font-size: 0.9895833333333334vw;
      font-weight: 700;
      line-height: 1.6145833333333333vw;
      color: #000;
      @media screen and (max-width: 768px) {
        font-size: 2vw;
        line-height: 120%;
      }
      a {
        color: #007aff;
        display: inline-block;
        padding: 0.5vw;
        background: aliceblue;
        border-radius: 0.5vw;
        transition: 300ms ease;
        font-size: 0.9vw;
        @media screen and (max-width: 768px) {
          font-size: 1.9vw;
        }
        &:hover {
          background: #d8ebfb;
        }
        &:active {
          background: #007aff;
          color: aliceblue;
        }
      }
    }
    .img-single {
      margin: 1.5625vw 0;
      width: 100%;
      height: 21.666666666666668vw;
      object-fit: cover;
      transition: 300ms ease;
      @media screen and (max-width: 768px) {
        height: 32vw;
        margin: 3vw 0;
        border-radius: 2vw;
      }
      @media screen and (min-width: 768px) {
        &:hover {
          background-color: rgba(0, 0, 0, 0.1);
          cursor: zoom-in;
        }
        &:active {
          transform: scale(1.1);
          cursor: zoom-out;
          object-fit: contain;
          background-color: rgba(0, 0, 0, 0.05);
        }
      }
    }
  }
`;
