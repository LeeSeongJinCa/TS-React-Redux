import React from 'react';
import * as S from './style';

interface Props {
  isSpreadOut: boolean;
  getSelectList: React.ReactElement[];
}

const TodoTableTypeList: React.FC<Props> = ({ isSpreadOut, getSelectList }) => {
  return (
    <S.TodoInputTableRowSeletedList className={isSpreadOut ? 'spread' : ''}>
      {getSelectList}
    </S.TodoInputTableRowSeletedList>
  );
};

export default TodoTableTypeList;
