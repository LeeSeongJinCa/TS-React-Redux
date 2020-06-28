import React, { useReducer, Dispatch } from 'react';
import { TodoTable } from '../../components';
import { IInputsType } from '../../static/todoForm';

interface Props {}

const todoInitialState: IInputsType = {
  type: '',
  typing: 'not',
  thing: '',
  notification: '',
};

const todoInputReducer = (state: IInputsType, action: any) => {
  switch (action.type) {
    case 'typing':
      return { ...state, typing: action.typing };
    case 'thing':
      return { ...state, thing: action.thing };
    case 'notification':
      return { ...state, notification: action.notification };
    default:
      return state;
  }
};

const TodoMainContainer: React.FC<Props> = () => {
  const [todoState, todoDispatch]: [
    IInputsType,
    Dispatch<IInputsType>,
  ] = useReducer(todoInputReducer, todoInitialState);

  return (
    <TodoTable todoState={todoState} todoDispatch={todoDispatch} />
  );
};

export default TodoMainContainer;
