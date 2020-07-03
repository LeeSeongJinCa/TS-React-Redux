import styled from 'styled-components';

import {
  globalComplementaryBackColor,
  globalComplementaryColor,
} from '../../GlobalStyle';

interface IProgress {
  progress?: number;
}

export const MainHeaderPreviewAsideSvg = styled.svg`
  width: 100%;
  height: 50px;
`;

export const MainHeaderPreviewAsideCircle = styled.circle`
  width: 100%;
  height: 100%;
  fill: none;
  stroke-width: 3px;
  stroke-linecap: round;
  transition: 3s;
  &:nth-child(1) {
    stroke: ${globalComplementaryColor};
  }
  &:nth-child(2) {
    stroke: ${globalComplementaryBackColor};
    stroke-dasharray: ${({ progress }: IProgress) =>
      (progress / 123) * 100 + 220};
    stroke-dashoffset: calc(440 - (440 * 50) / 100);
    z-index: 100;
  }
`;
