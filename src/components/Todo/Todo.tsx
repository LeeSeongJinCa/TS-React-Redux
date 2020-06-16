import React from 'react';
import * as S from './style';

interface Props {
  selectList: ISelectList[];
  isSpreadOut: any;
  selectedType: any;
  onClickSelectedType: any;
  setSpreadOut: any;
}

interface ISelectList {
  type: string;
  key: number;
  base64: string;
}

const Todo: React.FC<Props> = ({ children }) => {
  return (
    <S.Todo>
      {children}
    </S.Todo>
  );
};

export default Todo;
