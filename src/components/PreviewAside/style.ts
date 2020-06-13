import styled from "styled-components";
import {
  globalColor,
  globalComplementaryBackColor,
  globalComplementaryColor,
} from '../../GlobalStyle';

export const MainHeaderPreviewAside = styled.aside`
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
`;

export const MainHeaderPreviewAsideBox = styled.div`
  flex: 1;
`;

export const MainHeaderPreviewAsideSummary = styled.div`
  flex: 1;
  display: flex;
  align-self: center;
  justify-content: space-around;
  margin-bottom: 24px;
`;

export const MainHeaderPreviewAsideDone = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MainHeaderPreviewAsideSvg = styled.svg`
  width: 50px;
  height: 50px;
  margin-right: 24px;
`;

export const MainHeaderPreviewAsideCircle = styled.circle`
  width: 100%;
  height: 100%;
  fill: none;
  stroke-width: 3px;
  stroke-linecap: round;
  &:nth-child(1) {
    stroke: ${globalComplementaryColor};
  }
  &:nth-child(2) {
    stroke: ${globalComplementaryBackColor};
    stroke-dasharray: 320;
    stroke-dashoffset: calc(440 - (440 * 50) / 100);
    z-index: 100;
  }
`;
