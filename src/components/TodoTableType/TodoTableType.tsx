import React from 'react';
import {
  TodoTableTypeInput,
  TodoTableTypeList,
} from '../../components';
import * as S from '../TodoTableRow/style';

interface Props {
  isSpreadOut: any;
  selectedType: any;
  getSelectList: any;
  setSpreadOut: any;
}

const TodoTableType: React.FC<Props> = ({
  isSpreadOut,
  selectedType,
  getSelectList,
  setSpreadOut,
}) => {
  return (
    <S.TodoInputTableRow>
      <TodoTableTypeInput
        isSpreadOut={isSpreadOut}
        selectedType={selectedType}
        setSpreadOut={setSpreadOut}
      />
      <TodoTableTypeList
        isSpreadOut={isSpreadOut}
        getSelectList={getSelectList}
      />
    </S.TodoInputTableRow>
  );
};

export default TodoTableType;
