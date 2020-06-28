export interface IInputs {
  id: string;
}

export interface IInputsType {
  type: string;
  typing?: string;
  thing?: string;
  notification?: string;
}

export interface GetIInput {
  _id: string;
  type: string;
  thing: string;
  notification: string;
  startDate: number;
  endDate: number;
}

export const todoInputList: IInputs[] = [
  {
    id: 'thing',
  }, {
    id: 'notification',
  },
];
