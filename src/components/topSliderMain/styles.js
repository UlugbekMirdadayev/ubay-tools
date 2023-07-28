import { styled } from "styled-components";

export const StyledImageSlider = styled.div`
  margin-bottom: 6.6458333333333335vw;
  max-width: 100%;
  .img {
    width: 60.833333333333336vw;
    height: 21.510416666666668vw;
    margin-right: 1.0416666666666667vw;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .pagination {
    display: flex;
    align-items: center;
    gap: 0.9145833333333332vw;
    margin-top: 1.1979166666666667vw;
    min-height: 0.5227083333333333vw;
    span {
      width: 0.2604166666666667vw;
      height: 0.2604166666666667vw;
      border-radius: 50%;
      background-color: #e2e2e2;
      cursor: pointer;
      transition: 300ms ease;
      &.active {
        width: 0.5227083333333333vw;
        height: 0.5227083333333333vw;
        background-color: #1d2f77;
      }
    }
  }
`;
