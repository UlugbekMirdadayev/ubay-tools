import styled from "styled-components";

export const ScrollAreaView = styled.div`
  width: 80vw;
  margin-left: auto;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const HomeStyled = styled.main`
  display: flex;
  margin-top: 9vw;
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 46vw;
    padding: 0 4.071246819338422vw;
  }

  article {
    width: 17vw;
    margin-right: 2.4479166666666665vw;
    border-right: 0.052083333333333336vw solid #e2e2e2;
    border-top: 0.052083333333333336vw solid #e2e2e2;
    position: fixed;
    top: 9vw;
    max-height: calc(100vh - 9vw);

    @media screen and (max-width: 768px) {
      width: 100%;
      z-index: 102;
      background-color: #fff;
      left: -100%;
      top: 0;
      transition: 300ms ease;

      &.opened {
        left: 0;
      }
    }

    .title-c {
      padding: 1.1979166666666667vw 2.5vw;
      border-bottom: 0.052083333333333336vw solid #e2e2e2;
      font-size: 0.9375vw;
      svg {
        display: none;
        @media screen and (max-width: 768px) {
          display: block;
          width: 5vw;
          height: 5vw;
        }
      }
      @media screen and (max-width: 768px) {
        font-size: 5vw;
        margin-bottom: 4vw;
        border-width: 0.5vw;
        padding: 4vw;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 3vw;
        line-height: 0;
      }
    }
    ul {
      padding: 1.1979166666666667vw 2.5vw;
      overflow-y: auto;
      height: calc(100vh - 14vw);
      @media screen and (max-width: 768px) {
        padding-top: 7vw;
        background-color: #fff;
        height: calc(100vh - 35vw);
      }

      a {
        color: #000;
        font-size: 0.7vw;
        margin-bottom: 1vw;
        font-weight: 500;
        display: flex;
        @media screen and (max-width: 768px) {
          font-size: 4vw;
          margin-bottom: 4vw;
        }
      }
    }
    .mobile_bar {
      display: none;
      @media screen and (max-width: 768px) {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 5vw;
        background-color: #fff;

        .box {
          display: flex;
          align-items: center;
          flex-direction: column;
          gap: 0.2604166666666667vw;
          padding: 0.4166666666666667vw 0.8333333333333334vw;
          transition: 200ms ease;
          border-radius: 4px;
          .icon {
            position: relative;
            display: inline-flex;
            svg {
              width: 5.597964376590331vw;
              height: 5.597964376590331vw;
            }
            span {
              position: absolute;
              top: -50%;
              right: -50%;
              width: 5.089058524173028vw;
              height: 5.089058524173028vw;
              font-size: 2vw;
              border-radius: 50%;
              background: #1d2f77;
              color: #fff;
              display: flex;
              align-items: center;
              justify-content: center;
            }
          }
        }
      }
    }
  }
`;

export default HomeStyled;
