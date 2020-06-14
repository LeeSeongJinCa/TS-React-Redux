import React from 'react';
import * as S from './style';

interface Props {

}

const TodoInputAddButton: React.FC<Props> = () => {
  return (
    <S.TodoAddButtonWrap>
      <S.TodoAddButton>ADD YOUR THING</S.TodoAddButton>
    </S.TodoAddButtonWrap>
  );
};

export default TodoInputAddButton;
