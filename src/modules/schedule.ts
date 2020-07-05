import { ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';

export const STARTDATE = 'STARTDATE' as const;
export const ENDDATE = 'ENDDATE' as const;
export const RESET = 'RESET' as const;

export const setStartDate = (date: string) => ({
  type: STARTDATE,
  payload: { date },
});
export const setEndDate = (date: string) => ({
  type: ENDDATE,
  payload: { date },
});
export const setScheduleReset = () => ({
  type: RESET,
});

type ScheduleAction =
  | ReturnType<typeof setStartDate>
  | ReturnType<typeof setEndDate>
  | ReturnType<typeof setScheduleReset>;

export type ScheduleState = {
  startDate: string;
  endDate: string;
};

const initialState: ScheduleState = {
  startDate: '',
  endDate: '',
};

export const setScheduleThunk: ActionCreator<ThunkAction<
  ScheduleAction,
  ScheduleState,
  void,
  any
>> = (date: string, setFn: (date: string) => ScheduleAction) => (dispatch) => {
  return dispatch(setFn(date));
};
export const setScheduleResetThunk: ActionCreator<ThunkAction<
  ScheduleAction,
  ScheduleState,
  void,
  any
>> = () => (dispatch) => {
  return dispatch(setScheduleReset());
};

const schedule = (state = initialState, action: ScheduleAction): ScheduleState => {
  switch (action.type) {
    case STARTDATE:
      return {
        ...state,
        startDate: action.payload.date,
      };
    case ENDDATE:
      return {
        ...state,
        endDate: action.payload.date,
      };
    case RESET:
      return {
        ...state,
        ...initialState,
      };
    default:
      return state;
  }
};

export default schedule;
