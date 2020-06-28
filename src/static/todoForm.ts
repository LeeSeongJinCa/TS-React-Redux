export interface IInputs {
  id: string;
}

export interface IInputsType {
  type: string;
  typing?: string;
  thing?: string;
  startDate?: number;
  endDate?: number;
  notification?: string;
}

export const todoInputList: IInputs[] = [
  {
    id: 'thing',
  }, {
    id: 'notification',
  },
];
