import styled from 'styled-components';
import {
  globalButtonColor,
  globalComplementaryColor,
} from '../../GlobalStyle';

export const TodoInputTableRowSeletedType = styled.span`
  display: block;
  padding: 8px 16px;
  font-size: 20px;
  color: ${globalComplementaryColor};
  transition: 0.8s;
  cursor: pointer;
  &:hover { color: ${globalButtonColor}; }
`;
