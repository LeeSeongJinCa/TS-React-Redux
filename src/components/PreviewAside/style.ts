import styled from 'styled-components';
import {
  globalColor,
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
  flex-wrap: wrap;
  align-self: center;
  justify-content: space-around;
  margin-bottom: 24px;
`;

export const MainHeaderPreviewAsideCategory = styled.div`
  width: 50%;
  margin-bottom: 8px;
`;

export const MainHeaderPreviewAsideDoneWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const MainHeaderPreviewAsideDoneSvgWrap = styled.div`
  position: relative;
  width: 50%;
`;

export const MainHeaderPreviewAsideDoneSvgPercent = styled.div`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
