import { ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';

export const INCREMENT = 'INCREMENT' as const;
export const DECREMENT = 'DECREMENT' as const;

export const setCounterIn = (count: number) => ({
  type: INCREMENT,
  payload: { count },
});
export const setCounterDe = (count: number) => ({
  type: DECREMENT,
  payload: { count },
});

type CounterAction =
  | ReturnType<typeof setCounterIn>
  | ReturnType<typeof setCounterDe>;

export type CounterState = {
  number: number;
};

const initialState: CounterState = {
  number: 0,
};

export const setCounterThunk: ActionCreator<ThunkAction<
  CounterAction,
  CounterState,
  void,
  any
>> = (_number: number, setFn: (count: number) => CounterAction) => (dispatch) => {
  return dispatch(setFn(_number));
};

const counter = (state = initialState, action: CounterAction): CounterState => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        number: state.number + action.payload.count,
      };
    case DECREMENT:
      return {
        ...state,
        number: state.number + action.payload.count,
      };
    default:
      return state;
  }
};

export default counter;
