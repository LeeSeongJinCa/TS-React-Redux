import styled from 'styled-components';
import {
  globalBackColor,
  globalColor,
} from '../../GlobalStyle';

export const Inbox = styled.section`
  padding: 24px;
  #bottom-wrap {
    position: relative;
    > #completed-wrap {
      display: inline-block;
      margin-top: 12px;
      font-size: 14px;
      > #completed-num {
        display: inline-block;
        width: 25px;
        height: 25px;
        margin-left: 12px;
        line-height: 25px;
        text-align: center;
        border-radius: 50%;
        color: white;
        background-color: ${globalBackColor};
      }
    }
    > img {
      position: absolute;
      top: 0;
      right: 0;
      width: 45px;
      height: 45px;
    }
  }
`;

export const InboxTitle = styled.h3`
  margin-bottom: 12px;
  color: ${globalColor};
`;
