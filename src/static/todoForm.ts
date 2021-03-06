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
  content: string;
  createdDateTime: string;
  id: number;
  isComplete: boolean;
}

export const todoInputList: IInputs[] = [
  {
    id: 'thing',
  },
  {
    id: 'notification',
  },
];
