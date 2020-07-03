import { combineReducers } from 'redux';
import schedule, { ScheduleState } from './schedule';
import todo, { TodoState } from './todo';

export interface StoreState {
  schedule: ScheduleState;
  todo: TodoState;
}

export default combineReducers<StoreState>({ schedule, todo });
