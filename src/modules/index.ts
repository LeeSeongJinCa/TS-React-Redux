import { combineReducers } from 'redux';
import counter, { CounterState } from './counter';

export interface StoreState {
  counter: CounterState;
}

export default combineReducers<StoreState>({ counter });
