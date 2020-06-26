import { combineReducers } from 'redux';
import schedule, { ScheduleState } from './schedule';

export interface StoreState {
  schedule: ScheduleState;
}

export default combineReducers<StoreState>({ schedule });
