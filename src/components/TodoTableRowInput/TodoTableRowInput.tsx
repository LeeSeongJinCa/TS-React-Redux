import React from 'react';
import * as S from './style';

interface Props {
  type: string;
  placeholder: string;
}

const TodoTableRowInput: React.FC<Props> = ({ type, placeholder }) => {
  return <S.TodoInputTableRowInput type={type} placeholder={placeholder} />;
};

export default TodoTableRowInput;
