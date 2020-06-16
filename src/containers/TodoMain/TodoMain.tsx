import React from 'react';
import { TodoTable } from '../../components';

interface Props {
  selectList: ISelectList[];
  onClickSelectedType: any;
  isSpreadOut: boolean;
  selectedType: string;
  setSpreadOut: any;
}

interface ISelectList {
  type: string;
  key: number;
  base64: string;
}

const TodoMainContainer: React.FC<Props> = ({
  selectList,
  onClickSelectedType,
  isSpreadOut,
  selectedType,
  setSpreadOut,
}) => {
  const todoInputList = [
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

  return (<TodoTable
    inputs={todoInputList}
    selectList={selectList}
    onClickSelectedType={onClickSelectedType}
    isSpreadOut={isSpreadOut}
    selectedType={selectedType}
    setSpreadOut={setSpreadOut}
  />);
};

export default TodoMainContainer;
