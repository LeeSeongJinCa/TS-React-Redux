import styled from 'styled-components';
import { globalBackColor } from '../../GlobalStyle';

export const InboxNoList = styled.div`
  text-align: center;
`;

export const InboxNoListWrap = styled.div`
  width: 30%;
  margin: auto;
  padding: 24px;
  border: 1px solid ${globalBackColor};
  border-radius: 50%;
  cursor: pointer;
`;

export const InboxNoListImg = styled.img`
  width: 100%;
`;

export const InboxNoListText = styled.p`
  margin-top: 24px;
  font-size: 24px;
  font-weight: bold;
`;
