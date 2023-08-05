import { styled } from "styled-components";

export const StyledElectricSaws = styled.div`
  display: flex;
  margin-bottom: 3.125vw;
  position: relative;
  &::after,
  &::before {
    content: "";
    position: absolute;
    top: 0;
    z-index: 2;
    height: 100%;
    width: 2.5vw;
    pointer-events: none;
    transition: 300ms ease;
  }
  &.after {
    &::after {
      right: 0;
      width: 6.5vw;
      background: linear-gradient(
        270deg,
        #fff 58.33%,
        rgba(255, 255, 255, 0) 100%
      );
    }
  }
  &.before {
    &::before {
      left: 0;
      width: 6.5vw;
      background: linear-gradient(
        90deg,
        #fff 58.33%,
        rgba(255, 255, 255, 0) 100%
      );
    }
  }
  .mb-controller {
    display: none;
    align-items: center;
    justify-content: center;
    gap: 3.816793893129771vw;
    @media screen and (max-width: 768px) {
      display: flex;
      margin-top: 3vw;
      button {
        border: 0;
        background: none;

        svg {
          width: 13.231552162849873vw;
          height: 13.231552162849873vw;
          circle {
            fill: #f6f6f6;
            transition: 300ms ease;
          }
          path {
            fill: #1d2f77;
            transition: 300ms ease;
          }
        }
        &:hover {
          svg {
            circle {
              fill: #1d2f77;
            }
            path {
              fill: white;
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    display: block;
    &::after,
    &::before {
      display: none;
    }
  }
  .card_electric_saws {
    display: flex;
    width: 15.104166666666666vw;

    padding: 1.25vw;
    margin-right: 1.09375vw;
    &:not(.isLoading) {
      background: linear-gradient(0deg, #ffda00 0%, #ffda00 100%),
        linear-gradient(90deg, #ffa842 0%, #f7d75b 100%);
    }

    @media screen and (max-width: 768px) {
      width: 44.020356234096695vw;
      padding: 5vw 0;
      margin-right: 4.071246819338422vw;
      background: none;
      align-items: end;
    }
  }
  .title {
    z-index: 2;
    @media screen and (max-width: 768px) {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 25vw;
      width: 100%;
      padding: 1.0178117048346056vw;
      z-index: 0;
      background: linear-gradient(0deg, #ffda00 0%, #ffda00 100%),
        linear-gradient(90deg, #ffa842 0%, #f7d75b 100%);
    }
    h1 {
      color: #000;
      font-size: 0.9375vw;
      font-weight: 700;
      @media screen and (max-width: 768px) {
        font-size: 4.071246819338422vw;
      }
    }
    a {
      display: inline-flex;
      margin-top: 3.5416666666666665vw;
      color: #000;
      font-size: 0.7291666666666666vw;
      font-weight: 400;
      text-decoration-line: underline;
      @media screen and (max-width: 768px) {
        font-size: 3.053435114503817vw;
        margin-top: 5.089058524173028vw;
        padding: 2.544529262086514vw;
      }
    }
  }
  .saws_image {
    @media screen and (max-width: 768px) {
      height: 34.15368956743002vw;
    }
    img {
      position: absolute;
      bottom: -1.25vw;
      right: 0;
      width: 6.770833333333333vw;
      height: 11.71875vw;
      z-index: 1;
      object-fit: contain;
      @media screen and (max-width: 768px) {
        width: 19.733333333333334vw;
        height: 34.15368956743002vw;
        bottom: 5vw;
      }
    }
  }
`;
