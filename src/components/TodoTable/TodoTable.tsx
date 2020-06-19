import React, { useMemo, Dispatch } from 'react';
import * as S from './style';
import {
  TodoTableRow,
  TodoTableType,
} from '../../components';
import {
  todoInputList,
  IInputs,
  IInputsType,
} from '../../static/todoForm';
import axios from 'axios';

interface Props {
  todoState: IInputsType;
  todoDispatch: Dispatch<IInputsType>;
}

const TodoTable: React.FC<Props> = ({
  todoState,
  todoDispatch,
}) => {
  const tableRows: React.ReactElement[] = useMemo(() => {
    return todoInputList.map((row: IInputs, i) =>
      <TodoTableRow
        key={i}
        type={row.type}
        placeholder={row.id}
        data-id={row.id}
      />,
    );
  }, []);

  return (
    <S.TodoInputTable>
      <TodoTableType
        todoState={todoState}
        todoDispatch={todoDispatch}
      />
      {tableRows}
    </S.TodoInputTable>
  );
};

export default TodoTable;
