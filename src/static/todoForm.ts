export interface IInputs {
  id: string;
}

export interface IInputsType {
  type: string;
  typing?: string;
  thing?: string;
  time?: string;
  notification?: string;
}

export const todoInputList: IInputs[] = [
  {
    id: 'thing',
  }, {
    id: 'time',
  }, {
    id: 'notification',
  },
];
