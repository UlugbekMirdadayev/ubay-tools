import styled from "styled-components";

const BreadcrumbStyled = styled.div`
  display: flex;
  align-items: center;
  margin: 1.5625vw 0;
  @media only screen and (max-width: 768px) {
    margin: 0;
    margin-bottom: 5.089058524173028vw;
  }
  span,
  a {
    color: #da002b;
    font-size: 0.78125vw;
    font-weight: 400;
    line-height: 0.9375vw;

    @media only screen and (max-width: 768px) {
      font-size: 2.8625954198473282vw;
      line-height: 3.435114503816794vw;
    }
    ~ span,
    &.active {
      color: #111;
    }
  }
  span {
    display: inline-block;
    padding: 0 0.5208333333333334vw;
    @media only screen and (max-width: 768px) {
      padding: 0 2.035623409669211vw;
    }
  }
`;

export default BreadcrumbStyled;
