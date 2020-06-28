import styled from 'styled-components';
import {
  globalColor,
  globalComplementaryColor,
  globalComplementaryBackColor,
} from '../../GlobalStyle';

export const InboxInputList = styled.ul`
  height: 480px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 5px;
    background: none;
    border-radius: 16px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${globalComplementaryColor};
    border-radius: 16px;
  }
  &::-webkit-scrollbar-track {
    background: ${globalComplementaryBackColor};
    border-radius: 16px;
  }
`;

export const InboxTitle = styled.h3`
  margin-bottom: 12px;
  color: ${globalColor};
`;
