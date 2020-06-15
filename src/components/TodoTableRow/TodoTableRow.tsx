import React from 'react';
import * as S from './style';
import {
  TodoTableRowInput,
  TodoTableRowImg,
} from '../../components';

interface Props {
  type: string;
  placeholder: string;
}

const TodoTableRow: React.FC<Props> = ({ type, placeholder }) => {
  return (
    <S.TodoInputTableRow>
      <TodoTableRowInput type={type} placeholder={placeholder} />
      <TodoTableRowImg />
    </S.TodoInputTableRow>
  );
};

export default TodoTableRow;
