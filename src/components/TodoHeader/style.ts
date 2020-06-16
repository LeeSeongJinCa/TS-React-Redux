import styled from 'styled-components';
import {
  globalBackColor,
  globalComplementaryBackColor,
} from '../../GlobalStyle';

export const TodoHeader = styled.header`
  padding: 24px;
  background-color: ${globalBackColor};
  box-shadow: 0 3px 5px #777777;
`;

export const TodoHeaderNav = styled.nav`
  display: flex;
  align-items: center;
`;

export const TodoHeaderNavImg = styled.img`
  width: 32px;
  height: 32px;
`;

export const TodoHeaderNavTiitle = styled.h2`
  margin: auto;
  color: white;
`;
