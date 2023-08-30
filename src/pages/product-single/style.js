import styled from "styled-components";

export const ProductStyled = styled.section`
  width: 80vw;
  margin: 0 auto;
  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 0 4.325699745547074vw;
  }
  .title_prod {
    font-size: 2.1875vw;
    margin-bottom: 3.6458333333333335vw;
    @media only screen and (max-width: 768px) {
      font-size: 6.6157760814249365vw;
      margin-bottom: 5.066157760814249vw;
    }
  }
  .row_main {
    display: flex;
    gap: 2.34375vw;
    justify-content: space-between;
    @media only screen and (max-width: 768px) {
      flex-direction: column;
    }
  }
  .slider_column {
    width: 24.258541666666666vw;
    @media only screen and (max-width: 768px) {
      width: 100%;
    }

    .slider {
      border-radius: 0.625vw;
      background-color: rgba(14, 50, 103, 0.04);
      min-height: 24.258541666666666vw;
      .slider_image {
        max-width: 100%;
        width: 100%;
        height: 24.258541666666666vw;
        object-fit: cover;
        @media only screen and (max-width: 768px) {
          width: 100%;
          height: 43.81119592875318vw;
        }
      }
    }
    .pagination {
      margin-top: 1.3020833333333333vw;
      display: flex;
      align-items: center;
      position: relative;
      gap: 0.2604166666666667vw;

      @media only screen and (max-width: 768px) {
        margin-top: 5.852417302798982vw;
      }

      .pagination-btn {
        width: 3.7498437499999997vw;
        height: 3.7498437499999997vw;
        border-radius: 0.625vw;
        object-fit: contain;
        background-color: rgba(14, 50, 103, 0.04);
        border: 0.052083333333333336vw solid transparent;
        overflow: hidden;
        @media only screen and (max-width: 768px) {
          width: 10.396692111959288vw;
          height: 10.396692111959288vw;
        }
        &.slide-active {
          border-color: red;
        }
        button {
          background-color: transparent;
          background: none;
          border: 0;
          width: 100%;
          height: 100%;

          img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
        }
      }

      .btn-ctrl {
        min-width: 2.0833333333333335vw;
        height: 2.0833333333333335vw;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 1.0416666666666667vw;
        background: #fff;
        box-shadow: 0 0.2604166666666667vw 0.5208333333333334vw 0
          rgba(0, 0, 0, 0.1);
        cursor: pointer;
        border: 0;

        @media only screen and (max-width: 768px) {
          min-width: 8vw;
          height: 8vw;
          border-radius: 50%;
        }

        &.prev {
          svg {
            rotate: 90deg;
          }
        }
        &.next {
          svg {
            rotate: 270deg;
          }
        }
        svg {
          height: 0.4166666666666667vw;
          width: 0.7291666666666666vw;
          @media only screen and (max-width: 768px) {
            height: 3vw;
            width: 3vw;
          }
        }
      }
    }
  }
  .options {
    width: 26vw;
    max-height: 28vw;
    overflow-y: auto;
    padding: 0 0.5vw;
    @media only screen and (max-width: 768px) {
      width: 100%;
      max-height: none;
      overflow-y: visible;
      margin-top: 5.852417302798982vw;
    }
    ul {
      display: grid;
      gap: 1.0416666666666667vw;
      @media only screen and (max-width: 768px) {
        gap: 5.089058524173028vw;
      }
      li {
        display: flex;
        font-size: 0.9291666666666666vw;
        font-weight: 500;
        line-height: 1.2416666666666667vw;
        justify-content: space-between;
        width: 100%;
        @media only screen and (max-width: 768px) {
          font-size: 3.5623409669211195vw;
          line-height: 5.089058524173028vw;
        }
        .key {
          color: #999;
        }
        .value {
          color: #111;
        }
      }
    }
  }
  .cart_card {
    width: 20.208333333333332vw;
    border-radius: 12px;
    border: 1px solid #e8e8e8;
    padding: 1.40625vw 1.3020833333333333vw;

    @media only screen and (max-width: 768px) {
      width: 100%;
      border-radius: 2.848854961832061vw;
      padding: 6.361323155216285vw;
    }

    .price {
      color: #111;
      font-size: 1.1458333333333333vw;
      font-weight: 700;
      margin-bottom: 1.4583333333333333vw;

      @media only screen and (max-width: 768px) {
        font-size: 5.222900763358778vw;
        margin-bottom: 6.6157760814249365vw;
      }
    }
    .info_row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1.25vw;
      @media only screen and (max-width: 768px) {
        margin-bottom: 5.597964376590331vw;
      }
      .desc {
        color: #999;
        font-size: 0.9291666666666666vw;
        font-weight: 500;
        @media only screen and (max-width: 768px) {
          font-size: 3.3236641221374046vw;
        }
      }
      svg {
        width: 1.25vw;
        height: 1.25vw;
        @media only screen and (max-width: 768px) {
          width: 5.597964376590331vw;
          height: 5.597964376590331vw;
        }
      }
    }
    .delivery {
      font-size: 0.8333333333333334vw;
      color: #111;
      margin-bottom: 1.71875vw;
      @media only screen and (max-width: 768px) {
        font-size: 3.7984732824427487vw;
        margin-bottom: 7.888040712468193vw;
      }
      .row {
        display: flex;
        align-items: center;
        margin-bottom: 0.2604166666666667vw;
        @media only screen and (max-width: 768px) {
          margin-bottom: 7.633587786259542vw;
        }
        span {
          font-weight: 700;
        }
        svg {
          width: 1.25vw;
          height: 1.25vw;
          margin-right: 0.3645833333333333vw;
          @media only screen and (max-width: 768px) {
            width: 5.597964376590331vw;
            height: 5.597964376590331vw;
            margin-right: 1.7811704834605597vw;
          }
        }
      }
      .text {
        font-weight: 500;
        padding-left: 1.5625vw;
        max-width: 13.020833333333334vw;
        line-height: 150%;
        @media only screen and (max-width: 768px) {
          max-width: 60.06259541984733vw;
          padding-left: 5.597964376590331vw;
        }
      }
    }
    .bottom_btns {
      display: flex;
      flex-direction: column;
      padding: 1.3020833333333333vw 0;
      border-top: 0.05786458333333333vw solid #e8e8e8;
      gap: 0.8333333333333334vw;
      @media only screen and (max-width: 768px) {
        padding: 5.852417302798982vw 0;
        gap: 3.816793893129771vw;
        border-width: 0.2544529262086514vw;
      }
      button {
        padding: 0.625vw;
        border: 0.052083333333333336vw solid #111;
        border-radius: 0.625vw;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: transparent;
        gap: 0.2604166666666667vw;
        @media only screen and (max-width: 768px) {
          padding: 2.7989821882951653vw 0;
          gap: 1.272264631043257vw;
          border-radius: 2.848854961832061vw;
          border-width: 0.2544529262086514vw;
        }

        &:hover {
          background-color: #111;
          span {
            color: #fff;
          }
        }
        input,
        span {
          color: #111;
          font-size: 0.8333333333333334vw;
          font-weight: 500;
          line-height: 1.25vw;
          display: inline-flex;
          @media only screen and (max-width: 768px) {
            font-size: 3.7984732824427487vw;
            line-height: 5.697709923664122vw;
          }
        }

        svg {
          width: 1.25vw;
          height: 1.25vw;
          @media only screen and (max-width: 768px) {
            width: 5.597964376590331vw;
            height: 5.597964376590331vw;
          }
        }

        &.active {
          padding: 0;
          justify-content: space-between;
          border-color: #fff;
          overflow: hidden;
          input {
            border: 0;
            background: none;
            text-align: center;
            width: 50%;
            color: #fff;
          }
          span {
            padding: 0.625vw;
            justify-content: center;
            align-items: center;
            width: 25%;
            @media only screen and (max-width: 768px) {
              padding: 2.7989821882951653vw 0;
            }
            &:hover {
              background-color: rgba(1, 92, 207, 1);
            }
          }
        }
      }

      .primary {
        border-color: #12bf6c;
        background: #12bf6c;
        &:hover {
          background-color: #039b51;
        }
        span {
          color: #fff;
        }
      }
    }
    .count {
      display: flex;
      align-items: center;

      span {
        color: #111;
        font-size: 0.9375vw;
        font-weight: 700;
        line-height: 1.25vw;
        @media only screen and (max-width: 768px) {
          font-size: 4.2732824427480915vw;
          line-height: 5.697709923664122vw;
        }
      }
      svg {
        width: 0.8333333333333334vw;
        height: 0.8333333333333334vw;
        @media only screen and (max-width: 768px) {
          width: 3.816793893129771vw;
          height: 3.816793893129771vw;
        }
      }
    }
  }
  .add_wishes {
    border: 0;
    background: none;
    position: relative;
    top: -1.8229166666666667vw;
    display: flex;
    align-items: center;
    gap: 0.2604166666666667vw;
    padding: 0.5vw;
    background: aliceblue;
    border-radius: 0.5vw;
    transition: 300ms ease;
    @media only screen and (max-width: 768px) {
      top: 0;
      margin: 12.72264631043257vw 0;
      gap: 2vw;
      padding: 2vw;
      border-radius: 2vw;
    }
    span {
      color: #015ccf;
      font-size: 0.8333333333333334vw;
      font-weight: 500;
      line-height: 1.2416666666666667vw;
      transition: 300ms ease;
      @media only screen and (max-width: 768px) {
        font-size: 3.7984732824427487vw;
        line-height: 4.748091603053435vw;
      }
    }
    svg {
      transition: 300ms ease;
    }
    &:hover {
      background: #d8ebfb;
    }
    &.active,
    &:active {
      background: #007aff;
      span {
        color: aliceblue;
      }
      svg {
        stroke: aliceblue;
      }
      &.active {
        svg {
          stroke: red;
        }
      }
    }
    svg {
      width: 1.0416666666666667vw;
      height: 1.0416666666666667vw;
      @media only screen and (max-width: 768px) {
        width: 4.748091603053435vw;
        height: 4.748091603053435vw;
      }
    }
  }
  .description {
    margin-top: 2.6041666666666665vw;
    margin-bottom: 5.208333333333333vw;
    @media only screen and (max-width: 768px) {
      margin: 7.633587786259542vw 0;
    }
    .title {
      color: #000;
      font-size: 1.6666666666666667vw;
      font-weight: 400;
      line-height: 2.0833333333333335vw;
      margin-bottom: 1.40625vw;
      display: flex;
      align-items: center;
      gap: 0.5vw;
      @media only screen and (max-width: 768px) {
        font-size: 5vw;
        line-height: 120%;
        gap: 2.5vw;
        font-weight: 500;
        margin-bottom: 3vw;
      }
    }
    .text {
      color: #999;
      font-size: 0.8333333333333334vw;
      font-weight: 500;
      line-height: 1.25vw;
      @media only screen and (max-width: 768px) {
        font-size: 3.5vw;
        line-height: 150%;
      }
    }
  }
  .motorcycle_cultivator {
    flex: 1;
    @media only screen and (max-width: 768px) {
      width: 100%;
      margin-top: 12.72264631043257vw;
    }
    .motorcycle_cultivator_card {
      width: max-content;
      padding: 0.5vw 0.2vw;

      .hover_body {
        width: 14.0625vw;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        transition: 300ms ease;
        position: relative;
        padding: 1.21875vw 0.5291666666666666vw;
        min-height: 30vw;
        gap: 1.5vw;
        &:hover {
          box-shadow: 0 0 4px 1px #00000026;
          @media only screen and (max-width: 768px) {
            box-shadow: none;
          }
        }

        @media only screen and (max-width: 768px) {
          width: 47vw;
          gap: 5.089058524173028vw;
          padding: 0 2.5vw;
          min-height: 80vw;
        }
      }

      .like_button {
        position: absolute;
        top: 1vw;
        right: 1vw;
        cursor: pointer;

        svg {
          width: 0.8333333333333334vw;
          height: 0.8333333333333334vw;
          @media only screen and (max-width: 768px) {
            width: 4.071246819338422vw;
            height: 4.071246819338422vw;
          }
        }
      }
      img {
        width: 12.65625vw;
        height: 11.40625vw;
        object-fit: contain;
        min-width: 12.65625vw;
        min-height: 11.40625vw;

        @media only screen and (max-width: 768px) {
          width: 34.01246819338423vw;
          min-width: 34.01246819338423vw;
          height: 27.28091603053435vw;
          min-height: 27.28091603053435vw;
        }
      }
      h2 {
        color: #1d2f77;
        font-size: 0.8165104166666667vw;
        font-weight: 700;
        @media only screen and (max-width: 768px) {
          font-size: 2.8343511450381675vw;
        }
      }
      .link-category {
        display: inline-flex;
        color: #00132c;
        font-size: 0.8544270833333333vw;
        cursor: pointer;
        @media only screen and (max-width: 768px) {
          font-size: 2.480152671755725vw;
        }
      }
      h1 {
        color: #000;
        font-size: 0.9375vw;
        font-weight: 700;
        @media only screen and (max-width: 768px) {
          font-size: 4.78295165394402vw;
        }
      }
      .motorcycle_cultivator_cart {
        display: flex;
        justify-content: space-between;
        width: 100%;
        .button {
          color: #fff;
          text-align: center;
          font-size: 0.9291666666666666vw;
          font-weight: 600;
          text-transform: uppercase;
          background: #015ccf;
          padding: 0.140625vw 0;
          margin: 0;
          margin-right: 0.6770833333333334vw;
          cursor: pointer;
          border: 0;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          @media only screen and (max-width: 768px) {
            font-size: 2.480152671755725vw;
            padding: 3vw 0;
          }
          span {
            width: 33.3%;
            display: inline-flex;
            align-items: center;
            justify-content: center;
          }
        }
        .compare-btn {
          cursor: pointer;
          background: #ffda00;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.78125vw;
          border: 0;

          @media only screen and (max-width: 768px) {
            font-size: 2.480152671755725vw;
            padding: 3vw;
          }

          &.selected {
            background-color: rgb(248 113 113/1);
          }

          svg {
            width: 1vw;
            height: 1vw;
            @media only screen and (max-width: 768px) {
              width: 3vw;
              height: 3vw;
            }
          }
        }
      }
    }
  }
`;
