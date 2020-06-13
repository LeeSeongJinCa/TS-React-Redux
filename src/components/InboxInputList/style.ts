import styled from 'styled-components';
import {
  globalComplementaryColor,
  globalComplementaryBackColor,
} from '../../GlobalStyle';

export const InboxInputList = styled.ul`
  max-height: 320px;
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
