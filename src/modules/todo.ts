import { ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { ScheduleState } from './schedule';
import { GetIInput, IInputsType } from '../static/todoForm';
import { apiGetTodo, apiPostTodo, apiPutTodo, apiDeleteTodo } from '../utils';

export const INIT_TODO = 'INIT_TODO' as const;
export const LOADING_TODO = 'LOADING_TODO' as const;
export const ADD_TODO = 'ADD_TODO' as const;
export const UPDATE_TODO = 'UPDATE_TODO' as const;
export const DELETE_TODO = 'DELETE_TODO' as const;

export const initTodo = (inputs: GetIInput[]) => ({
  type: INIT_TODO,
  payload: { inputs },
});
export const loadingTodo = () => ({
  type: LOADING_TODO,
});
export const addTodo = (input: GetIInput) => ({
  type: ADD_TODO,
  payload: { input },
});
export const updateTodo = (id: number) => ({
  type: UPDATE_TODO,
  payload: { id },
});
export const deleteTodo = (id: number) => ({
  type: DELETE_TODO,
  payload: { id },
});

type TodoAction =
  | ReturnType<typeof initTodo>
  | ReturnType<typeof loadingTodo>
  | ReturnType<typeof addTodo>
  | ReturnType<typeof updateTodo>
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
  dispatch(loadingTodo());
  try {
    const res = await apiGetTodo();
    console.log(res);
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

export const updateTodoThunk: ActionCreator<ThunkAction<
  Promise<void>,
  TodoState,
  null,
  TodoAction
>> = (id: number) => async (dispatch) => {
  try {
    await apiPutTodo(id);
    dispatch(updateTodo(id));
  } catch (err) {
    throw err;
  }
};

export const deleteTodoThunk: ActionCreator<ThunkAction<
  Promise<void>,
  TodoState,
  null,
  TodoAction
>> = (id: number) => async (dispatch) => {
  try {
    await apiDeleteTodo(id);
    dispatch(deleteTodo(id));
  } catch (err) {
    throw err;
  }
};

const todo = (state = initialState, action: TodoAction): TodoState => {
  switch (action.type) {
    case INIT_TODO:
      return { ...state, inputs: action.payload.inputs, loading: false };
    case LOADING_TODO:
      return { ...state, loading: true };
    case ADD_TODO:
      const copy = [...state.inputs];
      copy.push(action.payload.input);
      return { ...state, inputs: copy };
    case UPDATE_TODO:
      const updateCopy = [...state.inputs];
      updateCopy.forEach((c: GetIInput) =>
        c.id === action.payload.id ? !c.isComplete : c.isComplete,
      );
      return state;
    case DELETE_TODO:
      return {
        ...state,
        inputs: state.inputs.filter(
          (o: GetIInput) => o.id !== action.payload.id,
        ),
      };
    default:
      return state;
  }
};

export default todo;
