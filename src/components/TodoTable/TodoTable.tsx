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
    return todoInputList.map(({ id }: IInputs, i) =>
      <TodoTableRow
        key={id}
        type="text"
        id={id}
        todoState={todoState}
        todoDispatch={todoDispatch}
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
      <input type="date" name="date" id="date" /> {/* "2020-06-20" */}
      <input type="time" name="time" id="time" /> {/* "22:41" */}
      {/* new Date(`${d} ${t}`); */}
    </S.TodoInputTable>
  );
};

export default TodoTable;
