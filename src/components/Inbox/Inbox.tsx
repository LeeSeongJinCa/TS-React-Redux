import * as React from 'react';
import * as S from './style';

interface Props {
  inputList: React.ReactElement;
  inboxBottom: React.ReactElement;
}

const Inbox: React.FC<Props> = ({ inputList, inboxBottom }) => {
  return (
    <S.Inbox>
      <S.InboxTitle>목록</S.InboxTitle>
      {inputList}
      {inboxBottom}
    </S.Inbox>
  );
};

export default Inbox;
