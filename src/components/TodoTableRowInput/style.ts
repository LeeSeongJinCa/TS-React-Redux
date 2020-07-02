import styled from 'styled-components';
import {
  globalComplementaryBackColor,
  globalButtonColor,
} from '../../GlobalStyle';

export const TodoInputTableRowInput = styled.input`
  width: 100%;
  padding: 8px 16px;
  border: 0;
  font-size: 20px;
  background-color: transparent;
  &::placeholder { color: ${globalComplementaryBackColor}; }
  &:hover::placeholder {
    transition: 0.5s;
    color: ${globalButtonColor};
  }
  &:focus::placeholder { color: #88abee; }
`;
