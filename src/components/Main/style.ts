import styled from 'styled-components';
import {
  globalBackColor,
  globalButtonColor,
  globalColor,
  globalComplementaryColor,
  globalComplementaryBackColor,
} from '../../GlobalStyle';

export const Main = styled.div`
  box-shadow: 3px 3px 10px #777777;
  span { color: #b6b6b6; }
  > #inbox {
    padding: 24px;
    > h3 {
      margin-bottom: 12px;
      color: ${globalColor};
    }
    > ul {
      max-height: 320px;
      overflow-y: scroll;
      &::-webkit-scrollbar {
        width: 5px;
        background: none;
      }
      &::-webkit-scrollbar-thumb {
        background: ${globalComplementaryColor};
        border-radius: 16px;
      }
      &::-webkit-scrollbar-track {
        background: ${globalComplementaryBackColor};
      }
      > li {
        display: flex;
        height: 80px;
        padding: 16px 8px;
        border-bottom: 1.5px solid ${globalColor};
        > .img-wrap {
          display: flex;
          align-items: center;
          margin-right: 12px;
          > img {
            display: inline-block;
            width: 45px;
            height: 45px;
            padding: 8px;
            border: 1px solid ${globalButtonColor};
            border-radius: 50%;
          }
        }
        > .info {
          width: 80%;
          > h3, p {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
        > .until {
          text-align: center;
          width: 10%;
        }
      }
    }
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
  }
`;

export const MainHeader = styled.header`
  position: relative;
  height: 250px;
  padding: 24px;
  color: white;
  background-color: ${globalBackColor};
`;
