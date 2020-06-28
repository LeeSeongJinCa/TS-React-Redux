import React from 'react';
import * as S from './style';

interface Props {
  postTodo: () => void;
}

const TodoInputAddButton: React.FC<Props> = ({
  postTodo,
}) => {
  return (
    <S.TodoAddButtonWrap>
      <S.TodoAddButton onClick={postTodo}>ADD YOUR THING</S.TodoAddButton>
    </S.TodoAddButtonWrap>
  );
};

export default TodoInputAddButton;
