import styled from 'styled-components';
import { globalColor } from '../../GlobalStyle';

export const TodoAddButtonWrap = styled.div`
  padding: 24px;
`;

export const TodoAddButton = styled.button`
  display: block;
  width: 100%;
  padding: 16px 24px;
  border-radius: 8px;
  font-size: 18px;
  color: white;
  background-color: ${globalColor};
  box-shadow: 0 2px 3px #202020;
`;
