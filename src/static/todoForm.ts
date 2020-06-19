export interface IInputs {
  type: string;
  id: string;
}

export interface IInputsType {
  type: string;
  typing?: string;
  thing?: string;
  time?: number;
  notification?: string;
}

export const todoInputList: IInputs[] = [
  {
    type: 'text',
    id: 'thing',
  }, {
    type: 'text',
    id: 'time',
  }, {
    type: 'text',
    id: 'notification',
  },
];
