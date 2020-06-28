import React, {
  Dispatch,
  ChangeEvent,
} from 'react';
import * as S from './style';
import { IInputsType } from '../../static/todoForm';

interface Props {
  type: string;
  id: string;
  todoState: IInputsType;
  todoDispatch: Dispatch<IInputsType>;
}

const TodoTableRowInput: React.FC<Props> = ({
  type,
  id,
  todoState,
  todoDispatch,
}) => {
  const onChangeTodo = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    todoDispatch({ type: id, [id]: value });
  };

  return (
    <S.TodoInputTableRowInput
      onChange={onChangeTodo}
      type={type}
      placeholder={id}
      value={todoState[id]}
    />
  );
};

export default TodoTableRowInput;
