import styled from "styled-components";

const BreadcrumbStyled = styled.div`
  display: flex;
  align-items: center;
  margin: 1.5625vw 0;
  span,
  a {
    color: #da002b;
    font-size: 0.78125vw;
    font-weight: 400;
    line-height: 0.9375vw;
   ~ span,
    &.active {
      color: #111;
    }
  }
  span {
    display: inline-block;
    padding: 0 0.5208333333333334vw;
  }
`;

export default BreadcrumbStyled;
