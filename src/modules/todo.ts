import { ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { ScheduleState } from './schedule';
import { GetIInput, IInputsType } from '../static/todoForm';
import { apiGetTodo, apiPostTodo, apiDeleteTodo } from '../utils';

export const INITTODO = 'INITTODO' as const;
export const LODINGTODO = 'LODINGTODO' as const;
export const ADDTODO = 'ADDTODO' as const;
export const DELETETODO = 'DELETETODO' as const;

export const initTodo = (inputs: GetIInput[]) => ({
  type: INITTODO,
  payload: { inputs },
});
export const lodingTodo = () => ({
  type: LODINGTODO,
});
export const addTodo = (input: GetIInput) => ({
  type: ADDTODO,
  payload: { input },
});
export const deleteTodo = (_id: string) => ({
  type: DELETETODO,
  payload: { _id },
});

type TodoAction =
  | ReturnType<typeof initTodo>
  | ReturnType<typeof lodingTodo>
  | ReturnType<typeof addTodo>
  | ReturnType<typeof deleteTodo>;

export type TodoState = {
  inputs: GetIInput[];
  loading: boolean;
};

const initialState: TodoState = {
  inputs: [],
  loading: true,
};

export const fetchInitTodo: ActionCreator<ThunkAction<
  Promise<void>,
  TodoState,
  null,
  TodoAction
>> = () => async (dispatch) => {
  dispatch(lodingTodo());
  try {
    const res = await apiGetTodo();
    dispatch(initTodo(res.data));
  } catch (err) {
    throw err;
  }
};

export const addTodoThunk: ActionCreator<ThunkAction<
  Promise<void>,
  TodoState,
  null,
  TodoAction
>> = (todoState: IInputsType, schedule: ScheduleState) => async (dispatch) => {
  try {
    const res = await apiPostTodo(todoState, schedule);
    dispatch(addTodo(res.data));
  } catch (err) {
    throw err;
  }
};

export const deleteTodoThunk: ActionCreator<ThunkAction<
  Promise<void>,
  TodoState,
  null,
  TodoAction
>> = (_id: string) => async (dispatch) => {
  try {
    await apiDeleteTodo(_id);
    dispatch(deleteTodo(_id));
  } catch (err) {
    throw err;
  }
};

const todo = (state = initialState, action: TodoAction): TodoState => {
  switch (action.type) {
    case INITTODO:
      return { ...state, inputs: action.payload.inputs, loading: false };
    case LODINGTODO:
      return { ...state, loading: true };
    case ADDTODO:
      const copy = [...state.inputs];
      copy.push(action.payload.input);
      return { ...state, inputs: copy };
    case DELETETODO:
      return {
        ...state,
        inputs: state.inputs.filter((o: GetIInput) => o._id !== action.payload._id),
      };
    default:
      return state;
  }
};

export default todo;
