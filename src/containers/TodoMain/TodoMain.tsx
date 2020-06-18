import React, { useReducer, Dispatch } from 'react';
import { TodoTable } from '../../components';
import { IInputsType } from '../../static/todoForm';

interface Props {}

const todoInitialState: IInputsType = {
  type: '',
  thing: '',
  time: 0,
  notification: '',
};

const todoInputReducer = (state, action) => {
  switch (action.type) {
    case 'value':
      return state;
    default:
      return state;
  }
};

const TodoMainContainer: React.FC<Props> = () => {
  const [todoState, todoDispatch]:
    [IInputsType, Dispatch<IInputsType>] = useReducer(
    todoInputReducer,
    todoInitialState,
  );

  return (
    <TodoTable
      todoState={todoState}
      todoDispatch={todoDispatch}
    />
  );
};

export default TodoMainContainer;
