import styled, { AnyStyledComponent, StyledComponent } from 'styled-components';
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
  width: 400px;
`;

const returnStyleComp = (el, style: string) => styled(el)`${style}`;

const InboxInputInfoTextsStyle = `
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const InboxInputInfoTextH3 = returnStyleComp('h3', InboxInputInfoTextsStyle);
export const InboxInputInfoTextP = returnStyleComp('p', InboxInputInfoTextsStyle);

export const InboxInputUntil = styled.div`
  text-align: center;
`;
