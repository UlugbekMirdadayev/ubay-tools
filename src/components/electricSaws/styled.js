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
  .card_electric_saws {
    display: flex;
    width: 15.104166666666666vw;
    background: linear-gradient(0deg, #ffda00 0%, #ffda00 100%),
      linear-gradient(90deg, #ffa842 0%, #f7d75b 100%);
    padding: 1.25vw;
    margin-right: 1.09375vw;
  }
  .title {
    z-index: 2;
    h1 {
      color: #000;
      font-size: 0.9375vw;
      font-weight: 700;
    }
    a {
      display: inline-flex;
      margin-top: 3.5416666666666665vw;
      color: #000;
      font-size: 0.7291666666666666vw;
      font-weight: 400;
      text-decoration-line: underline;
    }
  }
  .saws_image {
    img {
      position: absolute;
      bottom: -1.25vw;
      right: 0;
      width: 6.770833333333333vw;
      height: 11.71875vw;
      z-index: 1;
      object-fit: contain;
    }
  }
`;
