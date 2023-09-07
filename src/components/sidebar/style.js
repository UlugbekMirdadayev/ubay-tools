import styled from "styled-components";

export const SideabarStyled = styled.article`
  width: 17vw;
  margin-right: 2.4479166666666665vw;
  border-right: 0.052083333333333336vw solid #e2e2e2;
  border-top: 0.052083333333333336vw solid #e2e2e2;
  position: fixed;
  top: 9vw;
  max-height: calc(100vh - 9vw);
  &.mobile-sidebar {
    display: none;
    @media only screen and (max-width: 768px) {
      display: block;
    }
  }
  @media only screen and (max-width: 768px) {
    &.pc-header {
      display: none;
    }
    width: 100%;
    z-index: 102;
    background-color: #fff;
    left: -100%;
    top: 0;
    transition: 300ms ease;

    &.opened {
      left: 0;
      max-height: none;
    }
  }

  .title-c {
    padding: 1.1979166666666667vw 2.5vw;
    border-bottom: 0.052083333333333336vw solid #e2e2e2;
    font-size: 0.9375vw;
    svg {
      display: none;
      @media only screen and (max-width: 768px) {
        display: block;
        width: 5vw;
        height: 5vw;
      }
    }
    @media only screen and (max-width: 768px) {
      font-size: 5vw;
      margin-bottom: 4vw;
      border-width: 0.5vw;
      padding: 4vw;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 3vw;
      line-height: 5vw;
    }
  }
  &:has(.isLoading) {
    cursor: progress;
  }
  ul {
    padding: 1.1979166666666667vw 2.5vw;
    overflow-y: auto;
    height: calc(100vh - 14vw);
    &.isLoading {
      pointer-events: none;
    }
    @media only screen and (max-width: 768px) {
      background-color: #fff;
      height: 87vh;
      padding: 0 4vw;
    }

    a {
      color: #000;
      font-size: 1vw;
      padding: 0.5vw;
      font-weight: 500;
      display: flex;
      &:not(.sub_category){
        &.active{
          color: #1d2f77;
          font-weight: 700;
        }
      }
      &.sub_category {
        &.active {
          background-color: #1d59d1;
          color: #fff;
          border-radius: 0.5vw;
        }
        margin-left: 1vw;
        color: #1d2f77;
        font-weight: 400;
        @media only screen and (max-width: 768px) {
          margin-left: 5vw;
          padding: 1vw;
        }
      }
      @media only screen and (max-width: 768px) {
        font-size: 4vw;
        padding: 2vw;
      }
    }
  }
  .mobile_bar {
    display: none;
    @media only screen and (max-width: 768px) {
      position: sticky;
      bottom: 0;
      z-index: 5;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 5vw 4vw;
      background-color: #fff;
      border-radius: 2.600216684723727vw;
      /* box-shadow: 0px -2.1668472372697725vw 3.2502708559046587vw -4.333694474539545vw
        #1d2f77; */

      .box {
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 0.2604166666666667vw;
        padding: 0.4166666666666667vw 0.8333333333333334vw;
        transition: 200ms ease;
        border-radius: 4px;
        .icon {
          position: relative;
          display: inline-flex;
          svg {
            width: 5.597964376590331vw;
            height: 5.597964376590331vw;
          }
          span {
            position: absolute;
            top: -50%;
            right: -50%;
            width: 5.089058524173028vw;
            height: 5.089058524173028vw;
            font-size: 2vw;
            border-radius: 50%;
            background: #1d2f77;
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
      }
    }
  }
`;
