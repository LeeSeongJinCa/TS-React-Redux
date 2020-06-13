import styled from 'styled-components';
import {
  globalButtonColor,
  globalColor,
} from '../../GlobalStyle';

export const InboxInput = styled.ul`
  display: flex;
  height: 80px;
  padding: 16px 8px;
  border-bottom: 1.5px solid ${globalColor};
`;

export const InboxInputImgWrap = styled.div`
  display: flex;
  align-items: center;
  margin-right: 12px;
`;

export const InboxInputImg = styled.img`
  display: inline-block;
  width: 45px;
  height: 45px;
  padding: 8px;
  border: 1px solid ${globalButtonColor};
  border-radius: 50%;
`;

export const InboxInputInfo = styled.div`
  width: 80%;
  h3, p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const InboxInputUntil = styled.div`
  text-align: center;
  width: 10%;
`;
