import styled from 'styled-components';
import {
  globalBackColor,
} from '../../GlobalStyle';

export const Main = styled.div`
  box-shadow: 3px 3px 10px #777777;
  margin-bottom: 50px;
  span { color: #b6b6b6; }
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

export const MainHeader = styled.header`
  position: relative;
  height: 250px;
  padding: 24px;
  color: white;
  background-color: ${globalBackColor};
`;
