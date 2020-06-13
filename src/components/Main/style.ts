import styled from "styled-components";
import { globalColor, globalBackColor, globalComplementaryBackColor, globalComplementaryColor } from "../../GlobalStyle";

export const Main = styled.div` 
  > header {
    position: relative;
    height: 250px;
    padding: 24px;
    color: white;
    background-color: ${globalBackColor};
    /* background-image: url();
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover; */
    span {
      color: #b6b6b6;
    }
    > #right {
      position: absolute;
      top: 0;
      right: 0;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      width: 30%;
      height: 100%;
      padding: 24px;
      text-align: center;
      background-color: #4f4f4f4d;
      box-shadow: -2px 3px 5px ${globalColor};
      > div {
        flex: 1;
      }
      #right-summary {
        flex: 1;
        display: flex;
        align-self: center;
        justify-content: space-around;
        margin-bottom: 24px;
      }
      #right-done {
        display: flex;
        align-items: center;
        justify-content: center;
        svg {
          width: 50px;
          height: 50px;
          margin-right: 24px;
          circle {
            width: 100%;
            height: 100%;
            fill: none;
            stroke-width: 3px;
            stroke-linecap: round;
          }
          circle:first-child {
              stroke: ${globalComplementaryColor};
          }
          circle:nth-child(2) {
              stroke: ${globalComplementaryBackColor};
              stroke-dasharray: 320;
              stroke-dashoffset: calc(440 - (440 * 50) / 100);
              z-index: 100;
          }
        }
      }
    }
  }
`;