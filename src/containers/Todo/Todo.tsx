import React, { useReducer, Dispatch } from 'react';
import { IInputsType } from '../../static/todoForm';
import {
  Todo,
} from '../../components';
import {
  TodoHeaderContainer,
  TodoMainContainer,
  TodoAddButtonContainer,
  CalendarContainer,
} from '../../containers';
import { useSelector } from 'react-redux';
import { StoreState } from '../../modules';
import axios from 'axios';
import { URL } from '../../static/server';

interface Props { }

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

const TodoContainer: React.FC<Props> = () => {
  const schedule = useSelector((state: StoreState) => state.schedule);
  const [todoState, todoDispatch]: [
    IInputsType,
    Dispatch<IInputsType>,
  ] = useReducer(todoInputReducer, todoInitialState);

  const postTodo = () => {
    const { thing, typing, notification } = todoState;
    const { startDate, endDate } = schedule;

    if (!(typing !== 'not' && thing && notification && startDate && endDate)) {
      console.log('no');
      return;
    }

    axios.post(`${URL}/todos`, {
      data: {
        thing,
        notification,
        startDate,
        endDate,
        type: typing,
      },
    }).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    });
  };

  return (
    <Todo>
      <TodoHeaderContainer />
      <TodoMainContainer todoState={todoState} todoDispatch={todoDispatch} />
      <CalendarContainer />
      <TodoAddButtonContainer postTodo={postTodo} />
    </Todo>
  );
};

export default TodoContainer;
