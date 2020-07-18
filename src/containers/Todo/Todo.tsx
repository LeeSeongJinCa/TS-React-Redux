import React, { useReducer, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { IInputsType } from '../../static/todoForm';
import { StoreState } from '../../modules';
import { addTodoThunk } from '../../modules/todo';
import { setScheduleResetThunk, ScheduleState } from '../../modules/schedule';
import { Todo } from '../../components';
import {
  TodoHeaderContainer,
  TodoMainContainer,
  TodoAddButtonContainer,
  CalendarContainer,
} from '../../containers';
import { toast } from 'react-toastify';

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

const WarningWrap: React.FC = () => {
  return (
    <div>
      <p>There is something problem to add new thing.</p>
      <p>Plz check whole inputs and date</p>
    </div>
  );
};

const TodoContainer: React.FC<Props> = () => {
  const history = useHistory();
  const schedule = useSelector((state: StoreState) => state.schedule);
  const dispatch = useDispatch();
  const [todoState, todoDispatch] = useReducer(
    todoInputReducer,
    todoInitialState,
  );

  const successToast = () => {
    toast.success('Success to add new thing', {
      position: 'top-right',
      autoClose: 2000,
    });
  };
  const failToast = () => {
    toast.error('Fail to add new thing', {
      position: 'top-right',
      autoClose: 2000,
    });
  };
  const warningToast = () => {
    toast.warning(<WarningWrap />, {
      position: 'top-right',
      autoClose: 5000,
    });
  };

  const isProblemMakeTodo = (
    { thing, typing, notification }: IInputsType,
    { startDate, endDate }: ScheduleState,
  ) => typing !== 'not' && thing && notification && startDate && endDate;

  const postTodo = useCallback(async () => {
    if (!isProblemMakeTodo(todoState, schedule)) {
      warningToast();
      return;
    }

    try {
      dispatch(addTodoThunk(todoState, schedule));
      successToast();
      history.push('/');
    } catch (err) {
      failToast();
    }
  }, [todoState, schedule]);

  useEffect(() => {
    return () => {
      dispatch(setScheduleResetThunk());
    };
  }, []);

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
