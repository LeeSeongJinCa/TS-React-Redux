import styled from 'styled-components';
import {
  globalBackColor,
} from '../../GlobalStyle';

export const InboxBottom = styled.div`
  position: relative;
`;

export const InboxBottomCompleted = styled.div`
  display: inline-block;
  margin-top: 12px;
  font-size: 14px;
`;

export const InboxBottomCompletedNum = styled.span`
  display: inline-block;
  width: 25px;
  height: 25px;
  margin-left: 12px;
  line-height: 25px;
  text-align: center;
  border-radius: 50%;
  color: white !important;
  background-color: ${globalBackColor};
`;

export const InboxBottomPlus = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  width: 45px;
  height: 45px;
  transform: rotateY(180deg);
`;
