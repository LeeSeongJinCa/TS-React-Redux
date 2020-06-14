import * as React from 'react';
import * as S from './style';
import InboxInputList from '../InboxInputList/InboxInputList';
import InboxBottom from '../InboxBottom/InboxBottom';

interface Props { }

const Inbox: React.FC<Props> = () => {
  return (
    <S.Inbox>
      <S.InboxTitle>목록</S.InboxTitle>
      <InboxInputList />
      <InboxBottom />
    </S.Inbox>
  );
};

export default Inbox;
