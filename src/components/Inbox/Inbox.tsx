import * as React from 'react';
import * as S from './style';

interface Props {}

const Inbox: React.FC<Props> = ({ children }) => {
  return (
    <S.Inbox>
      {children}
    </S.Inbox>
  );
};

export default Inbox;
