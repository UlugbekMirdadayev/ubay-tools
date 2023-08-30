import styled from "styled-components";

export const ModalStyled = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: grid;
  place-content: center;
  overflow-y: auto;
  z-index: 5;

  .overlay {
    position: absolute;
    inset: 0;
    z-index: 1;
  }
  &.w-80 {
    @media only screen and (max-width: 768px) {
      place-content: start center;
    }
    .modal-body {
      padding: 0;
      width: 29.166666666666668vw;
      @media only screen and (max-width: 768px) {
        margin: 10vw 0;
      }

      .cont {
        border-radius: 0.20833333333333334vw;
        border: 0.052083333333333336vw solid #ececec;
        margin: 1.8229166666666667vw 1.09375vw;

        @media only screen and (max-width: 768px) {
          margin: 9.669211195928753vw 6.106870229007634vw;
        }

        .top {
          border-bottom: 0.052083333333333336vw solid #ececec;
          padding: 1.09375vw;
          margin-bottom: 1.0416666666666667vw;
          display: flex;
          align-items: center;
          justify-content: space-between;
          @media only screen and (max-width: 768px) {
            margin-bottom: 5.089058524173028vw;
            padding: 2.544529262086514vw;
          }
          .title-top {
            display: flex;
            align-items: center;
            gap: 0.8333333333333334vw;
            @media only screen and (max-width: 768px) {
              gap: 2.544529262086514vw;
            }
            .circle {
              width: 2.0833333333333335vw;
              height: 2.0833333333333335vw;
              border-radius: 1.0416666666666667vw;
              border: 0.052083333333333336vw solid #777;
              background: #f6f6f6;
              display: grid;
              place-content: center;
              @media only screen and (max-width: 768px) {
                width: 6.106870229007634vw;
                height: 6.106870229007634vw;
                border-radius: 50%;
              }
              svg {
                width: 1.0416666666666667vw;
                height: 1.0416666666666667vw;

                @media only screen and (max-width: 768px) {
                  width: 3.053435114503817vw;
                  height: 3.053435114503817vw;
                }
              }
            }
            h3 {
              color: #333;
              font-family: Roboto;
              font-size: 0.9291666666666666vw;
              font-weight: 500;
              line-height: 1.2416666666666667vw;
              @media only screen and (max-width: 768px) {
                font-size: 3.187022900763359vw;
                line-height: 1.2;
              }
            }
          }
          .closer-btn {
            color: #333;
            font-family: Roboto;
            font-size: 0.9291666666666666vw;
            font-weight: 500;
            line-height: 1.2416666666666667vw;
            padding: 0.3125vw 0.78125vw;
            background-color: #fff;
            border-radius: 0.3125vw;
            border: 0.052083333333333336vw solid #b5bbbf;
            @media only screen and (max-width: 768px) {
              font-size: 2.959287531806616vw;
              line-height: 2.959287531806616vw;
              border-radius: 1vw;
              padding: 1vw;
            }
          }
        }
        .input-row {
          border-radius: 0.3125vw;
          background: rgba(255, 255, 255, 0);
          margin: 0 0.8333333333333334vw;
          margin-bottom: 1.4583333333333333vw;
          position: relative;
          display: flex;
          align-items: center;
          border: 0.052083333333333336vw solid #d5d8df;
          &.error {
            border-color: #f50;
          }
          @media only screen and (max-width: 768px) {
            border-radius: 1.365903307888041vw;
            border-width: 0.2544529262086514vw;
            margin: 0 2.544529262086514vw;
            margin-bottom: 6.361323155216285vw;
          }
          p {
            position: absolute;
            color: #767676;
            font-family: Roboto;
            font-size: 0.9291666666666666vw;
            font-weight: 400;
            line-height: 1.2416666666666667vw;
            left: 0.7291666666666666vw;
            top: -0.5291666666666666vw;
            background-color: #fff;
            white-space: pre;
            @media only screen and (max-width: 768px) {
              font-size: 3.187022900763359vw;
              line-height: 4.325699745547074vw;
              top: -2vw;
              left: 3.816793893129771vw;
            }
            span {
              color: #fbc100;
            }
          }
          &:has(select) {
            padding-right: 0.8333333333333334vw;
          }
          select {
            cursor: pointer;
          }
          select,
          input {
            flex: 1;
            padding: 0.8333333333333334vw;
            color: #333;
            font-family: Roboto;
            font-size: 0.9291666666666666vw;
            font-weight: 500;
            line-height: 1.2416666666666667vw;
            border: 0;
            border-radius: 0.3125vw;
            @media only screen and (max-width: 768px) {
              border-radius: 1.365903307888041vw;
              font-size: 3.187022900763359vw;
              line-height: 4.325699745547074vw;
              padding: 3.816793893129771vw;
            }
          }
        }
        .checkbox-row {
          display: flex;
          align-items: center;
          gap: 0.8333333333333334vw;
          margin: 0 0.8333333333333334vw;
          margin-bottom: 1.3020833333333333vw;
          @media only screen and (max-width: 768px) {
            margin: 0 2.544529262086514vw;
            margin-bottom: 5.089058524173028vw;
            gap: 2.035623409669211vw;
          }

          input[type="checkbox"] {
            width: 0.9375vw;
            height: 0.9375vw;
            background-color: #fff;
            @media only screen and (max-width: 768px) {
              width: 4.071246819338422vw;
              height: 4.071246819338422vw;
            }
          }
          span {
            color: #333;
            font-family: Roboto;
            font-size: 0.9291666666666666vw;
            font-weight: 400;
            line-height: 1.2416666666666667vw;
            @media only screen and (max-width: 768px) {
              font-size: 3.187022900763359vw;
              line-height: 4.325699745547074vw;
            }
          }

          button {
            font-size: 0.8333333333333334vw;
            line-height: 1.1666666666666667vw;
            color: #333;
            font-weight: 500;
            font-family: "Roboto", sans-serif;
            padding: 0.5729166666666666vw 1.0416666666666667vw;
            border-radius: 0.3125vw;
            border: 0.052083333333333336vw solid transparent;
            @media only screen and (max-width: 768px) {
              font-size: 3.187022900763359vw;
              line-height: 4.325699745547074vw;
              padding: 2.544529262086514vw 4.325699745547074vw;
              border-radius: 1.365903307888041vw;
            }

            &[type="submit"] {
              background: #fbc100;
              border-color: #fbc100;
            }

            &[type="button"] {
              background: #eee;
              border-color: #eee;
            }
          }
        }
      }
    }
  }
  .modal-body {
    position: relative;
    z-index: 2;
    background-color: #fff;
    padding: 1.5104166666666667vw 1.40625vw;
    min-width: 23.802083333333332vw;
    @media only screen and (max-width: 768px) {
      min-width: 92vw;
      padding: 7.633587786259542vw 3.816793893129771vw;
    }

    .closer {
      position: absolute;
      top: 1.5104166666666667vw;
      right: 1.40625vw;
      width: 0.8333333333333334vw;
      height: 0.8333333333333334vw;
      border: 0;
      background: none;

      @media only screen and (max-width: 768px) {
        width: 5vw;
        height: 5vw;
        top: 7.633587786259542vw;
        right: 3.816793893129771vw;
      }

      svg {
        width: 100%;
        height: 100%;
      }
    }
    .title {
      max-width: calc(100% - 0.8333333333333334vw);
      color: #000;
      font-size: 1.1045833333333333vw;
      font-weight: 500;
      margin-bottom: 2.0833333333333335vw;
      @media only screen and (max-width: 768px) {
        max-width: calc(100% - 5vw);
        font-size: 4.274554707379134vw;
        margin-bottom: 8.142493638676845vw;
      }
    }

    label {
      color: #a7a7a7;
      font-size: 0.6354166666666666vw;
      font-weight: 500;
      @media only screen and (max-width: 768px) {
        font-size: 2.459033078880407vw;
      }
    }
    .input_row {
      border: 1px solid #015ccf;
      display: flex;
      align-items: center;
      margin-bottom: 0.7291666666666666vw;
      @media only screen and (max-width: 768px) {
        margin-bottom: 3.5623409669211195vw;
      }
      &.error {
        border-color: #f50;
        span {
          border-color: #f50;
        }
      }
      .span,
      span {
        border-right: 1px solid #015ccf;
        padding: 0.7291666666666666vw 0.5729166666666666vw;
        margin-right: 0.5729166666666666vw;
        color: #015ccf;
        font-size: 0.7702083333333333vw;
        font-weight: 500;
        line-height: 0.8854166666666666vw;
        @media only screen and (max-width: 768px) {
          padding: 2.7989821882951653vw 2.2900763358778624vw;
          margin-right: 2.2900763358778624vw;
          font-size: 2.9806615776081427vw;
          line-height: 4.325699745547074vw;
        }
      }
      .span {
        border: 0;
        margin: 0;
      }
      &:has(input:read-only) {
        input {
          opacity: 0.5;
          cursor: no-drop;
        }
        span {
          cursor: alias;
        }
      }
      input {
        flex: 1;
        border: 0;
        background: none;
        color: #015ccf;
        font-size: 0.7702083333333333vw;
        font-weight: 500;
        line-height: 0.8854166666666666vw;
        @media only screen and (max-width: 768px) {
          font-size: 2.9806615776081427vw;
          line-height: 4.325699745547074vw;
        }
      }
    }
    .submit {
      &:not(.isLoading) {
        background: #ffda00;
        color: #000;
      }

      padding: 0.8333333333333334vw;
      color: #a7a7a7;
      font-size: 0.7702083333333333vw;
      font-weight: 500;
      width: 80%;
      position: relative;
      left: 50%;
      transform: translateX(-50%);
      border: 0.052083333333333336vw solid #ffda00;
      margin-top: 3.75vw;
      @media only screen and (max-width: 768px) {
        margin-top: 12.72264631043257vw;
        font-size: 2.9806615776081427vw;
        line-height: 4.325699745547074vw;
        padding: 3.5623409669211195vw;
      }
    }
  }
  .row-space-between{ 
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;
