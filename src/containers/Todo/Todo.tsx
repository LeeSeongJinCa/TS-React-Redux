import React, { useReducer, Dispatch, useState, SetStateAction } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import { IInputsType } from '../../static/todoForm';
import { setReset, setResetThunk } from '../../modules/schedule';
import { StoreState } from '../../modules';
import { URL } from '../../static/server';
import { Todo } from '../../components';
import {
  TodoHeaderContainer,
  TodoMainContainer,
  TodoAddButtonContainer,
  CalendarContainer,
} from '../../containers';

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
  const history = useHistory();
  const schedule = useSelector((state: StoreState) => state.schedule);
  const dispatch = useDispatch();
  const [todoState, todoDispatch]: [
    IInputsType,
    Dispatch<IInputsType>,
  ] = useReducer(todoInputReducer, todoInitialState);
  const [notCompleted, setNotCompleted] = useState<string>('');

  const postTodo = async () => {
    const { thing, typing, notification } = todoState;
    const { startDate, endDate } = schedule;

    if (!(typing !== 'not' && thing && notification && startDate && endDate)) {
      // Todo: Check 함수 => 안 된 부분 작은 팝업 띄어서 보여주기
      return;
    }

    try {
      await axios.post(`${URL}/todos`, {
        thing,
        notification,
        startDate: new Date(startDate).getTime(),
        endDate: new Date(endDate).getTime(),
        type: typing,
      });
      dispatch(setResetThunk(setReset));
      history.push('/');
    } catch (err) {
      console.log(err);
    }
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
