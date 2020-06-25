import React, { useReducer, Dispatch } from 'react';
import { TodoTable } from '../../components';
import { IInputsType } from '../../static/todoForm';
import * as actions from '../../modules/counter';

interface Props {}

const todoInitialState: IInputsType = {
  type: '',
  typing: 'not',
  thing: '',
  time: 0,
  notification: '',
};

const todoInputReducer = (state: IInputsType, action: any) => {
  switch (action.type) {
    case 'typing':
      return { ...state, typing: action.typing };
    case 'thing':
      return { ...state, thing: action.thing };
    case 'time':
      return { ...state, time: action.time };
    case 'notification':
      return { ...state, notification: action.notification };
    default:
      return state;
  }
};

const mapStateToProps = (state: actions.CounterState) => ({
  number: state.number,
});

const increment = () => ({
  type: actions.INCREMENT,
});
const decrement = () => ({
  type: actions.DECREMENT,
});

const mapDispatchToProps = (dispatch: (fn: any) => any) => ({
  onIncrement: () => dispatch(increment()),
  onDecrement: () => dispatch(decrement()),
});

const TodoMainContainer: React.FC<Props> = () => {
  const [todoState, todoDispatch]: [
    IInputsType,
    Dispatch<IInputsType>,
  ] = useReducer(todoInputReducer, todoInitialState);

  return <TodoTable todoState={todoState} todoDispatch={todoDispatch} />;
};

export default TodoMainContainer;
