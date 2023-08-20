import styled from "styled-components";

export const ScrollAreaView = styled.div`
  width: 80vw;
  margin-left: auto;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const HomeStyled = styled.main`
  display: flex;
  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 0 4.071246819338422vw;
  }
`;

export default HomeStyled;
