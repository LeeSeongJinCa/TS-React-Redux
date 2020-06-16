import React, { useMemo } from 'react';
import * as S from './style';
import {
  TodoTableRow,
  TodoTableType,
} from '../../components';

interface Props {
  selectList: ISelectList[];
  onClickSelectedType: any;
  isSpreadOut: boolean;
  selectedType: string;
  setSpreadOut: any;
  inputs: IInputs[];
}

interface IInputs {
  type: string;
  placeholder: string;
}

interface ISelectList {
  type: string;
  key: number;
  base64: string;
}

const TodoTable: React.FC<Props> = ({
  inputs,
  selectList,
  isSpreadOut,
  setSpreadOut,
  selectedType,
  onClickSelectedType,
}) => {
  const tableRows: React.ReactElement[] = useMemo(() => {
    return inputs.map((row, i) =>
      <TodoTableRow
        key={i}
        type={row.type}
        placeholder={row.placeholder}
      />,
    );
  }, []);

  return (
    <S.TodoInputTable>
      <TodoTableType
        isSpreadOut={isSpreadOut}
        selectedType={selectedType}
        setSpreadOut={setSpreadOut}
        onClickSelectedType={onClickSelectedType}
        selectList={selectList}
      />
      {tableRows}
    </S.TodoInputTable>
  );
};

export default TodoTable;
