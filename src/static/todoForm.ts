export interface IInputs {
  id: string;
}

export interface IInputsType {
  type: string;
  typing?: string;
  thing?: string;
  notification?: string;
}

export const todoInputList: IInputs[] = [
  {
    id: 'thing',
  }, {
    id: 'notification',
  },
];
