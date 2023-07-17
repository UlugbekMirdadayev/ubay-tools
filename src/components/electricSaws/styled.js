import { styled } from "styled-components";

export const StyledElectricSaws = styled.div`
  display: flex;
  margin-bottom: 3.125vw;
  .card_electric_saws {
    display: flex;
    width: 15.104166666666666vw;
    background: linear-gradient(0deg, #ffda00 0%, #ffda00 100%),
      linear-gradient(90deg, #ffa842 0%, #f7d75b 100%);
    padding: 1.25vw;
    margin: 0px 1.09375vw;
  }
  .title {
    h1 {
      color: #1d2f77;
      font-family: TT Travels;
      font-size: 0.9375vw;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
    button {
      margin-top: 3.5416666666666665vw;
      color: #1d2f77;
      font-family: TT Travels;
      font-size: 0.7291666666666666vw;
      background: transparent;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      text-decoration-line: underline;
      border: none;
      cursor: pointer;
    }
  }
  .saws_image {
    position: relative;
    img {
      position: absolute;
      bottom: -1.25vw;
      width: 6.770833333333333vw;
      height: 11.71875vw;
    }
  }
`;
