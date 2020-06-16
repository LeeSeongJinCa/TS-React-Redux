export interface IInputs {
  type: string;
  placeholder: string;
}

export const todoInputList: IInputs[] = [
  {
    type: 'text',
    placeholder: 'Thing',
  }, {
    type: 'text',
    placeholder: 'Place',
  }, {
    type: 'text',
    placeholder: 'Time',
  }, {
    type: 'text',
    placeholder: 'Notification',
  },
];
