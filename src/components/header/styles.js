import styled from "styled-components";

const HeaderStyled = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 99;
  background-color: #fff;
  width: 100%;
  padding-bottom: 1vw;
  @media only screen and (max-width: 768px) {
    padding-bottom: 5vw;
  }
  &.isNight {
    nav {
      background-color: #192128;
    }
  }

  nav {
    padding: 0 10vw;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background-color: rgba(1, 92, 207, 1);
    a {
      color: #fff;
      font-size: 1.0416666666666667vw;
      font-style: normal;
      font-weight: 700;
      font-family: "SF Pro Display";
      margin-right: 1.25vw;
    }

    .flex-group {
      display: flex;
      border-right: 0.052083333333333336vw solid rgba(255, 255, 255, 0.3);
      border-left: 0.052083333333333336vw solid rgba(255, 255, 255, 0.3);
      padding: 0.8333333333333334vw 1.4114583333333333vw;
      gap: 1.3541666666666667vw;
      button {
        font-size: 0.79375vw;
        background: none;
        border: 0;
        cursor: pointer;
        color: rgba(255, 255, 255, 0.7);

        &.active {
          color: #fff;
          font-weight: 700;
        }
      }
    }
  }
  .navbar {
    padding: 1.0416666666666667vw 10vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .space {
      display: flex;
      align-items: center;
      margin-right: 7.291666666666667vw;
      .logo {
        &_box {
          display: inline-flex;
        }
        width: 5.625vw;
        height: 1.875vw;
      }
      .overlay {
        position: fixed;
        z-index: 1;
        inset: 0;
        background: #0006;
      }
      .search-bar {
        position: relative;
        display: flex;
        align-items: center;
        flex: 1;
        background: #fafafa;
        width: 42.1875vw;
        padding: 0.625vw 0;
        padding-right: 1.3541666666666667vw;
        margin-left: 1.9270833333333333vw;
        z-index: 2;
        &.focused {
          border-radius: 0.625vw;
        }
        input {
          padding: 0 1.25vw;
          flex: 1;
          border: 0;
          background: transparent;
          color: #000;
          font-size: 0.7936458333333333vw;

          &::placeholder {
            color: #999;
            font-family: "Raleway";
          }
        }
        svg {
          width: 0.9895833333333334vw;
          height: 0.9895833333333334vw;
          min-width: 0.9895833333333334vw;
          min-height: 0.9895833333333334vw;
        }

        .list_products {
          position: absolute;
          top: calc(100% + 0.2604166666666667vw);
          left: 0;
          background-color: #fff;
          overflow: hidden;
          width: 100%;
          box-shadow: 0px 0.7291666666666666vw 1.0416666666666667vw -0.8333333333333334vw
            #000;
          display: grid;
          z-index: 5;
          border-radius: 0.625vw;
          padding: 0.2vw;

          .scroll-custome {
            min-height: 50vh;
            max-height: 80vh;
            overflow-y: auto;
            @media only screen and (max-width: 768px) {
              max-height: calc(100vh - 40vw);
            }
            &.empty {
              display: grid;
              place-content: center;
            }
          }

          a {
            color: #111;
            font-size: 0.8333333333333334vw;
            display: flex;
            padding: 0 0.8333333333333334vw;

            @media only screen and (max-width: 768px) {
              font-size: 4.071246819338422vw;
              padding: 0 2.035623409669211vw;
            }

            &:hover {
              background-color: #f2f2f2;
            }
            img {
              width: 2.34375vw;
              height: 2.34375vw;
              object-fit: contain;
              @media only screen and (max-width: 768px) {
                width: 10.178117048346056vw;
                height: 10.178117048346056vw;
              }
            }
            .row {
              border-bottom: 0.052083333333333336vw solid #e2e2e2;
              flex: 1;
              display: flex;
              align-items: center;
              justify-content: space-between;
              padding: 0.2604166666666667vw 0.5208333333333334vw;
              &.empty {
                border: 0;
              }

              @media only screen and (max-width: 768px) {
                padding: 1.272264631043257vw 2.035623409669211vw;
                padding-right: 0;
              }

              span {
                line-height: 120%;
              }

              svg {
                transform: rotate(-90deg);
                path {
                  fill: #999999;
                }
              }
            }
          }
        }
      }
    }
    .between {
      display: flex;
      align-items: center;
      .box {
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 0.2604166666666667vw;
        padding: 0.4166666666666667vw 0.8333333333333334vw;
        transition: 200ms ease;
        border-radius: 4px;
        &.active {
          background-color: rgba(1, 92, 207, 0.1);
        }
        .icon {
          position: relative;
          display: inline-flex;
          svg {
            width: 1.1979166666666667vw;
            height: 1.1979166666666667vw;
          }
          span {
            position: absolute;
            top: -50%;
            right: -50%;
            width: 1vw;
            height: 1vw;
            font-size: 0.5729166666666666vw;
            border-radius: 50%;
            background: #1d2f77;
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
        p {
          font-size: 0.6944270833333334vw;
          color: #111;
          font-weight: 500;
          font-family: "Raleway";
        }
      }
    }
  }
  .mb-btn {
    display: none;
    align-items: center;
    justify-content: center;
  }
  @media only screen and (max-width: 768px) {
    nav {
      padding: 4.325699745547074vw;
      padding-top: 10vw;
      a,
      .flex-group button {
        font-size: 3.87735368956743vw;
        margin: 0;
      }
      .flex-group {
        gap: 6.361323155216285vw;
        border-color: rgba(217, 217, 217, 0.2);
        border-width: 0.5089058524173028vw;
        margin-left: 1.7811704834605597vw;
        padding: 0 1.7811704834605597vw;
      }
    }
    .navbar {
      padding: 4.325699745547074vw;
      padding-top: 6.6157760814249365vw;
      background-color: #015ccf;
      align-items: unset;
      .mb-btn {
        display: flex;
        background-color: #fffdfd;
        border: 0;
        padding: 2.544529262086514vw 1.5267175572519085vw;
        svg {
          width: 6.6157760814249365vw;
          height: 4.580152671755725vw;
        }
      }
      .space {
        margin: 0;
        .logo {
          width: 27.480916030534353vw;
          height: 9.16030534351145vw;
          position: absolute;
          top: 10vw;
          left: 4.325699745547074vw;
          path {
            fill: #fff;
            &:nth-child(2) {
              fill: #ffda00;
            }
          }
        }
        .search-bar {
          padding: 2.544529262086514vw;
          width: 80.1526717557252vw;
          margin-left: 0;
          position: relative;

          input {
            font-size: 4.071246819338422vw;
          }

          svg {
            width: 4.919083969465649vw;
            height: 4.919083969465649vw;
            min-width: 4.919083969465649vw;
            min-height: 4.919083969465649vw;
          }
        }
      }
      .between {
        display: none;
      }
    }
  }
  .loader-icon {
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default HeaderStyled;
