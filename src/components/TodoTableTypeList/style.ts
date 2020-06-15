import styled from 'styled-components';
import {
  globalButtonColor,
  globalComplementaryColor,
} from '../../GlobalStyle';

export const TodoInputTableRowSeletedList = styled.ul`
  display: none;
  padding: 0 16px;
  &.spread {
    display: block;
  }
`;

export const TodoInputTableRowSeletedItem = styled.li`
  padding: 4px;
  color: ${globalComplementaryColor};
  transition: 0.8s;
  cursor: pointer;
  &:hover { color: ${globalButtonColor}; }
`;
