import { styled } from "styled-components";

export const ProfileStyled = styled.section`
  width: 80vw;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0 4.325699745547074vw;
  }
  .grid {
    display: grid;
    grid-template-columns: 24.791666666666668vw 22.34375vw 25.989583333333332vw;
    justify-content: space-between;
    align-items: flex-start;
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

          svg {
            width: 1.25vw;
            height: 1.25vw;
            margin-right: 0.625vw;
          }
        }
      }
    }
    .infos {
      display: grid;
      gap: 0.9375vw;
      h1 {
        color: #015ccf;
        font-size: 1.6666666666666667vw;
        font-weight: 500;
        line-height: 2.0833333333333335vw;
        white-space: pre;
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
          &.value {
            text-decoration: underline;
            color: #000;
          }
        }
      }
      .editor {
        color: #015ccf;
        font-size: 0.625vw;
        font-weight: 500;
        line-height: 0.8333333333333334vw;
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
      }
    }
    .addresses {
      li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1.5625vw;
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

            svg {
              width: 1.0416666666666667vw;
              height: 1.0416666666666667vw;
            }
          }
          span {
            color: #333;
            font-size: 0.7291666666666666vw;
            font-weight: 500;
            line-height: 1.0416666666666667vw;
          }
        }
        button {
          color: #333;
          font-family: Roboto;
          font-size: 0.7291666666666666vw;
          font-weight: 400;
          line-height: 1.0416666666666667vw;
          background-color: #fff;
          border-radius: 6px;
          border: 0.052083333333333336vw solid #b5bbbf;
          padding: 0.3125vw 0.8333333333333334vw;
        }
      }
      .scroll-area {
        overflow-y: auto;
        max-height: 40vh;
        padding-right: 0.3vw;
        .address {
          display: grid;
          padding: 0.5vw;
          border-radius: 0.2vw;
          background-color: #015ecf25;
          margin-bottom: 0.2vw;
          h1 {
            color: #015ccf;
            font-size: 1vw;
            font-weight: 500;
          }
          p {
            font-size: 0.7291666666666666vw;
            color: #000;
            font-weight: 500;
            line-height: 150%;
          }
        }
      }
    }
  }
`;
