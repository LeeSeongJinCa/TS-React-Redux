import React from 'react';
import {
  TodoTableTypeInput,
  TodoTableTypeList,
} from '../../components';
import * as S from '../TodoTableRow/style';

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

const TodoTableType: React.FC<Props> = ({
  isSpreadOut,
  selectedType,
  onClickSelectedType,
  setSpreadOut,
  selectList,
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
        onClickSelectedType={onClickSelectedType}
        selectList={selectList}
      />
    </S.TodoInputTableRow>
  );
};

export default TodoTableType;
