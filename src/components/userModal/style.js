import styled from "styled-components";

export const ModalStyled = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: grid;
  place-content: center;
  overflow-y: auto;

  .overlay {
    position: absolute;
    inset: 0;
    z-index: 1;
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
`;
