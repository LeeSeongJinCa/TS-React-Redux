import axios from 'axios';

import { IInputsType } from '../static/todoForm';
import { ScheduleState } from '../modules/schedule';

const URL = 'http://localhost:3000';
const apiDefault = axios.create({ baseURL: URL, timeout: 2500 });

export const apiPostTodo = (todoState: IInputsType, schedule: ScheduleState) => {
  const { thing, typing, notification } = todoState;
  const { startDate, endDate } = schedule;

  return apiDefault.post('todos', {
    thing,
    notification,
    startDate: new Date(startDate).getTime(),
    endDate: new Date(endDate).getTime(),
    type: typing,
  });
};

export const apiGetTodo = () => {
  return apiDefault.get('todos');
};

export const apiDeleteTodo = (id: string) => {
  return apiDefault.delete(`todos/${id}`);
};
