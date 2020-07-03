import { GetIInput } from '../static/todoForm';
import { ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';

export const SETTODO = 'SETTODO' as const;

export const setTodos = (inputs: GetIInput[]) => ({
  type: SETTODO,
  payload: { inputs },
});

type TodoAction =
  | ReturnType<typeof setTodos>;

export type TodoState = {
  inputs: GetIInput[];
};

const initialState: TodoState = {
  inputs: [],
};

export const setTodoThunk: ActionCreator<ThunkAction<
  TodoAction,
  TodoState,
  void,
  any
>> = (inputs: GetIInput[], setFn: (inputs: GetIInput[]) => TodoAction) => (dispatch) => {
  return dispatch(setFn(inputs));
};

const todo = (state = initialState, action: TodoAction): TodoState => {
  switch (action.type) {
    case SETTODO:
      return {
        ...state,
        inputs: action.payload.inputs,
      };
    default:
      return state;
  }
};

export default todo;
