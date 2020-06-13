import styled from 'styled-components';
import {
  globalBackColor,
  globalButtonColor,
  globalColor,
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
      > li {
        display: flex;
        border-bottom: 1.5px solid ${globalColor};
        padding: 16px 8px;
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
      > div {

      }
      > img {
        position: absolute;
        top: 0;
        right: 0;
        width: 45px;
        height: 45px;
        box-shadow: 0 0 5px ${globalButtonColor};
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
