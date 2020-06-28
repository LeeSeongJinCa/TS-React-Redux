import React, { Dispatch } from 'react';
import { TodoTable } from '../../components';
import { IInputsType } from '../../static/todoForm';

interface Props {
  todoState: IInputsType;
  todoDispatch: Dispatch<IInputsType>;
}

const TodoMainContainer: React.FC<Props> = ({
  todoState,
  todoDispatch,
}) => {
  return (
    <TodoTable todoState={todoState} todoDispatch={todoDispatch} />
  );
};

export default TodoMainContainer;
