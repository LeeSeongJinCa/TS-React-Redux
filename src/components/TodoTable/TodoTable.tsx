import React, { useMemo } from 'react';
import * as S from './style';
import {
  TodoTableRow,
  TodoTableType,
} from '../../components';
import {
  todoInputList,
  IInputs,
} from '../../static/todoForm';

interface Props {}

const TodoTable: React.FC<Props> = () => {
  const tableRows: React.ReactElement[] = useMemo(() => {
    return todoInputList.map((row: IInputs, i) =>
      <TodoTableRow
        key={i}
        type={row.type}
        placeholder={row.placeholder}
      />,
    );
  }, []);

  return (
    <S.TodoInputTable>
      <TodoTableType />
      {tableRows}
    </S.TodoInputTable>
  );
};

export default TodoTable;
