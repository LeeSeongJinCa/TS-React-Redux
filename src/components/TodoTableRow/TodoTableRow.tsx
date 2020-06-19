import React, {
  Dispatch,
} from 'react';
import * as S from './style';
import {
  TodoTableRowInput,
  TodoTableRowImg,
} from '../../components';
import { IInputsType } from '../../static/todoForm';

interface Props {
  type: string;
  id: string;
  todoState: IInputsType;
  todoDispatch: Dispatch<IInputsType>;
}

const TodoTableRow: React.FC<Props> = ({
  type,
  id,
  todoState,
  todoDispatch,
}) => {
  return (
    <S.TodoInputTableRow>
      <TodoTableRowInput
        type={type}
        id={id}
        todoState={todoState}
        todoDispatch={todoDispatch}
      />
      <TodoTableRowImg
        id={id}
        todoDispatch={todoDispatch}
      />
    </S.TodoInputTableRow>
  );
};

export default TodoTableRow;
