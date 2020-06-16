import styled from 'styled-components';
import {
  globalButtonColor,
  globalComplementaryColor,
} from '../../GlobalStyle';

export const Todo = styled.section``;

export const TodoTableTypeSeletedItem = styled.li`
  padding: 4px;
  color: ${globalComplementaryColor};
  transition: 0.8s;
  cursor: pointer;
  &:hover { color: ${globalButtonColor}; }
`;
