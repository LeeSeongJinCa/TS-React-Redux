import styled, { AnyStyledComponent } from 'styled-components';
import {
  globalButtonColor,
  globalColor,
} from '../../GlobalStyle';

export const InboxInput = styled.li`
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
  flex-grow: 1;
  width: 400px;
`;

const returnStyleComp = (el: AnyStyledComponent, style: string) => styled(el)`${style}`;

const InboxInputInfoTextsStyle = `
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const InboxInputInfoTextH3 =
  returnStyleComp(('h3' as AnyStyledComponent), InboxInputInfoTextsStyle);
export const InboxInputInfoTextP =
  returnStyleComp(('p' as AnyStyledComponent), InboxInputInfoTextsStyle);

export const InboxInputUntil = styled.div`
  text-align: right;
`;

export const InboxInputUntilEnd = styled.p``;

export const InboxInputUntilDeleteImg = styled.img`
  display: inline-block;
  width: 24px;
  height: 24px;
  margin-top: 8px;
`;
