import { combineReducers } from 'redux';
import schedule, { ScheduleState } from './schedule';
import todo, { TodoState } from './todo';
import movie, { MovieState } from './movie';

export interface StoreState {
  schedule: ScheduleState;
  todo: TodoState;
  movie: MovieState;
}

export default combineReducers<StoreState>({ schedule, todo, movie });
