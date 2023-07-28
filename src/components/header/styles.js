import styled from "styled-components";

const HeaderStyled = styled.div`
  nav {
    padding: 0 10vw;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background-color: rgba(1, 92, 207, 1);
    a {
      color: #fff;
      font-size: 1.0416666666666667vw;
      font-style: normal;
      font-weight: 700;
      font-family: "Roboto", sans-serif;
      margin-right: 1.25vw;
    }

    .flex-group {
      display: flex;
      border-right: 0.052083333333333336vw solid rgba(255, 255, 255, 0.3);
      border-left: 0.052083333333333336vw solid rgba(255, 255, 255, 0.3);
      padding: 0.8333333333333334vw 1.4114583333333333vw;
      gap: 1.3541666666666667vw;
      button {
        font-size: 0.79375vw;
        background: none;
        border: 0;
        cursor: pointer;
        color: rgba(255, 255, 255, 0.7);

        &.active {
          color: #fff;
          font-weight: 700;
        }
      }
    }
  }
  .navbar {
    padding: 1.0416666666666667vw 10vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .space {
      display: flex;
      align-items: center;
      margin-right: 7.291666666666667vw;
      .logo {
        &_box {
          display: inline-flex;
        }
        width: 5.625vw;
        height: 1.875vw;
      }

      .search-bar {
        position: relative;
        display: flex;
        align-items: center;
        flex: 1;
        background: #fafafa;
        width: 42.1875vw;
        padding: 0.625vw 0;
        padding-right: 1.3541666666666667vw;
        margin-left: 1.9270833333333333vw;
        input {
          padding: 0 1.25vw;
          flex: 1;
          border: 0;
          background: transparent;
          color: #000;
          font-size: 0.7936458333333333vw;
          &::placeholder {
            color: #999;
          }
        }
        svg {
          width: 0.9895833333333334vw;
          height: 0.9895833333333334vw;
        }
      }
    }
    .between {
      display: flex;
      align-items: center;
      .box {
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 0.2604166666666667vw;
        padding: 0.4166666666666667vw 0.8333333333333334vw;
        transition: 200ms ease;
        border-radius: 4px;
        &.active {
          background-color: rgba(1, 92, 207, 0.1);
        }
        .icon {
          position: relative;
          display: inline-flex;
          svg {
            width: 1.1979166666666667vw;
            height: 1.1979166666666667vw;
          }
          span {
            position: absolute;
            top: -50%;
            right: -50%;
            width: 1vw;
            height: 1vw;
            font-size: 0.5729166666666666vw;
            border-radius: 50%;
            background: #1d2f77;
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
        p {
          font-size: 0.6944270833333334vw;
          color: #111;
          font-weight: 500;
        }
      }
    }
  }
`;

export default HeaderStyled;
