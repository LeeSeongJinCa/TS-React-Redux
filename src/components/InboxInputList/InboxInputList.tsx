import * as React from 'react';
import * as S from './style';
import InboxInput from '../InboxInput/InboxInput';

interface Props { }

const InboxInputList: React.FC<Props> = () => {
  return (
    <S.InboxInputList>
      {[...Array(5)].map((_, i) => <InboxInput key={i} />)}
    </S.InboxInputList>
  );
};

export default InboxInputList;
