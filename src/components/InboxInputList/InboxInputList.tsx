import React from 'react';
import * as S from './style';

interface Props {
  inputList: React.ReactElement[];
}

const InboxInputList: React.FC<Props> = ({ inputList }) => {
  return (
    <S.InboxInputList>
      {inputList}
    </S.InboxInputList>
  );
};

export default InboxInputList;
