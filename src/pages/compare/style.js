import styled from "styled-components";

export const CompareStyled = styled.section`
  width: 80vw;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0 4.325699745547074vw;
  }
  .title {
    color: #111;
    font-size: 1.3541666666666667vw;
    font-weight: 500;
    margin-bottom: 2.0833333333333335vw;
    @media screen and (max-width: 768px) {
      font-size: 6.6157760814249365vw;
      margin-bottom: 3.816793893129771vw;
    }
  }

  .grid {
    margin-left: -9vw;
    width: 98vw;
    display: grid;
    grid-template-columns: 18vw 80vw;

    @media screen and (max-width: 768px) {
      margin-left: 0vw;
      width: 100%;
      grid-template-columns: 25vw 65vw;
    }

    .sidebar {
      width: 18vw;
      display: grid;
      border: 0.052083333333333336vw solid #dedede;
      @media screen and (max-width: 768px) {
        width: 25vw;
      }
    }
    li {
      padding: 0 0.8333333333333334vw;
      font-size: 0.9375vw;
      border: 0.052083333333333336vw solid #dedede;
      border-left: 0;
      border-right: 0;
      border-bottom: 0;
      height: 3.125vw;
      overflow-y: auto;
      display: flex;
      align-items: center;
      @media screen and (max-width: 768px) {
        font-size: 2vw;
        height: 10vw;
      }
    }
    .product_photo {
      height: 15vw;
      display: flex;
      @media screen and (max-width: 768px) {
        height: 25vw;
      }
      img {
        max-width: 100%;
        width: 12.047812500000001vw;
        object-fit: contain;
        height: 100%;
        margin: 0 auto;
        @media screen and (max-width: 768px) {
          width: 25vw;
        }
      }
    }

    .info {
      position: sticky;
      top: 0;
      background-color: #fff;
      border-bottom: 0.052083333333333336vw solid #dedede;
    }
    .slider {
      width: 100%;
      border: 0.052083333333333336vw solid #dedede;
      border-left: 0;

      .slide {
        width: 18vw;
        position: relative;
        border-right: 0.052083333333333336vw solid #dedede;
        @media screen and (max-width: 768px) {
          width: 32.5vw;
        }

        .remove {
          position: absolute;
          top: 0.8333333333333334vw;
          right: 0.8333333333333334vw;
          border-radius: 1.6666666666666667vw;
          border: 0.052083333333333336vw solid #ececec;
          background: #fff;
          width: 1.6666666666666667vw;
          height: 1.6666666666666667vw;
          padding: 0.3125vw;

          svg {
            width: 100%;
            height: 100%;
            path {
              stroke: #babac0;
            }
          }
          @media screen and (max-width: 768px) {
            width: 4.071246819338422vw;
            height: 4.071246819338422vw;
            border-radius: 4.071246819338422vw;
            padding: 1vw;
            top: 1vw;
            right: 1vw;;
          }
        }
      }
    }
  }
`;
